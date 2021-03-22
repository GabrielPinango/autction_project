<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
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

        $credentials = $request->only(['username', 'password']);
        $this->user = array_filter($this->user, function ($data) use ($credentials) {
            return $credentials['username'] === $data['username'] && $credentials['password'] == $data['password'];
        });

        $httpCode = count($this->user) > 0 ? 200 : 401;
        return response()->json($this->user, $httpCode);
    }

    private function isUserValid(array $user): bool
    {
        $isValidRequest = null === $user['username'];
        return $isValidRequest;
    }
}
