export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    // Fix prototype chain (important for instanceof)
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
