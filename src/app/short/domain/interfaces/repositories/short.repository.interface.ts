import { ApiError } from 'src/utils/errors/api-error';
import { IShortModel } from '../../model/shared/short.model';
import { IShortToCreateModel } from '../../model/short-to-create.model';
import { Result } from 'neverthrow';
import { IShortToDeleteModel } from '../../model/short-to-delete.model';
import { IShortToFetchModel } from '../../model/short-to-fetch.model';
import { IShortToIncrementModel } from '../../model/short-to-increment.model';

export interface IShortRepository {
  create(model: IShortToCreateModel): Promise<Result<IShortModel, ApiError>>;
  fetch(model: IShortToFetchModel): Promise<Result<IShortModel, ApiError>>;
  delete(model: IShortToDeleteModel): Promise<Result<IShortModel, ApiError>>;
  increment(
    model: IShortToIncrementModel,
  ): Promise<Result<IShortModel, ApiError>>;
}

export const SHORT_REPOSITORY = Symbol('SHORT_REPOSITORY');
