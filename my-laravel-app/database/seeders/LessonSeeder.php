<?php

namespace Database\Seeders;

use App\Models\Lesson;
use Illuminate\Database\Seeder;

class LessonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        for ($i = 1; $i <= 200; $i++) {
            Lesson::factory(10)
                ->sequence(function ($sequence) {
                    return [
                        'order' => $sequence->index + 1
                    ];
                })
                ->state([
                    'chapter_id' => $i,
                ])
                ->create();
        }

//        Lesson::factory()->make([
//            'chapter_id' => 1,
//            'order' => 1
//        ]);

    }
}
