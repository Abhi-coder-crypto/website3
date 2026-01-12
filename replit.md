# Abhijit Vaghani Portfolio

## Overview

A personal portfolio/landing page for music artist Abhijit Vaghani. This is a cinematic, visually-driven single-page application featuring smooth animations, a contact form for inquiries, and a dark aesthetic design. The site showcases the artist's work with parallax effects and scroll-based animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for scroll effects and cinematic animations
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: REST endpoints defined in shared/routes.ts with Zod schemas for type-safe request/response validation
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Storage**: Currently using in-memory storage (MemStorage class) with interface ready for database implementation

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Drizzle database schema definitions and Zod insert schemas
- `routes.ts`: API route definitions with input/output schemas for type-safe API contracts

### Build System
- Development: `tsx` for running TypeScript directly
- Production: esbuild bundles server code, Vite builds client to `dist/public`
- Database migrations: Drizzle Kit with `db:push` command

### Design System
- Dark theme with red/primary accent color
- Custom fonts: Cinzel (display), Manrope (body), Mr De Haviland (script)
- CSS variables for consistent theming across components

## External Dependencies

### Database
- **PostgreSQL**: Required via `DATABASE_URL` environment variable
- **Drizzle ORM**: Schema-first approach with migrations in `./migrations`
- **connect-pg-simple**: Session storage support (available but not currently active)

### Third-Party Libraries
- **Radix UI**: Accessible primitive components (dialog, dropdown, tabs, etc.)
- **Embla Carousel**: Carousel/slider functionality
- **date-fns**: Date formatting utilities
- **lucide-react**: Icon library

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling