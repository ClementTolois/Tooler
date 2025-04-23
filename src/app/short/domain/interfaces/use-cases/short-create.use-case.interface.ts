import { IBaseUseCase } from 'src/core/types/base-use-case';
import { IShortToCreateModel } from '../../model/short-to-create.model';
import { IShortModel } from '../../model/shared/short.model';
import { ApiError } from 'src/core/errors/api-error';

export interface IShortCreateUseCase
  extends IBaseUseCase<IShortToCreateModel, IShortModel, ApiError> {}
