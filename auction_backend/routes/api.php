<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Models\Product;
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

Route::post('user/login', [UserController::class, 'login']);

Route::get('products', function () {
    return response()->json(Product::all(), 200);
});

Route::get('product/{id}', [ProductController::class, 'getProduct']);

Route::get('download/{id}', [ProductController::class, 'downloadZip']);
