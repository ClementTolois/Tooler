import { ListUpdateApiResponseDto } from 'src/app/list/domain/dto/response/list-update-response.dto';
import { IListModel } from 'src/app/list/domain/model/shared/list.model';
import { ListDtoAdapter } from '../shared/list-dto.adapter';

export class ListUpdateResponseDtoAdapter {
  static fromModel(model: IListModel): ListUpdateApiResponseDto {
    return {
      data: ListDtoAdapter.fromModel(model),
    };
  }
}
