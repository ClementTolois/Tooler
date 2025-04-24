import { Result } from 'neverthrow';
import { IListToCreateModel } from '../../model/list-to-create.model';
import { IListModel } from '../../model/shared/list.model';
import { ApiError } from 'src/utils/errors/api-error';
import { IListToUpdateModel } from '../../model/list-to-update.model';
import { IListToDeleteModel } from '../../model/list-to-delete.model';
import { IListToFetchModel } from '../../model/list-to-fetch.model';
import { IListListModel } from '../../model/shared/list-list.model';

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
