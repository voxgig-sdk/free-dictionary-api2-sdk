<?php
declare(strict_types=1);

// FreeDictionaryApi2 SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FreeDictionaryApi2Features
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FreeDictionaryApi2BaseFeature();
            case "test":
                return new FreeDictionaryApi2TestFeature();
            default:
                return new FreeDictionaryApi2BaseFeature();
        }
    }
}
