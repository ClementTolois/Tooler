import { IShortModel } from 'src/app/short/domain/model/shared/short.model';
import { ShortDtoAdapter } from '../shared/short-dto.adapter';
import { ShortDeleteApiResponseDto } from 'src/app/short/domain/dto/response/short-delete-response.dto';

export class ShortDeleteResponseDtoAdapter {
  static fromModel(model: IShortModel): ShortDeleteApiResponseDto {
    return {
      data: ShortDtoAdapter.fromModel(model),
    };
  }
}
