import { TodoFetchPathParamsDto } from 'src/app/todo/domain/dto/request/todo-fetch-request.dto';
import { ITodoToFetchModel } from 'src/app/todo/domain/model/todo-to-fetch.model';

export class TodoFetchRequestDtoAdapter {
  static toModel({
    pathParams,
  }: {
    pathParams: TodoFetchPathParamsDto;
  }): ITodoToFetchModel {
    return {
      listId: pathParams.listId,
      todoId: pathParams.todoId,
    };
  }
}
