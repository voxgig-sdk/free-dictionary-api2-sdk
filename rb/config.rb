# FreeDictionaryApi2 SDK configuration

module FreeDictionaryApi2Config
  def self.make_config
    {
      "main" => {
        "name" => "FreeDictionaryApi2",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://freedictionaryapi.com/api/v1",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "entry" => {},
          "language" => {},
        },
      },
      "entity" => {
        "entry" => {
          "fields" => [],
          "name" => "entry",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "kind" => "param",
                        "name" => "language",
                        "orig" => "language",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "kind" => "param",
                        "name" => "word",
                        "orig" => "word",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "pretty",
                        "orig" => "pretty",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "translation",
                        "orig" => "translation",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/entries/{language}/{word}",
                  "parts" => [
                    "entries",
                    "{language}",
                    "{word}",
                  ],
                  "select" => {
                    "exist" => [
                      "language",
                      "pretty",
                      "translation",
                      "word",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "entry",
              ],
            ],
          },
        },
        "language" => {
          "fields" => [],
          "name" => "language",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "pretty",
                        "orig" => "pretty",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/languages",
                  "parts" => [
                    "languages",
                  ],
                  "select" => {
                    "exist" => [
                      "pretty",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    FreeDictionaryApi2Features.make_feature(name)
  end
end
