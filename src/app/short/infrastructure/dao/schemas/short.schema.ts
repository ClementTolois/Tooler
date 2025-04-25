import {
  pgTable,
  varchar,
  timestamp,
  integer,
  uuid,
} from 'drizzle-orm/pg-core';
import { nanoid } from 'nanoid';
import { userTable } from 'src/app/user/infrastructure/dao/schemas/user.schema';
import { timestamps } from 'src/utils/helpers/ columns.helper';

export const shortTable = pgTable('short', {
  id: varchar('id')
    .notNull()
    .primaryKey()
    .$defaultFn(() => nanoid(5)),
  redirections: integer('redirections').notNull().default(0),
  location: varchar('location').notNull(),
  expiresAt: timestamp('expiresAt'),
  userId: uuid('userId')
    .notNull()
    .references(() => userTable.id, { onDelete: 'cascade' }),
  ...timestamps,
});
