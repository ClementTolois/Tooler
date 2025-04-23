import type { TodoListApiResponseDto } from 'src/app/todo/domain/dto/response/todo-list-response.dto';
import type { ITodoListModel } from 'src/app/todo/domain/model/shared/todo-list.model';
import { TodoDtoAdapter } from '../shared/todo-dto.adapter';

export class TodoListResponseDtoAdapter {
  static fromModel(model: ITodoListModel): TodoListApiResponseDto {
    return {
      data: {
        count: model.count,
        records: model.records.map((record) =>
          TodoDtoAdapter.fromModel(record),
        ),
      },
    };
  }
}
