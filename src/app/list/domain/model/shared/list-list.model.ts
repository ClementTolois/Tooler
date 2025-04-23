import type { IListModel } from './list.model';

export interface IListListModel {
  readonly count: number;
  readonly records: IListModel[];
}
