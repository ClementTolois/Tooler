import { Inject } from '@nestjs/common';
import type { ITodoListUseCase } from '../domain/interfaces/use-cases/todo-list.use-case.interface';
import type { Result } from 'neverthrow';
import type { ApiError } from 'src/core/errors/api-error';
import {
  TODO_REPOSITORY,
  type ITodoRepository,
} from '../domain/interfaces/repositories/todo.repository.interface';
import type { ITodoToListModel } from '../domain/model/todo-to-list.model';
import type { ITodoListModel } from '../domain/model/shared/todo-list.model';

export class TodoListUseCase implements ITodoListUseCase {
  constructor(
    @Inject(TODO_REPOSITORY)
    private readonly todoRepository: ITodoRepository,
  ) {}

  async execute(
    model: ITodoToListModel,
  ): Promise<Result<ITodoListModel, ApiError>> {
    return this.todoRepository.list(model);
  }
}
