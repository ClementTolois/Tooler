import type { TodoDeleteApiResponseDto } from 'src/app/todo/domain/dto/response/todo-delete-response.dto';
import type { ITodoModel } from 'src/app/todo/domain/model/shared/todo.model';
import { TodoDtoAdapter } from '../shared/todo-dto.adapter';

export class TodoDeleteResponseDtoAdapter {
  static fromModel(model: ITodoModel): TodoDeleteApiResponseDto {
    return {
      data: TodoDtoAdapter.fromModel(model),
    };
  }
}
