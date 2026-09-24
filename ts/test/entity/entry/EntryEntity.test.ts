

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


describe('EntryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FREE_DICTIONARY_API2_TEST_LIVE=TRUE.
  afterEach(liveDelay('FREE_DICTIONARY_API2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FreeDictionaryApi2SDK.test()
    const ent = testsdk.Entry()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FREE_DICTIONARY_API2_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'entry.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","from":{"word":"word"},"name":"id","parts":["language","word"],"sep":"/"},"name":"entry","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /entries/{language}/{word}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"language","or":"language","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"word","or":"word","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"translation","or":"translation","r":false,"t":"`$BOOLEAN`","index$":1}]},"k":"http","m":"GET","o":"/entries/{language}/{word}","q":{"exist":["language","pretty","translation","word"]},"r":{},"s":[{"lit":"entries"},{"var":"language"},{"var":"word"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"entry","name__orig":"entry","Name":"Entry","name_":"entry","name-":"entry","NAME":"ENTRY","index$":0}, {"active":true,"entity":"entry","key$":"BasicEntryFlow","kind":"basic","name":"BasicEntryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"entry_ref01","srcdatavar":"entry_ref01_data","suffix":"_dt0"},"m":{"id":"entry01","language":"language01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-entry_ref01"}}],"index$":0}]}, 'Entry', {"GET /entries/{language}/{word}":{"protocol":"http","responses":{"200":{"description":"","content":{"application/json; charset=utf-8":{"schema":{"type":"object","title":"EntriesByLanguageAndWord","description":"A collection of dictionary entries for a word in different languages.","required":["word","entries","source"],"properties":{"word":{"type":"string","description":"The word being looked up."},"entries":{"type":"array","description":"All dictionary entries for this word in different languages and contexts.","items":{"type":"object","title":"Entry","description":"A dictionary entry for a word in one specific language.","required":["language","partOfSpeech","pronunciations","forms","senses","synonyms","antonyms"],"properties":{"language":{"description":"Which language this entry is for.","allOf":[{"type":"object","title":"Language","description":"Information about a language.","required":["code","name"],"properties":{"code":{"type":"string","description":"ISO 639-1/639-3 (2 or 3 letter) language code."},"name":{"type":"string","description":"The full name of this language in English."}},"x-ref":"#/components/schemas/Language"},{"description":"Which language this entry is for."}]},"partOfSpeech":{"type":"string","description":"What type of word this is (noun, verb, adjective, etc.)."},"pronunciations":{"type":"array","description":"How to pronounce this word.","items":{"type":"object","title":"Pronunciation","description":"How to pronounce a word using phonetic symbols.","required":["type","text","tags"],"properties":{"type":{"description":"The type of pronunciation (like \"ipa\", \"enpr\", etc.).","allOf":[{"type":"string","enum":["ipa","enpr"],"x-ref":"#/components/schemas/PronunciationType"},{"description":"The type of pronunciation (like \"ipa\", \"enpr\", etc.)."}]},"text":{"type":"string","description":"The pronunciation written in the specified notation."},"tags":{"type":"array","description":"Labels describing this pronunciation (like dialect or formality level).","items":{"type":"string"}}},"x-ref":"#/components/schemas/Pronunciation"}},"forms":{"type":"array","description":"Different forms of this word (like plural, past tense).","items":{"type":"object","title":"Form","description":"A different form of the word (like plural, past tense, etc.).","required":["word","tags"],"properties":{"word":{"type":"string","description":"The different form of this word."},"tags":{"type":"array","description":"Labels describing what kind of form this is (plural, past tense, etc.).","items":{"type":"string"}}},"x-ref":"#/components/schemas/Form"}},"senses":{"type":"array","description":"All the different meanings of this word.","items":{"type":"object","title":"Sense","description":"One specific meaning of a word with examples and related information.","required":["definition","tags","examples","quotes","synonyms","antonyms","subsenses"],"properties":{"definition":{"type":"string","description":"What this meaning of the word means."},"tags":{"type":"array","description":"Labels about how this meaning is used (formal, old-fashioned, technical, etc.).","items":{"type":"string"}},"examples":{"type":"array","description":"Example sentences showing how to use this meaning.","items":{"type":"string"}},"quotes":{"type":"array","description":"Real quotes from books or other sources using this word.","items":{"type":"object","title":"Quote","description":"A quote from a book or other source showing how the word is used.","required":["text","reference"],"properties":{"text":{"type":"string","description":"The actual quote text."},"reference":{"type":"string","description":"Where this quote came from (book title, author, etc.)."}},"x-ref":"#/components/schemas/Quote"}},"synonyms":{"type":"array","description":"Words that mean the same as this specific meaning.","items":{"type":"string"}},"antonyms":{"type":"array","description":"Words that mean the opposite of this specific meaning.","items":{"type":"string"}},"translations":{"type":"array","description":"How to say this meaning in other languages.","items":{"type":"object","title":"Translation","description":"How to say a word in another language.","required":["language","word"],"properties":{"language":{"description":"Which language this translation is in.","allOf":[{"type":"object","title":"Language","description":"Information about a language.","required":["code","name"],"properties":{"code":{"type":"string","description":"ISO 639-1/639-3 (2 or 3 letter) language code."},"name":{"type":"string","description":"The full name of this language in English."}},"x-ref":"#/components/schemas/Language"},{"description":"Which language this translation is in."}]},"word":{"type":"string","description":"The word or phrase in that language."}},"x-ref":"#/components/schemas/Translation"}},"subsenses":{"type":"array","description":"More specific meanings within this meaning.","items":{"type":"object","title":"Sense","description":"One specific meaning of a word with examples and related information.","required":["definition","tags","examples","quotes","synonyms","antonyms","subsenses"],"properties":"[Circular *paths./entries/{language}/{word}.get.responses.200.content.application/json; charset=utf-8.schema.properties.entries.items.properties.senses.items.properties]","x-ref":"#/components/schemas/Sense"}}},"x-ref":"#/components/schemas/Sense"}},"synonyms":{"type":"array","description":"Words that mean the same thing as this word (for the whole entry).","items":{"type":"string"}},"antonyms":{"type":"array","description":"Words that mean the opposite of this word (for the whole entry).","items":{"type":"string"}}},"x-ref":"#/components/schemas/Entry"}},"source":{"description":"Information about where this data comes from and how it can be used.","allOf":[{"type":"object","title":"Source","description":"Information about where the dictionary data comes from.","required":["url","license"],"properties":{"url":{"type":"string","description":"Link to the original Wiktionary page."},"license":{"description":"Legal information about how you can use this data.","allOf":[{"type":"object","title":"License","description":"Legal terms for using the dictionary data.","required":["name","url"],"properties":{"name":{"type":"string","description":"Name of the license."},"url":{"type":"string","description":"Link to read the full license terms."}},"x-ref":"#/components/schemas/License"},{"description":"Legal information about how you can use this data."}]}},"x-ref":"#/components/schemas/Source"},{"description":"Information about where this data comes from and how it can be used."}]}},"x-ref":"#/components/schemas/EntriesByLanguageAndWord"}}}}},"parameters":[{"name":"language","schema":{"type":"string"},"in":"path","description":"ISO 639-1/639-3 (2 or 3 letter) language code for word lookup, or \"all\" to retrieve\nentries across all available languages.","required":true,"deprecated":false,"explode":true,"index$":0},{"name":"word","schema":{"type":"string"},"in":"path","description":"Word to retrieve entries for.","required":true,"deprecated":false,"explode":true,"index$":1},{"name":"translations","schema":{"type":"boolean"},"in":"query","description":"Whether to include translations of the word to other languages.","required":false,"deprecated":false,"explode":true,"index$":2},{"name":"pretty","schema":{"type":"boolean"},"in":"query","description":"Whether to pretty-print the JSON response.","required":false,"deprecated":false,"explode":true,"index$":3}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let entry_ref01_data = Object.values(setup.data.existing.entry)[0] as any

    // LOAD
    const entry_ref01_ent = client.Entry()
    const entry_ref01_match_dt0: any = {}
    entry_ref01_match_dt0.id = entry_ref01_data.id
    const entry_ref01_data_dt0 = (await entry_ref01_ent.load(entry_ref01_match_dt0)).data()
    assert(entry_ref01_data_dt0.id === entry_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/entry/EntryTestData.json')

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
    ['entry01','entry02','entry03','language01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FREE_DICTIONARY_API2_TEST_ENTRY_ENTID': idmap,
    'FREE_DICTIONARY_API2_TEST_LIVE': 'FALSE',
    'FREE_DICTIONARY_API2_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FREE_DICTIONARY_API2_TEST_ENTRY_ENTID']

  const live = 'TRUE' === env.FREE_DICTIONARY_API2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FREE_DICTIONARY_API2_TEST_ENTRY_ENTID']
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
  
