# FreeDictionaryApi2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module FreeDictionaryApi2Features
  def self.make_feature(name)
    case name
    when "base"
      FreeDictionaryApi2BaseFeature.new
    when "test"
      FreeDictionaryApi2TestFeature.new
    else
      FreeDictionaryApi2BaseFeature.new
    end
  end
end
