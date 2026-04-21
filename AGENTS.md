## Project Summary
A modern business communication platform featuring AI voice assistants for reception, sales, and operations. The application includes a landing page, voice options exploration, and a suite of tools to streamline workflows and provide 24/7 support.

## Tech Stack
- **Framework**: Next.js 15 (App Router, Turbopack)
- **Authentication**: Better Auth with Drizzle adapter
- **Database**: Turso (libSQL) with Drizzle ORM
- **Styling**: Tailwind CSS, Framer Motion for animations
- **Icons**: Lucide React
- **Hosting/Infrastructure**: Supabase (for some scripts), Turso

## Architecture
- `src/app`: Next.js App Router pages and API routes
- `src/components`: UI components categorized into auth, navigation, and sections
- `src/db`: Database schema and connection configuration
- `src/lib`: Core utility functions and authentication setup
- `src/hooks`: Custom React hooks

## User Preferences
- Uses Better Auth for authentication.
- Prefers Turso for the database.
- Uses Framer Motion for high-impact frontend animations.

## Project Guidelines
- **Authentication**: Ensure `trustHost: true` is set in Better Auth config for custom domain support.
- **Middleware**: Middleware must explicitly return `NextResponse.next()` and have a comprehensive matcher to support session detection across the site.
- **Styling**: Follow the dark, high-end aesthetic established in the existing components.
- **Environment Variables**: `BETTER_AUTH_URL` and `NEXT_PUBLIC_SITE_URL` must be set for production deployments.

## Common Patterns
- **Page Structure**: Most pages follow a pattern of a Header, main content with multiple sections, and a Footer.
- **Auth Implementation**: `better-auth` is used with the `next-js` plugin for seamless session management.
