import type { ApiError } from 'src/core/errors/api-error';
import type { IBaseUseCase } from 'src/core/types/base-use-case';
import type { ITodoListModel } from '../../model/shared/todo-list.model';
import type { ITodoToListModel } from '../../model/todo-to-list.model';

export interface ITodoListUseCase
  extends IBaseUseCase<ITodoToListModel, ITodoListModel, ApiError> {}
