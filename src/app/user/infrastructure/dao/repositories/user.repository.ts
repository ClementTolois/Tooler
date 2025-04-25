import { err, fromPromise, ok, Result } from 'neverthrow';
import { IUserRepository } from 'src/app/user/domain/interfaces/repositories/user.repository.interface';
import { IUserModel } from 'src/app/user/domain/model/shared/user.model';
import { IUserToCreateModel } from 'src/app/user/domain/model/user-to-create.model';
import { DrizzleService } from 'src/core/database/drizzle-service';
import { ApiError } from 'src/utils/errors/api-error';
import { userTable } from '../schemas/user.schema';
import { UserCreateEntityAdapter } from '../adapters/user-create-entity.adapter';
import { UserCreateError, UserFetchError } from '../errors/user.error';
import { UserEntityAdapter } from '../adapters/shared/user-entity.adapter';
import { eq } from 'drizzle-orm';
import { IUserToFetchModel } from 'src/app/user/domain/model/user-to-fetch.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly drizzleService: DrizzleService) {}

  async create(
    model: IUserToCreateModel,
  ): Promise<Result<IUserModel, ApiError>> {
    const query = this.drizzleService.db
      .insert(userTable)
      .values(UserCreateEntityAdapter.fromModel(model))
      .returning();

    const result = await fromPromise(query, (error) => {
      if (error instanceof Error) {
        return new UserCreateError(400, error.message);
      }

      return new UserCreateError(500, JSON.stringify(error));
    });

    if (result.isOk()) {
      return ok(UserEntityAdapter.toModel(result.value[0]));
    }
    return err(result.error);
  }

  async fetch(model: IUserToFetchModel): Promise<Result<IUserModel, ApiError>> {
    const query = this.drizzleService.db
      .select()
      .from(userTable)
      .where(eq(userTable.partnerId, model.partnerId));

    const result = await fromPromise(query, (error) => {
      if (error instanceof Error) {
        return new UserFetchError(400, error.message);
      }

      return new UserFetchError(500, JSON.stringify(error));
    });

    if (result.isOk() && result.value.length === 0) {
      return err(
        new UserFetchError(
          404,
          `User with partnerId ${model.partnerId} not found`,
        ),
      );
    }

    if (result.isOk()) {
      return ok(UserEntityAdapter.toModel(result.value[0]));
    }
    return err(result.error);
  }
}
