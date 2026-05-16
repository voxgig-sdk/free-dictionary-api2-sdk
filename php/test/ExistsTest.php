<?php
declare(strict_types=1);

// FreeDictionaryApi2 SDK exists test

require_once __DIR__ . '/../freedictionaryapi2_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = FreeDictionaryApi2SDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
