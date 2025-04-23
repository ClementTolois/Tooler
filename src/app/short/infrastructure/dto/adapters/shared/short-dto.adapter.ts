import { ShortDto } from 'src/app/short/domain/dto/shared/short.dto';
import { IShortModel } from 'src/app/short/domain/model/shared/short.model';

export class ShortDtoAdapter {
  static fromModel(model: IShortModel): ShortDto {
    return {
      id: model.id,
      location: model.location,
      redirections: model.redirections,
      expiresAt: model.expiresAt?.toISOString(),
      createdAt: model.createdAt.toISOString(),
      updatedAt: model.updatedAt?.toISOString(),
    };
  }
}
