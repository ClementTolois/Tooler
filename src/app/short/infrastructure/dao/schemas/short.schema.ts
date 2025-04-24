import { pgTable, varchar, timestamp, integer } from 'drizzle-orm/pg-core';
import { nanoid } from 'nanoid';
import { timestamps } from 'src/utils/helpers/ columns.helper';

export const shortTable = pgTable('short', {
  id: varchar('id')
    .notNull()
    .primaryKey()
    .$defaultFn(() => nanoid(5)),
  redirections: integer('redirections').notNull().default(0),
  location: varchar('location').notNull(),
  expiresAt: timestamp('expiresAt'),
  ...timestamps,
});
