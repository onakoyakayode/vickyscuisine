import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: authUser.id },
      select: { id: true, name: true, email: true, role: true, isActive: true },
    });

    // if (!user || !user.isActive) {
    //   return NextResponse.json(
    //     { success: false, error: "User not found or inactive" },
    //     { status: 401 }
    //   );
    // }

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 401 },
      );
    }

    if (!user.isActive) {
      return NextResponse.json(
        { success: false, error: "Account deactivated" },
        { status: 403 }, // Use 403 instead of 401 for deactivated accounts
      );
    }

    return NextResponse.json({ success: true, data: { user } });
  } catch (error) {
    console.error("[AUTH/ME]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
