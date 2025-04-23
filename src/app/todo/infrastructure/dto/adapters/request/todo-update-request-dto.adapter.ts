import {
  TodoUpdateBodyRequestDto,
  TodoUpdatePathParamsDto,
} from 'src/app/todo/domain/dto/request/todo-update-request.dto';
import { ITodoToUpdateModel } from 'src/app/todo/domain/model/todo-to-update.model';

export class TodoUpdateRequestDtoAdapter {
  static toModel({
    body,
    pathParams,
  }: {
    pathParams: TodoUpdatePathParamsDto;
    body: TodoUpdateBodyRequestDto;
  }): ITodoToUpdateModel {
    return {
      listId: pathParams.listId,
      todoId: pathParams.todoId,
      description: body.data.description,
      completed: body.data.completed,
    };
  }
}
