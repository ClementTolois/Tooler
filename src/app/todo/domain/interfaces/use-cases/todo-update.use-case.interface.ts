import { ApiError } from 'src/utils/errors/api-error';
import { IBaseUseCase } from 'src/utils/types/base-use-case';
import { ITodoModel } from '../../model/shared/todo.model';
import { ITodoToUpdateModel } from '../../model/todo-to-update.model';

export interface ITodoUpdateUseCase
  extends IBaseUseCase<ITodoToUpdateModel, ITodoModel, ApiError> {}
