import { ApiError } from 'src/utils/errors/api-error';

export class UserCreateError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'UserCreateError';
  }
}

export class UserFetchError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'UserFetchError';
  }
}
