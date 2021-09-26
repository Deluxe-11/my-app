<?php

namespace App\Format;

class UserFormat
{
    public function formatAuth($user)
    {
        $user->courses = $user->courses()->select('course_id')->get()->map(function ($item) {
            return $item->course_id;
        });
        return $user;
    }
}
