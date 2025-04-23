import { ITodoToCreateModel } from 'src/app/todo/domain/model/todo-to-create.model';
import { ITodoCreateRequestEntity } from '../entities/request/todo-create-request.entity';

export class TodoCreateEntityAdapter {
  static fromModel(model: ITodoToCreateModel): ITodoCreateRequestEntity {
    return {
      listId: model.listId,
      description: model.description,
    };
  }
}
