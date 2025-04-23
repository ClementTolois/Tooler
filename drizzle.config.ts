import { defineConfig } from 'drizzle-kit';

if (
  !process.env.DATABASE_URL ||
  !process.env.DATABASE_ADMIN ||
  !process.env.DATABASE_PASSWORD ||
  !process.env.DATABASE_NAME
) {
  throw new Error('DATABASE_URL is not set');
}

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/**/*.schema.ts',
  dbCredentials: {
    url: process.env.DATABASE_URL,
    user: process.env.DATABASE_ADMIN,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: false,
  },
});
