<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::insert([
            [
                'name' => 'Admin 1',
                'email' => 'admin1@email.com',
                'password' => Hash::make('admin1'),
            ],
            [
                'name' => 'Admin 2',
                'email' => 'admin2@email.com',
                'password' => Hash::make('admin2'),
            ],
            [
                'name' => 'Admin 3',
                'email' => 'admin3@email.com',
                'password' => Hash::make('admin3'),
            ]
        ]);
    }
}
