export class Failure extends Error {
  public code: number = 0;
  
  constructor(message: string, code: number | null = null) {
    super(message);
    if (code) {
      this.code = code;
    }
    
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class DuplicateEntry extends Failure {}
export class NotFoundError extends Failure {}
export class InvalidTokenError extends Failure {}
export class UnauthorizedError extends Failure {}