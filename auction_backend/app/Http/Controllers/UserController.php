<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\UserProductsSettings;
use App\Models\UserWallet;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Function used to login dummy users
     *
     * @param Request $request
     * @return void
     */
    public function login(Request $request)
    {
        $isValid = $this->isUserValid($request->only(['username', 'password']));
        if ($isValid) {
            return response()->json(['message' => 'Invalid Credentials.'], 401);
        }

        $user = $this->user;
        $credentials = $request->only(['username', 'password']);
        $user = array_filter($this->user, function ($data) use ($credentials) {
            return $credentials['username'] === $data['username'] && $credentials['password'] == $data['password'];
        });

        $currentUser = reset($user);
        $userProductParams = $currentUser && count($currentUser) < 1 ? null :
        UserProductsSettings::where(['user_id' => $currentUser['id']])->get();
        $userWallet = UserWallet::where(['user_id' => $currentUser['id']])->first();
        $currentUser["wallet_funds"] = $userWallet->wallet_funds;
        $parameters = [];
        if (null !== $userProductParams) {
            foreach ($userProductParams as $params) {
                $parameters[$params['product_id']] = json_decode($params['parameters']);
            }
            $currentUser['parameters'] = $parameters;
        }
        $httpCode = $currentUser && count($currentUser) > 0 ? 200 : 401;
        return response()->json($currentUser, $httpCode);
    }

    private function isUserValid(array $user): bool
    {
        $isValidRequest = null === $user['username'];
        return $isValidRequest;
    }
}
