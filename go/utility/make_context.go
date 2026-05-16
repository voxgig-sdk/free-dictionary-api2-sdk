package utility

import "github.com/voxgig-sdk/free-dictionary-api2-sdk/core"

func makeContextUtil(ctxmap map[string]any, basectx *core.Context) *core.Context {
	return core.NewContext(ctxmap, basectx)
}
