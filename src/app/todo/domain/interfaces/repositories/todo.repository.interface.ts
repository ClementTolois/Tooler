import type { ApiError } from 'src/core/errors/api-error';
import type { ITodoModel } from '../../model/shared/todo.model';
import type { Result } from 'neverthrow';
import type { ITodoToCreateModel } from '../../model/todo-to-create.model';
import type { ITodoToDeleteModel } from '../../model/todo-to-delete.model';
import type { ITodoToFetchModel } from '../../model/todo-to-fetch.model';
import type { ITodoToUpdateModel } from '../../model/todo-to-update.model';
import type { ITodoListModel } from '../../model/shared/todo-list.model';
import type { ITodoToListModel } from '../../model/todo-to-list.model';

export interface ITodoRepository {
  create(model: ITodoToCreateModel): Promise<Result<ITodoModel, ApiError>>;
  update(
    model: ITodoToUpdateModel,
    currentDate: Date,
  ): Promise<Result<ITodoModel, ApiError>>;
  fetch(model: ITodoToFetchModel): Promise<Result<ITodoModel, ApiError>>;
  delete(model: ITodoToDeleteModel): Promise<Result<ITodoModel, ApiError>>;
  list(model: ITodoToListModel): Promise<Result<ITodoListModel, ApiError>>;
}

export const TODO_REPOSITORY = Symbol('TODO_REPOSITORY');
