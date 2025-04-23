import { ListCreateBodyRequestDto } from 'src/app/list/domain/dto/request/list-create-request.dto';
import { IListToCreateModel } from 'src/app/list/domain/model/list-to-create.model';

export class ListCreateRequestDtoAdapter {
  static toModel({
    body,
  }: {
    body: ListCreateBodyRequestDto;
  }): IListToCreateModel {
    return {
      name: body.data.name,
    };
  }
}
