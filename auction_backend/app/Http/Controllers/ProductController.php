<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Function to retrive a single product
     *
     * @param integer $id
     * @return void
     */
    public function getProduct(int $id)
    {
        return response()->json(Product::findOrFail($id), 200);
    }
}
