import type { TodoDeletePathParamsDto } from 'src/app/todo/domain/dto/request/todo-delete-request.dto';
import type { ITodoToDeleteModel } from 'src/app/todo/domain/model/todo-to-delete.model';

export class TodoDeleteRequestDtoAdapter {
  static toModel({
    pathParams,
  }: {
    pathParams: TodoDeletePathParamsDto;
  }): ITodoToDeleteModel {
    return {
      listId: pathParams.listId,
      todoId: pathParams.todoId,
    };
  }
}
