<?php

namespace App\Traits;

use Symfony\Component\HttpFoundation\Response as ResponseAlias;

trait Response
{
    public function response($data, $message = 'Thành công', $status = ResponseAlias::HTTP_OK): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'data' => $data,
            'message' => $message
        ], $status);
    }

    public function responseErrorServer($message): \Illuminate\Http\JsonResponse
    {
//        return $this->response([
//            'data' => [],
//            'message' => $message
//        ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR);
        return $this->response([], $message, ResponseAlias::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function responseErrorBadRequest($message, $error = []): \Illuminate\Http\JsonResponse
    {
//        return $this->response([
//            'data' => [],
//            'message' => $message,
//        ], ResponseAlias::HTTP_BAD_REQUEST);
        return response()->json([
            'data' => null,
            'message' => $message,
            'error' => $error
        ], ResponseAlias::HTTP_BAD_REQUEST);
    }

    public function responseErrorNotFound($message): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'data' => null,
            'message' => $message
        ], ResponseAlias::HTTP_NOT_FOUND);
    }

//    public function responseWithToken(string $token): \Illuminate\Http\JsonResponse
//    {
//        return $this->response([
//            'access_token' => $token,
//            'user' => !is_null(Auth::user()) ? new UserResource(Auth::user()) : null,
//            'time_expired' => Auth::factory()->getTTL() * 60,
//        ]);
//    }
}
