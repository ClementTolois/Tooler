import { IBaseUseCase } from 'src/core/types/base-use-case';
import { IShortModel } from '../../model/shared/short.model';
import { ApiError } from 'src/core/errors/api-error';
import { IShortToDeleteModel } from '../../model/short-to-delete.model';

export interface IShortDeleteUseCase
  extends IBaseUseCase<IShortToDeleteModel, IShortModel, ApiError> {}
