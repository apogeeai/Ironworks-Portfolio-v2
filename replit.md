# IronWorks Interactive Portfolio

## Overview

IronWorks Interactive is a portfolio website for a full-stack developer and UI/UX designer. The site showcases development work and design projects using a modern, static-export Next.js application. It features a hero section, portfolio gallery with lightbox functionality, and a responsive navigation system with smooth scrolling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 13.5** with App Router architecture
- **Static export** configuration (`output: 'export'`) for deployment as static files
- **TypeScript** for type safety throughout the codebase

### UI Component System
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for styling with CSS variables for theming
- **Framer Motion** for animations and transitions
- **class-variance-authority (CVA)** for component variant management

### Key Design Patterns

**Component Organization:**
- `/components/ui/` - Reusable shadcn/ui components (buttons, cards, dialogs, etc.)
- `/components/sections/` - Page section components (hero, portfolio, contact, etc.)
- `/components/` - Shared layout components (navbar, footer, theme provider)

**Theming:**
- Dark/light mode support via `next-themes`
- CSS variables defined in `globals.css` for consistent color tokens
- HSL color format for easy customization

**Static Site Generation:**
- Pre-built HTML output to `/out` directory
- Unoptimized images for static hosting compatibility
- Custom `serve.json` for SPA-style routing with fallbacks

### Data Management
- Project and skill data stored in `/lib/data.ts` as TypeScript types and constants
- No database integration - content is static
- Image assets served from `/public` directory

## External Dependencies

### UI Libraries
- **Radix UI** - Accessible component primitives (dialog, dropdown, accordion, tabs, etc.)
- **Lucide React** - Icon library
- **Embla Carousel** - Carousel/slider functionality
- **React Day Picker** - Calendar component
- **Vaul** - Drawer component
- **CMDK** - Command palette component
- **Sonner** - Toast notifications

### Form Handling
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Zod integration for React Hook Form

### Styling & Animation
- **Tailwind CSS** with custom configuration
- **Framer Motion** - Animation library
- **tailwind-merge** and **clsx** - Utility class management

### Build & Development
- **Sharp** - Image processing (for thumbnail generation script)
- **ESLint** - Code linting with Next.js configuration

### Deployment
- Static file serving configured for platforms like Netlify/Vercel
- Custom `server.js` for local static file serving
- No backend API or database required