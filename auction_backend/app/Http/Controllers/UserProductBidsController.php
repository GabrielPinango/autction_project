<?php

namespace App\Http\Controllers;

use App\Models\UserProductBids;
use Illuminate\Http\Request;

class UserProductBidsController extends Controller
{
    /**
     * Save user's bids
     *
     * @param Request $request
     * @return void
     */
    public function save(Request $request)
    {
        $isValid = null === $request->user_id && null === $request->product_id && null === $request->bid;

        if ($isValid || $request->bid < 1) {
            return response()->json([
                'message' => 'Invalid input.',
            ], 422);
        }

        $userProductBid = new UserProductBids;
        $userProductBid->user_id = $request->user_id;
        $userProductBid->product_id = $request->product_id;
        $userProductBid->bid = $request->bid;
        $isSaved = $userProductBid->save();

        $httpCode = !$isSaved ? 500 : 200;

        return response()->json([
            $userProductBid,
        ], $httpCode);
    }

    public function getBidsByProduct(int $productId)
    {
        if (null == $productId) {
            return response()->json([
                'message' => 'Invalid input.',
            ], 422);
        }

        $bids = UserProductBids::where('product_id', $productId)->orderByDesc('bid')->get();
        $httpCode = $bids->count() > 0 ? 200 : 204;

        return response()->json($bids, $httpCode);
    }
}
