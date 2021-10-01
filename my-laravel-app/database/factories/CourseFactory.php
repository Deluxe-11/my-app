<?php

namespace Database\Factories;

use App\Defines\StatusCourse;
use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CourseFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Course::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        $name = $this->faker->name;
        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'thumbnail' => 'https://nhat.dev/wp-content/uploads/2019/06/react-tips-thumb.png',
            'description' => $this->faker->sentence,
            'status' => StatusCourse::PUBLIC,
            'advantages' => $this->faker->sentence,
            'requirements' => $this->faker->sentence,
            'levels' => $this->faker->sentence
//            'name' => 'Tuan',
//            'slug' => 'Tuan',
//            'thumbnail' => 'Tuan',
//            'description' => 'tuan',
//            'status' => 'tuan',
//            'advantages' => 'tuan',
//            'requirements' => 'tuan',
//            'levels' => 'tuan'
        ];
    }
}
