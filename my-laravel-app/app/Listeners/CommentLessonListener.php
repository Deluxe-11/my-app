<?php

namespace App\Listeners;

use App\Events\CommentLesson;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Redis;

class CommentLessonListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param CommentLesson $event
     * @return void
     */
    public function handle(CommentLesson $event)
    {
        Redis::publish('hello', json_encode($event->comment));

    }
}
