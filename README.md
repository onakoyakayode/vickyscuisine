# Vicky's Cuisine POS System

A full-stack Next.js 14 point-of-sale system with customer ordering, admin dashboard, payment confirmation, audit trails, and WhatsApp/SMS receipts.

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Database | PostgreSQL via **Neon** (serverless) |
| ORM | Prisma v7 + `@prisma/adapter-neon` |
| Auth | JWT in httpOnly cookies (`jose`) |
| State | Zustand (persisted) + TanStack Query v5 |
| Notifications | WhatsApp Cloud API → Twilio SMS → `wa.me` deep link |
| Styling | Tailwind CSS |

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in `.env.local`:

```env
# Required
DATABASE_URL="postgresql://user:pass@ep-xxx.neon.tech/vickys_cuisine?sslmode=require"
JWT_SECRET="run: openssl rand -base64 32"
JWT_REFRESH_SECRET="run: openssl rand -base64 32"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Optional (for server-side notifications)
TWILIO_ACCOUNT_SID="..."
TWILIO_AUTH_TOKEN="..."
TWILIO_PHONE_NUMBER="+234..."
WHATSAPP_ACCESS_TOKEN="..."
WHATSAPP_PHONE_NUMBER_ID="..."
```

### 3. Set up the database (Prisma v7)

```bash
# Push schema to Neon
npm run db:push

# Generate Prisma client
npm run db:generate

# Seed with default admin users
npm run db:seed
```

Default credentials after seed:
- **Superadmin:** `admin@vickyscuisine.com` / `admin1234`
- **Cashier:** `cashier@vickyscuisine.com` / `cashier123`

> ⚠️ Change these immediately after first login!

### 4. Run the dev server

```bash
npm run dev
```

- Customer ordering: http://localhost:3000
- Admin portal: http://localhost:3000/admin/login

---

## Prisma v7 Notes

Prisma v7 no longer supports `url = env("DATABASE_URL")` in `schema.prisma`. Instead:

- **`prisma.config.ts`** — tells the CLI which adapter to use for migrations
- **`src/lib/prisma.ts`** — uses `PrismaNeon` adapter at runtime

The `DATABASE_URL` env var is still used, just consumed by the adapter directly.

```bash
# If you get "datasource url" errors, make sure you have:
npm install @prisma/adapter-neon @neondatabase/serverless
```

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Customer order page (public)
│   ├── customer/receipt/page.tsx   # Receipt + WhatsApp share
│   ├── admin/
│   │   ├── layout.tsx              # Admin shell + auth guard + inactivity
│   │   ├── login/page.tsx          # Staff login
│   │   ├── dashboard/page.tsx      # KPIs + live orders
│   │   ├── orders/
│   │   │   ├── page.tsx            # Order list + search + filters
│   │   │   ├── new/page.tsx        # Admin creates order
│   │   │   └── [id]/page.tsx       # Order detail + payment confirmation
│   │   ├── users/page.tsx          # CRUD staff accounts
│   │   ├── audit/page.tsx          # Audit trail
│   │   └── settings/page.tsx       # System settings
│   └── api/
│       ├── auth/{login,logout,refresh,me}/
│       ├── orders/[id]/
│       ├── users/[id]/
│       ├── dashboard/
│       ├── audit/
│       └── notifications/
├── lib/
│   ├── prisma.ts       # Prisma client (Neon adapter)
│   ├── auth.ts         # JWT sign/verify/cookies
│   ├── audit.ts        # Audit log helper + action constants
│   ├── notifications.ts # WA Cloud API → Twilio → deep link
│   ├── menu.ts         # Full Vicky's menu data
│   └── utils.ts        # Formatters, ref generator
├── store/
│   ├── orderStore.ts   # Zustand order state (sessionStorage)
│   └── authStore.ts    # Zustand auth state (localStorage)
├── types/index.ts
├── components/
│   ├── Providers.tsx   # TanStack Query provider
│   └── ui/             # Reusable UI components
└── middleware.ts        # JWT guard + inactivity check
```

---

## Security Features

| Feature | Implementation |
|---------|---------------|
| JWT auth | httpOnly cookies, 15min access + 7d refresh |
| Single session | `ActiveSession` table — login kicks existing session |
| Inactivity logout | 30min timeout, checked client-side + middleware |
| Audit logging | Every action logged with user, IP, timestamp |
| Role-based access | SUPERADMIN / ADMIN / CASHIER guards on all routes |
| Soft deletes | Users deactivated, not hard-deleted |

---

## Notification Flow

When a customer places an order:
1. **WhatsApp Cloud API** is tried first (if configured)
2. Falls back to **Twilio SMS** (if configured)
3. Falls back to **`wa.me` deep link** — opens WhatsApp on the customer's device

Admin-created orders do **not** send notifications.

---

## Roles & Permissions

| Action | CASHIER | ADMIN | SUPERADMIN |
|--------|---------|-------|------------|
| View dashboard | ✓ | ✓ | ✓ |
| Create order | ✓ | ✓ | ✓ |
| Confirm payment | ✓ | ✓ | ✓ |
| View all orders | ✓ | ✓ | ✓ |
| Cancel order | — | ✓ | ✓ |
| Delete order | — | — | ✓ |
| View users | — | ✓ | ✓ |
| Create/edit users | — | — | ✓ |
| View audit trail | — | ✓ | ✓ |
| System settings | — | — | ✓ |

---

## Deployment (Vercel + Neon)

1. Push to GitHub
2. Import to Vercel
3. Add all `.env.local` vars to Vercel environment variables
4. Deploy — Neon works natively with Vercel edge runtime

```bash
npm run build   # Verify build locally first
```
