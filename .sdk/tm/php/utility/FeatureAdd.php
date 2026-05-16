<?php
declare(strict_types=1);

// FreeDictionaryApi2 SDK utility: feature_add

class FreeDictionaryApi2FeatureAdd
{
    public static function call(FreeDictionaryApi2Context $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
