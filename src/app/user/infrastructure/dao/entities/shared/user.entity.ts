import { InferSelectModel } from 'drizzle-orm';
import { userTable } from '../../schemas/user.schema';

export type IUserEntity = InferSelectModel<typeof userTable>;
