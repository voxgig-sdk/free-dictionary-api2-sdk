"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeDictionaryApi2Error = void 0;
class FreeDictionaryApi2Error extends Error {
    isFreeDictionaryApi2Error = true;
    sdk = 'FreeDictionaryApi2';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.FreeDictionaryApi2Error = FreeDictionaryApi2Error;
//# sourceMappingURL=FreeDictionaryApi2Error.js.map