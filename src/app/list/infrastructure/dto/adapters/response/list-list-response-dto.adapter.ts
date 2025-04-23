import { ListListApiResponseDto } from 'src/app/list/domain/dto/response/list-list-response.dto';
import { IListListModel } from 'src/app/list/domain/model/shared/list-list.model';
import { ListDtoAdapter } from '../shared/list-dto.adapter';

export class ListListResponseDtoAdapter {
  static fromModel(model: IListListModel): ListListApiResponseDto {
    return {
      data: {
        count: model.count,
        records: model.records.map((record) =>
          ListDtoAdapter.fromModel(record),
        ),
      },
    };
  }
}
