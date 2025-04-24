import { ApiError } from 'src/utils/errors/api-error';

export class ShortCreateError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'ShortCreateError';
  }
}

export class ShortUpdateError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'ShortUpdateError';
  }
}

export class ShortFetchError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'ShortFetchError';
  }
}

export class ShortDeleteError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'ShortDeleteError';
  }
}

export class ShortListError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'ShortShortError';
  }
}

export class ShortIncrementError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'ShortIncrementError';
  }
}
