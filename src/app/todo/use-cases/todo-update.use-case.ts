import { Inject } from '@nestjs/common';
import { ITodoUpdateUseCase } from '../domain/interfaces/use-cases/todo-update.use-case.interface';
import { Result } from 'neverthrow';
import { ApiError } from 'src/utils/errors/api-error';
import {
  TODO_REPOSITORY,
  type ITodoRepository,
} from '../domain/interfaces/repositories/todo.repository.interface';
import { ITodoModel } from '../domain/model/shared/todo.model';
import { ITodoToUpdateModel } from '../domain/model/todo-to-update.model';

export class TodoUpdateUseCase implements ITodoUpdateUseCase {
  constructor(
    @Inject(TODO_REPOSITORY)
    private readonly todoRepository: ITodoRepository,
  ) {}

  async execute(
    model: ITodoToUpdateModel,
    currentDate = new Date(),
  ): Promise<Result<ITodoModel, ApiError>> {
    return this.todoRepository.update(model, currentDate);
  }
}
