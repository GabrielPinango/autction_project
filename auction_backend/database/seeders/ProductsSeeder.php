<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
                'title' => 'Dummy Title #1',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. ',
                'expiration_date' => DB::raw('DATE_ADD(CURRENT_TIMESTAMP,INTERVAL 14 DAY)'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            ], [
                'title' => 'Dummy Title #2',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. ',
                'expiration_date' => DB::raw('DATE_ADD(CURRENT_TIMESTAMP,INTERVAL 14 DAY)'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            ], [
                'title' => 'Dummy Title #3',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. ',
                'expiration_date' => DB::raw('DATE_ADD(CURRENT_TIMESTAMP,INTERVAL 14 DAY)'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            ], [
                'title' => 'Dummy Title #4',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. ',
                'expiration_date' => DB::raw('DATE_ADD(CURRENT_TIMESTAMP,INTERVAL 14 DAY)'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            ], [
                'title' => 'Dummy Title #5',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. ',
                'expiration_date' => DB::raw('DATE_ADD(CURRENT_TIMESTAMP,INTERVAL 14 DAY)'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            ], [
                'title' => 'Dummy Title #6',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. ',
                'expiration_date' => DB::raw('DATE_ADD(CURRENT_TIMESTAMP,INTERVAL 14 DAY)'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            ], [
                'title' => 'Dummy Title #7',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. ',
                'expiration_date' => DB::raw('DATE_ADD(CURRENT_TIMESTAMP,INTERVAL 14 DAY)'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            ], [
                'title' => 'Dummy Title #8',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. ',
                'expiration_date' => DB::raw('DATE_ADD(CURRENT_TIMESTAMP,INTERVAL 14 DAY)'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            ], [
                'title' => 'Dummy Title #9',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. ',
                'expiration_date' => DB::raw('DATE_ADD(CURRENT_TIMESTAMP,INTERVAL 14 DAY)'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            ], [
                'title' => 'Dummy Title #10',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. ',
                'expiration_date' => DB::raw('DATE_ADD(CURRENT_TIMESTAMP,INTERVAL 14 DAY)'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            ], [
                'title' => 'Dummy Title #11',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. ',
                'expiration_date' => DB::raw('DATE_ADD(CURRENT_TIMESTAMP,INTERVAL 14 DAY)'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            ], [
                'title' => 'Dummy Title #12',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. ',
                'expiration_date' => DB::raw('DATE_ADD(CURRENT_TIMESTAMP,INTERVAL 14 DAY)'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
        ];
        DB::table('products')->insert($products);
    }
}
