import { IUserModel } from 'src/app/user/domain/model/shared/user.model';

export interface IListToCreateModel {
  readonly name: string;
  readonly user: IUserModel;
}
