import { IListToUpdateModel } from 'src/app/list/domain/model/list-to-update.model';
import { IListUpdateRequestEntity } from '../entities/request/list-update-request.entity';

export class ListUpdateEntityAdapter {
  static fromModel(
    model: IListToUpdateModel,
    currentDate: Date,
  ): IListUpdateRequestEntity {
    return {
      listId: model.listId,
      name: model.name,
      updatedAt: currentDate,
    };
  }
}
