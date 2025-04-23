import { TodoCreateApiResponseDto } from 'src/app/todo/domain/dto/response/todo-create-response.dto';
import { ITodoModel } from 'src/app/todo/domain/model/shared/todo.model';
import { TodoDtoAdapter } from '../shared/todo-dto.adapter';

export class TodoCreateResponseDtoAdapter {
  static fromModel(model: ITodoModel): TodoCreateApiResponseDto {
    return {
      data: TodoDtoAdapter.fromModel(model),
    };
  }
}
