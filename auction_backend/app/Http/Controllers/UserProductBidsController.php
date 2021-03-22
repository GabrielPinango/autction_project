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

        $availableFunds = $this->checkFunds($request->bid, $request->user_id);

        if (!$availableFunds) {
            return response()->json([
                'message' => 'Not Enough funds',
            ], 200);
        }

        $userProductBid = new UserProductBids;
        $userProductBid->user_id = $request->user_id;
        $userProductBid->product_id = $request->product_id;
        $userProductBid->bid = $request->bid;
        $isSaved = $userProductBid->save();

        $httpCode = !$isSaved ? 500 : 200;

        return response()->json($userProductBid, $httpCode);
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

    private function checkFunds(int $bid, ?int $userId = null): bool
    {
        $user = array_filter($this->user, function ($data) use ($userId, $bid) {
            return $userId === $data['id'] && $data['wallet_funds'] >= $bid;
        });

        if (!isset($user) || count($user) < 1) {
            return false;
        }

        $user[0]['wallet_funds'] = $user[0]['wallet_funds'] - $bid;
        $this->user = $user;
        array_unique($this->user);

        return true;
    }
}
