<?php
declare(strict_types=1);

// FreeDictionaryApi2 SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

FreeDictionaryApi2Utility::setRegistrar(function (FreeDictionaryApi2Utility $u): void {
    $u->clean = [FreeDictionaryApi2Clean::class, 'call'];
    $u->done = [FreeDictionaryApi2Done::class, 'call'];
    $u->make_error = [FreeDictionaryApi2MakeError::class, 'call'];
    $u->feature_add = [FreeDictionaryApi2FeatureAdd::class, 'call'];
    $u->feature_hook = [FreeDictionaryApi2FeatureHook::class, 'call'];
    $u->feature_init = [FreeDictionaryApi2FeatureInit::class, 'call'];
    $u->fetcher = [FreeDictionaryApi2Fetcher::class, 'call'];
    $u->make_fetch_def = [FreeDictionaryApi2MakeFetchDef::class, 'call'];
    $u->make_context = [FreeDictionaryApi2MakeContext::class, 'call'];
    $u->make_options = [FreeDictionaryApi2MakeOptions::class, 'call'];
    $u->make_request = [FreeDictionaryApi2MakeRequest::class, 'call'];
    $u->make_response = [FreeDictionaryApi2MakeResponse::class, 'call'];
    $u->make_result = [FreeDictionaryApi2MakeResult::class, 'call'];
    $u->make_point = [FreeDictionaryApi2MakePoint::class, 'call'];
    $u->make_spec = [FreeDictionaryApi2MakeSpec::class, 'call'];
    $u->make_url = [FreeDictionaryApi2MakeUrl::class, 'call'];
    $u->param = [FreeDictionaryApi2Param::class, 'call'];
    $u->prepare_auth = [FreeDictionaryApi2PrepareAuth::class, 'call'];
    $u->prepare_body = [FreeDictionaryApi2PrepareBody::class, 'call'];
    $u->prepare_headers = [FreeDictionaryApi2PrepareHeaders::class, 'call'];
    $u->prepare_method = [FreeDictionaryApi2PrepareMethod::class, 'call'];
    $u->prepare_params = [FreeDictionaryApi2PrepareParams::class, 'call'];
    $u->prepare_path = [FreeDictionaryApi2PreparePath::class, 'call'];
    $u->prepare_query = [FreeDictionaryApi2PrepareQuery::class, 'call'];
    $u->result_basic = [FreeDictionaryApi2ResultBasic::class, 'call'];
    $u->result_body = [FreeDictionaryApi2ResultBody::class, 'call'];
    $u->result_headers = [FreeDictionaryApi2ResultHeaders::class, 'call'];
    $u->transform_request = [FreeDictionaryApi2TransformRequest::class, 'call'];
    $u->transform_response = [FreeDictionaryApi2TransformResponse::class, 'call'];
});
