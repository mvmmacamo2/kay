<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});


Route::get('usuarios', ['uses'=>'UsersController@getUsuarios']);
Route::get('usuario/{id}', ['uses'=>'UsersController@getUsuario']);
Route::post('usuario', ['uses'=>'UsersController@salvarUsuario']);
Route::put('usuario/{id}', ['uses'=>'UsersController@updateUsuario']);
Route::delete('usuario/{id}', ['uses'=>'UsersController@deleteUsuario']);
