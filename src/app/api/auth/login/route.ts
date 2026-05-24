import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import {
  signAccessToken,
  signRefreshToken,
  setAuthCookies,
  getClientIp,
} from "@/lib/auth";
import { createAuditLog, ACTIONS, ENTITIES } from "@/lib/audit";
import { addDays } from "date-fns";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const ip = getClientIp(req);
    const userAgent = req.headers.get("user-agent") || "unknown";

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 },
      );
    }

    // Find user
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !user.isActive) {
      await createAuditLog({
        action: ACTIONS.LOGIN_FAILED,
        entity: ENTITIES.SESSION,
        meta: {
          email,
          reason: !user ? "user_not_found" : "account_inactive",
          ip,
        },
        ip,
        userAgent,
      });
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Verify password
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      await createAuditLog({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role as any,
          sessionId: "",
        },
        action: ACTIONS.LOGIN_FAILED,
        entity: ENTITIES.SESSION,
        meta: { reason: "wrong_password", ip },
        ip,
        userAgent,
      });
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 },
      );
    }

    // ── Enforce single session: invalidate any existing session ──────────────
    const existingSession = await prisma.activeSession.findUnique({
      where: { userId: user.id },
    });

    if (existingSession) {
      await prisma.activeSession.delete({ where: { userId: user.id } });
    }

    // Create new session
    const session = await prisma.activeSession.create({
      data: {
        userId: user.id,
        ip,
        userAgent,
        expiresAt: addDays(new Date(), 7),
      },
    });

    const authUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role as any,
      sessionId: session.sessionId,
    };

    // Sign tokens
    const [accessToken, refreshToken] = await Promise.all([
      signAccessToken(authUser),
      signRefreshToken(session.sessionId),
    ]);

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { updatedAt: new Date() },
    });

    // Audit log
    await createAuditLog({
      user: authUser,
      action: ACTIONS.LOGIN,
      entity: ENTITIES.SESSION,
      entityId: session.id,
      meta: { ip, previousSessionCleared: !!existingSession },
      ip,
      userAgent,
    });

    const response = NextResponse.json({
      success: true,
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
    });

    setAuthCookies(response, accessToken, refreshToken);
    return response;
  } catch (error) {
    console.error("[AUTH/LOGIN]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
