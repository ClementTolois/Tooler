import { Injectable } from '@nestjs/common';
import { err, fromPromise, ok, type Result } from 'neverthrow';
import type { ITodoRepository } from 'src/app/todo/domain/interfaces/repositories/todo.repository.interface';
import type { ITodoModel } from 'src/app/todo/domain/model/shared/todo.model';
import type { ITodoToCreateModel } from 'src/app/todo/domain/model/todo-to-create.model';
import type { DrizzleService } from 'src/core/database/drizzle-service';
import type { ApiError } from 'src/core/errors/api-error';
import { todoTable } from '../schemas/todo.schema';
import { TodoCreateEntityAdapter } from '../adapters/todo-create-entity.adapter';
import {
  TodoCreateError,
  TodoDeleteError,
  TodoFetchError,
  TodoListError,
  TodoUpdateError,
} from '../errors/todo.error';
import { TodoEntityAdapter } from '../adapters/shared/todo-entity.adapter';
import { eq } from 'drizzle-orm';
import type { ITodoToUpdateModel } from 'src/app/todo/domain/model/todo-to-update.model';
import { TodoUpdateEntityAdapter } from '../adapters/todo-update-entity.adapter';
import type { ITodoToFetchModel } from 'src/app/todo/domain/model/todo-to-fetch.model';
import type { ITodoToDeleteModel } from 'src/app/todo/domain/model/todo-to-delete.model';
import type { ITodoListModel } from 'src/app/todo/domain/model/shared/todo-list.model';
import { TodoListEntityAdapter } from '../adapters/shared/todo-list-entity.adapter';
import type { ITodoToListModel } from 'src/app/todo/domain/model/todo-to-list.model';

@Injectable()
export class TodoRepository implements ITodoRepository {
  constructor(private readonly drizzleService: DrizzleService) {}

  async create(
    model: ITodoToCreateModel,
  ): Promise<Result<ITodoModel, ApiError>> {
    const query = this.drizzleService.db
      .insert(todoTable)
      .values(TodoCreateEntityAdapter.fromModel(model))
      .returning();

    const result = await fromPromise(query, (error) => {
      if (error instanceof Error) {
        return new TodoCreateError(400, error.message);
      }

      return new TodoCreateError(500, JSON.stringify(error));
    });

    if (result.isOk()) {
      return ok(TodoEntityAdapter.toModel(result.value[0]));
    }
    return err(result.error);
  }

  async update(
    model: ITodoToUpdateModel,
    currentDate: Date,
  ): Promise<Result<ITodoModel, ApiError>> {
    const query = this.drizzleService.db
      .update(todoTable)
      .set(TodoUpdateEntityAdapter.fromModel(model, currentDate))
      .where(eq(todoTable.id, model.todoId))
      .returning();

    const result = await fromPromise(query, (error) => {
      if (error instanceof Error) {
        return new TodoUpdateError(400, error.message);
      }

      return new TodoUpdateError(500, JSON.stringify(error));
    });

    if (result.isOk() && result.value.length === 0) {
      return err(
        new TodoUpdateError(404, `Todo with id ${model.todoId} not found`),
      );
    }

    if (result.isOk()) {
      return ok(TodoEntityAdapter.toModel(result.value[0]));
    }
    return err(result.error);
  }

  async fetch(model: ITodoToFetchModel): Promise<Result<ITodoModel, ApiError>> {
    const query = this.drizzleService.db
      .select()
      .from(todoTable)
      .where(eq(todoTable.id, model.todoId));

    const result = await fromPromise(query, (error) => {
      if (error instanceof Error) {
        return new TodoFetchError(400, error.message);
      }

      return new TodoFetchError(500, JSON.stringify(error));
    });

    if (result.isOk()) {
      return ok(TodoEntityAdapter.toModel(result.value[0]));
    }
    return err(result.error);
  }

  async delete(
    model: ITodoToDeleteModel,
  ): Promise<Result<ITodoModel, ApiError>> {
    const query = this.drizzleService.db
      .delete(todoTable)
      .where(eq(todoTable.id, model.todoId))
      .returning();

    const result = await fromPromise(query, (error) => {
      if (error instanceof Error) {
        return new TodoDeleteError(400, error.message);
      }

      return new TodoDeleteError(500, JSON.stringify(error));
    });

    if (result.isOk()) {
      return ok(TodoEntityAdapter.toModel(result.value[0]));
    }
    return err(result.error);
  }

  async list(
    model: ITodoToListModel,
  ): Promise<Result<ITodoListModel, ApiError>> {
    const query = this.drizzleService.db
      .select()
      .from(todoTable)
      .where(eq(todoTable.listId, model.listId));

    const result = await fromPromise(query, (error) => {
      if (error instanceof Error) {
        return new TodoListError(400, error.message);
      }

      return new TodoListError(500, JSON.stringify(error));
    });

    if (result.isOk()) {
      return ok(TodoListEntityAdapter.toModel(result.value));
    }
    return err(result.error);
  }
}
