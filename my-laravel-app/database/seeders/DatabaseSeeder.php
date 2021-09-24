<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        User::create([
            'name' => 'Tuan',
            'email' => 'devpro2001@gmail.com',
            'password' => Hash::make('java2001')
        ]);

        User::create([
            'name' => 'Tuan',
            'email' => 'admin123@gmail.com',
            'password' => Hash::make('admin123')
        ]);

//        Course::factory(10)->create();
        $this->call([
            CourseSeeder::class,
            LessonSeeder::class
        ]);


    }
}
