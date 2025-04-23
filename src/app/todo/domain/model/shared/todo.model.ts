export interface ITodoModel {
  id: string;
  description: string;
  completed: boolean;
  completedAt?: Date;
  updatedAt?: Date;
  createdAt: Date;
}
