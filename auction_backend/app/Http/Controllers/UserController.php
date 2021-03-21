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
        if ($request->get('username') !== 'user1' && $request->get('username') !== 'user2') {
            return response()->json(['message' => 'Invalid Credentials.'], 401);
        }

        switch ($request->get('username')) {
            case 'user2':
                $user = [
                    'id' => 2,
                    'userName' => 'User2',
                    'firstName' => 'Dummy',
                    'lastName' => ' User #2',
                    'role' => 'Regular',
                ];
            default:
                $user = [
                    'id' => 1,
                    'userName' => 'User1',
                    'firstName' => 'Dummy',
                    'lastName' => ' User #1',
                    'role' => 'Regular',
                ];

        }
        return response()->json($user, 200);
    }
}
