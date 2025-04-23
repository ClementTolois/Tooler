import type { InferSelectModel } from 'drizzle-orm';
import type { listTable } from '../../schemas/list.schema';

export type IListEntity = InferSelectModel<typeof listTable>;
