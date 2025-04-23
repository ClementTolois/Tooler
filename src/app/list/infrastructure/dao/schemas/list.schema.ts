import { pgTable, varchar, uuid } from 'drizzle-orm/pg-core';
import { timestamps } from 'src/core/helpers/ columns.helper';

export const listTable = pgTable('list', {
  id: uuid('id').notNull().primaryKey().defaultRandom(),
  name: varchar('name').notNull(),
  ...timestamps,
});
