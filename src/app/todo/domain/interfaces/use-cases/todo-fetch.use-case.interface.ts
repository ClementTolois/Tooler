import { ApiError } from 'src/core/errors/api-error';
import { IBaseUseCase } from 'src/core/types/base-use-case';
import { ITodoModel } from '../../model/shared/todo.model';
import { ITodoToFetchModel } from '../../model/todo-to-fetch.model';

export interface ITodoFetchUseCase
  extends IBaseUseCase<ITodoToFetchModel, ITodoModel, ApiError> {}
