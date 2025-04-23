import type { ApiError } from 'src/core/errors/api-error';
import type { IBaseUseCase } from 'src/core/types/base-use-case';
import type { IListModel } from '../../model/shared/list.model';
import type { IListToFetchModel } from '../../model/list-to-fetch.model';

export interface IListFetchUseCase
  extends IBaseUseCase<IListToFetchModel, IListModel, ApiError> {}
