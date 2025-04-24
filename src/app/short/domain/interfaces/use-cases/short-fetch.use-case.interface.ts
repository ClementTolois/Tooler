import { IBaseUseCase } from 'src/utils/types/base-use-case';
import { IShortModel } from '../../model/shared/short.model';
import { ApiError } from 'src/utils/errors/api-error';
import { IShortToFetchModel } from '../../model/short-to-fetch.model';

export interface IShortFetchUseCase
  extends IBaseUseCase<IShortToFetchModel, IShortModel, ApiError> {}
