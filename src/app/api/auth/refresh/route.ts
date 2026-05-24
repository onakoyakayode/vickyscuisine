import { NextRequest, NextResponse } from "next/server";
import {
  verifyRefreshToken,
  signAccessToken,
  signRefreshToken,
  setAuthCookies,
  getClientIp,
} from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createAuditLog, ACTIONS, ENTITIES } from "@/lib/audit";
import { addDays } from "date-fns";

export async function POST(req: NextRequest) {
  try {
    const refreshToken = req.cookies.get("refresh_token")?.value;
    const ip = getClientIp(req);

    if (!refreshToken) {
      return NextResponse.json(
        { success: false, error: "No refresh token" },
        { status: 401 }
      );
    }

    const payload = await verifyRefreshToken(refreshToken);
    if (!payload) {
      return NextResponse.json(
        { success: false, error: "Invalid refresh token" },
        { status: 401 }
      );
    }

    // Validate session still exists in DB
    const session = await prisma.activeSession.findUnique({
      where: { sessionId: payload.sessionId },
      include: { user: true },
    });

    if (!session || !session.user.isActive || session.expiresAt < new Date()) {
      return NextResponse.json(
        { success: false, error: "Session expired or invalidated" },
        { status: 401 }
      );
    }

    const authUser = {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      role: session.user.role as any,
      sessionId: session.sessionId,
    };

    // Refresh session expiry
    await prisma.activeSession.update({
      where: { id: session.id },
      data: { expiresAt: addDays(new Date(), 7) },
    });

    const [newAccessToken, newRefreshToken] = await Promise.all([
      signAccessToken(authUser),
      signRefreshToken(session.sessionId),
    ]);

    await createAuditLog({
      user: authUser,
      action: ACTIONS.TOKEN_REFRESHED,
      entity: ENTITIES.SESSION,
      ip,
    });

    const response = NextResponse.json({
      success: true,
      data: { user: { id: authUser.id, name: authUser.name, email: authUser.email, role: authUser.role } },
    });
    setAuthCookies(response, newAccessToken, newRefreshToken);
    return response;
  } catch (error) {
    console.error("[AUTH/REFRESH]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
