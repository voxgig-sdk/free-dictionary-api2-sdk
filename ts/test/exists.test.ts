
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FreeDictionaryApi2SDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FreeDictionaryApi2SDK.test()
    equal(testsdk instanceof FreeDictionaryApi2SDK, true,
      'FreeDictionaryApi2SDK.test() must return a client synchronously')
  })

})
