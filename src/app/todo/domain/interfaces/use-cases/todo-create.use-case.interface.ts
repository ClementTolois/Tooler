import { ApiError } from 'src/core/errors/api-error';
import { IBaseUseCase } from 'src/core/types/base-use-case';
import { ITodoToCreateModel } from '../../model/todo-to-create.model';
import { ITodoModel } from '../../model/shared/todo.model';

export interface ITodoCreateUseCase
  extends IBaseUseCase<ITodoToCreateModel, ITodoModel, ApiError> {}
