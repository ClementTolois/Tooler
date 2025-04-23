import { Inject } from '@nestjs/common';
import type { ITodoFetchUseCase } from '../domain/interfaces/use-cases/todo-fetch.use-case.interface';
import type { Result } from 'neverthrow';
import type { ApiError } from 'src/core/errors/api-error';
import {
  TODO_REPOSITORY,
  type ITodoRepository,
} from '../domain/interfaces/repositories/todo.repository.interface';
import type { ITodoModel } from '../domain/model/shared/todo.model';
import type { ITodoToFetchModel } from '../domain/model/todo-to-fetch.model';

export class TodoFetchUseCase implements ITodoFetchUseCase {
  constructor(
    @Inject(TODO_REPOSITORY)
    private readonly todoRepository: ITodoRepository,
  ) {}

  async execute(
    model: ITodoToFetchModel,
  ): Promise<Result<ITodoModel, ApiError>> {
    return this.todoRepository.fetch(model);
  }
}
