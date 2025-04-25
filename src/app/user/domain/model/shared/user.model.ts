export interface IUserModel {
  readonly id: string;
  readonly partnerId: string;
  readonly createdAt: Date;
  readonly updatedAt?: Date;
}
