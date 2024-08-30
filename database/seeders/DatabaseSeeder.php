<?php

namespace Database\Seeders;

use App\Models\Registrant;
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

        $users = [
            User::create(['name' => 'Admin 1', 'email' => 'admin1@email.com', 'password' => Hash::make('admin1')]),
            User::create(['name' => 'Admin 2', 'email' => 'admin2@email.com', 'password' => Hash::make('admin2')]),
            User::create(['name' => 'Admin 3', 'email' => 'admin3@email.com', 'password' => Hash::make('admin3')])
        ];

        foreach ($users as $user) {
            Registrant::factory()->count(10)->create([
                "user_id" => $user->id,
            ]);
        }
    }
}
