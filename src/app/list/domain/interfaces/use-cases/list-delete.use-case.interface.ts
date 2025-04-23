import type { ApiError } from 'src/core/errors/api-error';
import type { IBaseUseCase } from 'src/core/types/base-use-case';
import type { IListModel } from '../../model/shared/list.model';
import type { IListToDeleteModel } from '../../model/list-to-delete.model';

export interface IListDeleteUseCase
  extends IBaseUseCase<IListToDeleteModel, IListModel, ApiError> {}
