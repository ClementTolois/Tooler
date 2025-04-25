import { pgTable, varchar, uuid } from 'drizzle-orm/pg-core';
import { userTable } from 'src/app/user/infrastructure/dao/schemas/user.schema';
import { timestamps } from 'src/utils/helpers/ columns.helper';

export const listTable = pgTable('list', {
  id: uuid('id').notNull().primaryKey().defaultRandom(),
  name: varchar('name').notNull(),
  userId: uuid('userId')
    .notNull()
    .references(() => userTable.id, { onDelete: 'cascade' }),
  ...timestamps,
});
