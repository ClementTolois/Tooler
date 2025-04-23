import { TodoUpdateApiResponseDto } from 'src/app/todo/domain/dto/response/todo-update-response.dto';
import { ITodoModel } from 'src/app/todo/domain/model/shared/todo.model';
import { TodoDtoAdapter } from '../shared/todo-dto.adapter';

export class TodoUpdateResponseDtoAdapter {
  static fromModel(model: ITodoModel): TodoUpdateApiResponseDto {
    return {
      data: TodoDtoAdapter.fromModel(model),
    };
  }
}
