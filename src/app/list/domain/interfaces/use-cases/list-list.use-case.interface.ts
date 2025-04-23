import type { ApiError } from 'src/core/errors/api-error';
import type { IBaseUseCase } from 'src/core/types/base-use-case';
import type { IListListModel } from '../../model/shared/list-list.model';

export interface IListListUseCase
  extends IBaseUseCase<void, IListListModel, ApiError> {}
