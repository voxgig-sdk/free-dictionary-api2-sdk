
import { Context } from './Context'


class FreeDictionaryApi2Error extends Error {

  isFreeDictionaryApi2Error = true

  sdk = 'FreeDictionaryApi2'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FreeDictionaryApi2Error
}

