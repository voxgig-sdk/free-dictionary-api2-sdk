-- Typed models for the FreeDictionaryApi2 SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Entry
---@field id? string

---@class EntryLoadMatch
---@field language string
---@field word string
---@field pretty? boolean
---@field translation? boolean

---@class Language

---@class LanguageLoadMatch
---@field pretty? boolean

local M = {}

return M
