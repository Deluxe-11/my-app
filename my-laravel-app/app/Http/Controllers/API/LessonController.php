<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    public function show($id)
    {
        $lesson = Lesson::find($id);
        $lesson->comments = $lesson->comments()->orderBy('created_at','desc')->get();

        return $this->response($lesson);
    }
}
