<?php
declare(strict_types=1);

// FreeDictionaryApi2 SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FreeDictionaryApi2MakeContext
{
    public static function call(array $ctxmap, ?FreeDictionaryApi2Context $basectx): FreeDictionaryApi2Context
    {
        return new FreeDictionaryApi2Context($ctxmap, $basectx);
    }
}
