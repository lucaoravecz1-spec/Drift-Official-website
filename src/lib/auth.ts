import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { bearer } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import { NextRequest } from 'next/server';
import { headers } from "next/headers"
import { db } from "@/db";
 
export const auth = betterAuth({
	database: drizzleAdapter(db, {
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

// Session validation helper
export async function getCurrentUser(request: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() });
  return session?.user || null;
}