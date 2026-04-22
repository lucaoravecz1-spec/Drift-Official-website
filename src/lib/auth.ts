import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { bearer } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import { NextRequest } from 'next/server';
import { headers } from "next/headers"
import { getDb } from "@/db";
 
let authInstance: ReturnType<typeof betterAuth> | null = null;

export function getAuth() {
  if (!authInstance) {
    authInstance = betterAuth({
      database: drizzleAdapter(getDb(), {
        provider: "sqlite",
      }),
      emailAndPassword: {
        enabled: true
      },
      baseURL: process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_SITE_URL,
      trustedOrigins: [
        process.env.BETTER_AUTH_URL || "",
        process.env.NEXT_PUBLIC_SITE_URL || ""
      ].filter(Boolean),
      advanced: {
        trustHost: true
      },
      plugins: [bearer(), nextCookies()]
    });
  }

  return authInstance;
}

// Session validation helper
export async function getCurrentUser(request: NextRequest) {
  const session = await getAuth().api.getSession({ headers: await headers() });
  return session?.user || null;
}
