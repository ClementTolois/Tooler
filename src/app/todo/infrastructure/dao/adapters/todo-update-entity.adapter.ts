import type { ITodoToUpdateModel } from 'src/app/todo/domain/model/todo-to-update.model';
import type { ITodoUpdateRequestEntity } from '../entities/request/todo-update-request.entity';

export class TodoUpdateEntityAdapter {
  static fromModel(
    model: ITodoToUpdateModel,
    currentDate: Date,
  ): ITodoUpdateRequestEntity {
    return {
      listId: model.listId,
      todoId: model.todoId,
      description: model.description,
      completed: model.completed,
      updatedAt: currentDate,
      completedAt: model.completed ? currentDate : undefined,
    };
  }
}
