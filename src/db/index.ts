import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from '@/db/schema';

let dbInstance: ReturnType<typeof drizzle<typeof schema>> | null = null;

function getTursoConfig() {
  const url = process.env.TURSO_CONNECTION_URL;

  if (!url) {
    throw new Error(
      'Missing TURSO_CONNECTION_URL. Set it in your environment before using the database.'
    );
  }

  return {
    url,
    authToken: process.env.TURSO_AUTH_TOKEN,
  };
}

export function getDb() {
  if (!dbInstance) {
    const client = createClient(getTursoConfig());
    dbInstance = drizzle(client, { schema });
  }

  return dbInstance;
}

export const db = new Proxy({} as ReturnType<typeof drizzle<typeof schema>>, {
  get(_target, prop, receiver) {
    return Reflect.get(getDb(), prop, receiver);
  },
});

export type Database = typeof db;
