import type { ApiError } from 'src/core/errors/api-error';
import type { IBaseUseCase } from 'src/core/types/base-use-case';
import type { ITodoModel } from '../../model/shared/todo.model';
import type { ITodoToDeleteModel } from '../../model/todo-to-delete.model';

export interface ITodoDeleteUseCase
  extends IBaseUseCase<ITodoToDeleteModel, ITodoModel, ApiError> {}
