"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('EntryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FREE_DICTIONARY_API2_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FREE_DICTIONARY_API2_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.FreeDictionaryApi2SDK.test();
        const ent = testsdk.Entry();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FREE_DICTIONARY_API2_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'entry.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "from": { "word": "word" }, "name": "id", "parts": ["language", "word"], "sep": "/" }, "name": "entry", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "language", "orig": "language", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "word", "orig": "word", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "pretty", "orig": "pretty", "reqd": false, "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "kind": "query", "name": "translation", "orig": "translation", "reqd": false, "type": "`$BOOLEAN`", "index$": 1 }] }, "contract": { "id": "GET /entries/{language}/{word}", "json": "{\"parameters\":[{\"deprecated\":false,\"description\":\"ISO 639-1/639-3 (2 or 3 letter) language code for word lookup, or \\\"all\\\" to retrieve\\nentries across all available languages.\",\"explode\":true,\"in\":\"path\",\"name\":\"language\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"deprecated\":false,\"description\":\"Word to retrieve entries for.\",\"explode\":true,\"in\":\"path\",\"name\":\"word\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"deprecated\":false,\"description\":\"Whether to include translations of the word to other languages.\",\"explode\":true,\"in\":\"query\",\"name\":\"translations\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"deprecated\":false,\"description\":\"Whether to pretty-print the JSON response.\",\"explode\":true,\"in\":\"query\",\"name\":\"pretty\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json; charset=utf-8\":{\"schema\":{\"description\":\"A collection of dictionary entries for a word in different languages.\",\"properties\":{\"entries\":{\"description\":\"All dictionary entries for this word in different languages and contexts.\",\"items\":{\"description\":\"A dictionary entry for a word in one specific language.\",\"properties\":{\"antonyms\":{\"description\":\"Words that mean the opposite of this word (for the whole entry).\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"forms\":{\"description\":\"Different forms of this word (like plural, past tense).\",\"items\":{\"description\":\"A different form of the word (like plural, past tense, etc.).\",\"properties\":{\"tags\":{\"description\":\"Labels describing what kind of form this is (plural, past tense, etc.).\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"word\":{\"description\":\"The different form of this word.\",\"type\":\"string\"}},\"required\":[\"word\",\"tags\"],\"title\":\"Form\",\"type\":\"object\"},\"type\":\"array\"},\"language\":{\"allOf\":[{\"description\":\"Information about a language.\",\"properties\":{\"code\":{\"description\":\"ISO 639-1/639-3 (2 or 3 letter) language code.\",\"type\":\"string\"},\"name\":{\"description\":\"The full name of this language in English.\",\"type\":\"string\"}},\"required\":[\"code\",\"name\"],\"title\":\"Language\",\"type\":\"object\"},{\"description\":\"Which language this entry is for.\"}],\"description\":\"Which language this entry is for.\"},\"partOfSpeech\":{\"description\":\"What type of word this is (noun, verb, adjective, etc.).\",\"type\":\"string\"},\"pronunciations\":{\"description\":\"How to pronounce this word.\",\"items\":{\"description\":\"How to pronounce a word using phonetic symbols.\",\"properties\":{\"tags\":{\"description\":\"Labels describing this pronunciation (like dialect or formality level).\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"text\":{\"description\":\"The pronunciation written in the specified notation.\",\"type\":\"string\"},\"type\":{\"allOf\":[{\"enum\":[\"ipa\",\"enpr\"],\"type\":\"string\"},{\"description\":\"The type of pronunciation (like \\\"ipa\\\", \\\"enpr\\\", etc.).\"}],\"description\":\"The type of pronunciation (like \\\"ipa\\\", \\\"enpr\\\", etc.).\"}},\"required\":[\"type\",\"text\",\"tags\"],\"title\":\"Pronunciation\",\"type\":\"object\"},\"type\":\"array\"},\"senses\":{\"description\":\"All the different meanings of this word.\",\"items\":{\"description\":\"One specific meaning of a word with examples and related information.\",\"properties\":{\"antonyms\":{\"description\":\"Words that mean the opposite of this specific meaning.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"definition\":{\"description\":\"What this meaning of the word means.\",\"type\":\"string\"},\"examples\":{\"description\":\"Example sentences showing how to use this meaning.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"quotes\":{\"description\":\"Real quotes from books or other sources using this word.\",\"items\":{\"description\":\"A quote from a book or other source showing how the word is used.\",\"properties\":{\"reference\":{\"description\":\"Where this quote came from (book title, author, etc.).\",\"type\":\"string\"},\"text\":{\"description\":\"The actual quote text.\",\"type\":\"string\"}},\"required\":[\"text\",\"reference\"],\"title\":\"Quote\",\"type\":\"object\"},\"type\":\"array\"},\"subsenses\":{\"description\":\"More specific meanings within this meaning.\",\"items\":{\"description\":\"One specific meaning of a word with examples and related information.\",\"properties\":\"[Circular *paths./entries/{language}/{word}.get.responses.200.content.application/json; charset=utf-8.schema.properties.entries.items.properties.senses.items.properties]\",\"required\":[\"definition\",\"tags\",\"examples\",\"quotes\",\"synonyms\",\"antonyms\",\"subsenses\"],\"title\":\"Sense\",\"type\":\"object\"},\"type\":\"array\"},\"synonyms\":{\"description\":\"Words that mean the same as this specific meaning.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"tags\":{\"description\":\"Labels about how this meaning is used (formal, old-fashioned, technical, etc.).\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"translations\":{\"description\":\"How to say this meaning in other languages.\",\"items\":{\"description\":\"How to say a word in another language.\",\"properties\":{\"language\":{\"allOf\":[{\"description\":\"Information about a language.\",\"properties\":{\"code\":{\"description\":\"ISO 639-1/639-3 (2 or 3 letter) language code.\",\"type\":\"string\"},\"name\":{\"description\":\"The full name of this language in English.\",\"type\":\"string\"}},\"required\":[\"code\",\"name\"],\"title\":\"Language\",\"type\":\"object\"},{\"description\":\"Which language this translation is in.\"}],\"description\":\"Which language this translation is in.\"},\"word\":{\"description\":\"The word or phrase in that language.\",\"type\":\"string\"}},\"required\":[\"language\",\"word\"],\"title\":\"Translation\",\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"definition\",\"tags\",\"examples\",\"quotes\",\"synonyms\",\"antonyms\",\"subsenses\"],\"title\":\"Sense\",\"type\":\"object\"},\"type\":\"array\"},\"synonyms\":{\"description\":\"Words that mean the same thing as this word (for the whole entry).\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"language\",\"partOfSpeech\",\"pronunciations\",\"forms\",\"senses\",\"synonyms\",\"antonyms\"],\"title\":\"Entry\",\"type\":\"object\"},\"type\":\"array\"},\"source\":{\"allOf\":[{\"description\":\"Information about where the dictionary data comes from.\",\"properties\":{\"license\":{\"allOf\":[{\"description\":\"Legal terms for using the dictionary data.\",\"properties\":{\"name\":{\"description\":\"Name of the license.\",\"type\":\"string\"},\"url\":{\"description\":\"Link to read the full license terms.\",\"type\":\"string\"}},\"required\":[\"name\",\"url\"],\"title\":\"License\",\"type\":\"object\"},{\"description\":\"Legal information about how you can use this data.\"}],\"description\":\"Legal information about how you can use this data.\"},\"url\":{\"description\":\"Link to the original Wiktionary page.\",\"type\":\"string\"}},\"required\":[\"url\",\"license\"],\"title\":\"Source\",\"type\":\"object\"},{\"description\":\"Information about where this data comes from and how it can be used.\"}],\"description\":\"Information about where this data comes from and how it can be used.\"},\"word\":{\"description\":\"The word being looked up.\",\"type\":\"string\"}},\"required\":[\"word\",\"entries\",\"source\"],\"title\":\"EntriesByLanguageAndWord\",\"type\":\"object\"}}},\"description\":\"\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/entries/{language}/{word}", "segments": [{ "lit": "entries" }, { "var": "language" }, { "var": "word" }], "select": { "exist": ["language", "pretty", "translation", "word"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["entry"]] }, "key$": "entry", "name__orig": "entry", "Name": "Entry", "name_": "entry", "name-": "entry", "NAME": "ENTRY", "index$": 0 }, { "active": true, "entity": "entry", "key$": "BasicEntryFlow", "kind": "basic", "name": "BasicEntryFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "entry_ref01", "srcdatavar": "entry_ref01_data", "suffix": "_dt0" }, "match": { "id": "entry01", "language": "language01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-entry_ref01" } }], "index$": 0 }] }, 'Entry');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let entry_ref01_data = Object.values(setup.data.existing.entry)[0];
        // LOAD
        const entry_ref01_ent = client.Entry();
        const entry_ref01_match_dt0 = {};
        entry_ref01_match_dt0.id = entry_ref01_data.id;
        const entry_ref01_data_dt0 = (await entry_ref01_ent.load(entry_ref01_match_dt0)).data();
        (0, node_assert_1.default)(entry_ref01_data_dt0.id === entry_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/entry/EntryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.FreeDictionaryApi2SDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['entry01', 'entry02', 'entry03', 'entry01', 'entry02', 'entry03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FREE_DICTIONARY_API2_TEST_ENTRY_ENTID': idmap,
        'FREE_DICTIONARY_API2_TEST_LIVE': 'FALSE',
        'FREE_DICTIONARY_API2_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FREE_DICTIONARY_API2_TEST_ENTRY_ENTID'];
    const live = 'TRUE' === env.FREE_DICTIONARY_API2_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FREE_DICTIONARY_API2_TEST_ENTRY_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.FreeDictionaryApi2SDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=EntryEntity.test.js.map