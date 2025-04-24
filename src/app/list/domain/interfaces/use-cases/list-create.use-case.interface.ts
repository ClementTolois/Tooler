import { ApiError } from 'src/utils/errors/api-error';
import { IBaseUseCase } from 'src/utils/types/base-use-case';
import { IListToCreateModel } from '../../model/list-to-create.model';
import { IListModel } from '../../model/shared/list.model';

export interface IListCreateUseCase
  extends IBaseUseCase<IListToCreateModel, IListModel, ApiError> {}
