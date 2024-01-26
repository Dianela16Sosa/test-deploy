"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = exports.InvalidTokenError = exports.NotFoundError = exports.DuplicateEntry = exports.Failure = void 0;
class Failure extends Error {
    constructor(message, code = null) {
        super(message);
        this.code = 0;
        if (code) {
            this.code = code;
        }
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.Failure = Failure;
class DuplicateEntry extends Failure {
}
exports.DuplicateEntry = DuplicateEntry;
class NotFoundError extends Failure {
}
exports.NotFoundError = NotFoundError;
class InvalidTokenError extends Failure {
}
exports.InvalidTokenError = InvalidTokenError;
class UnauthorizedError extends Failure {
}
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=error.js.map