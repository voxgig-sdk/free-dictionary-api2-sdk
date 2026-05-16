# FreeDictionaryApi2 SDK feature factory

from feature.base_feature import FreeDictionaryApi2BaseFeature
from feature.test_feature import FreeDictionaryApi2TestFeature


def _make_feature(name):
    features = {
        "base": lambda: FreeDictionaryApi2BaseFeature(),
        "test": lambda: FreeDictionaryApi2TestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
