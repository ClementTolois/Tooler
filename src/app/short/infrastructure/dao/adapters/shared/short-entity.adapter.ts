import { IShortModel } from 'src/app/short/domain/model/shared/short.model';
import { IShortEntity } from '../../entities/shared/short.entity';

export class ShortEntityAdapter {
  static toModel(entity: IShortEntity): IShortModel {
    return {
      id: entity.id,
      location: entity.location,
      redirections: entity.redirections,
      expiresAt: entity.expiresAt ? new Date(entity.expiresAt) : undefined,
      createdAt: new Date(entity.createdAt),
      updatedAt: entity.updatedAt ? new Date(entity.updatedAt) : undefined,
    };
  }
}
