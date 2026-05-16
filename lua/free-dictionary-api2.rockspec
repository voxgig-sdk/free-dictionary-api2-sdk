package = "voxgig-sdk-free-dictionary-api2"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/free-dictionary-api2-sdk.git"
}
description = {
  summary = "FreeDictionaryApi2 SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["free-dictionary-api2_sdk"] = "free-dictionary-api2_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
