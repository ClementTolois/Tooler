import { ApiError } from 'src/utils/errors/api-error';

export class ListCreateError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'ListCreateError';
  }
}

export class ListUpdateError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'ListUpdateError';
  }
}

export class ListFetchError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'ListFetchError';
  }
}

export class ListDeleteError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'ListDeleteError';
  }
}

export class ListListError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'ListListError';
  }
}
