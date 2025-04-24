import { ApiError } from 'src/utils/errors/api-error';
import { IBaseUseCase } from 'src/utils/types/base-use-case';
import { ITodoModel } from '../../model/shared/todo.model';
import { ITodoToDeleteModel } from '../../model/todo-to-delete.model';

export interface ITodoDeleteUseCase
  extends IBaseUseCase<ITodoToDeleteModel, ITodoModel, ApiError> {}
