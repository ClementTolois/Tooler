import { ApiError } from 'src/utils/errors/api-error';
import { IBaseUseCase } from 'src/utils/types/base-use-case';
import { IListModel } from '../../model/shared/list.model';
import { IListToDeleteModel } from '../../model/list-to-delete.model';

export interface IListDeleteUseCase
  extends IBaseUseCase<IListToDeleteModel, IListModel, ApiError> {}
