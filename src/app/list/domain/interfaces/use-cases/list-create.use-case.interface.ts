import type { ApiError } from 'src/core/errors/api-error';
import type { IBaseUseCase } from 'src/core/types/base-use-case';
import type { IListToCreateModel } from '../../model/list-to-create.model';
import type { IListModel } from '../../model/shared/list.model';

export interface IListCreateUseCase
  extends IBaseUseCase<IListToCreateModel, IListModel, ApiError> {}
