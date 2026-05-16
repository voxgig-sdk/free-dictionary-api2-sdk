# FreeDictionaryApi2 SDK utility: make_context

from core.context import FreeDictionaryApi2Context


def make_context_util(ctxmap, basectx):
    return FreeDictionaryApi2Context(ctxmap, basectx)
