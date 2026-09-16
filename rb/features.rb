# FreeDictionaryApi2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FreeDictionaryApi2Features
  def self.make_feature(name)
    case name
    when "base"
      FreeDictionaryApi2BaseFeature.new
    when "ratelimit"
      FreeDictionaryApi2RatelimitFeature.new
    when "retry"
      FreeDictionaryApi2RetryFeature.new
    when "test"
      FreeDictionaryApi2TestFeature.new
    when "timeout"
      FreeDictionaryApi2TimeoutFeature.new
    else
      FreeDictionaryApi2BaseFeature.new
    end
  end
end
