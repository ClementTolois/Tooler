import { IUserToFetchModel } from 'src/app/user/domain/model/user-to-fetch.model';
import { IUserToCreateModel } from 'src/app/user/domain/model/user-to-create.model';
import { IUserToResolveModel } from 'src/app/user/domain/model/user-to-resolve.model';

export class UserToResolveModelAdapter {
  static toUserToFetchModel(model: IUserToResolveModel): IUserToFetchModel {
    return { partnerId: model.partnerId };
  }

  static toUserToCreateModel(model: IUserToResolveModel): IUserToCreateModel {
    return { partnerId: model.partnerId };
  }
}
