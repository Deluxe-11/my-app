<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request): \Illuminate\Http\JsonResponse
    {
        $data = $request->only('email', 'password');

        $token = \auth()->attempt($data);

        if (!$token) return $this->responseErrorBadRequest('Email hoặc mật khẩu không hợp lệ');

        return $this->response([
            'token' => $token,
            'user' => \auth()->user()
//            'refresh_token' => \auth()->refresh()
        ], 'Đăng nhập thành công');
    }

    public function me()
    {
        return $this->response([
            'user' => \auth()->user()
        ]);
    }
}
