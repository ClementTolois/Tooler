import type { ApiError } from 'src/core/errors/api-error';
import type { IBaseUseCase } from 'src/core/types/base-use-case';
import type { ITodoModel } from '../../model/shared/todo.model';
import type { ITodoToUpdateModel } from '../../model/todo-to-update.model';

export interface ITodoUpdateUseCase
  extends IBaseUseCase<ITodoToUpdateModel, ITodoModel, ApiError> {}
