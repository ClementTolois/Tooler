import { ApiError } from 'src/core/errors/api-error';
import { IBaseUseCase } from 'src/core/types/base-use-case';
import { ITodoModel } from '../../model/shared/todo.model';
import { ITodoToUpdateModel } from '../../model/todo-to-update.model';

export interface ITodoUpdateUseCase
  extends IBaseUseCase<ITodoToUpdateModel, ITodoModel, ApiError> {}
