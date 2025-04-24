import {
  uuid,
  pgTable,
  varchar,
  boolean,
  timestamp,
} from 'drizzle-orm/pg-core';
import { listTable } from 'src/app/list/infrastructure/dao/schemas/list.schema';
import { timestamps } from 'src/utils/helpers/ columns.helper';
export const todoTable = pgTable('todo', {
  id: uuid('id').primaryKey().defaultRandom(),
  description: varchar().notNull(),
  completed: boolean().notNull().default(false),
  completedAt: timestamp(),
  listId: uuid('listId')
    .notNull()
    .references(() => listTable.id, { onDelete: 'cascade' }),
  ...timestamps,
});
