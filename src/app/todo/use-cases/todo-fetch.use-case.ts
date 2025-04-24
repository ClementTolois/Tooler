import { Inject } from '@nestjs/common';
import { ITodoFetchUseCase } from '../domain/interfaces/use-cases/todo-fetch.use-case.interface';
import { Result } from 'neverthrow';
import { ApiError } from 'src/utils/errors/api-error';
import {
  TODO_REPOSITORY,
  type ITodoRepository,
} from '../domain/interfaces/repositories/todo.repository.interface';
import { ITodoModel } from '../domain/model/shared/todo.model';
import { ITodoToFetchModel } from '../domain/model/todo-to-fetch.model';

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
