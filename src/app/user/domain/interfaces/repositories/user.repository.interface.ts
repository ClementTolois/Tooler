import { Result } from 'neverthrow';
import { ApiError } from 'src/utils/errors/api-error';
import { IUserModel } from '../../model/shared/user.model';
import { IUserToCreateModel } from '../../model/user-to-create.model';
import { IUserToFetchModel } from '../../model/user-to-fetch.model';

export interface IUserRepository {
  create(model: IUserToCreateModel): Promise<Result<IUserModel, ApiError>>;
  fetch(model: IUserToFetchModel): Promise<Result<IUserModel, ApiError>>;
}

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');
