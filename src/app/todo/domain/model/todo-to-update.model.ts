export interface ITodoToUpdateModel {
  readonly listId: string;
  readonly todoId: string;
  readonly description?: string;
  readonly completed?: boolean;
}
