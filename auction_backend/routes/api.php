<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserProductBidsController;
use App\Http\Controllers\UserProductsSettingsController;
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

Route::get('products/{page}', [ProductController::class, 'getProducts']);

Route::get('product/{id}', [ProductController::class, 'getProduct']);

Route::get('download/{id}', [ProductController::class, 'downloadZip']);

Route::put('bid/save', [UserProductBidsController::class, 'save']);

Route::get('product/bids/{product_id}', [UserProductBidsController::class, 'getBidsByProduct']);

Route::put('product/settings/save', [UserProductsSettingsController::class, 'save']);
