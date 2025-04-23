import { ListDto } from 'src/app/list/domain/dto/shared/list.dto';
import { IListModel } from 'src/app/list/domain/model/shared/list.model';

export class ListDtoAdapter {
  static fromModel(model: IListModel): ListDto {
    return {
      id: model.id,
      name: model.name,
      createdAt: model.createdAt.toISOString(),
      updatedAt: model.updatedAt?.toISOString(),
    };
  }
}
