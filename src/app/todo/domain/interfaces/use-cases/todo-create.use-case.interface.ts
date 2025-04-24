import { ApiError } from 'src/utils/errors/api-error';
import { IBaseUseCase } from 'src/utils/types/base-use-case';
import { ITodoToCreateModel } from '../../model/todo-to-create.model';
import { ITodoModel } from '../../model/shared/todo.model';

export interface ITodoCreateUseCase
  extends IBaseUseCase<ITodoToCreateModel, ITodoModel, ApiError> {}
