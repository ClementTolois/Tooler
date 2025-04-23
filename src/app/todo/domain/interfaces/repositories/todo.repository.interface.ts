import { ApiError } from 'src/core/errors/api-error';
import { ITodoModel } from '../../model/shared/todo.model';
import { Result } from 'neverthrow';
import { ITodoToCreateModel } from '../../model/todo-to-create.model';
import { ITodoToDeleteModel } from '../../model/todo-to-delete.model';
import { ITodoToFetchModel } from '../../model/todo-to-fetch.model';
import { ITodoToUpdateModel } from '../../model/todo-to-update.model';
import { ITodoListModel } from '../../model/shared/todo-list.model';
import { ITodoToListModel } from '../../model/todo-to-list.model';

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
