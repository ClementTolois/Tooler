import { InferSelectModel } from 'drizzle-orm';
import { shortTable } from '../../schemas/short.schema';

export type IShortEntity = InferSelectModel<typeof shortTable>;
