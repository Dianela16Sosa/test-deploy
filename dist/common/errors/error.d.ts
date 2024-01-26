export declare class Failure extends Error {
    code: number;
    constructor(message: string, code?: number | null);
}
export declare class DuplicateEntry extends Failure {
}
export declare class NotFoundError extends Failure {
}
export declare class InvalidTokenError extends Failure {
}
export declare class UnauthorizedError extends Failure {
}
