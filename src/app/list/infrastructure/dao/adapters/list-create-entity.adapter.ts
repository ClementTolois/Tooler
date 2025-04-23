import { IListToCreateModel } from 'src/app/list/domain/model/list-to-create.model';
import { IListCreateRequestEntity } from '../entities/request/list-create-request.entity';

export class ListCreateEntityAdapter {
  static fromModel(model: IListToCreateModel): IListCreateRequestEntity {
    return {
      name: model.name,
    };
  }
}
