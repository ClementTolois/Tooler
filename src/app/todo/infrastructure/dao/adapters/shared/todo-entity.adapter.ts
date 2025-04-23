import { ITodoModel } from 'src/app/todo/domain/model/shared/todo.model';
import { ITodoEntity } from '../../entities/shared/todo.entity';

export class TodoEntityAdapter {
  static toModel(entity: ITodoEntity): ITodoModel {
    return {
      id: entity.id,
      description: entity.description,
      completed: entity.completed,
      createdAt: new Date(entity.createdAt),
      updatedAt: entity.updatedAt ? new Date(entity.updatedAt) : undefined,
      completedAt: entity.completedAt
        ? new Date(entity.completedAt)
        : undefined,
    };
  }
}
