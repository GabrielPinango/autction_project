<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserProductsSettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $settings = [
            [
                'user_id' => 2,
                'product_id' => 1,
                'parameters' => "{set_auto_bid: true}",
            ],
            [
                'user_id' => 1,
                'product_id' => 2,
                'parameters' => "{set_auto_bid: true}",
            ],
        ];
        DB::table('user_products_settings')->insert($settings);
    }
}
