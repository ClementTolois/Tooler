import { ApiError } from 'src/utils/errors/api-error';
import { IBaseUseCase } from 'src/utils/types/base-use-case';
import { ITodoListModel } from '../../model/shared/todo-list.model';
import { ITodoToListModel } from '../../model/todo-to-list.model';

export interface ITodoListUseCase
  extends IBaseUseCase<ITodoToListModel, ITodoListModel, ApiError> {}
