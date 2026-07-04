// Typed models for the FreeDictionaryApi2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Entry {
}

export interface EntryLoadMatch {
  language: string
  word: string
}

export interface Language {
}

export type LanguageLoadMatch = Partial<Language>

