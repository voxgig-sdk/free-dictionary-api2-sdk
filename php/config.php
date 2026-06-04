<?php
declare(strict_types=1);

// FreeDictionaryApi2 SDK configuration

class FreeDictionaryApi2Config
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "FreeDictionaryApi2",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://freedictionaryapi.com/api/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "entry" => [],
                    "language" => [],
                ],
            ],
            "entity" => [
        'entry' => [
          'fields' => [],
          'name' => 'entry',
          'op' => [
            'load' => [
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'word',
                        'orig' => 'word',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'pretty',
                        'orig' => 'pretty',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'translation',
                        'orig' => 'translation',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/entries/{language}/{word}',
                  'parts' => [
                    'entries',
                    '{language}',
                    '{word}',
                  ],
                  'select' => [
                    'exist' => [
                      'language',
                      'pretty',
                      'translation',
                      'word',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'entry',
              ],
            ],
          ],
        ],
        'language' => [
          'fields' => [],
          'name' => 'language',
          'op' => [
            'load' => [
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'pretty',
                        'orig' => 'pretty',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/languages',
                  'parts' => [
                    'languages',
                  ],
                  'select' => [
                    'exist' => [
                      'pretty',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return FreeDictionaryApi2Features::make_feature($name);
    }
}
