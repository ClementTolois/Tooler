import { ApiError } from 'src/core/errors/api-error';
import { IBaseUseCase } from 'src/core/types/base-use-case';
import { IListToCreateModel } from '../../model/list-to-create.model';
import { IListModel } from '../../model/shared/list.model';

export interface IListCreateUseCase
  extends IBaseUseCase<IListToCreateModel, IListModel, ApiError> {}
