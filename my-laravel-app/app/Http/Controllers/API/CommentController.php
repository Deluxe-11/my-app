<?php

namespace App\Http\Controllers\API;

use App\Events\CommentLesson;
use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class CommentController extends Controller
{
    public function store(Request $request)
    {


        $comment = $request->only('content', 'commentable_id');
        $comment['user_id'] = auth()->user()->id;


        $saveComment = Comment::create([
            'content' => $comment['content'],
            'user_id' => $comment['user_id'],
            'commentable_id' => $comment['commentable_id'],
            'commentable_type' => Lesson::class
        ]);


        $lesson = Lesson::find($comment['commentable_id']);

        CommentLesson::dispatch($saveComment);

        return $this->response($lesson);


    }
}
