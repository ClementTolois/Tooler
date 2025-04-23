import type {
  ListUpdateBodyRequestDto,
  ListUpdatePathParamsDto,
} from 'src/app/list/domain/dto/request/list-update-request.dto';
import type { IListToUpdateModel } from 'src/app/list/domain/model/list-to-update.model';

export class ListUpdateRequestDtoAdapter {
  static toModel({
    body,
    pathParams,
  }: {
    body: ListUpdateBodyRequestDto;
    pathParams: ListUpdatePathParamsDto;
  }): IListToUpdateModel {
    return {
      listId: pathParams.listId,
      name: body.data.name,
    };
  }
}
