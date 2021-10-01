<?php

namespace Database\Seeders;

use App\Models\Chapter;
use App\Models\Course;
use App\Models\Lesson;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Course::factory(20)
            ->has(
                Chapter::factory()
                    ->count(10)
                    ->state(function (array $attributes, Course $course) {
                        return [
                            'course_id' => $course->id
                        ];
                    })
                    ->sequence(function ($sequence) {
                        return [
                            'order' => (($sequence->index + 1) % 10) === 0 ? 10 : (($sequence->index + 1) % 10)
                        ];
                    })
            )
            ->create();
//        Course::factory()->count(10)->make();
    }
}
