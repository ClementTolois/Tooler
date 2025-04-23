import { ShortFetchPathParamsDto } from 'src/app/short/domain/dto/request/short-fetch-request.dto';
import { IShortToFetchModel } from 'src/app/short/domain/model/short-to-fetch.model';

export class ShortFetchRequestDtoAdapter {
  static toModel({
    pathParams,
  }: {
    pathParams: ShortFetchPathParamsDto;
  }): IShortToFetchModel {
    return {
      id: pathParams.shortId,
    };
  }
}
