export class ApiError extends Error {
  public statusCode: number;
  public status: boolean;
  public data?: any | any[];
  public stack: any;
  constructor(
    message: string,
    statusCode: number,
    name: "ConflictError" | "InternalError" | "NotFoundError",
    stack?: any,
    data?: any
  ) {
    super(message);
    this.status = statusCode < 400;
    this.name = name;
    this.message = message;
    this.stack = stack;
    if (data) {
      this.data = data;
    }
    Object.setPrototypeOf(this, new.target.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class ConflictError extends ApiError {
  constructor(message: string, data?: any) {
    // Call the parent constructor with the specific status code (409)
    super(message, 409, "ConflictError");
    this.name = "ConflictError";
  }
}
