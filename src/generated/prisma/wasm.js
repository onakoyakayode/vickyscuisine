
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  passwordHash: 'passwordHash',
  role: 'role',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ActiveSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  sessionId: 'sessionId',
  ip: 'ip',
  userAgent: 'userAgent',
  createdAt: 'createdAt',
  expiresAt: 'expiresAt'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  ref: 'ref',
  customerName: 'customerName',
  customerPhone: 'customerPhone',
  items: 'items',
  subtotal: 'subtotal',
  total: 'total',
  status: 'status',
  paymentMethod: 'paymentMethod',
  paymentStatus: 'paymentStatus',
  source: 'source',
  notes: 'notes',
  createdById: 'createdById',
  confirmedById: 'confirmedById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  confirmedAt: 'confirmedAt'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  userName: 'userName',
  action: 'action',
  entity: 'entity',
  entityId: 'entityId',
  meta: 'meta',
  ip: 'ip',
  userAgent: 'userAgent',
  createdAt: 'createdAt'
};

exports.Prisma.MenuCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  sortOrder: 'sortOrder',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MenuItemScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  description: 'description',
  priceNGN: 'priceNGN',
  publicId: 'publicId',
  imageUrl: 'imageUrl',
  isAvailable: 'isAvailable',
  isFeatured: 'isFeatured',
  isSpicy: 'isSpicy',
  tags: 'tags',
  sortOrder: 'sortOrder',
  categoryId: 'categoryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FoodPackOrderScalarFieldEnum = {
  id: 'id',
  orderNumber: 'orderNumber',
  status: 'status',
  customerName: 'customerName',
  customerPhone: 'customerPhone',
  customerEmail: 'customerEmail',
  deliveryMethod: 'deliveryMethod',
  deliveryAddress: 'deliveryAddress',
  deliveryDate: 'deliveryDate',
  specialNotes: 'specialNotes',
  totalAmountNGN: 'totalAmountNGN',
  isPaid: 'isPaid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FoodPackOrderItemScalarFieldEnum = {
  id: 'id',
  quantity: 'quantity',
  unitPrice: 'unitPrice',
  totalPrice: 'totalPrice',
  orderId: 'orderId',
  menuItemId: 'menuItemId'
};

exports.Prisma.EventOrderScalarFieldEnum = {
  id: 'id',
  orderRef: 'orderRef',
  clientName: 'clientName',
  clientPhone: 'clientPhone',
  clientEmail: 'clientEmail',
  clientWhatsApp: 'clientWhatsApp',
  eventType: 'eventType',
  eventDate: 'eventDate',
  eventTime: 'eventTime',
  guestCount: 'guestCount',
  venueType: 'venueType',
  venueAddress: 'venueAddress',
  venueLGA: 'venueLGA',
  serviceType: 'serviceType',
  status: 'status',
  dietaryNotes: 'dietaryNotes',
  specialRequests: 'specialRequests',
  perHeadRateNGN: 'perHeadRateNGN',
  subtotalNGN: 'subtotalNGN',
  deliveryFeeNGN: 'deliveryFeeNGN',
  setupFeeNGN: 'setupFeeNGN',
  discountNGN: 'discountNGN',
  totalNGN: 'totalNGN',
  paymentStatus: 'paymentStatus',
  depositAmtNGN: 'depositAmtNGN',
  depositPaidAt: 'depositPaidAt',
  balanceDueNGN: 'balanceDueNGN',
  balancePaidAt: 'balancePaidAt',
  setupTime: 'setupTime',
  servingStaffCount: 'servingStaffCount',
  cleanupIncluded: 'cleanupIncluded',
  equipmentList: 'equipmentList',
  internalNotes: 'internalNotes',
  quoteSentAt: 'quoteSentAt',
  confirmedAt: 'confirmedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EventMenuSelectionScalarFieldEnum = {
  id: 'id',
  quantityPerHead: 'quantityPerHead',
  totalQuantity: 'totalQuantity',
  unit: 'unit',
  notes: 'notes',
  eventOrderId: 'eventOrderId',
  menuItemId: 'menuItemId'
};

exports.Prisma.EventPaymentScalarFieldEnum = {
  id: 'id',
  amountNGN: 'amountNGN',
  paymentMethod: 'paymentMethod',
  reference: 'reference',
  paidAt: 'paidAt',
  note: 'note',
  eventOrderId: 'eventOrderId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Role = exports.$Enums.Role = {
  SUPERADMIN: 'SUPERADMIN',
  ADMIN: 'ADMIN',
  CASHIER: 'CASHIER'
};

exports.OrderStatus = exports.$Enums.OrderStatus = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  CASH: 'CASH',
  TRANSFER: 'TRANSFER',
  POS: 'POS'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  UNPAID: 'UNPAID',
  PAID: 'PAID',
  DEPOSIT_PAID: 'DEPOSIT_PAID',
  FULLY_PAID: 'FULLY_PAID',
  REFUNDED: 'REFUNDED'
};

exports.OrderSource = exports.$Enums.OrderSource = {
  CUSTOMER: 'CUSTOMER',
  ADMIN: 'ADMIN'
};

exports.FoodPackStatus = exports.$Enums.FoodPackStatus = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  PREPARING: 'PREPARING',
  OUT_FOR_DELIVERY: 'OUT_FOR_DELIVERY',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

exports.DeliveryMethod = exports.$Enums.DeliveryMethod = {
  PICKUP: 'PICKUP',
  DELIVERY: 'DELIVERY'
};

exports.EventType = exports.$Enums.EventType = {
  WEDDING: 'WEDDING',
  BIRTHDAY: 'BIRTHDAY',
  CORPORATE: 'CORPORATE',
  CHURCH_COMMUNITY: 'CHURCH_COMMUNITY',
  GRADUATION: 'GRADUATION',
  OWAMBE: 'OWAMBE',
  NAMING_CEREMONY: 'NAMING_CEREMONY',
  BULK_ORDER: 'BULK_ORDER',
  OTHER: 'OTHER'
};

exports.VenueType = exports.$Enums.VenueType = {
  INDOOR: 'INDOOR',
  OUTDOOR: 'OUTDOOR',
  OPEN_FIELD: 'OPEN_FIELD',
  HALL: 'HALL',
  HOME: 'HOME',
  NOT_SPECIFIED: 'NOT_SPECIFIED'
};

exports.ServiceType = exports.$Enums.ServiceType = {
  FULL_CATERING: 'FULL_CATERING',
  DELIVERY_ONLY: 'DELIVERY_ONLY',
  BUFFET_SETUP: 'BUFFET_SETUP',
  PACKED_MEALS: 'PACKED_MEALS',
  SMALL_CHOPS_ONLY: 'SMALL_CHOPS_ONLY'
};

exports.EventStatus = exports.$Enums.EventStatus = {
  PENDING_REVIEW: 'PENDING_REVIEW',
  QUOTE_SENT: 'QUOTE_SENT',
  CONFIRMED: 'CONFIRMED',
  DEPOSIT_PAID: 'DEPOSIT_PAID',
  FULLY_PAID: 'FULLY_PAID',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

exports.Prisma.ModelName = {
  User: 'User',
  ActiveSession: 'ActiveSession',
  Order: 'Order',
  AuditLog: 'AuditLog',
  MenuCategory: 'MenuCategory',
  MenuItem: 'MenuItem',
  FoodPackOrder: 'FoodPackOrder',
  FoodPackOrderItem: 'FoodPackOrderItem',
  EventOrder: 'EventOrder',
  EventMenuSelection: 'EventMenuSelection',
  EventPayment: 'EventPayment'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
