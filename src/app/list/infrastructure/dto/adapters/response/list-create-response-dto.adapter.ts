import { ListCreateApiResponseDto } from 'src/app/list/domain/dto/response/list-create-response.dto';
import { IListModel } from 'src/app/list/domain/model/shared/list.model';
import { ListDtoAdapter } from '../shared/list-dto.adapter';

export class ListCreateResponseDtoAdapter {
  static fromModel(model: IListModel): ListCreateApiResponseDto {
    return {
      data: ListDtoAdapter.fromModel(model),
    };
  }
}
