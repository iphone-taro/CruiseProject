<?php

namespace App;
use Illuminate\Support\Facades\DB;
use App\Consts\Consts;
use App\Models\Game;
use DateTime;

class Schedule {

    public function __invoke() {
        echo '開始' . date('Y/m/d H:i:s');
        $gameList = array();
        $streamList = array();
        $client = new \GuzzleHttp\Client();
        $page = "";

        $loopFlg = true;
        $count = 0;

        //アクティブ視聴者取得
        $now = date("Y/m/d H:i:00", strtotime("-5 minute"));
        $activeList = DB::select('
            SELECT
             game_id, 
             COUNT(user_id) as view
            FROM
             accesses 
            WHERE
             updated_at > "' . $now . '"
            GROUP BY
             game_id');
             
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
                        //アクティブ視聴者
                        $view = 0;
                        for ($i=0; $i < count($activeList); $i++) {
                            if ($gameId == $activeList[$i]->game_id) {
                                $view = $activeList[$i]->view;
                                break;
                            }
                        }
                        array_push($gameList, array('id' => $gameId, 'order' => 1, 'active' => true, 'icon' => "", 'view' => $view, 'name' => $row["game_name"]));
                    } else {
                        //データが存在する場合
                        $order = $gameList[$i]["order"];
                        $order++;
                        $gameList[$i]["order"] = $order;
                    }
                }
            }

            if (count($list) != 0) {
                if ($retArray["pagination"] != null) {
                    if ($retArray["pagination"]["cursor"] != null) {
                        $page = $retArray["pagination"]["cursor"];
                        $loopFlg = true;
                    }
                }
            }
            $count++;
        }
        echo 'AAA' . date('Y/m/d H:i:s');
        //ゲーム一覧情報を更新
        $flg = DB::table('games')->update(['active' => false]);
        $flg = DB::table('games')->upsert($gameList, ['id'], ['order', 'active', 'view']);
        echo 'BBB' . date('Y/m/d H:i:s');

        $fileList = glob('./storage/app/public/*');
        echo 'file' . count($fileList);

        //スケジュール登録
        $insertList = array();
        foreach ($streamList as  $gameId => $stList) {

            //ファイルデータ取得
            $filename = $gameId . '.txt';
            $filePath = './storage/app/public/' . $filename;

            if ($gameId == '26936') {
                echo 'music' . count($stList);
            }
            $curArray = array();
            //ファイルが存在するか
            if (file_exists($filePath)) {
                $curData = file_get_contents($filePath);
                $curArray = json_decode($curData, true);

                for ($i=0; $i < count($fileList); $i++) { 
                    if ($fileList[$i] == $filePath) {
                        array_splice($fileList, $i, 1);
                        break;
                    }
                }
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
            $view = 0;
            for ($i=0; $i < count($activeList); $i++) { 
                if ($gameId == $activeList[$i]->game_id) {
                    $view = $activeList[$i]->view;
                    break;
                }
            }
            $contents = $contents + array("view" => $view);
            $contents = $contents + array("gameName" => $gameId . " " . count($stList));
            $contents = $contents + array($nextDate => $nextData);
            $contents = $contents + array('allList' => $stList);
            file_put_contents($filePath, json_encode($contents));
        }
        // $flg = DB::table('streams')->upsert($insertList, ['game_id', 'disp_minute'], ['user_id', 'user_name', 'title', 'view_count', 'icon', 'updated_at']);
        echo 'delete' . count($fileList);
        // for ($i=0; $i < count($fileList); $i++) { 
        //     if ($fileList[$i] != './storage/app/public/.htaccess' && $fileList[$i] != './storage/app/public/.gitignore') {
        //         unlink($fileList[$i]);
        //     }
        // }

        echo 'CCC' . date('Y/m/d H:i:s');

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

            if (count($list) != 0) {
                if ($retArray["pagination"] != null) {
                    if ($retArray["pagination"]["cursor"] != null) {
                        $page = $retArray["pagination"]["cursor"];
                        $loopFlg = true;
                    }
                }
            }
        }
        // dd($gameList);

        //ゲーム一覧を更新
        DB::table('games')->upsert($gameList, ['id'], ['name', 'icon']);
        DB::table('games')->where('updated_at', '<', date('Y-m-d-H-i', strtotime("-5 minute")))->delete();
        // dd($gameList);
        
        echo '終了' . date('Y/m/d H:i:s');
    }
}
