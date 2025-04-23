import { Injectable } from '@nestjs/common';
import { err, fromPromise, ok, Result } from 'neverthrow';
import { IShortRepository } from 'src/app/short/domain/interfaces/repositories/short.repository.interface';
import { IShortModel } from 'src/app/short/domain/model/shared/short.model';
import { IShortToCreateModel } from 'src/app/short/domain/model/short-to-create.model';
import { DrizzleService } from 'src/core/database/drizzle-service';
import { ApiError } from 'src/core/errors/api-error';
import { shortTable } from '../schemas/short.schema';
import { ShortCreateEntityAdapter } from '../adapters/short-create-entity.adapter';
import {
  ShortCreateError,
  ShortDeleteError,
  ShortFetchError,
  ShortIncrementError,
} from '../errors/short.error';
import { ShortEntityAdapter } from '../adapters/shared/short-entity.adapter';
import { IShortToFetchModel } from 'src/app/short/domain/model/short-to-fetch.model';
import { eq, sql } from 'drizzle-orm';
import { IShortToDeleteModel } from 'src/app/short/domain/model/short-to-delete.model';
import { IShortToIncrementModel } from 'src/app/short/domain/model/short-to-increment.model';

@Injectable()
export class ShortRepository implements IShortRepository {
  constructor(private readonly drizzleService: DrizzleService) {}

  async create(
    model: IShortToCreateModel,
  ): Promise<Result<IShortModel, ApiError>> {
    const query = this.drizzleService.db
      .insert(shortTable)
      .values(ShortCreateEntityAdapter.fromModel(model))
      .returning();

    const result = await fromPromise(query, (error) => {
      if (error instanceof Error) {
        return new ShortCreateError(400, error.message);
      }

      return new ShortCreateError(500, JSON.stringify(error));
    });

    if (result.isOk()) {
      return ok(ShortEntityAdapter.toModel(result.value[0]));
    }
    return err(result.error);
  }

  async fetch(
    model: IShortToFetchModel,
  ): Promise<Result<IShortModel, ApiError>> {
    const query = this.drizzleService.db
      .select()
      .from(shortTable)
      .where(eq(shortTable.id, model.id));

    const result = await fromPromise(query, (error) => {
      if (error instanceof Error) {
        return new ShortFetchError(400, error.message);
      }

      return new ShortFetchError(500, JSON.stringify(error));
    });

    if (result.isOk() && result.value.length === 0) {
      return err(
        new ShortFetchError(404, `Short with id ${model.id} not found`),
      );
    }

    if (result.isOk()) {
      return ok(ShortEntityAdapter.toModel(result.value[0]));
    }
    return err(result.error);
  }

  async delete(
    model: IShortToDeleteModel,
  ): Promise<Result<IShortModel, ApiError>> {
    const query = this.drizzleService.db
      .delete(shortTable)
      .where(eq(shortTable.id, model.id))
      .returning();

    const result = await fromPromise(query, (error) => {
      if (error instanceof Error) {
        return new ShortDeleteError(400, error.message);
      }

      return new ShortDeleteError(500, JSON.stringify(error));
    });

    if (result.isOk()) {
      return ok(ShortEntityAdapter.toModel(result.value[0]));
    }
    return err(result.error);
  }

  async increment(
    model: IShortToIncrementModel,
  ): Promise<Result<IShortModel, ApiError>> {
    console.log('ICI', model);
    const query = this.drizzleService.db
      .update(shortTable)
      .set({ redirections: sql`${shortTable.redirections} + 1` })
      .where(eq(shortTable.id, model.id))
      .returning();

    const result = await fromPromise(query, (error) => {
      if (error instanceof Error) {
        return new ShortIncrementError(400, error.message);
      }

      return new ShortIncrementError(500, JSON.stringify(error));
    });

    if (result.isOk()) {
      return ok(ShortEntityAdapter.toModel(result.value[0]));
    }
    return err(result.error);
  }
}
