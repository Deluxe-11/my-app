<?php

namespace Database\Factories;

use App\Defines\StatusLesson;
use App\Models\Lesson;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class LessonFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Lesson::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $name = $this->faker->name;
        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => $this->faker->sentence,
            'video_url' => 'aGJ3Jhb7i88',
            'content' => $this->faker->paragraph,
            'status' => StatusLesson::PUBLIC
        ];
    }
}
