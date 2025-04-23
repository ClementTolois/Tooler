import { Inject } from '@nestjs/common';
import type { ITodoCreateUseCase } from '../domain/interfaces/use-cases/todo-create.use-case.interface';
import type { Result } from 'neverthrow';
import type { ApiError } from 'src/core/errors/api-error';
import {
  TODO_REPOSITORY,
  type ITodoRepository,
} from '../domain/interfaces/repositories/todo.repository.interface';
import type { ITodoModel } from '../domain/model/shared/todo.model';
import type { ITodoToCreateModel } from '../domain/model/todo-to-create.model';

export class TodoCreateUseCase implements ITodoCreateUseCase {
  constructor(
    @Inject(TODO_REPOSITORY)
    private readonly todoRepository: ITodoRepository,
  ) {}

  async execute(
    model: ITodoToCreateModel,
  ): Promise<Result<ITodoModel, ApiError>> {
    return this.todoRepository.create(model);
  }
}
