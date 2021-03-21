<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('products', function () {
    return response()->json([
        ['name' => 'Dummy Product #1'],
        ['name' => 'Dummy Product #2'],
        ['name' => 'Dummy Product #3'],
        ['name' => 'Dummy Product #4'],
        ['name' => 'Dummy Product #5'],
    ], 200);
});
