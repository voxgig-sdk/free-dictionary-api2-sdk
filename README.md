# FreeDictionaryApi2 SDK

Look up multilingual dictionary entries sourced from Wiktionary, with definitions, pronunciations, examples, synonyms, and antonyms

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Free Dictionary API

[Free Dictionary API](https://freedictionaryapi.com/) is a free, open service that exposes structured dictionary data drawn from English Wiktionary. The project advertises over 8.5 million words across many languages and requires no API key to use.

What you get from the API:
- Word entries with definitions, parts of speech, and word forms
- Pronunciations (including IPA) and example sentences
- Synonyms and antonyms
- Optional translations across supported languages
- A listing of every supported language with its word count

Operational notes: no authentication is required, CORS is enabled for browser use, and requests are rate-limited to 1,000 per hour per IP (resetting hourly in UTC). Exceeding the limit returns HTTP 429. Language codes follow ISO 639-1 / 639-3.

## Try it

**TypeScript**
```bash
npm install free-dictionary-api2
```

**Python**
```bash
pip install free-dictionary-api2-sdk
```

**PHP**
```bash
composer require voxgig/free-dictionary-api2-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/free-dictionary-api2-sdk/go
```

**Ruby**
```bash
gem install free-dictionary-api2-sdk
```

**Lua**
```bash
luarocks install free-dictionary-api2-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { FreeDictionaryApi2SDK } from 'free-dictionary-api2'

const client = new FreeDictionaryApi2SDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o free-dictionary-api2-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "free-dictionary-api2": {
      "command": "/abs/path/to/free-dictionary-api2-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Entry** | A dictionary entry for a single word in a given language, including definitions, pronunciations, examples, synonyms, and antonyms — fetched via `GET /entries/{language}/{word}`. | `/entries/{language}/{word}` |
| **Language** | A supported dictionary language with its ISO code, English name, and total word count — listed via `GET /languages`. | `/languages` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from freedictionaryapi2_sdk import FreeDictionaryApi2SDK

client = FreeDictionaryApi2SDK({})


# Load a specific entry
entry, err = client.Entry(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'freedictionaryapi2_sdk.php';

$client = new FreeDictionaryApi2SDK([]);


// Load a specific entry
[$entry, $err] = $client->Entry(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/free-dictionary-api2-sdk/go"

client := sdk.NewFreeDictionaryApi2SDK(map[string]any{})

```

### Ruby

```ruby
require_relative "FreeDictionaryApi2_sdk"

client = FreeDictionaryApi2SDK.new({})


# Load a specific entry
entry, err = client.Entry(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("free-dictionary-api2_sdk")

local client = sdk.new({})


-- Load a specific entry
local entry, err = client:Entry(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = FreeDictionaryApi2SDK.test()
const result = await client.Entry().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = FreeDictionaryApi2SDK.test(None, None)
result, err = client.Entry(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = FreeDictionaryApi2SDK::test(null, null);
[$result, $err] = $client->Entry(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Entry(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FreeDictionaryApi2SDK.test(nil, nil)
result, err = client.Entry(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Entry(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Free Dictionary API

- Upstream: [https://freedictionaryapi.com/](https://freedictionaryapi.com/)
- API docs: [https://freedictionaryapi.com/api/v1](https://freedictionaryapi.com/api/v1)

- Dictionary data is sourced from English Wiktionary and licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- Link back to the original Wiktionary page (provided in each API response).
- Include a visible attribution to FreeDictionaryAPI.com when redistributing.
- For apps, add attribution on distribution / landing pages.

---

Generated from the Free Dictionary API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
