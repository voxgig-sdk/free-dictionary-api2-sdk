# FreeDictionaryApi2 SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FreeDictionaryApi2Utility.registrar = ->(u) {
  u.clean = FreeDictionaryApi2Utilities::Clean
  u.done = FreeDictionaryApi2Utilities::Done
  u.make_error = FreeDictionaryApi2Utilities::MakeError
  u.feature_add = FreeDictionaryApi2Utilities::FeatureAdd
  u.feature_hook = FreeDictionaryApi2Utilities::FeatureHook
  u.feature_init = FreeDictionaryApi2Utilities::FeatureInit
  u.fetcher = FreeDictionaryApi2Utilities::Fetcher
  u.make_fetch_def = FreeDictionaryApi2Utilities::MakeFetchDef
  u.make_context = FreeDictionaryApi2Utilities::MakeContext
  u.make_options = FreeDictionaryApi2Utilities::MakeOptions
  u.make_request = FreeDictionaryApi2Utilities::MakeRequest
  u.make_response = FreeDictionaryApi2Utilities::MakeResponse
  u.make_result = FreeDictionaryApi2Utilities::MakeResult
  u.make_point = FreeDictionaryApi2Utilities::MakePoint
  u.make_spec = FreeDictionaryApi2Utilities::MakeSpec
  u.make_url = FreeDictionaryApi2Utilities::MakeUrl
  u.param = FreeDictionaryApi2Utilities::Param
  u.prepare_auth = FreeDictionaryApi2Utilities::PrepareAuth
  u.prepare_body = FreeDictionaryApi2Utilities::PrepareBody
  u.prepare_headers = FreeDictionaryApi2Utilities::PrepareHeaders
  u.prepare_method = FreeDictionaryApi2Utilities::PrepareMethod
  u.prepare_params = FreeDictionaryApi2Utilities::PrepareParams
  u.prepare_path = FreeDictionaryApi2Utilities::PreparePath
  u.prepare_query = FreeDictionaryApi2Utilities::PrepareQuery
  u.result_basic = FreeDictionaryApi2Utilities::ResultBasic
  u.result_body = FreeDictionaryApi2Utilities::ResultBody
  u.result_headers = FreeDictionaryApi2Utilities::ResultHeaders
  u.transform_request = FreeDictionaryApi2Utilities::TransformRequest
  u.transform_response = FreeDictionaryApi2Utilities::TransformResponse
}
