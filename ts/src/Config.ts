
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://freedictionaryapi.com/api/v1',

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      entry: {
      },

      language: {
      },

    }
  }


  entity = {
    "entry": {
      "fields": [],
      "name": "entry",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "params": [
                  {
                    "active": true,
                    "kind": "param",
                    "name": "language",
                    "orig": "language",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "param",
                    "name": "word",
                    "orig": "word",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "pretty",
                    "orig": "pretty",
                    "reqd": false,
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "translation",
                    "orig": "translation",
                    "reqd": false,
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/entries/{language}/{word}",
              "parts": [
                "entries",
                "{language}",
                "{word}"
              ],
              "select": {
                "exist": [
                  "language",
                  "pretty",
                  "translation",
                  "word"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": [
          [
            "entry"
          ]
        ]
      }
    },
    "language": {
      "fields": [],
      "name": "language",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "pretty",
                    "orig": "pretty",
                    "reqd": false,
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/languages",
              "parts": [
                "languages"
              ],
              "select": {
                "exist": [
                  "pretty"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

