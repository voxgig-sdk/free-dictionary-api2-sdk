
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FreeDictionaryApi2SDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await FreeDictionaryApi2SDK.test()
    equal(null !== testsdk, true)
  })

})
