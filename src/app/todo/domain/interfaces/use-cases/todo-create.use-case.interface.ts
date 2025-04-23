import type { ApiError } from 'src/core/errors/api-error';
import type { IBaseUseCase } from 'src/core/types/base-use-case';
import type { ITodoToCreateModel } from '../../model/todo-to-create.model';
import type { ITodoModel } from '../../model/shared/todo.model';

export interface ITodoCreateUseCase
  extends IBaseUseCase<ITodoToCreateModel, ITodoModel, ApiError> {}
