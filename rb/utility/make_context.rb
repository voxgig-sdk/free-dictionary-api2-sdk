# FreeDictionaryApi2 SDK utility: make_context
require_relative '../core/context'
module FreeDictionaryApi2Utilities
  MakeContext = ->(ctxmap, basectx) {
    FreeDictionaryApi2Context.new(ctxmap, basectx)
  }
end
