import { prisma } from "@/lib/prisma";
import type { AuthUser } from "@/types";

interface AuditParams {
  user?: AuthUser | null;
  action: string;
  entity: string;
  entityId?: string;
  meta?: Record<string, unknown>;
  ip?: string;
  userAgent?: string;
}

export async function createAuditLog(params: AuditParams) {
  try {
    await prisma.auditLog.create({
      data: {
        userId: params.user?.id,
        userName: params.user?.name,
        action: params.action,
        entity: params.entity,
        entityId: params.entityId,
        meta: params.meta as any,
        ip: params.ip,
        userAgent: params.userAgent,
      },
    });
  } catch (error) {
    // Non-blocking — log to console but don't throw
    console.error("[AuditLog] Failed to create audit log:", error);
  }
}

// Common action constants
export const ACTIONS = {
  // Auth
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  LOGIN_FAILED: "LOGIN_FAILED",
  SESSION_EXPIRED: "SESSION_EXPIRED",
  TOKEN_REFRESHED: "TOKEN_REFRESHED",

  // Orders
  ORDER_CREATED: "ORDER_CREATED",
  ORDER_UPDATED: "ORDER_UPDATED",
  ORDER_CANCELLED: "ORDER_CANCELLED",
  ORDER_PAYMENT_CONFIRMED: "ORDER_PAYMENT_CONFIRMED",

  // Users
  USER_CREATED: "USER_CREATED",
  USER_UPDATED: "USER_UPDATED",
  USER_DEACTIVATED: "USER_DEACTIVATED",
  USER_REACTIVATED: "USER_REACTIVATED",
  USER_PASSWORD_CHANGED: "USER_PASSWORD_CHANGED",

  // Notifications
  WHATSAPP_SENT: "WHATSAPP_SENT",
  SMS_SENT: "SMS_SENT",
  NOTIFICATION_FAILED: "NOTIFICATION_FAILED",
} as const;

export const ENTITIES = {
  USER: "User",
  ORDER: "Order",
  SESSION: "Session",
  NOTIFICATION: "Notification",
} as const;

export type AuditAction = (typeof ACTIONS)[keyof typeof ACTIONS];
