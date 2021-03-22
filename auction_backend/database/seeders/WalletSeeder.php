<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WalletSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $funds = [
            [
                'user_id' => 1,
                'wallet_funds' => 500,
            ], [
                'user_id' => 2,
                'wallet_funds' => 900,
            ],
        ];
        DB::table('user_wallets')->insert($funds);
    }
}
