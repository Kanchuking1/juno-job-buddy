This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## API Design
| Route                   | Method | Purpose                              |
| ----------------------- | ------ | ------------------------------------ |
| `/api/applications`     | GET    | List apps (with filters/search/sort) |
| `/api/applications`     | POST   | Create application                   |
| `/api/applications/:id` | GET    | Get single application               |
| `/api/applications/:id` | PATCH  | Update application                   |
| `/api/applications/:id` | DELETE | Delete                               |


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Code Setup

```
juno/
├── src/
│   ├── app/
│   │   ├── (auth)/           # Auth pages like /login, /callback
│   │   ├── (dashboard)/      # Protected routes
│   │   ├── api/              # NextJS API routes
│   │   │   ├── auth/route.ts
│   │   │   └── resume/route.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/               # shadcn/ui components
│   │   ├── layout/
│   │   └── common/
│   ├── lib/
│   │   ├── auth.ts           # Google OAuth setup
│   │   ├── db.ts             # Prisma / Postgres config
│   │   ├── s3.ts             # AWS S3 helper
│   │   └── ai/               # MCP / ADK or LangChain pipelines later
│   ├── types/
│   ├── utils/
│   └── styles/
│       └── globals.css
├── prisma/
│   └── schema.prisma
├── public/
├── .env.local
├── next.config.mjs
└── package.json
```

1. Install `dotenv`, and add `import "dotenv/config";` to your `prisma.config.ts` file to load environment variables from `.env`.
2. Run prisma dev to start a local Prisma Postgres server.
3. Define models in the schema.prisma file.
4. Run prisma migrate dev to migrate your local Prisma Postgres database.
5. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and a managed serverless Postgres database. Read: https://pris.ly/cli/beyond-orm