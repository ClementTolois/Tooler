import { IListModel } from 'src/app/list/domain/model/shared/list.model';
import { IListEntity } from '../../entities/shared/list.entity';

export class ListEntityAdapter {
  static toModel(entity: IListEntity): IListModel {
    return {
      id: entity.id,
      name: entity.name,
      createdAt: new Date(entity.createdAt),
      updatedAt: entity.updatedAt ? new Date(entity.updatedAt) : undefined,
    };
  }
}
