import { IBaseUseCase } from 'src/utils/types/base-use-case';
import { ApiError } from 'src/utils/errors/api-error';
import { IShortToIncrementModel } from '../../model/short-to-increment.model';
import { IShortModel } from '../../model/shared/short.model';

export interface IShortIncrementUseCase
  extends IBaseUseCase<IShortToIncrementModel, IShortModel, ApiError> {}
