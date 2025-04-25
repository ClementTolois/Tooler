import { ListCreateBodyRequestDto } from 'src/app/list/domain/dto/request/list-create-request.dto';
import { IListToCreateModel } from 'src/app/list/domain/model/list-to-create.model';
import { IUserModel } from 'src/app/user/domain/model/shared/user.model';

export class ListCreateRequestDtoAdapter {
  static toModel({
    body,
    user,
  }: {
    body: ListCreateBodyRequestDto;
    user: IUserModel;
  }): IListToCreateModel {
    return {
      name: body.data.name,
      user,
    };
  }
}
