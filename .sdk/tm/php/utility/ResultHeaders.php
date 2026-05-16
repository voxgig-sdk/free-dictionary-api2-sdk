<?php
declare(strict_types=1);

// FreeDictionaryApi2 SDK utility: result_headers

class FreeDictionaryApi2ResultHeaders
{
    public static function call(FreeDictionaryApi2Context $ctx): ?FreeDictionaryApi2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
