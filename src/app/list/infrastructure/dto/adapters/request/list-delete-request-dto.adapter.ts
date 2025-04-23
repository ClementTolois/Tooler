import type { ListDeletePathParamsDto } from 'src/app/list/domain/dto/request/list-delete-request.dto';
import type { IListToDeleteModel } from 'src/app/list/domain/model/list-to-delete.model';

export class ListDeleteRequestDtoAdapter {
  static toModel({
    pathParams,
  }: {
    pathParams: ListDeletePathParamsDto;
  }): IListToDeleteModel {
    return {
      id: pathParams.listId,
    };
  }
}
