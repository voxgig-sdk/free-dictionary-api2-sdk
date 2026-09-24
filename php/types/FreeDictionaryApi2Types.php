<?php
declare(strict_types=1);

// Typed models for the FreeDictionaryApi2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Entry entity data model. */
class Entry
{
    public ?string $id = null;
}

/** Request payload for Entry#load. */
class EntryLoadMatch
{
    public string $language;
    public string $word;
    public ?bool $pretty = null;
    public ?bool $translation = null;
}

/** Language entity data model. */
class Language
{
}

/** Request payload for Language#load. */
class LanguageLoadMatch
{
    public ?bool $pretty = null;
}

