import type { Result } from 'neverthrow';
import type { IListToCreateModel } from '../../model/list-to-create.model';
import type { IListModel } from '../../model/shared/list.model';
import type { ApiError } from 'src/core/errors/api-error';
import type { IListToUpdateModel } from '../../model/list-to-update.model';
import type { IListToDeleteModel } from '../../model/list-to-delete.model';
import type { IListToFetchModel } from '../../model/list-to-fetch.model';
import type { IListListModel } from '../../model/shared/list-list.model';

export interface IListRepository {
  create(model: IListToCreateModel): Promise<Result<IListModel, ApiError>>;
  update(
    model: IListToUpdateModel,
    currentDate: Date,
  ): Promise<Result<IListModel, ApiError>>;
  fetch(model: IListToFetchModel): Promise<Result<IListModel, ApiError>>;
  delete(model: IListToDeleteModel): Promise<Result<IListModel, ApiError>>;
  list(): Promise<Result<IListListModel, ApiError>>;
}

export const LIST_REPOSITORY = Symbol('LIST_REPOSITORY');
