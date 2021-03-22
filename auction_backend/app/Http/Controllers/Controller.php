<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public $user = [
        [
            'id' => 1,
            'username' => 'user1',
            'password' => 123456,
            'firstname' => 'Dummy',
            'lastname' => ' User #1',
            'role' => 'Regular',
        ],
        [
            'id' => 2,
            'username' => 'user2',
            'password' => 123456,
            'firstname' => 'Dummy',
            'lastname' => ' User #2',
            'role' => 'Regular',
        ],
    ];
}
