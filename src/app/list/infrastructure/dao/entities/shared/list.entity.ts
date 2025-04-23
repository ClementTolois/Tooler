import { InferSelectModel } from 'drizzle-orm';
import { listTable } from '../../schemas/list.schema';

export type IListEntity = InferSelectModel<typeof listTable>;
