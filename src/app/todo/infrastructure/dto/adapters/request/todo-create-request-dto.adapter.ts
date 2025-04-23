import {
  TodoCreateBodyRequestDto,
  TodoCreatePathParamsDto,
} from 'src/app/todo/domain/dto/request/todo-create-request.dto';
import { ITodoToCreateModel } from 'src/app/todo/domain/model/todo-to-create.model';

export class TodoCreateRequestDtoAdapter {
  static toModel({
    body,
    pathParams,
  }: {
    pathParams: TodoCreatePathParamsDto;
    body: TodoCreateBodyRequestDto;
  }): ITodoToCreateModel {
    return {
      listId: pathParams.listId,
      description: body.data.description,
    };
  }
}
