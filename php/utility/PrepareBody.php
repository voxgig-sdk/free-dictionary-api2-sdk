<?php
declare(strict_types=1);

// FreeDictionaryApi2 SDK utility: prepare_body

class FreeDictionaryApi2PrepareBody
{
    public static function call(FreeDictionaryApi2Context $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
