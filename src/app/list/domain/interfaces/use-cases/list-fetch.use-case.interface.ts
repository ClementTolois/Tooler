import { ApiError } from 'src/core/errors/api-error';
import { IBaseUseCase } from 'src/core/types/base-use-case';
import { IListModel } from '../../model/shared/list.model';
import { IListToFetchModel } from '../../model/list-to-fetch.model';

export interface IListFetchUseCase
  extends IBaseUseCase<IListToFetchModel, IListModel, ApiError> {}
