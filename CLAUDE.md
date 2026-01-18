# Project Guidelines for Claude

## Project Overview
Enterprise Next.js school website with TypeScript, Tailwind CSS, Shadcn/ui, Prisma, and Supabase.

---

## Design System - STRICTLY FOLLOW

All designs must follow the 3-color design system defined in `src/app/globals.css`.

### Base Colors

| Color   | Hex Code  | Usage                        |
|---------|-----------|------------------------------|
| Primary | `#32368C` | Navy blue - main brand color |
| Green   | `#4CAF93` | Teal/mint - success states   |
| Yellow  | `#F2C94C` | Golden - warnings, accents   |

### Color Scales Available (50-950)

- **Primary**: `primary-50` to `primary-950` (navy blue)
- **Green**: `green-50` to `green-950` (teal/mint)
- **Yellow**: `yellow-50` to `yellow-950` (golden)

### Color Usage Guidelines

1. Use **primary** colors for main UI elements, buttons, and brand identity
2. Use **green** colors for success states, confirmations, and positive actions
3. Use **yellow** colors for warnings, highlights, and attention-grabbing elements
4. Use lighter shades (50-300) for backgrounds
5. Use mid-range shades (400-600) for interactive elements
6. Use darker shades (700-950) for text and emphasis

### Tailwind Usage
```jsx
className="bg-primary-500 text-primary-50"
className="bg-green-500 text-green-50"
className="bg-yellow-400 text-yellow-950"
```

---

## Folder Structure - STRICTLY FOLLOW

```
src/
├── app/                          # Next.js App Router - routes ONLY
│   ├── (public)/                 # Public pages group
│   │   ├── page.tsx
│   │   ├── courses/
│   │   │   ├── page.tsx
│   │   │   ├── [id]/page.tsx
│   │   │   └── _components/      # Page-specific components ONLY
│   │   └── layout.tsx
│   ├── (dashboard)/              # Protected pages group
│   │   ├── dashboard/
│   │   ├── courses/
│   │   │   └── _components/      # Page-specific components ONLY
│   │   └── layout.tsx
│   └── api/                      # API routes
│       └── [feature]/
├── features/                     # Business logic by domain
│   └── [feature-name]/
│       ├── components/           # Shared within feature (2+ uses)
│       ├── hooks/
│       ├── services/             # API calls
│       ├── types/                # TypeScript interfaces
│       └── utils/
├── components/                   # Global shared components
│   ├── ui/                       # Shadcn components
│   ├── layout/                   # Header, Footer, Sidebar
│   └── common/                   # LoadingSpinner, ErrorMessage
└── lib/                          # Global utilities, DB client
```

---

## Component Placement Rules - CRITICAL

### Rule 1: Page-Specific Components
**Location:** `app/[route]/_components/`
**When:** Component used ONLY on that specific page

### Rule 2: Feature-Shared Components
**Location:** `features/[feature]/components/`
**When:** Component used 2+ times within SAME feature

### Rule 3: Global Shared Components
**Location:** `components/`
**When:** Component used across MULTIPLE features

---

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS + Shadcn/ui |
| Icons | Lucide React |
| Database | Prisma ORM + Supabase PostgreSQL |
| Forms | React Hook Form + Zod |
| Server State | React Query (@tanstack/react-query) |
| Client State | Zustand (if needed) |

---

## Naming Conventions

- **Components:** PascalCase (`CourseCard.tsx`)
- **Utilities:** camelCase (`formatDate.ts`)
- **API routes:** kebab-case folders (`api/courses/`)
- **Page-specific:** Add context prefix (`PublicCourseCard`, `DashboardCourseCard`)

---

## Code Standards

### TypeScript
- Use interfaces for objects
- Type function parameters and returns
- NEVER use `any`

### Components
- Functional components with TypeScript
- Named exports (except pages)
- Use `@/` path aliases

### API Routes
- Use Route Handlers pattern
- Validate with Zod schemas

---

## Red Flags - NEVER DO

- Putting page-specific components in `features/`
- Duplicating types across features
- Creating new components without checking `components/ui/`
- Using `any` type
- Skipping Zod validation in API routes
- Not using Prisma client singleton
- Mixing server and client components incorrectly

---

## Before Creating Any Component - ASK:

1. Where will this component be used?
2. Does a similar component exist?
3. What's the feature domain?
4. Should this use an existing Shadcn component?
5. Does this need to be a server or client component?
