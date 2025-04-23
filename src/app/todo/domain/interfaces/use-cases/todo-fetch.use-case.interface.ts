import type { ApiError } from 'src/core/errors/api-error';
import type { IBaseUseCase } from 'src/core/types/base-use-case';
import type { ITodoModel } from '../../model/shared/todo.model';
import type { ITodoToFetchModel } from '../../model/todo-to-fetch.model';

export interface ITodoFetchUseCase
  extends IBaseUseCase<ITodoToFetchModel, ITodoModel, ApiError> {}
