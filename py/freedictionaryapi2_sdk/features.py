# FreeDictionaryApi2 SDK feature factory

from freedictionaryapi2_sdk.feature.base_feature import FreeDictionaryApi2BaseFeature
from freedictionaryapi2_sdk.feature.ratelimit_feature import FreeDictionaryApi2RatelimitFeature
from freedictionaryapi2_sdk.feature.retry_feature import FreeDictionaryApi2RetryFeature
from freedictionaryapi2_sdk.feature.test_feature import FreeDictionaryApi2TestFeature
from freedictionaryapi2_sdk.feature.timeout_feature import FreeDictionaryApi2TimeoutFeature


_FEATURES = {
    "base": lambda: FreeDictionaryApi2BaseFeature(),
    "ratelimit": lambda: FreeDictionaryApi2RatelimitFeature(),
    "retry": lambda: FreeDictionaryApi2RetryFeature(),
    "test": lambda: FreeDictionaryApi2TestFeature(),
    "timeout": lambda: FreeDictionaryApi2TimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
