// import { PrismaClient } from "../generated/prisma";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log:
//       process.env.NODE_ENV === "development"
//         ? ["query", "error", "warn"]
//         : ["error"],
//   });

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
// }

// import { PrismaClient } from "../generated/prisma";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// // Get the URL with a fallback
// const databaseUrl = process.env.DATABASE_URL;

// if (!databaseUrl) {
//   throw new Error("DATABASE_URL environment variable is not defined");
// }

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     datasourceUrl: databaseUrl, // Explicitly pass the URL here
//     log:
//       process.env.NODE_ENV === "development"
//         ? ["query", "error", "warn"]
//         : ["error"],
//   });

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
// }

import { PrismaClient } from "../generated/prisma";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Temporary workaround for Vercel
const getDbUrl = () => {
  const url = process.env.DATABASE_URL;
  // if (!url) {
  //   // Fallback - replace with your actual URL (temporary only!)
  //   return "postgresql://neondb_owner:npg_r9u7qXBzcywI@ep-billowing-dew-am90xpaq-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require";
  // }
  if (!url) {
    throw new Error("DATABASE_URL is not defined in environment variables");
  }
  return url;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasourceUrl: getDbUrl(),
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
