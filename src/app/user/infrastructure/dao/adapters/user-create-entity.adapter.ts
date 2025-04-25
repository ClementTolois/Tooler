import { IUserToCreateModel } from 'src/app/user/domain/model/user-to-create.model';
import { IUserCreateRequestEntity } from '../entities/request/user-create-request.entity';

export class UserCreateEntityAdapter {
  static fromModel(model: IUserToCreateModel): IUserCreateRequestEntity {
    return {
      partnerId: model.partnerId,
    };
  }
}
