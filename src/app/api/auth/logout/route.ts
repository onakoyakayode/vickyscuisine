import { NextRequest, NextResponse } from "next/server";
import { getAuthUser, clearAuthCookies, getClientIp } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createAuditLog, ACTIONS, ENTITIES } from "@/lib/audit";

export async function POST(req: NextRequest) {
  try {
    const user = await getAuthUser(req);
    const ip = getClientIp(req);
    const userAgent = req.headers.get("user-agent") || "unknown";

    if (user) {
      // Remove active session
      await prisma.activeSession.deleteMany({
        where: { userId: user.id },
      });

      await createAuditLog({
        user,
        action: ACTIONS.LOGOUT,
        entity: ENTITIES.SESSION,
        meta: { ip },
        ip,
        userAgent,
      });
    }

    const response = NextResponse.json({ success: true });
    clearAuthCookies(response);
    return response;
  } catch (error) {
    console.error("[AUTH/LOGOUT]", error);
    const response = NextResponse.json({ success: true });
    clearAuthCookies(response);
    return response;
  }
}
