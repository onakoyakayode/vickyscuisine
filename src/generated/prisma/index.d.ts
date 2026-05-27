
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ActiveSession
 * 
 */
export type ActiveSession = $Result.DefaultSelection<Prisma.$ActiveSessionPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model MenuCategory
 * 
 */
export type MenuCategory = $Result.DefaultSelection<Prisma.$MenuCategoryPayload>
/**
 * Model MenuItem
 * 
 */
export type MenuItem = $Result.DefaultSelection<Prisma.$MenuItemPayload>
/**
 * Model FoodPackOrder
 * 
 */
export type FoodPackOrder = $Result.DefaultSelection<Prisma.$FoodPackOrderPayload>
/**
 * Model FoodPackOrderItem
 * 
 */
export type FoodPackOrderItem = $Result.DefaultSelection<Prisma.$FoodPackOrderItemPayload>
/**
 * Model EventOrder
 * 
 */
export type EventOrder = $Result.DefaultSelection<Prisma.$EventOrderPayload>
/**
 * Model EventMenuSelection
 * 
 */
export type EventMenuSelection = $Result.DefaultSelection<Prisma.$EventMenuSelectionPayload>
/**
 * Model EventMenuCategory
 * 
 */
export type EventMenuCategory = $Result.DefaultSelection<Prisma.$EventMenuCategoryPayload>
/**
 * Model EventMenuOption
 * 
 */
export type EventMenuOption = $Result.DefaultSelection<Prisma.$EventMenuOptionPayload>
/**
 * Model EventPayment
 * 
 */
export type EventPayment = $Result.DefaultSelection<Prisma.$EventPaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPERADMIN: 'SUPERADMIN',
  ADMIN: 'ADMIN',
  CASHIER: 'CASHIER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const OrderStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const PaymentMethod: {
  CASH: 'CASH',
  TRANSFER: 'TRANSFER',
  POS: 'POS'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  UNPAID: 'UNPAID',
  PAID: 'PAID',
  DEPOSIT_PAID: 'DEPOSIT_PAID',
  FULLY_PAID: 'FULLY_PAID',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const OrderSource: {
  CUSTOMER: 'CUSTOMER',
  ADMIN: 'ADMIN'
};

export type OrderSource = (typeof OrderSource)[keyof typeof OrderSource]


export const FoodPackStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  PREPARING: 'PREPARING',
  OUT_FOR_DELIVERY: 'OUT_FOR_DELIVERY',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type FoodPackStatus = (typeof FoodPackStatus)[keyof typeof FoodPackStatus]


export const DeliveryMethod: {
  PICKUP: 'PICKUP',
  DELIVERY: 'DELIVERY'
};

export type DeliveryMethod = (typeof DeliveryMethod)[keyof typeof DeliveryMethod]


export const EventType: {
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

export type EventType = (typeof EventType)[keyof typeof EventType]


export const VenueType: {
  INDOOR: 'INDOOR',
  OUTDOOR: 'OUTDOOR',
  OPEN_FIELD: 'OPEN_FIELD',
  HALL: 'HALL',
  HOME: 'HOME',
  NOT_SPECIFIED: 'NOT_SPECIFIED'
};

export type VenueType = (typeof VenueType)[keyof typeof VenueType]


export const ServiceType: {
  FULL_CATERING: 'FULL_CATERING',
  DELIVERY_ONLY: 'DELIVERY_ONLY',
  BUFFET_SETUP: 'BUFFET_SETUP',
  PACKED_MEALS: 'PACKED_MEALS',
  SMALL_CHOPS_ONLY: 'SMALL_CHOPS_ONLY'
};

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType]


export const EventStatus: {
  PENDING_REVIEW: 'PENDING_REVIEW',
  QUOTE_SENT: 'QUOTE_SENT',
  CONFIRMED: 'CONFIRMED',
  DEPOSIT_PAID: 'DEPOSIT_PAID',
  FULLY_PAID: 'FULLY_PAID',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type OrderSource = $Enums.OrderSource

export const OrderSource: typeof $Enums.OrderSource

export type FoodPackStatus = $Enums.FoodPackStatus

export const FoodPackStatus: typeof $Enums.FoodPackStatus

export type DeliveryMethod = $Enums.DeliveryMethod

export const DeliveryMethod: typeof $Enums.DeliveryMethod

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

export type VenueType = $Enums.VenueType

export const VenueType: typeof $Enums.VenueType

export type ServiceType = $Enums.ServiceType

export const ServiceType: typeof $Enums.ServiceType

export type EventStatus = $Enums.EventStatus

export const EventStatus: typeof $Enums.EventStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.activeSession`: Exposes CRUD operations for the **ActiveSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActiveSessions
    * const activeSessions = await prisma.activeSession.findMany()
    * ```
    */
  get activeSession(): Prisma.ActiveSessionDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;

  /**
   * `prisma.menuCategory`: Exposes CRUD operations for the **MenuCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuCategories
    * const menuCategories = await prisma.menuCategory.findMany()
    * ```
    */
  get menuCategory(): Prisma.MenuCategoryDelegate<ExtArgs>;

  /**
   * `prisma.menuItem`: Exposes CRUD operations for the **MenuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItem.findMany()
    * ```
    */
  get menuItem(): Prisma.MenuItemDelegate<ExtArgs>;

  /**
   * `prisma.foodPackOrder`: Exposes CRUD operations for the **FoodPackOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodPackOrders
    * const foodPackOrders = await prisma.foodPackOrder.findMany()
    * ```
    */
  get foodPackOrder(): Prisma.FoodPackOrderDelegate<ExtArgs>;

  /**
   * `prisma.foodPackOrderItem`: Exposes CRUD operations for the **FoodPackOrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodPackOrderItems
    * const foodPackOrderItems = await prisma.foodPackOrderItem.findMany()
    * ```
    */
  get foodPackOrderItem(): Prisma.FoodPackOrderItemDelegate<ExtArgs>;

  /**
   * `prisma.eventOrder`: Exposes CRUD operations for the **EventOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventOrders
    * const eventOrders = await prisma.eventOrder.findMany()
    * ```
    */
  get eventOrder(): Prisma.EventOrderDelegate<ExtArgs>;

  /**
   * `prisma.eventMenuSelection`: Exposes CRUD operations for the **EventMenuSelection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventMenuSelections
    * const eventMenuSelections = await prisma.eventMenuSelection.findMany()
    * ```
    */
  get eventMenuSelection(): Prisma.EventMenuSelectionDelegate<ExtArgs>;

  /**
   * `prisma.eventMenuCategory`: Exposes CRUD operations for the **EventMenuCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventMenuCategories
    * const eventMenuCategories = await prisma.eventMenuCategory.findMany()
    * ```
    */
  get eventMenuCategory(): Prisma.EventMenuCategoryDelegate<ExtArgs>;

  /**
   * `prisma.eventMenuOption`: Exposes CRUD operations for the **EventMenuOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventMenuOptions
    * const eventMenuOptions = await prisma.eventMenuOption.findMany()
    * ```
    */
  get eventMenuOption(): Prisma.EventMenuOptionDelegate<ExtArgs>;

  /**
   * `prisma.eventPayment`: Exposes CRUD operations for the **EventPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventPayments
    * const eventPayments = await prisma.eventPayment.findMany()
    * ```
    */
  get eventPayment(): Prisma.EventPaymentDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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
    EventMenuCategory: 'EventMenuCategory',
    EventMenuOption: 'EventMenuOption',
    EventPayment: 'EventPayment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "activeSession" | "order" | "auditLog" | "menuCategory" | "menuItem" | "foodPackOrder" | "foodPackOrderItem" | "eventOrder" | "eventMenuSelection" | "eventMenuCategory" | "eventMenuOption" | "eventPayment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ActiveSession: {
        payload: Prisma.$ActiveSessionPayload<ExtArgs>
        fields: Prisma.ActiveSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActiveSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActiveSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          findFirst: {
            args: Prisma.ActiveSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActiveSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          findMany: {
            args: Prisma.ActiveSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>[]
          }
          create: {
            args: Prisma.ActiveSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          createMany: {
            args: Prisma.ActiveSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActiveSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>[]
          }
          delete: {
            args: Prisma.ActiveSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          update: {
            args: Prisma.ActiveSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          deleteMany: {
            args: Prisma.ActiveSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActiveSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActiveSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSessionPayload>
          }
          aggregate: {
            args: Prisma.ActiveSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActiveSession>
          }
          groupBy: {
            args: Prisma.ActiveSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActiveSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActiveSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ActiveSessionCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      MenuCategory: {
        payload: Prisma.$MenuCategoryPayload<ExtArgs>
        fields: Prisma.MenuCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          findFirst: {
            args: Prisma.MenuCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          findMany: {
            args: Prisma.MenuCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>[]
          }
          create: {
            args: Prisma.MenuCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          createMany: {
            args: Prisma.MenuCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>[]
          }
          delete: {
            args: Prisma.MenuCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          update: {
            args: Prisma.MenuCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MenuCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          aggregate: {
            args: Prisma.MenuCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuCategory>
          }
          groupBy: {
            args: Prisma.MenuCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCategoryCountAggregateOutputType> | number
          }
        }
      }
      MenuItem: {
        payload: Prisma.$MenuItemPayload<ExtArgs>
        fields: Prisma.MenuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findFirst: {
            args: Prisma.MenuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findMany: {
            args: Prisma.MenuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          create: {
            args: Prisma.MenuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          createMany: {
            args: Prisma.MenuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          delete: {
            args: Prisma.MenuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          update: {
            args: Prisma.MenuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          aggregate: {
            args: Prisma.MenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItem>
          }
          groupBy: {
            args: Prisma.MenuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCountAggregateOutputType> | number
          }
        }
      }
      FoodPackOrder: {
        payload: Prisma.$FoodPackOrderPayload<ExtArgs>
        fields: Prisma.FoodPackOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodPackOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodPackOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderPayload>
          }
          findFirst: {
            args: Prisma.FoodPackOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodPackOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderPayload>
          }
          findMany: {
            args: Prisma.FoodPackOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderPayload>[]
          }
          create: {
            args: Prisma.FoodPackOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderPayload>
          }
          createMany: {
            args: Prisma.FoodPackOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodPackOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderPayload>[]
          }
          delete: {
            args: Prisma.FoodPackOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderPayload>
          }
          update: {
            args: Prisma.FoodPackOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderPayload>
          }
          deleteMany: {
            args: Prisma.FoodPackOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodPackOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodPackOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderPayload>
          }
          aggregate: {
            args: Prisma.FoodPackOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodPackOrder>
          }
          groupBy: {
            args: Prisma.FoodPackOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodPackOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodPackOrderCountArgs<ExtArgs>
            result: $Utils.Optional<FoodPackOrderCountAggregateOutputType> | number
          }
        }
      }
      FoodPackOrderItem: {
        payload: Prisma.$FoodPackOrderItemPayload<ExtArgs>
        fields: Prisma.FoodPackOrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodPackOrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodPackOrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderItemPayload>
          }
          findFirst: {
            args: Prisma.FoodPackOrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodPackOrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderItemPayload>
          }
          findMany: {
            args: Prisma.FoodPackOrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderItemPayload>[]
          }
          create: {
            args: Prisma.FoodPackOrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderItemPayload>
          }
          createMany: {
            args: Prisma.FoodPackOrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodPackOrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderItemPayload>[]
          }
          delete: {
            args: Prisma.FoodPackOrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderItemPayload>
          }
          update: {
            args: Prisma.FoodPackOrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderItemPayload>
          }
          deleteMany: {
            args: Prisma.FoodPackOrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodPackOrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodPackOrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPackOrderItemPayload>
          }
          aggregate: {
            args: Prisma.FoodPackOrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodPackOrderItem>
          }
          groupBy: {
            args: Prisma.FoodPackOrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodPackOrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodPackOrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<FoodPackOrderItemCountAggregateOutputType> | number
          }
        }
      }
      EventOrder: {
        payload: Prisma.$EventOrderPayload<ExtArgs>
        fields: Prisma.EventOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrderPayload>
          }
          findFirst: {
            args: Prisma.EventOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrderPayload>
          }
          findMany: {
            args: Prisma.EventOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrderPayload>[]
          }
          create: {
            args: Prisma.EventOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrderPayload>
          }
          createMany: {
            args: Prisma.EventOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrderPayload>[]
          }
          delete: {
            args: Prisma.EventOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrderPayload>
          }
          update: {
            args: Prisma.EventOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrderPayload>
          }
          deleteMany: {
            args: Prisma.EventOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrderPayload>
          }
          aggregate: {
            args: Prisma.EventOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventOrder>
          }
          groupBy: {
            args: Prisma.EventOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventOrderCountArgs<ExtArgs>
            result: $Utils.Optional<EventOrderCountAggregateOutputType> | number
          }
        }
      }
      EventMenuSelection: {
        payload: Prisma.$EventMenuSelectionPayload<ExtArgs>
        fields: Prisma.EventMenuSelectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventMenuSelectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuSelectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventMenuSelectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuSelectionPayload>
          }
          findFirst: {
            args: Prisma.EventMenuSelectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuSelectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventMenuSelectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuSelectionPayload>
          }
          findMany: {
            args: Prisma.EventMenuSelectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuSelectionPayload>[]
          }
          create: {
            args: Prisma.EventMenuSelectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuSelectionPayload>
          }
          createMany: {
            args: Prisma.EventMenuSelectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventMenuSelectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuSelectionPayload>[]
          }
          delete: {
            args: Prisma.EventMenuSelectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuSelectionPayload>
          }
          update: {
            args: Prisma.EventMenuSelectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuSelectionPayload>
          }
          deleteMany: {
            args: Prisma.EventMenuSelectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventMenuSelectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventMenuSelectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuSelectionPayload>
          }
          aggregate: {
            args: Prisma.EventMenuSelectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventMenuSelection>
          }
          groupBy: {
            args: Prisma.EventMenuSelectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventMenuSelectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventMenuSelectionCountArgs<ExtArgs>
            result: $Utils.Optional<EventMenuSelectionCountAggregateOutputType> | number
          }
        }
      }
      EventMenuCategory: {
        payload: Prisma.$EventMenuCategoryPayload<ExtArgs>
        fields: Prisma.EventMenuCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventMenuCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventMenuCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuCategoryPayload>
          }
          findFirst: {
            args: Prisma.EventMenuCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventMenuCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuCategoryPayload>
          }
          findMany: {
            args: Prisma.EventMenuCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuCategoryPayload>[]
          }
          create: {
            args: Prisma.EventMenuCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuCategoryPayload>
          }
          createMany: {
            args: Prisma.EventMenuCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventMenuCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuCategoryPayload>[]
          }
          delete: {
            args: Prisma.EventMenuCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuCategoryPayload>
          }
          update: {
            args: Prisma.EventMenuCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuCategoryPayload>
          }
          deleteMany: {
            args: Prisma.EventMenuCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventMenuCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventMenuCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuCategoryPayload>
          }
          aggregate: {
            args: Prisma.EventMenuCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventMenuCategory>
          }
          groupBy: {
            args: Prisma.EventMenuCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventMenuCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventMenuCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<EventMenuCategoryCountAggregateOutputType> | number
          }
        }
      }
      EventMenuOption: {
        payload: Prisma.$EventMenuOptionPayload<ExtArgs>
        fields: Prisma.EventMenuOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventMenuOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventMenuOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuOptionPayload>
          }
          findFirst: {
            args: Prisma.EventMenuOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventMenuOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuOptionPayload>
          }
          findMany: {
            args: Prisma.EventMenuOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuOptionPayload>[]
          }
          create: {
            args: Prisma.EventMenuOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuOptionPayload>
          }
          createMany: {
            args: Prisma.EventMenuOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventMenuOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuOptionPayload>[]
          }
          delete: {
            args: Prisma.EventMenuOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuOptionPayload>
          }
          update: {
            args: Prisma.EventMenuOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuOptionPayload>
          }
          deleteMany: {
            args: Prisma.EventMenuOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventMenuOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventMenuOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMenuOptionPayload>
          }
          aggregate: {
            args: Prisma.EventMenuOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventMenuOption>
          }
          groupBy: {
            args: Prisma.EventMenuOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventMenuOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventMenuOptionCountArgs<ExtArgs>
            result: $Utils.Optional<EventMenuOptionCountAggregateOutputType> | number
          }
        }
      }
      EventPayment: {
        payload: Prisma.$EventPaymentPayload<ExtArgs>
        fields: Prisma.EventPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPaymentPayload>
          }
          findFirst: {
            args: Prisma.EventPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPaymentPayload>
          }
          findMany: {
            args: Prisma.EventPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPaymentPayload>[]
          }
          create: {
            args: Prisma.EventPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPaymentPayload>
          }
          createMany: {
            args: Prisma.EventPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPaymentPayload>[]
          }
          delete: {
            args: Prisma.EventPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPaymentPayload>
          }
          update: {
            args: Prisma.EventPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPaymentPayload>
          }
          deleteMany: {
            args: Prisma.EventPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPaymentPayload>
          }
          aggregate: {
            args: Prisma.EventPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventPayment>
          }
          groupBy: {
            args: Prisma.EventPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<EventPaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    auditLogs: number
    ordersConfirmed: number
    ordersCreated: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    ordersConfirmed?: boolean | UserCountOutputTypeCountOrdersConfirmedArgs
    ordersCreated?: boolean | UserCountOutputTypeCountOrdersCreatedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersConfirmedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type MenuCategoryCountOutputType
   */

  export type MenuCategoryCountOutputType = {
    items: number
  }

  export type MenuCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | MenuCategoryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * MenuCategoryCountOutputType without action
   */
  export type MenuCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategoryCountOutputType
     */
    select?: MenuCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCategoryCountOutputType without action
   */
  export type MenuCategoryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
  }


  /**
   * Count Type MenuItemCountOutputType
   */

  export type MenuItemCountOutputType = {
    EventMenuSelection: number
    FoodPackOrderItem: number
  }

  export type MenuItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventMenuSelection?: boolean | MenuItemCountOutputTypeCountEventMenuSelectionArgs
    FoodPackOrderItem?: boolean | MenuItemCountOutputTypeCountFoodPackOrderItemArgs
  }

  // Custom InputTypes
  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCountOutputType
     */
    select?: MenuItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountEventMenuSelectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventMenuSelectionWhereInput
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountFoodPackOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodPackOrderItemWhereInput
  }


  /**
   * Count Type FoodPackOrderCountOutputType
   */

  export type FoodPackOrderCountOutputType = {
    items: number
  }

  export type FoodPackOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | FoodPackOrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * FoodPackOrderCountOutputType without action
   */
  export type FoodPackOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrderCountOutputType
     */
    select?: FoodPackOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodPackOrderCountOutputType without action
   */
  export type FoodPackOrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodPackOrderItemWhereInput
  }


  /**
   * Count Type EventOrderCountOutputType
   */

  export type EventOrderCountOutputType = {
    menuSelections: number
    payments: number
  }

  export type EventOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuSelections?: boolean | EventOrderCountOutputTypeCountMenuSelectionsArgs
    payments?: boolean | EventOrderCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * EventOrderCountOutputType without action
   */
  export type EventOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrderCountOutputType
     */
    select?: EventOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventOrderCountOutputType without action
   */
  export type EventOrderCountOutputTypeCountMenuSelectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventMenuSelectionWhereInput
  }

  /**
   * EventOrderCountOutputType without action
   */
  export type EventOrderCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventPaymentWhereInput
  }


  /**
   * Count Type EventMenuCategoryCountOutputType
   */

  export type EventMenuCategoryCountOutputType = {
    options: number
  }

  export type EventMenuCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | EventMenuCategoryCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * EventMenuCategoryCountOutputType without action
   */
  export type EventMenuCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuCategoryCountOutputType
     */
    select?: EventMenuCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventMenuCategoryCountOutputType without action
   */
  export type EventMenuCategoryCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventMenuOptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activeSession?: boolean | User$activeSessionArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    ordersConfirmed?: boolean | User$ordersConfirmedArgs<ExtArgs>
    ordersCreated?: boolean | User$ordersCreatedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activeSession?: boolean | User$activeSessionArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    ordersConfirmed?: boolean | User$ordersConfirmedArgs<ExtArgs>
    ordersCreated?: boolean | User$ordersCreatedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      activeSession: Prisma.$ActiveSessionPayload<ExtArgs> | null
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      ordersConfirmed: Prisma.$OrderPayload<ExtArgs>[]
      ordersCreated: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activeSession<T extends User$activeSessionArgs<ExtArgs> = {}>(args?: Subset<T, User$activeSessionArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany"> | Null>
    ordersConfirmed<T extends User$ordersConfirmedArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersConfirmedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    ordersCreated<T extends User$ordersCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.activeSession
   */
  export type User$activeSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    where?: ActiveSessionWhereInput
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.ordersConfirmed
   */
  export type User$ordersConfirmedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.ordersCreated
   */
  export type User$ordersCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ActiveSession
   */

  export type AggregateActiveSession = {
    _count: ActiveSessionCountAggregateOutputType | null
    _min: ActiveSessionMinAggregateOutputType | null
    _max: ActiveSessionMaxAggregateOutputType | null
  }

  export type ActiveSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    ip: string | null
    userAgent: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type ActiveSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    ip: string | null
    userAgent: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type ActiveSessionCountAggregateOutputType = {
    id: number
    userId: number
    sessionId: number
    ip: number
    userAgent: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type ActiveSessionMinAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    ip?: true
    userAgent?: true
    createdAt?: true
    expiresAt?: true
  }

  export type ActiveSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    ip?: true
    userAgent?: true
    createdAt?: true
    expiresAt?: true
  }

  export type ActiveSessionCountAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    ip?: true
    userAgent?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type ActiveSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActiveSession to aggregate.
     */
    where?: ActiveSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveSessions to fetch.
     */
    orderBy?: ActiveSessionOrderByWithRelationInput | ActiveSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActiveSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActiveSessions
    **/
    _count?: true | ActiveSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActiveSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActiveSessionMaxAggregateInputType
  }

  export type GetActiveSessionAggregateType<T extends ActiveSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateActiveSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActiveSession[P]>
      : GetScalarType<T[P], AggregateActiveSession[P]>
  }




  export type ActiveSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiveSessionWhereInput
    orderBy?: ActiveSessionOrderByWithAggregationInput | ActiveSessionOrderByWithAggregationInput[]
    by: ActiveSessionScalarFieldEnum[] | ActiveSessionScalarFieldEnum
    having?: ActiveSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActiveSessionCountAggregateInputType | true
    _min?: ActiveSessionMinAggregateInputType
    _max?: ActiveSessionMaxAggregateInputType
  }

  export type ActiveSessionGroupByOutputType = {
    id: string
    userId: string
    sessionId: string
    ip: string | null
    userAgent: string | null
    createdAt: Date
    expiresAt: Date
    _count: ActiveSessionCountAggregateOutputType | null
    _min: ActiveSessionMinAggregateOutputType | null
    _max: ActiveSessionMaxAggregateOutputType | null
  }

  type GetActiveSessionGroupByPayload<T extends ActiveSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActiveSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActiveSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActiveSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ActiveSessionGroupByOutputType[P]>
        }
      >
    >


  export type ActiveSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    ip?: boolean
    userAgent?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activeSession"]>

  export type ActiveSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    ip?: boolean
    userAgent?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activeSession"]>

  export type ActiveSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    ip?: boolean
    userAgent?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type ActiveSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActiveSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActiveSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActiveSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sessionId: string
      ip: string | null
      userAgent: string | null
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["activeSession"]>
    composites: {}
  }

  type ActiveSessionGetPayload<S extends boolean | null | undefined | ActiveSessionDefaultArgs> = $Result.GetResult<Prisma.$ActiveSessionPayload, S>

  type ActiveSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActiveSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActiveSessionCountAggregateInputType | true
    }

  export interface ActiveSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActiveSession'], meta: { name: 'ActiveSession' } }
    /**
     * Find zero or one ActiveSession that matches the filter.
     * @param {ActiveSessionFindUniqueArgs} args - Arguments to find a ActiveSession
     * @example
     * // Get one ActiveSession
     * const activeSession = await prisma.activeSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActiveSessionFindUniqueArgs>(args: SelectSubset<T, ActiveSessionFindUniqueArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ActiveSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActiveSessionFindUniqueOrThrowArgs} args - Arguments to find a ActiveSession
     * @example
     * // Get one ActiveSession
     * const activeSession = await prisma.activeSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActiveSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActiveSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ActiveSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionFindFirstArgs} args - Arguments to find a ActiveSession
     * @example
     * // Get one ActiveSession
     * const activeSession = await prisma.activeSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActiveSessionFindFirstArgs>(args?: SelectSubset<T, ActiveSessionFindFirstArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ActiveSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionFindFirstOrThrowArgs} args - Arguments to find a ActiveSession
     * @example
     * // Get one ActiveSession
     * const activeSession = await prisma.activeSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActiveSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActiveSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ActiveSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActiveSessions
     * const activeSessions = await prisma.activeSession.findMany()
     * 
     * // Get first 10 ActiveSessions
     * const activeSessions = await prisma.activeSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activeSessionWithIdOnly = await prisma.activeSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActiveSessionFindManyArgs>(args?: SelectSubset<T, ActiveSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ActiveSession.
     * @param {ActiveSessionCreateArgs} args - Arguments to create a ActiveSession.
     * @example
     * // Create one ActiveSession
     * const ActiveSession = await prisma.activeSession.create({
     *   data: {
     *     // ... data to create a ActiveSession
     *   }
     * })
     * 
     */
    create<T extends ActiveSessionCreateArgs>(args: SelectSubset<T, ActiveSessionCreateArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ActiveSessions.
     * @param {ActiveSessionCreateManyArgs} args - Arguments to create many ActiveSessions.
     * @example
     * // Create many ActiveSessions
     * const activeSession = await prisma.activeSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActiveSessionCreateManyArgs>(args?: SelectSubset<T, ActiveSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActiveSessions and returns the data saved in the database.
     * @param {ActiveSessionCreateManyAndReturnArgs} args - Arguments to create many ActiveSessions.
     * @example
     * // Create many ActiveSessions
     * const activeSession = await prisma.activeSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActiveSessions and only return the `id`
     * const activeSessionWithIdOnly = await prisma.activeSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActiveSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActiveSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ActiveSession.
     * @param {ActiveSessionDeleteArgs} args - Arguments to delete one ActiveSession.
     * @example
     * // Delete one ActiveSession
     * const ActiveSession = await prisma.activeSession.delete({
     *   where: {
     *     // ... filter to delete one ActiveSession
     *   }
     * })
     * 
     */
    delete<T extends ActiveSessionDeleteArgs>(args: SelectSubset<T, ActiveSessionDeleteArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ActiveSession.
     * @param {ActiveSessionUpdateArgs} args - Arguments to update one ActiveSession.
     * @example
     * // Update one ActiveSession
     * const activeSession = await prisma.activeSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActiveSessionUpdateArgs>(args: SelectSubset<T, ActiveSessionUpdateArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ActiveSessions.
     * @param {ActiveSessionDeleteManyArgs} args - Arguments to filter ActiveSessions to delete.
     * @example
     * // Delete a few ActiveSessions
     * const { count } = await prisma.activeSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActiveSessionDeleteManyArgs>(args?: SelectSubset<T, ActiveSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActiveSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActiveSessions
     * const activeSession = await prisma.activeSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActiveSessionUpdateManyArgs>(args: SelectSubset<T, ActiveSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActiveSession.
     * @param {ActiveSessionUpsertArgs} args - Arguments to update or create a ActiveSession.
     * @example
     * // Update or create a ActiveSession
     * const activeSession = await prisma.activeSession.upsert({
     *   create: {
     *     // ... data to create a ActiveSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActiveSession we want to update
     *   }
     * })
     */
    upsert<T extends ActiveSessionUpsertArgs>(args: SelectSubset<T, ActiveSessionUpsertArgs<ExtArgs>>): Prisma__ActiveSessionClient<$Result.GetResult<Prisma.$ActiveSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ActiveSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionCountArgs} args - Arguments to filter ActiveSessions to count.
     * @example
     * // Count the number of ActiveSessions
     * const count = await prisma.activeSession.count({
     *   where: {
     *     // ... the filter for the ActiveSessions we want to count
     *   }
     * })
    **/
    count<T extends ActiveSessionCountArgs>(
      args?: Subset<T, ActiveSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActiveSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActiveSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActiveSessionAggregateArgs>(args: Subset<T, ActiveSessionAggregateArgs>): Prisma.PrismaPromise<GetActiveSessionAggregateType<T>>

    /**
     * Group by ActiveSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActiveSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActiveSessionGroupByArgs['orderBy'] }
        : { orderBy?: ActiveSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActiveSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActiveSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActiveSession model
   */
  readonly fields: ActiveSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActiveSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActiveSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActiveSession model
   */ 
  interface ActiveSessionFieldRefs {
    readonly id: FieldRef<"ActiveSession", 'String'>
    readonly userId: FieldRef<"ActiveSession", 'String'>
    readonly sessionId: FieldRef<"ActiveSession", 'String'>
    readonly ip: FieldRef<"ActiveSession", 'String'>
    readonly userAgent: FieldRef<"ActiveSession", 'String'>
    readonly createdAt: FieldRef<"ActiveSession", 'DateTime'>
    readonly expiresAt: FieldRef<"ActiveSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActiveSession findUnique
   */
  export type ActiveSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * Filter, which ActiveSession to fetch.
     */
    where: ActiveSessionWhereUniqueInput
  }

  /**
   * ActiveSession findUniqueOrThrow
   */
  export type ActiveSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * Filter, which ActiveSession to fetch.
     */
    where: ActiveSessionWhereUniqueInput
  }

  /**
   * ActiveSession findFirst
   */
  export type ActiveSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * Filter, which ActiveSession to fetch.
     */
    where?: ActiveSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveSessions to fetch.
     */
    orderBy?: ActiveSessionOrderByWithRelationInput | ActiveSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActiveSessions.
     */
    cursor?: ActiveSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActiveSessions.
     */
    distinct?: ActiveSessionScalarFieldEnum | ActiveSessionScalarFieldEnum[]
  }

  /**
   * ActiveSession findFirstOrThrow
   */
  export type ActiveSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * Filter, which ActiveSession to fetch.
     */
    where?: ActiveSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveSessions to fetch.
     */
    orderBy?: ActiveSessionOrderByWithRelationInput | ActiveSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActiveSessions.
     */
    cursor?: ActiveSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActiveSessions.
     */
    distinct?: ActiveSessionScalarFieldEnum | ActiveSessionScalarFieldEnum[]
  }

  /**
   * ActiveSession findMany
   */
  export type ActiveSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * Filter, which ActiveSessions to fetch.
     */
    where?: ActiveSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveSessions to fetch.
     */
    orderBy?: ActiveSessionOrderByWithRelationInput | ActiveSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActiveSessions.
     */
    cursor?: ActiveSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveSessions.
     */
    skip?: number
    distinct?: ActiveSessionScalarFieldEnum | ActiveSessionScalarFieldEnum[]
  }

  /**
   * ActiveSession create
   */
  export type ActiveSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ActiveSession.
     */
    data: XOR<ActiveSessionCreateInput, ActiveSessionUncheckedCreateInput>
  }

  /**
   * ActiveSession createMany
   */
  export type ActiveSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActiveSessions.
     */
    data: ActiveSessionCreateManyInput | ActiveSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActiveSession createManyAndReturn
   */
  export type ActiveSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ActiveSessions.
     */
    data: ActiveSessionCreateManyInput | ActiveSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActiveSession update
   */
  export type ActiveSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ActiveSession.
     */
    data: XOR<ActiveSessionUpdateInput, ActiveSessionUncheckedUpdateInput>
    /**
     * Choose, which ActiveSession to update.
     */
    where: ActiveSessionWhereUniqueInput
  }

  /**
   * ActiveSession updateMany
   */
  export type ActiveSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActiveSessions.
     */
    data: XOR<ActiveSessionUpdateManyMutationInput, ActiveSessionUncheckedUpdateManyInput>
    /**
     * Filter which ActiveSessions to update
     */
    where?: ActiveSessionWhereInput
  }

  /**
   * ActiveSession upsert
   */
  export type ActiveSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ActiveSession to update in case it exists.
     */
    where: ActiveSessionWhereUniqueInput
    /**
     * In case the ActiveSession found by the `where` argument doesn't exist, create a new ActiveSession with this data.
     */
    create: XOR<ActiveSessionCreateInput, ActiveSessionUncheckedCreateInput>
    /**
     * In case the ActiveSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActiveSessionUpdateInput, ActiveSessionUncheckedUpdateInput>
  }

  /**
   * ActiveSession delete
   */
  export type ActiveSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
    /**
     * Filter which ActiveSession to delete.
     */
    where: ActiveSessionWhereUniqueInput
  }

  /**
   * ActiveSession deleteMany
   */
  export type ActiveSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActiveSessions to delete
     */
    where?: ActiveSessionWhereInput
  }

  /**
   * ActiveSession without action
   */
  export type ActiveSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSession
     */
    select?: ActiveSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSessionInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    subtotal: number | null
    total: number | null
  }

  export type OrderSumAggregateOutputType = {
    subtotal: number | null
    total: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    ref: string | null
    customerName: string | null
    customerPhone: string | null
    subtotal: number | null
    total: number | null
    status: $Enums.OrderStatus | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentStatus: $Enums.PaymentStatus | null
    source: $Enums.OrderSource | null
    notes: string | null
    createdById: string | null
    confirmedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    confirmedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    ref: string | null
    customerName: string | null
    customerPhone: string | null
    subtotal: number | null
    total: number | null
    status: $Enums.OrderStatus | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentStatus: $Enums.PaymentStatus | null
    source: $Enums.OrderSource | null
    notes: string | null
    createdById: string | null
    confirmedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    confirmedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    ref: number
    customerName: number
    customerPhone: number
    items: number
    subtotal: number
    total: number
    status: number
    paymentMethod: number
    paymentStatus: number
    source: number
    notes: number
    createdById: number
    confirmedById: number
    createdAt: number
    updatedAt: number
    confirmedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    subtotal?: true
    total?: true
  }

  export type OrderSumAggregateInputType = {
    subtotal?: true
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    ref?: true
    customerName?: true
    customerPhone?: true
    subtotal?: true
    total?: true
    status?: true
    paymentMethod?: true
    paymentStatus?: true
    source?: true
    notes?: true
    createdById?: true
    confirmedById?: true
    createdAt?: true
    updatedAt?: true
    confirmedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    ref?: true
    customerName?: true
    customerPhone?: true
    subtotal?: true
    total?: true
    status?: true
    paymentMethod?: true
    paymentStatus?: true
    source?: true
    notes?: true
    createdById?: true
    confirmedById?: true
    createdAt?: true
    updatedAt?: true
    confirmedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    ref?: true
    customerName?: true
    customerPhone?: true
    items?: true
    subtotal?: true
    total?: true
    status?: true
    paymentMethod?: true
    paymentStatus?: true
    source?: true
    notes?: true
    createdById?: true
    confirmedById?: true
    createdAt?: true
    updatedAt?: true
    confirmedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    ref: string
    customerName: string
    customerPhone: string | null
    items: JsonValue
    subtotal: number
    total: number
    status: $Enums.OrderStatus
    paymentMethod: $Enums.PaymentMethod | null
    paymentStatus: $Enums.PaymentStatus
    source: $Enums.OrderSource
    notes: string | null
    createdById: string | null
    confirmedById: string | null
    createdAt: Date
    updatedAt: Date
    confirmedAt: Date | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ref?: boolean
    customerName?: boolean
    customerPhone?: boolean
    items?: boolean
    subtotal?: boolean
    total?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    source?: boolean
    notes?: boolean
    createdById?: boolean
    confirmedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    confirmedAt?: boolean
    confirmedBy?: boolean | Order$confirmedByArgs<ExtArgs>
    createdBy?: boolean | Order$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ref?: boolean
    customerName?: boolean
    customerPhone?: boolean
    items?: boolean
    subtotal?: boolean
    total?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    source?: boolean
    notes?: boolean
    createdById?: boolean
    confirmedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    confirmedAt?: boolean
    confirmedBy?: boolean | Order$confirmedByArgs<ExtArgs>
    createdBy?: boolean | Order$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    ref?: boolean
    customerName?: boolean
    customerPhone?: boolean
    items?: boolean
    subtotal?: boolean
    total?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    source?: boolean
    notes?: boolean
    createdById?: boolean
    confirmedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    confirmedAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    confirmedBy?: boolean | Order$confirmedByArgs<ExtArgs>
    createdBy?: boolean | Order$createdByArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    confirmedBy?: boolean | Order$confirmedByArgs<ExtArgs>
    createdBy?: boolean | Order$createdByArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      confirmedBy: Prisma.$UserPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ref: string
      customerName: string
      customerPhone: string | null
      items: Prisma.JsonValue
      subtotal: number
      total: number
      status: $Enums.OrderStatus
      paymentMethod: $Enums.PaymentMethod | null
      paymentStatus: $Enums.PaymentStatus
      source: $Enums.OrderSource
      notes: string | null
      createdById: string | null
      confirmedById: string | null
      createdAt: Date
      updatedAt: Date
      confirmedAt: Date | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    confirmedBy<T extends Order$confirmedByArgs<ExtArgs> = {}>(args?: Subset<T, Order$confirmedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    createdBy<T extends Order$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Order$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly ref: FieldRef<"Order", 'String'>
    readonly customerName: FieldRef<"Order", 'String'>
    readonly customerPhone: FieldRef<"Order", 'String'>
    readonly items: FieldRef<"Order", 'Json'>
    readonly subtotal: FieldRef<"Order", 'Float'>
    readonly total: FieldRef<"Order", 'Float'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly paymentMethod: FieldRef<"Order", 'PaymentMethod'>
    readonly paymentStatus: FieldRef<"Order", 'PaymentStatus'>
    readonly source: FieldRef<"Order", 'OrderSource'>
    readonly notes: FieldRef<"Order", 'String'>
    readonly createdById: FieldRef<"Order", 'String'>
    readonly confirmedById: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly confirmedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.confirmedBy
   */
  export type Order$confirmedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Order.createdBy
   */
  export type Order$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    userName: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    ip: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    userName: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    ip: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    userName: number
    action: number
    entity: number
    entityId: number
    meta: number
    ip: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    action?: true
    entity?: true
    entityId?: true
    ip?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    action?: true
    entity?: true
    entityId?: true
    ip?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    action?: true
    entity?: true
    entityId?: true
    meta?: true
    ip?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string | null
    userName: string | null
    action: string
    entity: string
    entityId: string | null
    meta: JsonValue | null
    ip: string | null
    userAgent: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    meta?: boolean
    ip?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    meta?: boolean
    ip?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    userName?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    meta?: boolean
    ip?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      userName: string | null
      action: string
      entity: string
      entityId: string | null
      meta: Prisma.JsonValue | null
      ip: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly userName: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly meta: FieldRef<"AuditLog", 'Json'>
    readonly ip: FieldRef<"AuditLog", 'String'>
    readonly userAgent: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog.user
   */
  export type AuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model MenuCategory
   */

  export type AggregateMenuCategory = {
    _count: MenuCategoryCountAggregateOutputType | null
    _avg: MenuCategoryAvgAggregateOutputType | null
    _sum: MenuCategorySumAggregateOutputType | null
    _min: MenuCategoryMinAggregateOutputType | null
    _max: MenuCategoryMaxAggregateOutputType | null
  }

  export type MenuCategoryAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type MenuCategorySumAggregateOutputType = {
    sortOrder: number | null
  }

  export type MenuCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuCategoryAvgAggregateInputType = {
    sortOrder?: true
  }

  export type MenuCategorySumAggregateInputType = {
    sortOrder?: true
  }

  export type MenuCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuCategory to aggregate.
     */
    where?: MenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuCategories
    **/
    _count?: true | MenuCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuCategoryMaxAggregateInputType
  }

  export type GetMenuCategoryAggregateType<T extends MenuCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuCategory[P]>
      : GetScalarType<T[P], AggregateMenuCategory[P]>
  }




  export type MenuCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuCategoryWhereInput
    orderBy?: MenuCategoryOrderByWithAggregationInput | MenuCategoryOrderByWithAggregationInput[]
    by: MenuCategoryScalarFieldEnum[] | MenuCategoryScalarFieldEnum
    having?: MenuCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCategoryCountAggregateInputType | true
    _avg?: MenuCategoryAvgAggregateInputType
    _sum?: MenuCategorySumAggregateInputType
    _min?: MenuCategoryMinAggregateInputType
    _max?: MenuCategoryMaxAggregateInputType
  }

  export type MenuCategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: MenuCategoryCountAggregateOutputType | null
    _avg: MenuCategoryAvgAggregateOutputType | null
    _sum: MenuCategorySumAggregateOutputType | null
    _min: MenuCategoryMinAggregateOutputType | null
    _max: MenuCategoryMaxAggregateOutputType | null
  }

  type GetMenuCategoryGroupByPayload<T extends MenuCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MenuCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MenuCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | MenuCategory$itemsArgs<ExtArgs>
    _count?: boolean | MenuCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuCategory"]>

  export type MenuCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["menuCategory"]>

  export type MenuCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | MenuCategory$itemsArgs<ExtArgs>
    _count?: boolean | MenuCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MenuCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuCategory"
    objects: {
      items: Prisma.$MenuItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menuCategory"]>
    composites: {}
  }

  type MenuCategoryGetPayload<S extends boolean | null | undefined | MenuCategoryDefaultArgs> = $Result.GetResult<Prisma.$MenuCategoryPayload, S>

  type MenuCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MenuCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MenuCategoryCountAggregateInputType | true
    }

  export interface MenuCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuCategory'], meta: { name: 'MenuCategory' } }
    /**
     * Find zero or one MenuCategory that matches the filter.
     * @param {MenuCategoryFindUniqueArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuCategoryFindUniqueArgs>(args: SelectSubset<T, MenuCategoryFindUniqueArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MenuCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MenuCategoryFindUniqueOrThrowArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MenuCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryFindFirstArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuCategoryFindFirstArgs>(args?: SelectSubset<T, MenuCategoryFindFirstArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MenuCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryFindFirstOrThrowArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MenuCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuCategories
     * const menuCategories = await prisma.menuCategory.findMany()
     * 
     * // Get first 10 MenuCategories
     * const menuCategories = await prisma.menuCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuCategoryWithIdOnly = await prisma.menuCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuCategoryFindManyArgs>(args?: SelectSubset<T, MenuCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MenuCategory.
     * @param {MenuCategoryCreateArgs} args - Arguments to create a MenuCategory.
     * @example
     * // Create one MenuCategory
     * const MenuCategory = await prisma.menuCategory.create({
     *   data: {
     *     // ... data to create a MenuCategory
     *   }
     * })
     * 
     */
    create<T extends MenuCategoryCreateArgs>(args: SelectSubset<T, MenuCategoryCreateArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MenuCategories.
     * @param {MenuCategoryCreateManyArgs} args - Arguments to create many MenuCategories.
     * @example
     * // Create many MenuCategories
     * const menuCategory = await prisma.menuCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuCategoryCreateManyArgs>(args?: SelectSubset<T, MenuCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuCategories and returns the data saved in the database.
     * @param {MenuCategoryCreateManyAndReturnArgs} args - Arguments to create many MenuCategories.
     * @example
     * // Create many MenuCategories
     * const menuCategory = await prisma.menuCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuCategories and only return the `id`
     * const menuCategoryWithIdOnly = await prisma.menuCategory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MenuCategory.
     * @param {MenuCategoryDeleteArgs} args - Arguments to delete one MenuCategory.
     * @example
     * // Delete one MenuCategory
     * const MenuCategory = await prisma.menuCategory.delete({
     *   where: {
     *     // ... filter to delete one MenuCategory
     *   }
     * })
     * 
     */
    delete<T extends MenuCategoryDeleteArgs>(args: SelectSubset<T, MenuCategoryDeleteArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MenuCategory.
     * @param {MenuCategoryUpdateArgs} args - Arguments to update one MenuCategory.
     * @example
     * // Update one MenuCategory
     * const menuCategory = await prisma.menuCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuCategoryUpdateArgs>(args: SelectSubset<T, MenuCategoryUpdateArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MenuCategories.
     * @param {MenuCategoryDeleteManyArgs} args - Arguments to filter MenuCategories to delete.
     * @example
     * // Delete a few MenuCategories
     * const { count } = await prisma.menuCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuCategoryDeleteManyArgs>(args?: SelectSubset<T, MenuCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuCategories
     * const menuCategory = await prisma.menuCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuCategoryUpdateManyArgs>(args: SelectSubset<T, MenuCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MenuCategory.
     * @param {MenuCategoryUpsertArgs} args - Arguments to update or create a MenuCategory.
     * @example
     * // Update or create a MenuCategory
     * const menuCategory = await prisma.menuCategory.upsert({
     *   create: {
     *     // ... data to create a MenuCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuCategory we want to update
     *   }
     * })
     */
    upsert<T extends MenuCategoryUpsertArgs>(args: SelectSubset<T, MenuCategoryUpsertArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MenuCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryCountArgs} args - Arguments to filter MenuCategories to count.
     * @example
     * // Count the number of MenuCategories
     * const count = await prisma.menuCategory.count({
     *   where: {
     *     // ... the filter for the MenuCategories we want to count
     *   }
     * })
    **/
    count<T extends MenuCategoryCountArgs>(
      args?: Subset<T, MenuCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuCategoryAggregateArgs>(args: Subset<T, MenuCategoryAggregateArgs>): Prisma.PrismaPromise<GetMenuCategoryAggregateType<T>>

    /**
     * Group by MenuCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MenuCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuCategory model
   */
  readonly fields: MenuCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends MenuCategory$itemsArgs<ExtArgs> = {}>(args?: Subset<T, MenuCategory$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenuCategory model
   */ 
  interface MenuCategoryFieldRefs {
    readonly id: FieldRef<"MenuCategory", 'String'>
    readonly name: FieldRef<"MenuCategory", 'String'>
    readonly slug: FieldRef<"MenuCategory", 'String'>
    readonly sortOrder: FieldRef<"MenuCategory", 'Int'>
    readonly createdAt: FieldRef<"MenuCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuCategory findUnique
   */
  export type MenuCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategory to fetch.
     */
    where: MenuCategoryWhereUniqueInput
  }

  /**
   * MenuCategory findUniqueOrThrow
   */
  export type MenuCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategory to fetch.
     */
    where: MenuCategoryWhereUniqueInput
  }

  /**
   * MenuCategory findFirst
   */
  export type MenuCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategory to fetch.
     */
    where?: MenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuCategories.
     */
    cursor?: MenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuCategories.
     */
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[]
  }

  /**
   * MenuCategory findFirstOrThrow
   */
  export type MenuCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategory to fetch.
     */
    where?: MenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuCategories.
     */
    cursor?: MenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuCategories.
     */
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[]
  }

  /**
   * MenuCategory findMany
   */
  export type MenuCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategories to fetch.
     */
    where?: MenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuCategories.
     */
    cursor?: MenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuCategories.
     */
    skip?: number
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[]
  }

  /**
   * MenuCategory create
   */
  export type MenuCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuCategory.
     */
    data: XOR<MenuCategoryCreateInput, MenuCategoryUncheckedCreateInput>
  }

  /**
   * MenuCategory createMany
   */
  export type MenuCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuCategories.
     */
    data: MenuCategoryCreateManyInput | MenuCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuCategory createManyAndReturn
   */
  export type MenuCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MenuCategories.
     */
    data: MenuCategoryCreateManyInput | MenuCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuCategory update
   */
  export type MenuCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuCategory.
     */
    data: XOR<MenuCategoryUpdateInput, MenuCategoryUncheckedUpdateInput>
    /**
     * Choose, which MenuCategory to update.
     */
    where: MenuCategoryWhereUniqueInput
  }

  /**
   * MenuCategory updateMany
   */
  export type MenuCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuCategories.
     */
    data: XOR<MenuCategoryUpdateManyMutationInput, MenuCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MenuCategories to update
     */
    where?: MenuCategoryWhereInput
  }

  /**
   * MenuCategory upsert
   */
  export type MenuCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuCategory to update in case it exists.
     */
    where: MenuCategoryWhereUniqueInput
    /**
     * In case the MenuCategory found by the `where` argument doesn't exist, create a new MenuCategory with this data.
     */
    create: XOR<MenuCategoryCreateInput, MenuCategoryUncheckedCreateInput>
    /**
     * In case the MenuCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuCategoryUpdateInput, MenuCategoryUncheckedUpdateInput>
  }

  /**
   * MenuCategory delete
   */
  export type MenuCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter which MenuCategory to delete.
     */
    where: MenuCategoryWhereUniqueInput
  }

  /**
   * MenuCategory deleteMany
   */
  export type MenuCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuCategories to delete
     */
    where?: MenuCategoryWhereInput
  }

  /**
   * MenuCategory.items
   */
  export type MenuCategory$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    cursor?: MenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuCategory without action
   */
  export type MenuCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
  }


  /**
   * Model MenuItem
   */

  export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  export type MenuItemAvgAggregateOutputType = {
    priceNGN: number | null
    sortOrder: number | null
  }

  export type MenuItemSumAggregateOutputType = {
    priceNGN: number | null
    sortOrder: number | null
  }

  export type MenuItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    priceNGN: number | null
    imageUrl: string | null
    isAvailable: boolean | null
    isFeatured: boolean | null
    isSpicy: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
    slug: string | null
    sortOrder: number | null
    publicId: string | null
  }

  export type MenuItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    priceNGN: number | null
    imageUrl: string | null
    isAvailable: boolean | null
    isFeatured: boolean | null
    isSpicy: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
    slug: string | null
    sortOrder: number | null
    publicId: string | null
  }

  export type MenuItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    priceNGN: number
    imageUrl: number
    isAvailable: number
    isFeatured: number
    isSpicy: number
    tags: number
    createdAt: number
    updatedAt: number
    categoryId: number
    slug: number
    sortOrder: number
    publicId: number
    _all: number
  }


  export type MenuItemAvgAggregateInputType = {
    priceNGN?: true
    sortOrder?: true
  }

  export type MenuItemSumAggregateInputType = {
    priceNGN?: true
    sortOrder?: true
  }

  export type MenuItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    priceNGN?: true
    imageUrl?: true
    isAvailable?: true
    isFeatured?: true
    isSpicy?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    slug?: true
    sortOrder?: true
    publicId?: true
  }

  export type MenuItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    priceNGN?: true
    imageUrl?: true
    isAvailable?: true
    isFeatured?: true
    isSpicy?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    slug?: true
    sortOrder?: true
    publicId?: true
  }

  export type MenuItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    priceNGN?: true
    imageUrl?: true
    isAvailable?: true
    isFeatured?: true
    isSpicy?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    slug?: true
    sortOrder?: true
    publicId?: true
    _all?: true
  }

  export type MenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItem to aggregate.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItems
    **/
    _count?: true | MenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemMaxAggregateInputType
  }

  export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItem[P]>
      : GetScalarType<T[P], AggregateMenuItem[P]>
  }




  export type MenuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithAggregationInput | MenuItemOrderByWithAggregationInput[]
    by: MenuItemScalarFieldEnum[] | MenuItemScalarFieldEnum
    having?: MenuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemCountAggregateInputType | true
    _avg?: MenuItemAvgAggregateInputType
    _sum?: MenuItemSumAggregateInputType
    _min?: MenuItemMinAggregateInputType
    _max?: MenuItemMaxAggregateInputType
  }

  export type MenuItemGroupByOutputType = {
    id: string
    name: string
    description: string | null
    priceNGN: number
    imageUrl: string | null
    isAvailable: boolean
    isFeatured: boolean
    isSpicy: boolean
    tags: string[]
    createdAt: Date
    updatedAt: Date
    categoryId: string
    slug: string
    sortOrder: number
    publicId: string | null
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  type GetMenuItemGroupByPayload<T extends MenuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    priceNGN?: boolean
    imageUrl?: boolean
    isAvailable?: boolean
    isFeatured?: boolean
    isSpicy?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    slug?: boolean
    sortOrder?: boolean
    publicId?: boolean
    EventMenuSelection?: boolean | MenuItem$EventMenuSelectionArgs<ExtArgs>
    FoodPackOrderItem?: boolean | MenuItem$FoodPackOrderItemArgs<ExtArgs>
    category?: boolean | MenuCategoryDefaultArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    priceNGN?: boolean
    imageUrl?: boolean
    isAvailable?: boolean
    isFeatured?: boolean
    isSpicy?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    slug?: boolean
    sortOrder?: boolean
    publicId?: boolean
    category?: boolean | MenuCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    priceNGN?: boolean
    imageUrl?: boolean
    isAvailable?: boolean
    isFeatured?: boolean
    isSpicy?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    slug?: boolean
    sortOrder?: boolean
    publicId?: boolean
  }

  export type MenuItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventMenuSelection?: boolean | MenuItem$EventMenuSelectionArgs<ExtArgs>
    FoodPackOrderItem?: boolean | MenuItem$FoodPackOrderItemArgs<ExtArgs>
    category?: boolean | MenuCategoryDefaultArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | MenuCategoryDefaultArgs<ExtArgs>
  }

  export type $MenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItem"
    objects: {
      EventMenuSelection: Prisma.$EventMenuSelectionPayload<ExtArgs>[]
      FoodPackOrderItem: Prisma.$FoodPackOrderItemPayload<ExtArgs>[]
      category: Prisma.$MenuCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      priceNGN: number
      imageUrl: string | null
      isAvailable: boolean
      isFeatured: boolean
      isSpicy: boolean
      tags: string[]
      createdAt: Date
      updatedAt: Date
      categoryId: string
      slug: string
      sortOrder: number
      publicId: string | null
    }, ExtArgs["result"]["menuItem"]>
    composites: {}
  }

  type MenuItemGetPayload<S extends boolean | null | undefined | MenuItemDefaultArgs> = $Result.GetResult<Prisma.$MenuItemPayload, S>

  type MenuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MenuItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MenuItemCountAggregateInputType | true
    }

  export interface MenuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItem'], meta: { name: 'MenuItem' } }
    /**
     * Find zero or one MenuItem that matches the filter.
     * @param {MenuItemFindUniqueArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemFindUniqueArgs>(args: SelectSubset<T, MenuItemFindUniqueArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MenuItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MenuItemFindUniqueOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemFindFirstArgs>(args?: SelectSubset<T, MenuItemFindFirstArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItem.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemFindManyArgs>(args?: SelectSubset<T, MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MenuItem.
     * @param {MenuItemCreateArgs} args - Arguments to create a MenuItem.
     * @example
     * // Create one MenuItem
     * const MenuItem = await prisma.menuItem.create({
     *   data: {
     *     // ... data to create a MenuItem
     *   }
     * })
     * 
     */
    create<T extends MenuItemCreateArgs>(args: SelectSubset<T, MenuItemCreateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MenuItems.
     * @param {MenuItemCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemCreateManyArgs>(args?: SelectSubset<T, MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItems and returns the data saved in the database.
     * @param {MenuItemCreateManyAndReturnArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MenuItem.
     * @param {MenuItemDeleteArgs} args - Arguments to delete one MenuItem.
     * @example
     * // Delete one MenuItem
     * const MenuItem = await prisma.menuItem.delete({
     *   where: {
     *     // ... filter to delete one MenuItem
     *   }
     * })
     * 
     */
    delete<T extends MenuItemDeleteArgs>(args: SelectSubset<T, MenuItemDeleteArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MenuItem.
     * @param {MenuItemUpdateArgs} args - Arguments to update one MenuItem.
     * @example
     * // Update one MenuItem
     * const menuItem = await prisma.menuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemUpdateArgs>(args: SelectSubset<T, MenuItemUpdateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MenuItems.
     * @param {MenuItemDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemDeleteManyArgs>(args?: SelectSubset<T, MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemUpdateManyArgs>(args: SelectSubset<T, MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MenuItem.
     * @param {MenuItemUpsertArgs} args - Arguments to update or create a MenuItem.
     * @example
     * // Update or create a MenuItem
     * const menuItem = await prisma.menuItem.upsert({
     *   create: {
     *     // ... data to create a MenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItem we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemUpsertArgs>(args: SelectSubset<T, MenuItemUpsertArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItem.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends MenuItemCountArgs>(
      args?: Subset<T, MenuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuItemAggregateArgs>(args: Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>

    /**
     * Group by MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItem model
   */
  readonly fields: MenuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    EventMenuSelection<T extends MenuItem$EventMenuSelectionArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$EventMenuSelectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventMenuSelectionPayload<ExtArgs>, T, "findMany"> | Null>
    FoodPackOrderItem<T extends MenuItem$FoodPackOrderItemArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$FoodPackOrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPackOrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    category<T extends MenuCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuCategoryDefaultArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenuItem model
   */ 
  interface MenuItemFieldRefs {
    readonly id: FieldRef<"MenuItem", 'String'>
    readonly name: FieldRef<"MenuItem", 'String'>
    readonly description: FieldRef<"MenuItem", 'String'>
    readonly priceNGN: FieldRef<"MenuItem", 'Float'>
    readonly imageUrl: FieldRef<"MenuItem", 'String'>
    readonly isAvailable: FieldRef<"MenuItem", 'Boolean'>
    readonly isFeatured: FieldRef<"MenuItem", 'Boolean'>
    readonly isSpicy: FieldRef<"MenuItem", 'Boolean'>
    readonly tags: FieldRef<"MenuItem", 'String[]'>
    readonly createdAt: FieldRef<"MenuItem", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuItem", 'DateTime'>
    readonly categoryId: FieldRef<"MenuItem", 'String'>
    readonly slug: FieldRef<"MenuItem", 'String'>
    readonly sortOrder: FieldRef<"MenuItem", 'Int'>
    readonly publicId: FieldRef<"MenuItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MenuItem findUnique
   */
  export type MenuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findUniqueOrThrow
   */
  export type MenuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findFirst
   */
  export type MenuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findFirstOrThrow
   */
  export type MenuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findMany
   */
  export type MenuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem create
   */
  export type MenuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItem.
     */
    data: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
  }

  /**
   * MenuItem createMany
   */
  export type MenuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItem createManyAndReturn
   */
  export type MenuItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem update
   */
  export type MenuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItem.
     */
    data: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
    /**
     * Choose, which MenuItem to update.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem updateMany
   */
  export type MenuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
  }

  /**
   * MenuItem upsert
   */
  export type MenuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItem to update in case it exists.
     */
    where: MenuItemWhereUniqueInput
    /**
     * In case the MenuItem found by the `where` argument doesn't exist, create a new MenuItem with this data.
     */
    create: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
    /**
     * In case the MenuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
  }

  /**
   * MenuItem delete
   */
  export type MenuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter which MenuItem to delete.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem deleteMany
   */
  export type MenuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to delete
     */
    where?: MenuItemWhereInput
  }

  /**
   * MenuItem.EventMenuSelection
   */
  export type MenuItem$EventMenuSelectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuSelection
     */
    select?: EventMenuSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuSelectionInclude<ExtArgs> | null
    where?: EventMenuSelectionWhereInput
    orderBy?: EventMenuSelectionOrderByWithRelationInput | EventMenuSelectionOrderByWithRelationInput[]
    cursor?: EventMenuSelectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventMenuSelectionScalarFieldEnum | EventMenuSelectionScalarFieldEnum[]
  }

  /**
   * MenuItem.FoodPackOrderItem
   */
  export type MenuItem$FoodPackOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrderItem
     */
    select?: FoodPackOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderItemInclude<ExtArgs> | null
    where?: FoodPackOrderItemWhereInput
    orderBy?: FoodPackOrderItemOrderByWithRelationInput | FoodPackOrderItemOrderByWithRelationInput[]
    cursor?: FoodPackOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodPackOrderItemScalarFieldEnum | FoodPackOrderItemScalarFieldEnum[]
  }

  /**
   * MenuItem without action
   */
  export type MenuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
  }


  /**
   * Model FoodPackOrder
   */

  export type AggregateFoodPackOrder = {
    _count: FoodPackOrderCountAggregateOutputType | null
    _avg: FoodPackOrderAvgAggregateOutputType | null
    _sum: FoodPackOrderSumAggregateOutputType | null
    _min: FoodPackOrderMinAggregateOutputType | null
    _max: FoodPackOrderMaxAggregateOutputType | null
  }

  export type FoodPackOrderAvgAggregateOutputType = {
    totalAmountNGN: number | null
  }

  export type FoodPackOrderSumAggregateOutputType = {
    totalAmountNGN: number | null
  }

  export type FoodPackOrderMinAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    status: $Enums.FoodPackStatus | null
    customerName: string | null
    customerPhone: string | null
    customerEmail: string | null
    deliveryMethod: $Enums.DeliveryMethod | null
    deliveryAddress: string | null
    deliveryDate: Date | null
    specialNotes: string | null
    totalAmountNGN: number | null
    isPaid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodPackOrderMaxAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    status: $Enums.FoodPackStatus | null
    customerName: string | null
    customerPhone: string | null
    customerEmail: string | null
    deliveryMethod: $Enums.DeliveryMethod | null
    deliveryAddress: string | null
    deliveryDate: Date | null
    specialNotes: string | null
    totalAmountNGN: number | null
    isPaid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodPackOrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    status: number
    customerName: number
    customerPhone: number
    customerEmail: number
    deliveryMethod: number
    deliveryAddress: number
    deliveryDate: number
    specialNotes: number
    totalAmountNGN: number
    isPaid: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodPackOrderAvgAggregateInputType = {
    totalAmountNGN?: true
  }

  export type FoodPackOrderSumAggregateInputType = {
    totalAmountNGN?: true
  }

  export type FoodPackOrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    status?: true
    customerName?: true
    customerPhone?: true
    customerEmail?: true
    deliveryMethod?: true
    deliveryAddress?: true
    deliveryDate?: true
    specialNotes?: true
    totalAmountNGN?: true
    isPaid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodPackOrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    status?: true
    customerName?: true
    customerPhone?: true
    customerEmail?: true
    deliveryMethod?: true
    deliveryAddress?: true
    deliveryDate?: true
    specialNotes?: true
    totalAmountNGN?: true
    isPaid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodPackOrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    status?: true
    customerName?: true
    customerPhone?: true
    customerEmail?: true
    deliveryMethod?: true
    deliveryAddress?: true
    deliveryDate?: true
    specialNotes?: true
    totalAmountNGN?: true
    isPaid?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodPackOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodPackOrder to aggregate.
     */
    where?: FoodPackOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodPackOrders to fetch.
     */
    orderBy?: FoodPackOrderOrderByWithRelationInput | FoodPackOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodPackOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodPackOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodPackOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodPackOrders
    **/
    _count?: true | FoodPackOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodPackOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodPackOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodPackOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodPackOrderMaxAggregateInputType
  }

  export type GetFoodPackOrderAggregateType<T extends FoodPackOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodPackOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodPackOrder[P]>
      : GetScalarType<T[P], AggregateFoodPackOrder[P]>
  }




  export type FoodPackOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodPackOrderWhereInput
    orderBy?: FoodPackOrderOrderByWithAggregationInput | FoodPackOrderOrderByWithAggregationInput[]
    by: FoodPackOrderScalarFieldEnum[] | FoodPackOrderScalarFieldEnum
    having?: FoodPackOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodPackOrderCountAggregateInputType | true
    _avg?: FoodPackOrderAvgAggregateInputType
    _sum?: FoodPackOrderSumAggregateInputType
    _min?: FoodPackOrderMinAggregateInputType
    _max?: FoodPackOrderMaxAggregateInputType
  }

  export type FoodPackOrderGroupByOutputType = {
    id: string
    orderNumber: string
    status: $Enums.FoodPackStatus
    customerName: string
    customerPhone: string
    customerEmail: string | null
    deliveryMethod: $Enums.DeliveryMethod
    deliveryAddress: string | null
    deliveryDate: Date | null
    specialNotes: string | null
    totalAmountNGN: number
    isPaid: boolean
    createdAt: Date
    updatedAt: Date
    _count: FoodPackOrderCountAggregateOutputType | null
    _avg: FoodPackOrderAvgAggregateOutputType | null
    _sum: FoodPackOrderSumAggregateOutputType | null
    _min: FoodPackOrderMinAggregateOutputType | null
    _max: FoodPackOrderMaxAggregateOutputType | null
  }

  type GetFoodPackOrderGroupByPayload<T extends FoodPackOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodPackOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodPackOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodPackOrderGroupByOutputType[P]>
            : GetScalarType<T[P], FoodPackOrderGroupByOutputType[P]>
        }
      >
    >


  export type FoodPackOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    status?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerEmail?: boolean
    deliveryMethod?: boolean
    deliveryAddress?: boolean
    deliveryDate?: boolean
    specialNotes?: boolean
    totalAmountNGN?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | FoodPackOrder$itemsArgs<ExtArgs>
    _count?: boolean | FoodPackOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodPackOrder"]>

  export type FoodPackOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    status?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerEmail?: boolean
    deliveryMethod?: boolean
    deliveryAddress?: boolean
    deliveryDate?: boolean
    specialNotes?: boolean
    totalAmountNGN?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["foodPackOrder"]>

  export type FoodPackOrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    status?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerEmail?: boolean
    deliveryMethod?: boolean
    deliveryAddress?: boolean
    deliveryDate?: boolean
    specialNotes?: boolean
    totalAmountNGN?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodPackOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | FoodPackOrder$itemsArgs<ExtArgs>
    _count?: boolean | FoodPackOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoodPackOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FoodPackOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodPackOrder"
    objects: {
      items: Prisma.$FoodPackOrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderNumber: string
      status: $Enums.FoodPackStatus
      customerName: string
      customerPhone: string
      customerEmail: string | null
      deliveryMethod: $Enums.DeliveryMethod
      deliveryAddress: string | null
      deliveryDate: Date | null
      specialNotes: string | null
      totalAmountNGN: number
      isPaid: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foodPackOrder"]>
    composites: {}
  }

  type FoodPackOrderGetPayload<S extends boolean | null | undefined | FoodPackOrderDefaultArgs> = $Result.GetResult<Prisma.$FoodPackOrderPayload, S>

  type FoodPackOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FoodPackOrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FoodPackOrderCountAggregateInputType | true
    }

  export interface FoodPackOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodPackOrder'], meta: { name: 'FoodPackOrder' } }
    /**
     * Find zero or one FoodPackOrder that matches the filter.
     * @param {FoodPackOrderFindUniqueArgs} args - Arguments to find a FoodPackOrder
     * @example
     * // Get one FoodPackOrder
     * const foodPackOrder = await prisma.foodPackOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodPackOrderFindUniqueArgs>(args: SelectSubset<T, FoodPackOrderFindUniqueArgs<ExtArgs>>): Prisma__FoodPackOrderClient<$Result.GetResult<Prisma.$FoodPackOrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FoodPackOrder that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FoodPackOrderFindUniqueOrThrowArgs} args - Arguments to find a FoodPackOrder
     * @example
     * // Get one FoodPackOrder
     * const foodPackOrder = await prisma.foodPackOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodPackOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodPackOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodPackOrderClient<$Result.GetResult<Prisma.$FoodPackOrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FoodPackOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodPackOrderFindFirstArgs} args - Arguments to find a FoodPackOrder
     * @example
     * // Get one FoodPackOrder
     * const foodPackOrder = await prisma.foodPackOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodPackOrderFindFirstArgs>(args?: SelectSubset<T, FoodPackOrderFindFirstArgs<ExtArgs>>): Prisma__FoodPackOrderClient<$Result.GetResult<Prisma.$FoodPackOrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FoodPackOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodPackOrderFindFirstOrThrowArgs} args - Arguments to find a FoodPackOrder
     * @example
     * // Get one FoodPackOrder
     * const foodPackOrder = await prisma.foodPackOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodPackOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodPackOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodPackOrderClient<$Result.GetResult<Prisma.$FoodPackOrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FoodPackOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodPackOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodPackOrders
     * const foodPackOrders = await prisma.foodPackOrder.findMany()
     * 
     * // Get first 10 FoodPackOrders
     * const foodPackOrders = await prisma.foodPackOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodPackOrderWithIdOnly = await prisma.foodPackOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodPackOrderFindManyArgs>(args?: SelectSubset<T, FoodPackOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPackOrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FoodPackOrder.
     * @param {FoodPackOrderCreateArgs} args - Arguments to create a FoodPackOrder.
     * @example
     * // Create one FoodPackOrder
     * const FoodPackOrder = await prisma.foodPackOrder.create({
     *   data: {
     *     // ... data to create a FoodPackOrder
     *   }
     * })
     * 
     */
    create<T extends FoodPackOrderCreateArgs>(args: SelectSubset<T, FoodPackOrderCreateArgs<ExtArgs>>): Prisma__FoodPackOrderClient<$Result.GetResult<Prisma.$FoodPackOrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FoodPackOrders.
     * @param {FoodPackOrderCreateManyArgs} args - Arguments to create many FoodPackOrders.
     * @example
     * // Create many FoodPackOrders
     * const foodPackOrder = await prisma.foodPackOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodPackOrderCreateManyArgs>(args?: SelectSubset<T, FoodPackOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodPackOrders and returns the data saved in the database.
     * @param {FoodPackOrderCreateManyAndReturnArgs} args - Arguments to create many FoodPackOrders.
     * @example
     * // Create many FoodPackOrders
     * const foodPackOrder = await prisma.foodPackOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodPackOrders and only return the `id`
     * const foodPackOrderWithIdOnly = await prisma.foodPackOrder.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodPackOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodPackOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPackOrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FoodPackOrder.
     * @param {FoodPackOrderDeleteArgs} args - Arguments to delete one FoodPackOrder.
     * @example
     * // Delete one FoodPackOrder
     * const FoodPackOrder = await prisma.foodPackOrder.delete({
     *   where: {
     *     // ... filter to delete one FoodPackOrder
     *   }
     * })
     * 
     */
    delete<T extends FoodPackOrderDeleteArgs>(args: SelectSubset<T, FoodPackOrderDeleteArgs<ExtArgs>>): Prisma__FoodPackOrderClient<$Result.GetResult<Prisma.$FoodPackOrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FoodPackOrder.
     * @param {FoodPackOrderUpdateArgs} args - Arguments to update one FoodPackOrder.
     * @example
     * // Update one FoodPackOrder
     * const foodPackOrder = await prisma.foodPackOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodPackOrderUpdateArgs>(args: SelectSubset<T, FoodPackOrderUpdateArgs<ExtArgs>>): Prisma__FoodPackOrderClient<$Result.GetResult<Prisma.$FoodPackOrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FoodPackOrders.
     * @param {FoodPackOrderDeleteManyArgs} args - Arguments to filter FoodPackOrders to delete.
     * @example
     * // Delete a few FoodPackOrders
     * const { count } = await prisma.foodPackOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodPackOrderDeleteManyArgs>(args?: SelectSubset<T, FoodPackOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodPackOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodPackOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodPackOrders
     * const foodPackOrder = await prisma.foodPackOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodPackOrderUpdateManyArgs>(args: SelectSubset<T, FoodPackOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FoodPackOrder.
     * @param {FoodPackOrderUpsertArgs} args - Arguments to update or create a FoodPackOrder.
     * @example
     * // Update or create a FoodPackOrder
     * const foodPackOrder = await prisma.foodPackOrder.upsert({
     *   create: {
     *     // ... data to create a FoodPackOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodPackOrder we want to update
     *   }
     * })
     */
    upsert<T extends FoodPackOrderUpsertArgs>(args: SelectSubset<T, FoodPackOrderUpsertArgs<ExtArgs>>): Prisma__FoodPackOrderClient<$Result.GetResult<Prisma.$FoodPackOrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FoodPackOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodPackOrderCountArgs} args - Arguments to filter FoodPackOrders to count.
     * @example
     * // Count the number of FoodPackOrders
     * const count = await prisma.foodPackOrder.count({
     *   where: {
     *     // ... the filter for the FoodPackOrders we want to count
     *   }
     * })
    **/
    count<T extends FoodPackOrderCountArgs>(
      args?: Subset<T, FoodPackOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodPackOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodPackOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodPackOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodPackOrderAggregateArgs>(args: Subset<T, FoodPackOrderAggregateArgs>): Prisma.PrismaPromise<GetFoodPackOrderAggregateType<T>>

    /**
     * Group by FoodPackOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodPackOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodPackOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodPackOrderGroupByArgs['orderBy'] }
        : { orderBy?: FoodPackOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodPackOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodPackOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodPackOrder model
   */
  readonly fields: FoodPackOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodPackOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodPackOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends FoodPackOrder$itemsArgs<ExtArgs> = {}>(args?: Subset<T, FoodPackOrder$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPackOrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FoodPackOrder model
   */ 
  interface FoodPackOrderFieldRefs {
    readonly id: FieldRef<"FoodPackOrder", 'String'>
    readonly orderNumber: FieldRef<"FoodPackOrder", 'String'>
    readonly status: FieldRef<"FoodPackOrder", 'FoodPackStatus'>
    readonly customerName: FieldRef<"FoodPackOrder", 'String'>
    readonly customerPhone: FieldRef<"FoodPackOrder", 'String'>
    readonly customerEmail: FieldRef<"FoodPackOrder", 'String'>
    readonly deliveryMethod: FieldRef<"FoodPackOrder", 'DeliveryMethod'>
    readonly deliveryAddress: FieldRef<"FoodPackOrder", 'String'>
    readonly deliveryDate: FieldRef<"FoodPackOrder", 'DateTime'>
    readonly specialNotes: FieldRef<"FoodPackOrder", 'String'>
    readonly totalAmountNGN: FieldRef<"FoodPackOrder", 'Float'>
    readonly isPaid: FieldRef<"FoodPackOrder", 'Boolean'>
    readonly createdAt: FieldRef<"FoodPackOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"FoodPackOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoodPackOrder findUnique
   */
  export type FoodPackOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrder
     */
    select?: FoodPackOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderInclude<ExtArgs> | null
    /**
     * Filter, which FoodPackOrder to fetch.
     */
    where: FoodPackOrderWhereUniqueInput
  }

  /**
   * FoodPackOrder findUniqueOrThrow
   */
  export type FoodPackOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrder
     */
    select?: FoodPackOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderInclude<ExtArgs> | null
    /**
     * Filter, which FoodPackOrder to fetch.
     */
    where: FoodPackOrderWhereUniqueInput
  }

  /**
   * FoodPackOrder findFirst
   */
  export type FoodPackOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrder
     */
    select?: FoodPackOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderInclude<ExtArgs> | null
    /**
     * Filter, which FoodPackOrder to fetch.
     */
    where?: FoodPackOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodPackOrders to fetch.
     */
    orderBy?: FoodPackOrderOrderByWithRelationInput | FoodPackOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodPackOrders.
     */
    cursor?: FoodPackOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodPackOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodPackOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodPackOrders.
     */
    distinct?: FoodPackOrderScalarFieldEnum | FoodPackOrderScalarFieldEnum[]
  }

  /**
   * FoodPackOrder findFirstOrThrow
   */
  export type FoodPackOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrder
     */
    select?: FoodPackOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderInclude<ExtArgs> | null
    /**
     * Filter, which FoodPackOrder to fetch.
     */
    where?: FoodPackOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodPackOrders to fetch.
     */
    orderBy?: FoodPackOrderOrderByWithRelationInput | FoodPackOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodPackOrders.
     */
    cursor?: FoodPackOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodPackOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodPackOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodPackOrders.
     */
    distinct?: FoodPackOrderScalarFieldEnum | FoodPackOrderScalarFieldEnum[]
  }

  /**
   * FoodPackOrder findMany
   */
  export type FoodPackOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrder
     */
    select?: FoodPackOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderInclude<ExtArgs> | null
    /**
     * Filter, which FoodPackOrders to fetch.
     */
    where?: FoodPackOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodPackOrders to fetch.
     */
    orderBy?: FoodPackOrderOrderByWithRelationInput | FoodPackOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodPackOrders.
     */
    cursor?: FoodPackOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodPackOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodPackOrders.
     */
    skip?: number
    distinct?: FoodPackOrderScalarFieldEnum | FoodPackOrderScalarFieldEnum[]
  }

  /**
   * FoodPackOrder create
   */
  export type FoodPackOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrder
     */
    select?: FoodPackOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodPackOrder.
     */
    data: XOR<FoodPackOrderCreateInput, FoodPackOrderUncheckedCreateInput>
  }

  /**
   * FoodPackOrder createMany
   */
  export type FoodPackOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodPackOrders.
     */
    data: FoodPackOrderCreateManyInput | FoodPackOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodPackOrder createManyAndReturn
   */
  export type FoodPackOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrder
     */
    select?: FoodPackOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FoodPackOrders.
     */
    data: FoodPackOrderCreateManyInput | FoodPackOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodPackOrder update
   */
  export type FoodPackOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrder
     */
    select?: FoodPackOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodPackOrder.
     */
    data: XOR<FoodPackOrderUpdateInput, FoodPackOrderUncheckedUpdateInput>
    /**
     * Choose, which FoodPackOrder to update.
     */
    where: FoodPackOrderWhereUniqueInput
  }

  /**
   * FoodPackOrder updateMany
   */
  export type FoodPackOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodPackOrders.
     */
    data: XOR<FoodPackOrderUpdateManyMutationInput, FoodPackOrderUncheckedUpdateManyInput>
    /**
     * Filter which FoodPackOrders to update
     */
    where?: FoodPackOrderWhereInput
  }

  /**
   * FoodPackOrder upsert
   */
  export type FoodPackOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrder
     */
    select?: FoodPackOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodPackOrder to update in case it exists.
     */
    where: FoodPackOrderWhereUniqueInput
    /**
     * In case the FoodPackOrder found by the `where` argument doesn't exist, create a new FoodPackOrder with this data.
     */
    create: XOR<FoodPackOrderCreateInput, FoodPackOrderUncheckedCreateInput>
    /**
     * In case the FoodPackOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodPackOrderUpdateInput, FoodPackOrderUncheckedUpdateInput>
  }

  /**
   * FoodPackOrder delete
   */
  export type FoodPackOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrder
     */
    select?: FoodPackOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderInclude<ExtArgs> | null
    /**
     * Filter which FoodPackOrder to delete.
     */
    where: FoodPackOrderWhereUniqueInput
  }

  /**
   * FoodPackOrder deleteMany
   */
  export type FoodPackOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodPackOrders to delete
     */
    where?: FoodPackOrderWhereInput
  }

  /**
   * FoodPackOrder.items
   */
  export type FoodPackOrder$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrderItem
     */
    select?: FoodPackOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderItemInclude<ExtArgs> | null
    where?: FoodPackOrderItemWhereInput
    orderBy?: FoodPackOrderItemOrderByWithRelationInput | FoodPackOrderItemOrderByWithRelationInput[]
    cursor?: FoodPackOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodPackOrderItemScalarFieldEnum | FoodPackOrderItemScalarFieldEnum[]
  }

  /**
   * FoodPackOrder without action
   */
  export type FoodPackOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrder
     */
    select?: FoodPackOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderInclude<ExtArgs> | null
  }


  /**
   * Model FoodPackOrderItem
   */

  export type AggregateFoodPackOrderItem = {
    _count: FoodPackOrderItemCountAggregateOutputType | null
    _avg: FoodPackOrderItemAvgAggregateOutputType | null
    _sum: FoodPackOrderItemSumAggregateOutputType | null
    _min: FoodPackOrderItemMinAggregateOutputType | null
    _max: FoodPackOrderItemMaxAggregateOutputType | null
  }

  export type FoodPackOrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    totalPrice: number | null
  }

  export type FoodPackOrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    totalPrice: number | null
  }

  export type FoodPackOrderItemMinAggregateOutputType = {
    id: string | null
    quantity: number | null
    unitPrice: number | null
    totalPrice: number | null
    orderId: string | null
    menuItemId: string | null
  }

  export type FoodPackOrderItemMaxAggregateOutputType = {
    id: string | null
    quantity: number | null
    unitPrice: number | null
    totalPrice: number | null
    orderId: string | null
    menuItemId: string | null
  }

  export type FoodPackOrderItemCountAggregateOutputType = {
    id: number
    quantity: number
    unitPrice: number
    totalPrice: number
    orderId: number
    menuItemId: number
    _all: number
  }


  export type FoodPackOrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type FoodPackOrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type FoodPackOrderItemMinAggregateInputType = {
    id?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    orderId?: true
    menuItemId?: true
  }

  export type FoodPackOrderItemMaxAggregateInputType = {
    id?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    orderId?: true
    menuItemId?: true
  }

  export type FoodPackOrderItemCountAggregateInputType = {
    id?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    orderId?: true
    menuItemId?: true
    _all?: true
  }

  export type FoodPackOrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodPackOrderItem to aggregate.
     */
    where?: FoodPackOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodPackOrderItems to fetch.
     */
    orderBy?: FoodPackOrderItemOrderByWithRelationInput | FoodPackOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodPackOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodPackOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodPackOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodPackOrderItems
    **/
    _count?: true | FoodPackOrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodPackOrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodPackOrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodPackOrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodPackOrderItemMaxAggregateInputType
  }

  export type GetFoodPackOrderItemAggregateType<T extends FoodPackOrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodPackOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodPackOrderItem[P]>
      : GetScalarType<T[P], AggregateFoodPackOrderItem[P]>
  }




  export type FoodPackOrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodPackOrderItemWhereInput
    orderBy?: FoodPackOrderItemOrderByWithAggregationInput | FoodPackOrderItemOrderByWithAggregationInput[]
    by: FoodPackOrderItemScalarFieldEnum[] | FoodPackOrderItemScalarFieldEnum
    having?: FoodPackOrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodPackOrderItemCountAggregateInputType | true
    _avg?: FoodPackOrderItemAvgAggregateInputType
    _sum?: FoodPackOrderItemSumAggregateInputType
    _min?: FoodPackOrderItemMinAggregateInputType
    _max?: FoodPackOrderItemMaxAggregateInputType
  }

  export type FoodPackOrderItemGroupByOutputType = {
    id: string
    quantity: number
    unitPrice: number
    totalPrice: number
    orderId: string
    menuItemId: string
    _count: FoodPackOrderItemCountAggregateOutputType | null
    _avg: FoodPackOrderItemAvgAggregateOutputType | null
    _sum: FoodPackOrderItemSumAggregateOutputType | null
    _min: FoodPackOrderItemMinAggregateOutputType | null
    _max: FoodPackOrderItemMaxAggregateOutputType | null
  }

  type GetFoodPackOrderItemGroupByPayload<T extends FoodPackOrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodPackOrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodPackOrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodPackOrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], FoodPackOrderItemGroupByOutputType[P]>
        }
      >
    >


  export type FoodPackOrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    orderId?: boolean
    menuItemId?: boolean
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    order?: boolean | FoodPackOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodPackOrderItem"]>

  export type FoodPackOrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    orderId?: boolean
    menuItemId?: boolean
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    order?: boolean | FoodPackOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodPackOrderItem"]>

  export type FoodPackOrderItemSelectScalar = {
    id?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    orderId?: boolean
    menuItemId?: boolean
  }

  export type FoodPackOrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    order?: boolean | FoodPackOrderDefaultArgs<ExtArgs>
  }
  export type FoodPackOrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    order?: boolean | FoodPackOrderDefaultArgs<ExtArgs>
  }

  export type $FoodPackOrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodPackOrderItem"
    objects: {
      menuItem: Prisma.$MenuItemPayload<ExtArgs>
      order: Prisma.$FoodPackOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantity: number
      unitPrice: number
      totalPrice: number
      orderId: string
      menuItemId: string
    }, ExtArgs["result"]["foodPackOrderItem"]>
    composites: {}
  }

  type FoodPackOrderItemGetPayload<S extends boolean | null | undefined | FoodPackOrderItemDefaultArgs> = $Result.GetResult<Prisma.$FoodPackOrderItemPayload, S>

  type FoodPackOrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FoodPackOrderItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FoodPackOrderItemCountAggregateInputType | true
    }

  export interface FoodPackOrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodPackOrderItem'], meta: { name: 'FoodPackOrderItem' } }
    /**
     * Find zero or one FoodPackOrderItem that matches the filter.
     * @param {FoodPackOrderItemFindUniqueArgs} args - Arguments to find a FoodPackOrderItem
     * @example
     * // Get one FoodPackOrderItem
     * const foodPackOrderItem = await prisma.foodPackOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodPackOrderItemFindUniqueArgs>(args: SelectSubset<T, FoodPackOrderItemFindUniqueArgs<ExtArgs>>): Prisma__FoodPackOrderItemClient<$Result.GetResult<Prisma.$FoodPackOrderItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FoodPackOrderItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FoodPackOrderItemFindUniqueOrThrowArgs} args - Arguments to find a FoodPackOrderItem
     * @example
     * // Get one FoodPackOrderItem
     * const foodPackOrderItem = await prisma.foodPackOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodPackOrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodPackOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodPackOrderItemClient<$Result.GetResult<Prisma.$FoodPackOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FoodPackOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodPackOrderItemFindFirstArgs} args - Arguments to find a FoodPackOrderItem
     * @example
     * // Get one FoodPackOrderItem
     * const foodPackOrderItem = await prisma.foodPackOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodPackOrderItemFindFirstArgs>(args?: SelectSubset<T, FoodPackOrderItemFindFirstArgs<ExtArgs>>): Prisma__FoodPackOrderItemClient<$Result.GetResult<Prisma.$FoodPackOrderItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FoodPackOrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodPackOrderItemFindFirstOrThrowArgs} args - Arguments to find a FoodPackOrderItem
     * @example
     * // Get one FoodPackOrderItem
     * const foodPackOrderItem = await prisma.foodPackOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodPackOrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodPackOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodPackOrderItemClient<$Result.GetResult<Prisma.$FoodPackOrderItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FoodPackOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodPackOrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodPackOrderItems
     * const foodPackOrderItems = await prisma.foodPackOrderItem.findMany()
     * 
     * // Get first 10 FoodPackOrderItems
     * const foodPackOrderItems = await prisma.foodPackOrderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodPackOrderItemWithIdOnly = await prisma.foodPackOrderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodPackOrderItemFindManyArgs>(args?: SelectSubset<T, FoodPackOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPackOrderItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FoodPackOrderItem.
     * @param {FoodPackOrderItemCreateArgs} args - Arguments to create a FoodPackOrderItem.
     * @example
     * // Create one FoodPackOrderItem
     * const FoodPackOrderItem = await prisma.foodPackOrderItem.create({
     *   data: {
     *     // ... data to create a FoodPackOrderItem
     *   }
     * })
     * 
     */
    create<T extends FoodPackOrderItemCreateArgs>(args: SelectSubset<T, FoodPackOrderItemCreateArgs<ExtArgs>>): Prisma__FoodPackOrderItemClient<$Result.GetResult<Prisma.$FoodPackOrderItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FoodPackOrderItems.
     * @param {FoodPackOrderItemCreateManyArgs} args - Arguments to create many FoodPackOrderItems.
     * @example
     * // Create many FoodPackOrderItems
     * const foodPackOrderItem = await prisma.foodPackOrderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodPackOrderItemCreateManyArgs>(args?: SelectSubset<T, FoodPackOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodPackOrderItems and returns the data saved in the database.
     * @param {FoodPackOrderItemCreateManyAndReturnArgs} args - Arguments to create many FoodPackOrderItems.
     * @example
     * // Create many FoodPackOrderItems
     * const foodPackOrderItem = await prisma.foodPackOrderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodPackOrderItems and only return the `id`
     * const foodPackOrderItemWithIdOnly = await prisma.foodPackOrderItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodPackOrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodPackOrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPackOrderItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FoodPackOrderItem.
     * @param {FoodPackOrderItemDeleteArgs} args - Arguments to delete one FoodPackOrderItem.
     * @example
     * // Delete one FoodPackOrderItem
     * const FoodPackOrderItem = await prisma.foodPackOrderItem.delete({
     *   where: {
     *     // ... filter to delete one FoodPackOrderItem
     *   }
     * })
     * 
     */
    delete<T extends FoodPackOrderItemDeleteArgs>(args: SelectSubset<T, FoodPackOrderItemDeleteArgs<ExtArgs>>): Prisma__FoodPackOrderItemClient<$Result.GetResult<Prisma.$FoodPackOrderItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FoodPackOrderItem.
     * @param {FoodPackOrderItemUpdateArgs} args - Arguments to update one FoodPackOrderItem.
     * @example
     * // Update one FoodPackOrderItem
     * const foodPackOrderItem = await prisma.foodPackOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodPackOrderItemUpdateArgs>(args: SelectSubset<T, FoodPackOrderItemUpdateArgs<ExtArgs>>): Prisma__FoodPackOrderItemClient<$Result.GetResult<Prisma.$FoodPackOrderItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FoodPackOrderItems.
     * @param {FoodPackOrderItemDeleteManyArgs} args - Arguments to filter FoodPackOrderItems to delete.
     * @example
     * // Delete a few FoodPackOrderItems
     * const { count } = await prisma.foodPackOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodPackOrderItemDeleteManyArgs>(args?: SelectSubset<T, FoodPackOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodPackOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodPackOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodPackOrderItems
     * const foodPackOrderItem = await prisma.foodPackOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodPackOrderItemUpdateManyArgs>(args: SelectSubset<T, FoodPackOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FoodPackOrderItem.
     * @param {FoodPackOrderItemUpsertArgs} args - Arguments to update or create a FoodPackOrderItem.
     * @example
     * // Update or create a FoodPackOrderItem
     * const foodPackOrderItem = await prisma.foodPackOrderItem.upsert({
     *   create: {
     *     // ... data to create a FoodPackOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodPackOrderItem we want to update
     *   }
     * })
     */
    upsert<T extends FoodPackOrderItemUpsertArgs>(args: SelectSubset<T, FoodPackOrderItemUpsertArgs<ExtArgs>>): Prisma__FoodPackOrderItemClient<$Result.GetResult<Prisma.$FoodPackOrderItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FoodPackOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodPackOrderItemCountArgs} args - Arguments to filter FoodPackOrderItems to count.
     * @example
     * // Count the number of FoodPackOrderItems
     * const count = await prisma.foodPackOrderItem.count({
     *   where: {
     *     // ... the filter for the FoodPackOrderItems we want to count
     *   }
     * })
    **/
    count<T extends FoodPackOrderItemCountArgs>(
      args?: Subset<T, FoodPackOrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodPackOrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodPackOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodPackOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodPackOrderItemAggregateArgs>(args: Subset<T, FoodPackOrderItemAggregateArgs>): Prisma.PrismaPromise<GetFoodPackOrderItemAggregateType<T>>

    /**
     * Group by FoodPackOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodPackOrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodPackOrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodPackOrderItemGroupByArgs['orderBy'] }
        : { orderBy?: FoodPackOrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodPackOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodPackOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodPackOrderItem model
   */
  readonly fields: FoodPackOrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodPackOrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodPackOrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuItem<T extends MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemDefaultArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    order<T extends FoodPackOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodPackOrderDefaultArgs<ExtArgs>>): Prisma__FoodPackOrderClient<$Result.GetResult<Prisma.$FoodPackOrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FoodPackOrderItem model
   */ 
  interface FoodPackOrderItemFieldRefs {
    readonly id: FieldRef<"FoodPackOrderItem", 'String'>
    readonly quantity: FieldRef<"FoodPackOrderItem", 'Int'>
    readonly unitPrice: FieldRef<"FoodPackOrderItem", 'Float'>
    readonly totalPrice: FieldRef<"FoodPackOrderItem", 'Float'>
    readonly orderId: FieldRef<"FoodPackOrderItem", 'String'>
    readonly menuItemId: FieldRef<"FoodPackOrderItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FoodPackOrderItem findUnique
   */
  export type FoodPackOrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrderItem
     */
    select?: FoodPackOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodPackOrderItem to fetch.
     */
    where: FoodPackOrderItemWhereUniqueInput
  }

  /**
   * FoodPackOrderItem findUniqueOrThrow
   */
  export type FoodPackOrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrderItem
     */
    select?: FoodPackOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodPackOrderItem to fetch.
     */
    where: FoodPackOrderItemWhereUniqueInput
  }

  /**
   * FoodPackOrderItem findFirst
   */
  export type FoodPackOrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrderItem
     */
    select?: FoodPackOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodPackOrderItem to fetch.
     */
    where?: FoodPackOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodPackOrderItems to fetch.
     */
    orderBy?: FoodPackOrderItemOrderByWithRelationInput | FoodPackOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodPackOrderItems.
     */
    cursor?: FoodPackOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodPackOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodPackOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodPackOrderItems.
     */
    distinct?: FoodPackOrderItemScalarFieldEnum | FoodPackOrderItemScalarFieldEnum[]
  }

  /**
   * FoodPackOrderItem findFirstOrThrow
   */
  export type FoodPackOrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrderItem
     */
    select?: FoodPackOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodPackOrderItem to fetch.
     */
    where?: FoodPackOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodPackOrderItems to fetch.
     */
    orderBy?: FoodPackOrderItemOrderByWithRelationInput | FoodPackOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodPackOrderItems.
     */
    cursor?: FoodPackOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodPackOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodPackOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodPackOrderItems.
     */
    distinct?: FoodPackOrderItemScalarFieldEnum | FoodPackOrderItemScalarFieldEnum[]
  }

  /**
   * FoodPackOrderItem findMany
   */
  export type FoodPackOrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrderItem
     */
    select?: FoodPackOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodPackOrderItems to fetch.
     */
    where?: FoodPackOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodPackOrderItems to fetch.
     */
    orderBy?: FoodPackOrderItemOrderByWithRelationInput | FoodPackOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodPackOrderItems.
     */
    cursor?: FoodPackOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodPackOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodPackOrderItems.
     */
    skip?: number
    distinct?: FoodPackOrderItemScalarFieldEnum | FoodPackOrderItemScalarFieldEnum[]
  }

  /**
   * FoodPackOrderItem create
   */
  export type FoodPackOrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrderItem
     */
    select?: FoodPackOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodPackOrderItem.
     */
    data: XOR<FoodPackOrderItemCreateInput, FoodPackOrderItemUncheckedCreateInput>
  }

  /**
   * FoodPackOrderItem createMany
   */
  export type FoodPackOrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodPackOrderItems.
     */
    data: FoodPackOrderItemCreateManyInput | FoodPackOrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodPackOrderItem createManyAndReturn
   */
  export type FoodPackOrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrderItem
     */
    select?: FoodPackOrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FoodPackOrderItems.
     */
    data: FoodPackOrderItemCreateManyInput | FoodPackOrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoodPackOrderItem update
   */
  export type FoodPackOrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrderItem
     */
    select?: FoodPackOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodPackOrderItem.
     */
    data: XOR<FoodPackOrderItemUpdateInput, FoodPackOrderItemUncheckedUpdateInput>
    /**
     * Choose, which FoodPackOrderItem to update.
     */
    where: FoodPackOrderItemWhereUniqueInput
  }

  /**
   * FoodPackOrderItem updateMany
   */
  export type FoodPackOrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodPackOrderItems.
     */
    data: XOR<FoodPackOrderItemUpdateManyMutationInput, FoodPackOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which FoodPackOrderItems to update
     */
    where?: FoodPackOrderItemWhereInput
  }

  /**
   * FoodPackOrderItem upsert
   */
  export type FoodPackOrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrderItem
     */
    select?: FoodPackOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodPackOrderItem to update in case it exists.
     */
    where: FoodPackOrderItemWhereUniqueInput
    /**
     * In case the FoodPackOrderItem found by the `where` argument doesn't exist, create a new FoodPackOrderItem with this data.
     */
    create: XOR<FoodPackOrderItemCreateInput, FoodPackOrderItemUncheckedCreateInput>
    /**
     * In case the FoodPackOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodPackOrderItemUpdateInput, FoodPackOrderItemUncheckedUpdateInput>
  }

  /**
   * FoodPackOrderItem delete
   */
  export type FoodPackOrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrderItem
     */
    select?: FoodPackOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderItemInclude<ExtArgs> | null
    /**
     * Filter which FoodPackOrderItem to delete.
     */
    where: FoodPackOrderItemWhereUniqueInput
  }

  /**
   * FoodPackOrderItem deleteMany
   */
  export type FoodPackOrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodPackOrderItems to delete
     */
    where?: FoodPackOrderItemWhereInput
  }

  /**
   * FoodPackOrderItem without action
   */
  export type FoodPackOrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodPackOrderItem
     */
    select?: FoodPackOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodPackOrderItemInclude<ExtArgs> | null
  }


  /**
   * Model EventOrder
   */

  export type AggregateEventOrder = {
    _count: EventOrderCountAggregateOutputType | null
    _avg: EventOrderAvgAggregateOutputType | null
    _sum: EventOrderSumAggregateOutputType | null
    _min: EventOrderMinAggregateOutputType | null
    _max: EventOrderMaxAggregateOutputType | null
  }

  export type EventOrderAvgAggregateOutputType = {
    guestCount: number | null
    perHeadRateNGN: number | null
    subtotalNGN: number | null
    deliveryFeeNGN: number | null
    setupFeeNGN: number | null
    discountNGN: number | null
    totalNGN: number | null
    depositAmtNGN: number | null
    balanceDueNGN: number | null
    servingStaffCount: number | null
    serviceFeeNGN: number | null
    transportFeeNGN: number | null
  }

  export type EventOrderSumAggregateOutputType = {
    guestCount: number | null
    perHeadRateNGN: number | null
    subtotalNGN: number | null
    deliveryFeeNGN: number | null
    setupFeeNGN: number | null
    discountNGN: number | null
    totalNGN: number | null
    depositAmtNGN: number | null
    balanceDueNGN: number | null
    servingStaffCount: number | null
    serviceFeeNGN: number | null
    transportFeeNGN: number | null
  }

  export type EventOrderMinAggregateOutputType = {
    id: string | null
    orderRef: string | null
    clientName: string | null
    clientPhone: string | null
    clientEmail: string | null
    clientWhatsApp: string | null
    eventType: $Enums.EventType | null
    eventDate: Date | null
    eventTime: string | null
    guestCount: number | null
    venueType: $Enums.VenueType | null
    venueAddress: string | null
    venueLGA: string | null
    serviceType: $Enums.ServiceType | null
    status: $Enums.EventStatus | null
    dietaryNotes: string | null
    specialRequests: string | null
    perHeadRateNGN: number | null
    subtotalNGN: number | null
    deliveryFeeNGN: number | null
    setupFeeNGN: number | null
    discountNGN: number | null
    totalNGN: number | null
    paymentStatus: $Enums.PaymentStatus | null
    depositAmtNGN: number | null
    depositPaidAt: Date | null
    balanceDueNGN: number | null
    balancePaidAt: Date | null
    setupTime: string | null
    servingStaffCount: number | null
    cleanupIncluded: boolean | null
    internalNotes: string | null
    quoteSentAt: Date | null
    confirmedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    serviceFeeNGN: number | null
    transportFeeNGN: number | null
  }

  export type EventOrderMaxAggregateOutputType = {
    id: string | null
    orderRef: string | null
    clientName: string | null
    clientPhone: string | null
    clientEmail: string | null
    clientWhatsApp: string | null
    eventType: $Enums.EventType | null
    eventDate: Date | null
    eventTime: string | null
    guestCount: number | null
    venueType: $Enums.VenueType | null
    venueAddress: string | null
    venueLGA: string | null
    serviceType: $Enums.ServiceType | null
    status: $Enums.EventStatus | null
    dietaryNotes: string | null
    specialRequests: string | null
    perHeadRateNGN: number | null
    subtotalNGN: number | null
    deliveryFeeNGN: number | null
    setupFeeNGN: number | null
    discountNGN: number | null
    totalNGN: number | null
    paymentStatus: $Enums.PaymentStatus | null
    depositAmtNGN: number | null
    depositPaidAt: Date | null
    balanceDueNGN: number | null
    balancePaidAt: Date | null
    setupTime: string | null
    servingStaffCount: number | null
    cleanupIncluded: boolean | null
    internalNotes: string | null
    quoteSentAt: Date | null
    confirmedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    serviceFeeNGN: number | null
    transportFeeNGN: number | null
  }

  export type EventOrderCountAggregateOutputType = {
    id: number
    orderRef: number
    clientName: number
    clientPhone: number
    clientEmail: number
    clientWhatsApp: number
    eventType: number
    eventDate: number
    eventTime: number
    guestCount: number
    venueType: number
    venueAddress: number
    venueLGA: number
    serviceType: number
    status: number
    dietaryNotes: number
    specialRequests: number
    perHeadRateNGN: number
    subtotalNGN: number
    deliveryFeeNGN: number
    setupFeeNGN: number
    discountNGN: number
    totalNGN: number
    paymentStatus: number
    depositAmtNGN: number
    depositPaidAt: number
    balanceDueNGN: number
    balancePaidAt: number
    setupTime: number
    servingStaffCount: number
    cleanupIncluded: number
    equipmentList: number
    internalNotes: number
    quoteSentAt: number
    confirmedAt: number
    createdAt: number
    updatedAt: number
    serviceFeeNGN: number
    transportFeeNGN: number
    _all: number
  }


  export type EventOrderAvgAggregateInputType = {
    guestCount?: true
    perHeadRateNGN?: true
    subtotalNGN?: true
    deliveryFeeNGN?: true
    setupFeeNGN?: true
    discountNGN?: true
    totalNGN?: true
    depositAmtNGN?: true
    balanceDueNGN?: true
    servingStaffCount?: true
    serviceFeeNGN?: true
    transportFeeNGN?: true
  }

  export type EventOrderSumAggregateInputType = {
    guestCount?: true
    perHeadRateNGN?: true
    subtotalNGN?: true
    deliveryFeeNGN?: true
    setupFeeNGN?: true
    discountNGN?: true
    totalNGN?: true
    depositAmtNGN?: true
    balanceDueNGN?: true
    servingStaffCount?: true
    serviceFeeNGN?: true
    transportFeeNGN?: true
  }

  export type EventOrderMinAggregateInputType = {
    id?: true
    orderRef?: true
    clientName?: true
    clientPhone?: true
    clientEmail?: true
    clientWhatsApp?: true
    eventType?: true
    eventDate?: true
    eventTime?: true
    guestCount?: true
    venueType?: true
    venueAddress?: true
    venueLGA?: true
    serviceType?: true
    status?: true
    dietaryNotes?: true
    specialRequests?: true
    perHeadRateNGN?: true
    subtotalNGN?: true
    deliveryFeeNGN?: true
    setupFeeNGN?: true
    discountNGN?: true
    totalNGN?: true
    paymentStatus?: true
    depositAmtNGN?: true
    depositPaidAt?: true
    balanceDueNGN?: true
    balancePaidAt?: true
    setupTime?: true
    servingStaffCount?: true
    cleanupIncluded?: true
    internalNotes?: true
    quoteSentAt?: true
    confirmedAt?: true
    createdAt?: true
    updatedAt?: true
    serviceFeeNGN?: true
    transportFeeNGN?: true
  }

  export type EventOrderMaxAggregateInputType = {
    id?: true
    orderRef?: true
    clientName?: true
    clientPhone?: true
    clientEmail?: true
    clientWhatsApp?: true
    eventType?: true
    eventDate?: true
    eventTime?: true
    guestCount?: true
    venueType?: true
    venueAddress?: true
    venueLGA?: true
    serviceType?: true
    status?: true
    dietaryNotes?: true
    specialRequests?: true
    perHeadRateNGN?: true
    subtotalNGN?: true
    deliveryFeeNGN?: true
    setupFeeNGN?: true
    discountNGN?: true
    totalNGN?: true
    paymentStatus?: true
    depositAmtNGN?: true
    depositPaidAt?: true
    balanceDueNGN?: true
    balancePaidAt?: true
    setupTime?: true
    servingStaffCount?: true
    cleanupIncluded?: true
    internalNotes?: true
    quoteSentAt?: true
    confirmedAt?: true
    createdAt?: true
    updatedAt?: true
    serviceFeeNGN?: true
    transportFeeNGN?: true
  }

  export type EventOrderCountAggregateInputType = {
    id?: true
    orderRef?: true
    clientName?: true
    clientPhone?: true
    clientEmail?: true
    clientWhatsApp?: true
    eventType?: true
    eventDate?: true
    eventTime?: true
    guestCount?: true
    venueType?: true
    venueAddress?: true
    venueLGA?: true
    serviceType?: true
    status?: true
    dietaryNotes?: true
    specialRequests?: true
    perHeadRateNGN?: true
    subtotalNGN?: true
    deliveryFeeNGN?: true
    setupFeeNGN?: true
    discountNGN?: true
    totalNGN?: true
    paymentStatus?: true
    depositAmtNGN?: true
    depositPaidAt?: true
    balanceDueNGN?: true
    balancePaidAt?: true
    setupTime?: true
    servingStaffCount?: true
    cleanupIncluded?: true
    equipmentList?: true
    internalNotes?: true
    quoteSentAt?: true
    confirmedAt?: true
    createdAt?: true
    updatedAt?: true
    serviceFeeNGN?: true
    transportFeeNGN?: true
    _all?: true
  }

  export type EventOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventOrder to aggregate.
     */
    where?: EventOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrders to fetch.
     */
    orderBy?: EventOrderOrderByWithRelationInput | EventOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventOrders
    **/
    _count?: true | EventOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventOrderMaxAggregateInputType
  }

  export type GetEventOrderAggregateType<T extends EventOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateEventOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventOrder[P]>
      : GetScalarType<T[P], AggregateEventOrder[P]>
  }




  export type EventOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventOrderWhereInput
    orderBy?: EventOrderOrderByWithAggregationInput | EventOrderOrderByWithAggregationInput[]
    by: EventOrderScalarFieldEnum[] | EventOrderScalarFieldEnum
    having?: EventOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventOrderCountAggregateInputType | true
    _avg?: EventOrderAvgAggregateInputType
    _sum?: EventOrderSumAggregateInputType
    _min?: EventOrderMinAggregateInputType
    _max?: EventOrderMaxAggregateInputType
  }

  export type EventOrderGroupByOutputType = {
    id: string
    orderRef: string
    clientName: string
    clientPhone: string
    clientEmail: string | null
    clientWhatsApp: string | null
    eventType: $Enums.EventType
    eventDate: Date
    eventTime: string | null
    guestCount: number
    venueType: $Enums.VenueType
    venueAddress: string | null
    venueLGA: string | null
    serviceType: $Enums.ServiceType
    status: $Enums.EventStatus
    dietaryNotes: string | null
    specialRequests: string | null
    perHeadRateNGN: number | null
    subtotalNGN: number | null
    deliveryFeeNGN: number
    setupFeeNGN: number
    discountNGN: number
    totalNGN: number | null
    paymentStatus: $Enums.PaymentStatus
    depositAmtNGN: number | null
    depositPaidAt: Date | null
    balanceDueNGN: number | null
    balancePaidAt: Date | null
    setupTime: string | null
    servingStaffCount: number
    cleanupIncluded: boolean
    equipmentList: string[]
    internalNotes: string | null
    quoteSentAt: Date | null
    confirmedAt: Date | null
    createdAt: Date
    updatedAt: Date
    serviceFeeNGN: number
    transportFeeNGN: number
    _count: EventOrderCountAggregateOutputType | null
    _avg: EventOrderAvgAggregateOutputType | null
    _sum: EventOrderSumAggregateOutputType | null
    _min: EventOrderMinAggregateOutputType | null
    _max: EventOrderMaxAggregateOutputType | null
  }

  type GetEventOrderGroupByPayload<T extends EventOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventOrderGroupByOutputType[P]>
            : GetScalarType<T[P], EventOrderGroupByOutputType[P]>
        }
      >
    >


  export type EventOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderRef?: boolean
    clientName?: boolean
    clientPhone?: boolean
    clientEmail?: boolean
    clientWhatsApp?: boolean
    eventType?: boolean
    eventDate?: boolean
    eventTime?: boolean
    guestCount?: boolean
    venueType?: boolean
    venueAddress?: boolean
    venueLGA?: boolean
    serviceType?: boolean
    status?: boolean
    dietaryNotes?: boolean
    specialRequests?: boolean
    perHeadRateNGN?: boolean
    subtotalNGN?: boolean
    deliveryFeeNGN?: boolean
    setupFeeNGN?: boolean
    discountNGN?: boolean
    totalNGN?: boolean
    paymentStatus?: boolean
    depositAmtNGN?: boolean
    depositPaidAt?: boolean
    balanceDueNGN?: boolean
    balancePaidAt?: boolean
    setupTime?: boolean
    servingStaffCount?: boolean
    cleanupIncluded?: boolean
    equipmentList?: boolean
    internalNotes?: boolean
    quoteSentAt?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    serviceFeeNGN?: boolean
    transportFeeNGN?: boolean
    menuSelections?: boolean | EventOrder$menuSelectionsArgs<ExtArgs>
    payments?: boolean | EventOrder$paymentsArgs<ExtArgs>
    _count?: boolean | EventOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventOrder"]>

  export type EventOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderRef?: boolean
    clientName?: boolean
    clientPhone?: boolean
    clientEmail?: boolean
    clientWhatsApp?: boolean
    eventType?: boolean
    eventDate?: boolean
    eventTime?: boolean
    guestCount?: boolean
    venueType?: boolean
    venueAddress?: boolean
    venueLGA?: boolean
    serviceType?: boolean
    status?: boolean
    dietaryNotes?: boolean
    specialRequests?: boolean
    perHeadRateNGN?: boolean
    subtotalNGN?: boolean
    deliveryFeeNGN?: boolean
    setupFeeNGN?: boolean
    discountNGN?: boolean
    totalNGN?: boolean
    paymentStatus?: boolean
    depositAmtNGN?: boolean
    depositPaidAt?: boolean
    balanceDueNGN?: boolean
    balancePaidAt?: boolean
    setupTime?: boolean
    servingStaffCount?: boolean
    cleanupIncluded?: boolean
    equipmentList?: boolean
    internalNotes?: boolean
    quoteSentAt?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    serviceFeeNGN?: boolean
    transportFeeNGN?: boolean
  }, ExtArgs["result"]["eventOrder"]>

  export type EventOrderSelectScalar = {
    id?: boolean
    orderRef?: boolean
    clientName?: boolean
    clientPhone?: boolean
    clientEmail?: boolean
    clientWhatsApp?: boolean
    eventType?: boolean
    eventDate?: boolean
    eventTime?: boolean
    guestCount?: boolean
    venueType?: boolean
    venueAddress?: boolean
    venueLGA?: boolean
    serviceType?: boolean
    status?: boolean
    dietaryNotes?: boolean
    specialRequests?: boolean
    perHeadRateNGN?: boolean
    subtotalNGN?: boolean
    deliveryFeeNGN?: boolean
    setupFeeNGN?: boolean
    discountNGN?: boolean
    totalNGN?: boolean
    paymentStatus?: boolean
    depositAmtNGN?: boolean
    depositPaidAt?: boolean
    balanceDueNGN?: boolean
    balancePaidAt?: boolean
    setupTime?: boolean
    servingStaffCount?: boolean
    cleanupIncluded?: boolean
    equipmentList?: boolean
    internalNotes?: boolean
    quoteSentAt?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    serviceFeeNGN?: boolean
    transportFeeNGN?: boolean
  }

  export type EventOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuSelections?: boolean | EventOrder$menuSelectionsArgs<ExtArgs>
    payments?: boolean | EventOrder$paymentsArgs<ExtArgs>
    _count?: boolean | EventOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventOrder"
    objects: {
      menuSelections: Prisma.$EventMenuSelectionPayload<ExtArgs>[]
      payments: Prisma.$EventPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderRef: string
      clientName: string
      clientPhone: string
      clientEmail: string | null
      clientWhatsApp: string | null
      eventType: $Enums.EventType
      eventDate: Date
      eventTime: string | null
      guestCount: number
      venueType: $Enums.VenueType
      venueAddress: string | null
      venueLGA: string | null
      serviceType: $Enums.ServiceType
      status: $Enums.EventStatus
      dietaryNotes: string | null
      specialRequests: string | null
      perHeadRateNGN: number | null
      subtotalNGN: number | null
      deliveryFeeNGN: number
      setupFeeNGN: number
      discountNGN: number
      totalNGN: number | null
      paymentStatus: $Enums.PaymentStatus
      depositAmtNGN: number | null
      depositPaidAt: Date | null
      balanceDueNGN: number | null
      balancePaidAt: Date | null
      setupTime: string | null
      servingStaffCount: number
      cleanupIncluded: boolean
      equipmentList: string[]
      internalNotes: string | null
      quoteSentAt: Date | null
      confirmedAt: Date | null
      createdAt: Date
      updatedAt: Date
      serviceFeeNGN: number
      transportFeeNGN: number
    }, ExtArgs["result"]["eventOrder"]>
    composites: {}
  }

  type EventOrderGetPayload<S extends boolean | null | undefined | EventOrderDefaultArgs> = $Result.GetResult<Prisma.$EventOrderPayload, S>

  type EventOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventOrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventOrderCountAggregateInputType | true
    }

  export interface EventOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventOrder'], meta: { name: 'EventOrder' } }
    /**
     * Find zero or one EventOrder that matches the filter.
     * @param {EventOrderFindUniqueArgs} args - Arguments to find a EventOrder
     * @example
     * // Get one EventOrder
     * const eventOrder = await prisma.eventOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventOrderFindUniqueArgs>(args: SelectSubset<T, EventOrderFindUniqueArgs<ExtArgs>>): Prisma__EventOrderClient<$Result.GetResult<Prisma.$EventOrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventOrder that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventOrderFindUniqueOrThrowArgs} args - Arguments to find a EventOrder
     * @example
     * // Get one EventOrder
     * const eventOrder = await prisma.eventOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, EventOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventOrderClient<$Result.GetResult<Prisma.$EventOrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrderFindFirstArgs} args - Arguments to find a EventOrder
     * @example
     * // Get one EventOrder
     * const eventOrder = await prisma.eventOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventOrderFindFirstArgs>(args?: SelectSubset<T, EventOrderFindFirstArgs<ExtArgs>>): Prisma__EventOrderClient<$Result.GetResult<Prisma.$EventOrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrderFindFirstOrThrowArgs} args - Arguments to find a EventOrder
     * @example
     * // Get one EventOrder
     * const eventOrder = await prisma.eventOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, EventOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventOrderClient<$Result.GetResult<Prisma.$EventOrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventOrders
     * const eventOrders = await prisma.eventOrder.findMany()
     * 
     * // Get first 10 EventOrders
     * const eventOrders = await prisma.eventOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventOrderWithIdOnly = await prisma.eventOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventOrderFindManyArgs>(args?: SelectSubset<T, EventOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventOrder.
     * @param {EventOrderCreateArgs} args - Arguments to create a EventOrder.
     * @example
     * // Create one EventOrder
     * const EventOrder = await prisma.eventOrder.create({
     *   data: {
     *     // ... data to create a EventOrder
     *   }
     * })
     * 
     */
    create<T extends EventOrderCreateArgs>(args: SelectSubset<T, EventOrderCreateArgs<ExtArgs>>): Prisma__EventOrderClient<$Result.GetResult<Prisma.$EventOrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventOrders.
     * @param {EventOrderCreateManyArgs} args - Arguments to create many EventOrders.
     * @example
     * // Create many EventOrders
     * const eventOrder = await prisma.eventOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventOrderCreateManyArgs>(args?: SelectSubset<T, EventOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventOrders and returns the data saved in the database.
     * @param {EventOrderCreateManyAndReturnArgs} args - Arguments to create many EventOrders.
     * @example
     * // Create many EventOrders
     * const eventOrder = await prisma.eventOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventOrders and only return the `id`
     * const eventOrderWithIdOnly = await prisma.eventOrder.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, EventOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EventOrder.
     * @param {EventOrderDeleteArgs} args - Arguments to delete one EventOrder.
     * @example
     * // Delete one EventOrder
     * const EventOrder = await prisma.eventOrder.delete({
     *   where: {
     *     // ... filter to delete one EventOrder
     *   }
     * })
     * 
     */
    delete<T extends EventOrderDeleteArgs>(args: SelectSubset<T, EventOrderDeleteArgs<ExtArgs>>): Prisma__EventOrderClient<$Result.GetResult<Prisma.$EventOrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventOrder.
     * @param {EventOrderUpdateArgs} args - Arguments to update one EventOrder.
     * @example
     * // Update one EventOrder
     * const eventOrder = await prisma.eventOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventOrderUpdateArgs>(args: SelectSubset<T, EventOrderUpdateArgs<ExtArgs>>): Prisma__EventOrderClient<$Result.GetResult<Prisma.$EventOrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventOrders.
     * @param {EventOrderDeleteManyArgs} args - Arguments to filter EventOrders to delete.
     * @example
     * // Delete a few EventOrders
     * const { count } = await prisma.eventOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventOrderDeleteManyArgs>(args?: SelectSubset<T, EventOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventOrders
     * const eventOrder = await prisma.eventOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventOrderUpdateManyArgs>(args: SelectSubset<T, EventOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventOrder.
     * @param {EventOrderUpsertArgs} args - Arguments to update or create a EventOrder.
     * @example
     * // Update or create a EventOrder
     * const eventOrder = await prisma.eventOrder.upsert({
     *   create: {
     *     // ... data to create a EventOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventOrder we want to update
     *   }
     * })
     */
    upsert<T extends EventOrderUpsertArgs>(args: SelectSubset<T, EventOrderUpsertArgs<ExtArgs>>): Prisma__EventOrderClient<$Result.GetResult<Prisma.$EventOrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EventOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrderCountArgs} args - Arguments to filter EventOrders to count.
     * @example
     * // Count the number of EventOrders
     * const count = await prisma.eventOrder.count({
     *   where: {
     *     // ... the filter for the EventOrders we want to count
     *   }
     * })
    **/
    count<T extends EventOrderCountArgs>(
      args?: Subset<T, EventOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventOrderAggregateArgs>(args: Subset<T, EventOrderAggregateArgs>): Prisma.PrismaPromise<GetEventOrderAggregateType<T>>

    /**
     * Group by EventOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventOrderGroupByArgs['orderBy'] }
        : { orderBy?: EventOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventOrder model
   */
  readonly fields: EventOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuSelections<T extends EventOrder$menuSelectionsArgs<ExtArgs> = {}>(args?: Subset<T, EventOrder$menuSelectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventMenuSelectionPayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends EventOrder$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, EventOrder$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPaymentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventOrder model
   */ 
  interface EventOrderFieldRefs {
    readonly id: FieldRef<"EventOrder", 'String'>
    readonly orderRef: FieldRef<"EventOrder", 'String'>
    readonly clientName: FieldRef<"EventOrder", 'String'>
    readonly clientPhone: FieldRef<"EventOrder", 'String'>
    readonly clientEmail: FieldRef<"EventOrder", 'String'>
    readonly clientWhatsApp: FieldRef<"EventOrder", 'String'>
    readonly eventType: FieldRef<"EventOrder", 'EventType'>
    readonly eventDate: FieldRef<"EventOrder", 'DateTime'>
    readonly eventTime: FieldRef<"EventOrder", 'String'>
    readonly guestCount: FieldRef<"EventOrder", 'Int'>
    readonly venueType: FieldRef<"EventOrder", 'VenueType'>
    readonly venueAddress: FieldRef<"EventOrder", 'String'>
    readonly venueLGA: FieldRef<"EventOrder", 'String'>
    readonly serviceType: FieldRef<"EventOrder", 'ServiceType'>
    readonly status: FieldRef<"EventOrder", 'EventStatus'>
    readonly dietaryNotes: FieldRef<"EventOrder", 'String'>
    readonly specialRequests: FieldRef<"EventOrder", 'String'>
    readonly perHeadRateNGN: FieldRef<"EventOrder", 'Float'>
    readonly subtotalNGN: FieldRef<"EventOrder", 'Float'>
    readonly deliveryFeeNGN: FieldRef<"EventOrder", 'Float'>
    readonly setupFeeNGN: FieldRef<"EventOrder", 'Float'>
    readonly discountNGN: FieldRef<"EventOrder", 'Float'>
    readonly totalNGN: FieldRef<"EventOrder", 'Float'>
    readonly paymentStatus: FieldRef<"EventOrder", 'PaymentStatus'>
    readonly depositAmtNGN: FieldRef<"EventOrder", 'Float'>
    readonly depositPaidAt: FieldRef<"EventOrder", 'DateTime'>
    readonly balanceDueNGN: FieldRef<"EventOrder", 'Float'>
    readonly balancePaidAt: FieldRef<"EventOrder", 'DateTime'>
    readonly setupTime: FieldRef<"EventOrder", 'String'>
    readonly servingStaffCount: FieldRef<"EventOrder", 'Int'>
    readonly cleanupIncluded: FieldRef<"EventOrder", 'Boolean'>
    readonly equipmentList: FieldRef<"EventOrder", 'String[]'>
    readonly internalNotes: FieldRef<"EventOrder", 'String'>
    readonly quoteSentAt: FieldRef<"EventOrder", 'DateTime'>
    readonly confirmedAt: FieldRef<"EventOrder", 'DateTime'>
    readonly createdAt: FieldRef<"EventOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"EventOrder", 'DateTime'>
    readonly serviceFeeNGN: FieldRef<"EventOrder", 'Float'>
    readonly transportFeeNGN: FieldRef<"EventOrder", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * EventOrder findUnique
   */
  export type EventOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrder
     */
    select?: EventOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrderInclude<ExtArgs> | null
    /**
     * Filter, which EventOrder to fetch.
     */
    where: EventOrderWhereUniqueInput
  }

  /**
   * EventOrder findUniqueOrThrow
   */
  export type EventOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrder
     */
    select?: EventOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrderInclude<ExtArgs> | null
    /**
     * Filter, which EventOrder to fetch.
     */
    where: EventOrderWhereUniqueInput
  }

  /**
   * EventOrder findFirst
   */
  export type EventOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrder
     */
    select?: EventOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrderInclude<ExtArgs> | null
    /**
     * Filter, which EventOrder to fetch.
     */
    where?: EventOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrders to fetch.
     */
    orderBy?: EventOrderOrderByWithRelationInput | EventOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventOrders.
     */
    cursor?: EventOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventOrders.
     */
    distinct?: EventOrderScalarFieldEnum | EventOrderScalarFieldEnum[]
  }

  /**
   * EventOrder findFirstOrThrow
   */
  export type EventOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrder
     */
    select?: EventOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrderInclude<ExtArgs> | null
    /**
     * Filter, which EventOrder to fetch.
     */
    where?: EventOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrders to fetch.
     */
    orderBy?: EventOrderOrderByWithRelationInput | EventOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventOrders.
     */
    cursor?: EventOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventOrders.
     */
    distinct?: EventOrderScalarFieldEnum | EventOrderScalarFieldEnum[]
  }

  /**
   * EventOrder findMany
   */
  export type EventOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrder
     */
    select?: EventOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrderInclude<ExtArgs> | null
    /**
     * Filter, which EventOrders to fetch.
     */
    where?: EventOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrders to fetch.
     */
    orderBy?: EventOrderOrderByWithRelationInput | EventOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventOrders.
     */
    cursor?: EventOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrders.
     */
    skip?: number
    distinct?: EventOrderScalarFieldEnum | EventOrderScalarFieldEnum[]
  }

  /**
   * EventOrder create
   */
  export type EventOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrder
     */
    select?: EventOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a EventOrder.
     */
    data: XOR<EventOrderCreateInput, EventOrderUncheckedCreateInput>
  }

  /**
   * EventOrder createMany
   */
  export type EventOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventOrders.
     */
    data: EventOrderCreateManyInput | EventOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventOrder createManyAndReturn
   */
  export type EventOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrder
     */
    select?: EventOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EventOrders.
     */
    data: EventOrderCreateManyInput | EventOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventOrder update
   */
  export type EventOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrder
     */
    select?: EventOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a EventOrder.
     */
    data: XOR<EventOrderUpdateInput, EventOrderUncheckedUpdateInput>
    /**
     * Choose, which EventOrder to update.
     */
    where: EventOrderWhereUniqueInput
  }

  /**
   * EventOrder updateMany
   */
  export type EventOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventOrders.
     */
    data: XOR<EventOrderUpdateManyMutationInput, EventOrderUncheckedUpdateManyInput>
    /**
     * Filter which EventOrders to update
     */
    where?: EventOrderWhereInput
  }

  /**
   * EventOrder upsert
   */
  export type EventOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrder
     */
    select?: EventOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the EventOrder to update in case it exists.
     */
    where: EventOrderWhereUniqueInput
    /**
     * In case the EventOrder found by the `where` argument doesn't exist, create a new EventOrder with this data.
     */
    create: XOR<EventOrderCreateInput, EventOrderUncheckedCreateInput>
    /**
     * In case the EventOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventOrderUpdateInput, EventOrderUncheckedUpdateInput>
  }

  /**
   * EventOrder delete
   */
  export type EventOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrder
     */
    select?: EventOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrderInclude<ExtArgs> | null
    /**
     * Filter which EventOrder to delete.
     */
    where: EventOrderWhereUniqueInput
  }

  /**
   * EventOrder deleteMany
   */
  export type EventOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventOrders to delete
     */
    where?: EventOrderWhereInput
  }

  /**
   * EventOrder.menuSelections
   */
  export type EventOrder$menuSelectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuSelection
     */
    select?: EventMenuSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuSelectionInclude<ExtArgs> | null
    where?: EventMenuSelectionWhereInput
    orderBy?: EventMenuSelectionOrderByWithRelationInput | EventMenuSelectionOrderByWithRelationInput[]
    cursor?: EventMenuSelectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventMenuSelectionScalarFieldEnum | EventMenuSelectionScalarFieldEnum[]
  }

  /**
   * EventOrder.payments
   */
  export type EventOrder$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPayment
     */
    select?: EventPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPaymentInclude<ExtArgs> | null
    where?: EventPaymentWhereInput
    orderBy?: EventPaymentOrderByWithRelationInput | EventPaymentOrderByWithRelationInput[]
    cursor?: EventPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventPaymentScalarFieldEnum | EventPaymentScalarFieldEnum[]
  }

  /**
   * EventOrder without action
   */
  export type EventOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrder
     */
    select?: EventOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrderInclude<ExtArgs> | null
  }


  /**
   * Model EventMenuSelection
   */

  export type AggregateEventMenuSelection = {
    _count: EventMenuSelectionCountAggregateOutputType | null
    _avg: EventMenuSelectionAvgAggregateOutputType | null
    _sum: EventMenuSelectionSumAggregateOutputType | null
    _min: EventMenuSelectionMinAggregateOutputType | null
    _max: EventMenuSelectionMaxAggregateOutputType | null
  }

  export type EventMenuSelectionAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    totalPrice: number | null
  }

  export type EventMenuSelectionSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    totalPrice: number | null
  }

  export type EventMenuSelectionMinAggregateOutputType = {
    id: string | null
    menuItemId: string | null
    quantity: number | null
    unitPrice: number | null
    totalPrice: number | null
    notes: string | null
    eventOrderId: string | null
  }

  export type EventMenuSelectionMaxAggregateOutputType = {
    id: string | null
    menuItemId: string | null
    quantity: number | null
    unitPrice: number | null
    totalPrice: number | null
    notes: string | null
    eventOrderId: string | null
  }

  export type EventMenuSelectionCountAggregateOutputType = {
    id: number
    menuItemId: number
    quantity: number
    unitPrice: number
    totalPrice: number
    notes: number
    eventOrderId: number
    _all: number
  }


  export type EventMenuSelectionAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type EventMenuSelectionSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type EventMenuSelectionMinAggregateInputType = {
    id?: true
    menuItemId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    notes?: true
    eventOrderId?: true
  }

  export type EventMenuSelectionMaxAggregateInputType = {
    id?: true
    menuItemId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    notes?: true
    eventOrderId?: true
  }

  export type EventMenuSelectionCountAggregateInputType = {
    id?: true
    menuItemId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    notes?: true
    eventOrderId?: true
    _all?: true
  }

  export type EventMenuSelectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventMenuSelection to aggregate.
     */
    where?: EventMenuSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventMenuSelections to fetch.
     */
    orderBy?: EventMenuSelectionOrderByWithRelationInput | EventMenuSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventMenuSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventMenuSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventMenuSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventMenuSelections
    **/
    _count?: true | EventMenuSelectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventMenuSelectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventMenuSelectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMenuSelectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMenuSelectionMaxAggregateInputType
  }

  export type GetEventMenuSelectionAggregateType<T extends EventMenuSelectionAggregateArgs> = {
        [P in keyof T & keyof AggregateEventMenuSelection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventMenuSelection[P]>
      : GetScalarType<T[P], AggregateEventMenuSelection[P]>
  }




  export type EventMenuSelectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventMenuSelectionWhereInput
    orderBy?: EventMenuSelectionOrderByWithAggregationInput | EventMenuSelectionOrderByWithAggregationInput[]
    by: EventMenuSelectionScalarFieldEnum[] | EventMenuSelectionScalarFieldEnum
    having?: EventMenuSelectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventMenuSelectionCountAggregateInputType | true
    _avg?: EventMenuSelectionAvgAggregateInputType
    _sum?: EventMenuSelectionSumAggregateInputType
    _min?: EventMenuSelectionMinAggregateInputType
    _max?: EventMenuSelectionMaxAggregateInputType
  }

  export type EventMenuSelectionGroupByOutputType = {
    id: string
    menuItemId: string
    quantity: number
    unitPrice: number
    totalPrice: number
    notes: string | null
    eventOrderId: string
    _count: EventMenuSelectionCountAggregateOutputType | null
    _avg: EventMenuSelectionAvgAggregateOutputType | null
    _sum: EventMenuSelectionSumAggregateOutputType | null
    _min: EventMenuSelectionMinAggregateOutputType | null
    _max: EventMenuSelectionMaxAggregateOutputType | null
  }

  type GetEventMenuSelectionGroupByPayload<T extends EventMenuSelectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventMenuSelectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventMenuSelectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventMenuSelectionGroupByOutputType[P]>
            : GetScalarType<T[P], EventMenuSelectionGroupByOutputType[P]>
        }
      >
    >


  export type EventMenuSelectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuItemId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    notes?: boolean
    eventOrderId?: boolean
    eventOrder?: boolean | EventOrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventMenuSelection"]>

  export type EventMenuSelectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuItemId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    notes?: boolean
    eventOrderId?: boolean
    eventOrder?: boolean | EventOrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventMenuSelection"]>

  export type EventMenuSelectionSelectScalar = {
    id?: boolean
    menuItemId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    notes?: boolean
    eventOrderId?: boolean
  }

  export type EventMenuSelectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventOrder?: boolean | EventOrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }
  export type EventMenuSelectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventOrder?: boolean | EventOrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }

  export type $EventMenuSelectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventMenuSelection"
    objects: {
      eventOrder: Prisma.$EventOrderPayload<ExtArgs>
      menuItem: Prisma.$MenuItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      menuItemId: string
      quantity: number
      unitPrice: number
      totalPrice: number
      notes: string | null
      eventOrderId: string
    }, ExtArgs["result"]["eventMenuSelection"]>
    composites: {}
  }

  type EventMenuSelectionGetPayload<S extends boolean | null | undefined | EventMenuSelectionDefaultArgs> = $Result.GetResult<Prisma.$EventMenuSelectionPayload, S>

  type EventMenuSelectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventMenuSelectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventMenuSelectionCountAggregateInputType | true
    }

  export interface EventMenuSelectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventMenuSelection'], meta: { name: 'EventMenuSelection' } }
    /**
     * Find zero or one EventMenuSelection that matches the filter.
     * @param {EventMenuSelectionFindUniqueArgs} args - Arguments to find a EventMenuSelection
     * @example
     * // Get one EventMenuSelection
     * const eventMenuSelection = await prisma.eventMenuSelection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventMenuSelectionFindUniqueArgs>(args: SelectSubset<T, EventMenuSelectionFindUniqueArgs<ExtArgs>>): Prisma__EventMenuSelectionClient<$Result.GetResult<Prisma.$EventMenuSelectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventMenuSelection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventMenuSelectionFindUniqueOrThrowArgs} args - Arguments to find a EventMenuSelection
     * @example
     * // Get one EventMenuSelection
     * const eventMenuSelection = await prisma.eventMenuSelection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventMenuSelectionFindUniqueOrThrowArgs>(args: SelectSubset<T, EventMenuSelectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventMenuSelectionClient<$Result.GetResult<Prisma.$EventMenuSelectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventMenuSelection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuSelectionFindFirstArgs} args - Arguments to find a EventMenuSelection
     * @example
     * // Get one EventMenuSelection
     * const eventMenuSelection = await prisma.eventMenuSelection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventMenuSelectionFindFirstArgs>(args?: SelectSubset<T, EventMenuSelectionFindFirstArgs<ExtArgs>>): Prisma__EventMenuSelectionClient<$Result.GetResult<Prisma.$EventMenuSelectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventMenuSelection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuSelectionFindFirstOrThrowArgs} args - Arguments to find a EventMenuSelection
     * @example
     * // Get one EventMenuSelection
     * const eventMenuSelection = await prisma.eventMenuSelection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventMenuSelectionFindFirstOrThrowArgs>(args?: SelectSubset<T, EventMenuSelectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventMenuSelectionClient<$Result.GetResult<Prisma.$EventMenuSelectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventMenuSelections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuSelectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventMenuSelections
     * const eventMenuSelections = await prisma.eventMenuSelection.findMany()
     * 
     * // Get first 10 EventMenuSelections
     * const eventMenuSelections = await prisma.eventMenuSelection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventMenuSelectionWithIdOnly = await prisma.eventMenuSelection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventMenuSelectionFindManyArgs>(args?: SelectSubset<T, EventMenuSelectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventMenuSelectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventMenuSelection.
     * @param {EventMenuSelectionCreateArgs} args - Arguments to create a EventMenuSelection.
     * @example
     * // Create one EventMenuSelection
     * const EventMenuSelection = await prisma.eventMenuSelection.create({
     *   data: {
     *     // ... data to create a EventMenuSelection
     *   }
     * })
     * 
     */
    create<T extends EventMenuSelectionCreateArgs>(args: SelectSubset<T, EventMenuSelectionCreateArgs<ExtArgs>>): Prisma__EventMenuSelectionClient<$Result.GetResult<Prisma.$EventMenuSelectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventMenuSelections.
     * @param {EventMenuSelectionCreateManyArgs} args - Arguments to create many EventMenuSelections.
     * @example
     * // Create many EventMenuSelections
     * const eventMenuSelection = await prisma.eventMenuSelection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventMenuSelectionCreateManyArgs>(args?: SelectSubset<T, EventMenuSelectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventMenuSelections and returns the data saved in the database.
     * @param {EventMenuSelectionCreateManyAndReturnArgs} args - Arguments to create many EventMenuSelections.
     * @example
     * // Create many EventMenuSelections
     * const eventMenuSelection = await prisma.eventMenuSelection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventMenuSelections and only return the `id`
     * const eventMenuSelectionWithIdOnly = await prisma.eventMenuSelection.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventMenuSelectionCreateManyAndReturnArgs>(args?: SelectSubset<T, EventMenuSelectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventMenuSelectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EventMenuSelection.
     * @param {EventMenuSelectionDeleteArgs} args - Arguments to delete one EventMenuSelection.
     * @example
     * // Delete one EventMenuSelection
     * const EventMenuSelection = await prisma.eventMenuSelection.delete({
     *   where: {
     *     // ... filter to delete one EventMenuSelection
     *   }
     * })
     * 
     */
    delete<T extends EventMenuSelectionDeleteArgs>(args: SelectSubset<T, EventMenuSelectionDeleteArgs<ExtArgs>>): Prisma__EventMenuSelectionClient<$Result.GetResult<Prisma.$EventMenuSelectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventMenuSelection.
     * @param {EventMenuSelectionUpdateArgs} args - Arguments to update one EventMenuSelection.
     * @example
     * // Update one EventMenuSelection
     * const eventMenuSelection = await prisma.eventMenuSelection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventMenuSelectionUpdateArgs>(args: SelectSubset<T, EventMenuSelectionUpdateArgs<ExtArgs>>): Prisma__EventMenuSelectionClient<$Result.GetResult<Prisma.$EventMenuSelectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventMenuSelections.
     * @param {EventMenuSelectionDeleteManyArgs} args - Arguments to filter EventMenuSelections to delete.
     * @example
     * // Delete a few EventMenuSelections
     * const { count } = await prisma.eventMenuSelection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventMenuSelectionDeleteManyArgs>(args?: SelectSubset<T, EventMenuSelectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventMenuSelections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuSelectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventMenuSelections
     * const eventMenuSelection = await prisma.eventMenuSelection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventMenuSelectionUpdateManyArgs>(args: SelectSubset<T, EventMenuSelectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventMenuSelection.
     * @param {EventMenuSelectionUpsertArgs} args - Arguments to update or create a EventMenuSelection.
     * @example
     * // Update or create a EventMenuSelection
     * const eventMenuSelection = await prisma.eventMenuSelection.upsert({
     *   create: {
     *     // ... data to create a EventMenuSelection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventMenuSelection we want to update
     *   }
     * })
     */
    upsert<T extends EventMenuSelectionUpsertArgs>(args: SelectSubset<T, EventMenuSelectionUpsertArgs<ExtArgs>>): Prisma__EventMenuSelectionClient<$Result.GetResult<Prisma.$EventMenuSelectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EventMenuSelections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuSelectionCountArgs} args - Arguments to filter EventMenuSelections to count.
     * @example
     * // Count the number of EventMenuSelections
     * const count = await prisma.eventMenuSelection.count({
     *   where: {
     *     // ... the filter for the EventMenuSelections we want to count
     *   }
     * })
    **/
    count<T extends EventMenuSelectionCountArgs>(
      args?: Subset<T, EventMenuSelectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventMenuSelectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventMenuSelection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuSelectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventMenuSelectionAggregateArgs>(args: Subset<T, EventMenuSelectionAggregateArgs>): Prisma.PrismaPromise<GetEventMenuSelectionAggregateType<T>>

    /**
     * Group by EventMenuSelection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuSelectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventMenuSelectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventMenuSelectionGroupByArgs['orderBy'] }
        : { orderBy?: EventMenuSelectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventMenuSelectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventMenuSelectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventMenuSelection model
   */
  readonly fields: EventMenuSelectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventMenuSelection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventMenuSelectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventOrder<T extends EventOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventOrderDefaultArgs<ExtArgs>>): Prisma__EventOrderClient<$Result.GetResult<Prisma.$EventOrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    menuItem<T extends MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemDefaultArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventMenuSelection model
   */ 
  interface EventMenuSelectionFieldRefs {
    readonly id: FieldRef<"EventMenuSelection", 'String'>
    readonly menuItemId: FieldRef<"EventMenuSelection", 'String'>
    readonly quantity: FieldRef<"EventMenuSelection", 'Int'>
    readonly unitPrice: FieldRef<"EventMenuSelection", 'Int'>
    readonly totalPrice: FieldRef<"EventMenuSelection", 'Int'>
    readonly notes: FieldRef<"EventMenuSelection", 'String'>
    readonly eventOrderId: FieldRef<"EventMenuSelection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventMenuSelection findUnique
   */
  export type EventMenuSelectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuSelection
     */
    select?: EventMenuSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuSelectionInclude<ExtArgs> | null
    /**
     * Filter, which EventMenuSelection to fetch.
     */
    where: EventMenuSelectionWhereUniqueInput
  }

  /**
   * EventMenuSelection findUniqueOrThrow
   */
  export type EventMenuSelectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuSelection
     */
    select?: EventMenuSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuSelectionInclude<ExtArgs> | null
    /**
     * Filter, which EventMenuSelection to fetch.
     */
    where: EventMenuSelectionWhereUniqueInput
  }

  /**
   * EventMenuSelection findFirst
   */
  export type EventMenuSelectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuSelection
     */
    select?: EventMenuSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuSelectionInclude<ExtArgs> | null
    /**
     * Filter, which EventMenuSelection to fetch.
     */
    where?: EventMenuSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventMenuSelections to fetch.
     */
    orderBy?: EventMenuSelectionOrderByWithRelationInput | EventMenuSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventMenuSelections.
     */
    cursor?: EventMenuSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventMenuSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventMenuSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventMenuSelections.
     */
    distinct?: EventMenuSelectionScalarFieldEnum | EventMenuSelectionScalarFieldEnum[]
  }

  /**
   * EventMenuSelection findFirstOrThrow
   */
  export type EventMenuSelectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuSelection
     */
    select?: EventMenuSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuSelectionInclude<ExtArgs> | null
    /**
     * Filter, which EventMenuSelection to fetch.
     */
    where?: EventMenuSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventMenuSelections to fetch.
     */
    orderBy?: EventMenuSelectionOrderByWithRelationInput | EventMenuSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventMenuSelections.
     */
    cursor?: EventMenuSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventMenuSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventMenuSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventMenuSelections.
     */
    distinct?: EventMenuSelectionScalarFieldEnum | EventMenuSelectionScalarFieldEnum[]
  }

  /**
   * EventMenuSelection findMany
   */
  export type EventMenuSelectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuSelection
     */
    select?: EventMenuSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuSelectionInclude<ExtArgs> | null
    /**
     * Filter, which EventMenuSelections to fetch.
     */
    where?: EventMenuSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventMenuSelections to fetch.
     */
    orderBy?: EventMenuSelectionOrderByWithRelationInput | EventMenuSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventMenuSelections.
     */
    cursor?: EventMenuSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventMenuSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventMenuSelections.
     */
    skip?: number
    distinct?: EventMenuSelectionScalarFieldEnum | EventMenuSelectionScalarFieldEnum[]
  }

  /**
   * EventMenuSelection create
   */
  export type EventMenuSelectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuSelection
     */
    select?: EventMenuSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuSelectionInclude<ExtArgs> | null
    /**
     * The data needed to create a EventMenuSelection.
     */
    data: XOR<EventMenuSelectionCreateInput, EventMenuSelectionUncheckedCreateInput>
  }

  /**
   * EventMenuSelection createMany
   */
  export type EventMenuSelectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventMenuSelections.
     */
    data: EventMenuSelectionCreateManyInput | EventMenuSelectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventMenuSelection createManyAndReturn
   */
  export type EventMenuSelectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuSelection
     */
    select?: EventMenuSelectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EventMenuSelections.
     */
    data: EventMenuSelectionCreateManyInput | EventMenuSelectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuSelectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventMenuSelection update
   */
  export type EventMenuSelectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuSelection
     */
    select?: EventMenuSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuSelectionInclude<ExtArgs> | null
    /**
     * The data needed to update a EventMenuSelection.
     */
    data: XOR<EventMenuSelectionUpdateInput, EventMenuSelectionUncheckedUpdateInput>
    /**
     * Choose, which EventMenuSelection to update.
     */
    where: EventMenuSelectionWhereUniqueInput
  }

  /**
   * EventMenuSelection updateMany
   */
  export type EventMenuSelectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventMenuSelections.
     */
    data: XOR<EventMenuSelectionUpdateManyMutationInput, EventMenuSelectionUncheckedUpdateManyInput>
    /**
     * Filter which EventMenuSelections to update
     */
    where?: EventMenuSelectionWhereInput
  }

  /**
   * EventMenuSelection upsert
   */
  export type EventMenuSelectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuSelection
     */
    select?: EventMenuSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuSelectionInclude<ExtArgs> | null
    /**
     * The filter to search for the EventMenuSelection to update in case it exists.
     */
    where: EventMenuSelectionWhereUniqueInput
    /**
     * In case the EventMenuSelection found by the `where` argument doesn't exist, create a new EventMenuSelection with this data.
     */
    create: XOR<EventMenuSelectionCreateInput, EventMenuSelectionUncheckedCreateInput>
    /**
     * In case the EventMenuSelection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventMenuSelectionUpdateInput, EventMenuSelectionUncheckedUpdateInput>
  }

  /**
   * EventMenuSelection delete
   */
  export type EventMenuSelectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuSelection
     */
    select?: EventMenuSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuSelectionInclude<ExtArgs> | null
    /**
     * Filter which EventMenuSelection to delete.
     */
    where: EventMenuSelectionWhereUniqueInput
  }

  /**
   * EventMenuSelection deleteMany
   */
  export type EventMenuSelectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventMenuSelections to delete
     */
    where?: EventMenuSelectionWhereInput
  }

  /**
   * EventMenuSelection without action
   */
  export type EventMenuSelectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuSelection
     */
    select?: EventMenuSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuSelectionInclude<ExtArgs> | null
  }


  /**
   * Model EventMenuCategory
   */

  export type AggregateEventMenuCategory = {
    _count: EventMenuCategoryCountAggregateOutputType | null
    _avg: EventMenuCategoryAvgAggregateOutputType | null
    _sum: EventMenuCategorySumAggregateOutputType | null
    _min: EventMenuCategoryMinAggregateOutputType | null
    _max: EventMenuCategoryMaxAggregateOutputType | null
  }

  export type EventMenuCategoryAvgAggregateOutputType = {
    minChoices: number | null
    maxChoices: number | null
    sortOrder: number | null
  }

  export type EventMenuCategorySumAggregateOutputType = {
    minChoices: number | null
    maxChoices: number | null
    sortOrder: number | null
  }

  export type EventMenuCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    required: boolean | null
    minChoices: number | null
    maxChoices: number | null
    sortOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMenuCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    required: boolean | null
    minChoices: number | null
    maxChoices: number | null
    sortOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMenuCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    required: number
    minChoices: number
    maxChoices: number
    sortOrder: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMenuCategoryAvgAggregateInputType = {
    minChoices?: true
    maxChoices?: true
    sortOrder?: true
  }

  export type EventMenuCategorySumAggregateInputType = {
    minChoices?: true
    maxChoices?: true
    sortOrder?: true
  }

  export type EventMenuCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    required?: true
    minChoices?: true
    maxChoices?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMenuCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    required?: true
    minChoices?: true
    maxChoices?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMenuCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    required?: true
    minChoices?: true
    maxChoices?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventMenuCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventMenuCategory to aggregate.
     */
    where?: EventMenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventMenuCategories to fetch.
     */
    orderBy?: EventMenuCategoryOrderByWithRelationInput | EventMenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventMenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventMenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventMenuCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventMenuCategories
    **/
    _count?: true | EventMenuCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventMenuCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventMenuCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMenuCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMenuCategoryMaxAggregateInputType
  }

  export type GetEventMenuCategoryAggregateType<T extends EventMenuCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateEventMenuCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventMenuCategory[P]>
      : GetScalarType<T[P], AggregateEventMenuCategory[P]>
  }




  export type EventMenuCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventMenuCategoryWhereInput
    orderBy?: EventMenuCategoryOrderByWithAggregationInput | EventMenuCategoryOrderByWithAggregationInput[]
    by: EventMenuCategoryScalarFieldEnum[] | EventMenuCategoryScalarFieldEnum
    having?: EventMenuCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventMenuCategoryCountAggregateInputType | true
    _avg?: EventMenuCategoryAvgAggregateInputType
    _sum?: EventMenuCategorySumAggregateInputType
    _min?: EventMenuCategoryMinAggregateInputType
    _max?: EventMenuCategoryMaxAggregateInputType
  }

  export type EventMenuCategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    required: boolean
    minChoices: number
    maxChoices: number
    sortOrder: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: EventMenuCategoryCountAggregateOutputType | null
    _avg: EventMenuCategoryAvgAggregateOutputType | null
    _sum: EventMenuCategorySumAggregateOutputType | null
    _min: EventMenuCategoryMinAggregateOutputType | null
    _max: EventMenuCategoryMaxAggregateOutputType | null
  }

  type GetEventMenuCategoryGroupByPayload<T extends EventMenuCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventMenuCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventMenuCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventMenuCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], EventMenuCategoryGroupByOutputType[P]>
        }
      >
    >


  export type EventMenuCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    required?: boolean
    minChoices?: boolean
    maxChoices?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    options?: boolean | EventMenuCategory$optionsArgs<ExtArgs>
    _count?: boolean | EventMenuCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventMenuCategory"]>

  export type EventMenuCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    required?: boolean
    minChoices?: boolean
    maxChoices?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["eventMenuCategory"]>

  export type EventMenuCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    required?: boolean
    minChoices?: boolean
    maxChoices?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventMenuCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | EventMenuCategory$optionsArgs<ExtArgs>
    _count?: boolean | EventMenuCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventMenuCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventMenuCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventMenuCategory"
    objects: {
      options: Prisma.$EventMenuOptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      required: boolean
      minChoices: number
      maxChoices: number
      sortOrder: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventMenuCategory"]>
    composites: {}
  }

  type EventMenuCategoryGetPayload<S extends boolean | null | undefined | EventMenuCategoryDefaultArgs> = $Result.GetResult<Prisma.$EventMenuCategoryPayload, S>

  type EventMenuCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventMenuCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventMenuCategoryCountAggregateInputType | true
    }

  export interface EventMenuCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventMenuCategory'], meta: { name: 'EventMenuCategory' } }
    /**
     * Find zero or one EventMenuCategory that matches the filter.
     * @param {EventMenuCategoryFindUniqueArgs} args - Arguments to find a EventMenuCategory
     * @example
     * // Get one EventMenuCategory
     * const eventMenuCategory = await prisma.eventMenuCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventMenuCategoryFindUniqueArgs>(args: SelectSubset<T, EventMenuCategoryFindUniqueArgs<ExtArgs>>): Prisma__EventMenuCategoryClient<$Result.GetResult<Prisma.$EventMenuCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventMenuCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventMenuCategoryFindUniqueOrThrowArgs} args - Arguments to find a EventMenuCategory
     * @example
     * // Get one EventMenuCategory
     * const eventMenuCategory = await prisma.eventMenuCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventMenuCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, EventMenuCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventMenuCategoryClient<$Result.GetResult<Prisma.$EventMenuCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventMenuCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuCategoryFindFirstArgs} args - Arguments to find a EventMenuCategory
     * @example
     * // Get one EventMenuCategory
     * const eventMenuCategory = await prisma.eventMenuCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventMenuCategoryFindFirstArgs>(args?: SelectSubset<T, EventMenuCategoryFindFirstArgs<ExtArgs>>): Prisma__EventMenuCategoryClient<$Result.GetResult<Prisma.$EventMenuCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventMenuCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuCategoryFindFirstOrThrowArgs} args - Arguments to find a EventMenuCategory
     * @example
     * // Get one EventMenuCategory
     * const eventMenuCategory = await prisma.eventMenuCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventMenuCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, EventMenuCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventMenuCategoryClient<$Result.GetResult<Prisma.$EventMenuCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventMenuCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventMenuCategories
     * const eventMenuCategories = await prisma.eventMenuCategory.findMany()
     * 
     * // Get first 10 EventMenuCategories
     * const eventMenuCategories = await prisma.eventMenuCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventMenuCategoryWithIdOnly = await prisma.eventMenuCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventMenuCategoryFindManyArgs>(args?: SelectSubset<T, EventMenuCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventMenuCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventMenuCategory.
     * @param {EventMenuCategoryCreateArgs} args - Arguments to create a EventMenuCategory.
     * @example
     * // Create one EventMenuCategory
     * const EventMenuCategory = await prisma.eventMenuCategory.create({
     *   data: {
     *     // ... data to create a EventMenuCategory
     *   }
     * })
     * 
     */
    create<T extends EventMenuCategoryCreateArgs>(args: SelectSubset<T, EventMenuCategoryCreateArgs<ExtArgs>>): Prisma__EventMenuCategoryClient<$Result.GetResult<Prisma.$EventMenuCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventMenuCategories.
     * @param {EventMenuCategoryCreateManyArgs} args - Arguments to create many EventMenuCategories.
     * @example
     * // Create many EventMenuCategories
     * const eventMenuCategory = await prisma.eventMenuCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventMenuCategoryCreateManyArgs>(args?: SelectSubset<T, EventMenuCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventMenuCategories and returns the data saved in the database.
     * @param {EventMenuCategoryCreateManyAndReturnArgs} args - Arguments to create many EventMenuCategories.
     * @example
     * // Create many EventMenuCategories
     * const eventMenuCategory = await prisma.eventMenuCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventMenuCategories and only return the `id`
     * const eventMenuCategoryWithIdOnly = await prisma.eventMenuCategory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventMenuCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, EventMenuCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventMenuCategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EventMenuCategory.
     * @param {EventMenuCategoryDeleteArgs} args - Arguments to delete one EventMenuCategory.
     * @example
     * // Delete one EventMenuCategory
     * const EventMenuCategory = await prisma.eventMenuCategory.delete({
     *   where: {
     *     // ... filter to delete one EventMenuCategory
     *   }
     * })
     * 
     */
    delete<T extends EventMenuCategoryDeleteArgs>(args: SelectSubset<T, EventMenuCategoryDeleteArgs<ExtArgs>>): Prisma__EventMenuCategoryClient<$Result.GetResult<Prisma.$EventMenuCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventMenuCategory.
     * @param {EventMenuCategoryUpdateArgs} args - Arguments to update one EventMenuCategory.
     * @example
     * // Update one EventMenuCategory
     * const eventMenuCategory = await prisma.eventMenuCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventMenuCategoryUpdateArgs>(args: SelectSubset<T, EventMenuCategoryUpdateArgs<ExtArgs>>): Prisma__EventMenuCategoryClient<$Result.GetResult<Prisma.$EventMenuCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventMenuCategories.
     * @param {EventMenuCategoryDeleteManyArgs} args - Arguments to filter EventMenuCategories to delete.
     * @example
     * // Delete a few EventMenuCategories
     * const { count } = await prisma.eventMenuCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventMenuCategoryDeleteManyArgs>(args?: SelectSubset<T, EventMenuCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventMenuCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventMenuCategories
     * const eventMenuCategory = await prisma.eventMenuCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventMenuCategoryUpdateManyArgs>(args: SelectSubset<T, EventMenuCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventMenuCategory.
     * @param {EventMenuCategoryUpsertArgs} args - Arguments to update or create a EventMenuCategory.
     * @example
     * // Update or create a EventMenuCategory
     * const eventMenuCategory = await prisma.eventMenuCategory.upsert({
     *   create: {
     *     // ... data to create a EventMenuCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventMenuCategory we want to update
     *   }
     * })
     */
    upsert<T extends EventMenuCategoryUpsertArgs>(args: SelectSubset<T, EventMenuCategoryUpsertArgs<ExtArgs>>): Prisma__EventMenuCategoryClient<$Result.GetResult<Prisma.$EventMenuCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EventMenuCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuCategoryCountArgs} args - Arguments to filter EventMenuCategories to count.
     * @example
     * // Count the number of EventMenuCategories
     * const count = await prisma.eventMenuCategory.count({
     *   where: {
     *     // ... the filter for the EventMenuCategories we want to count
     *   }
     * })
    **/
    count<T extends EventMenuCategoryCountArgs>(
      args?: Subset<T, EventMenuCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventMenuCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventMenuCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventMenuCategoryAggregateArgs>(args: Subset<T, EventMenuCategoryAggregateArgs>): Prisma.PrismaPromise<GetEventMenuCategoryAggregateType<T>>

    /**
     * Group by EventMenuCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventMenuCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventMenuCategoryGroupByArgs['orderBy'] }
        : { orderBy?: EventMenuCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventMenuCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventMenuCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventMenuCategory model
   */
  readonly fields: EventMenuCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventMenuCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventMenuCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    options<T extends EventMenuCategory$optionsArgs<ExtArgs> = {}>(args?: Subset<T, EventMenuCategory$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventMenuOptionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventMenuCategory model
   */ 
  interface EventMenuCategoryFieldRefs {
    readonly id: FieldRef<"EventMenuCategory", 'String'>
    readonly name: FieldRef<"EventMenuCategory", 'String'>
    readonly description: FieldRef<"EventMenuCategory", 'String'>
    readonly required: FieldRef<"EventMenuCategory", 'Boolean'>
    readonly minChoices: FieldRef<"EventMenuCategory", 'Int'>
    readonly maxChoices: FieldRef<"EventMenuCategory", 'Int'>
    readonly sortOrder: FieldRef<"EventMenuCategory", 'Int'>
    readonly isActive: FieldRef<"EventMenuCategory", 'Boolean'>
    readonly createdAt: FieldRef<"EventMenuCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"EventMenuCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventMenuCategory findUnique
   */
  export type EventMenuCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuCategory
     */
    select?: EventMenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EventMenuCategory to fetch.
     */
    where: EventMenuCategoryWhereUniqueInput
  }

  /**
   * EventMenuCategory findUniqueOrThrow
   */
  export type EventMenuCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuCategory
     */
    select?: EventMenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EventMenuCategory to fetch.
     */
    where: EventMenuCategoryWhereUniqueInput
  }

  /**
   * EventMenuCategory findFirst
   */
  export type EventMenuCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuCategory
     */
    select?: EventMenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EventMenuCategory to fetch.
     */
    where?: EventMenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventMenuCategories to fetch.
     */
    orderBy?: EventMenuCategoryOrderByWithRelationInput | EventMenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventMenuCategories.
     */
    cursor?: EventMenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventMenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventMenuCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventMenuCategories.
     */
    distinct?: EventMenuCategoryScalarFieldEnum | EventMenuCategoryScalarFieldEnum[]
  }

  /**
   * EventMenuCategory findFirstOrThrow
   */
  export type EventMenuCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuCategory
     */
    select?: EventMenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EventMenuCategory to fetch.
     */
    where?: EventMenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventMenuCategories to fetch.
     */
    orderBy?: EventMenuCategoryOrderByWithRelationInput | EventMenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventMenuCategories.
     */
    cursor?: EventMenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventMenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventMenuCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventMenuCategories.
     */
    distinct?: EventMenuCategoryScalarFieldEnum | EventMenuCategoryScalarFieldEnum[]
  }

  /**
   * EventMenuCategory findMany
   */
  export type EventMenuCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuCategory
     */
    select?: EventMenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EventMenuCategories to fetch.
     */
    where?: EventMenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventMenuCategories to fetch.
     */
    orderBy?: EventMenuCategoryOrderByWithRelationInput | EventMenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventMenuCategories.
     */
    cursor?: EventMenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventMenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventMenuCategories.
     */
    skip?: number
    distinct?: EventMenuCategoryScalarFieldEnum | EventMenuCategoryScalarFieldEnum[]
  }

  /**
   * EventMenuCategory create
   */
  export type EventMenuCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuCategory
     */
    select?: EventMenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a EventMenuCategory.
     */
    data: XOR<EventMenuCategoryCreateInput, EventMenuCategoryUncheckedCreateInput>
  }

  /**
   * EventMenuCategory createMany
   */
  export type EventMenuCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventMenuCategories.
     */
    data: EventMenuCategoryCreateManyInput | EventMenuCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventMenuCategory createManyAndReturn
   */
  export type EventMenuCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuCategory
     */
    select?: EventMenuCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EventMenuCategories.
     */
    data: EventMenuCategoryCreateManyInput | EventMenuCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventMenuCategory update
   */
  export type EventMenuCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuCategory
     */
    select?: EventMenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a EventMenuCategory.
     */
    data: XOR<EventMenuCategoryUpdateInput, EventMenuCategoryUncheckedUpdateInput>
    /**
     * Choose, which EventMenuCategory to update.
     */
    where: EventMenuCategoryWhereUniqueInput
  }

  /**
   * EventMenuCategory updateMany
   */
  export type EventMenuCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventMenuCategories.
     */
    data: XOR<EventMenuCategoryUpdateManyMutationInput, EventMenuCategoryUncheckedUpdateManyInput>
    /**
     * Filter which EventMenuCategories to update
     */
    where?: EventMenuCategoryWhereInput
  }

  /**
   * EventMenuCategory upsert
   */
  export type EventMenuCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuCategory
     */
    select?: EventMenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the EventMenuCategory to update in case it exists.
     */
    where: EventMenuCategoryWhereUniqueInput
    /**
     * In case the EventMenuCategory found by the `where` argument doesn't exist, create a new EventMenuCategory with this data.
     */
    create: XOR<EventMenuCategoryCreateInput, EventMenuCategoryUncheckedCreateInput>
    /**
     * In case the EventMenuCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventMenuCategoryUpdateInput, EventMenuCategoryUncheckedUpdateInput>
  }

  /**
   * EventMenuCategory delete
   */
  export type EventMenuCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuCategory
     */
    select?: EventMenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuCategoryInclude<ExtArgs> | null
    /**
     * Filter which EventMenuCategory to delete.
     */
    where: EventMenuCategoryWhereUniqueInput
  }

  /**
   * EventMenuCategory deleteMany
   */
  export type EventMenuCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventMenuCategories to delete
     */
    where?: EventMenuCategoryWhereInput
  }

  /**
   * EventMenuCategory.options
   */
  export type EventMenuCategory$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuOption
     */
    select?: EventMenuOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuOptionInclude<ExtArgs> | null
    where?: EventMenuOptionWhereInput
    orderBy?: EventMenuOptionOrderByWithRelationInput | EventMenuOptionOrderByWithRelationInput[]
    cursor?: EventMenuOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventMenuOptionScalarFieldEnum | EventMenuOptionScalarFieldEnum[]
  }

  /**
   * EventMenuCategory without action
   */
  export type EventMenuCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuCategory
     */
    select?: EventMenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuCategoryInclude<ExtArgs> | null
  }


  /**
   * Model EventMenuOption
   */

  export type AggregateEventMenuOption = {
    _count: EventMenuOptionCountAggregateOutputType | null
    _avg: EventMenuOptionAvgAggregateOutputType | null
    _sum: EventMenuOptionSumAggregateOutputType | null
    _min: EventMenuOptionMinAggregateOutputType | null
    _max: EventMenuOptionMaxAggregateOutputType | null
  }

  export type EventMenuOptionAvgAggregateOutputType = {
    pricePerPlate: number | null
    sortOrder: number | null
  }

  export type EventMenuOptionSumAggregateOutputType = {
    pricePerPlate: number | null
    sortOrder: number | null
  }

  export type EventMenuOptionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    pricePerPlate: number | null
    includedInBase: boolean | null
    isActive: boolean | null
    sortOrder: number | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMenuOptionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    pricePerPlate: number | null
    includedInBase: boolean | null
    isActive: boolean | null
    sortOrder: number | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMenuOptionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    pricePerPlate: number
    includedInBase: number
    isActive: number
    sortOrder: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMenuOptionAvgAggregateInputType = {
    pricePerPlate?: true
    sortOrder?: true
  }

  export type EventMenuOptionSumAggregateInputType = {
    pricePerPlate?: true
    sortOrder?: true
  }

  export type EventMenuOptionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pricePerPlate?: true
    includedInBase?: true
    isActive?: true
    sortOrder?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMenuOptionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pricePerPlate?: true
    includedInBase?: true
    isActive?: true
    sortOrder?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMenuOptionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pricePerPlate?: true
    includedInBase?: true
    isActive?: true
    sortOrder?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventMenuOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventMenuOption to aggregate.
     */
    where?: EventMenuOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventMenuOptions to fetch.
     */
    orderBy?: EventMenuOptionOrderByWithRelationInput | EventMenuOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventMenuOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventMenuOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventMenuOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventMenuOptions
    **/
    _count?: true | EventMenuOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventMenuOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventMenuOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMenuOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMenuOptionMaxAggregateInputType
  }

  export type GetEventMenuOptionAggregateType<T extends EventMenuOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateEventMenuOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventMenuOption[P]>
      : GetScalarType<T[P], AggregateEventMenuOption[P]>
  }




  export type EventMenuOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventMenuOptionWhereInput
    orderBy?: EventMenuOptionOrderByWithAggregationInput | EventMenuOptionOrderByWithAggregationInput[]
    by: EventMenuOptionScalarFieldEnum[] | EventMenuOptionScalarFieldEnum
    having?: EventMenuOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventMenuOptionCountAggregateInputType | true
    _avg?: EventMenuOptionAvgAggregateInputType
    _sum?: EventMenuOptionSumAggregateInputType
    _min?: EventMenuOptionMinAggregateInputType
    _max?: EventMenuOptionMaxAggregateInputType
  }

  export type EventMenuOptionGroupByOutputType = {
    id: string
    name: string
    description: string | null
    pricePerPlate: number
    includedInBase: boolean
    isActive: boolean
    sortOrder: number
    categoryId: string
    createdAt: Date
    updatedAt: Date
    _count: EventMenuOptionCountAggregateOutputType | null
    _avg: EventMenuOptionAvgAggregateOutputType | null
    _sum: EventMenuOptionSumAggregateOutputType | null
    _min: EventMenuOptionMinAggregateOutputType | null
    _max: EventMenuOptionMaxAggregateOutputType | null
  }

  type GetEventMenuOptionGroupByPayload<T extends EventMenuOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventMenuOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventMenuOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventMenuOptionGroupByOutputType[P]>
            : GetScalarType<T[P], EventMenuOptionGroupByOutputType[P]>
        }
      >
    >


  export type EventMenuOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    pricePerPlate?: boolean
    includedInBase?: boolean
    isActive?: boolean
    sortOrder?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | EventMenuCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventMenuOption"]>

  export type EventMenuOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    pricePerPlate?: boolean
    includedInBase?: boolean
    isActive?: boolean
    sortOrder?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | EventMenuCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventMenuOption"]>

  export type EventMenuOptionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    pricePerPlate?: boolean
    includedInBase?: boolean
    isActive?: boolean
    sortOrder?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventMenuOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | EventMenuCategoryDefaultArgs<ExtArgs>
  }
  export type EventMenuOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | EventMenuCategoryDefaultArgs<ExtArgs>
  }

  export type $EventMenuOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventMenuOption"
    objects: {
      category: Prisma.$EventMenuCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      pricePerPlate: number
      includedInBase: boolean
      isActive: boolean
      sortOrder: number
      categoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventMenuOption"]>
    composites: {}
  }

  type EventMenuOptionGetPayload<S extends boolean | null | undefined | EventMenuOptionDefaultArgs> = $Result.GetResult<Prisma.$EventMenuOptionPayload, S>

  type EventMenuOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventMenuOptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventMenuOptionCountAggregateInputType | true
    }

  export interface EventMenuOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventMenuOption'], meta: { name: 'EventMenuOption' } }
    /**
     * Find zero or one EventMenuOption that matches the filter.
     * @param {EventMenuOptionFindUniqueArgs} args - Arguments to find a EventMenuOption
     * @example
     * // Get one EventMenuOption
     * const eventMenuOption = await prisma.eventMenuOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventMenuOptionFindUniqueArgs>(args: SelectSubset<T, EventMenuOptionFindUniqueArgs<ExtArgs>>): Prisma__EventMenuOptionClient<$Result.GetResult<Prisma.$EventMenuOptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventMenuOption that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventMenuOptionFindUniqueOrThrowArgs} args - Arguments to find a EventMenuOption
     * @example
     * // Get one EventMenuOption
     * const eventMenuOption = await prisma.eventMenuOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventMenuOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, EventMenuOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventMenuOptionClient<$Result.GetResult<Prisma.$EventMenuOptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventMenuOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuOptionFindFirstArgs} args - Arguments to find a EventMenuOption
     * @example
     * // Get one EventMenuOption
     * const eventMenuOption = await prisma.eventMenuOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventMenuOptionFindFirstArgs>(args?: SelectSubset<T, EventMenuOptionFindFirstArgs<ExtArgs>>): Prisma__EventMenuOptionClient<$Result.GetResult<Prisma.$EventMenuOptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventMenuOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuOptionFindFirstOrThrowArgs} args - Arguments to find a EventMenuOption
     * @example
     * // Get one EventMenuOption
     * const eventMenuOption = await prisma.eventMenuOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventMenuOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, EventMenuOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventMenuOptionClient<$Result.GetResult<Prisma.$EventMenuOptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventMenuOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventMenuOptions
     * const eventMenuOptions = await prisma.eventMenuOption.findMany()
     * 
     * // Get first 10 EventMenuOptions
     * const eventMenuOptions = await prisma.eventMenuOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventMenuOptionWithIdOnly = await prisma.eventMenuOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventMenuOptionFindManyArgs>(args?: SelectSubset<T, EventMenuOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventMenuOptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventMenuOption.
     * @param {EventMenuOptionCreateArgs} args - Arguments to create a EventMenuOption.
     * @example
     * // Create one EventMenuOption
     * const EventMenuOption = await prisma.eventMenuOption.create({
     *   data: {
     *     // ... data to create a EventMenuOption
     *   }
     * })
     * 
     */
    create<T extends EventMenuOptionCreateArgs>(args: SelectSubset<T, EventMenuOptionCreateArgs<ExtArgs>>): Prisma__EventMenuOptionClient<$Result.GetResult<Prisma.$EventMenuOptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventMenuOptions.
     * @param {EventMenuOptionCreateManyArgs} args - Arguments to create many EventMenuOptions.
     * @example
     * // Create many EventMenuOptions
     * const eventMenuOption = await prisma.eventMenuOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventMenuOptionCreateManyArgs>(args?: SelectSubset<T, EventMenuOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventMenuOptions and returns the data saved in the database.
     * @param {EventMenuOptionCreateManyAndReturnArgs} args - Arguments to create many EventMenuOptions.
     * @example
     * // Create many EventMenuOptions
     * const eventMenuOption = await prisma.eventMenuOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventMenuOptions and only return the `id`
     * const eventMenuOptionWithIdOnly = await prisma.eventMenuOption.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventMenuOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, EventMenuOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventMenuOptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EventMenuOption.
     * @param {EventMenuOptionDeleteArgs} args - Arguments to delete one EventMenuOption.
     * @example
     * // Delete one EventMenuOption
     * const EventMenuOption = await prisma.eventMenuOption.delete({
     *   where: {
     *     // ... filter to delete one EventMenuOption
     *   }
     * })
     * 
     */
    delete<T extends EventMenuOptionDeleteArgs>(args: SelectSubset<T, EventMenuOptionDeleteArgs<ExtArgs>>): Prisma__EventMenuOptionClient<$Result.GetResult<Prisma.$EventMenuOptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventMenuOption.
     * @param {EventMenuOptionUpdateArgs} args - Arguments to update one EventMenuOption.
     * @example
     * // Update one EventMenuOption
     * const eventMenuOption = await prisma.eventMenuOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventMenuOptionUpdateArgs>(args: SelectSubset<T, EventMenuOptionUpdateArgs<ExtArgs>>): Prisma__EventMenuOptionClient<$Result.GetResult<Prisma.$EventMenuOptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventMenuOptions.
     * @param {EventMenuOptionDeleteManyArgs} args - Arguments to filter EventMenuOptions to delete.
     * @example
     * // Delete a few EventMenuOptions
     * const { count } = await prisma.eventMenuOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventMenuOptionDeleteManyArgs>(args?: SelectSubset<T, EventMenuOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventMenuOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventMenuOptions
     * const eventMenuOption = await prisma.eventMenuOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventMenuOptionUpdateManyArgs>(args: SelectSubset<T, EventMenuOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventMenuOption.
     * @param {EventMenuOptionUpsertArgs} args - Arguments to update or create a EventMenuOption.
     * @example
     * // Update or create a EventMenuOption
     * const eventMenuOption = await prisma.eventMenuOption.upsert({
     *   create: {
     *     // ... data to create a EventMenuOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventMenuOption we want to update
     *   }
     * })
     */
    upsert<T extends EventMenuOptionUpsertArgs>(args: SelectSubset<T, EventMenuOptionUpsertArgs<ExtArgs>>): Prisma__EventMenuOptionClient<$Result.GetResult<Prisma.$EventMenuOptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EventMenuOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuOptionCountArgs} args - Arguments to filter EventMenuOptions to count.
     * @example
     * // Count the number of EventMenuOptions
     * const count = await prisma.eventMenuOption.count({
     *   where: {
     *     // ... the filter for the EventMenuOptions we want to count
     *   }
     * })
    **/
    count<T extends EventMenuOptionCountArgs>(
      args?: Subset<T, EventMenuOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventMenuOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventMenuOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventMenuOptionAggregateArgs>(args: Subset<T, EventMenuOptionAggregateArgs>): Prisma.PrismaPromise<GetEventMenuOptionAggregateType<T>>

    /**
     * Group by EventMenuOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMenuOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventMenuOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventMenuOptionGroupByArgs['orderBy'] }
        : { orderBy?: EventMenuOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventMenuOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventMenuOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventMenuOption model
   */
  readonly fields: EventMenuOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventMenuOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventMenuOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends EventMenuCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventMenuCategoryDefaultArgs<ExtArgs>>): Prisma__EventMenuCategoryClient<$Result.GetResult<Prisma.$EventMenuCategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventMenuOption model
   */ 
  interface EventMenuOptionFieldRefs {
    readonly id: FieldRef<"EventMenuOption", 'String'>
    readonly name: FieldRef<"EventMenuOption", 'String'>
    readonly description: FieldRef<"EventMenuOption", 'String'>
    readonly pricePerPlate: FieldRef<"EventMenuOption", 'Float'>
    readonly includedInBase: FieldRef<"EventMenuOption", 'Boolean'>
    readonly isActive: FieldRef<"EventMenuOption", 'Boolean'>
    readonly sortOrder: FieldRef<"EventMenuOption", 'Int'>
    readonly categoryId: FieldRef<"EventMenuOption", 'String'>
    readonly createdAt: FieldRef<"EventMenuOption", 'DateTime'>
    readonly updatedAt: FieldRef<"EventMenuOption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventMenuOption findUnique
   */
  export type EventMenuOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuOption
     */
    select?: EventMenuOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuOptionInclude<ExtArgs> | null
    /**
     * Filter, which EventMenuOption to fetch.
     */
    where: EventMenuOptionWhereUniqueInput
  }

  /**
   * EventMenuOption findUniqueOrThrow
   */
  export type EventMenuOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuOption
     */
    select?: EventMenuOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuOptionInclude<ExtArgs> | null
    /**
     * Filter, which EventMenuOption to fetch.
     */
    where: EventMenuOptionWhereUniqueInput
  }

  /**
   * EventMenuOption findFirst
   */
  export type EventMenuOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuOption
     */
    select?: EventMenuOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuOptionInclude<ExtArgs> | null
    /**
     * Filter, which EventMenuOption to fetch.
     */
    where?: EventMenuOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventMenuOptions to fetch.
     */
    orderBy?: EventMenuOptionOrderByWithRelationInput | EventMenuOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventMenuOptions.
     */
    cursor?: EventMenuOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventMenuOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventMenuOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventMenuOptions.
     */
    distinct?: EventMenuOptionScalarFieldEnum | EventMenuOptionScalarFieldEnum[]
  }

  /**
   * EventMenuOption findFirstOrThrow
   */
  export type EventMenuOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuOption
     */
    select?: EventMenuOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuOptionInclude<ExtArgs> | null
    /**
     * Filter, which EventMenuOption to fetch.
     */
    where?: EventMenuOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventMenuOptions to fetch.
     */
    orderBy?: EventMenuOptionOrderByWithRelationInput | EventMenuOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventMenuOptions.
     */
    cursor?: EventMenuOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventMenuOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventMenuOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventMenuOptions.
     */
    distinct?: EventMenuOptionScalarFieldEnum | EventMenuOptionScalarFieldEnum[]
  }

  /**
   * EventMenuOption findMany
   */
  export type EventMenuOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuOption
     */
    select?: EventMenuOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuOptionInclude<ExtArgs> | null
    /**
     * Filter, which EventMenuOptions to fetch.
     */
    where?: EventMenuOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventMenuOptions to fetch.
     */
    orderBy?: EventMenuOptionOrderByWithRelationInput | EventMenuOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventMenuOptions.
     */
    cursor?: EventMenuOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventMenuOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventMenuOptions.
     */
    skip?: number
    distinct?: EventMenuOptionScalarFieldEnum | EventMenuOptionScalarFieldEnum[]
  }

  /**
   * EventMenuOption create
   */
  export type EventMenuOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuOption
     */
    select?: EventMenuOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a EventMenuOption.
     */
    data: XOR<EventMenuOptionCreateInput, EventMenuOptionUncheckedCreateInput>
  }

  /**
   * EventMenuOption createMany
   */
  export type EventMenuOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventMenuOptions.
     */
    data: EventMenuOptionCreateManyInput | EventMenuOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventMenuOption createManyAndReturn
   */
  export type EventMenuOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuOption
     */
    select?: EventMenuOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EventMenuOptions.
     */
    data: EventMenuOptionCreateManyInput | EventMenuOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventMenuOption update
   */
  export type EventMenuOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuOption
     */
    select?: EventMenuOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a EventMenuOption.
     */
    data: XOR<EventMenuOptionUpdateInput, EventMenuOptionUncheckedUpdateInput>
    /**
     * Choose, which EventMenuOption to update.
     */
    where: EventMenuOptionWhereUniqueInput
  }

  /**
   * EventMenuOption updateMany
   */
  export type EventMenuOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventMenuOptions.
     */
    data: XOR<EventMenuOptionUpdateManyMutationInput, EventMenuOptionUncheckedUpdateManyInput>
    /**
     * Filter which EventMenuOptions to update
     */
    where?: EventMenuOptionWhereInput
  }

  /**
   * EventMenuOption upsert
   */
  export type EventMenuOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuOption
     */
    select?: EventMenuOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the EventMenuOption to update in case it exists.
     */
    where: EventMenuOptionWhereUniqueInput
    /**
     * In case the EventMenuOption found by the `where` argument doesn't exist, create a new EventMenuOption with this data.
     */
    create: XOR<EventMenuOptionCreateInput, EventMenuOptionUncheckedCreateInput>
    /**
     * In case the EventMenuOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventMenuOptionUpdateInput, EventMenuOptionUncheckedUpdateInput>
  }

  /**
   * EventMenuOption delete
   */
  export type EventMenuOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuOption
     */
    select?: EventMenuOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuOptionInclude<ExtArgs> | null
    /**
     * Filter which EventMenuOption to delete.
     */
    where: EventMenuOptionWhereUniqueInput
  }

  /**
   * EventMenuOption deleteMany
   */
  export type EventMenuOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventMenuOptions to delete
     */
    where?: EventMenuOptionWhereInput
  }

  /**
   * EventMenuOption without action
   */
  export type EventMenuOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMenuOption
     */
    select?: EventMenuOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMenuOptionInclude<ExtArgs> | null
  }


  /**
   * Model EventPayment
   */

  export type AggregateEventPayment = {
    _count: EventPaymentCountAggregateOutputType | null
    _avg: EventPaymentAvgAggregateOutputType | null
    _sum: EventPaymentSumAggregateOutputType | null
    _min: EventPaymentMinAggregateOutputType | null
    _max: EventPaymentMaxAggregateOutputType | null
  }

  export type EventPaymentAvgAggregateOutputType = {
    amountNGN: number | null
  }

  export type EventPaymentSumAggregateOutputType = {
    amountNGN: number | null
  }

  export type EventPaymentMinAggregateOutputType = {
    id: string | null
    amountNGN: number | null
    paymentMethod: string | null
    status: $Enums.PaymentStatus | null
    reference: string | null
    paidAt: Date | null
    note: string | null
    eventOrderId: string | null
  }

  export type EventPaymentMaxAggregateOutputType = {
    id: string | null
    amountNGN: number | null
    paymentMethod: string | null
    status: $Enums.PaymentStatus | null
    reference: string | null
    paidAt: Date | null
    note: string | null
    eventOrderId: string | null
  }

  export type EventPaymentCountAggregateOutputType = {
    id: number
    amountNGN: number
    paymentMethod: number
    status: number
    reference: number
    paidAt: number
    note: number
    eventOrderId: number
    _all: number
  }


  export type EventPaymentAvgAggregateInputType = {
    amountNGN?: true
  }

  export type EventPaymentSumAggregateInputType = {
    amountNGN?: true
  }

  export type EventPaymentMinAggregateInputType = {
    id?: true
    amountNGN?: true
    paymentMethod?: true
    status?: true
    reference?: true
    paidAt?: true
    note?: true
    eventOrderId?: true
  }

  export type EventPaymentMaxAggregateInputType = {
    id?: true
    amountNGN?: true
    paymentMethod?: true
    status?: true
    reference?: true
    paidAt?: true
    note?: true
    eventOrderId?: true
  }

  export type EventPaymentCountAggregateInputType = {
    id?: true
    amountNGN?: true
    paymentMethod?: true
    status?: true
    reference?: true
    paidAt?: true
    note?: true
    eventOrderId?: true
    _all?: true
  }

  export type EventPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventPayment to aggregate.
     */
    where?: EventPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPayments to fetch.
     */
    orderBy?: EventPaymentOrderByWithRelationInput | EventPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventPayments
    **/
    _count?: true | EventPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventPaymentMaxAggregateInputType
  }

  export type GetEventPaymentAggregateType<T extends EventPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateEventPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventPayment[P]>
      : GetScalarType<T[P], AggregateEventPayment[P]>
  }




  export type EventPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventPaymentWhereInput
    orderBy?: EventPaymentOrderByWithAggregationInput | EventPaymentOrderByWithAggregationInput[]
    by: EventPaymentScalarFieldEnum[] | EventPaymentScalarFieldEnum
    having?: EventPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventPaymentCountAggregateInputType | true
    _avg?: EventPaymentAvgAggregateInputType
    _sum?: EventPaymentSumAggregateInputType
    _min?: EventPaymentMinAggregateInputType
    _max?: EventPaymentMaxAggregateInputType
  }

  export type EventPaymentGroupByOutputType = {
    id: string
    amountNGN: number
    paymentMethod: string
    status: $Enums.PaymentStatus
    reference: string | null
    paidAt: Date
    note: string | null
    eventOrderId: string
    _count: EventPaymentCountAggregateOutputType | null
    _avg: EventPaymentAvgAggregateOutputType | null
    _sum: EventPaymentSumAggregateOutputType | null
    _min: EventPaymentMinAggregateOutputType | null
    _max: EventPaymentMaxAggregateOutputType | null
  }

  type GetEventPaymentGroupByPayload<T extends EventPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], EventPaymentGroupByOutputType[P]>
        }
      >
    >


  export type EventPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountNGN?: boolean
    paymentMethod?: boolean
    status?: boolean
    reference?: boolean
    paidAt?: boolean
    note?: boolean
    eventOrderId?: boolean
    eventOrder?: boolean | EventOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventPayment"]>

  export type EventPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountNGN?: boolean
    paymentMethod?: boolean
    status?: boolean
    reference?: boolean
    paidAt?: boolean
    note?: boolean
    eventOrderId?: boolean
    eventOrder?: boolean | EventOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventPayment"]>

  export type EventPaymentSelectScalar = {
    id?: boolean
    amountNGN?: boolean
    paymentMethod?: boolean
    status?: boolean
    reference?: boolean
    paidAt?: boolean
    note?: boolean
    eventOrderId?: boolean
  }

  export type EventPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventOrder?: boolean | EventOrderDefaultArgs<ExtArgs>
  }
  export type EventPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventOrder?: boolean | EventOrderDefaultArgs<ExtArgs>
  }

  export type $EventPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventPayment"
    objects: {
      eventOrder: Prisma.$EventOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amountNGN: number
      paymentMethod: string
      status: $Enums.PaymentStatus
      reference: string | null
      paidAt: Date
      note: string | null
      eventOrderId: string
    }, ExtArgs["result"]["eventPayment"]>
    composites: {}
  }

  type EventPaymentGetPayload<S extends boolean | null | undefined | EventPaymentDefaultArgs> = $Result.GetResult<Prisma.$EventPaymentPayload, S>

  type EventPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventPaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventPaymentCountAggregateInputType | true
    }

  export interface EventPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventPayment'], meta: { name: 'EventPayment' } }
    /**
     * Find zero or one EventPayment that matches the filter.
     * @param {EventPaymentFindUniqueArgs} args - Arguments to find a EventPayment
     * @example
     * // Get one EventPayment
     * const eventPayment = await prisma.eventPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventPaymentFindUniqueArgs>(args: SelectSubset<T, EventPaymentFindUniqueArgs<ExtArgs>>): Prisma__EventPaymentClient<$Result.GetResult<Prisma.$EventPaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventPayment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventPaymentFindUniqueOrThrowArgs} args - Arguments to find a EventPayment
     * @example
     * // Get one EventPayment
     * const eventPayment = await prisma.eventPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, EventPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventPaymentClient<$Result.GetResult<Prisma.$EventPaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPaymentFindFirstArgs} args - Arguments to find a EventPayment
     * @example
     * // Get one EventPayment
     * const eventPayment = await prisma.eventPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventPaymentFindFirstArgs>(args?: SelectSubset<T, EventPaymentFindFirstArgs<ExtArgs>>): Prisma__EventPaymentClient<$Result.GetResult<Prisma.$EventPaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPaymentFindFirstOrThrowArgs} args - Arguments to find a EventPayment
     * @example
     * // Get one EventPayment
     * const eventPayment = await prisma.eventPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, EventPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventPaymentClient<$Result.GetResult<Prisma.$EventPaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventPayments
     * const eventPayments = await prisma.eventPayment.findMany()
     * 
     * // Get first 10 EventPayments
     * const eventPayments = await prisma.eventPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventPaymentWithIdOnly = await prisma.eventPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventPaymentFindManyArgs>(args?: SelectSubset<T, EventPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventPayment.
     * @param {EventPaymentCreateArgs} args - Arguments to create a EventPayment.
     * @example
     * // Create one EventPayment
     * const EventPayment = await prisma.eventPayment.create({
     *   data: {
     *     // ... data to create a EventPayment
     *   }
     * })
     * 
     */
    create<T extends EventPaymentCreateArgs>(args: SelectSubset<T, EventPaymentCreateArgs<ExtArgs>>): Prisma__EventPaymentClient<$Result.GetResult<Prisma.$EventPaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventPayments.
     * @param {EventPaymentCreateManyArgs} args - Arguments to create many EventPayments.
     * @example
     * // Create many EventPayments
     * const eventPayment = await prisma.eventPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventPaymentCreateManyArgs>(args?: SelectSubset<T, EventPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventPayments and returns the data saved in the database.
     * @param {EventPaymentCreateManyAndReturnArgs} args - Arguments to create many EventPayments.
     * @example
     * // Create many EventPayments
     * const eventPayment = await prisma.eventPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventPayments and only return the `id`
     * const eventPaymentWithIdOnly = await prisma.eventPayment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, EventPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EventPayment.
     * @param {EventPaymentDeleteArgs} args - Arguments to delete one EventPayment.
     * @example
     * // Delete one EventPayment
     * const EventPayment = await prisma.eventPayment.delete({
     *   where: {
     *     // ... filter to delete one EventPayment
     *   }
     * })
     * 
     */
    delete<T extends EventPaymentDeleteArgs>(args: SelectSubset<T, EventPaymentDeleteArgs<ExtArgs>>): Prisma__EventPaymentClient<$Result.GetResult<Prisma.$EventPaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventPayment.
     * @param {EventPaymentUpdateArgs} args - Arguments to update one EventPayment.
     * @example
     * // Update one EventPayment
     * const eventPayment = await prisma.eventPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventPaymentUpdateArgs>(args: SelectSubset<T, EventPaymentUpdateArgs<ExtArgs>>): Prisma__EventPaymentClient<$Result.GetResult<Prisma.$EventPaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventPayments.
     * @param {EventPaymentDeleteManyArgs} args - Arguments to filter EventPayments to delete.
     * @example
     * // Delete a few EventPayments
     * const { count } = await prisma.eventPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventPaymentDeleteManyArgs>(args?: SelectSubset<T, EventPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventPayments
     * const eventPayment = await prisma.eventPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventPaymentUpdateManyArgs>(args: SelectSubset<T, EventPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventPayment.
     * @param {EventPaymentUpsertArgs} args - Arguments to update or create a EventPayment.
     * @example
     * // Update or create a EventPayment
     * const eventPayment = await prisma.eventPayment.upsert({
     *   create: {
     *     // ... data to create a EventPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventPayment we want to update
     *   }
     * })
     */
    upsert<T extends EventPaymentUpsertArgs>(args: SelectSubset<T, EventPaymentUpsertArgs<ExtArgs>>): Prisma__EventPaymentClient<$Result.GetResult<Prisma.$EventPaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EventPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPaymentCountArgs} args - Arguments to filter EventPayments to count.
     * @example
     * // Count the number of EventPayments
     * const count = await prisma.eventPayment.count({
     *   where: {
     *     // ... the filter for the EventPayments we want to count
     *   }
     * })
    **/
    count<T extends EventPaymentCountArgs>(
      args?: Subset<T, EventPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventPaymentAggregateArgs>(args: Subset<T, EventPaymentAggregateArgs>): Prisma.PrismaPromise<GetEventPaymentAggregateType<T>>

    /**
     * Group by EventPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventPaymentGroupByArgs['orderBy'] }
        : { orderBy?: EventPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventPayment model
   */
  readonly fields: EventPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventOrder<T extends EventOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventOrderDefaultArgs<ExtArgs>>): Prisma__EventOrderClient<$Result.GetResult<Prisma.$EventOrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventPayment model
   */ 
  interface EventPaymentFieldRefs {
    readonly id: FieldRef<"EventPayment", 'String'>
    readonly amountNGN: FieldRef<"EventPayment", 'Float'>
    readonly paymentMethod: FieldRef<"EventPayment", 'String'>
    readonly status: FieldRef<"EventPayment", 'PaymentStatus'>
    readonly reference: FieldRef<"EventPayment", 'String'>
    readonly paidAt: FieldRef<"EventPayment", 'DateTime'>
    readonly note: FieldRef<"EventPayment", 'String'>
    readonly eventOrderId: FieldRef<"EventPayment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventPayment findUnique
   */
  export type EventPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPayment
     */
    select?: EventPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPaymentInclude<ExtArgs> | null
    /**
     * Filter, which EventPayment to fetch.
     */
    where: EventPaymentWhereUniqueInput
  }

  /**
   * EventPayment findUniqueOrThrow
   */
  export type EventPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPayment
     */
    select?: EventPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPaymentInclude<ExtArgs> | null
    /**
     * Filter, which EventPayment to fetch.
     */
    where: EventPaymentWhereUniqueInput
  }

  /**
   * EventPayment findFirst
   */
  export type EventPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPayment
     */
    select?: EventPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPaymentInclude<ExtArgs> | null
    /**
     * Filter, which EventPayment to fetch.
     */
    where?: EventPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPayments to fetch.
     */
    orderBy?: EventPaymentOrderByWithRelationInput | EventPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventPayments.
     */
    cursor?: EventPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventPayments.
     */
    distinct?: EventPaymentScalarFieldEnum | EventPaymentScalarFieldEnum[]
  }

  /**
   * EventPayment findFirstOrThrow
   */
  export type EventPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPayment
     */
    select?: EventPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPaymentInclude<ExtArgs> | null
    /**
     * Filter, which EventPayment to fetch.
     */
    where?: EventPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPayments to fetch.
     */
    orderBy?: EventPaymentOrderByWithRelationInput | EventPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventPayments.
     */
    cursor?: EventPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventPayments.
     */
    distinct?: EventPaymentScalarFieldEnum | EventPaymentScalarFieldEnum[]
  }

  /**
   * EventPayment findMany
   */
  export type EventPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPayment
     */
    select?: EventPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPaymentInclude<ExtArgs> | null
    /**
     * Filter, which EventPayments to fetch.
     */
    where?: EventPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPayments to fetch.
     */
    orderBy?: EventPaymentOrderByWithRelationInput | EventPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventPayments.
     */
    cursor?: EventPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPayments.
     */
    skip?: number
    distinct?: EventPaymentScalarFieldEnum | EventPaymentScalarFieldEnum[]
  }

  /**
   * EventPayment create
   */
  export type EventPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPayment
     */
    select?: EventPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a EventPayment.
     */
    data: XOR<EventPaymentCreateInput, EventPaymentUncheckedCreateInput>
  }

  /**
   * EventPayment createMany
   */
  export type EventPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventPayments.
     */
    data: EventPaymentCreateManyInput | EventPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventPayment createManyAndReturn
   */
  export type EventPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPayment
     */
    select?: EventPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EventPayments.
     */
    data: EventPaymentCreateManyInput | EventPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventPayment update
   */
  export type EventPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPayment
     */
    select?: EventPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a EventPayment.
     */
    data: XOR<EventPaymentUpdateInput, EventPaymentUncheckedUpdateInput>
    /**
     * Choose, which EventPayment to update.
     */
    where: EventPaymentWhereUniqueInput
  }

  /**
   * EventPayment updateMany
   */
  export type EventPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventPayments.
     */
    data: XOR<EventPaymentUpdateManyMutationInput, EventPaymentUncheckedUpdateManyInput>
    /**
     * Filter which EventPayments to update
     */
    where?: EventPaymentWhereInput
  }

  /**
   * EventPayment upsert
   */
  export type EventPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPayment
     */
    select?: EventPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the EventPayment to update in case it exists.
     */
    where: EventPaymentWhereUniqueInput
    /**
     * In case the EventPayment found by the `where` argument doesn't exist, create a new EventPayment with this data.
     */
    create: XOR<EventPaymentCreateInput, EventPaymentUncheckedCreateInput>
    /**
     * In case the EventPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventPaymentUpdateInput, EventPaymentUncheckedUpdateInput>
  }

  /**
   * EventPayment delete
   */
  export type EventPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPayment
     */
    select?: EventPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPaymentInclude<ExtArgs> | null
    /**
     * Filter which EventPayment to delete.
     */
    where: EventPaymentWhereUniqueInput
  }

  /**
   * EventPayment deleteMany
   */
  export type EventPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventPayments to delete
     */
    where?: EventPaymentWhereInput
  }

  /**
   * EventPayment without action
   */
  export type EventPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPayment
     */
    select?: EventPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ActiveSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionId: 'sessionId',
    ip: 'ip',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type ActiveSessionScalarFieldEnum = (typeof ActiveSessionScalarFieldEnum)[keyof typeof ActiveSessionScalarFieldEnum]


  export const OrderScalarFieldEnum: {
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

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
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

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const MenuCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuCategoryScalarFieldEnum = (typeof MenuCategoryScalarFieldEnum)[keyof typeof MenuCategoryScalarFieldEnum]


  export const MenuItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    priceNGN: 'priceNGN',
    imageUrl: 'imageUrl',
    isAvailable: 'isAvailable',
    isFeatured: 'isFeatured',
    isSpicy: 'isSpicy',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId',
    slug: 'slug',
    sortOrder: 'sortOrder',
    publicId: 'publicId'
  };

  export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum]


  export const FoodPackOrderScalarFieldEnum: {
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

  export type FoodPackOrderScalarFieldEnum = (typeof FoodPackOrderScalarFieldEnum)[keyof typeof FoodPackOrderScalarFieldEnum]


  export const FoodPackOrderItemScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    orderId: 'orderId',
    menuItemId: 'menuItemId'
  };

  export type FoodPackOrderItemScalarFieldEnum = (typeof FoodPackOrderItemScalarFieldEnum)[keyof typeof FoodPackOrderItemScalarFieldEnum]


  export const EventOrderScalarFieldEnum: {
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
    updatedAt: 'updatedAt',
    serviceFeeNGN: 'serviceFeeNGN',
    transportFeeNGN: 'transportFeeNGN'
  };

  export type EventOrderScalarFieldEnum = (typeof EventOrderScalarFieldEnum)[keyof typeof EventOrderScalarFieldEnum]


  export const EventMenuSelectionScalarFieldEnum: {
    id: 'id',
    menuItemId: 'menuItemId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    notes: 'notes',
    eventOrderId: 'eventOrderId'
  };

  export type EventMenuSelectionScalarFieldEnum = (typeof EventMenuSelectionScalarFieldEnum)[keyof typeof EventMenuSelectionScalarFieldEnum]


  export const EventMenuCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    required: 'required',
    minChoices: 'minChoices',
    maxChoices: 'maxChoices',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventMenuCategoryScalarFieldEnum = (typeof EventMenuCategoryScalarFieldEnum)[keyof typeof EventMenuCategoryScalarFieldEnum]


  export const EventMenuOptionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    pricePerPlate: 'pricePerPlate',
    includedInBase: 'includedInBase',
    isActive: 'isActive',
    sortOrder: 'sortOrder',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventMenuOptionScalarFieldEnum = (typeof EventMenuOptionScalarFieldEnum)[keyof typeof EventMenuOptionScalarFieldEnum]


  export const EventPaymentScalarFieldEnum: {
    id: 'id',
    amountNGN: 'amountNGN',
    paymentMethod: 'paymentMethod',
    status: 'status',
    reference: 'reference',
    paidAt: 'paidAt',
    note: 'note',
    eventOrderId: 'eventOrderId'
  };

  export type EventPaymentScalarFieldEnum = (typeof EventPaymentScalarFieldEnum)[keyof typeof EventPaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'OrderSource'
   */
  export type EnumOrderSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderSource'>
    


  /**
   * Reference to a field of type 'OrderSource[]'
   */
  export type ListEnumOrderSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderSource[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'FoodPackStatus'
   */
  export type EnumFoodPackStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FoodPackStatus'>
    


  /**
   * Reference to a field of type 'FoodPackStatus[]'
   */
  export type ListEnumFoodPackStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FoodPackStatus[]'>
    


  /**
   * Reference to a field of type 'DeliveryMethod'
   */
  export type EnumDeliveryMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryMethod'>
    


  /**
   * Reference to a field of type 'DeliveryMethod[]'
   */
  export type ListEnumDeliveryMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryMethod[]'>
    


  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>
    


  /**
   * Reference to a field of type 'VenueType'
   */
  export type EnumVenueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VenueType'>
    


  /**
   * Reference to a field of type 'VenueType[]'
   */
  export type ListEnumVenueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VenueType[]'>
    


  /**
   * Reference to a field of type 'ServiceType'
   */
  export type EnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType'>
    


  /**
   * Reference to a field of type 'ServiceType[]'
   */
  export type ListEnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType[]'>
    


  /**
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>
    


  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    activeSession?: XOR<ActiveSessionNullableRelationFilter, ActiveSessionWhereInput> | null
    auditLogs?: AuditLogListRelationFilter
    ordersConfirmed?: OrderListRelationFilter
    ordersCreated?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activeSession?: ActiveSessionOrderByWithRelationInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    ordersConfirmed?: OrderOrderByRelationAggregateInput
    ordersCreated?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    activeSession?: XOR<ActiveSessionNullableRelationFilter, ActiveSessionWhereInput> | null
    auditLogs?: AuditLogListRelationFilter
    ordersConfirmed?: OrderListRelationFilter
    ordersCreated?: OrderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ActiveSessionWhereInput = {
    AND?: ActiveSessionWhereInput | ActiveSessionWhereInput[]
    OR?: ActiveSessionWhereInput[]
    NOT?: ActiveSessionWhereInput | ActiveSessionWhereInput[]
    id?: StringFilter<"ActiveSession"> | string
    userId?: StringFilter<"ActiveSession"> | string
    sessionId?: StringFilter<"ActiveSession"> | string
    ip?: StringNullableFilter<"ActiveSession"> | string | null
    userAgent?: StringNullableFilter<"ActiveSession"> | string | null
    createdAt?: DateTimeFilter<"ActiveSession"> | Date | string
    expiresAt?: DateTimeFilter<"ActiveSession"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ActiveSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActiveSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    sessionId?: string
    AND?: ActiveSessionWhereInput | ActiveSessionWhereInput[]
    OR?: ActiveSessionWhereInput[]
    NOT?: ActiveSessionWhereInput | ActiveSessionWhereInput[]
    ip?: StringNullableFilter<"ActiveSession"> | string | null
    userAgent?: StringNullableFilter<"ActiveSession"> | string | null
    createdAt?: DateTimeFilter<"ActiveSession"> | Date | string
    expiresAt?: DateTimeFilter<"ActiveSession"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId" | "sessionId">

  export type ActiveSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: ActiveSessionCountOrderByAggregateInput
    _max?: ActiveSessionMaxOrderByAggregateInput
    _min?: ActiveSessionMinOrderByAggregateInput
  }

  export type ActiveSessionScalarWhereWithAggregatesInput = {
    AND?: ActiveSessionScalarWhereWithAggregatesInput | ActiveSessionScalarWhereWithAggregatesInput[]
    OR?: ActiveSessionScalarWhereWithAggregatesInput[]
    NOT?: ActiveSessionScalarWhereWithAggregatesInput | ActiveSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActiveSession"> | string
    userId?: StringWithAggregatesFilter<"ActiveSession"> | string
    sessionId?: StringWithAggregatesFilter<"ActiveSession"> | string
    ip?: StringNullableWithAggregatesFilter<"ActiveSession"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ActiveSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ActiveSession"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"ActiveSession"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    ref?: StringFilter<"Order"> | string
    customerName?: StringFilter<"Order"> | string
    customerPhone?: StringNullableFilter<"Order"> | string | null
    items?: JsonFilter<"Order">
    subtotal?: FloatFilter<"Order"> | number
    total?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    paymentMethod?: EnumPaymentMethodNullableFilter<"Order"> | $Enums.PaymentMethod | null
    paymentStatus?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    source?: EnumOrderSourceFilter<"Order"> | $Enums.OrderSource
    notes?: StringNullableFilter<"Order"> | string | null
    createdById?: StringNullableFilter<"Order"> | string | null
    confirmedById?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    confirmedBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    ref?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrderInput | SortOrder
    items?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    source?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    confirmedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    confirmedBy?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ref?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    customerName?: StringFilter<"Order"> | string
    customerPhone?: StringNullableFilter<"Order"> | string | null
    items?: JsonFilter<"Order">
    subtotal?: FloatFilter<"Order"> | number
    total?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    paymentMethod?: EnumPaymentMethodNullableFilter<"Order"> | $Enums.PaymentMethod | null
    paymentStatus?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    source?: EnumOrderSourceFilter<"Order"> | $Enums.OrderSource
    notes?: StringNullableFilter<"Order"> | string | null
    createdById?: StringNullableFilter<"Order"> | string | null
    confirmedById?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    confirmedBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "ref">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    ref?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrderInput | SortOrder
    items?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    source?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    confirmedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    ref?: StringWithAggregatesFilter<"Order"> | string
    customerName?: StringWithAggregatesFilter<"Order"> | string
    customerPhone?: StringNullableWithAggregatesFilter<"Order"> | string | null
    items?: JsonWithAggregatesFilter<"Order">
    subtotal?: FloatWithAggregatesFilter<"Order"> | number
    total?: FloatWithAggregatesFilter<"Order"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    paymentMethod?: EnumPaymentMethodNullableWithAggregatesFilter<"Order"> | $Enums.PaymentMethod | null
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Order"> | $Enums.PaymentStatus
    source?: EnumOrderSourceWithAggregatesFilter<"Order"> | $Enums.OrderSource
    notes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdById?: StringNullableWithAggregatesFilter<"Order"> | string | null
    confirmedById?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    userName?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    meta?: JsonNullableFilter<"AuditLog">
    ip?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: StringNullableFilter<"AuditLog"> | string | null
    userName?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    meta?: JsonNullableFilter<"AuditLog">
    ip?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userName?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    meta?: JsonNullableWithAggregatesFilter<"AuditLog">
    ip?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type MenuCategoryWhereInput = {
    AND?: MenuCategoryWhereInput | MenuCategoryWhereInput[]
    OR?: MenuCategoryWhereInput[]
    NOT?: MenuCategoryWhereInput | MenuCategoryWhereInput[]
    id?: StringFilter<"MenuCategory"> | string
    name?: StringFilter<"MenuCategory"> | string
    slug?: StringFilter<"MenuCategory"> | string
    sortOrder?: IntFilter<"MenuCategory"> | number
    createdAt?: DateTimeFilter<"MenuCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MenuCategory"> | Date | string
    items?: MenuItemListRelationFilter
  }

  export type MenuCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: MenuItemOrderByRelationAggregateInput
  }

  export type MenuCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: MenuCategoryWhereInput | MenuCategoryWhereInput[]
    OR?: MenuCategoryWhereInput[]
    NOT?: MenuCategoryWhereInput | MenuCategoryWhereInput[]
    name?: StringFilter<"MenuCategory"> | string
    sortOrder?: IntFilter<"MenuCategory"> | number
    createdAt?: DateTimeFilter<"MenuCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MenuCategory"> | Date | string
    items?: MenuItemListRelationFilter
  }, "id" | "slug">

  export type MenuCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuCategoryCountOrderByAggregateInput
    _avg?: MenuCategoryAvgOrderByAggregateInput
    _max?: MenuCategoryMaxOrderByAggregateInput
    _min?: MenuCategoryMinOrderByAggregateInput
    _sum?: MenuCategorySumOrderByAggregateInput
  }

  export type MenuCategoryScalarWhereWithAggregatesInput = {
    AND?: MenuCategoryScalarWhereWithAggregatesInput | MenuCategoryScalarWhereWithAggregatesInput[]
    OR?: MenuCategoryScalarWhereWithAggregatesInput[]
    NOT?: MenuCategoryScalarWhereWithAggregatesInput | MenuCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MenuCategory"> | string
    name?: StringWithAggregatesFilter<"MenuCategory"> | string
    slug?: StringWithAggregatesFilter<"MenuCategory"> | string
    sortOrder?: IntWithAggregatesFilter<"MenuCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MenuCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuCategory"> | Date | string
  }

  export type MenuItemWhereInput = {
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    priceNGN?: FloatFilter<"MenuItem"> | number
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    isAvailable?: BoolFilter<"MenuItem"> | boolean
    isFeatured?: BoolFilter<"MenuItem"> | boolean
    isSpicy?: BoolFilter<"MenuItem"> | boolean
    tags?: StringNullableListFilter<"MenuItem">
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    categoryId?: StringFilter<"MenuItem"> | string
    slug?: StringFilter<"MenuItem"> | string
    sortOrder?: IntFilter<"MenuItem"> | number
    publicId?: StringNullableFilter<"MenuItem"> | string | null
    EventMenuSelection?: EventMenuSelectionListRelationFilter
    FoodPackOrderItem?: FoodPackOrderItemListRelationFilter
    category?: XOR<MenuCategoryRelationFilter, MenuCategoryWhereInput>
  }

  export type MenuItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    priceNGN?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    isFeatured?: SortOrder
    isSpicy?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    sortOrder?: SortOrder
    publicId?: SortOrderInput | SortOrder
    EventMenuSelection?: EventMenuSelectionOrderByRelationAggregateInput
    FoodPackOrderItem?: FoodPackOrderItemOrderByRelationAggregateInput
    category?: MenuCategoryOrderByWithRelationInput
  }

  export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug_categoryId?: MenuItemSlugCategoryIdCompoundUniqueInput
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    priceNGN?: FloatFilter<"MenuItem"> | number
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    isAvailable?: BoolFilter<"MenuItem"> | boolean
    isFeatured?: BoolFilter<"MenuItem"> | boolean
    isSpicy?: BoolFilter<"MenuItem"> | boolean
    tags?: StringNullableListFilter<"MenuItem">
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    categoryId?: StringFilter<"MenuItem"> | string
    slug?: StringFilter<"MenuItem"> | string
    sortOrder?: IntFilter<"MenuItem"> | number
    publicId?: StringNullableFilter<"MenuItem"> | string | null
    EventMenuSelection?: EventMenuSelectionListRelationFilter
    FoodPackOrderItem?: FoodPackOrderItemListRelationFilter
    category?: XOR<MenuCategoryRelationFilter, MenuCategoryWhereInput>
  }, "id" | "slug_categoryId">

  export type MenuItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    priceNGN?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    isFeatured?: SortOrder
    isSpicy?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    sortOrder?: SortOrder
    publicId?: SortOrderInput | SortOrder
    _count?: MenuItemCountOrderByAggregateInput
    _avg?: MenuItemAvgOrderByAggregateInput
    _max?: MenuItemMaxOrderByAggregateInput
    _min?: MenuItemMinOrderByAggregateInput
    _sum?: MenuItemSumOrderByAggregateInput
  }

  export type MenuItemScalarWhereWithAggregatesInput = {
    AND?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    OR?: MenuItemScalarWhereWithAggregatesInput[]
    NOT?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MenuItem"> | string
    name?: StringWithAggregatesFilter<"MenuItem"> | string
    description?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    priceNGN?: FloatWithAggregatesFilter<"MenuItem"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    isAvailable?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    isFeatured?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    isSpicy?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    tags?: StringNullableListFilter<"MenuItem">
    createdAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
    categoryId?: StringWithAggregatesFilter<"MenuItem"> | string
    slug?: StringWithAggregatesFilter<"MenuItem"> | string
    sortOrder?: IntWithAggregatesFilter<"MenuItem"> | number
    publicId?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
  }

  export type FoodPackOrderWhereInput = {
    AND?: FoodPackOrderWhereInput | FoodPackOrderWhereInput[]
    OR?: FoodPackOrderWhereInput[]
    NOT?: FoodPackOrderWhereInput | FoodPackOrderWhereInput[]
    id?: StringFilter<"FoodPackOrder"> | string
    orderNumber?: StringFilter<"FoodPackOrder"> | string
    status?: EnumFoodPackStatusFilter<"FoodPackOrder"> | $Enums.FoodPackStatus
    customerName?: StringFilter<"FoodPackOrder"> | string
    customerPhone?: StringFilter<"FoodPackOrder"> | string
    customerEmail?: StringNullableFilter<"FoodPackOrder"> | string | null
    deliveryMethod?: EnumDeliveryMethodFilter<"FoodPackOrder"> | $Enums.DeliveryMethod
    deliveryAddress?: StringNullableFilter<"FoodPackOrder"> | string | null
    deliveryDate?: DateTimeNullableFilter<"FoodPackOrder"> | Date | string | null
    specialNotes?: StringNullableFilter<"FoodPackOrder"> | string | null
    totalAmountNGN?: FloatFilter<"FoodPackOrder"> | number
    isPaid?: BoolFilter<"FoodPackOrder"> | boolean
    createdAt?: DateTimeFilter<"FoodPackOrder"> | Date | string
    updatedAt?: DateTimeFilter<"FoodPackOrder"> | Date | string
    items?: FoodPackOrderItemListRelationFilter
  }

  export type FoodPackOrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerEmail?: SortOrderInput | SortOrder
    deliveryMethod?: SortOrder
    deliveryAddress?: SortOrderInput | SortOrder
    deliveryDate?: SortOrderInput | SortOrder
    specialNotes?: SortOrderInput | SortOrder
    totalAmountNGN?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: FoodPackOrderItemOrderByRelationAggregateInput
  }

  export type FoodPackOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: FoodPackOrderWhereInput | FoodPackOrderWhereInput[]
    OR?: FoodPackOrderWhereInput[]
    NOT?: FoodPackOrderWhereInput | FoodPackOrderWhereInput[]
    status?: EnumFoodPackStatusFilter<"FoodPackOrder"> | $Enums.FoodPackStatus
    customerName?: StringFilter<"FoodPackOrder"> | string
    customerPhone?: StringFilter<"FoodPackOrder"> | string
    customerEmail?: StringNullableFilter<"FoodPackOrder"> | string | null
    deliveryMethod?: EnumDeliveryMethodFilter<"FoodPackOrder"> | $Enums.DeliveryMethod
    deliveryAddress?: StringNullableFilter<"FoodPackOrder"> | string | null
    deliveryDate?: DateTimeNullableFilter<"FoodPackOrder"> | Date | string | null
    specialNotes?: StringNullableFilter<"FoodPackOrder"> | string | null
    totalAmountNGN?: FloatFilter<"FoodPackOrder"> | number
    isPaid?: BoolFilter<"FoodPackOrder"> | boolean
    createdAt?: DateTimeFilter<"FoodPackOrder"> | Date | string
    updatedAt?: DateTimeFilter<"FoodPackOrder"> | Date | string
    items?: FoodPackOrderItemListRelationFilter
  }, "id" | "orderNumber">

  export type FoodPackOrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerEmail?: SortOrderInput | SortOrder
    deliveryMethod?: SortOrder
    deliveryAddress?: SortOrderInput | SortOrder
    deliveryDate?: SortOrderInput | SortOrder
    specialNotes?: SortOrderInput | SortOrder
    totalAmountNGN?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodPackOrderCountOrderByAggregateInput
    _avg?: FoodPackOrderAvgOrderByAggregateInput
    _max?: FoodPackOrderMaxOrderByAggregateInput
    _min?: FoodPackOrderMinOrderByAggregateInput
    _sum?: FoodPackOrderSumOrderByAggregateInput
  }

  export type FoodPackOrderScalarWhereWithAggregatesInput = {
    AND?: FoodPackOrderScalarWhereWithAggregatesInput | FoodPackOrderScalarWhereWithAggregatesInput[]
    OR?: FoodPackOrderScalarWhereWithAggregatesInput[]
    NOT?: FoodPackOrderScalarWhereWithAggregatesInput | FoodPackOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FoodPackOrder"> | string
    orderNumber?: StringWithAggregatesFilter<"FoodPackOrder"> | string
    status?: EnumFoodPackStatusWithAggregatesFilter<"FoodPackOrder"> | $Enums.FoodPackStatus
    customerName?: StringWithAggregatesFilter<"FoodPackOrder"> | string
    customerPhone?: StringWithAggregatesFilter<"FoodPackOrder"> | string
    customerEmail?: StringNullableWithAggregatesFilter<"FoodPackOrder"> | string | null
    deliveryMethod?: EnumDeliveryMethodWithAggregatesFilter<"FoodPackOrder"> | $Enums.DeliveryMethod
    deliveryAddress?: StringNullableWithAggregatesFilter<"FoodPackOrder"> | string | null
    deliveryDate?: DateTimeNullableWithAggregatesFilter<"FoodPackOrder"> | Date | string | null
    specialNotes?: StringNullableWithAggregatesFilter<"FoodPackOrder"> | string | null
    totalAmountNGN?: FloatWithAggregatesFilter<"FoodPackOrder"> | number
    isPaid?: BoolWithAggregatesFilter<"FoodPackOrder"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FoodPackOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FoodPackOrder"> | Date | string
  }

  export type FoodPackOrderItemWhereInput = {
    AND?: FoodPackOrderItemWhereInput | FoodPackOrderItemWhereInput[]
    OR?: FoodPackOrderItemWhereInput[]
    NOT?: FoodPackOrderItemWhereInput | FoodPackOrderItemWhereInput[]
    id?: StringFilter<"FoodPackOrderItem"> | string
    quantity?: IntFilter<"FoodPackOrderItem"> | number
    unitPrice?: FloatFilter<"FoodPackOrderItem"> | number
    totalPrice?: FloatFilter<"FoodPackOrderItem"> | number
    orderId?: StringFilter<"FoodPackOrderItem"> | string
    menuItemId?: StringFilter<"FoodPackOrderItem"> | string
    menuItem?: XOR<MenuItemRelationFilter, MenuItemWhereInput>
    order?: XOR<FoodPackOrderRelationFilter, FoodPackOrderWhereInput>
  }

  export type FoodPackOrderItemOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    menuItem?: MenuItemOrderByWithRelationInput
    order?: FoodPackOrderOrderByWithRelationInput
  }

  export type FoodPackOrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoodPackOrderItemWhereInput | FoodPackOrderItemWhereInput[]
    OR?: FoodPackOrderItemWhereInput[]
    NOT?: FoodPackOrderItemWhereInput | FoodPackOrderItemWhereInput[]
    quantity?: IntFilter<"FoodPackOrderItem"> | number
    unitPrice?: FloatFilter<"FoodPackOrderItem"> | number
    totalPrice?: FloatFilter<"FoodPackOrderItem"> | number
    orderId?: StringFilter<"FoodPackOrderItem"> | string
    menuItemId?: StringFilter<"FoodPackOrderItem"> | string
    menuItem?: XOR<MenuItemRelationFilter, MenuItemWhereInput>
    order?: XOR<FoodPackOrderRelationFilter, FoodPackOrderWhereInput>
  }, "id">

  export type FoodPackOrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    _count?: FoodPackOrderItemCountOrderByAggregateInput
    _avg?: FoodPackOrderItemAvgOrderByAggregateInput
    _max?: FoodPackOrderItemMaxOrderByAggregateInput
    _min?: FoodPackOrderItemMinOrderByAggregateInput
    _sum?: FoodPackOrderItemSumOrderByAggregateInput
  }

  export type FoodPackOrderItemScalarWhereWithAggregatesInput = {
    AND?: FoodPackOrderItemScalarWhereWithAggregatesInput | FoodPackOrderItemScalarWhereWithAggregatesInput[]
    OR?: FoodPackOrderItemScalarWhereWithAggregatesInput[]
    NOT?: FoodPackOrderItemScalarWhereWithAggregatesInput | FoodPackOrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FoodPackOrderItem"> | string
    quantity?: IntWithAggregatesFilter<"FoodPackOrderItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"FoodPackOrderItem"> | number
    totalPrice?: FloatWithAggregatesFilter<"FoodPackOrderItem"> | number
    orderId?: StringWithAggregatesFilter<"FoodPackOrderItem"> | string
    menuItemId?: StringWithAggregatesFilter<"FoodPackOrderItem"> | string
  }

  export type EventOrderWhereInput = {
    AND?: EventOrderWhereInput | EventOrderWhereInput[]
    OR?: EventOrderWhereInput[]
    NOT?: EventOrderWhereInput | EventOrderWhereInput[]
    id?: StringFilter<"EventOrder"> | string
    orderRef?: StringFilter<"EventOrder"> | string
    clientName?: StringFilter<"EventOrder"> | string
    clientPhone?: StringFilter<"EventOrder"> | string
    clientEmail?: StringNullableFilter<"EventOrder"> | string | null
    clientWhatsApp?: StringNullableFilter<"EventOrder"> | string | null
    eventType?: EnumEventTypeFilter<"EventOrder"> | $Enums.EventType
    eventDate?: DateTimeFilter<"EventOrder"> | Date | string
    eventTime?: StringNullableFilter<"EventOrder"> | string | null
    guestCount?: IntFilter<"EventOrder"> | number
    venueType?: EnumVenueTypeFilter<"EventOrder"> | $Enums.VenueType
    venueAddress?: StringNullableFilter<"EventOrder"> | string | null
    venueLGA?: StringNullableFilter<"EventOrder"> | string | null
    serviceType?: EnumServiceTypeFilter<"EventOrder"> | $Enums.ServiceType
    status?: EnumEventStatusFilter<"EventOrder"> | $Enums.EventStatus
    dietaryNotes?: StringNullableFilter<"EventOrder"> | string | null
    specialRequests?: StringNullableFilter<"EventOrder"> | string | null
    perHeadRateNGN?: FloatNullableFilter<"EventOrder"> | number | null
    subtotalNGN?: FloatNullableFilter<"EventOrder"> | number | null
    deliveryFeeNGN?: FloatFilter<"EventOrder"> | number
    setupFeeNGN?: FloatFilter<"EventOrder"> | number
    discountNGN?: FloatFilter<"EventOrder"> | number
    totalNGN?: FloatNullableFilter<"EventOrder"> | number | null
    paymentStatus?: EnumPaymentStatusFilter<"EventOrder"> | $Enums.PaymentStatus
    depositAmtNGN?: FloatNullableFilter<"EventOrder"> | number | null
    depositPaidAt?: DateTimeNullableFilter<"EventOrder"> | Date | string | null
    balanceDueNGN?: FloatNullableFilter<"EventOrder"> | number | null
    balancePaidAt?: DateTimeNullableFilter<"EventOrder"> | Date | string | null
    setupTime?: StringNullableFilter<"EventOrder"> | string | null
    servingStaffCount?: IntFilter<"EventOrder"> | number
    cleanupIncluded?: BoolFilter<"EventOrder"> | boolean
    equipmentList?: StringNullableListFilter<"EventOrder">
    internalNotes?: StringNullableFilter<"EventOrder"> | string | null
    quoteSentAt?: DateTimeNullableFilter<"EventOrder"> | Date | string | null
    confirmedAt?: DateTimeNullableFilter<"EventOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"EventOrder"> | Date | string
    updatedAt?: DateTimeFilter<"EventOrder"> | Date | string
    serviceFeeNGN?: FloatFilter<"EventOrder"> | number
    transportFeeNGN?: FloatFilter<"EventOrder"> | number
    menuSelections?: EventMenuSelectionListRelationFilter
    payments?: EventPaymentListRelationFilter
  }

  export type EventOrderOrderByWithRelationInput = {
    id?: SortOrder
    orderRef?: SortOrder
    clientName?: SortOrder
    clientPhone?: SortOrder
    clientEmail?: SortOrderInput | SortOrder
    clientWhatsApp?: SortOrderInput | SortOrder
    eventType?: SortOrder
    eventDate?: SortOrder
    eventTime?: SortOrderInput | SortOrder
    guestCount?: SortOrder
    venueType?: SortOrder
    venueAddress?: SortOrderInput | SortOrder
    venueLGA?: SortOrderInput | SortOrder
    serviceType?: SortOrder
    status?: SortOrder
    dietaryNotes?: SortOrderInput | SortOrder
    specialRequests?: SortOrderInput | SortOrder
    perHeadRateNGN?: SortOrderInput | SortOrder
    subtotalNGN?: SortOrderInput | SortOrder
    deliveryFeeNGN?: SortOrder
    setupFeeNGN?: SortOrder
    discountNGN?: SortOrder
    totalNGN?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    depositAmtNGN?: SortOrderInput | SortOrder
    depositPaidAt?: SortOrderInput | SortOrder
    balanceDueNGN?: SortOrderInput | SortOrder
    balancePaidAt?: SortOrderInput | SortOrder
    setupTime?: SortOrderInput | SortOrder
    servingStaffCount?: SortOrder
    cleanupIncluded?: SortOrder
    equipmentList?: SortOrder
    internalNotes?: SortOrderInput | SortOrder
    quoteSentAt?: SortOrderInput | SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    serviceFeeNGN?: SortOrder
    transportFeeNGN?: SortOrder
    menuSelections?: EventMenuSelectionOrderByRelationAggregateInput
    payments?: EventPaymentOrderByRelationAggregateInput
  }

  export type EventOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderRef?: string
    AND?: EventOrderWhereInput | EventOrderWhereInput[]
    OR?: EventOrderWhereInput[]
    NOT?: EventOrderWhereInput | EventOrderWhereInput[]
    clientName?: StringFilter<"EventOrder"> | string
    clientPhone?: StringFilter<"EventOrder"> | string
    clientEmail?: StringNullableFilter<"EventOrder"> | string | null
    clientWhatsApp?: StringNullableFilter<"EventOrder"> | string | null
    eventType?: EnumEventTypeFilter<"EventOrder"> | $Enums.EventType
    eventDate?: DateTimeFilter<"EventOrder"> | Date | string
    eventTime?: StringNullableFilter<"EventOrder"> | string | null
    guestCount?: IntFilter<"EventOrder"> | number
    venueType?: EnumVenueTypeFilter<"EventOrder"> | $Enums.VenueType
    venueAddress?: StringNullableFilter<"EventOrder"> | string | null
    venueLGA?: StringNullableFilter<"EventOrder"> | string | null
    serviceType?: EnumServiceTypeFilter<"EventOrder"> | $Enums.ServiceType
    status?: EnumEventStatusFilter<"EventOrder"> | $Enums.EventStatus
    dietaryNotes?: StringNullableFilter<"EventOrder"> | string | null
    specialRequests?: StringNullableFilter<"EventOrder"> | string | null
    perHeadRateNGN?: FloatNullableFilter<"EventOrder"> | number | null
    subtotalNGN?: FloatNullableFilter<"EventOrder"> | number | null
    deliveryFeeNGN?: FloatFilter<"EventOrder"> | number
    setupFeeNGN?: FloatFilter<"EventOrder"> | number
    discountNGN?: FloatFilter<"EventOrder"> | number
    totalNGN?: FloatNullableFilter<"EventOrder"> | number | null
    paymentStatus?: EnumPaymentStatusFilter<"EventOrder"> | $Enums.PaymentStatus
    depositAmtNGN?: FloatNullableFilter<"EventOrder"> | number | null
    depositPaidAt?: DateTimeNullableFilter<"EventOrder"> | Date | string | null
    balanceDueNGN?: FloatNullableFilter<"EventOrder"> | number | null
    balancePaidAt?: DateTimeNullableFilter<"EventOrder"> | Date | string | null
    setupTime?: StringNullableFilter<"EventOrder"> | string | null
    servingStaffCount?: IntFilter<"EventOrder"> | number
    cleanupIncluded?: BoolFilter<"EventOrder"> | boolean
    equipmentList?: StringNullableListFilter<"EventOrder">
    internalNotes?: StringNullableFilter<"EventOrder"> | string | null
    quoteSentAt?: DateTimeNullableFilter<"EventOrder"> | Date | string | null
    confirmedAt?: DateTimeNullableFilter<"EventOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"EventOrder"> | Date | string
    updatedAt?: DateTimeFilter<"EventOrder"> | Date | string
    serviceFeeNGN?: FloatFilter<"EventOrder"> | number
    transportFeeNGN?: FloatFilter<"EventOrder"> | number
    menuSelections?: EventMenuSelectionListRelationFilter
    payments?: EventPaymentListRelationFilter
  }, "id" | "orderRef">

  export type EventOrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderRef?: SortOrder
    clientName?: SortOrder
    clientPhone?: SortOrder
    clientEmail?: SortOrderInput | SortOrder
    clientWhatsApp?: SortOrderInput | SortOrder
    eventType?: SortOrder
    eventDate?: SortOrder
    eventTime?: SortOrderInput | SortOrder
    guestCount?: SortOrder
    venueType?: SortOrder
    venueAddress?: SortOrderInput | SortOrder
    venueLGA?: SortOrderInput | SortOrder
    serviceType?: SortOrder
    status?: SortOrder
    dietaryNotes?: SortOrderInput | SortOrder
    specialRequests?: SortOrderInput | SortOrder
    perHeadRateNGN?: SortOrderInput | SortOrder
    subtotalNGN?: SortOrderInput | SortOrder
    deliveryFeeNGN?: SortOrder
    setupFeeNGN?: SortOrder
    discountNGN?: SortOrder
    totalNGN?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    depositAmtNGN?: SortOrderInput | SortOrder
    depositPaidAt?: SortOrderInput | SortOrder
    balanceDueNGN?: SortOrderInput | SortOrder
    balancePaidAt?: SortOrderInput | SortOrder
    setupTime?: SortOrderInput | SortOrder
    servingStaffCount?: SortOrder
    cleanupIncluded?: SortOrder
    equipmentList?: SortOrder
    internalNotes?: SortOrderInput | SortOrder
    quoteSentAt?: SortOrderInput | SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    serviceFeeNGN?: SortOrder
    transportFeeNGN?: SortOrder
    _count?: EventOrderCountOrderByAggregateInput
    _avg?: EventOrderAvgOrderByAggregateInput
    _max?: EventOrderMaxOrderByAggregateInput
    _min?: EventOrderMinOrderByAggregateInput
    _sum?: EventOrderSumOrderByAggregateInput
  }

  export type EventOrderScalarWhereWithAggregatesInput = {
    AND?: EventOrderScalarWhereWithAggregatesInput | EventOrderScalarWhereWithAggregatesInput[]
    OR?: EventOrderScalarWhereWithAggregatesInput[]
    NOT?: EventOrderScalarWhereWithAggregatesInput | EventOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventOrder"> | string
    orderRef?: StringWithAggregatesFilter<"EventOrder"> | string
    clientName?: StringWithAggregatesFilter<"EventOrder"> | string
    clientPhone?: StringWithAggregatesFilter<"EventOrder"> | string
    clientEmail?: StringNullableWithAggregatesFilter<"EventOrder"> | string | null
    clientWhatsApp?: StringNullableWithAggregatesFilter<"EventOrder"> | string | null
    eventType?: EnumEventTypeWithAggregatesFilter<"EventOrder"> | $Enums.EventType
    eventDate?: DateTimeWithAggregatesFilter<"EventOrder"> | Date | string
    eventTime?: StringNullableWithAggregatesFilter<"EventOrder"> | string | null
    guestCount?: IntWithAggregatesFilter<"EventOrder"> | number
    venueType?: EnumVenueTypeWithAggregatesFilter<"EventOrder"> | $Enums.VenueType
    venueAddress?: StringNullableWithAggregatesFilter<"EventOrder"> | string | null
    venueLGA?: StringNullableWithAggregatesFilter<"EventOrder"> | string | null
    serviceType?: EnumServiceTypeWithAggregatesFilter<"EventOrder"> | $Enums.ServiceType
    status?: EnumEventStatusWithAggregatesFilter<"EventOrder"> | $Enums.EventStatus
    dietaryNotes?: StringNullableWithAggregatesFilter<"EventOrder"> | string | null
    specialRequests?: StringNullableWithAggregatesFilter<"EventOrder"> | string | null
    perHeadRateNGN?: FloatNullableWithAggregatesFilter<"EventOrder"> | number | null
    subtotalNGN?: FloatNullableWithAggregatesFilter<"EventOrder"> | number | null
    deliveryFeeNGN?: FloatWithAggregatesFilter<"EventOrder"> | number
    setupFeeNGN?: FloatWithAggregatesFilter<"EventOrder"> | number
    discountNGN?: FloatWithAggregatesFilter<"EventOrder"> | number
    totalNGN?: FloatNullableWithAggregatesFilter<"EventOrder"> | number | null
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"EventOrder"> | $Enums.PaymentStatus
    depositAmtNGN?: FloatNullableWithAggregatesFilter<"EventOrder"> | number | null
    depositPaidAt?: DateTimeNullableWithAggregatesFilter<"EventOrder"> | Date | string | null
    balanceDueNGN?: FloatNullableWithAggregatesFilter<"EventOrder"> | number | null
    balancePaidAt?: DateTimeNullableWithAggregatesFilter<"EventOrder"> | Date | string | null
    setupTime?: StringNullableWithAggregatesFilter<"EventOrder"> | string | null
    servingStaffCount?: IntWithAggregatesFilter<"EventOrder"> | number
    cleanupIncluded?: BoolWithAggregatesFilter<"EventOrder"> | boolean
    equipmentList?: StringNullableListFilter<"EventOrder">
    internalNotes?: StringNullableWithAggregatesFilter<"EventOrder"> | string | null
    quoteSentAt?: DateTimeNullableWithAggregatesFilter<"EventOrder"> | Date | string | null
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"EventOrder"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EventOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventOrder"> | Date | string
    serviceFeeNGN?: FloatWithAggregatesFilter<"EventOrder"> | number
    transportFeeNGN?: FloatWithAggregatesFilter<"EventOrder"> | number
  }

  export type EventMenuSelectionWhereInput = {
    AND?: EventMenuSelectionWhereInput | EventMenuSelectionWhereInput[]
    OR?: EventMenuSelectionWhereInput[]
    NOT?: EventMenuSelectionWhereInput | EventMenuSelectionWhereInput[]
    id?: StringFilter<"EventMenuSelection"> | string
    menuItemId?: StringFilter<"EventMenuSelection"> | string
    quantity?: IntFilter<"EventMenuSelection"> | number
    unitPrice?: IntFilter<"EventMenuSelection"> | number
    totalPrice?: IntFilter<"EventMenuSelection"> | number
    notes?: StringNullableFilter<"EventMenuSelection"> | string | null
    eventOrderId?: StringFilter<"EventMenuSelection"> | string
    eventOrder?: XOR<EventOrderRelationFilter, EventOrderWhereInput>
    menuItem?: XOR<MenuItemRelationFilter, MenuItemWhereInput>
  }

  export type EventMenuSelectionOrderByWithRelationInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    notes?: SortOrderInput | SortOrder
    eventOrderId?: SortOrder
    eventOrder?: EventOrderOrderByWithRelationInput
    menuItem?: MenuItemOrderByWithRelationInput
  }

  export type EventMenuSelectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventOrderId_menuItemId?: EventMenuSelectionEventOrderIdMenuItemIdCompoundUniqueInput
    AND?: EventMenuSelectionWhereInput | EventMenuSelectionWhereInput[]
    OR?: EventMenuSelectionWhereInput[]
    NOT?: EventMenuSelectionWhereInput | EventMenuSelectionWhereInput[]
    menuItemId?: StringFilter<"EventMenuSelection"> | string
    quantity?: IntFilter<"EventMenuSelection"> | number
    unitPrice?: IntFilter<"EventMenuSelection"> | number
    totalPrice?: IntFilter<"EventMenuSelection"> | number
    notes?: StringNullableFilter<"EventMenuSelection"> | string | null
    eventOrderId?: StringFilter<"EventMenuSelection"> | string
    eventOrder?: XOR<EventOrderRelationFilter, EventOrderWhereInput>
    menuItem?: XOR<MenuItemRelationFilter, MenuItemWhereInput>
  }, "id" | "eventOrderId_menuItemId">

  export type EventMenuSelectionOrderByWithAggregationInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    notes?: SortOrderInput | SortOrder
    eventOrderId?: SortOrder
    _count?: EventMenuSelectionCountOrderByAggregateInput
    _avg?: EventMenuSelectionAvgOrderByAggregateInput
    _max?: EventMenuSelectionMaxOrderByAggregateInput
    _min?: EventMenuSelectionMinOrderByAggregateInput
    _sum?: EventMenuSelectionSumOrderByAggregateInput
  }

  export type EventMenuSelectionScalarWhereWithAggregatesInput = {
    AND?: EventMenuSelectionScalarWhereWithAggregatesInput | EventMenuSelectionScalarWhereWithAggregatesInput[]
    OR?: EventMenuSelectionScalarWhereWithAggregatesInput[]
    NOT?: EventMenuSelectionScalarWhereWithAggregatesInput | EventMenuSelectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventMenuSelection"> | string
    menuItemId?: StringWithAggregatesFilter<"EventMenuSelection"> | string
    quantity?: IntWithAggregatesFilter<"EventMenuSelection"> | number
    unitPrice?: IntWithAggregatesFilter<"EventMenuSelection"> | number
    totalPrice?: IntWithAggregatesFilter<"EventMenuSelection"> | number
    notes?: StringNullableWithAggregatesFilter<"EventMenuSelection"> | string | null
    eventOrderId?: StringWithAggregatesFilter<"EventMenuSelection"> | string
  }

  export type EventMenuCategoryWhereInput = {
    AND?: EventMenuCategoryWhereInput | EventMenuCategoryWhereInput[]
    OR?: EventMenuCategoryWhereInput[]
    NOT?: EventMenuCategoryWhereInput | EventMenuCategoryWhereInput[]
    id?: StringFilter<"EventMenuCategory"> | string
    name?: StringFilter<"EventMenuCategory"> | string
    description?: StringNullableFilter<"EventMenuCategory"> | string | null
    required?: BoolFilter<"EventMenuCategory"> | boolean
    minChoices?: IntFilter<"EventMenuCategory"> | number
    maxChoices?: IntFilter<"EventMenuCategory"> | number
    sortOrder?: IntFilter<"EventMenuCategory"> | number
    isActive?: BoolFilter<"EventMenuCategory"> | boolean
    createdAt?: DateTimeFilter<"EventMenuCategory"> | Date | string
    updatedAt?: DateTimeFilter<"EventMenuCategory"> | Date | string
    options?: EventMenuOptionListRelationFilter
  }

  export type EventMenuCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    required?: SortOrder
    minChoices?: SortOrder
    maxChoices?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    options?: EventMenuOptionOrderByRelationAggregateInput
  }

  export type EventMenuCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventMenuCategoryWhereInput | EventMenuCategoryWhereInput[]
    OR?: EventMenuCategoryWhereInput[]
    NOT?: EventMenuCategoryWhereInput | EventMenuCategoryWhereInput[]
    name?: StringFilter<"EventMenuCategory"> | string
    description?: StringNullableFilter<"EventMenuCategory"> | string | null
    required?: BoolFilter<"EventMenuCategory"> | boolean
    minChoices?: IntFilter<"EventMenuCategory"> | number
    maxChoices?: IntFilter<"EventMenuCategory"> | number
    sortOrder?: IntFilter<"EventMenuCategory"> | number
    isActive?: BoolFilter<"EventMenuCategory"> | boolean
    createdAt?: DateTimeFilter<"EventMenuCategory"> | Date | string
    updatedAt?: DateTimeFilter<"EventMenuCategory"> | Date | string
    options?: EventMenuOptionListRelationFilter
  }, "id">

  export type EventMenuCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    required?: SortOrder
    minChoices?: SortOrder
    maxChoices?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventMenuCategoryCountOrderByAggregateInput
    _avg?: EventMenuCategoryAvgOrderByAggregateInput
    _max?: EventMenuCategoryMaxOrderByAggregateInput
    _min?: EventMenuCategoryMinOrderByAggregateInput
    _sum?: EventMenuCategorySumOrderByAggregateInput
  }

  export type EventMenuCategoryScalarWhereWithAggregatesInput = {
    AND?: EventMenuCategoryScalarWhereWithAggregatesInput | EventMenuCategoryScalarWhereWithAggregatesInput[]
    OR?: EventMenuCategoryScalarWhereWithAggregatesInput[]
    NOT?: EventMenuCategoryScalarWhereWithAggregatesInput | EventMenuCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventMenuCategory"> | string
    name?: StringWithAggregatesFilter<"EventMenuCategory"> | string
    description?: StringNullableWithAggregatesFilter<"EventMenuCategory"> | string | null
    required?: BoolWithAggregatesFilter<"EventMenuCategory"> | boolean
    minChoices?: IntWithAggregatesFilter<"EventMenuCategory"> | number
    maxChoices?: IntWithAggregatesFilter<"EventMenuCategory"> | number
    sortOrder?: IntWithAggregatesFilter<"EventMenuCategory"> | number
    isActive?: BoolWithAggregatesFilter<"EventMenuCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EventMenuCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventMenuCategory"> | Date | string
  }

  export type EventMenuOptionWhereInput = {
    AND?: EventMenuOptionWhereInput | EventMenuOptionWhereInput[]
    OR?: EventMenuOptionWhereInput[]
    NOT?: EventMenuOptionWhereInput | EventMenuOptionWhereInput[]
    id?: StringFilter<"EventMenuOption"> | string
    name?: StringFilter<"EventMenuOption"> | string
    description?: StringNullableFilter<"EventMenuOption"> | string | null
    pricePerPlate?: FloatFilter<"EventMenuOption"> | number
    includedInBase?: BoolFilter<"EventMenuOption"> | boolean
    isActive?: BoolFilter<"EventMenuOption"> | boolean
    sortOrder?: IntFilter<"EventMenuOption"> | number
    categoryId?: StringFilter<"EventMenuOption"> | string
    createdAt?: DateTimeFilter<"EventMenuOption"> | Date | string
    updatedAt?: DateTimeFilter<"EventMenuOption"> | Date | string
    category?: XOR<EventMenuCategoryRelationFilter, EventMenuCategoryWhereInput>
  }

  export type EventMenuOptionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    pricePerPlate?: SortOrder
    includedInBase?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: EventMenuCategoryOrderByWithRelationInput
  }

  export type EventMenuOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventMenuOptionWhereInput | EventMenuOptionWhereInput[]
    OR?: EventMenuOptionWhereInput[]
    NOT?: EventMenuOptionWhereInput | EventMenuOptionWhereInput[]
    name?: StringFilter<"EventMenuOption"> | string
    description?: StringNullableFilter<"EventMenuOption"> | string | null
    pricePerPlate?: FloatFilter<"EventMenuOption"> | number
    includedInBase?: BoolFilter<"EventMenuOption"> | boolean
    isActive?: BoolFilter<"EventMenuOption"> | boolean
    sortOrder?: IntFilter<"EventMenuOption"> | number
    categoryId?: StringFilter<"EventMenuOption"> | string
    createdAt?: DateTimeFilter<"EventMenuOption"> | Date | string
    updatedAt?: DateTimeFilter<"EventMenuOption"> | Date | string
    category?: XOR<EventMenuCategoryRelationFilter, EventMenuCategoryWhereInput>
  }, "id">

  export type EventMenuOptionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    pricePerPlate?: SortOrder
    includedInBase?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventMenuOptionCountOrderByAggregateInput
    _avg?: EventMenuOptionAvgOrderByAggregateInput
    _max?: EventMenuOptionMaxOrderByAggregateInput
    _min?: EventMenuOptionMinOrderByAggregateInput
    _sum?: EventMenuOptionSumOrderByAggregateInput
  }

  export type EventMenuOptionScalarWhereWithAggregatesInput = {
    AND?: EventMenuOptionScalarWhereWithAggregatesInput | EventMenuOptionScalarWhereWithAggregatesInput[]
    OR?: EventMenuOptionScalarWhereWithAggregatesInput[]
    NOT?: EventMenuOptionScalarWhereWithAggregatesInput | EventMenuOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventMenuOption"> | string
    name?: StringWithAggregatesFilter<"EventMenuOption"> | string
    description?: StringNullableWithAggregatesFilter<"EventMenuOption"> | string | null
    pricePerPlate?: FloatWithAggregatesFilter<"EventMenuOption"> | number
    includedInBase?: BoolWithAggregatesFilter<"EventMenuOption"> | boolean
    isActive?: BoolWithAggregatesFilter<"EventMenuOption"> | boolean
    sortOrder?: IntWithAggregatesFilter<"EventMenuOption"> | number
    categoryId?: StringWithAggregatesFilter<"EventMenuOption"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventMenuOption"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventMenuOption"> | Date | string
  }

  export type EventPaymentWhereInput = {
    AND?: EventPaymentWhereInput | EventPaymentWhereInput[]
    OR?: EventPaymentWhereInput[]
    NOT?: EventPaymentWhereInput | EventPaymentWhereInput[]
    id?: StringFilter<"EventPayment"> | string
    amountNGN?: FloatFilter<"EventPayment"> | number
    paymentMethod?: StringFilter<"EventPayment"> | string
    status?: EnumPaymentStatusFilter<"EventPayment"> | $Enums.PaymentStatus
    reference?: StringNullableFilter<"EventPayment"> | string | null
    paidAt?: DateTimeFilter<"EventPayment"> | Date | string
    note?: StringNullableFilter<"EventPayment"> | string | null
    eventOrderId?: StringFilter<"EventPayment"> | string
    eventOrder?: XOR<EventOrderRelationFilter, EventOrderWhereInput>
  }

  export type EventPaymentOrderByWithRelationInput = {
    id?: SortOrder
    amountNGN?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    reference?: SortOrderInput | SortOrder
    paidAt?: SortOrder
    note?: SortOrderInput | SortOrder
    eventOrderId?: SortOrder
    eventOrder?: EventOrderOrderByWithRelationInput
  }

  export type EventPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventPaymentWhereInput | EventPaymentWhereInput[]
    OR?: EventPaymentWhereInput[]
    NOT?: EventPaymentWhereInput | EventPaymentWhereInput[]
    amountNGN?: FloatFilter<"EventPayment"> | number
    paymentMethod?: StringFilter<"EventPayment"> | string
    status?: EnumPaymentStatusFilter<"EventPayment"> | $Enums.PaymentStatus
    reference?: StringNullableFilter<"EventPayment"> | string | null
    paidAt?: DateTimeFilter<"EventPayment"> | Date | string
    note?: StringNullableFilter<"EventPayment"> | string | null
    eventOrderId?: StringFilter<"EventPayment"> | string
    eventOrder?: XOR<EventOrderRelationFilter, EventOrderWhereInput>
  }, "id">

  export type EventPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amountNGN?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    reference?: SortOrderInput | SortOrder
    paidAt?: SortOrder
    note?: SortOrderInput | SortOrder
    eventOrderId?: SortOrder
    _count?: EventPaymentCountOrderByAggregateInput
    _avg?: EventPaymentAvgOrderByAggregateInput
    _max?: EventPaymentMaxOrderByAggregateInput
    _min?: EventPaymentMinOrderByAggregateInput
    _sum?: EventPaymentSumOrderByAggregateInput
  }

  export type EventPaymentScalarWhereWithAggregatesInput = {
    AND?: EventPaymentScalarWhereWithAggregatesInput | EventPaymentScalarWhereWithAggregatesInput[]
    OR?: EventPaymentScalarWhereWithAggregatesInput[]
    NOT?: EventPaymentScalarWhereWithAggregatesInput | EventPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventPayment"> | string
    amountNGN?: FloatWithAggregatesFilter<"EventPayment"> | number
    paymentMethod?: StringWithAggregatesFilter<"EventPayment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"EventPayment"> | $Enums.PaymentStatus
    reference?: StringNullableWithAggregatesFilter<"EventPayment"> | string | null
    paidAt?: DateTimeWithAggregatesFilter<"EventPayment"> | Date | string
    note?: StringNullableWithAggregatesFilter<"EventPayment"> | string | null
    eventOrderId?: StringWithAggregatesFilter<"EventPayment"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeSession?: ActiveSessionCreateNestedOneWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    ordersConfirmed?: OrderCreateNestedManyWithoutConfirmedByInput
    ordersCreated?: OrderCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeSession?: ActiveSessionUncheckedCreateNestedOneWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    ordersConfirmed?: OrderUncheckedCreateNestedManyWithoutConfirmedByInput
    ordersCreated?: OrderUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeSession?: ActiveSessionUpdateOneWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    ordersConfirmed?: OrderUpdateManyWithoutConfirmedByNestedInput
    ordersCreated?: OrderUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeSession?: ActiveSessionUncheckedUpdateOneWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    ordersConfirmed?: OrderUncheckedUpdateManyWithoutConfirmedByNestedInput
    ordersCreated?: OrderUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveSessionCreateInput = {
    id?: string
    sessionId?: string
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutActiveSessionInput
  }

  export type ActiveSessionUncheckedCreateInput = {
    id?: string
    userId: string
    sessionId?: string
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type ActiveSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActiveSessionNestedInput
  }

  export type ActiveSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveSessionCreateManyInput = {
    id?: string
    userId: string
    sessionId?: string
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type ActiveSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    ref: string
    customerName: string
    customerPhone?: string | null
    items: JsonNullValueInput | InputJsonValue
    subtotal: number
    total: number
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentStatus?: $Enums.PaymentStatus
    source?: $Enums.OrderSource
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    confirmedAt?: Date | string | null
    confirmedBy?: UserCreateNestedOneWithoutOrdersConfirmedInput
    createdBy?: UserCreateNestedOneWithoutOrdersCreatedInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    ref: string
    customerName: string
    customerPhone?: string | null
    items: JsonNullValueInput | InputJsonValue
    subtotal: number
    total: number
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentStatus?: $Enums.PaymentStatus
    source?: $Enums.OrderSource
    notes?: string | null
    createdById?: string | null
    confirmedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    items?: JsonNullValueInput | InputJsonValue
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    source?: EnumOrderSourceFieldUpdateOperationsInput | $Enums.OrderSource
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedBy?: UserUpdateOneWithoutOrdersConfirmedNestedInput
    createdBy?: UserUpdateOneWithoutOrdersCreatedNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    items?: JsonNullValueInput | InputJsonValue
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    source?: EnumOrderSourceFieldUpdateOperationsInput | $Enums.OrderSource
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderCreateManyInput = {
    id?: string
    ref: string
    customerName: string
    customerPhone?: string | null
    items: JsonNullValueInput | InputJsonValue
    subtotal: number
    total: number
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentStatus?: $Enums.PaymentStatus
    source?: $Enums.OrderSource
    notes?: string | null
    createdById?: string | null
    confirmedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    items?: JsonNullValueInput | InputJsonValue
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    source?: EnumOrderSourceFieldUpdateOperationsInput | $Enums.OrderSource
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    items?: JsonNullValueInput | InputJsonValue
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    source?: EnumOrderSourceFieldUpdateOperationsInput | $Enums.OrderSource
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditLogCreateInput = {
    id?: string
    userName?: string | null
    action: string
    entity: string
    entityId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    userName?: string | null
    action: string
    entity: string
    entityId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId?: string | null
    userName?: string | null
    action: string
    entity: string
    entityId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCategoryCreateInput = {
    id?: string
    name: string
    slug: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: MenuItemCreateNestedManyWithoutCategoryInput
  }

  export type MenuCategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: MenuItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type MenuCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: MenuItemUpdateManyWithoutCategoryNestedInput
  }

  export type MenuCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: MenuItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MenuCategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    priceNGN: number
    imageUrl?: string | null
    isAvailable?: boolean
    isFeatured?: boolean
    isSpicy?: boolean
    tags?: MenuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    sortOrder?: number
    publicId?: string | null
    EventMenuSelection?: EventMenuSelectionCreateNestedManyWithoutMenuItemInput
    FoodPackOrderItem?: FoodPackOrderItemCreateNestedManyWithoutMenuItemInput
    category: MenuCategoryCreateNestedOneWithoutItemsInput
  }

  export type MenuItemUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    priceNGN: number
    imageUrl?: string | null
    isAvailable?: boolean
    isFeatured?: boolean
    isSpicy?: boolean
    tags?: MenuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    slug: string
    sortOrder?: number
    publicId?: string | null
    EventMenuSelection?: EventMenuSelectionUncheckedCreateNestedManyWithoutMenuItemInput
    FoodPackOrderItem?: FoodPackOrderItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceNGN?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSpicy?: BoolFieldUpdateOperationsInput | boolean
    tags?: MenuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    EventMenuSelection?: EventMenuSelectionUpdateManyWithoutMenuItemNestedInput
    FoodPackOrderItem?: FoodPackOrderItemUpdateManyWithoutMenuItemNestedInput
    category?: MenuCategoryUpdateOneRequiredWithoutItemsNestedInput
  }

  export type MenuItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceNGN?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSpicy?: BoolFieldUpdateOperationsInput | boolean
    tags?: MenuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    EventMenuSelection?: EventMenuSelectionUncheckedUpdateManyWithoutMenuItemNestedInput
    FoodPackOrderItem?: FoodPackOrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    priceNGN: number
    imageUrl?: string | null
    isAvailable?: boolean
    isFeatured?: boolean
    isSpicy?: boolean
    tags?: MenuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    slug: string
    sortOrder?: number
    publicId?: string | null
  }

  export type MenuItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceNGN?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSpicy?: BoolFieldUpdateOperationsInput | boolean
    tags?: MenuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MenuItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceNGN?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSpicy?: BoolFieldUpdateOperationsInput | boolean
    tags?: MenuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FoodPackOrderCreateInput = {
    id?: string
    orderNumber?: string
    status?: $Enums.FoodPackStatus
    customerName: string
    customerPhone: string
    customerEmail?: string | null
    deliveryMethod?: $Enums.DeliveryMethod
    deliveryAddress?: string | null
    deliveryDate?: Date | string | null
    specialNotes?: string | null
    totalAmountNGN: number
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: FoodPackOrderItemCreateNestedManyWithoutOrderInput
  }

  export type FoodPackOrderUncheckedCreateInput = {
    id?: string
    orderNumber?: string
    status?: $Enums.FoodPackStatus
    customerName: string
    customerPhone: string
    customerEmail?: string | null
    deliveryMethod?: $Enums.DeliveryMethod
    deliveryAddress?: string | null
    deliveryDate?: Date | string | null
    specialNotes?: string | null
    totalAmountNGN: number
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: FoodPackOrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type FoodPackOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumFoodPackStatusFieldUpdateOperationsInput | $Enums.FoodPackStatus
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryMethod?: EnumDeliveryMethodFieldUpdateOperationsInput | $Enums.DeliveryMethod
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialNotes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmountNGN?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: FoodPackOrderItemUpdateManyWithoutOrderNestedInput
  }

  export type FoodPackOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumFoodPackStatusFieldUpdateOperationsInput | $Enums.FoodPackStatus
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryMethod?: EnumDeliveryMethodFieldUpdateOperationsInput | $Enums.DeliveryMethod
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialNotes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmountNGN?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: FoodPackOrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type FoodPackOrderCreateManyInput = {
    id?: string
    orderNumber?: string
    status?: $Enums.FoodPackStatus
    customerName: string
    customerPhone: string
    customerEmail?: string | null
    deliveryMethod?: $Enums.DeliveryMethod
    deliveryAddress?: string | null
    deliveryDate?: Date | string | null
    specialNotes?: string | null
    totalAmountNGN: number
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodPackOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumFoodPackStatusFieldUpdateOperationsInput | $Enums.FoodPackStatus
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryMethod?: EnumDeliveryMethodFieldUpdateOperationsInput | $Enums.DeliveryMethod
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialNotes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmountNGN?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodPackOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumFoodPackStatusFieldUpdateOperationsInput | $Enums.FoodPackStatus
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryMethod?: EnumDeliveryMethodFieldUpdateOperationsInput | $Enums.DeliveryMethod
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialNotes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmountNGN?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodPackOrderItemCreateInput = {
    id?: string
    quantity: number
    unitPrice: number
    totalPrice: number
    menuItem: MenuItemCreateNestedOneWithoutFoodPackOrderItemInput
    order: FoodPackOrderCreateNestedOneWithoutItemsInput
  }

  export type FoodPackOrderItemUncheckedCreateInput = {
    id?: string
    quantity: number
    unitPrice: number
    totalPrice: number
    orderId: string
    menuItemId: string
  }

  export type FoodPackOrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    menuItem?: MenuItemUpdateOneRequiredWithoutFoodPackOrderItemNestedInput
    order?: FoodPackOrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type FoodPackOrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
  }

  export type FoodPackOrderItemCreateManyInput = {
    id?: string
    quantity: number
    unitPrice: number
    totalPrice: number
    orderId: string
    menuItemId: string
  }

  export type FoodPackOrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type FoodPackOrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
  }

  export type EventOrderCreateInput = {
    id?: string
    orderRef: string
    clientName: string
    clientPhone: string
    clientEmail?: string | null
    clientWhatsApp?: string | null
    eventType: $Enums.EventType
    eventDate: Date | string
    eventTime?: string | null
    guestCount: number
    venueType?: $Enums.VenueType
    venueAddress?: string | null
    venueLGA?: string | null
    serviceType: $Enums.ServiceType
    status?: $Enums.EventStatus
    dietaryNotes?: string | null
    specialRequests?: string | null
    perHeadRateNGN?: number | null
    subtotalNGN?: number | null
    deliveryFeeNGN?: number
    setupFeeNGN?: number
    discountNGN?: number
    totalNGN?: number | null
    paymentStatus?: $Enums.PaymentStatus
    depositAmtNGN?: number | null
    depositPaidAt?: Date | string | null
    balanceDueNGN?: number | null
    balancePaidAt?: Date | string | null
    setupTime?: string | null
    servingStaffCount?: number
    cleanupIncluded?: boolean
    equipmentList?: EventOrderCreateequipmentListInput | string[]
    internalNotes?: string | null
    quoteSentAt?: Date | string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceFeeNGN?: number
    transportFeeNGN?: number
    menuSelections?: EventMenuSelectionCreateNestedManyWithoutEventOrderInput
    payments?: EventPaymentCreateNestedManyWithoutEventOrderInput
  }

  export type EventOrderUncheckedCreateInput = {
    id?: string
    orderRef: string
    clientName: string
    clientPhone: string
    clientEmail?: string | null
    clientWhatsApp?: string | null
    eventType: $Enums.EventType
    eventDate: Date | string
    eventTime?: string | null
    guestCount: number
    venueType?: $Enums.VenueType
    venueAddress?: string | null
    venueLGA?: string | null
    serviceType: $Enums.ServiceType
    status?: $Enums.EventStatus
    dietaryNotes?: string | null
    specialRequests?: string | null
    perHeadRateNGN?: number | null
    subtotalNGN?: number | null
    deliveryFeeNGN?: number
    setupFeeNGN?: number
    discountNGN?: number
    totalNGN?: number | null
    paymentStatus?: $Enums.PaymentStatus
    depositAmtNGN?: number | null
    depositPaidAt?: Date | string | null
    balanceDueNGN?: number | null
    balancePaidAt?: Date | string | null
    setupTime?: string | null
    servingStaffCount?: number
    cleanupIncluded?: boolean
    equipmentList?: EventOrderCreateequipmentListInput | string[]
    internalNotes?: string | null
    quoteSentAt?: Date | string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceFeeNGN?: number
    transportFeeNGN?: number
    menuSelections?: EventMenuSelectionUncheckedCreateNestedManyWithoutEventOrderInput
    payments?: EventPaymentUncheckedCreateNestedManyWithoutEventOrderInput
  }

  export type EventOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderRef?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientWhatsApp?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    venueType?: EnumVenueTypeFieldUpdateOperationsInput | $Enums.VenueType
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueLGA?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    dietaryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    perHeadRateNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    subtotalNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryFeeNGN?: FloatFieldUpdateOperationsInput | number
    setupFeeNGN?: FloatFieldUpdateOperationsInput | number
    discountNGN?: FloatFieldUpdateOperationsInput | number
    totalNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    depositAmtNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    depositPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balanceDueNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    balancePaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setupTime?: NullableStringFieldUpdateOperationsInput | string | null
    servingStaffCount?: IntFieldUpdateOperationsInput | number
    cleanupIncluded?: BoolFieldUpdateOperationsInput | boolean
    equipmentList?: EventOrderUpdateequipmentListInput | string[]
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    quoteSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceFeeNGN?: FloatFieldUpdateOperationsInput | number
    transportFeeNGN?: FloatFieldUpdateOperationsInput | number
    menuSelections?: EventMenuSelectionUpdateManyWithoutEventOrderNestedInput
    payments?: EventPaymentUpdateManyWithoutEventOrderNestedInput
  }

  export type EventOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderRef?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientWhatsApp?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    venueType?: EnumVenueTypeFieldUpdateOperationsInput | $Enums.VenueType
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueLGA?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    dietaryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    perHeadRateNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    subtotalNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryFeeNGN?: FloatFieldUpdateOperationsInput | number
    setupFeeNGN?: FloatFieldUpdateOperationsInput | number
    discountNGN?: FloatFieldUpdateOperationsInput | number
    totalNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    depositAmtNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    depositPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balanceDueNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    balancePaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setupTime?: NullableStringFieldUpdateOperationsInput | string | null
    servingStaffCount?: IntFieldUpdateOperationsInput | number
    cleanupIncluded?: BoolFieldUpdateOperationsInput | boolean
    equipmentList?: EventOrderUpdateequipmentListInput | string[]
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    quoteSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceFeeNGN?: FloatFieldUpdateOperationsInput | number
    transportFeeNGN?: FloatFieldUpdateOperationsInput | number
    menuSelections?: EventMenuSelectionUncheckedUpdateManyWithoutEventOrderNestedInput
    payments?: EventPaymentUncheckedUpdateManyWithoutEventOrderNestedInput
  }

  export type EventOrderCreateManyInput = {
    id?: string
    orderRef: string
    clientName: string
    clientPhone: string
    clientEmail?: string | null
    clientWhatsApp?: string | null
    eventType: $Enums.EventType
    eventDate: Date | string
    eventTime?: string | null
    guestCount: number
    venueType?: $Enums.VenueType
    venueAddress?: string | null
    venueLGA?: string | null
    serviceType: $Enums.ServiceType
    status?: $Enums.EventStatus
    dietaryNotes?: string | null
    specialRequests?: string | null
    perHeadRateNGN?: number | null
    subtotalNGN?: number | null
    deliveryFeeNGN?: number
    setupFeeNGN?: number
    discountNGN?: number
    totalNGN?: number | null
    paymentStatus?: $Enums.PaymentStatus
    depositAmtNGN?: number | null
    depositPaidAt?: Date | string | null
    balanceDueNGN?: number | null
    balancePaidAt?: Date | string | null
    setupTime?: string | null
    servingStaffCount?: number
    cleanupIncluded?: boolean
    equipmentList?: EventOrderCreateequipmentListInput | string[]
    internalNotes?: string | null
    quoteSentAt?: Date | string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceFeeNGN?: number
    transportFeeNGN?: number
  }

  export type EventOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderRef?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientWhatsApp?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    venueType?: EnumVenueTypeFieldUpdateOperationsInput | $Enums.VenueType
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueLGA?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    dietaryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    perHeadRateNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    subtotalNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryFeeNGN?: FloatFieldUpdateOperationsInput | number
    setupFeeNGN?: FloatFieldUpdateOperationsInput | number
    discountNGN?: FloatFieldUpdateOperationsInput | number
    totalNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    depositAmtNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    depositPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balanceDueNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    balancePaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setupTime?: NullableStringFieldUpdateOperationsInput | string | null
    servingStaffCount?: IntFieldUpdateOperationsInput | number
    cleanupIncluded?: BoolFieldUpdateOperationsInput | boolean
    equipmentList?: EventOrderUpdateequipmentListInput | string[]
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    quoteSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceFeeNGN?: FloatFieldUpdateOperationsInput | number
    transportFeeNGN?: FloatFieldUpdateOperationsInput | number
  }

  export type EventOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderRef?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientWhatsApp?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    venueType?: EnumVenueTypeFieldUpdateOperationsInput | $Enums.VenueType
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueLGA?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    dietaryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    perHeadRateNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    subtotalNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryFeeNGN?: FloatFieldUpdateOperationsInput | number
    setupFeeNGN?: FloatFieldUpdateOperationsInput | number
    discountNGN?: FloatFieldUpdateOperationsInput | number
    totalNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    depositAmtNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    depositPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balanceDueNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    balancePaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setupTime?: NullableStringFieldUpdateOperationsInput | string | null
    servingStaffCount?: IntFieldUpdateOperationsInput | number
    cleanupIncluded?: BoolFieldUpdateOperationsInput | boolean
    equipmentList?: EventOrderUpdateequipmentListInput | string[]
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    quoteSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceFeeNGN?: FloatFieldUpdateOperationsInput | number
    transportFeeNGN?: FloatFieldUpdateOperationsInput | number
  }

  export type EventMenuSelectionCreateInput = {
    id?: string
    quantity?: number
    unitPrice: number
    totalPrice?: number
    notes?: string | null
    eventOrder: EventOrderCreateNestedOneWithoutMenuSelectionsInput
    menuItem: MenuItemCreateNestedOneWithoutEventMenuSelectionInput
  }

  export type EventMenuSelectionUncheckedCreateInput = {
    id?: string
    menuItemId: string
    quantity?: number
    unitPrice: number
    totalPrice?: number
    notes?: string | null
    eventOrderId: string
  }

  export type EventMenuSelectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventOrder?: EventOrderUpdateOneRequiredWithoutMenuSelectionsNestedInput
    menuItem?: MenuItemUpdateOneRequiredWithoutEventMenuSelectionNestedInput
  }

  export type EventMenuSelectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventOrderId?: StringFieldUpdateOperationsInput | string
  }

  export type EventMenuSelectionCreateManyInput = {
    id?: string
    menuItemId: string
    quantity?: number
    unitPrice: number
    totalPrice?: number
    notes?: string | null
    eventOrderId: string
  }

  export type EventMenuSelectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventMenuSelectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventOrderId?: StringFieldUpdateOperationsInput | string
  }

  export type EventMenuCategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    required?: boolean
    minChoices?: number
    maxChoices?: number
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: EventMenuOptionCreateNestedManyWithoutCategoryInput
  }

  export type EventMenuCategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    required?: boolean
    minChoices?: number
    maxChoices?: number
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: EventMenuOptionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type EventMenuCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    minChoices?: IntFieldUpdateOperationsInput | number
    maxChoices?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: EventMenuOptionUpdateManyWithoutCategoryNestedInput
  }

  export type EventMenuCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    minChoices?: IntFieldUpdateOperationsInput | number
    maxChoices?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: EventMenuOptionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type EventMenuCategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    required?: boolean
    minChoices?: number
    maxChoices?: number
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventMenuCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    minChoices?: IntFieldUpdateOperationsInput | number
    maxChoices?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventMenuCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    minChoices?: IntFieldUpdateOperationsInput | number
    maxChoices?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventMenuOptionCreateInput = {
    id?: string
    name: string
    description?: string | null
    pricePerPlate: number
    includedInBase?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: EventMenuCategoryCreateNestedOneWithoutOptionsInput
  }

  export type EventMenuOptionUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    pricePerPlate: number
    includedInBase?: boolean
    isActive?: boolean
    sortOrder?: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventMenuOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerPlate?: FloatFieldUpdateOperationsInput | number
    includedInBase?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EventMenuCategoryUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type EventMenuOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerPlate?: FloatFieldUpdateOperationsInput | number
    includedInBase?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventMenuOptionCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    pricePerPlate: number
    includedInBase?: boolean
    isActive?: boolean
    sortOrder?: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventMenuOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerPlate?: FloatFieldUpdateOperationsInput | number
    includedInBase?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventMenuOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerPlate?: FloatFieldUpdateOperationsInput | number
    includedInBase?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventPaymentCreateInput = {
    id?: string
    amountNGN: number
    paymentMethod: string
    status?: $Enums.PaymentStatus
    reference?: string | null
    paidAt?: Date | string
    note?: string | null
    eventOrder: EventOrderCreateNestedOneWithoutPaymentsInput
  }

  export type EventPaymentUncheckedCreateInput = {
    id?: string
    amountNGN: number
    paymentMethod: string
    status?: $Enums.PaymentStatus
    reference?: string | null
    paidAt?: Date | string
    note?: string | null
    eventOrderId: string
  }

  export type EventPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountNGN?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    eventOrder?: EventOrderUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type EventPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountNGN?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    eventOrderId?: StringFieldUpdateOperationsInput | string
  }

  export type EventPaymentCreateManyInput = {
    id?: string
    amountNGN: number
    paymentMethod: string
    status?: $Enums.PaymentStatus
    reference?: string | null
    paidAt?: Date | string
    note?: string | null
    eventOrderId: string
  }

  export type EventPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountNGN?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountNGN?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    eventOrderId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ActiveSessionNullableRelationFilter = {
    is?: ActiveSessionWhereInput | null
    isNot?: ActiveSessionWhereInput | null
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActiveSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type ActiveSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type ActiveSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type EnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumOrderSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderSource | EnumOrderSourceFieldRefInput<$PrismaModel>
    in?: $Enums.OrderSource[] | ListEnumOrderSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderSource[] | ListEnumOrderSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderSourceFilter<$PrismaModel> | $Enums.OrderSource
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    ref?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    items?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    source?: SortOrder
    notes?: SortOrder
    createdById?: SortOrder
    confirmedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    confirmedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    subtotal?: SortOrder
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    ref?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    source?: SortOrder
    notes?: SortOrder
    createdById?: SortOrder
    confirmedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    confirmedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    ref?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    subtotal?: SortOrder
    total?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    source?: SortOrder
    notes?: SortOrder
    createdById?: SortOrder
    confirmedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    confirmedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    subtotal?: SortOrder
    total?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumOrderSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderSource | EnumOrderSourceFieldRefInput<$PrismaModel>
    in?: $Enums.OrderSource[] | ListEnumOrderSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderSource[] | ListEnumOrderSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderSourceWithAggregatesFilter<$PrismaModel> | $Enums.OrderSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderSourceFilter<$PrismaModel>
    _max?: NestedEnumOrderSourceFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    meta?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MenuItemListRelationFilter = {
    every?: MenuItemWhereInput
    some?: MenuItemWhereInput
    none?: MenuItemWhereInput
  }

  export type MenuItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuCategoryAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type MenuCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuCategorySumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EventMenuSelectionListRelationFilter = {
    every?: EventMenuSelectionWhereInput
    some?: EventMenuSelectionWhereInput
    none?: EventMenuSelectionWhereInput
  }

  export type FoodPackOrderItemListRelationFilter = {
    every?: FoodPackOrderItemWhereInput
    some?: FoodPackOrderItemWhereInput
    none?: FoodPackOrderItemWhereInput
  }

  export type MenuCategoryRelationFilter = {
    is?: MenuCategoryWhereInput
    isNot?: MenuCategoryWhereInput
  }

  export type EventMenuSelectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodPackOrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuItemSlugCategoryIdCompoundUniqueInput = {
    slug: string
    categoryId: string
  }

  export type MenuItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceNGN?: SortOrder
    imageUrl?: SortOrder
    isAvailable?: SortOrder
    isFeatured?: SortOrder
    isSpicy?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    sortOrder?: SortOrder
    publicId?: SortOrder
  }

  export type MenuItemAvgOrderByAggregateInput = {
    priceNGN?: SortOrder
    sortOrder?: SortOrder
  }

  export type MenuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceNGN?: SortOrder
    imageUrl?: SortOrder
    isAvailable?: SortOrder
    isFeatured?: SortOrder
    isSpicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    sortOrder?: SortOrder
    publicId?: SortOrder
  }

  export type MenuItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceNGN?: SortOrder
    imageUrl?: SortOrder
    isAvailable?: SortOrder
    isFeatured?: SortOrder
    isSpicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    sortOrder?: SortOrder
    publicId?: SortOrder
  }

  export type MenuItemSumOrderByAggregateInput = {
    priceNGN?: SortOrder
    sortOrder?: SortOrder
  }

  export type EnumFoodPackStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodPackStatus | EnumFoodPackStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FoodPackStatus[] | ListEnumFoodPackStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodPackStatus[] | ListEnumFoodPackStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodPackStatusFilter<$PrismaModel> | $Enums.FoodPackStatus
  }

  export type EnumDeliveryMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryMethod | EnumDeliveryMethodFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryMethod[] | ListEnumDeliveryMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryMethod[] | ListEnumDeliveryMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryMethodFilter<$PrismaModel> | $Enums.DeliveryMethod
  }

  export type FoodPackOrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerEmail?: SortOrder
    deliveryMethod?: SortOrder
    deliveryAddress?: SortOrder
    deliveryDate?: SortOrder
    specialNotes?: SortOrder
    totalAmountNGN?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodPackOrderAvgOrderByAggregateInput = {
    totalAmountNGN?: SortOrder
  }

  export type FoodPackOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerEmail?: SortOrder
    deliveryMethod?: SortOrder
    deliveryAddress?: SortOrder
    deliveryDate?: SortOrder
    specialNotes?: SortOrder
    totalAmountNGN?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodPackOrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerEmail?: SortOrder
    deliveryMethod?: SortOrder
    deliveryAddress?: SortOrder
    deliveryDate?: SortOrder
    specialNotes?: SortOrder
    totalAmountNGN?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodPackOrderSumOrderByAggregateInput = {
    totalAmountNGN?: SortOrder
  }

  export type EnumFoodPackStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodPackStatus | EnumFoodPackStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FoodPackStatus[] | ListEnumFoodPackStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodPackStatus[] | ListEnumFoodPackStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodPackStatusWithAggregatesFilter<$PrismaModel> | $Enums.FoodPackStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFoodPackStatusFilter<$PrismaModel>
    _max?: NestedEnumFoodPackStatusFilter<$PrismaModel>
  }

  export type EnumDeliveryMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryMethod | EnumDeliveryMethodFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryMethod[] | ListEnumDeliveryMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryMethod[] | ListEnumDeliveryMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryMethodWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryMethodFilter<$PrismaModel>
    _max?: NestedEnumDeliveryMethodFilter<$PrismaModel>
  }

  export type MenuItemRelationFilter = {
    is?: MenuItemWhereInput
    isNot?: MenuItemWhereInput
  }

  export type FoodPackOrderRelationFilter = {
    is?: FoodPackOrderWhereInput
    isNot?: FoodPackOrderWhereInput
  }

  export type FoodPackOrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
  }

  export type FoodPackOrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type FoodPackOrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
  }

  export type FoodPackOrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
  }

  export type FoodPackOrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type EnumVenueTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VenueType | EnumVenueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VenueType[] | ListEnumVenueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VenueType[] | ListEnumVenueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVenueTypeFilter<$PrismaModel> | $Enums.VenueType
  }

  export type EnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EventPaymentListRelationFilter = {
    every?: EventPaymentWhereInput
    some?: EventPaymentWhereInput
    none?: EventPaymentWhereInput
  }

  export type EventPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderRef?: SortOrder
    clientName?: SortOrder
    clientPhone?: SortOrder
    clientEmail?: SortOrder
    clientWhatsApp?: SortOrder
    eventType?: SortOrder
    eventDate?: SortOrder
    eventTime?: SortOrder
    guestCount?: SortOrder
    venueType?: SortOrder
    venueAddress?: SortOrder
    venueLGA?: SortOrder
    serviceType?: SortOrder
    status?: SortOrder
    dietaryNotes?: SortOrder
    specialRequests?: SortOrder
    perHeadRateNGN?: SortOrder
    subtotalNGN?: SortOrder
    deliveryFeeNGN?: SortOrder
    setupFeeNGN?: SortOrder
    discountNGN?: SortOrder
    totalNGN?: SortOrder
    paymentStatus?: SortOrder
    depositAmtNGN?: SortOrder
    depositPaidAt?: SortOrder
    balanceDueNGN?: SortOrder
    balancePaidAt?: SortOrder
    setupTime?: SortOrder
    servingStaffCount?: SortOrder
    cleanupIncluded?: SortOrder
    equipmentList?: SortOrder
    internalNotes?: SortOrder
    quoteSentAt?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    serviceFeeNGN?: SortOrder
    transportFeeNGN?: SortOrder
  }

  export type EventOrderAvgOrderByAggregateInput = {
    guestCount?: SortOrder
    perHeadRateNGN?: SortOrder
    subtotalNGN?: SortOrder
    deliveryFeeNGN?: SortOrder
    setupFeeNGN?: SortOrder
    discountNGN?: SortOrder
    totalNGN?: SortOrder
    depositAmtNGN?: SortOrder
    balanceDueNGN?: SortOrder
    servingStaffCount?: SortOrder
    serviceFeeNGN?: SortOrder
    transportFeeNGN?: SortOrder
  }

  export type EventOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderRef?: SortOrder
    clientName?: SortOrder
    clientPhone?: SortOrder
    clientEmail?: SortOrder
    clientWhatsApp?: SortOrder
    eventType?: SortOrder
    eventDate?: SortOrder
    eventTime?: SortOrder
    guestCount?: SortOrder
    venueType?: SortOrder
    venueAddress?: SortOrder
    venueLGA?: SortOrder
    serviceType?: SortOrder
    status?: SortOrder
    dietaryNotes?: SortOrder
    specialRequests?: SortOrder
    perHeadRateNGN?: SortOrder
    subtotalNGN?: SortOrder
    deliveryFeeNGN?: SortOrder
    setupFeeNGN?: SortOrder
    discountNGN?: SortOrder
    totalNGN?: SortOrder
    paymentStatus?: SortOrder
    depositAmtNGN?: SortOrder
    depositPaidAt?: SortOrder
    balanceDueNGN?: SortOrder
    balancePaidAt?: SortOrder
    setupTime?: SortOrder
    servingStaffCount?: SortOrder
    cleanupIncluded?: SortOrder
    internalNotes?: SortOrder
    quoteSentAt?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    serviceFeeNGN?: SortOrder
    transportFeeNGN?: SortOrder
  }

  export type EventOrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderRef?: SortOrder
    clientName?: SortOrder
    clientPhone?: SortOrder
    clientEmail?: SortOrder
    clientWhatsApp?: SortOrder
    eventType?: SortOrder
    eventDate?: SortOrder
    eventTime?: SortOrder
    guestCount?: SortOrder
    venueType?: SortOrder
    venueAddress?: SortOrder
    venueLGA?: SortOrder
    serviceType?: SortOrder
    status?: SortOrder
    dietaryNotes?: SortOrder
    specialRequests?: SortOrder
    perHeadRateNGN?: SortOrder
    subtotalNGN?: SortOrder
    deliveryFeeNGN?: SortOrder
    setupFeeNGN?: SortOrder
    discountNGN?: SortOrder
    totalNGN?: SortOrder
    paymentStatus?: SortOrder
    depositAmtNGN?: SortOrder
    depositPaidAt?: SortOrder
    balanceDueNGN?: SortOrder
    balancePaidAt?: SortOrder
    setupTime?: SortOrder
    servingStaffCount?: SortOrder
    cleanupIncluded?: SortOrder
    internalNotes?: SortOrder
    quoteSentAt?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    serviceFeeNGN?: SortOrder
    transportFeeNGN?: SortOrder
  }

  export type EventOrderSumOrderByAggregateInput = {
    guestCount?: SortOrder
    perHeadRateNGN?: SortOrder
    subtotalNGN?: SortOrder
    deliveryFeeNGN?: SortOrder
    setupFeeNGN?: SortOrder
    discountNGN?: SortOrder
    totalNGN?: SortOrder
    depositAmtNGN?: SortOrder
    balanceDueNGN?: SortOrder
    servingStaffCount?: SortOrder
    serviceFeeNGN?: SortOrder
    transportFeeNGN?: SortOrder
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type EnumVenueTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VenueType | EnumVenueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VenueType[] | ListEnumVenueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VenueType[] | ListEnumVenueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVenueTypeWithAggregatesFilter<$PrismaModel> | $Enums.VenueType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVenueTypeFilter<$PrismaModel>
    _max?: NestedEnumVenueTypeFilter<$PrismaModel>
  }

  export type EnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EventOrderRelationFilter = {
    is?: EventOrderWhereInput
    isNot?: EventOrderWhereInput
  }

  export type EventMenuSelectionEventOrderIdMenuItemIdCompoundUniqueInput = {
    eventOrderId: string
    menuItemId: string
  }

  export type EventMenuSelectionCountOrderByAggregateInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    notes?: SortOrder
    eventOrderId?: SortOrder
  }

  export type EventMenuSelectionAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type EventMenuSelectionMaxOrderByAggregateInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    notes?: SortOrder
    eventOrderId?: SortOrder
  }

  export type EventMenuSelectionMinOrderByAggregateInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    notes?: SortOrder
    eventOrderId?: SortOrder
  }

  export type EventMenuSelectionSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type EventMenuOptionListRelationFilter = {
    every?: EventMenuOptionWhereInput
    some?: EventMenuOptionWhereInput
    none?: EventMenuOptionWhereInput
  }

  export type EventMenuOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventMenuCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    required?: SortOrder
    minChoices?: SortOrder
    maxChoices?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMenuCategoryAvgOrderByAggregateInput = {
    minChoices?: SortOrder
    maxChoices?: SortOrder
    sortOrder?: SortOrder
  }

  export type EventMenuCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    required?: SortOrder
    minChoices?: SortOrder
    maxChoices?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMenuCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    required?: SortOrder
    minChoices?: SortOrder
    maxChoices?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMenuCategorySumOrderByAggregateInput = {
    minChoices?: SortOrder
    maxChoices?: SortOrder
    sortOrder?: SortOrder
  }

  export type EventMenuCategoryRelationFilter = {
    is?: EventMenuCategoryWhereInput
    isNot?: EventMenuCategoryWhereInput
  }

  export type EventMenuOptionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerPlate?: SortOrder
    includedInBase?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMenuOptionAvgOrderByAggregateInput = {
    pricePerPlate?: SortOrder
    sortOrder?: SortOrder
  }

  export type EventMenuOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerPlate?: SortOrder
    includedInBase?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMenuOptionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerPlate?: SortOrder
    includedInBase?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMenuOptionSumOrderByAggregateInput = {
    pricePerPlate?: SortOrder
    sortOrder?: SortOrder
  }

  export type EventPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amountNGN?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    paidAt?: SortOrder
    note?: SortOrder
    eventOrderId?: SortOrder
  }

  export type EventPaymentAvgOrderByAggregateInput = {
    amountNGN?: SortOrder
  }

  export type EventPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amountNGN?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    paidAt?: SortOrder
    note?: SortOrder
    eventOrderId?: SortOrder
  }

  export type EventPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amountNGN?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    paidAt?: SortOrder
    note?: SortOrder
    eventOrderId?: SortOrder
  }

  export type EventPaymentSumOrderByAggregateInput = {
    amountNGN?: SortOrder
  }

  export type ActiveSessionCreateNestedOneWithoutUserInput = {
    create?: XOR<ActiveSessionCreateWithoutUserInput, ActiveSessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: ActiveSessionCreateOrConnectWithoutUserInput
    connect?: ActiveSessionWhereUniqueInput
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutConfirmedByInput = {
    create?: XOR<OrderCreateWithoutConfirmedByInput, OrderUncheckedCreateWithoutConfirmedByInput> | OrderCreateWithoutConfirmedByInput[] | OrderUncheckedCreateWithoutConfirmedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutConfirmedByInput | OrderCreateOrConnectWithoutConfirmedByInput[]
    createMany?: OrderCreateManyConfirmedByInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput> | OrderCreateWithoutCreatedByInput[] | OrderUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCreatedByInput | OrderCreateOrConnectWithoutCreatedByInput[]
    createMany?: OrderCreateManyCreatedByInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ActiveSessionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ActiveSessionCreateWithoutUserInput, ActiveSessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: ActiveSessionCreateOrConnectWithoutUserInput
    connect?: ActiveSessionWhereUniqueInput
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutConfirmedByInput = {
    create?: XOR<OrderCreateWithoutConfirmedByInput, OrderUncheckedCreateWithoutConfirmedByInput> | OrderCreateWithoutConfirmedByInput[] | OrderUncheckedCreateWithoutConfirmedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutConfirmedByInput | OrderCreateOrConnectWithoutConfirmedByInput[]
    createMany?: OrderCreateManyConfirmedByInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput> | OrderCreateWithoutCreatedByInput[] | OrderUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCreatedByInput | OrderCreateOrConnectWithoutCreatedByInput[]
    createMany?: OrderCreateManyCreatedByInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ActiveSessionUpdateOneWithoutUserNestedInput = {
    create?: XOR<ActiveSessionCreateWithoutUserInput, ActiveSessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: ActiveSessionCreateOrConnectWithoutUserInput
    upsert?: ActiveSessionUpsertWithoutUserInput
    disconnect?: ActiveSessionWhereInput | boolean
    delete?: ActiveSessionWhereInput | boolean
    connect?: ActiveSessionWhereUniqueInput
    update?: XOR<XOR<ActiveSessionUpdateToOneWithWhereWithoutUserInput, ActiveSessionUpdateWithoutUserInput>, ActiveSessionUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutConfirmedByNestedInput = {
    create?: XOR<OrderCreateWithoutConfirmedByInput, OrderUncheckedCreateWithoutConfirmedByInput> | OrderCreateWithoutConfirmedByInput[] | OrderUncheckedCreateWithoutConfirmedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutConfirmedByInput | OrderCreateOrConnectWithoutConfirmedByInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutConfirmedByInput | OrderUpsertWithWhereUniqueWithoutConfirmedByInput[]
    createMany?: OrderCreateManyConfirmedByInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutConfirmedByInput | OrderUpdateWithWhereUniqueWithoutConfirmedByInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutConfirmedByInput | OrderUpdateManyWithWhereWithoutConfirmedByInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput> | OrderCreateWithoutCreatedByInput[] | OrderUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCreatedByInput | OrderCreateOrConnectWithoutCreatedByInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCreatedByInput | OrderUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: OrderCreateManyCreatedByInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCreatedByInput | OrderUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCreatedByInput | OrderUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ActiveSessionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ActiveSessionCreateWithoutUserInput, ActiveSessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: ActiveSessionCreateOrConnectWithoutUserInput
    upsert?: ActiveSessionUpsertWithoutUserInput
    disconnect?: ActiveSessionWhereInput | boolean
    delete?: ActiveSessionWhereInput | boolean
    connect?: ActiveSessionWhereUniqueInput
    update?: XOR<XOR<ActiveSessionUpdateToOneWithWhereWithoutUserInput, ActiveSessionUpdateWithoutUserInput>, ActiveSessionUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutConfirmedByNestedInput = {
    create?: XOR<OrderCreateWithoutConfirmedByInput, OrderUncheckedCreateWithoutConfirmedByInput> | OrderCreateWithoutConfirmedByInput[] | OrderUncheckedCreateWithoutConfirmedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutConfirmedByInput | OrderCreateOrConnectWithoutConfirmedByInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutConfirmedByInput | OrderUpsertWithWhereUniqueWithoutConfirmedByInput[]
    createMany?: OrderCreateManyConfirmedByInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutConfirmedByInput | OrderUpdateWithWhereUniqueWithoutConfirmedByInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutConfirmedByInput | OrderUpdateManyWithWhereWithoutConfirmedByInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput> | OrderCreateWithoutCreatedByInput[] | OrderUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCreatedByInput | OrderCreateOrConnectWithoutCreatedByInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCreatedByInput | OrderUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: OrderCreateManyCreatedByInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCreatedByInput | OrderUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCreatedByInput | OrderUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutActiveSessionInput = {
    create?: XOR<UserCreateWithoutActiveSessionInput, UserUncheckedCreateWithoutActiveSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutActiveSessionInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutActiveSessionNestedInput = {
    create?: XOR<UserCreateWithoutActiveSessionInput, UserUncheckedCreateWithoutActiveSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutActiveSessionInput
    upsert?: UserUpsertWithoutActiveSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActiveSessionInput, UserUpdateWithoutActiveSessionInput>, UserUncheckedUpdateWithoutActiveSessionInput>
  }

  export type UserCreateNestedOneWithoutOrdersConfirmedInput = {
    create?: XOR<UserCreateWithoutOrdersConfirmedInput, UserUncheckedCreateWithoutOrdersConfirmedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersConfirmedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersCreatedInput = {
    create?: XOR<UserCreateWithoutOrdersCreatedInput, UserUncheckedCreateWithoutOrdersCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type NullableEnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod | null
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type EnumOrderSourceFieldUpdateOperationsInput = {
    set?: $Enums.OrderSource
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutOrdersConfirmedNestedInput = {
    create?: XOR<UserCreateWithoutOrdersConfirmedInput, UserUncheckedCreateWithoutOrdersConfirmedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersConfirmedInput
    upsert?: UserUpsertWithoutOrdersConfirmedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersConfirmedInput, UserUpdateWithoutOrdersConfirmedInput>, UserUncheckedUpdateWithoutOrdersConfirmedInput>
  }

  export type UserUpdateOneWithoutOrdersCreatedNestedInput = {
    create?: XOR<UserCreateWithoutOrdersCreatedInput, UserUncheckedCreateWithoutOrdersCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersCreatedInput
    upsert?: UserUpsertWithoutOrdersCreatedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersCreatedInput, UserUpdateWithoutOrdersCreatedInput>, UserUncheckedUpdateWithoutOrdersCreatedInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type MenuItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type MenuItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MenuItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutCategoryInput | MenuItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutCategoryInput | MenuItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutCategoryInput | MenuItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type MenuItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutCategoryInput | MenuItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutCategoryInput | MenuItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutCategoryInput | MenuItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type MenuItemCreatetagsInput = {
    set: string[]
  }

  export type EventMenuSelectionCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<EventMenuSelectionCreateWithoutMenuItemInput, EventMenuSelectionUncheckedCreateWithoutMenuItemInput> | EventMenuSelectionCreateWithoutMenuItemInput[] | EventMenuSelectionUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: EventMenuSelectionCreateOrConnectWithoutMenuItemInput | EventMenuSelectionCreateOrConnectWithoutMenuItemInput[]
    createMany?: EventMenuSelectionCreateManyMenuItemInputEnvelope
    connect?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
  }

  export type FoodPackOrderItemCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<FoodPackOrderItemCreateWithoutMenuItemInput, FoodPackOrderItemUncheckedCreateWithoutMenuItemInput> | FoodPackOrderItemCreateWithoutMenuItemInput[] | FoodPackOrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: FoodPackOrderItemCreateOrConnectWithoutMenuItemInput | FoodPackOrderItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: FoodPackOrderItemCreateManyMenuItemInputEnvelope
    connect?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
  }

  export type MenuCategoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<MenuCategoryCreateWithoutItemsInput, MenuCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: MenuCategoryCreateOrConnectWithoutItemsInput
    connect?: MenuCategoryWhereUniqueInput
  }

  export type EventMenuSelectionUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<EventMenuSelectionCreateWithoutMenuItemInput, EventMenuSelectionUncheckedCreateWithoutMenuItemInput> | EventMenuSelectionCreateWithoutMenuItemInput[] | EventMenuSelectionUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: EventMenuSelectionCreateOrConnectWithoutMenuItemInput | EventMenuSelectionCreateOrConnectWithoutMenuItemInput[]
    createMany?: EventMenuSelectionCreateManyMenuItemInputEnvelope
    connect?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
  }

  export type FoodPackOrderItemUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<FoodPackOrderItemCreateWithoutMenuItemInput, FoodPackOrderItemUncheckedCreateWithoutMenuItemInput> | FoodPackOrderItemCreateWithoutMenuItemInput[] | FoodPackOrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: FoodPackOrderItemCreateOrConnectWithoutMenuItemInput | FoodPackOrderItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: FoodPackOrderItemCreateManyMenuItemInputEnvelope
    connect?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
  }

  export type MenuItemUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EventMenuSelectionUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<EventMenuSelectionCreateWithoutMenuItemInput, EventMenuSelectionUncheckedCreateWithoutMenuItemInput> | EventMenuSelectionCreateWithoutMenuItemInput[] | EventMenuSelectionUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: EventMenuSelectionCreateOrConnectWithoutMenuItemInput | EventMenuSelectionCreateOrConnectWithoutMenuItemInput[]
    upsert?: EventMenuSelectionUpsertWithWhereUniqueWithoutMenuItemInput | EventMenuSelectionUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: EventMenuSelectionCreateManyMenuItemInputEnvelope
    set?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
    disconnect?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
    delete?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
    connect?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
    update?: EventMenuSelectionUpdateWithWhereUniqueWithoutMenuItemInput | EventMenuSelectionUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: EventMenuSelectionUpdateManyWithWhereWithoutMenuItemInput | EventMenuSelectionUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: EventMenuSelectionScalarWhereInput | EventMenuSelectionScalarWhereInput[]
  }

  export type FoodPackOrderItemUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<FoodPackOrderItemCreateWithoutMenuItemInput, FoodPackOrderItemUncheckedCreateWithoutMenuItemInput> | FoodPackOrderItemCreateWithoutMenuItemInput[] | FoodPackOrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: FoodPackOrderItemCreateOrConnectWithoutMenuItemInput | FoodPackOrderItemCreateOrConnectWithoutMenuItemInput[]
    upsert?: FoodPackOrderItemUpsertWithWhereUniqueWithoutMenuItemInput | FoodPackOrderItemUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: FoodPackOrderItemCreateManyMenuItemInputEnvelope
    set?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
    disconnect?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
    delete?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
    connect?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
    update?: FoodPackOrderItemUpdateWithWhereUniqueWithoutMenuItemInput | FoodPackOrderItemUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: FoodPackOrderItemUpdateManyWithWhereWithoutMenuItemInput | FoodPackOrderItemUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: FoodPackOrderItemScalarWhereInput | FoodPackOrderItemScalarWhereInput[]
  }

  export type MenuCategoryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<MenuCategoryCreateWithoutItemsInput, MenuCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: MenuCategoryCreateOrConnectWithoutItemsInput
    upsert?: MenuCategoryUpsertWithoutItemsInput
    connect?: MenuCategoryWhereUniqueInput
    update?: XOR<XOR<MenuCategoryUpdateToOneWithWhereWithoutItemsInput, MenuCategoryUpdateWithoutItemsInput>, MenuCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type EventMenuSelectionUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<EventMenuSelectionCreateWithoutMenuItemInput, EventMenuSelectionUncheckedCreateWithoutMenuItemInput> | EventMenuSelectionCreateWithoutMenuItemInput[] | EventMenuSelectionUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: EventMenuSelectionCreateOrConnectWithoutMenuItemInput | EventMenuSelectionCreateOrConnectWithoutMenuItemInput[]
    upsert?: EventMenuSelectionUpsertWithWhereUniqueWithoutMenuItemInput | EventMenuSelectionUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: EventMenuSelectionCreateManyMenuItemInputEnvelope
    set?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
    disconnect?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
    delete?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
    connect?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
    update?: EventMenuSelectionUpdateWithWhereUniqueWithoutMenuItemInput | EventMenuSelectionUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: EventMenuSelectionUpdateManyWithWhereWithoutMenuItemInput | EventMenuSelectionUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: EventMenuSelectionScalarWhereInput | EventMenuSelectionScalarWhereInput[]
  }

  export type FoodPackOrderItemUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<FoodPackOrderItemCreateWithoutMenuItemInput, FoodPackOrderItemUncheckedCreateWithoutMenuItemInput> | FoodPackOrderItemCreateWithoutMenuItemInput[] | FoodPackOrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: FoodPackOrderItemCreateOrConnectWithoutMenuItemInput | FoodPackOrderItemCreateOrConnectWithoutMenuItemInput[]
    upsert?: FoodPackOrderItemUpsertWithWhereUniqueWithoutMenuItemInput | FoodPackOrderItemUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: FoodPackOrderItemCreateManyMenuItemInputEnvelope
    set?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
    disconnect?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
    delete?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
    connect?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
    update?: FoodPackOrderItemUpdateWithWhereUniqueWithoutMenuItemInput | FoodPackOrderItemUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: FoodPackOrderItemUpdateManyWithWhereWithoutMenuItemInput | FoodPackOrderItemUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: FoodPackOrderItemScalarWhereInput | FoodPackOrderItemScalarWhereInput[]
  }

  export type FoodPackOrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<FoodPackOrderItemCreateWithoutOrderInput, FoodPackOrderItemUncheckedCreateWithoutOrderInput> | FoodPackOrderItemCreateWithoutOrderInput[] | FoodPackOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: FoodPackOrderItemCreateOrConnectWithoutOrderInput | FoodPackOrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: FoodPackOrderItemCreateManyOrderInputEnvelope
    connect?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
  }

  export type FoodPackOrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<FoodPackOrderItemCreateWithoutOrderInput, FoodPackOrderItemUncheckedCreateWithoutOrderInput> | FoodPackOrderItemCreateWithoutOrderInput[] | FoodPackOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: FoodPackOrderItemCreateOrConnectWithoutOrderInput | FoodPackOrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: FoodPackOrderItemCreateManyOrderInputEnvelope
    connect?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
  }

  export type EnumFoodPackStatusFieldUpdateOperationsInput = {
    set?: $Enums.FoodPackStatus
  }

  export type EnumDeliveryMethodFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryMethod
  }

  export type FoodPackOrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<FoodPackOrderItemCreateWithoutOrderInput, FoodPackOrderItemUncheckedCreateWithoutOrderInput> | FoodPackOrderItemCreateWithoutOrderInput[] | FoodPackOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: FoodPackOrderItemCreateOrConnectWithoutOrderInput | FoodPackOrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: FoodPackOrderItemUpsertWithWhereUniqueWithoutOrderInput | FoodPackOrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: FoodPackOrderItemCreateManyOrderInputEnvelope
    set?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
    disconnect?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
    delete?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
    connect?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
    update?: FoodPackOrderItemUpdateWithWhereUniqueWithoutOrderInput | FoodPackOrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: FoodPackOrderItemUpdateManyWithWhereWithoutOrderInput | FoodPackOrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: FoodPackOrderItemScalarWhereInput | FoodPackOrderItemScalarWhereInput[]
  }

  export type FoodPackOrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<FoodPackOrderItemCreateWithoutOrderInput, FoodPackOrderItemUncheckedCreateWithoutOrderInput> | FoodPackOrderItemCreateWithoutOrderInput[] | FoodPackOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: FoodPackOrderItemCreateOrConnectWithoutOrderInput | FoodPackOrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: FoodPackOrderItemUpsertWithWhereUniqueWithoutOrderInput | FoodPackOrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: FoodPackOrderItemCreateManyOrderInputEnvelope
    set?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
    disconnect?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
    delete?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
    connect?: FoodPackOrderItemWhereUniqueInput | FoodPackOrderItemWhereUniqueInput[]
    update?: FoodPackOrderItemUpdateWithWhereUniqueWithoutOrderInput | FoodPackOrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: FoodPackOrderItemUpdateManyWithWhereWithoutOrderInput | FoodPackOrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: FoodPackOrderItemScalarWhereInput | FoodPackOrderItemScalarWhereInput[]
  }

  export type MenuItemCreateNestedOneWithoutFoodPackOrderItemInput = {
    create?: XOR<MenuItemCreateWithoutFoodPackOrderItemInput, MenuItemUncheckedCreateWithoutFoodPackOrderItemInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutFoodPackOrderItemInput
    connect?: MenuItemWhereUniqueInput
  }

  export type FoodPackOrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<FoodPackOrderCreateWithoutItemsInput, FoodPackOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: FoodPackOrderCreateOrConnectWithoutItemsInput
    connect?: FoodPackOrderWhereUniqueInput
  }

  export type MenuItemUpdateOneRequiredWithoutFoodPackOrderItemNestedInput = {
    create?: XOR<MenuItemCreateWithoutFoodPackOrderItemInput, MenuItemUncheckedCreateWithoutFoodPackOrderItemInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutFoodPackOrderItemInput
    upsert?: MenuItemUpsertWithoutFoodPackOrderItemInput
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutFoodPackOrderItemInput, MenuItemUpdateWithoutFoodPackOrderItemInput>, MenuItemUncheckedUpdateWithoutFoodPackOrderItemInput>
  }

  export type FoodPackOrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<FoodPackOrderCreateWithoutItemsInput, FoodPackOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: FoodPackOrderCreateOrConnectWithoutItemsInput
    upsert?: FoodPackOrderUpsertWithoutItemsInput
    connect?: FoodPackOrderWhereUniqueInput
    update?: XOR<XOR<FoodPackOrderUpdateToOneWithWhereWithoutItemsInput, FoodPackOrderUpdateWithoutItemsInput>, FoodPackOrderUncheckedUpdateWithoutItemsInput>
  }

  export type EventOrderCreateequipmentListInput = {
    set: string[]
  }

  export type EventMenuSelectionCreateNestedManyWithoutEventOrderInput = {
    create?: XOR<EventMenuSelectionCreateWithoutEventOrderInput, EventMenuSelectionUncheckedCreateWithoutEventOrderInput> | EventMenuSelectionCreateWithoutEventOrderInput[] | EventMenuSelectionUncheckedCreateWithoutEventOrderInput[]
    connectOrCreate?: EventMenuSelectionCreateOrConnectWithoutEventOrderInput | EventMenuSelectionCreateOrConnectWithoutEventOrderInput[]
    createMany?: EventMenuSelectionCreateManyEventOrderInputEnvelope
    connect?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
  }

  export type EventPaymentCreateNestedManyWithoutEventOrderInput = {
    create?: XOR<EventPaymentCreateWithoutEventOrderInput, EventPaymentUncheckedCreateWithoutEventOrderInput> | EventPaymentCreateWithoutEventOrderInput[] | EventPaymentUncheckedCreateWithoutEventOrderInput[]
    connectOrCreate?: EventPaymentCreateOrConnectWithoutEventOrderInput | EventPaymentCreateOrConnectWithoutEventOrderInput[]
    createMany?: EventPaymentCreateManyEventOrderInputEnvelope
    connect?: EventPaymentWhereUniqueInput | EventPaymentWhereUniqueInput[]
  }

  export type EventMenuSelectionUncheckedCreateNestedManyWithoutEventOrderInput = {
    create?: XOR<EventMenuSelectionCreateWithoutEventOrderInput, EventMenuSelectionUncheckedCreateWithoutEventOrderInput> | EventMenuSelectionCreateWithoutEventOrderInput[] | EventMenuSelectionUncheckedCreateWithoutEventOrderInput[]
    connectOrCreate?: EventMenuSelectionCreateOrConnectWithoutEventOrderInput | EventMenuSelectionCreateOrConnectWithoutEventOrderInput[]
    createMany?: EventMenuSelectionCreateManyEventOrderInputEnvelope
    connect?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
  }

  export type EventPaymentUncheckedCreateNestedManyWithoutEventOrderInput = {
    create?: XOR<EventPaymentCreateWithoutEventOrderInput, EventPaymentUncheckedCreateWithoutEventOrderInput> | EventPaymentCreateWithoutEventOrderInput[] | EventPaymentUncheckedCreateWithoutEventOrderInput[]
    connectOrCreate?: EventPaymentCreateOrConnectWithoutEventOrderInput | EventPaymentCreateOrConnectWithoutEventOrderInput[]
    createMany?: EventPaymentCreateManyEventOrderInputEnvelope
    connect?: EventPaymentWhereUniqueInput | EventPaymentWhereUniqueInput[]
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type EnumVenueTypeFieldUpdateOperationsInput = {
    set?: $Enums.VenueType
  }

  export type EnumServiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ServiceType
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventOrderUpdateequipmentListInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EventMenuSelectionUpdateManyWithoutEventOrderNestedInput = {
    create?: XOR<EventMenuSelectionCreateWithoutEventOrderInput, EventMenuSelectionUncheckedCreateWithoutEventOrderInput> | EventMenuSelectionCreateWithoutEventOrderInput[] | EventMenuSelectionUncheckedCreateWithoutEventOrderInput[]
    connectOrCreate?: EventMenuSelectionCreateOrConnectWithoutEventOrderInput | EventMenuSelectionCreateOrConnectWithoutEventOrderInput[]
    upsert?: EventMenuSelectionUpsertWithWhereUniqueWithoutEventOrderInput | EventMenuSelectionUpsertWithWhereUniqueWithoutEventOrderInput[]
    createMany?: EventMenuSelectionCreateManyEventOrderInputEnvelope
    set?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
    disconnect?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
    delete?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
    connect?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
    update?: EventMenuSelectionUpdateWithWhereUniqueWithoutEventOrderInput | EventMenuSelectionUpdateWithWhereUniqueWithoutEventOrderInput[]
    updateMany?: EventMenuSelectionUpdateManyWithWhereWithoutEventOrderInput | EventMenuSelectionUpdateManyWithWhereWithoutEventOrderInput[]
    deleteMany?: EventMenuSelectionScalarWhereInput | EventMenuSelectionScalarWhereInput[]
  }

  export type EventPaymentUpdateManyWithoutEventOrderNestedInput = {
    create?: XOR<EventPaymentCreateWithoutEventOrderInput, EventPaymentUncheckedCreateWithoutEventOrderInput> | EventPaymentCreateWithoutEventOrderInput[] | EventPaymentUncheckedCreateWithoutEventOrderInput[]
    connectOrCreate?: EventPaymentCreateOrConnectWithoutEventOrderInput | EventPaymentCreateOrConnectWithoutEventOrderInput[]
    upsert?: EventPaymentUpsertWithWhereUniqueWithoutEventOrderInput | EventPaymentUpsertWithWhereUniqueWithoutEventOrderInput[]
    createMany?: EventPaymentCreateManyEventOrderInputEnvelope
    set?: EventPaymentWhereUniqueInput | EventPaymentWhereUniqueInput[]
    disconnect?: EventPaymentWhereUniqueInput | EventPaymentWhereUniqueInput[]
    delete?: EventPaymentWhereUniqueInput | EventPaymentWhereUniqueInput[]
    connect?: EventPaymentWhereUniqueInput | EventPaymentWhereUniqueInput[]
    update?: EventPaymentUpdateWithWhereUniqueWithoutEventOrderInput | EventPaymentUpdateWithWhereUniqueWithoutEventOrderInput[]
    updateMany?: EventPaymentUpdateManyWithWhereWithoutEventOrderInput | EventPaymentUpdateManyWithWhereWithoutEventOrderInput[]
    deleteMany?: EventPaymentScalarWhereInput | EventPaymentScalarWhereInput[]
  }

  export type EventMenuSelectionUncheckedUpdateManyWithoutEventOrderNestedInput = {
    create?: XOR<EventMenuSelectionCreateWithoutEventOrderInput, EventMenuSelectionUncheckedCreateWithoutEventOrderInput> | EventMenuSelectionCreateWithoutEventOrderInput[] | EventMenuSelectionUncheckedCreateWithoutEventOrderInput[]
    connectOrCreate?: EventMenuSelectionCreateOrConnectWithoutEventOrderInput | EventMenuSelectionCreateOrConnectWithoutEventOrderInput[]
    upsert?: EventMenuSelectionUpsertWithWhereUniqueWithoutEventOrderInput | EventMenuSelectionUpsertWithWhereUniqueWithoutEventOrderInput[]
    createMany?: EventMenuSelectionCreateManyEventOrderInputEnvelope
    set?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
    disconnect?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
    delete?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
    connect?: EventMenuSelectionWhereUniqueInput | EventMenuSelectionWhereUniqueInput[]
    update?: EventMenuSelectionUpdateWithWhereUniqueWithoutEventOrderInput | EventMenuSelectionUpdateWithWhereUniqueWithoutEventOrderInput[]
    updateMany?: EventMenuSelectionUpdateManyWithWhereWithoutEventOrderInput | EventMenuSelectionUpdateManyWithWhereWithoutEventOrderInput[]
    deleteMany?: EventMenuSelectionScalarWhereInput | EventMenuSelectionScalarWhereInput[]
  }

  export type EventPaymentUncheckedUpdateManyWithoutEventOrderNestedInput = {
    create?: XOR<EventPaymentCreateWithoutEventOrderInput, EventPaymentUncheckedCreateWithoutEventOrderInput> | EventPaymentCreateWithoutEventOrderInput[] | EventPaymentUncheckedCreateWithoutEventOrderInput[]
    connectOrCreate?: EventPaymentCreateOrConnectWithoutEventOrderInput | EventPaymentCreateOrConnectWithoutEventOrderInput[]
    upsert?: EventPaymentUpsertWithWhereUniqueWithoutEventOrderInput | EventPaymentUpsertWithWhereUniqueWithoutEventOrderInput[]
    createMany?: EventPaymentCreateManyEventOrderInputEnvelope
    set?: EventPaymentWhereUniqueInput | EventPaymentWhereUniqueInput[]
    disconnect?: EventPaymentWhereUniqueInput | EventPaymentWhereUniqueInput[]
    delete?: EventPaymentWhereUniqueInput | EventPaymentWhereUniqueInput[]
    connect?: EventPaymentWhereUniqueInput | EventPaymentWhereUniqueInput[]
    update?: EventPaymentUpdateWithWhereUniqueWithoutEventOrderInput | EventPaymentUpdateWithWhereUniqueWithoutEventOrderInput[]
    updateMany?: EventPaymentUpdateManyWithWhereWithoutEventOrderInput | EventPaymentUpdateManyWithWhereWithoutEventOrderInput[]
    deleteMany?: EventPaymentScalarWhereInput | EventPaymentScalarWhereInput[]
  }

  export type EventOrderCreateNestedOneWithoutMenuSelectionsInput = {
    create?: XOR<EventOrderCreateWithoutMenuSelectionsInput, EventOrderUncheckedCreateWithoutMenuSelectionsInput>
    connectOrCreate?: EventOrderCreateOrConnectWithoutMenuSelectionsInput
    connect?: EventOrderWhereUniqueInput
  }

  export type MenuItemCreateNestedOneWithoutEventMenuSelectionInput = {
    create?: XOR<MenuItemCreateWithoutEventMenuSelectionInput, MenuItemUncheckedCreateWithoutEventMenuSelectionInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutEventMenuSelectionInput
    connect?: MenuItemWhereUniqueInput
  }

  export type EventOrderUpdateOneRequiredWithoutMenuSelectionsNestedInput = {
    create?: XOR<EventOrderCreateWithoutMenuSelectionsInput, EventOrderUncheckedCreateWithoutMenuSelectionsInput>
    connectOrCreate?: EventOrderCreateOrConnectWithoutMenuSelectionsInput
    upsert?: EventOrderUpsertWithoutMenuSelectionsInput
    connect?: EventOrderWhereUniqueInput
    update?: XOR<XOR<EventOrderUpdateToOneWithWhereWithoutMenuSelectionsInput, EventOrderUpdateWithoutMenuSelectionsInput>, EventOrderUncheckedUpdateWithoutMenuSelectionsInput>
  }

  export type MenuItemUpdateOneRequiredWithoutEventMenuSelectionNestedInput = {
    create?: XOR<MenuItemCreateWithoutEventMenuSelectionInput, MenuItemUncheckedCreateWithoutEventMenuSelectionInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutEventMenuSelectionInput
    upsert?: MenuItemUpsertWithoutEventMenuSelectionInput
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutEventMenuSelectionInput, MenuItemUpdateWithoutEventMenuSelectionInput>, MenuItemUncheckedUpdateWithoutEventMenuSelectionInput>
  }

  export type EventMenuOptionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<EventMenuOptionCreateWithoutCategoryInput, EventMenuOptionUncheckedCreateWithoutCategoryInput> | EventMenuOptionCreateWithoutCategoryInput[] | EventMenuOptionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EventMenuOptionCreateOrConnectWithoutCategoryInput | EventMenuOptionCreateOrConnectWithoutCategoryInput[]
    createMany?: EventMenuOptionCreateManyCategoryInputEnvelope
    connect?: EventMenuOptionWhereUniqueInput | EventMenuOptionWhereUniqueInput[]
  }

  export type EventMenuOptionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<EventMenuOptionCreateWithoutCategoryInput, EventMenuOptionUncheckedCreateWithoutCategoryInput> | EventMenuOptionCreateWithoutCategoryInput[] | EventMenuOptionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EventMenuOptionCreateOrConnectWithoutCategoryInput | EventMenuOptionCreateOrConnectWithoutCategoryInput[]
    createMany?: EventMenuOptionCreateManyCategoryInputEnvelope
    connect?: EventMenuOptionWhereUniqueInput | EventMenuOptionWhereUniqueInput[]
  }

  export type EventMenuOptionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<EventMenuOptionCreateWithoutCategoryInput, EventMenuOptionUncheckedCreateWithoutCategoryInput> | EventMenuOptionCreateWithoutCategoryInput[] | EventMenuOptionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EventMenuOptionCreateOrConnectWithoutCategoryInput | EventMenuOptionCreateOrConnectWithoutCategoryInput[]
    upsert?: EventMenuOptionUpsertWithWhereUniqueWithoutCategoryInput | EventMenuOptionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: EventMenuOptionCreateManyCategoryInputEnvelope
    set?: EventMenuOptionWhereUniqueInput | EventMenuOptionWhereUniqueInput[]
    disconnect?: EventMenuOptionWhereUniqueInput | EventMenuOptionWhereUniqueInput[]
    delete?: EventMenuOptionWhereUniqueInput | EventMenuOptionWhereUniqueInput[]
    connect?: EventMenuOptionWhereUniqueInput | EventMenuOptionWhereUniqueInput[]
    update?: EventMenuOptionUpdateWithWhereUniqueWithoutCategoryInput | EventMenuOptionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: EventMenuOptionUpdateManyWithWhereWithoutCategoryInput | EventMenuOptionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: EventMenuOptionScalarWhereInput | EventMenuOptionScalarWhereInput[]
  }

  export type EventMenuOptionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<EventMenuOptionCreateWithoutCategoryInput, EventMenuOptionUncheckedCreateWithoutCategoryInput> | EventMenuOptionCreateWithoutCategoryInput[] | EventMenuOptionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EventMenuOptionCreateOrConnectWithoutCategoryInput | EventMenuOptionCreateOrConnectWithoutCategoryInput[]
    upsert?: EventMenuOptionUpsertWithWhereUniqueWithoutCategoryInput | EventMenuOptionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: EventMenuOptionCreateManyCategoryInputEnvelope
    set?: EventMenuOptionWhereUniqueInput | EventMenuOptionWhereUniqueInput[]
    disconnect?: EventMenuOptionWhereUniqueInput | EventMenuOptionWhereUniqueInput[]
    delete?: EventMenuOptionWhereUniqueInput | EventMenuOptionWhereUniqueInput[]
    connect?: EventMenuOptionWhereUniqueInput | EventMenuOptionWhereUniqueInput[]
    update?: EventMenuOptionUpdateWithWhereUniqueWithoutCategoryInput | EventMenuOptionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: EventMenuOptionUpdateManyWithWhereWithoutCategoryInput | EventMenuOptionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: EventMenuOptionScalarWhereInput | EventMenuOptionScalarWhereInput[]
  }

  export type EventMenuCategoryCreateNestedOneWithoutOptionsInput = {
    create?: XOR<EventMenuCategoryCreateWithoutOptionsInput, EventMenuCategoryUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: EventMenuCategoryCreateOrConnectWithoutOptionsInput
    connect?: EventMenuCategoryWhereUniqueInput
  }

  export type EventMenuCategoryUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<EventMenuCategoryCreateWithoutOptionsInput, EventMenuCategoryUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: EventMenuCategoryCreateOrConnectWithoutOptionsInput
    upsert?: EventMenuCategoryUpsertWithoutOptionsInput
    connect?: EventMenuCategoryWhereUniqueInput
    update?: XOR<XOR<EventMenuCategoryUpdateToOneWithWhereWithoutOptionsInput, EventMenuCategoryUpdateWithoutOptionsInput>, EventMenuCategoryUncheckedUpdateWithoutOptionsInput>
  }

  export type EventOrderCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<EventOrderCreateWithoutPaymentsInput, EventOrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: EventOrderCreateOrConnectWithoutPaymentsInput
    connect?: EventOrderWhereUniqueInput
  }

  export type EventOrderUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<EventOrderCreateWithoutPaymentsInput, EventOrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: EventOrderCreateOrConnectWithoutPaymentsInput
    upsert?: EventOrderUpsertWithoutPaymentsInput
    connect?: EventOrderWhereUniqueInput
    update?: XOR<XOR<EventOrderUpdateToOneWithWhereWithoutPaymentsInput, EventOrderUpdateWithoutPaymentsInput>, EventOrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumOrderSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderSource | EnumOrderSourceFieldRefInput<$PrismaModel>
    in?: $Enums.OrderSource[] | ListEnumOrderSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderSource[] | ListEnumOrderSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderSourceFilter<$PrismaModel> | $Enums.OrderSource
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumOrderSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderSource | EnumOrderSourceFieldRefInput<$PrismaModel>
    in?: $Enums.OrderSource[] | ListEnumOrderSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderSource[] | ListEnumOrderSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderSourceWithAggregatesFilter<$PrismaModel> | $Enums.OrderSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderSourceFilter<$PrismaModel>
    _max?: NestedEnumOrderSourceFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumFoodPackStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodPackStatus | EnumFoodPackStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FoodPackStatus[] | ListEnumFoodPackStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodPackStatus[] | ListEnumFoodPackStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodPackStatusFilter<$PrismaModel> | $Enums.FoodPackStatus
  }

  export type NestedEnumDeliveryMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryMethod | EnumDeliveryMethodFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryMethod[] | ListEnumDeliveryMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryMethod[] | ListEnumDeliveryMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryMethodFilter<$PrismaModel> | $Enums.DeliveryMethod
  }

  export type NestedEnumFoodPackStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodPackStatus | EnumFoodPackStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FoodPackStatus[] | ListEnumFoodPackStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodPackStatus[] | ListEnumFoodPackStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodPackStatusWithAggregatesFilter<$PrismaModel> | $Enums.FoodPackStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFoodPackStatusFilter<$PrismaModel>
    _max?: NestedEnumFoodPackStatusFilter<$PrismaModel>
  }

  export type NestedEnumDeliveryMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryMethod | EnumDeliveryMethodFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryMethod[] | ListEnumDeliveryMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryMethod[] | ListEnumDeliveryMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryMethodWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryMethodFilter<$PrismaModel>
    _max?: NestedEnumDeliveryMethodFilter<$PrismaModel>
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type NestedEnumVenueTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VenueType | EnumVenueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VenueType[] | ListEnumVenueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VenueType[] | ListEnumVenueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVenueTypeFilter<$PrismaModel> | $Enums.VenueType
  }

  export type NestedEnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type NestedEnumVenueTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VenueType | EnumVenueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VenueType[] | ListEnumVenueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VenueType[] | ListEnumVenueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVenueTypeWithAggregatesFilter<$PrismaModel> | $Enums.VenueType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVenueTypeFilter<$PrismaModel>
    _max?: NestedEnumVenueTypeFilter<$PrismaModel>
  }

  export type NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ActiveSessionCreateWithoutUserInput = {
    id?: string
    sessionId?: string
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type ActiveSessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionId?: string
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type ActiveSessionCreateOrConnectWithoutUserInput = {
    where: ActiveSessionWhereUniqueInput
    create: XOR<ActiveSessionCreateWithoutUserInput, ActiveSessionUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    userName?: string | null
    action: string
    entity: string
    entityId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    userName?: string | null
    action: string
    entity: string
    entityId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutConfirmedByInput = {
    id?: string
    ref: string
    customerName: string
    customerPhone?: string | null
    items: JsonNullValueInput | InputJsonValue
    subtotal: number
    total: number
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentStatus?: $Enums.PaymentStatus
    source?: $Enums.OrderSource
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    confirmedAt?: Date | string | null
    createdBy?: UserCreateNestedOneWithoutOrdersCreatedInput
  }

  export type OrderUncheckedCreateWithoutConfirmedByInput = {
    id?: string
    ref: string
    customerName: string
    customerPhone?: string | null
    items: JsonNullValueInput | InputJsonValue
    subtotal: number
    total: number
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentStatus?: $Enums.PaymentStatus
    source?: $Enums.OrderSource
    notes?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type OrderCreateOrConnectWithoutConfirmedByInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutConfirmedByInput, OrderUncheckedCreateWithoutConfirmedByInput>
  }

  export type OrderCreateManyConfirmedByInputEnvelope = {
    data: OrderCreateManyConfirmedByInput | OrderCreateManyConfirmedByInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutCreatedByInput = {
    id?: string
    ref: string
    customerName: string
    customerPhone?: string | null
    items: JsonNullValueInput | InputJsonValue
    subtotal: number
    total: number
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentStatus?: $Enums.PaymentStatus
    source?: $Enums.OrderSource
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    confirmedAt?: Date | string | null
    confirmedBy?: UserCreateNestedOneWithoutOrdersConfirmedInput
  }

  export type OrderUncheckedCreateWithoutCreatedByInput = {
    id?: string
    ref: string
    customerName: string
    customerPhone?: string | null
    items: JsonNullValueInput | InputJsonValue
    subtotal: number
    total: number
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentStatus?: $Enums.PaymentStatus
    source?: $Enums.OrderSource
    notes?: string | null
    confirmedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type OrderCreateOrConnectWithoutCreatedByInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput>
  }

  export type OrderCreateManyCreatedByInputEnvelope = {
    data: OrderCreateManyCreatedByInput | OrderCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ActiveSessionUpsertWithoutUserInput = {
    update: XOR<ActiveSessionUpdateWithoutUserInput, ActiveSessionUncheckedUpdateWithoutUserInput>
    create: XOR<ActiveSessionCreateWithoutUserInput, ActiveSessionUncheckedCreateWithoutUserInput>
    where?: ActiveSessionWhereInput
  }

  export type ActiveSessionUpdateToOneWithWhereWithoutUserInput = {
    where?: ActiveSessionWhereInput
    data: XOR<ActiveSessionUpdateWithoutUserInput, ActiveSessionUncheckedUpdateWithoutUserInput>
  }

  export type ActiveSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    userName?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    meta?: JsonNullableFilter<"AuditLog">
    ip?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutConfirmedByInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutConfirmedByInput, OrderUncheckedUpdateWithoutConfirmedByInput>
    create: XOR<OrderCreateWithoutConfirmedByInput, OrderUncheckedCreateWithoutConfirmedByInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutConfirmedByInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutConfirmedByInput, OrderUncheckedUpdateWithoutConfirmedByInput>
  }

  export type OrderUpdateManyWithWhereWithoutConfirmedByInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutConfirmedByInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    ref?: StringFilter<"Order"> | string
    customerName?: StringFilter<"Order"> | string
    customerPhone?: StringNullableFilter<"Order"> | string | null
    items?: JsonFilter<"Order">
    subtotal?: FloatFilter<"Order"> | number
    total?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    paymentMethod?: EnumPaymentMethodNullableFilter<"Order"> | $Enums.PaymentMethod | null
    paymentStatus?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    source?: EnumOrderSourceFilter<"Order"> | $Enums.OrderSource
    notes?: StringNullableFilter<"Order"> | string | null
    createdById?: StringNullableFilter<"Order"> | string | null
    confirmedById?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
  }

  export type OrderUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCreatedByInput, OrderUncheckedUpdateWithoutCreatedByInput>
    create: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCreatedByInput, OrderUncheckedUpdateWithoutCreatedByInput>
  }

  export type OrderUpdateManyWithWhereWithoutCreatedByInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type UserCreateWithoutActiveSessionInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    ordersConfirmed?: OrderCreateNestedManyWithoutConfirmedByInput
    ordersCreated?: OrderCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutActiveSessionInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    ordersConfirmed?: OrderUncheckedCreateNestedManyWithoutConfirmedByInput
    ordersCreated?: OrderUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutActiveSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActiveSessionInput, UserUncheckedCreateWithoutActiveSessionInput>
  }

  export type UserUpsertWithoutActiveSessionInput = {
    update: XOR<UserUpdateWithoutActiveSessionInput, UserUncheckedUpdateWithoutActiveSessionInput>
    create: XOR<UserCreateWithoutActiveSessionInput, UserUncheckedCreateWithoutActiveSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActiveSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActiveSessionInput, UserUncheckedUpdateWithoutActiveSessionInput>
  }

  export type UserUpdateWithoutActiveSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    ordersConfirmed?: OrderUpdateManyWithoutConfirmedByNestedInput
    ordersCreated?: OrderUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutActiveSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    ordersConfirmed?: OrderUncheckedUpdateManyWithoutConfirmedByNestedInput
    ordersCreated?: OrderUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutOrdersConfirmedInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeSession?: ActiveSessionCreateNestedOneWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    ordersCreated?: OrderCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutOrdersConfirmedInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeSession?: ActiveSessionUncheckedCreateNestedOneWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    ordersCreated?: OrderUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutOrdersConfirmedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersConfirmedInput, UserUncheckedCreateWithoutOrdersConfirmedInput>
  }

  export type UserCreateWithoutOrdersCreatedInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeSession?: ActiveSessionCreateNestedOneWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    ordersConfirmed?: OrderCreateNestedManyWithoutConfirmedByInput
  }

  export type UserUncheckedCreateWithoutOrdersCreatedInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeSession?: ActiveSessionUncheckedCreateNestedOneWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    ordersConfirmed?: OrderUncheckedCreateNestedManyWithoutConfirmedByInput
  }

  export type UserCreateOrConnectWithoutOrdersCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersCreatedInput, UserUncheckedCreateWithoutOrdersCreatedInput>
  }

  export type UserUpsertWithoutOrdersConfirmedInput = {
    update: XOR<UserUpdateWithoutOrdersConfirmedInput, UserUncheckedUpdateWithoutOrdersConfirmedInput>
    create: XOR<UserCreateWithoutOrdersConfirmedInput, UserUncheckedCreateWithoutOrdersConfirmedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersConfirmedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersConfirmedInput, UserUncheckedUpdateWithoutOrdersConfirmedInput>
  }

  export type UserUpdateWithoutOrdersConfirmedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeSession?: ActiveSessionUpdateOneWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    ordersCreated?: OrderUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersConfirmedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeSession?: ActiveSessionUncheckedUpdateOneWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    ordersCreated?: OrderUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUpsertWithoutOrdersCreatedInput = {
    update: XOR<UserUpdateWithoutOrdersCreatedInput, UserUncheckedUpdateWithoutOrdersCreatedInput>
    create: XOR<UserCreateWithoutOrdersCreatedInput, UserUncheckedCreateWithoutOrdersCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersCreatedInput, UserUncheckedUpdateWithoutOrdersCreatedInput>
  }

  export type UserUpdateWithoutOrdersCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeSession?: ActiveSessionUpdateOneWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    ordersConfirmed?: OrderUpdateManyWithoutConfirmedByNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeSession?: ActiveSessionUncheckedUpdateOneWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    ordersConfirmed?: OrderUncheckedUpdateManyWithoutConfirmedByNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeSession?: ActiveSessionCreateNestedOneWithoutUserInput
    ordersConfirmed?: OrderCreateNestedManyWithoutConfirmedByInput
    ordersCreated?: OrderCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeSession?: ActiveSessionUncheckedCreateNestedOneWithoutUserInput
    ordersConfirmed?: OrderUncheckedCreateNestedManyWithoutConfirmedByInput
    ordersCreated?: OrderUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeSession?: ActiveSessionUpdateOneWithoutUserNestedInput
    ordersConfirmed?: OrderUpdateManyWithoutConfirmedByNestedInput
    ordersCreated?: OrderUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeSession?: ActiveSessionUncheckedUpdateOneWithoutUserNestedInput
    ordersConfirmed?: OrderUncheckedUpdateManyWithoutConfirmedByNestedInput
    ordersCreated?: OrderUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type MenuItemCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    priceNGN: number
    imageUrl?: string | null
    isAvailable?: boolean
    isFeatured?: boolean
    isSpicy?: boolean
    tags?: MenuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    sortOrder?: number
    publicId?: string | null
    EventMenuSelection?: EventMenuSelectionCreateNestedManyWithoutMenuItemInput
    FoodPackOrderItem?: FoodPackOrderItemCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    priceNGN: number
    imageUrl?: string | null
    isAvailable?: boolean
    isFeatured?: boolean
    isSpicy?: boolean
    tags?: MenuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    sortOrder?: number
    publicId?: string | null
    EventMenuSelection?: EventMenuSelectionUncheckedCreateNestedManyWithoutMenuItemInput
    FoodPackOrderItem?: FoodPackOrderItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemCreateManyCategoryInputEnvelope = {
    data: MenuItemCreateManyCategoryInput | MenuItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MenuItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    update: XOR<MenuItemUpdateWithoutCategoryInput, MenuItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    data: XOR<MenuItemUpdateWithoutCategoryInput, MenuItemUncheckedUpdateWithoutCategoryInput>
  }

  export type MenuItemUpdateManyWithWhereWithoutCategoryInput = {
    where: MenuItemScalarWhereInput
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type MenuItemScalarWhereInput = {
    AND?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    OR?: MenuItemScalarWhereInput[]
    NOT?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    priceNGN?: FloatFilter<"MenuItem"> | number
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    isAvailable?: BoolFilter<"MenuItem"> | boolean
    isFeatured?: BoolFilter<"MenuItem"> | boolean
    isSpicy?: BoolFilter<"MenuItem"> | boolean
    tags?: StringNullableListFilter<"MenuItem">
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    categoryId?: StringFilter<"MenuItem"> | string
    slug?: StringFilter<"MenuItem"> | string
    sortOrder?: IntFilter<"MenuItem"> | number
    publicId?: StringNullableFilter<"MenuItem"> | string | null
  }

  export type EventMenuSelectionCreateWithoutMenuItemInput = {
    id?: string
    quantity?: number
    unitPrice: number
    totalPrice?: number
    notes?: string | null
    eventOrder: EventOrderCreateNestedOneWithoutMenuSelectionsInput
  }

  export type EventMenuSelectionUncheckedCreateWithoutMenuItemInput = {
    id?: string
    quantity?: number
    unitPrice: number
    totalPrice?: number
    notes?: string | null
    eventOrderId: string
  }

  export type EventMenuSelectionCreateOrConnectWithoutMenuItemInput = {
    where: EventMenuSelectionWhereUniqueInput
    create: XOR<EventMenuSelectionCreateWithoutMenuItemInput, EventMenuSelectionUncheckedCreateWithoutMenuItemInput>
  }

  export type EventMenuSelectionCreateManyMenuItemInputEnvelope = {
    data: EventMenuSelectionCreateManyMenuItemInput | EventMenuSelectionCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type FoodPackOrderItemCreateWithoutMenuItemInput = {
    id?: string
    quantity: number
    unitPrice: number
    totalPrice: number
    order: FoodPackOrderCreateNestedOneWithoutItemsInput
  }

  export type FoodPackOrderItemUncheckedCreateWithoutMenuItemInput = {
    id?: string
    quantity: number
    unitPrice: number
    totalPrice: number
    orderId: string
  }

  export type FoodPackOrderItemCreateOrConnectWithoutMenuItemInput = {
    where: FoodPackOrderItemWhereUniqueInput
    create: XOR<FoodPackOrderItemCreateWithoutMenuItemInput, FoodPackOrderItemUncheckedCreateWithoutMenuItemInput>
  }

  export type FoodPackOrderItemCreateManyMenuItemInputEnvelope = {
    data: FoodPackOrderItemCreateManyMenuItemInput | FoodPackOrderItemCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type MenuCategoryCreateWithoutItemsInput = {
    id?: string
    name: string
    slug: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuCategoryUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    slug: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuCategoryCreateOrConnectWithoutItemsInput = {
    where: MenuCategoryWhereUniqueInput
    create: XOR<MenuCategoryCreateWithoutItemsInput, MenuCategoryUncheckedCreateWithoutItemsInput>
  }

  export type EventMenuSelectionUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: EventMenuSelectionWhereUniqueInput
    update: XOR<EventMenuSelectionUpdateWithoutMenuItemInput, EventMenuSelectionUncheckedUpdateWithoutMenuItemInput>
    create: XOR<EventMenuSelectionCreateWithoutMenuItemInput, EventMenuSelectionUncheckedCreateWithoutMenuItemInput>
  }

  export type EventMenuSelectionUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: EventMenuSelectionWhereUniqueInput
    data: XOR<EventMenuSelectionUpdateWithoutMenuItemInput, EventMenuSelectionUncheckedUpdateWithoutMenuItemInput>
  }

  export type EventMenuSelectionUpdateManyWithWhereWithoutMenuItemInput = {
    where: EventMenuSelectionScalarWhereInput
    data: XOR<EventMenuSelectionUpdateManyMutationInput, EventMenuSelectionUncheckedUpdateManyWithoutMenuItemInput>
  }

  export type EventMenuSelectionScalarWhereInput = {
    AND?: EventMenuSelectionScalarWhereInput | EventMenuSelectionScalarWhereInput[]
    OR?: EventMenuSelectionScalarWhereInput[]
    NOT?: EventMenuSelectionScalarWhereInput | EventMenuSelectionScalarWhereInput[]
    id?: StringFilter<"EventMenuSelection"> | string
    menuItemId?: StringFilter<"EventMenuSelection"> | string
    quantity?: IntFilter<"EventMenuSelection"> | number
    unitPrice?: IntFilter<"EventMenuSelection"> | number
    totalPrice?: IntFilter<"EventMenuSelection"> | number
    notes?: StringNullableFilter<"EventMenuSelection"> | string | null
    eventOrderId?: StringFilter<"EventMenuSelection"> | string
  }

  export type FoodPackOrderItemUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: FoodPackOrderItemWhereUniqueInput
    update: XOR<FoodPackOrderItemUpdateWithoutMenuItemInput, FoodPackOrderItemUncheckedUpdateWithoutMenuItemInput>
    create: XOR<FoodPackOrderItemCreateWithoutMenuItemInput, FoodPackOrderItemUncheckedCreateWithoutMenuItemInput>
  }

  export type FoodPackOrderItemUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: FoodPackOrderItemWhereUniqueInput
    data: XOR<FoodPackOrderItemUpdateWithoutMenuItemInput, FoodPackOrderItemUncheckedUpdateWithoutMenuItemInput>
  }

  export type FoodPackOrderItemUpdateManyWithWhereWithoutMenuItemInput = {
    where: FoodPackOrderItemScalarWhereInput
    data: XOR<FoodPackOrderItemUpdateManyMutationInput, FoodPackOrderItemUncheckedUpdateManyWithoutMenuItemInput>
  }

  export type FoodPackOrderItemScalarWhereInput = {
    AND?: FoodPackOrderItemScalarWhereInput | FoodPackOrderItemScalarWhereInput[]
    OR?: FoodPackOrderItemScalarWhereInput[]
    NOT?: FoodPackOrderItemScalarWhereInput | FoodPackOrderItemScalarWhereInput[]
    id?: StringFilter<"FoodPackOrderItem"> | string
    quantity?: IntFilter<"FoodPackOrderItem"> | number
    unitPrice?: FloatFilter<"FoodPackOrderItem"> | number
    totalPrice?: FloatFilter<"FoodPackOrderItem"> | number
    orderId?: StringFilter<"FoodPackOrderItem"> | string
    menuItemId?: StringFilter<"FoodPackOrderItem"> | string
  }

  export type MenuCategoryUpsertWithoutItemsInput = {
    update: XOR<MenuCategoryUpdateWithoutItemsInput, MenuCategoryUncheckedUpdateWithoutItemsInput>
    create: XOR<MenuCategoryCreateWithoutItemsInput, MenuCategoryUncheckedCreateWithoutItemsInput>
    where?: MenuCategoryWhereInput
  }

  export type MenuCategoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: MenuCategoryWhereInput
    data: XOR<MenuCategoryUpdateWithoutItemsInput, MenuCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type MenuCategoryUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCategoryUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodPackOrderItemCreateWithoutOrderInput = {
    id?: string
    quantity: number
    unitPrice: number
    totalPrice: number
    menuItem: MenuItemCreateNestedOneWithoutFoodPackOrderItemInput
  }

  export type FoodPackOrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    quantity: number
    unitPrice: number
    totalPrice: number
    menuItemId: string
  }

  export type FoodPackOrderItemCreateOrConnectWithoutOrderInput = {
    where: FoodPackOrderItemWhereUniqueInput
    create: XOR<FoodPackOrderItemCreateWithoutOrderInput, FoodPackOrderItemUncheckedCreateWithoutOrderInput>
  }

  export type FoodPackOrderItemCreateManyOrderInputEnvelope = {
    data: FoodPackOrderItemCreateManyOrderInput | FoodPackOrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type FoodPackOrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: FoodPackOrderItemWhereUniqueInput
    update: XOR<FoodPackOrderItemUpdateWithoutOrderInput, FoodPackOrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<FoodPackOrderItemCreateWithoutOrderInput, FoodPackOrderItemUncheckedCreateWithoutOrderInput>
  }

  export type FoodPackOrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: FoodPackOrderItemWhereUniqueInput
    data: XOR<FoodPackOrderItemUpdateWithoutOrderInput, FoodPackOrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type FoodPackOrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: FoodPackOrderItemScalarWhereInput
    data: XOR<FoodPackOrderItemUpdateManyMutationInput, FoodPackOrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type MenuItemCreateWithoutFoodPackOrderItemInput = {
    id?: string
    name: string
    description?: string | null
    priceNGN: number
    imageUrl?: string | null
    isAvailable?: boolean
    isFeatured?: boolean
    isSpicy?: boolean
    tags?: MenuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    sortOrder?: number
    publicId?: string | null
    EventMenuSelection?: EventMenuSelectionCreateNestedManyWithoutMenuItemInput
    category: MenuCategoryCreateNestedOneWithoutItemsInput
  }

  export type MenuItemUncheckedCreateWithoutFoodPackOrderItemInput = {
    id?: string
    name: string
    description?: string | null
    priceNGN: number
    imageUrl?: string | null
    isAvailable?: boolean
    isFeatured?: boolean
    isSpicy?: boolean
    tags?: MenuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    slug: string
    sortOrder?: number
    publicId?: string | null
    EventMenuSelection?: EventMenuSelectionUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutFoodPackOrderItemInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutFoodPackOrderItemInput, MenuItemUncheckedCreateWithoutFoodPackOrderItemInput>
  }

  export type FoodPackOrderCreateWithoutItemsInput = {
    id?: string
    orderNumber?: string
    status?: $Enums.FoodPackStatus
    customerName: string
    customerPhone: string
    customerEmail?: string | null
    deliveryMethod?: $Enums.DeliveryMethod
    deliveryAddress?: string | null
    deliveryDate?: Date | string | null
    specialNotes?: string | null
    totalAmountNGN: number
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodPackOrderUncheckedCreateWithoutItemsInput = {
    id?: string
    orderNumber?: string
    status?: $Enums.FoodPackStatus
    customerName: string
    customerPhone: string
    customerEmail?: string | null
    deliveryMethod?: $Enums.DeliveryMethod
    deliveryAddress?: string | null
    deliveryDate?: Date | string | null
    specialNotes?: string | null
    totalAmountNGN: number
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodPackOrderCreateOrConnectWithoutItemsInput = {
    where: FoodPackOrderWhereUniqueInput
    create: XOR<FoodPackOrderCreateWithoutItemsInput, FoodPackOrderUncheckedCreateWithoutItemsInput>
  }

  export type MenuItemUpsertWithoutFoodPackOrderItemInput = {
    update: XOR<MenuItemUpdateWithoutFoodPackOrderItemInput, MenuItemUncheckedUpdateWithoutFoodPackOrderItemInput>
    create: XOR<MenuItemCreateWithoutFoodPackOrderItemInput, MenuItemUncheckedCreateWithoutFoodPackOrderItemInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutFoodPackOrderItemInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutFoodPackOrderItemInput, MenuItemUncheckedUpdateWithoutFoodPackOrderItemInput>
  }

  export type MenuItemUpdateWithoutFoodPackOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceNGN?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSpicy?: BoolFieldUpdateOperationsInput | boolean
    tags?: MenuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    EventMenuSelection?: EventMenuSelectionUpdateManyWithoutMenuItemNestedInput
    category?: MenuCategoryUpdateOneRequiredWithoutItemsNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutFoodPackOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceNGN?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSpicy?: BoolFieldUpdateOperationsInput | boolean
    tags?: MenuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    EventMenuSelection?: EventMenuSelectionUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type FoodPackOrderUpsertWithoutItemsInput = {
    update: XOR<FoodPackOrderUpdateWithoutItemsInput, FoodPackOrderUncheckedUpdateWithoutItemsInput>
    create: XOR<FoodPackOrderCreateWithoutItemsInput, FoodPackOrderUncheckedCreateWithoutItemsInput>
    where?: FoodPackOrderWhereInput
  }

  export type FoodPackOrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: FoodPackOrderWhereInput
    data: XOR<FoodPackOrderUpdateWithoutItemsInput, FoodPackOrderUncheckedUpdateWithoutItemsInput>
  }

  export type FoodPackOrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumFoodPackStatusFieldUpdateOperationsInput | $Enums.FoodPackStatus
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryMethod?: EnumDeliveryMethodFieldUpdateOperationsInput | $Enums.DeliveryMethod
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialNotes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmountNGN?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodPackOrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumFoodPackStatusFieldUpdateOperationsInput | $Enums.FoodPackStatus
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryMethod?: EnumDeliveryMethodFieldUpdateOperationsInput | $Enums.DeliveryMethod
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialNotes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmountNGN?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventMenuSelectionCreateWithoutEventOrderInput = {
    id?: string
    quantity?: number
    unitPrice: number
    totalPrice?: number
    notes?: string | null
    menuItem: MenuItemCreateNestedOneWithoutEventMenuSelectionInput
  }

  export type EventMenuSelectionUncheckedCreateWithoutEventOrderInput = {
    id?: string
    menuItemId: string
    quantity?: number
    unitPrice: number
    totalPrice?: number
    notes?: string | null
  }

  export type EventMenuSelectionCreateOrConnectWithoutEventOrderInput = {
    where: EventMenuSelectionWhereUniqueInput
    create: XOR<EventMenuSelectionCreateWithoutEventOrderInput, EventMenuSelectionUncheckedCreateWithoutEventOrderInput>
  }

  export type EventMenuSelectionCreateManyEventOrderInputEnvelope = {
    data: EventMenuSelectionCreateManyEventOrderInput | EventMenuSelectionCreateManyEventOrderInput[]
    skipDuplicates?: boolean
  }

  export type EventPaymentCreateWithoutEventOrderInput = {
    id?: string
    amountNGN: number
    paymentMethod: string
    status?: $Enums.PaymentStatus
    reference?: string | null
    paidAt?: Date | string
    note?: string | null
  }

  export type EventPaymentUncheckedCreateWithoutEventOrderInput = {
    id?: string
    amountNGN: number
    paymentMethod: string
    status?: $Enums.PaymentStatus
    reference?: string | null
    paidAt?: Date | string
    note?: string | null
  }

  export type EventPaymentCreateOrConnectWithoutEventOrderInput = {
    where: EventPaymentWhereUniqueInput
    create: XOR<EventPaymentCreateWithoutEventOrderInput, EventPaymentUncheckedCreateWithoutEventOrderInput>
  }

  export type EventPaymentCreateManyEventOrderInputEnvelope = {
    data: EventPaymentCreateManyEventOrderInput | EventPaymentCreateManyEventOrderInput[]
    skipDuplicates?: boolean
  }

  export type EventMenuSelectionUpsertWithWhereUniqueWithoutEventOrderInput = {
    where: EventMenuSelectionWhereUniqueInput
    update: XOR<EventMenuSelectionUpdateWithoutEventOrderInput, EventMenuSelectionUncheckedUpdateWithoutEventOrderInput>
    create: XOR<EventMenuSelectionCreateWithoutEventOrderInput, EventMenuSelectionUncheckedCreateWithoutEventOrderInput>
  }

  export type EventMenuSelectionUpdateWithWhereUniqueWithoutEventOrderInput = {
    where: EventMenuSelectionWhereUniqueInput
    data: XOR<EventMenuSelectionUpdateWithoutEventOrderInput, EventMenuSelectionUncheckedUpdateWithoutEventOrderInput>
  }

  export type EventMenuSelectionUpdateManyWithWhereWithoutEventOrderInput = {
    where: EventMenuSelectionScalarWhereInput
    data: XOR<EventMenuSelectionUpdateManyMutationInput, EventMenuSelectionUncheckedUpdateManyWithoutEventOrderInput>
  }

  export type EventPaymentUpsertWithWhereUniqueWithoutEventOrderInput = {
    where: EventPaymentWhereUniqueInput
    update: XOR<EventPaymentUpdateWithoutEventOrderInput, EventPaymentUncheckedUpdateWithoutEventOrderInput>
    create: XOR<EventPaymentCreateWithoutEventOrderInput, EventPaymentUncheckedCreateWithoutEventOrderInput>
  }

  export type EventPaymentUpdateWithWhereUniqueWithoutEventOrderInput = {
    where: EventPaymentWhereUniqueInput
    data: XOR<EventPaymentUpdateWithoutEventOrderInput, EventPaymentUncheckedUpdateWithoutEventOrderInput>
  }

  export type EventPaymentUpdateManyWithWhereWithoutEventOrderInput = {
    where: EventPaymentScalarWhereInput
    data: XOR<EventPaymentUpdateManyMutationInput, EventPaymentUncheckedUpdateManyWithoutEventOrderInput>
  }

  export type EventPaymentScalarWhereInput = {
    AND?: EventPaymentScalarWhereInput | EventPaymentScalarWhereInput[]
    OR?: EventPaymentScalarWhereInput[]
    NOT?: EventPaymentScalarWhereInput | EventPaymentScalarWhereInput[]
    id?: StringFilter<"EventPayment"> | string
    amountNGN?: FloatFilter<"EventPayment"> | number
    paymentMethod?: StringFilter<"EventPayment"> | string
    status?: EnumPaymentStatusFilter<"EventPayment"> | $Enums.PaymentStatus
    reference?: StringNullableFilter<"EventPayment"> | string | null
    paidAt?: DateTimeFilter<"EventPayment"> | Date | string
    note?: StringNullableFilter<"EventPayment"> | string | null
    eventOrderId?: StringFilter<"EventPayment"> | string
  }

  export type EventOrderCreateWithoutMenuSelectionsInput = {
    id?: string
    orderRef: string
    clientName: string
    clientPhone: string
    clientEmail?: string | null
    clientWhatsApp?: string | null
    eventType: $Enums.EventType
    eventDate: Date | string
    eventTime?: string | null
    guestCount: number
    venueType?: $Enums.VenueType
    venueAddress?: string | null
    venueLGA?: string | null
    serviceType: $Enums.ServiceType
    status?: $Enums.EventStatus
    dietaryNotes?: string | null
    specialRequests?: string | null
    perHeadRateNGN?: number | null
    subtotalNGN?: number | null
    deliveryFeeNGN?: number
    setupFeeNGN?: number
    discountNGN?: number
    totalNGN?: number | null
    paymentStatus?: $Enums.PaymentStatus
    depositAmtNGN?: number | null
    depositPaidAt?: Date | string | null
    balanceDueNGN?: number | null
    balancePaidAt?: Date | string | null
    setupTime?: string | null
    servingStaffCount?: number
    cleanupIncluded?: boolean
    equipmentList?: EventOrderCreateequipmentListInput | string[]
    internalNotes?: string | null
    quoteSentAt?: Date | string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceFeeNGN?: number
    transportFeeNGN?: number
    payments?: EventPaymentCreateNestedManyWithoutEventOrderInput
  }

  export type EventOrderUncheckedCreateWithoutMenuSelectionsInput = {
    id?: string
    orderRef: string
    clientName: string
    clientPhone: string
    clientEmail?: string | null
    clientWhatsApp?: string | null
    eventType: $Enums.EventType
    eventDate: Date | string
    eventTime?: string | null
    guestCount: number
    venueType?: $Enums.VenueType
    venueAddress?: string | null
    venueLGA?: string | null
    serviceType: $Enums.ServiceType
    status?: $Enums.EventStatus
    dietaryNotes?: string | null
    specialRequests?: string | null
    perHeadRateNGN?: number | null
    subtotalNGN?: number | null
    deliveryFeeNGN?: number
    setupFeeNGN?: number
    discountNGN?: number
    totalNGN?: number | null
    paymentStatus?: $Enums.PaymentStatus
    depositAmtNGN?: number | null
    depositPaidAt?: Date | string | null
    balanceDueNGN?: number | null
    balancePaidAt?: Date | string | null
    setupTime?: string | null
    servingStaffCount?: number
    cleanupIncluded?: boolean
    equipmentList?: EventOrderCreateequipmentListInput | string[]
    internalNotes?: string | null
    quoteSentAt?: Date | string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceFeeNGN?: number
    transportFeeNGN?: number
    payments?: EventPaymentUncheckedCreateNestedManyWithoutEventOrderInput
  }

  export type EventOrderCreateOrConnectWithoutMenuSelectionsInput = {
    where: EventOrderWhereUniqueInput
    create: XOR<EventOrderCreateWithoutMenuSelectionsInput, EventOrderUncheckedCreateWithoutMenuSelectionsInput>
  }

  export type MenuItemCreateWithoutEventMenuSelectionInput = {
    id?: string
    name: string
    description?: string | null
    priceNGN: number
    imageUrl?: string | null
    isAvailable?: boolean
    isFeatured?: boolean
    isSpicy?: boolean
    tags?: MenuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    sortOrder?: number
    publicId?: string | null
    FoodPackOrderItem?: FoodPackOrderItemCreateNestedManyWithoutMenuItemInput
    category: MenuCategoryCreateNestedOneWithoutItemsInput
  }

  export type MenuItemUncheckedCreateWithoutEventMenuSelectionInput = {
    id?: string
    name: string
    description?: string | null
    priceNGN: number
    imageUrl?: string | null
    isAvailable?: boolean
    isFeatured?: boolean
    isSpicy?: boolean
    tags?: MenuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    slug: string
    sortOrder?: number
    publicId?: string | null
    FoodPackOrderItem?: FoodPackOrderItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutEventMenuSelectionInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutEventMenuSelectionInput, MenuItemUncheckedCreateWithoutEventMenuSelectionInput>
  }

  export type EventOrderUpsertWithoutMenuSelectionsInput = {
    update: XOR<EventOrderUpdateWithoutMenuSelectionsInput, EventOrderUncheckedUpdateWithoutMenuSelectionsInput>
    create: XOR<EventOrderCreateWithoutMenuSelectionsInput, EventOrderUncheckedCreateWithoutMenuSelectionsInput>
    where?: EventOrderWhereInput
  }

  export type EventOrderUpdateToOneWithWhereWithoutMenuSelectionsInput = {
    where?: EventOrderWhereInput
    data: XOR<EventOrderUpdateWithoutMenuSelectionsInput, EventOrderUncheckedUpdateWithoutMenuSelectionsInput>
  }

  export type EventOrderUpdateWithoutMenuSelectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderRef?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientWhatsApp?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    venueType?: EnumVenueTypeFieldUpdateOperationsInput | $Enums.VenueType
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueLGA?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    dietaryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    perHeadRateNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    subtotalNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryFeeNGN?: FloatFieldUpdateOperationsInput | number
    setupFeeNGN?: FloatFieldUpdateOperationsInput | number
    discountNGN?: FloatFieldUpdateOperationsInput | number
    totalNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    depositAmtNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    depositPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balanceDueNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    balancePaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setupTime?: NullableStringFieldUpdateOperationsInput | string | null
    servingStaffCount?: IntFieldUpdateOperationsInput | number
    cleanupIncluded?: BoolFieldUpdateOperationsInput | boolean
    equipmentList?: EventOrderUpdateequipmentListInput | string[]
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    quoteSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceFeeNGN?: FloatFieldUpdateOperationsInput | number
    transportFeeNGN?: FloatFieldUpdateOperationsInput | number
    payments?: EventPaymentUpdateManyWithoutEventOrderNestedInput
  }

  export type EventOrderUncheckedUpdateWithoutMenuSelectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderRef?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientWhatsApp?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    venueType?: EnumVenueTypeFieldUpdateOperationsInput | $Enums.VenueType
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueLGA?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    dietaryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    perHeadRateNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    subtotalNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryFeeNGN?: FloatFieldUpdateOperationsInput | number
    setupFeeNGN?: FloatFieldUpdateOperationsInput | number
    discountNGN?: FloatFieldUpdateOperationsInput | number
    totalNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    depositAmtNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    depositPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balanceDueNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    balancePaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setupTime?: NullableStringFieldUpdateOperationsInput | string | null
    servingStaffCount?: IntFieldUpdateOperationsInput | number
    cleanupIncluded?: BoolFieldUpdateOperationsInput | boolean
    equipmentList?: EventOrderUpdateequipmentListInput | string[]
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    quoteSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceFeeNGN?: FloatFieldUpdateOperationsInput | number
    transportFeeNGN?: FloatFieldUpdateOperationsInput | number
    payments?: EventPaymentUncheckedUpdateManyWithoutEventOrderNestedInput
  }

  export type MenuItemUpsertWithoutEventMenuSelectionInput = {
    update: XOR<MenuItemUpdateWithoutEventMenuSelectionInput, MenuItemUncheckedUpdateWithoutEventMenuSelectionInput>
    create: XOR<MenuItemCreateWithoutEventMenuSelectionInput, MenuItemUncheckedCreateWithoutEventMenuSelectionInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutEventMenuSelectionInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutEventMenuSelectionInput, MenuItemUncheckedUpdateWithoutEventMenuSelectionInput>
  }

  export type MenuItemUpdateWithoutEventMenuSelectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceNGN?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSpicy?: BoolFieldUpdateOperationsInput | boolean
    tags?: MenuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    FoodPackOrderItem?: FoodPackOrderItemUpdateManyWithoutMenuItemNestedInput
    category?: MenuCategoryUpdateOneRequiredWithoutItemsNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutEventMenuSelectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceNGN?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSpicy?: BoolFieldUpdateOperationsInput | boolean
    tags?: MenuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    FoodPackOrderItem?: FoodPackOrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type EventMenuOptionCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    pricePerPlate: number
    includedInBase?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventMenuOptionUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    pricePerPlate: number
    includedInBase?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventMenuOptionCreateOrConnectWithoutCategoryInput = {
    where: EventMenuOptionWhereUniqueInput
    create: XOR<EventMenuOptionCreateWithoutCategoryInput, EventMenuOptionUncheckedCreateWithoutCategoryInput>
  }

  export type EventMenuOptionCreateManyCategoryInputEnvelope = {
    data: EventMenuOptionCreateManyCategoryInput | EventMenuOptionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type EventMenuOptionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: EventMenuOptionWhereUniqueInput
    update: XOR<EventMenuOptionUpdateWithoutCategoryInput, EventMenuOptionUncheckedUpdateWithoutCategoryInput>
    create: XOR<EventMenuOptionCreateWithoutCategoryInput, EventMenuOptionUncheckedCreateWithoutCategoryInput>
  }

  export type EventMenuOptionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: EventMenuOptionWhereUniqueInput
    data: XOR<EventMenuOptionUpdateWithoutCategoryInput, EventMenuOptionUncheckedUpdateWithoutCategoryInput>
  }

  export type EventMenuOptionUpdateManyWithWhereWithoutCategoryInput = {
    where: EventMenuOptionScalarWhereInput
    data: XOR<EventMenuOptionUpdateManyMutationInput, EventMenuOptionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type EventMenuOptionScalarWhereInput = {
    AND?: EventMenuOptionScalarWhereInput | EventMenuOptionScalarWhereInput[]
    OR?: EventMenuOptionScalarWhereInput[]
    NOT?: EventMenuOptionScalarWhereInput | EventMenuOptionScalarWhereInput[]
    id?: StringFilter<"EventMenuOption"> | string
    name?: StringFilter<"EventMenuOption"> | string
    description?: StringNullableFilter<"EventMenuOption"> | string | null
    pricePerPlate?: FloatFilter<"EventMenuOption"> | number
    includedInBase?: BoolFilter<"EventMenuOption"> | boolean
    isActive?: BoolFilter<"EventMenuOption"> | boolean
    sortOrder?: IntFilter<"EventMenuOption"> | number
    categoryId?: StringFilter<"EventMenuOption"> | string
    createdAt?: DateTimeFilter<"EventMenuOption"> | Date | string
    updatedAt?: DateTimeFilter<"EventMenuOption"> | Date | string
  }

  export type EventMenuCategoryCreateWithoutOptionsInput = {
    id?: string
    name: string
    description?: string | null
    required?: boolean
    minChoices?: number
    maxChoices?: number
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventMenuCategoryUncheckedCreateWithoutOptionsInput = {
    id?: string
    name: string
    description?: string | null
    required?: boolean
    minChoices?: number
    maxChoices?: number
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventMenuCategoryCreateOrConnectWithoutOptionsInput = {
    where: EventMenuCategoryWhereUniqueInput
    create: XOR<EventMenuCategoryCreateWithoutOptionsInput, EventMenuCategoryUncheckedCreateWithoutOptionsInput>
  }

  export type EventMenuCategoryUpsertWithoutOptionsInput = {
    update: XOR<EventMenuCategoryUpdateWithoutOptionsInput, EventMenuCategoryUncheckedUpdateWithoutOptionsInput>
    create: XOR<EventMenuCategoryCreateWithoutOptionsInput, EventMenuCategoryUncheckedCreateWithoutOptionsInput>
    where?: EventMenuCategoryWhereInput
  }

  export type EventMenuCategoryUpdateToOneWithWhereWithoutOptionsInput = {
    where?: EventMenuCategoryWhereInput
    data: XOR<EventMenuCategoryUpdateWithoutOptionsInput, EventMenuCategoryUncheckedUpdateWithoutOptionsInput>
  }

  export type EventMenuCategoryUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    minChoices?: IntFieldUpdateOperationsInput | number
    maxChoices?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventMenuCategoryUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    minChoices?: IntFieldUpdateOperationsInput | number
    maxChoices?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrderCreateWithoutPaymentsInput = {
    id?: string
    orderRef: string
    clientName: string
    clientPhone: string
    clientEmail?: string | null
    clientWhatsApp?: string | null
    eventType: $Enums.EventType
    eventDate: Date | string
    eventTime?: string | null
    guestCount: number
    venueType?: $Enums.VenueType
    venueAddress?: string | null
    venueLGA?: string | null
    serviceType: $Enums.ServiceType
    status?: $Enums.EventStatus
    dietaryNotes?: string | null
    specialRequests?: string | null
    perHeadRateNGN?: number | null
    subtotalNGN?: number | null
    deliveryFeeNGN?: number
    setupFeeNGN?: number
    discountNGN?: number
    totalNGN?: number | null
    paymentStatus?: $Enums.PaymentStatus
    depositAmtNGN?: number | null
    depositPaidAt?: Date | string | null
    balanceDueNGN?: number | null
    balancePaidAt?: Date | string | null
    setupTime?: string | null
    servingStaffCount?: number
    cleanupIncluded?: boolean
    equipmentList?: EventOrderCreateequipmentListInput | string[]
    internalNotes?: string | null
    quoteSentAt?: Date | string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceFeeNGN?: number
    transportFeeNGN?: number
    menuSelections?: EventMenuSelectionCreateNestedManyWithoutEventOrderInput
  }

  export type EventOrderUncheckedCreateWithoutPaymentsInput = {
    id?: string
    orderRef: string
    clientName: string
    clientPhone: string
    clientEmail?: string | null
    clientWhatsApp?: string | null
    eventType: $Enums.EventType
    eventDate: Date | string
    eventTime?: string | null
    guestCount: number
    venueType?: $Enums.VenueType
    venueAddress?: string | null
    venueLGA?: string | null
    serviceType: $Enums.ServiceType
    status?: $Enums.EventStatus
    dietaryNotes?: string | null
    specialRequests?: string | null
    perHeadRateNGN?: number | null
    subtotalNGN?: number | null
    deliveryFeeNGN?: number
    setupFeeNGN?: number
    discountNGN?: number
    totalNGN?: number | null
    paymentStatus?: $Enums.PaymentStatus
    depositAmtNGN?: number | null
    depositPaidAt?: Date | string | null
    balanceDueNGN?: number | null
    balancePaidAt?: Date | string | null
    setupTime?: string | null
    servingStaffCount?: number
    cleanupIncluded?: boolean
    equipmentList?: EventOrderCreateequipmentListInput | string[]
    internalNotes?: string | null
    quoteSentAt?: Date | string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceFeeNGN?: number
    transportFeeNGN?: number
    menuSelections?: EventMenuSelectionUncheckedCreateNestedManyWithoutEventOrderInput
  }

  export type EventOrderCreateOrConnectWithoutPaymentsInput = {
    where: EventOrderWhereUniqueInput
    create: XOR<EventOrderCreateWithoutPaymentsInput, EventOrderUncheckedCreateWithoutPaymentsInput>
  }

  export type EventOrderUpsertWithoutPaymentsInput = {
    update: XOR<EventOrderUpdateWithoutPaymentsInput, EventOrderUncheckedUpdateWithoutPaymentsInput>
    create: XOR<EventOrderCreateWithoutPaymentsInput, EventOrderUncheckedCreateWithoutPaymentsInput>
    where?: EventOrderWhereInput
  }

  export type EventOrderUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: EventOrderWhereInput
    data: XOR<EventOrderUpdateWithoutPaymentsInput, EventOrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type EventOrderUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderRef?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientWhatsApp?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    venueType?: EnumVenueTypeFieldUpdateOperationsInput | $Enums.VenueType
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueLGA?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    dietaryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    perHeadRateNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    subtotalNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryFeeNGN?: FloatFieldUpdateOperationsInput | number
    setupFeeNGN?: FloatFieldUpdateOperationsInput | number
    discountNGN?: FloatFieldUpdateOperationsInput | number
    totalNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    depositAmtNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    depositPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balanceDueNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    balancePaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setupTime?: NullableStringFieldUpdateOperationsInput | string | null
    servingStaffCount?: IntFieldUpdateOperationsInput | number
    cleanupIncluded?: BoolFieldUpdateOperationsInput | boolean
    equipmentList?: EventOrderUpdateequipmentListInput | string[]
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    quoteSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceFeeNGN?: FloatFieldUpdateOperationsInput | number
    transportFeeNGN?: FloatFieldUpdateOperationsInput | number
    menuSelections?: EventMenuSelectionUpdateManyWithoutEventOrderNestedInput
  }

  export type EventOrderUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderRef?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientWhatsApp?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: IntFieldUpdateOperationsInput | number
    venueType?: EnumVenueTypeFieldUpdateOperationsInput | $Enums.VenueType
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueLGA?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    dietaryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    perHeadRateNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    subtotalNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryFeeNGN?: FloatFieldUpdateOperationsInput | number
    setupFeeNGN?: FloatFieldUpdateOperationsInput | number
    discountNGN?: FloatFieldUpdateOperationsInput | number
    totalNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    depositAmtNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    depositPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balanceDueNGN?: NullableFloatFieldUpdateOperationsInput | number | null
    balancePaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setupTime?: NullableStringFieldUpdateOperationsInput | string | null
    servingStaffCount?: IntFieldUpdateOperationsInput | number
    cleanupIncluded?: BoolFieldUpdateOperationsInput | boolean
    equipmentList?: EventOrderUpdateequipmentListInput | string[]
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    quoteSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceFeeNGN?: FloatFieldUpdateOperationsInput | number
    transportFeeNGN?: FloatFieldUpdateOperationsInput | number
    menuSelections?: EventMenuSelectionUncheckedUpdateManyWithoutEventOrderNestedInput
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    userName?: string | null
    action: string
    entity: string
    entityId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type OrderCreateManyConfirmedByInput = {
    id?: string
    ref: string
    customerName: string
    customerPhone?: string | null
    items: JsonNullValueInput | InputJsonValue
    subtotal: number
    total: number
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentStatus?: $Enums.PaymentStatus
    source?: $Enums.OrderSource
    notes?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type OrderCreateManyCreatedByInput = {
    id?: string
    ref: string
    customerName: string
    customerPhone?: string | null
    items: JsonNullValueInput | InputJsonValue
    subtotal: number
    total: number
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentStatus?: $Enums.PaymentStatus
    source?: $Enums.OrderSource
    notes?: string | null
    confirmedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    confirmedAt?: Date | string | null
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutConfirmedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    items?: JsonNullValueInput | InputJsonValue
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    source?: EnumOrderSourceFieldUpdateOperationsInput | $Enums.OrderSource
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneWithoutOrdersCreatedNestedInput
  }

  export type OrderUncheckedUpdateWithoutConfirmedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    items?: JsonNullValueInput | InputJsonValue
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    source?: EnumOrderSourceFieldUpdateOperationsInput | $Enums.OrderSource
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateManyWithoutConfirmedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    items?: JsonNullValueInput | InputJsonValue
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    source?: EnumOrderSourceFieldUpdateOperationsInput | $Enums.OrderSource
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    items?: JsonNullValueInput | InputJsonValue
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    source?: EnumOrderSourceFieldUpdateOperationsInput | $Enums.OrderSource
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedBy?: UserUpdateOneWithoutOrdersConfirmedNestedInput
  }

  export type OrderUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    items?: JsonNullValueInput | InputJsonValue
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    source?: EnumOrderSourceFieldUpdateOperationsInput | $Enums.OrderSource
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    ref?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    items?: JsonNullValueInput | InputJsonValue
    subtotal?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    source?: EnumOrderSourceFieldUpdateOperationsInput | $Enums.OrderSource
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MenuItemCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    priceNGN: number
    imageUrl?: string | null
    isAvailable?: boolean
    isFeatured?: boolean
    isSpicy?: boolean
    tags?: MenuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    sortOrder?: number
    publicId?: string | null
  }

  export type MenuItemUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceNGN?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSpicy?: BoolFieldUpdateOperationsInput | boolean
    tags?: MenuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    EventMenuSelection?: EventMenuSelectionUpdateManyWithoutMenuItemNestedInput
    FoodPackOrderItem?: FoodPackOrderItemUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceNGN?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSpicy?: BoolFieldUpdateOperationsInput | boolean
    tags?: MenuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    EventMenuSelection?: EventMenuSelectionUncheckedUpdateManyWithoutMenuItemNestedInput
    FoodPackOrderItem?: FoodPackOrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priceNGN?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSpicy?: BoolFieldUpdateOperationsInput | boolean
    tags?: MenuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventMenuSelectionCreateManyMenuItemInput = {
    id?: string
    quantity?: number
    unitPrice: number
    totalPrice?: number
    notes?: string | null
    eventOrderId: string
  }

  export type FoodPackOrderItemCreateManyMenuItemInput = {
    id?: string
    quantity: number
    unitPrice: number
    totalPrice: number
    orderId: string
  }

  export type EventMenuSelectionUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventOrder?: EventOrderUpdateOneRequiredWithoutMenuSelectionsNestedInput
  }

  export type EventMenuSelectionUncheckedUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventOrderId?: StringFieldUpdateOperationsInput | string
  }

  export type EventMenuSelectionUncheckedUpdateManyWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventOrderId?: StringFieldUpdateOperationsInput | string
  }

  export type FoodPackOrderItemUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    order?: FoodPackOrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type FoodPackOrderItemUncheckedUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type FoodPackOrderItemUncheckedUpdateManyWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type FoodPackOrderItemCreateManyOrderInput = {
    id?: string
    quantity: number
    unitPrice: number
    totalPrice: number
    menuItemId: string
  }

  export type FoodPackOrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    menuItem?: MenuItemUpdateOneRequiredWithoutFoodPackOrderItemNestedInput
  }

  export type FoodPackOrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    menuItemId?: StringFieldUpdateOperationsInput | string
  }

  export type FoodPackOrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    menuItemId?: StringFieldUpdateOperationsInput | string
  }

  export type EventMenuSelectionCreateManyEventOrderInput = {
    id?: string
    menuItemId: string
    quantity?: number
    unitPrice: number
    totalPrice?: number
    notes?: string | null
  }

  export type EventPaymentCreateManyEventOrderInput = {
    id?: string
    amountNGN: number
    paymentMethod: string
    status?: $Enums.PaymentStatus
    reference?: string | null
    paidAt?: Date | string
    note?: string | null
  }

  export type EventMenuSelectionUpdateWithoutEventOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    menuItem?: MenuItemUpdateOneRequiredWithoutEventMenuSelectionNestedInput
  }

  export type EventMenuSelectionUncheckedUpdateWithoutEventOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventMenuSelectionUncheckedUpdateManyWithoutEventOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventPaymentUpdateWithoutEventOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountNGN?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventPaymentUncheckedUpdateWithoutEventOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountNGN?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventPaymentUncheckedUpdateManyWithoutEventOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountNGN?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventMenuOptionCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    pricePerPlate: number
    includedInBase?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventMenuOptionUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerPlate?: FloatFieldUpdateOperationsInput | number
    includedInBase?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventMenuOptionUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerPlate?: FloatFieldUpdateOperationsInput | number
    includedInBase?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventMenuOptionUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerPlate?: FloatFieldUpdateOperationsInput | number
    includedInBase?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuCategoryCountOutputTypeDefaultArgs instead
     */
    export type MenuCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuItemCountOutputTypeDefaultArgs instead
     */
    export type MenuItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FoodPackOrderCountOutputTypeDefaultArgs instead
     */
    export type FoodPackOrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FoodPackOrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventOrderCountOutputTypeDefaultArgs instead
     */
    export type EventOrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventOrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventMenuCategoryCountOutputTypeDefaultArgs instead
     */
    export type EventMenuCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventMenuCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActiveSessionDefaultArgs instead
     */
    export type ActiveSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActiveSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuCategoryDefaultArgs instead
     */
    export type MenuCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuItemDefaultArgs instead
     */
    export type MenuItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FoodPackOrderDefaultArgs instead
     */
    export type FoodPackOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FoodPackOrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FoodPackOrderItemDefaultArgs instead
     */
    export type FoodPackOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FoodPackOrderItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventOrderDefaultArgs instead
     */
    export type EventOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventOrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventMenuSelectionDefaultArgs instead
     */
    export type EventMenuSelectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventMenuSelectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventMenuCategoryDefaultArgs instead
     */
    export type EventMenuCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventMenuCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventMenuOptionDefaultArgs instead
     */
    export type EventMenuOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventMenuOptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventPaymentDefaultArgs instead
     */
    export type EventPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventPaymentDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}