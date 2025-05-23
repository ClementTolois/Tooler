import { Injectable } from '@nestjs/common';
import { err, fromPromise, ok, type Result } from 'neverthrow';
import { IListRepository } from 'src/app/list/domain/interfaces/repositories/list.repository.interface';
import { IListToCreateModel } from 'src/app/list/domain/model/list-to-create.model';
import { IListModel } from 'src/app/list/domain/model/shared/list.model';
import { DrizzleService } from 'src/core/database/drizzle-service';
import { ApiError } from 'src/utils/errors/api-error';
import { listTable } from '../schemas/list.schema';
import { ListCreateEntityAdapter } from '../adapters/list-create-entity.adapter';
import {
  ListCreateError,
  ListDeleteError,
  ListFetchError,
  ListListError,
  ListUpdateError,
} from '../errors/list.error';
import { ListEntityAdapter } from '../adapters/shared/list-entity.adapter';
import { ListUpdateEntityAdapter } from '../adapters/list-update-entity.adapter';
import { IListToUpdateModel } from 'src/app/list/domain/model/list-to-update.model';
import { eq } from 'drizzle-orm';
import { IListToFetchModel } from 'src/app/list/domain/model/list-to-fetch.model';
import { IListToDeleteModel } from 'src/app/list/domain/model/list-to-delete.model';
import { IListListModel } from 'src/app/list/domain/model/shared/list-list.model';
import { ListListEntityAdapter } from '../adapters/shared/list-list-entity.adapter';

@Injectable()
export class ListRepository implements IListRepository {
  constructor(private readonly drizzleService: DrizzleService) {}
  async create(
    model: IListToCreateModel,
  ): Promise<Result<IListModel, ApiError>> {
    const query = this.drizzleService.db
      .insert(listTable)
      .values(ListCreateEntityAdapter.fromModel(model))
      .returning();

    const result = await fromPromise(query, (error) => {
      if (error instanceof Error) {
        return new ListCreateError(400, error.message);
      }

      return new ListCreateError(500, JSON.stringify(error));
    });

    if (result.isOk()) {
      return ok(ListEntityAdapter.toModel(result.value[0]));
    }
    return err(result.error);
  }

  async update(
    model: IListToUpdateModel,
    currentDate: Date,
  ): Promise<Result<IListModel, ApiError>> {
    const query = this.drizzleService.db
      .update(listTable)
      .set(ListUpdateEntityAdapter.fromModel(model, currentDate))
      .where(eq(listTable.id, model.listId))
      .returning();

    const result = await fromPromise(query, (error) => {
      if (error instanceof Error) {
        return new ListUpdateError(400, error.message);
      }

      return new ListUpdateError(500, JSON.stringify(error));
    });

    if (result.isOk() && result.value.length === 0) {
      return err(
        new ListUpdateError(404, `List with id ${model.listId} not found`),
      );
    }

    if (result.isOk()) {
      return ok(ListEntityAdapter.toModel(result.value[0]));
    }
    return err(result.error);
  }

  async fetch(model: IListToFetchModel): Promise<Result<IListModel, ApiError>> {
    const query = this.drizzleService.db
      .select()
      .from(listTable)
      .where(eq(listTable.id, model.id))
      .limit(1);

    const result = await fromPromise(query, (error) => {
      if (error instanceof Error) {
        return new ListFetchError(400, error.message);
      }

      return new ListFetchError(500, JSON.stringify(error));
    });

    if (result.isOk() && result.value.length === 0) {
      return err(new ListFetchError(404, `List with id ${model.id} not found`));
    }

    if (result.isOk()) {
      return ok(ListEntityAdapter.toModel(result.value[0]));
    }
    return err(result.error);
  }

  async delete(
    model: IListToDeleteModel,
  ): Promise<Result<IListModel, ApiError>> {
    const query = this.drizzleService.db
      .delete(listTable)
      .where(eq(listTable.id, model.id))
      .returning();

    const result = await fromPromise(query, (error) => {
      if (error instanceof Error) {
        return new ListDeleteError(400, error.message);
      }

      return new ListDeleteError(500, JSON.stringify(error));
    });

    if (result.isOk() && result.value.length === 0) {
      return err(
        new ListDeleteError(404, `List with id ${model.id} not found`),
      );
    }

    if (result.isOk()) {
      return ok(ListEntityAdapter.toModel(result.value[0]));
    }
    return err(result.error);
  }

  async list(): Promise<Result<IListListModel, ApiError>> {
    const query = this.drizzleService.db.select().from(listTable);

    const result = await fromPromise(query, (error) => {
      if (error instanceof Error) {
        return new ListListError(400, error.message);
      }

      return new ListListError(500, JSON.stringify(error));
    });

    if (result.isOk()) {
      return ok(ListListEntityAdapter.toModel(result.value));
    }
    return err(result.error);
  }
}
