import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { timestamps } from 'src/utils/helpers/ columns.helper';

export const userTable = pgTable('user', {
  id: uuid('id').primaryKey().defaultRandom(),
  partnerId: varchar('partnerId').notNull().unique(),
  ...timestamps,
});
