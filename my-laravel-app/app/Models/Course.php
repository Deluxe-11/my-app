<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function chapters(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Chapter::class);
    }

    public function users(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(User::class,'user_course','course_id','user_id')
            ->withTimestamps();
    }

}
