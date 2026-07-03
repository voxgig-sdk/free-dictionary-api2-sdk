-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "FreeDictionaryApi2",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://freedictionaryapi.com/api/v1",
      auth = {
        prefix = "Bearer",
      },
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
        ["fields"] = {},
        ["name"] = "entry",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "language",
                      ["orig"] = "language",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "word",
                      ["orig"] = "word",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "pretty",
                      ["orig"] = "pretty",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "translation",
                      ["orig"] = "translation",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/entries/{language}/{word}",
                ["parts"] = {
                  "entries",
                  "{language}",
                  "{word}",
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
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
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
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "pretty",
                      ["orig"] = "pretty",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/languages",
                ["parts"] = {
                  "languages",
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
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
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
