package core

type FreeDictionaryApi2Error struct {
	IsFreeDictionaryApi2Error bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFreeDictionaryApi2Error(code string, msg string, ctx *Context) *FreeDictionaryApi2Error {
	return &FreeDictionaryApi2Error{
		IsFreeDictionaryApi2Error: true,
		Sdk:              "FreeDictionaryApi2",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FreeDictionaryApi2Error) Error() string {
	return e.Msg
}
