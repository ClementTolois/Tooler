import { Injectable } from '@nestjs/common';
import {
  drizzle,
  type NodePgClient,
  type NodePgDatabase,
} from 'drizzle-orm/node-postgres';

@Injectable()
export class DrizzleService {
  private drizzle: NodePgDatabase<Record<string, never>> & {
    $client: NodePgClient;
  };

  constructor() {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not set');
    }
    this.drizzle = drizzle(process.env.DATABASE_URL);
  }

  get db() {
    return this.drizzle;
  }
}
