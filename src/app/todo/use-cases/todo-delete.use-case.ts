import { Inject } from '@nestjs/common';
import { ITodoDeleteUseCase } from '../domain/interfaces/use-cases/todo-delete.use-case.interface';
import { Result } from 'neverthrow';
import { ApiError } from 'src/utils/errors/api-error';
import {
  TODO_REPOSITORY,
  type ITodoRepository,
} from '../domain/interfaces/repositories/todo.repository.interface';
import { ITodoModel } from '../domain/model/shared/todo.model';
import { ITodoToDeleteModel } from '../domain/model/todo-to-delete.model';

export class TodoDeleteUseCase implements ITodoDeleteUseCase {
  constructor(
    @Inject(TODO_REPOSITORY)
    private readonly todoRepository: ITodoRepository,
  ) {}

  async execute(
    model: ITodoToDeleteModel,
  ): Promise<Result<ITodoModel, ApiError>> {
    return this.todoRepository.delete(model);
  }
}
