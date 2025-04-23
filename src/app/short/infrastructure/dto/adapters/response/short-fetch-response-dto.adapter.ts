import { IShortModel } from 'src/app/short/domain/model/shared/short.model';
import { ShortDtoAdapter } from '../shared/short-dto.adapter';
import { ShortFetchApiResponseDto } from 'src/app/short/domain/dto/response/short-fetch-response.dto';

export class ShortFetchResponseDtoAdapter {
  static fromModel(model: IShortModel): ShortFetchApiResponseDto {
    return {
      data: ShortDtoAdapter.fromModel(model),
    };
  }
}
