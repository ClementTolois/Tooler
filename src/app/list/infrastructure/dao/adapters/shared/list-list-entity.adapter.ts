import type { IListEntity } from '../../entities/shared/list.entity';
import type { IListListModel } from 'src/app/list/domain/model/shared/list-list.model';
import { ListEntityAdapter } from './list-entity.adapter';

export class ListListEntityAdapter {
  static toModel(entities: IListEntity[]): IListListModel {
    return {
      records: entities.map((entity) => ListEntityAdapter.toModel(entity)),
      count: entities.length,
    };
  }
}
