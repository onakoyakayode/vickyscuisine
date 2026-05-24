"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { formatDateTime } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const ACTION_COLORS: Record<string, string> = {
  LOGIN: "text-green-400 bg-green-900/20",
  LOGOUT: "text-blue-400 bg-blue-900/20",
  LOGIN_FAILED: "text-red-400 bg-red-900/20",
  SESSION_EXPIRED: "text-amber-400 bg-amber-900/20",
  INACTIVITY_TIMEOUT: "text-amber-400 bg-amber-900/20",
  ORDER_CREATED: "text-[#c9a84c] bg-[#c9a84c]/10",
  ORDER_PAYMENT_CONFIRMED: "text-green-400 bg-green-900/20",
  ORDER_CANCELLED: "text-red-400 bg-red-900/20",
  ORDER_DELETED: "text-red-500 bg-red-900/30",
  USER_CREATED: "text-purple-400 bg-purple-900/20",
  USER_UPDATED: "text-blue-400 bg-blue-900/20",
  USER_DEACTIVATED: "text-red-400 bg-red-900/20",
  USER_REACTIVATED: "text-green-400 bg-green-900/20",
  WHATSAPP_SENT: "text-green-400 bg-green-900/20",
  SMS_SENT: "text-green-400 bg-green-900/20",
  NOTIFICATION_FAILED: "text-red-400 bg-red-900/20",
};

type AuditMeta = {
  ref?: string | number;
  total?: number;
  reason?: string;
  method?: string;
  targetUser?: string;
  [key: string]: unknown; // fallback
};

type AuditLog = {
  id: string;
  createdAt: string;
  action: string;
  entity: string;
  entityId?: string;
  ip?: string;
  userName?: string;
  user?: { role?: string };
  meta?: Record<string, unknown> | null;
};

export default function AuditPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [entity, setEntity] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["audit", page, search, entity, dateFrom, dateTo],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: String(page),
        limit: "30",
        ...(search && { action: search }),
        ...(entity && { entity }),
        ...(dateFrom && { dateFrom }),
        ...(dateTo && { dateTo }),
      });

      const res = await fetch(`/api/audit?${params}`);
      if (!res.ok) throw new Error("Failed to fetch audit logs");

      const json = await res.json();
      if (!json.success) throw new Error(json.error || "Unknown error");
      return json.data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const logs: AuditLog[] = data?.logs || [];
  const total = data?.total || 0;
  const totalPages = data?.totalPages || 1;

  return (
    <div className="p-4 md:p-6 space-y-4">
      <div>
        <h1 className="text-[#fdf9ec] font-display text-xl font-bold">
          Audit Trail
        </h1>
        <p className="text-[#5a4020] text-xs mt-0.5">
          {total} total events logged
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <div className="relative flex-1 min-w-[180px]">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a4020]"
          />
          <input
            type="text"
            placeholder="Filter by action…"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full bg-[#1a1208] border border-[#3d2b10] rounded-lg pl-9 pr-3 py-2 
              text-[#fdf9ec] text-sm placeholder-[#4a3518] focus:border-[#c9a84c] focus:outline-none"
          />
        </div>

        <select
          value={entity}
          onChange={(e) => {
            setEntity(e.target.value);
            setPage(1);
          }}
          className="bg-[#1a1208] border border-[#3d2b10] rounded-lg px-3 py-2 text-[#8a6e3a] text-sm focus:border-[#c9a84c] focus:outline-none"
        >
          <option value="">All Entities</option>
          <option value="Session">Session</option>
          <option value="Order">Order</option>
          <option value="User">User</option>
          <option value="Notification">Notification</option>
        </select>

        <input
          type="date"
          value={dateFrom}
          onChange={(e) => {
            setDateFrom(e.target.value);
            setPage(1);
          }}
          className="bg-[#1a1208] border border-[#3d2b10] rounded-lg px-3 py-2 text-[#8a6e3a] text-sm focus:border-[#c9a84c] focus:outline-none"
        />
        <input
          type="date"
          value={dateTo}
          onChange={(e) => {
            setDateTo(e.target.value);
            setPage(1);
          }}
          className="bg-[#1a1208] border border-[#3d2b10] rounded-lg px-3 py-2 text-[#8a6e3a] text-sm focus:border-[#c9a84c] focus:outline-none"
        />
      </div>

      {/* Log Table */}
      <div className="bg-[#1a1208] border border-[#3d2b10] rounded-xl overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-[#5a4020]">
            Loading audit logs…
          </div>
        ) : logs.length === 0 ? (
          <div className="p-10 text-center text-[#5a4020]">
            No audit events found
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#3d2b10]">
                    {["Time", "User", "Action", "Entity", "IP", "Details"].map(
                      (h) => (
                        <th
                          key={h}
                          className="px-4 py-3 text-left text-[#5a4020] text-xs uppercase tracking-wider font-medium whitespace-nowrap"
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a1e0a]">
                  {logs.map((log) => {
                    const { date, time } = formatDateTime(log.createdAt);
                    const meta = log.meta as AuditMeta | null;
                    const colorClass =
                      ACTION_COLORS[log.action] ||
                      "text-[#8a6e3a] bg-[#2a1e0a]";

                    return (
                      <tr
                        key={log.id}
                        className="hover:bg-[#2a1e0a] transition-colors"
                      >
                        <td className="px-4 py-3 text-[#5a4020] text-xs whitespace-nowrap">
                          <p>{time}</p>
                          <p className="text-[#3a2510]">{date}</p>
                        </td>

                        <td className="px-4 py-3">
                          {log.userName ? (
                            <>
                              <p className="text-[#fdf9ec] text-xs font-medium">
                                {log.userName}
                              </p>
                              {log.user?.role && (
                                <p className="text-[#5a4020] text-[10px]">
                                  {log.user.role}
                                </p>
                              )}
                            </>
                          ) : (
                            <span className="text-[#3a2510] text-xs italic">
                              System / Customer
                            </span>
                          )}
                        </td>

                        <td className="px-4 py-3">
                          <span
                            className={`text-[10px] font-bold px-2 py-1 rounded font-mono uppercase tracking-wider ${colorClass}`}
                          >
                            {log.action}
                          </span>
                        </td>

                        <td className="px-4 py-3">
                          <p className="text-[#8a6e3a] text-xs">{log.entity}</p>
                          {log.entityId && (
                            <p className="text-[#3a2510] text-[10px] font-mono truncate max-w-[80px]">
                              {log.entityId.slice(-8)}
                            </p>
                          )}
                        </td>

                        <td className="px-4 py-3 text-[#5a4020] text-xs font-mono">
                          {log.ip || "—"}
                        </td>

                        <td className="px-4 py-3">
                          {meta && (
                            <div className="text-[10px] text-[#5a4020] max-w-[160px] space-y-0.5">
                              {meta.ref && <p>ref: {String(meta.ref)}</p>}
                              {meta.total && (
                                <p>
                                  ₦{(meta.total as number).toLocaleString()}
                                </p>
                              )}
                              {meta.reason && <p>{String(meta.reason)}</p>}
                              {meta.method && <p>{String(meta.method)}</p>}
                              {meta.targetUser && (
                                <p>{String(meta.targetUser)}</p>
                              )}
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="px-4 py-3 border-t border-[#3d2b10] flex items-center justify-between">
                <p className="text-[#5a4020] text-xs">
                  Page {page} of {totalPages} · {total} events
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="p-1.5 text-[#8a6e3a] hover:text-[#c9a84c] disabled:opacity-30 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="p-1.5 text-[#8a6e3a] hover:text-[#c9a84c] disabled:opacity-30 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
