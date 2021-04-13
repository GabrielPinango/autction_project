<?php

namespace App\Http\Controllers;

use App\Models\Product;

class ProductController extends Controller
{
    public function getProducts(int $page)
    {
        $products = Product::paginate(10, ['*'], 'page', $page);
        return response()->json($products, 200);
    }
    /**
     * Function to retrive a single product
     *
     * @param integer $id
     * @return void
     */
    public function getProduct(int $id)
    {

        $zip = new \ZipArchive();
        $images = [];
        if ($zip->open(public_path("/images/{$id}/{$id}.zip")) === true) {
            for ($i = 0; $i < $zip->numFiles; $i++) {
                $file = $zip->statIndex($i);
                $images[] = $file['name'];
            }
            $zip->close();
        }

        return response()->json([Product::findOrFail($id), 'imagesArr' => $images, 'images' => "download/$id"], 200);
    }

    /**
     * Undocumented function
     *
     * @param integer $id
     * @return void
     */
    public function downloadZip(int $id)
    {
        return response()->download(public_path("/images/$id/$id.zip"));
    }
}
