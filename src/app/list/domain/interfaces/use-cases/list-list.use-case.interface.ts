import { ApiError } from 'src/utils/errors/api-error';
import { IBaseUseCase } from 'src/utils/types/base-use-case';
import { IListListModel } from '../../model/shared/list-list.model';

export interface IListListUseCase
  extends IBaseUseCase<void, IListListModel, ApiError> {}
