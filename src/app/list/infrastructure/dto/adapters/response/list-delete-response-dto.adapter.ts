import { ListDeleteApiResponseDto } from 'src/app/list/domain/dto/response/list-delete-response.dto';
import { IListModel } from 'src/app/list/domain/model/shared/list.model';
import { ListDtoAdapter } from '../shared/list-dto.adapter';

export class ListDeleteResponseDtoAdapter {
  static fromModel(model: IListModel): ListDeleteApiResponseDto {
    return {
      data: ListDtoAdapter.fromModel(model),
    };
  }
}
