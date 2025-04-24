import { ApiError } from 'src/utils/errors/api-error';

export class TodoCreateError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'TodoCreateError';
  }
}

export class TodoUpdateError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'TodoUpdateError';
  }
}

export class TodoFetchError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'TodoFetchError';
  }
}

export class TodoDeleteError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'TodoDeleteError';
  }
}

export class TodoListError extends ApiError {
  name: string;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.name = 'TodoListError';
  }
}
