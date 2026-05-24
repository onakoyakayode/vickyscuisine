import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import type { AuthUser } from "@/types";

const ACCESS_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback-dev-secret-change-in-production",
);
const REFRESH_SECRET = new TextEncoder().encode(
  process.env.JWT_REFRESH_SECRET ||
    "fallback-refresh-secret-change-in-production",
);

const ACCESS_EXPIRY = "15m";
const REFRESH_EXPIRY = "7d";
const INACTIVITY_SECONDS = parseInt(process.env.INACTIVITY_TIMEOUT || "1800");

export async function signAccessToken(user: AuthUser): Promise<string> {
  return new SignJWT({ ...user })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(ACCESS_EXPIRY)
    .sign(ACCESS_SECRET);
}

export async function signRefreshToken(sessionId: string): Promise<string> {
  return new SignJWT({ sessionId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(REFRESH_EXPIRY)
    .sign(REFRESH_SECRET);
}

export async function verifyAccessToken(
  token: string,
): Promise<AuthUser | null> {
  try {
    const { payload } = await jwtVerify(token, ACCESS_SECRET);
    return payload as unknown as AuthUser;
  } catch {
    return null;
  }
}

export async function verifyRefreshToken(
  token: string,
): Promise<{ sessionId: string } | null> {
  try {
    const { payload } = await jwtVerify(token, REFRESH_SECRET);
    return payload as { sessionId: string };
  } catch {
    return null;
  }
}

export function setAuthCookies(
  response: NextResponse,
  accessToken: string,
  refreshToken: string,
) {
  const isProd = process.env.NODE_ENV === "production";

  response.cookies.set("access_token", accessToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: 15 * 60, // 15 minutes
  });

  response.cookies.set("refresh_token", refreshToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });

  // Last activity timestamp (readable by client for inactivity detection)
  response.cookies.set("last_activity", Date.now().toString(), {
    httpOnly: false,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
}

export function clearAuthCookies(response: NextResponse) {
  response.cookies.delete("access_token");
  response.cookies.delete("refresh_token");
  response.cookies.delete("last_activity");
}

export async function getAuthUser(req?: NextRequest): Promise<AuthUser | null> {
  try {
    let token: string | undefined;

    if (req) {
      token = req.cookies.get("access_token")?.value;
    } else {
      const cookieStore = await cookies();
      token = cookieStore.get("access_token")?.value;
    }

    if (!token) return null;
    return verifyAccessToken(token);
  } catch {
    return null;
  }
}

export function isInactive(req: NextRequest): boolean {
  const lastActivity = req.cookies.get("last_activity")?.value;
  if (!lastActivity) return true;
  const elapsed = (Date.now() - parseInt(lastActivity)) / 1000;
  return elapsed > INACTIVITY_SECONDS;
}

export function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}
