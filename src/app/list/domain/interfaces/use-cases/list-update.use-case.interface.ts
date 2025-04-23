import { ApiError } from 'src/core/errors/api-error';
import { IBaseUseCase } from 'src/core/types/base-use-case';
import { IListModel } from '../../model/shared/list.model';
import { IListToUpdateModel } from '../../model/list-to-update.model';

export interface IListUpdateUseCase
  extends IBaseUseCase<IListToUpdateModel, IListModel, ApiError> {}
