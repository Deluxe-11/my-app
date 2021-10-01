<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class CourseController extends Controller
{

    public function show($id): \Illuminate\Http\JsonResponse
    {
        $course = Course::find($id);

        if (!$course) return $this->responseErrorNotFound('Không tìm thấy');

        return $this->response($course->load('chapters')->load('chapters.lessons'));
    }

}
