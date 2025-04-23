import type { ListFetchPathParamsDto } from 'src/app/list/domain/dto/request/list-fetch-request.dto';
import type { IListToFetchModel } from 'src/app/list/domain/model/list-to-fetch.model';

export class ListFetchRequestDtoAdapter {
  static toModel({
    pathParams,
  }: {
    pathParams: ListFetchPathParamsDto;
  }): IListToFetchModel {
    return {
      id: pathParams.listId,
    };
  }
}
