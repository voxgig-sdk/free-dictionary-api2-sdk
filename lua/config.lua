-- FreeDictionaryApi2 SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "FreeDictionaryApi2",
      slug = "free-dictionary-api2",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://freedictionaryapi.com/api/v1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["entry"] = {},
        ["language"] = {},
      },
    },
    entity = {
      ["entry"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["from"] = {
            ["word"] = "word",
          },
          ["name"] = "id",
          ["parts"] = {
            "language",
            "word",
          },
          ["sep"] = "/",
        },
        ["name"] = "entry",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "language",
                      ["orig"] = "language",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "word",
                      ["orig"] = "word",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "pretty",
                      ["orig"] = "pretty",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "translation",
                      ["orig"] = "translation",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/entries/{language}/{word}",
                ["segments"] = {
                  {
                    ["lit"] = "entries",
                  },
                  {
                    ["var"] = "language",
                  },
                  {
                    ["var"] = "word",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "language",
                    "pretty",
                    "translation",
                    "word",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "entries",
                  "{language}",
                  "{word}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "entry",
            },
          },
        },
      },
      ["language"] = {
        ["fields"] = {},
        ["name"] = "language",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "pretty",
                      ["orig"] = "pretty",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/languages",
                ["segments"] = {
                  {
                    ["lit"] = "languages",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "pretty",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "languages",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
