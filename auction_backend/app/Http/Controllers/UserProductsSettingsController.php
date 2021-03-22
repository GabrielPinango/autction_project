<?php

namespace App\Http\Controllers;

use App\Models\UserProductsSettings;
use Illuminate\Http\Request;

class UserProductsSettingsController extends Controller
{
    public function save(Request $request)
    {
        $data = $request->only(['parameters', 'user_id', 'product_id']);
        $parameters = $data['parameters'];
        $productId = $data['product_id'];
        $userId = $data['user_id'];

        $userProductParams = UserProductsSettings::where(['product_id' => $productId, 'user_id' => $userId])->first();

        if (null === $userProductParams) {
            $userProductParams = $this->create($data);
        } else {
            $currentParams = json_decode($userProductParams->parameters);
            $newParameters = (object) array_merge((array) $currentParams, (array) $parameters);
            $userProductParams->parameters = json_encode($newParameters);
        }

        $userProductParams->save();

        return response()->json($userProductParams, 200);

    }

    private function create(array $data): UserProductsSettings
    {
        $settingsObj = new UserProductsSettings;
        $settingsObj->user_id = $data['user_id'];
        $settingsObj->product_id = $data['product_id'];
        $settingsObj->parameters = json_encode($data['parameters']);

        return $settingsObj;

    }
}
