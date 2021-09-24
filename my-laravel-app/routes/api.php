<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/v1/login', [\App\Http\Controllers\API\AuthController::class, 'login']);
Route::get('/v1/me', [\App\Http\Controllers\API\AuthController::class, 'me'])->middleware('jwt');

Route::get('/v1/courses/{id}', [\App\Http\Controllers\API\CourseController::class, 'show']);
Route::get('/v1/lessons/{id}', [\App\Http\Controllers\API\LessonController::class, 'show']);
