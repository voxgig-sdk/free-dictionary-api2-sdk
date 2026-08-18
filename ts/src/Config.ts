
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'FreeDictionaryApi2',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://freedictionaryapi.com/api/v1",

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
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "language",
                    "orig": "language",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "word",
                    "orig": "word",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "pretty",
                    "orig": "pretty",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "translation",
                    "orig": "translation",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
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
              }
            }
          ]
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
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "pretty",
                    "orig": "pretty",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
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
              }
            }
          ]
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

