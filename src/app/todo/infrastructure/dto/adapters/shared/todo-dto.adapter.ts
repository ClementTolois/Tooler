import type { TodoDto } from 'src/app/todo/domain/dto/shared/todo.dto';
import type { ITodoModel } from 'src/app/todo/domain/model/shared/todo.model';

export class TodoDtoAdapter {
  static fromModel(model: ITodoModel): TodoDto {
    return {
      id: model.id,
      description: model.description,
      completed: model.completed,
      completedAt: model.completedAt?.toISOString(),
      createdAt: model.createdAt.toISOString(),
      updatedAt: model.updatedAt?.toISOString(),
    };
  }
}
