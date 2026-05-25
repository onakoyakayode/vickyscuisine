import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({
//     hasDatabaseUrl: !!process.env.DATABASE_URL,
//     databaseUrlStartsCorrectly:
//       process.env.DATABASE_URL?.startsWith("postgresql://"),
//     nodeEnv: process.env.NODE_ENV,
//   });
// }

export async function GET() {
  return Response.json({
    hasDbUrl: !!process.env.DATABASE_URL,
    dbUrlType: typeof process.env.DATABASE_URL,
    dbUrlLength: process.env.DATABASE_URL?.length || 0,
    dbUrlStart: process.env.DATABASE_URL?.substring(0, 15) || "not set",
    // Don't log full URL for security
  });
}
