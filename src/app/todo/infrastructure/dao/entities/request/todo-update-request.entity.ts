export interface ITodoUpdateRequestEntity {
  readonly listId: string;
  readonly todoId: string;
  readonly description?: string;
  readonly completed?: boolean;
  readonly updatedAt: Date;
  readonly completedAt?: Date;
}
