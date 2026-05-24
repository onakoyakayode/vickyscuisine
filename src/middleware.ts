import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken, isInactive, getClientIp } from "@/lib/auth";

// These paths are completely public — no auth needed
const PUBLIC_PATHS = [
  "/",
  "/login",
  "/customer",
  "/customer/receipt",
  "/api/orders/create",
  "/api/orders",
  "/api/auth/login",
  "/api/auth/refresh",
  "/api/auth/logout",
];

// Only these paths require auth
const PROTECTED_PATHS = [
  "/admin",
  "/api/users",
  "/api/audit",
  "/api/dashboard",
  "/api/notifications",
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Always allow public paths immediately
  if (isPublic(pathname)) {
    return NextResponse.next();
  }

  // Only apply auth checks to protected paths
  if (!isProtected(pathname)) {
    return NextResponse.next();
  }

  // Allow the login page itself without auth
  if (pathname === "/login") {
    return NextResponse.next();
  }

  // Verify access token
  const accessToken = req.cookies.get("access_token")?.value;

  if (!accessToken) {
    return redirectToLogin(req, pathname);
  }

  const user = await verifyAccessToken(accessToken);
  if (!user) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json(
        { success: false, error: "Unauthorized", code: "TOKEN_EXPIRED" },
        { status: 401 },
      );
    }
    return redirectToLogin(req, pathname);
  }

  // Check inactivity timeout
  if (isInactive(req)) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json(
        {
          success: false,
          error: "Session expired due to inactivity",
          code: "INACTIVITY_TIMEOUT",
        },
        { status: 401 },
      );
    }
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("reason", "inactivity");
    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete("access_token");
    response.cookies.delete("refresh_token");
    response.cookies.delete("last_activity");
    return response;
  }

  // Update last activity timestamp
  const response = NextResponse.next();
  response.cookies.set("last_activity", Date.now().toString(), {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });

  response.headers.set("x-user-id", user.id);
  response.headers.set("x-user-role", user.role);
  response.headers.set("x-session-id", user.sessionId);

  return response;
}

function isPublic(pathname: string): boolean {
  return PUBLIC_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/"),
  );
}

function isProtected(pathname: string): boolean {
  return PROTECTED_PATHS.some((p) => pathname.startsWith(p));
}

function redirectToLogin(req: NextRequest, from: string): NextResponse {
  const loginUrl = new URL("/login", req.url);
  loginUrl.searchParams.set("from", from);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|logo.jpg|fonts).*)"],
};
