<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\UserProductBids;
use App\Models\UserProductsSettings;
use App\Models\UserWallet;
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
        $isValidBid = $this->checkIfValidBid($request->bid, $request->product_id);

        if (!$availableFunds) {
            return response()->json([
                'message' => 'Not Enough funds',
            ], 200);
        }

        if (!$isValidBid) {
            return response()->json([
                'message' => 'Bid must be higher than current bid.',
            ], 200);
        }

        $userWallet = UserWallet::where(['user_id' => $request->user_id])->first();
        $userWallet->wallet_funds = $userWallet->wallet_funds - $request->bid;

        $userProductBid = new UserProductBids;
        $userProductBid->user_id = $request->user_id;
        $userProductBid->product_id = $request->product_id;
        $userProductBid->bid = $request->bid;
        $isSaved = $userProductBid->save();
        $httpCode = 500;

        if ($isSaved) {
            $httpCode = 200;
            $userWallet->save();
            $this->checkAutoBids($request);
        }

        $highestBid = UserProductBids::orderByDesc('bid')->first();
        $wallet = UserWallet::where(['user_id' => $request->user_id])->first();

        return response()->json(['maxBid' => $highestBid, 'wallet' => $wallet], $httpCode);
    }

    /**
     * Get product's bids
     *
     * @param integer $productId
     * @return void
     */
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

    /**
     * Check if a user has enough funds to bid
     *
     * @param integer $bid
     * @param integer|null $userId
     * @return boolean
     */
    private function checkFunds(int $bid, ?int $userId = null): bool
    {
        $userWallet = UserWallet::where(['user_id' => $userId])->first();

        return ($userWallet->wallet_funds - $bid) > 0;
    }

    /**
     * Check if a bid is valid
     *
     * @param integer $bid
     * @param integer|null $product_id
     * @return boolean
     */
    private function checkIfValidBid(int $bid, ?int $product_id = null): bool
    {
        if ($bid < 1 || null === $product_id) {
            return false;
        }

        $maxBid = UserProductBids::where('product_id', $product_id)->max('bid');
        return $maxBid < $bid;
    }

    /**
     * Check autobid parameters
     *
     * @param Request $request
     * @return void
     */
    private function checkAutoBids(Request $request): bool
    {
        $isInvalid = null === $request->product_id && null === $request->bid;
        if ($isInvalid) {
            return false;
        }
        $productId = $request->product_id;
        $usersProductSettings = UserProductsSettings::where(['product_id' => $productId])->get();

        foreach ($usersProductSettings as $userSettings) {
            $productObj = Product::where('id', $productId)->first();
            if (!$productObj->enabled) {
                continue;
            }

            $autoBid = json_decode($userSettings['parameters'], true);
            $isAutoBidSet = isset($autoBid['set_auto_bid']);
            $userId = $userSettings['user_id'];

            if (!$isAutoBidSet || null === $userId) {
                continue;
            }
            $userWallet = UserWallet::where(['user_id' => $userId])->first();

            if (null === $userWallet) {
                continue;
            }

            [$walletFunds, $outBid] = $this->placeAutoBid($userWallet->wallet_funds, $request->bid, $productObj);
            $request->bid = $outBid;
            $userWallet->wallet_funds = $walletFunds;
            $userProductBid = new UserProductBids;
            $userProductBid->user_id = $userId;
            $userProductBid->product_id = $request->product_id;
            $userProductBid->bid = $outBid;
            $userWallet->wallet_funds = $walletFunds;

            $userWallet->save();
            $userProductBid->save();
        }

        return true;
    }

    /**
     * Place autobids
     *
     * @param float $walletFunds
     * @param float $bid
     * @param Product $product
     * @return void
     */
    private function placeAutoBid(float $walletFunds, float $bid, Product $product)
    {
        $outBid = $bid + 1;
        $walletFunds -= $outBid;
        $maxBid = UserProductBids::where('product_id', $product->id)->max('bid');

        if ($maxBid <= $outBid) {
            $product->enabled = 0;
            $product->save();
            return [$outBid, $walletFunds];
        }

        if ($walletFunds <= 0) {
            return [$outBid, $walletFunds];
        }
        $this->placeAutoBid($walletFunds, $bid, $product);
    }
}
