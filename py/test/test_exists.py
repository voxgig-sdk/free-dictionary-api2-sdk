# ProjectName SDK exists test

import pytest
from freedictionaryapi2_sdk import FreeDictionaryApi2SDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FreeDictionaryApi2SDK.test(None, None)
        assert testsdk is not None
