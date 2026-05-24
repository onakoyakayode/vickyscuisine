"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";
import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  ScrollText,
  Settings,
  LogOut,
  ChefHat,
  PlusCircle,
} from "lucide-react";

const NAV = [
  {
    href: "/admin/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    roles: ["SUPERADMIN", "ADMIN", "CASHIER"],
  },
  {
    href: "/admin/orders",
    label: "Orders",
    icon: ShoppingBag,
    roles: ["SUPERADMIN", "ADMIN", "CASHIER"],
  },
  {
    href: "/admin/orders/new",
    label: "New Order",
    icon: PlusCircle,
    roles: ["SUPERADMIN", "ADMIN", "CASHIER"],
  },
  {
    href: "/admin/menu",
    label: "Menu",
    icon: ChefHat,
    roles: ["SUPERADMIN", "ADMIN", "CASHIER"],
  },
  {
    href: "/admin/users",
    label: "Users",
    icon: Users,
    roles: ["SUPERADMIN", "ADMIN"],
  },
  {
    href: "/admin/audit",
    label: "Audit Trail",
    icon: ScrollText,
    roles: ["SUPERADMIN", "ADMIN"],
  },
  {
    href: "/admin/settings",
    label: "Settings",
    icon: Settings,
    roles: ["SUPERADMIN"],
  },
];

const INACTIVITY_MS = 30 * 60 * 1000; // 30 minutes

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, setUser, logout } = useAuthStore();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { data: pendingOrdersData } = useQuery({
    queryKey: ["pending-orders-sidebar"],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: "1",
        limit: "1",
        status: "PENDING",
      });

      const res = await fetch(`/api/orders?${params}`);
      const json = await res.json();

      if (!json.success) throw new Error(json.error);

      return json.data;
    },
    refetchInterval: 5000,
  });

  const pendingCount = pendingOrdersData?.total || 0;

  // ── 1. Verify auth on mount ──────────────────────────────────────────────
  const {
    data: authData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["auth-me"],
    queryFn: async () => {
      const res = await fetch("/api/auth/me", {
        credentials: "include",
      });
      if (res.status === 401) {
        throw new Error("Unauthorized");
      }
      if (!res.ok) {
        throw new Error("Auth check failed");
      }

      const json = await res.json();
      return json.data;
    },
    retry: 2,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (isError) {
      console.log("Auth failed");

      // only force logout if it's truly unauthorized
      logout();
      router.push("/login");
    }
  }, [isError]);

  function throttle<T extends (...args: any[]) => void>(fn: T, delay: number) {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        fn(...args);
      }
    };
  }

  useEffect(() => {
    if (!user) return;

    const update = () => {
      useAuthStore.getState().updateActivity();
    };

    const events = [
      "mousedown",
      "keydown",
      "touchstart",
      "scroll",
      "mousemove",
      "click",
      "focus",
      "visibilitychange",
    ];

    const throttledUpdate = throttle(update, 5000); // don't spam

    events.forEach((e) => {
      window.addEventListener(e, throttledUpdate, { passive: true });
    });

    // Extra safety
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") update();
    });

    return () => {
      events.forEach((e) => window.removeEventListener(e, throttledUpdate));
      document.removeEventListener("visibilitychange", update);
    };
  }, [user]);

  useEffect(() => {
    if (authData?.user) {
      setUser({ ...authData.user, sessionId: user?.sessionId || "" });
      // Reset activity timestamp when we confirm the user is logged in
      useAuthStore.getState().updateActivity();
    }
  }, [authData]);

  // ── 2. Single activity listener — updates lastActivity in store ──────────
  useEffect(() => {
    const update = () => useAuthStore.getState().updateActivity();
    const events = [
      "mousedown",
      "keydown",
      "touchstart",
      "scroll",
      "mousemove",
      "click",
    ];
    events.forEach((e) =>
      window.addEventListener(e, update, { passive: true }),
    );
    return () => events.forEach((e) => window.removeEventListener(e, update));
  }, []); // runs once, never re-registers

  // ── 3. Inactivity check — reads live store state every 60s ──────────────
  useEffect(() => {
    if (!user) return;
    intervalRef.current = setInterval(() => {
      const store = useAuthStore.getState();
      if (!store.isAuthenticated) return;
      const idleMs = Date.now() - store.lastActivity;
      console.log(`Idle for ${Math.round(idleMs / 1000)}s`);
      if (idleMs > INACTIVITY_MS && store.user) {
        clearInterval(intervalRef.current!);
        toast.error("Session expired due to inactivity");
        fetch("/api/auth/logout", { method: "POST" }).finally(() => {
          store.logout();
          router.push("/login?reason=inactivity");
        });
      }
    }, 30 * 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [user]); // runs once only

  // ── Logout ───────────────────────────────────────────────────────────────
  const logoutMutation = useMutation({
    mutationFn: async () => {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    },
    onSettled: () => {
      logout();
      router.push("/login");
    },
  });

  // ── Show loading spinner while verifying auth — NOT null ─────────────────
  // Returning null causes unmount → remount → lastActivity resets → logout loop
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[#21c55e] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
          <p className="text-[#21c55e] text-sm">Loading…</p>
        </div>
      </div>
    );
  }

  // If not loading and no user, redirect handled by useEffect above
  // if (!isLoading && !user && !isError) return null;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm">Restoring session...</p>
      </div>
    );
  }

  const currentUser = user;
  const visibleNav = NAV.filter((n) =>
    currentUser ? n.roles.includes(currentUser.role) : false,
  );

  return (
    <div className="min-h-screen bg-[#c9a84c15] flex">
      {/* Sidebar */}
      <aside className="w-56 bg-white shadow-lg flex-col fixed h-full z-20 hidden md:flex">
        {/* Brand */}
        <div className="px-4 py-5 border-b border-[#e8dcc8]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
              <ChefHat size={16} className="text-green-500" />
            </div>
            <div>
              <p className="text-[#085208] font-bold text-sm leading-tight">
                Vicky's Cuisine
              </p>
              <p className="text-[#5a4020] text-[9px] tracking-widest uppercase">
                Admin
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 py-4 space-y-0.5 overflow-y-auto">
          {visibleNav.map((item) => {
            const isActive =
              pathname === item.href ||
              (pathname.startsWith(item.href + "/") &&
                item.href !== "/admin/orders/new");
            const Icon = item.icon;
            return (
              // <Link
              //   key={item.href}
              //   href={item.href}
              //   className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
              //     ${
              //       isActive
              //         ? "bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20"
              //         : "text-gray-500 hover:text-[#c9a84c] hover:bg-[#fdf9ec]"
              //     }`}
              // >
              //   <Icon size={16} className="flex-shrink-0" />
              //   {item.label}
              // </Link>
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all
    ${
      isActive
        ? "bg-green-500/15 text-[#085208] border border-[#c9a84c]/20"
        : "text-gray-500 hover:text-[#085208] hover:bg-green-400/10"
    }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={16} className="flex-shrink-0" />
                  {item.label}
                </div>

                {item.href === "/admin/orders" && pendingCount > 0 && (
                  <span className="min-w-5 h-5 px-1.5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {pendingCount}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User & Logout */}
        <div className="border-t border-[#e8dcc8] p-3">
          <div className="px-2 py-2 mb-2">
            <p className="text-gray-800 text-xs font-semibold truncate">
              {currentUser?.name}
            </p>
            <p className="text-gray-400 text-[10px] truncate">
              {currentUser?.email}
            </p>
            <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider text-[#085208] bg-green-500/10 px-1.5 py-0.5 rounded">
              {currentUser?.role}
            </span>
          </div>
          <button
            onClick={() => logoutMutation.mutate()}
            disabled={logoutMutation.isPending}
            className="w-full flex items-center gap-2 text-gray-400 hover:text-red-500 hover:bg-red-50 px-3 py-2 rounded-lg text-sm transition-all"
          >
            <LogOut size={15} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-[#e8dcc8] z-20 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <p className="text-[#c9a84c] font-bold text-sm">Vicky's Admin</p>
          <div className="flex items-center gap-1 overflow-x-auto">
            {visibleNav.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`p-2 rounded-lg flex-shrink-0 transition-colors
                    ${isActive ? "bg-[#c9a84c]/10 text-[#c9a84c]" : "text-gray-400"}`}
                >
                  <Icon size={18} />
                </Link>
              );
            })}
            <button
              onClick={() => logoutMutation.mutate()}
              className="p-2 text-gray-400 hover:text-red-500"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 md:ml-56 mt-[52px] md:mt-0 overflow-auto min-h-screen bg-[#f9fafb]">
        {children}
      </main>
    </div>
  );
}
