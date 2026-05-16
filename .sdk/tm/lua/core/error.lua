-- FreeDictionaryApi2 SDK error

local FreeDictionaryApi2Error = {}
FreeDictionaryApi2Error.__index = FreeDictionaryApi2Error


function FreeDictionaryApi2Error.new(code, msg, ctx)
  local self = setmetatable({}, FreeDictionaryApi2Error)
  self.is_sdk_error = true
  self.sdk = "FreeDictionaryApi2"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FreeDictionaryApi2Error:error()
  return self.msg
end


function FreeDictionaryApi2Error:__tostring()
  return self.msg
end


return FreeDictionaryApi2Error
