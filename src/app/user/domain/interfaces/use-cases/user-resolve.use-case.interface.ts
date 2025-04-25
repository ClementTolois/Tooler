import { IBaseUseCase } from 'src/utils/types/base-use-case';
import { IUserToResolveModel } from '../../model/user-to-resolve.model';
import { IUserModel } from '../../model/shared/user.model';
import { ApiError } from 'src/utils/errors/api-error';

export interface IUserResolveUseCase
  extends IBaseUseCase<IUserToResolveModel, IUserModel, ApiError> {}
