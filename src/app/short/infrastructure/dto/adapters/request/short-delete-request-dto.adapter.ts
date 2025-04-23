import { ShortDeletePathParamsDto } from 'src/app/short/domain/dto/request/short-delete-request.dto';
import { IShortToDeleteModel } from 'src/app/short/domain/model/short-to-delete.model';

export class ShortDeleteRequestDtoAdapter {
  static toModel({
    pathParams,
  }: {
    pathParams: ShortDeletePathParamsDto;
  }): IShortToDeleteModel {
    return {
      id: pathParams.shortId,
    };
  }
}
