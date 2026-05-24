export type Role = "SUPERADMIN" | "ADMIN" | "CASHIER";
export type OrderStatus = "PENDING" | "CONFIRMED" | "CANCELLED";
export type PaymentMethod = "CASH" | "TRANSFER" | "POS";
export type PaymentStatus = "UNPAID" | "PAID";
export type OrderSource = "CUSTOMER" | "ADMIN";

export interface OrderItem {
  name: string;
  category: string;
  price: number;
  qty: number;
  subtotal: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  ref: string;
  customerName: string;
  customerPhone?: string;
  items: OrderItem[];
  subtotal: number;
  total: number;
  status: OrderStatus;
  paymentMethod?: PaymentMethod;
  paymentStatus: PaymentStatus;
  source: OrderSource;
  notes?: string;
  createdById?: string;
  confirmedById?: string;
  createdAt: string;
  updatedAt: string;
  confirmedAt?: string;
  createdBy?: Pick<User, "id" | "name" | "email">;
  confirmedBy?: Pick<User, "id" | "name" | "email">;
}

export interface AuditLog {
  id: string;
  userId?: string;
  userName?: string;
  action: string;
  entity: string;
  entityId?: string;
  meta?: Record<string, unknown>;
  ip?: string;
  userAgent?: string;
  createdAt: string;
  user?: Pick<User, "id" | "name" | "email" | "role">;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  sessionId: string;
}

export interface DashboardStats {
  totalOrders: number;
  pendingOrders: number;
  confirmedOrders: number;
  cancelledOrders: number;
  totalRevenue: number;
  todayRevenue: number;
  todayOrders: number;
  paymentBreakdown: {
    CASH: number;
    TRANSFER: number;
    POS: number;
  };
  recentOrders: Order[];
  hourlyData: { hour: string; orders: number; revenue: number }[];
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
