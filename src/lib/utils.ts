import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateOrderRef(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const mins = String(now.getMinutes()).padStart(2, "0");
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `VCN-${year}${month}${day}-${hours}${mins}-${rand}`;
}

export function formatCurrency(amount: number): string {
  return `₦${amount?.toLocaleString("en-NG")}`;
}

export function formatDateTime(dateStr: string): {
  date: string;
  time: string;
} {
  const d = new Date(dateStr);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return {
    date: `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`,
    time: d.toLocaleTimeString("en-NG", { hour: "2-digit", minute: "2-digit" }),
  };
}

export function getStatusColor(status: string): string {
  switch (status) {
    case "PENDING":
      return "text-amber-700 bg-amber-50 border-amber-300 shadow-sm shadow-amber-100";
    case "CONFIRMED":
      return "text-emerald-700 bg-emerald-50 border-emerald-300 shadow-sm shadow-emerald-100";
    case "CANCELLED":
      return "text-red-600 bg-red-50 border-red-300 shadow-sm shadow-red-100";
    default:
      return "text-gray-500 bg-gray-50 border-gray-200 shadow-sm";
  }
}

export function getPaymentStatusColor(status: string): string {
  switch (status) {
    case "PAID":
      return "text-emerald-700 bg-emerald-50 border-emerald-300 shadow-sm shadow-emerald-100";
    case "UNPAID":
      return "text-rose-600 bg-rose-50 border-rose-300 shadow-sm shadow-rose-100";
    default:
      return "text-gray-500 bg-gray-50 border-gray-200 shadow-sm";
  }
}

export function getPaymentMethodIcon(method?: string): string {
  switch (method) {
    case "CASH":
      return "💵";
    case "TRANSFER":
      return "🏦";
    case "POS":
      return "💳";
    default:
      return "—";
  }
}

export function getPaymentMethodColor(method?: string): string {
  switch (method) {
    case "CASH":
      return "text-green-700 bg-green-50 border-green-300 shadow-sm shadow-green-100";
    case "TRANSFER":
      return "text-blue-700 bg-blue-50 border-blue-300 shadow-sm shadow-blue-100";
    case "POS":
      return "text-purple-700 bg-purple-50 border-purple-300 shadow-sm shadow-purple-100";
    default:
      return "text-gray-500 bg-gray-50 border-gray-200 shadow-sm";
  }
}

export function getRoleColor(role: string): string {
  switch (role) {
    case "SUPERADMIN":
      return "text-purple-700 bg-purple-50 border-purple-300 shadow-sm shadow-purple-100";
    case "ADMIN":
      return "text-blue-700 bg-blue-50 border-blue-300 shadow-sm shadow-blue-100";
    case "CASHIER":
      return "text-amber-700 bg-amber-50 border-amber-300 shadow-sm shadow-amber-100";
    default:
      return "text-gray-500 bg-gray-50 border-gray-200 shadow-sm";
  }
}

export function truncate(str: string, length: number): string {
  return str.length > length ? str.slice(0, length) + "…" : str;
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
