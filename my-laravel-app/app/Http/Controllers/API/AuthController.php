<?php

namespace App\Http\Controllers\API;

use App\Format\UserFormat;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

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

    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'email|unique:users',
            'name' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->responseErrorBadRequest('Thông tin đăng ký không hợp lệ', $validator->errors());
        }

        $data = $request->only('email', 'password', 'name');

        try {


            $user = User::create([
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
                'name' => $data['name']
            ]);

            return $this->response($user, 'Đăng ký thành công');

        } catch (\Exception $exception) {
            return $this->responseErrorServer($exception->getMessage());
        }


    }
}
