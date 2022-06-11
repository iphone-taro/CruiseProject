<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Consts\Consts;
use App\Models\Game;
use App\Models\Access;
use App\Models\Stream;
use DateTime;
class MainController extends Controller
{
    // public const TW_CLIENT_ID
    // public const TW_ACCESS_TOKEN

    //
    //ゲーム一覧取得
    //
    public function getGames() : JsonResponse {
        $retList = DB::table('games')->where('active', true)->orderBy('order', 'desc')->get();
        return response()->json(['retList' => $retList]);
    }

    //
    //配信一覧取得
    //
    public function getStreams(Request $request) : JsonResponse {
        $userId = $request->userId;
        $gameId = $request->gameId;
        if ($gameId == null || $gameId == "") {
            //異常リクエスト
        }
        if ($userId == null || $userId == "") {
            //適当な値を設定
            $randomStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            $userId = "";
            while ($userId == "") {
                for ($i = 0; $i < 20; $i++) {
                    $ch = substr($randomStr, mt_rand(0, strlen($randomStr)), 1);
                    $userId = $userId . $ch;
                }
            }
        }

        //アクセステーブルに挿入
        $data = array("user_id" => $userId,
                    "game_id" => $gameId,
                    "updated_at" => date("Y-m-d H:i:s"));
        $flg = DB::table('accesses')->upsert($data, ['user_id', 'game_id'], ['updated_at']);

        // return response()->json(['status' => "400"]);
        //対象の配信情報を取得
        //ファイルデータ取得
        $filename = $gameId . '.txt';
        $filePath = '../storage/app/public/' . $filename;

        $curArray = array();
        //ファイルが存在するか
        $data = "";
        if (file_exists($filePath)) {
            $data = file_get_contents($filePath);
            $data = json_decode($data, true);  
        }

        //配信していないor無効なゲームID
        if ($data == "") {
            return response()->json(['status' => "400"]);
        }

        return response()->json(['status' => "200", 'data' => $data]);
    }

    public function updateStreams(): JsonResponse {
        $gameList = array();
        $streamList = array();
        $client = new \GuzzleHttp\Client();
        $page = "";

        $loopFlg = true;
        $count = 0;

        $now = strtotime("now");
        $retArray = array();
        while ($loopFlg) {
            $loopFlg = false;
            $url = "https://api.twitch.tv/helix/streams";
            if ($page == "") {
                $params = ['first' => '100',
            'language' => 'ja'];
            } else {
                $params = ['first' => '100',
                        'after' => $page,
                        'language' => 'ja'];
            }
            $headers = ['Client-Id' => Consts::TW_CLIENT_ID,
                        'Authorization' => 'Bearer ' . Consts::TW_ACCESS_TOKEN];
            $response = $client->request(
                'GET',
                $url, // URLを設定
                ['query' => $params, 'headers' => $headers] // パラメーターがあれば設定 ?foo=barの場合は $params = ['foo' => 'bar']
            );

            // レスポンスボディを取得
            $responseBody = $response->getBody();
            $retArray = json_decode($responseBody, true);
            $list = $retArray["data"];

            foreach ($list as $row) {
                //ゲーム情報取得
                $gameId = $row["game_id"];

                if ($gameId != "" && $row["type"] == "live") {
                    //配信リストに追加
                    $stData = array(
                        'user_id' => $row["user_login"],
                        'user_name' => $row["user_name"],
                        'game_id' => $row["game_id"],
                        'title' => $row["title"],
                        'view_count' => $row["viewer_count"],
                        'icon' => $row["thumbnail_url"]                    
                    );
                    if (!isset($streamList[$gameId])) {
                        //新規追加
                        $streamList = $streamList + array($gameId => array($stData));
                    } else {
                        //既存に追加
                        $stList = $streamList[$gameId];
                        array_push($stList, $stData);
                        $streamList[$gameId] = $stList;
                    }
                    // array_push($streamList, $row);

                    //重複チェック
                    $flg = true;
                    for ($i=0; $i < count($gameList); $i++) { 
                        $gId = $gameList[$i]['id'];
                        if ($gId == $gameId) {
                            $flg = false;
                            break;
                        }
                    }
                    if ($flg) {
                        //データが存在しない場合
                        array_push($gameList, array('id' => $gameId, 'order' => 1, 'active' => true, 'icon' => "", 'name' => $row["game_name"]));
                    } else {
                        //データが存在する場合
                        $order = $gameList[$i]["order"];
                        $order++;
                        $gameList[$i]["order"] = $order;
                    }
                }
            }

            if (count($list) != 0) {
                $loopFlg = true;

                if ($retArray["pagination"] != null) {
                    $page = $retArray["pagination"]["cursor"];
                } else {
                    $loopFlg = false;
                }
            }
            $count++;
        }

        array_push($retArray, (strtotime("now") - $now));

        //ゲーム一覧情報を更新
        $flg = DB::table('games')->update(['active' => false]);
        $flg = DB::table('games')->upsert($gameList, ['id'], ['order', 'active']);

        array_push($retArray, (strtotime("now") - $now));

        //スケジュール登録
        $insertList = array();
        foreach ($streamList as  $gameId => $stList) {

            //ファイルデータ取得
            $filename = $gameId . '.txt';
            $filePath = '../storage/app/public/' . $filename;
    
            $curArray = array();
            //ファイルが存在するか
            if (file_exists($filePath)) {
                $curData = file_get_contents($filePath);
                $curArray = json_decode($curData, true);    
            }
    
            //現在時刻
            $curDate = date('Y-m-d-H-i');
            $nextDate = date('Y-m-d-H-i', strtotime("1 minute"));
    
            $curData = null;
            $curId = "";
            if (array_key_exists($curDate, $curArray)) {
                //前回のデータを取得
                $curData = $curArray[$curDate];
                $curId = $curArray[$curDate]["user_id"];
            } else {
                //前の分がない場合
                
                $random = mt_rand(0, count($stList) - 1);
                $stData1 = $stList[intVal($random)];

                $curData = array(
                    "user_id" => $stData1["user_id"],
                    "user_name" => $stData1["user_name"],
                    "title" => $stData1["title"],
                    "view_count" => $stData1["view_count"],
                    "icon" => $stData1["icon"],
                );
                $curId = $stData1["user_id"];
            }
             
            $contents = array();         
            $contents = $contents + array($curDate => $curData);
            
            $stIndex = -1;
            if (count($stList) == 1) {
                $stIndex = 0;
            } else {
                while ($stIndex == -1) {
                    $stIndex = mt_rand(0, count($stList) - 1);
                    $id = $stList[$stIndex]["user_id"];

                    if ($id == $curId) {
                        $stIndex = -1;
                    }
                    
                }
            }
            $stData2 = $stList[intVal($stIndex)];

            $nextData = array(
                "user_id" => $stData2["user_id"],
                "user_name" => $stData2["user_name"],
                "title" => $stData2["title"],
                "view_count" => $stData2["view_count"],
                "icon" => $stData2["icon"],
            );
            $contents = $contents + array("gameName" => $gameId . " " . count($stList));
            $contents = $contents + array($nextDate => $nextData);
            file_put_contents($filePath, json_encode($contents));
        }
        array_push($retArray, (strtotime("now") - $now));

        // $flg = DB::table('streams')->upsert($insertList, ['game_id', 'disp_minute'], ['user_id', 'user_name', 'title', 'view_count', 'icon', 'updated_at']);

        $this->updateGames();
        array_push($retArray, (strtotime("now") - $now));
        return response()->json(['val' => $retArray]);
    }

    //
    //ゲーム情報更新
    //
    public function updateGames() {
        //ゲーム情報を取得
        $gameList = array();
        $client = new \GuzzleHttp\Client();
        $page = "";

        $loopFlg = true;
        while ($loopFlg) {
            $loopFlg = false;
            $url = "https://api.twitch.tv/helix/games/top";
            if ($page == "") {
                $params = ['first' => '100'];
            } else {
                $params = ['first' => '100',
                            'after' => $page];
            }
            $headers = ['Client-Id' => Consts::TW_CLIENT_ID,
                        'Authorization' => 'Bearer ' . Consts::TW_ACCESS_TOKEN];
            $response = $client->request(
                'GET',
                $url, // URLを設定
                ['query' => $params, 'headers' => $headers] // パラメーターがあれば設定 ?foo=barの場合は $params = ['foo' => 'bar']
            );

            // レスポンスボディを取得
            $responseBody = $response->getBody();
            // echo $responseBody;
            $retArray = json_decode($responseBody, true);
            $list = $retArray["data"];
            
            foreach ($list as $row) {
                $rowData = array(
                    'id' => $row['id'],
                    'name' => $row['name'],
                    'icon' => $row['box_art_url'],
                );
                array_push($gameList, $rowData);
            }

            $page = $retArray["pagination"]["cursor"];

            if (count($list) != 0) {
                $loopFlg = true;

                if ($retArray["pagination"] != null) {
                    $page = $retArray["pagination"]["cursor"];
                } else {
                    $loopFlg = false;
                }
            }
        }
        // dd($gameList);

        //ゲーム一覧を更新
        DB::table('games')->upsert($gameList, ['id'], ['name', 'icon']);

        // dd($gameList);
    }
    public function test2() {

    }

    public function test() {
        $result = glob('../storage/app/public/*');
        
        dd($result);
    }
}
