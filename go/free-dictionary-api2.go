package voxgigfreedictionaryapi2sdk

import (
	"github.com/voxgig-sdk/free-dictionary-api2-sdk/go/core"
	"github.com/voxgig-sdk/free-dictionary-api2-sdk/go/entity"
	"github.com/voxgig-sdk/free-dictionary-api2-sdk/go/feature"
	_ "github.com/voxgig-sdk/free-dictionary-api2-sdk/go/utility"
)

// Type aliases preserve external API.
type FreeDictionaryApi2SDK = core.FreeDictionaryApi2SDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FreeDictionaryApi2Entity = core.FreeDictionaryApi2Entity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FreeDictionaryApi2Error = core.FreeDictionaryApi2Error

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewEntryEntityFunc = func(client *core.FreeDictionaryApi2SDK, entopts map[string]any) core.FreeDictionaryApi2Entity {
		return entity.NewEntryEntity(client, entopts)
	}
	core.NewLanguageEntityFunc = func(client *core.FreeDictionaryApi2SDK, entopts map[string]any) core.FreeDictionaryApi2Entity {
		return entity.NewLanguageEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFreeDictionaryApi2SDK = core.NewFreeDictionaryApi2SDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
