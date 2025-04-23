import type { InferSelectModel } from 'drizzle-orm';
import type { todoTable } from '../../schemas/todo.schema';

export type ITodoEntity = InferSelectModel<typeof todoTable>;
