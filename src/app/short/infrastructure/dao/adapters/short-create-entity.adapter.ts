import { IShortCreateRequestEntity } from '../entities/short-create-request.entity';
import { IShortToCreateModel } from 'src/app/short/domain/model/short-to-create.model';

export class ShortCreateEntityAdapter {
  static fromModel(model: IShortToCreateModel): IShortCreateRequestEntity {
    return {
      location: model.location,
      expiresAt: model.expiresAt,
    };
  }
}
