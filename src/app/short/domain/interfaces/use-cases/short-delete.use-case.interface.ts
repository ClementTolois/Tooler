import { IBaseUseCase } from 'src/utils/types/base-use-case';
import { IShortModel } from '../../model/shared/short.model';
import { ApiError } from 'src/utils/errors/api-error';
import { IShortToDeleteModel } from '../../model/short-to-delete.model';

export interface IShortDeleteUseCase
  extends IBaseUseCase<IShortToDeleteModel, IShortModel, ApiError> {}
