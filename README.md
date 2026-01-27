# Muda Smart School

A modern school website built with Next.js, featuring a clean design system and enterprise-grade architecture.

## Tech Stack

| Category       | Technology                          |
| -------------- | ----------------------------------- |
| Framework      | Next.js 16 (App Router)             |
| Language       | TypeScript                          |
| Styling        | Tailwind CSS 4 + Shadcn/ui          |
| Icons          | Lucide React                        |
| Database       | Prisma ORM + PostgreSQL (Supabase)  |
| Authentication | NextAuth.js                         |
| Forms          | React Hook Form + Zod               |
| Server State   | React Query (@tanstack/react-query) |
| Client State   | Zustand                             |
| Carousel       | Swiper                              |

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.17 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn
- [PostgreSQL](https://www.postgresql.org/) database (or [Supabase](https://supabase.com/) account)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/muda-smart-school.git
   cd muda-smart-school
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   # Database
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   ```

4. **Generate Prisma client**

   ```bash
   pnpm prisma generate
   ```

5. **Run database migrations** (if applicable)

   ```bash
   pnpm prisma db push
   ```

6. **Set up Husky git hooks**

   ```bash
   pnpm exec husky init
   ```

   Then configure the hooks:

   **Pre-commit** (runs lint-staged on commit):

   ```bash
   echo "npx lint-staged" > .husky/pre-commit
   ```

   **Pre-push** (runs build check before push):

   ```bash
   cat > .husky/pre-push << 'EOF'
   echo "🔨 Running build check before push..."

   if ! pnpm build 2>&1; then
     echo ""
     echo "❌ Build failed! Push aborted."
     echo "Fix the build errors above before pushing."
     exit 1
   fi

   echo "✅ Build succeeded. Pushing..."
   EOF
   ```

## Development

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command              | Description              |
| -------------------- | ------------------------ |
| `pnpm dev`           | Start development server |
| `pnpm build`         | Build for production     |
| `pnpm start`         | Start production server  |
| `pnpm lint`          | Run ESLint               |
| `pnpm prisma studio` | Open Prisma database GUI |

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (public)/                 # Public pages group
│   ├── (dashboard)/              # Protected pages group
│   └── api/                      # API routes
├── features/                     # Business logic by domain
│   └── [feature-name]/
│       ├── components/           # Feature-shared components
│       ├── hooks/
│       ├── services/
│       ├── types/
│       └── utils/
├── components/                   # Global shared components
│   ├── ui/                       # Shadcn components
│   ├── layout/                   # Header, Footer, Sidebar
│   └── common/                   # LoadingSpinner, ErrorMessage
└── lib/                          # Global utilities, DB client
```

## Design System

This project uses a 3-color design system:

| Color   | Hex       | Usage                        |
| ------- | --------- | ---------------------------- |
| Primary | `#32368C` | Navy blue - main brand color |
| Green   | `#4CAF93` | Teal/mint - success states   |
| Yellow  | `#F2C94C` | Golden - warnings, accents   |

Each color has scales from 50-950 available via Tailwind CSS classes:

```jsx
className = "bg-primary-500 text-primary-50";
className = "bg-green-500 text-green-50";
className = "bg-yellow-400 text-yellow-950";
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the production bundle:

```bash
pnpm build
pnpm start
```

## License

This project is private and proprietary.
