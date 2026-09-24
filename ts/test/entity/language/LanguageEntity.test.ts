

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FreeDictionaryApi2SDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('LanguageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FREE_DICTIONARY_API2_TEST_LIVE=TRUE.
  afterEach(liveDelay('FREE_DICTIONARY_API2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FreeDictionaryApi2SDK.test()
    const ent = testsdk.Language()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FREE_DICTIONARY_API2_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'language.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"language","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /languages","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"GET","o":"/languages","q":{"exist":["pretty"]},"r":{},"s":[{"lit":"languages"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"language","name__orig":"language","Name":"Language","name_":"language","name-":"language","NAME":"LANGUAGE","index$":1}, {"active":true,"entity":"language","key$":"BasicLanguageFlow","kind":"basic","name":"BasicLanguageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"language_ref01","srcdatavar":"language_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-language_ref01"}}],"index$":0}]}, 'Language', {"GET /languages":{"protocol":"http","responses":{"200":{"description":"","content":{"application/json; charset=utf-8":{"schema":{"type":"array","items":{"type":"object","title":"LanguageWithWords","description":"Information about a language with the number of words in the dictionary.","required":["code","name","words"],"properties":{"code":{"type":"string","description":"ISO 639-1/639-3 (2 or 3 letter) language code."},"name":{"type":"string","description":"The full name of this language in English."},"words":{"type":"integer","format":"uint32","description":"The number of words in the dictionary for this language."}},"x-ref":"#/components/schemas/LanguageWithWords"}}}}}},"parameters":[{"name":"pretty","schema":{"type":"boolean"},"in":"query","description":"Whether to pretty-print the JSON response.","required":false,"deprecated":false,"explode":true,"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let language_ref01_data = Object.values(setup.data.existing.language)[0] as any

    // LOAD
    const language_ref01_ent = client.Language()
    const language_ref01_match_dt0: any = {}
    const language_ref01_data_dt0 = (await language_ref01_ent.load(language_ref01_match_dt0)).data()
    assert(null != language_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/language/LanguageTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FreeDictionaryApi2SDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['language01','language02','language03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FREE_DICTIONARY_API2_TEST_LANGUAGE_ENTID': idmap,
    'FREE_DICTIONARY_API2_TEST_LIVE': 'FALSE',
    'FREE_DICTIONARY_API2_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FREE_DICTIONARY_API2_TEST_LANGUAGE_ENTID']

  const live = 'TRUE' === env.FREE_DICTIONARY_API2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FREE_DICTIONARY_API2_TEST_LANGUAGE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FreeDictionaryApi2SDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.FREE_DICTIONARY_API2_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
