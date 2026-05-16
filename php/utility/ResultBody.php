<?php
declare(strict_types=1);

// FreeDictionaryApi2 SDK utility: result_body

class FreeDictionaryApi2ResultBody
{
    public static function call(FreeDictionaryApi2Context $ctx): ?FreeDictionaryApi2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
