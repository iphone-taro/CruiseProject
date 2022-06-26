<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/api/getGames', [MainController::class, 'getGames']);
Route::post('/api/getStreams', [MainController::class, 'getStreams']);
Route::get('/api/updateGames', [MainController::class, 'updateGames']);
Route::get('/api/updateStreams', [MainController::class, 'updateStreams']);
Route::get('/api/test', [MainController::class, 'test']);
Route::get('/api/test2', [MainController::class, 'test2']);

Route::get('/{any}', function () {
    return view('spa.app')->with('test', "btn_showmore");
})->where('any', '.*');
