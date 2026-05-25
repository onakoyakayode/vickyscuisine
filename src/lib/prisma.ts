import { PrismaClient } from "../generated/prisma";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Debug: Log the URL status (remove after fixing)
const dbUrl = process.env.DATABASE_URL;
console.log("[PRISMA] DATABASE_URL exists:", !!dbUrl);
console.log(
  "[PRISMA] DATABASE_URL prefix:",
  dbUrl?.substring(0, 20) || "NOT SET",
);

if (!dbUrl) {
  console.error(
    "[PRISMA] FATAL: DATABASE_URL environment variable is missing!",
  );
  // List all env vars (be careful, redact sensitive ones)
  console.log(
    "[PRISMA] Available env keys:",
    Object.keys(process.env).filter(
      (k) =>
        !k.includes("KEY") && !k.includes("SECRET") && !k.includes("TOKEN"),
    ),
  );
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
