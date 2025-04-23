import type { ITodoModel } from './todo.model';

export interface ITodoListModel {
  readonly count: number;
  readonly records: ITodoModel[];
}
