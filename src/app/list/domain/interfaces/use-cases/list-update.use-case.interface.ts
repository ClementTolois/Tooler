import type { ApiError } from 'src/core/errors/api-error';
import type { IBaseUseCase } from 'src/core/types/base-use-case';
import type { IListModel } from '../../model/shared/list.model';
import type { IListToUpdateModel } from '../../model/list-to-update.model';

export interface IListUpdateUseCase
  extends IBaseUseCase<IListToUpdateModel, IListModel, ApiError> {}
