<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\Response;

class AboutPolicy
{
    public function viewAbout(User $user)
    {
        return $user->id == 5 ? Response::allow() : Response::denyWithStatus(403);
    }
}
