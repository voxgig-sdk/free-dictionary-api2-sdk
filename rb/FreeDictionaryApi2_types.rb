# frozen_string_literal: true

# Typed models for the FreeDictionaryApi2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Entry entity data model.
class Entry
end

# Request payload for Entry#load.
#
# @!attribute [rw] language
#   @return [String]
#
# @!attribute [rw] word
#   @return [String]
#
# @!attribute [rw] pretty
#   @return [Boolean, nil]
#
# @!attribute [rw] translation
#   @return [Boolean, nil]
EntryLoadMatch = Struct.new(
  :language,
  :word,
  :pretty,
  :translation,
  keyword_init: true
)

# Language entity data model.
class Language
end

# Request payload for Language#load.
#
# @!attribute [rw] pretty
#   @return [Boolean, nil]
LanguageLoadMatch = Struct.new(
  :pretty,
  keyword_init: true
)

