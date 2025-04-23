import type { ListFetchApiResponseDto } from 'src/app/list/domain/dto/response/list-fetch-response.dto';
import type { IListModel } from 'src/app/list/domain/model/shared/list.model';
import { ListDtoAdapter } from '../shared/list-dto.adapter';

export class ListFetchResponseDtoAdapter {
  static fromModel(model: IListModel): ListFetchApiResponseDto {
    return {
      data: ListDtoAdapter.fromModel(model),
    };
  }
}
