import { Inject, Injectable } from '@nestjs/common';
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../domain/interfaces/repositories/user.repository.interface';
import { IUserResolveUseCase } from '../domain/interfaces/use-cases/user-resolve.use-case.interface';
import { IUserToResolveModel } from '../domain/model/user-to-resolve.model';
import { IUserModel } from '../domain/model/shared/user.model';
import { ApiError } from 'src/utils/errors/api-error';
import { Result } from 'neverthrow';
import { UserToResolveModelAdapter } from '../infrastructure/model/adapters/user-to-resolve-model.adapter';

@Injectable()
export class UserResolveUseCase implements IUserResolveUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(
    model: IUserToResolveModel,
  ): Promise<Result<IUserModel, ApiError>> {
    const userFetchResult = await this.userRepository.fetch(
      UserToResolveModelAdapter.toUserToFetchModel(model),
    );
    if (
      (userFetchResult.isErr() && userFetchResult.error.statusCode !== 404) ||
      userFetchResult.isOk()
    ) {
      return userFetchResult;
    }
    return this.userRepository.create(
      UserToResolveModelAdapter.toUserToCreateModel(model),
    );
  }
}
