<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category = ['Môi trường', 'Học tập', 'Xã hội'];

        foreach ($category as $item) {
            Category::create([
                'name' => $item
            ]);
        }
    }
}
