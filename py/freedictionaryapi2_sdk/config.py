# FreeDictionaryApi2 SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "FreeDictionaryApi2",
            "slug": "free-dictionary-api2",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://freedictionaryapi.com/api/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "entry": {},
                "language": {},
            },
        },
        "entity": {
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "word",
                      "orig": "word",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "pretty",
                      "orig": "pretty",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "translation",
                      "orig": "translation",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/entries/{language}/{word}",
                "parts": [
                  "entries",
                  "{language}",
                  "{word}",
                ],
                "select": {
                  "exist": [
                    "language",
                    "pretty",
                    "translation",
                    "word",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "entry",
            ],
          ],
        },
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
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/languages",
                "parts": [
                  "languages",
                ],
                "select": {
                  "exist": [
                    "pretty",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
