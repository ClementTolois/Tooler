import { IBaseUseCase } from 'src/core/types/base-use-case';
import { IShortModel } from '../../model/shared/short.model';
import { ApiError } from 'src/core/errors/api-error';
import { IShortToFetchModel } from '../../model/short-to-fetch.model';

export interface IShortFetchUseCase
  extends IBaseUseCase<IShortToFetchModel, IShortModel, ApiError> {}
