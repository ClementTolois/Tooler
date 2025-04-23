import type { ITodoListModel } from 'src/app/todo/domain/model/shared/todo-list.model';
import type { ITodoEntity } from '../../entities/shared/todo.entity';
import { TodoEntityAdapter } from './todo-entity.adapter';

export class TodoListEntityAdapter {
  static toModel(entities: ITodoEntity[]): ITodoListModel {
    return {
      records: entities.map((entity) => TodoEntityAdapter.toModel(entity)),
      count: entities.length,
    };
  }
}
