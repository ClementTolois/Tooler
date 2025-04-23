import { IBaseUseCase } from 'src/core/types/base-use-case';
import { ApiError } from 'src/core/errors/api-error';
import { IShortToIncrementModel } from '../../model/short-to-increment.model';
import { IShortModel } from '../../model/shared/short.model';

export interface IShortIncrementUseCase
  extends IBaseUseCase<IShortToIncrementModel, IShortModel, ApiError> {}
