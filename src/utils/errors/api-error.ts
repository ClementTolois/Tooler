export abstract class ApiError extends Error {
  statusCode: number;

  protected constructor(statusCode: number, message?: string) {
    super(message);
    this.statusCode = statusCode;
  }

  toJSON() {
    return `{"statusCode":${this.statusCode},"name":"${this.name}","message":"${this.message}"}`;
  }
}
