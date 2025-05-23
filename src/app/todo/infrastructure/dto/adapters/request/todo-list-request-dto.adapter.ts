import { TodoListPathParamsDto } from 'src/app/todo/domain/dto/request/todo-list-request.dto';
import { ITodoToListModel } from 'src/app/todo/domain/model/todo-to-list.model';

export class TodoListRequestDtoAdapter {
  static toModel({
    pathParams,
  }: {
    pathParams: TodoListPathParamsDto;
  }): ITodoToListModel {
    return {
      listId: pathParams.listId,
    };
  }
}
