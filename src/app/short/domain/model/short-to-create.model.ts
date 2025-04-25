import { IUserModel } from 'src/app/user/domain/model/shared/user.model';

export interface IShortToCreateModel {
  readonly location: string;
  readonly expiresAt?: Date;
  readonly user: IUserModel;
}
