import type { TodoFetchApiResponseDto } from 'src/app/todo/domain/dto/response/todo-fetch-response.dto';
import type { ITodoModel } from 'src/app/todo/domain/model/shared/todo.model';
import { TodoDtoAdapter } from '../shared/todo-dto.adapter';

export class TodoFetchResponseDtoAdapter {
  static fromModel(model: ITodoModel): TodoFetchApiResponseDto {
    return {
      data: TodoDtoAdapter.fromModel(model),
    };
  }
}
