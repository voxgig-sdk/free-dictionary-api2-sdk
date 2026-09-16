package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewEntryEntityFunc func(client *FreeDictionaryApi2SDK, entopts map[string]any) FreeDictionaryApi2Entity

var NewLanguageEntityFunc func(client *FreeDictionaryApi2SDK, entopts map[string]any) FreeDictionaryApi2Entity

