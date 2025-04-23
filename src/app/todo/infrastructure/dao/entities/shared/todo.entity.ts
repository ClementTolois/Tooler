import { InferSelectModel } from 'drizzle-orm';
import { todoTable } from '../../schemas/todo.schema';

export type ITodoEntity = InferSelectModel<typeof todoTable>;
