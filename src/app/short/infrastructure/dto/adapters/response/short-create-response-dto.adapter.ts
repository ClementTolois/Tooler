import { IShortModel } from 'src/app/short/domain/model/shared/short.model';
import { ShortDtoAdapter } from '../shared/short-dto.adapter';
import { ShortCreateApiResponseDto } from 'src/app/short/domain/dto/response/short-create-response.dto';

export class ShortCreateResponseDtoAdapter {
  static fromModel(model: IShortModel): ShortCreateApiResponseDto {
    return {
      data: ShortDtoAdapter.fromModel(model),
    };
  }
}
