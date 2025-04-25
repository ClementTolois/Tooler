import { IUserModel } from 'src/app/user/domain/model/shared/user.model';
import { IUserEntity } from '../../entities/shared/user.entity';

export class UserEntityAdapter {
  static toModel(entity: IUserEntity): IUserModel {
    return {
      id: entity.id,
      partnerId: entity.partnerId,
      createdAt: new Date(entity.createdAt),
      updatedAt: entity.updatedAt ? new Date(entity.updatedAt) : undefined,
    };
  }
}
