<?php

namespace App\Http\Controllers\API;

use App\Format\UserFormat;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    private $format;

    public function __construct(UserFormat $format)
    {
        $this->format = $format;
    }

    public function login(Request $request): \Illuminate\Http\JsonResponse
    {
        $data = $request->only('email', 'password');

        $token = \auth()->attempt($data);

        if (!$token) return $this->responseErrorBadRequest('Email hoặc mật khẩu không hợp lệ');

        $user = \auth()->user();


        return $this->response([
            'token' => $token,
            'user' => $this->format->formatAuth($user)
//            'refresh_token' => \auth()->refresh()
        ], 'Đăng nhập thành công');
    }

    public function me(): \Illuminate\Http\JsonResponse
    {
        return $this->response([
            'user' => $this->format->formatAuth(\auth()->user())
        ]);
    }

    public function refresh(): \Illuminate\Http\JsonResponse
    {
        return $this->response([
            'token' => \auth()->refresh(),
            'user' => \auth()->user()
        ]);
    }
}
