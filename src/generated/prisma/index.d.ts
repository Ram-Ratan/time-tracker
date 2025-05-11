
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
 * Model organisation
 * 
 */
export type organisation = $Result.DefaultSelection<Prisma.$organisationPayload>
/**
 * Model UserCategoryLinkUp
 * 
 */
export type UserCategoryLinkUp = $Result.DefaultSelection<Prisma.$UserCategoryLinkUpPayload>
/**
 * Model UserLeaves
 * 
 */
export type UserLeaves = $Result.DefaultSelection<Prisma.$UserLeavesPayload>
/**
 * Model UserHoliday
 * 
 */
export type UserHoliday = $Result.DefaultSelection<Prisma.$UserHolidayPayload>
/**
 * Model UserCategory
 * 
 */
export type UserCategory = $Result.DefaultSelection<Prisma.$UserCategoryPayload>
/**
 * Model Holiday
 * 
 */
export type Holiday = $Result.DefaultSelection<Prisma.$HolidayPayload>
/**
 * Model LeavePolicy
 * 
 */
export type LeavePolicy = $Result.DefaultSelection<Prisma.$LeavePolicyPayload>
/**
 * Model Leave
 * 
 */
export type Leave = $Result.DefaultSelection<Prisma.$LeavePayload>
/**
 * Model UserSchedule
 * 
 */
export type UserSchedule = $Result.DefaultSelection<Prisma.$UserSchedulePayload>
/**
 * Model TimeEntry
 * 
 */
export type TimeEntry = $Result.DefaultSelection<Prisma.$TimeEntryPayload>
/**
 * Model Break
 * 
 */
export type Break = $Result.DefaultSelection<Prisma.$BreakPayload>
/**
 * Model UserStreak
 * 
 */
export type UserStreak = $Result.DefaultSelection<Prisma.$UserStreakPayload>
/**
 * Model NqlFunctionMapping
 * 
 */
export type NqlFunctionMapping = $Result.DefaultSelection<Prisma.$NqlFunctionMappingPayload>
/**
 * Model NlqSqlMapping
 * 
 */
export type NlqSqlMapping = $Result.DefaultSelection<Prisma.$NlqSqlMappingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const organisationType: {
  GOOD: 'GOOD',
  EVIL: 'EVIL'
};

export type organisationType = (typeof organisationType)[keyof typeof organisationType]


export const HolidayType: {
  OPTIONAL: 'OPTIONAL',
  MANDATORY: 'MANDATORY'
};

export type HolidayType = (typeof HolidayType)[keyof typeof HolidayType]


export const LeaveType: {
  SICK: 'SICK',
  VACATION: 'VACATION',
  PARENTAL: 'PARENTAL',
  MATERNITY: 'MATERNITY'
};

export type LeaveType = (typeof LeaveType)[keyof typeof LeaveType]


export const LeaveStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type LeaveStatus = (typeof LeaveStatus)[keyof typeof LeaveStatus]

}

export type organisationType = $Enums.organisationType

export const organisationType: typeof $Enums.organisationType

export type HolidayType = $Enums.HolidayType

export const HolidayType: typeof $Enums.HolidayType

export type LeaveType = $Enums.LeaveType

export const LeaveType: typeof $Enums.LeaveType

export type LeaveStatus = $Enums.LeaveStatus

export const LeaveStatus: typeof $Enums.LeaveStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organisations
 * const organisations = await prisma.organisation.findMany()
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
   * // Fetch zero or more Organisations
   * const organisations = await prisma.organisation.findMany()
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
   * `prisma.organisation`: Exposes CRUD operations for the **organisation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organisations
    * const organisations = await prisma.organisation.findMany()
    * ```
    */
  get organisation(): Prisma.organisationDelegate<ExtArgs>;

  /**
   * `prisma.userCategoryLinkUp`: Exposes CRUD operations for the **UserCategoryLinkUp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCategoryLinkUps
    * const userCategoryLinkUps = await prisma.userCategoryLinkUp.findMany()
    * ```
    */
  get userCategoryLinkUp(): Prisma.UserCategoryLinkUpDelegate<ExtArgs>;

  /**
   * `prisma.userLeaves`: Exposes CRUD operations for the **UserLeaves** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLeaves
    * const userLeaves = await prisma.userLeaves.findMany()
    * ```
    */
  get userLeaves(): Prisma.UserLeavesDelegate<ExtArgs>;

  /**
   * `prisma.userHoliday`: Exposes CRUD operations for the **UserHoliday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserHolidays
    * const userHolidays = await prisma.userHoliday.findMany()
    * ```
    */
  get userHoliday(): Prisma.UserHolidayDelegate<ExtArgs>;

  /**
   * `prisma.userCategory`: Exposes CRUD operations for the **UserCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCategories
    * const userCategories = await prisma.userCategory.findMany()
    * ```
    */
  get userCategory(): Prisma.UserCategoryDelegate<ExtArgs>;

  /**
   * `prisma.holiday`: Exposes CRUD operations for the **Holiday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holidays
    * const holidays = await prisma.holiday.findMany()
    * ```
    */
  get holiday(): Prisma.HolidayDelegate<ExtArgs>;

  /**
   * `prisma.leavePolicy`: Exposes CRUD operations for the **LeavePolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeavePolicies
    * const leavePolicies = await prisma.leavePolicy.findMany()
    * ```
    */
  get leavePolicy(): Prisma.LeavePolicyDelegate<ExtArgs>;

  /**
   * `prisma.leave`: Exposes CRUD operations for the **Leave** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leaves
    * const leaves = await prisma.leave.findMany()
    * ```
    */
  get leave(): Prisma.LeaveDelegate<ExtArgs>;

  /**
   * `prisma.userSchedule`: Exposes CRUD operations for the **UserSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSchedules
    * const userSchedules = await prisma.userSchedule.findMany()
    * ```
    */
  get userSchedule(): Prisma.UserScheduleDelegate<ExtArgs>;

  /**
   * `prisma.timeEntry`: Exposes CRUD operations for the **TimeEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeEntries
    * const timeEntries = await prisma.timeEntry.findMany()
    * ```
    */
  get timeEntry(): Prisma.TimeEntryDelegate<ExtArgs>;

  /**
   * `prisma.break`: Exposes CRUD operations for the **Break** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Breaks
    * const breaks = await prisma.break.findMany()
    * ```
    */
  get break(): Prisma.BreakDelegate<ExtArgs>;

  /**
   * `prisma.userStreak`: Exposes CRUD operations for the **UserStreak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStreaks
    * const userStreaks = await prisma.userStreak.findMany()
    * ```
    */
  get userStreak(): Prisma.UserStreakDelegate<ExtArgs>;

  /**
   * `prisma.nqlFunctionMapping`: Exposes CRUD operations for the **NqlFunctionMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NqlFunctionMappings
    * const nqlFunctionMappings = await prisma.nqlFunctionMapping.findMany()
    * ```
    */
  get nqlFunctionMapping(): Prisma.NqlFunctionMappingDelegate<ExtArgs>;

  /**
   * `prisma.nlqSqlMapping`: Exposes CRUD operations for the **NlqSqlMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NlqSqlMappings
    * const nlqSqlMappings = await prisma.nlqSqlMapping.findMany()
    * ```
    */
  get nlqSqlMapping(): Prisma.NlqSqlMappingDelegate<ExtArgs>;
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
    organisation: 'organisation',
    UserCategoryLinkUp: 'UserCategoryLinkUp',
    UserLeaves: 'UserLeaves',
    UserHoliday: 'UserHoliday',
    UserCategory: 'UserCategory',
    Holiday: 'Holiday',
    LeavePolicy: 'LeavePolicy',
    Leave: 'Leave',
    UserSchedule: 'UserSchedule',
    TimeEntry: 'TimeEntry',
    Break: 'Break',
    UserStreak: 'UserStreak',
    NqlFunctionMapping: 'NqlFunctionMapping',
    NlqSqlMapping: 'NlqSqlMapping'
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
      modelProps: "organisation" | "userCategoryLinkUp" | "userLeaves" | "userHoliday" | "userCategory" | "holiday" | "leavePolicy" | "leave" | "userSchedule" | "timeEntry" | "break" | "userStreak" | "nqlFunctionMapping" | "nlqSqlMapping"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      organisation: {
        payload: Prisma.$organisationPayload<ExtArgs>
        fields: Prisma.organisationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organisationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organisationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationPayload>
          }
          findFirst: {
            args: Prisma.organisationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organisationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationPayload>
          }
          findMany: {
            args: Prisma.organisationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationPayload>[]
          }
          create: {
            args: Prisma.organisationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationPayload>
          }
          createMany: {
            args: Prisma.organisationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.organisationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationPayload>[]
          }
          delete: {
            args: Prisma.organisationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationPayload>
          }
          update: {
            args: Prisma.organisationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationPayload>
          }
          deleteMany: {
            args: Prisma.organisationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organisationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.organisationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationPayload>
          }
          aggregate: {
            args: Prisma.OrganisationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganisation>
          }
          groupBy: {
            args: Prisma.organisationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganisationGroupByOutputType>[]
          }
          count: {
            args: Prisma.organisationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganisationCountAggregateOutputType> | number
          }
        }
      }
      UserCategoryLinkUp: {
        payload: Prisma.$UserCategoryLinkUpPayload<ExtArgs>
        fields: Prisma.UserCategoryLinkUpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCategoryLinkUpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryLinkUpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCategoryLinkUpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryLinkUpPayload>
          }
          findFirst: {
            args: Prisma.UserCategoryLinkUpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryLinkUpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCategoryLinkUpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryLinkUpPayload>
          }
          findMany: {
            args: Prisma.UserCategoryLinkUpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryLinkUpPayload>[]
          }
          create: {
            args: Prisma.UserCategoryLinkUpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryLinkUpPayload>
          }
          createMany: {
            args: Prisma.UserCategoryLinkUpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCategoryLinkUpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryLinkUpPayload>[]
          }
          delete: {
            args: Prisma.UserCategoryLinkUpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryLinkUpPayload>
          }
          update: {
            args: Prisma.UserCategoryLinkUpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryLinkUpPayload>
          }
          deleteMany: {
            args: Prisma.UserCategoryLinkUpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCategoryLinkUpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCategoryLinkUpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryLinkUpPayload>
          }
          aggregate: {
            args: Prisma.UserCategoryLinkUpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCategoryLinkUp>
          }
          groupBy: {
            args: Prisma.UserCategoryLinkUpGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCategoryLinkUpGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCategoryLinkUpCountArgs<ExtArgs>
            result: $Utils.Optional<UserCategoryLinkUpCountAggregateOutputType> | number
          }
        }
      }
      UserLeaves: {
        payload: Prisma.$UserLeavesPayload<ExtArgs>
        fields: Prisma.UserLeavesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLeavesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLeavesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLeavesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLeavesPayload>
          }
          findFirst: {
            args: Prisma.UserLeavesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLeavesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLeavesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLeavesPayload>
          }
          findMany: {
            args: Prisma.UserLeavesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLeavesPayload>[]
          }
          create: {
            args: Prisma.UserLeavesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLeavesPayload>
          }
          createMany: {
            args: Prisma.UserLeavesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLeavesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLeavesPayload>[]
          }
          delete: {
            args: Prisma.UserLeavesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLeavesPayload>
          }
          update: {
            args: Prisma.UserLeavesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLeavesPayload>
          }
          deleteMany: {
            args: Prisma.UserLeavesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLeavesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserLeavesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLeavesPayload>
          }
          aggregate: {
            args: Prisma.UserLeavesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLeaves>
          }
          groupBy: {
            args: Prisma.UserLeavesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLeavesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLeavesCountArgs<ExtArgs>
            result: $Utils.Optional<UserLeavesCountAggregateOutputType> | number
          }
        }
      }
      UserHoliday: {
        payload: Prisma.$UserHolidayPayload<ExtArgs>
        fields: Prisma.UserHolidayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserHolidayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHolidayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserHolidayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHolidayPayload>
          }
          findFirst: {
            args: Prisma.UserHolidayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHolidayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserHolidayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHolidayPayload>
          }
          findMany: {
            args: Prisma.UserHolidayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHolidayPayload>[]
          }
          create: {
            args: Prisma.UserHolidayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHolidayPayload>
          }
          createMany: {
            args: Prisma.UserHolidayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserHolidayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHolidayPayload>[]
          }
          delete: {
            args: Prisma.UserHolidayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHolidayPayload>
          }
          update: {
            args: Prisma.UserHolidayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHolidayPayload>
          }
          deleteMany: {
            args: Prisma.UserHolidayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserHolidayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserHolidayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHolidayPayload>
          }
          aggregate: {
            args: Prisma.UserHolidayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserHoliday>
          }
          groupBy: {
            args: Prisma.UserHolidayGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserHolidayGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserHolidayCountArgs<ExtArgs>
            result: $Utils.Optional<UserHolidayCountAggregateOutputType> | number
          }
        }
      }
      UserCategory: {
        payload: Prisma.$UserCategoryPayload<ExtArgs>
        fields: Prisma.UserCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          findFirst: {
            args: Prisma.UserCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          findMany: {
            args: Prisma.UserCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>[]
          }
          create: {
            args: Prisma.UserCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          createMany: {
            args: Prisma.UserCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>[]
          }
          delete: {
            args: Prisma.UserCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          update: {
            args: Prisma.UserCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          deleteMany: {
            args: Prisma.UserCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          aggregate: {
            args: Prisma.UserCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCategory>
          }
          groupBy: {
            args: Prisma.UserCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserCategoryCountAggregateOutputType> | number
          }
        }
      }
      Holiday: {
        payload: Prisma.$HolidayPayload<ExtArgs>
        fields: Prisma.HolidayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HolidayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HolidayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          findFirst: {
            args: Prisma.HolidayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HolidayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          findMany: {
            args: Prisma.HolidayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>[]
          }
          create: {
            args: Prisma.HolidayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          createMany: {
            args: Prisma.HolidayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HolidayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>[]
          }
          delete: {
            args: Prisma.HolidayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          update: {
            args: Prisma.HolidayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          deleteMany: {
            args: Prisma.HolidayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HolidayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HolidayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          aggregate: {
            args: Prisma.HolidayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoliday>
          }
          groupBy: {
            args: Prisma.HolidayGroupByArgs<ExtArgs>
            result: $Utils.Optional<HolidayGroupByOutputType>[]
          }
          count: {
            args: Prisma.HolidayCountArgs<ExtArgs>
            result: $Utils.Optional<HolidayCountAggregateOutputType> | number
          }
        }
      }
      LeavePolicy: {
        payload: Prisma.$LeavePolicyPayload<ExtArgs>
        fields: Prisma.LeavePolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeavePolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeavePolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>
          }
          findFirst: {
            args: Prisma.LeavePolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeavePolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>
          }
          findMany: {
            args: Prisma.LeavePolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>[]
          }
          create: {
            args: Prisma.LeavePolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>
          }
          createMany: {
            args: Prisma.LeavePolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeavePolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>[]
          }
          delete: {
            args: Prisma.LeavePolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>
          }
          update: {
            args: Prisma.LeavePolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>
          }
          deleteMany: {
            args: Prisma.LeavePolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeavePolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LeavePolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>
          }
          aggregate: {
            args: Prisma.LeavePolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeavePolicy>
          }
          groupBy: {
            args: Prisma.LeavePolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeavePolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeavePolicyCountArgs<ExtArgs>
            result: $Utils.Optional<LeavePolicyCountAggregateOutputType> | number
          }
        }
      }
      Leave: {
        payload: Prisma.$LeavePayload<ExtArgs>
        fields: Prisma.LeaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          findFirst: {
            args: Prisma.LeaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          findMany: {
            args: Prisma.LeaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>[]
          }
          create: {
            args: Prisma.LeaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          createMany: {
            args: Prisma.LeaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>[]
          }
          delete: {
            args: Prisma.LeaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          update: {
            args: Prisma.LeaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          deleteMany: {
            args: Prisma.LeaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LeaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          aggregate: {
            args: Prisma.LeaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeave>
          }
          groupBy: {
            args: Prisma.LeaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveCountAggregateOutputType> | number
          }
        }
      }
      UserSchedule: {
        payload: Prisma.$UserSchedulePayload<ExtArgs>
        fields: Prisma.UserScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchedulePayload>
          }
          findFirst: {
            args: Prisma.UserScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchedulePayload>
          }
          findMany: {
            args: Prisma.UserScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchedulePayload>[]
          }
          create: {
            args: Prisma.UserScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchedulePayload>
          }
          createMany: {
            args: Prisma.UserScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchedulePayload>[]
          }
          delete: {
            args: Prisma.UserScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchedulePayload>
          }
          update: {
            args: Prisma.UserScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchedulePayload>
          }
          deleteMany: {
            args: Prisma.UserScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchedulePayload>
          }
          aggregate: {
            args: Prisma.UserScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSchedule>
          }
          groupBy: {
            args: Prisma.UserScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<UserScheduleCountAggregateOutputType> | number
          }
        }
      }
      TimeEntry: {
        payload: Prisma.$TimeEntryPayload<ExtArgs>
        fields: Prisma.TimeEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          findFirst: {
            args: Prisma.TimeEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          findMany: {
            args: Prisma.TimeEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>[]
          }
          create: {
            args: Prisma.TimeEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          createMany: {
            args: Prisma.TimeEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>[]
          }
          delete: {
            args: Prisma.TimeEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          update: {
            args: Prisma.TimeEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          deleteMany: {
            args: Prisma.TimeEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimeEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          aggregate: {
            args: Prisma.TimeEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeEntry>
          }
          groupBy: {
            args: Prisma.TimeEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeEntryCountArgs<ExtArgs>
            result: $Utils.Optional<TimeEntryCountAggregateOutputType> | number
          }
        }
      }
      Break: {
        payload: Prisma.$BreakPayload<ExtArgs>
        fields: Prisma.BreakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BreakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BreakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>
          }
          findFirst: {
            args: Prisma.BreakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BreakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>
          }
          findMany: {
            args: Prisma.BreakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>[]
          }
          create: {
            args: Prisma.BreakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>
          }
          createMany: {
            args: Prisma.BreakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BreakCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>[]
          }
          delete: {
            args: Prisma.BreakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>
          }
          update: {
            args: Prisma.BreakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>
          }
          deleteMany: {
            args: Prisma.BreakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BreakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BreakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>
          }
          aggregate: {
            args: Prisma.BreakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBreak>
          }
          groupBy: {
            args: Prisma.BreakGroupByArgs<ExtArgs>
            result: $Utils.Optional<BreakGroupByOutputType>[]
          }
          count: {
            args: Prisma.BreakCountArgs<ExtArgs>
            result: $Utils.Optional<BreakCountAggregateOutputType> | number
          }
        }
      }
      UserStreak: {
        payload: Prisma.$UserStreakPayload<ExtArgs>
        fields: Prisma.UserStreakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStreakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStreakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload>
          }
          findFirst: {
            args: Prisma.UserStreakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStreakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload>
          }
          findMany: {
            args: Prisma.UserStreakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload>[]
          }
          create: {
            args: Prisma.UserStreakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload>
          }
          createMany: {
            args: Prisma.UserStreakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStreakCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload>[]
          }
          delete: {
            args: Prisma.UserStreakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload>
          }
          update: {
            args: Prisma.UserStreakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload>
          }
          deleteMany: {
            args: Prisma.UserStreakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStreakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserStreakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload>
          }
          aggregate: {
            args: Prisma.UserStreakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStreak>
          }
          groupBy: {
            args: Prisma.UserStreakGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStreakGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStreakCountArgs<ExtArgs>
            result: $Utils.Optional<UserStreakCountAggregateOutputType> | number
          }
        }
      }
      NqlFunctionMapping: {
        payload: Prisma.$NqlFunctionMappingPayload<ExtArgs>
        fields: Prisma.NqlFunctionMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NqlFunctionMappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NqlFunctionMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NqlFunctionMappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NqlFunctionMappingPayload>
          }
          findFirst: {
            args: Prisma.NqlFunctionMappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NqlFunctionMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NqlFunctionMappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NqlFunctionMappingPayload>
          }
          findMany: {
            args: Prisma.NqlFunctionMappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NqlFunctionMappingPayload>[]
          }
          create: {
            args: Prisma.NqlFunctionMappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NqlFunctionMappingPayload>
          }
          createMany: {
            args: Prisma.NqlFunctionMappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NqlFunctionMappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NqlFunctionMappingPayload>[]
          }
          delete: {
            args: Prisma.NqlFunctionMappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NqlFunctionMappingPayload>
          }
          update: {
            args: Prisma.NqlFunctionMappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NqlFunctionMappingPayload>
          }
          deleteMany: {
            args: Prisma.NqlFunctionMappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NqlFunctionMappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NqlFunctionMappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NqlFunctionMappingPayload>
          }
          aggregate: {
            args: Prisma.NqlFunctionMappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNqlFunctionMapping>
          }
          groupBy: {
            args: Prisma.NqlFunctionMappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<NqlFunctionMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.NqlFunctionMappingCountArgs<ExtArgs>
            result: $Utils.Optional<NqlFunctionMappingCountAggregateOutputType> | number
          }
        }
      }
      NlqSqlMapping: {
        payload: Prisma.$NlqSqlMappingPayload<ExtArgs>
        fields: Prisma.NlqSqlMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NlqSqlMappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NlqSqlMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NlqSqlMappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NlqSqlMappingPayload>
          }
          findFirst: {
            args: Prisma.NlqSqlMappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NlqSqlMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NlqSqlMappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NlqSqlMappingPayload>
          }
          findMany: {
            args: Prisma.NlqSqlMappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NlqSqlMappingPayload>[]
          }
          create: {
            args: Prisma.NlqSqlMappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NlqSqlMappingPayload>
          }
          createMany: {
            args: Prisma.NlqSqlMappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NlqSqlMappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NlqSqlMappingPayload>[]
          }
          delete: {
            args: Prisma.NlqSqlMappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NlqSqlMappingPayload>
          }
          update: {
            args: Prisma.NlqSqlMappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NlqSqlMappingPayload>
          }
          deleteMany: {
            args: Prisma.NlqSqlMappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NlqSqlMappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NlqSqlMappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NlqSqlMappingPayload>
          }
          aggregate: {
            args: Prisma.NlqSqlMappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNlqSqlMapping>
          }
          groupBy: {
            args: Prisma.NlqSqlMappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<NlqSqlMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.NlqSqlMappingCountArgs<ExtArgs>
            result: $Utils.Optional<NlqSqlMappingCountAggregateOutputType> | number
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
   * Count Type UserCategoryCountOutputType
   */

  export type UserCategoryCountOutputType = {
    users: number
    holidays: number
  }

  export type UserCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserCategoryCountOutputTypeCountUsersArgs
    holidays?: boolean | UserCategoryCountOutputTypeCountHolidaysArgs
  }

  // Custom InputTypes
  /**
   * UserCategoryCountOutputType without action
   */
  export type UserCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategoryCountOutputType
     */
    select?: UserCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCategoryCountOutputType without action
   */
  export type UserCategoryCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCategoryLinkUpWhereInput
  }

  /**
   * UserCategoryCountOutputType without action
   */
  export type UserCategoryCountOutputTypeCountHolidaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HolidayWhereInput
  }


  /**
   * Count Type HolidayCountOutputType
   */

  export type HolidayCountOutputType = {
    userCategories: number
    userHolidays: number
  }

  export type HolidayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCategories?: boolean | HolidayCountOutputTypeCountUserCategoriesArgs
    userHolidays?: boolean | HolidayCountOutputTypeCountUserHolidaysArgs
  }

  // Custom InputTypes
  /**
   * HolidayCountOutputType without action
   */
  export type HolidayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HolidayCountOutputType
     */
    select?: HolidayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HolidayCountOutputType without action
   */
  export type HolidayCountOutputTypeCountUserCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCategoryWhereInput
  }

  /**
   * HolidayCountOutputType without action
   */
  export type HolidayCountOutputTypeCountUserHolidaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHolidayWhereInput
  }


  /**
   * Count Type TimeEntryCountOutputType
   */

  export type TimeEntryCountOutputType = {
    breaks: number
  }

  export type TimeEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    breaks?: boolean | TimeEntryCountOutputTypeCountBreaksArgs
  }

  // Custom InputTypes
  /**
   * TimeEntryCountOutputType without action
   */
  export type TimeEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntryCountOutputType
     */
    select?: TimeEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TimeEntryCountOutputType without action
   */
  export type TimeEntryCountOutputTypeCountBreaksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreakWhereInput
  }


  /**
   * Models
   */

  /**
   * Model organisation
   */

  export type AggregateOrganisation = {
    _count: OrganisationCountAggregateOutputType | null
    _min: OrganisationMinAggregateOutputType | null
    _max: OrganisationMaxAggregateOutputType | null
  }

  export type OrganisationMinAggregateOutputType = {
    orgId: string | null
    type: $Enums.organisationType | null
  }

  export type OrganisationMaxAggregateOutputType = {
    orgId: string | null
    type: $Enums.organisationType | null
  }

  export type OrganisationCountAggregateOutputType = {
    orgId: number
    type: number
    _all: number
  }


  export type OrganisationMinAggregateInputType = {
    orgId?: true
    type?: true
  }

  export type OrganisationMaxAggregateInputType = {
    orgId?: true
    type?: true
  }

  export type OrganisationCountAggregateInputType = {
    orgId?: true
    type?: true
    _all?: true
  }

  export type OrganisationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organisation to aggregate.
     */
    where?: organisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organisations to fetch.
     */
    orderBy?: organisationOrderByWithRelationInput | organisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organisations
    **/
    _count?: true | OrganisationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganisationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganisationMaxAggregateInputType
  }

  export type GetOrganisationAggregateType<T extends OrganisationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganisation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganisation[P]>
      : GetScalarType<T[P], AggregateOrganisation[P]>
  }




  export type organisationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organisationWhereInput
    orderBy?: organisationOrderByWithAggregationInput | organisationOrderByWithAggregationInput[]
    by: OrganisationScalarFieldEnum[] | OrganisationScalarFieldEnum
    having?: organisationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganisationCountAggregateInputType | true
    _min?: OrganisationMinAggregateInputType
    _max?: OrganisationMaxAggregateInputType
  }

  export type OrganisationGroupByOutputType = {
    orgId: string
    type: $Enums.organisationType
    _count: OrganisationCountAggregateOutputType | null
    _min: OrganisationMinAggregateOutputType | null
    _max: OrganisationMaxAggregateOutputType | null
  }

  type GetOrganisationGroupByPayload<T extends organisationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganisationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganisationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganisationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganisationGroupByOutputType[P]>
        }
      >
    >


  export type organisationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orgId?: boolean
    type?: boolean
  }, ExtArgs["result"]["organisation"]>

  export type organisationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orgId?: boolean
    type?: boolean
  }, ExtArgs["result"]["organisation"]>

  export type organisationSelectScalar = {
    orgId?: boolean
    type?: boolean
  }


  export type $organisationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organisation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      orgId: string
      type: $Enums.organisationType
    }, ExtArgs["result"]["organisation"]>
    composites: {}
  }

  type organisationGetPayload<S extends boolean | null | undefined | organisationDefaultArgs> = $Result.GetResult<Prisma.$organisationPayload, S>

  type organisationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<organisationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganisationCountAggregateInputType | true
    }

  export interface organisationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organisation'], meta: { name: 'organisation' } }
    /**
     * Find zero or one Organisation that matches the filter.
     * @param {organisationFindUniqueArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organisationFindUniqueArgs>(args: SelectSubset<T, organisationFindUniqueArgs<ExtArgs>>): Prisma__organisationClient<$Result.GetResult<Prisma.$organisationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Organisation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {organisationFindUniqueOrThrowArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organisationFindUniqueOrThrowArgs>(args: SelectSubset<T, organisationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organisationClient<$Result.GetResult<Prisma.$organisationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Organisation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationFindFirstArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organisationFindFirstArgs>(args?: SelectSubset<T, organisationFindFirstArgs<ExtArgs>>): Prisma__organisationClient<$Result.GetResult<Prisma.$organisationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Organisation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationFindFirstOrThrowArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organisationFindFirstOrThrowArgs>(args?: SelectSubset<T, organisationFindFirstOrThrowArgs<ExtArgs>>): Prisma__organisationClient<$Result.GetResult<Prisma.$organisationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Organisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organisations
     * const organisations = await prisma.organisation.findMany()
     * 
     * // Get first 10 Organisations
     * const organisations = await prisma.organisation.findMany({ take: 10 })
     * 
     * // Only select the `orgId`
     * const organisationWithOrgIdOnly = await prisma.organisation.findMany({ select: { orgId: true } })
     * 
     */
    findMany<T extends organisationFindManyArgs>(args?: SelectSubset<T, organisationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organisationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Organisation.
     * @param {organisationCreateArgs} args - Arguments to create a Organisation.
     * @example
     * // Create one Organisation
     * const Organisation = await prisma.organisation.create({
     *   data: {
     *     // ... data to create a Organisation
     *   }
     * })
     * 
     */
    create<T extends organisationCreateArgs>(args: SelectSubset<T, organisationCreateArgs<ExtArgs>>): Prisma__organisationClient<$Result.GetResult<Prisma.$organisationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Organisations.
     * @param {organisationCreateManyArgs} args - Arguments to create many Organisations.
     * @example
     * // Create many Organisations
     * const organisation = await prisma.organisation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organisationCreateManyArgs>(args?: SelectSubset<T, organisationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organisations and returns the data saved in the database.
     * @param {organisationCreateManyAndReturnArgs} args - Arguments to create many Organisations.
     * @example
     * // Create many Organisations
     * const organisation = await prisma.organisation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organisations and only return the `orgId`
     * const organisationWithOrgIdOnly = await prisma.organisation.createManyAndReturn({ 
     *   select: { orgId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends organisationCreateManyAndReturnArgs>(args?: SelectSubset<T, organisationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organisationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Organisation.
     * @param {organisationDeleteArgs} args - Arguments to delete one Organisation.
     * @example
     * // Delete one Organisation
     * const Organisation = await prisma.organisation.delete({
     *   where: {
     *     // ... filter to delete one Organisation
     *   }
     * })
     * 
     */
    delete<T extends organisationDeleteArgs>(args: SelectSubset<T, organisationDeleteArgs<ExtArgs>>): Prisma__organisationClient<$Result.GetResult<Prisma.$organisationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Organisation.
     * @param {organisationUpdateArgs} args - Arguments to update one Organisation.
     * @example
     * // Update one Organisation
     * const organisation = await prisma.organisation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organisationUpdateArgs>(args: SelectSubset<T, organisationUpdateArgs<ExtArgs>>): Prisma__organisationClient<$Result.GetResult<Prisma.$organisationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Organisations.
     * @param {organisationDeleteManyArgs} args - Arguments to filter Organisations to delete.
     * @example
     * // Delete a few Organisations
     * const { count } = await prisma.organisation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organisationDeleteManyArgs>(args?: SelectSubset<T, organisationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organisations
     * const organisation = await prisma.organisation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organisationUpdateManyArgs>(args: SelectSubset<T, organisationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organisation.
     * @param {organisationUpsertArgs} args - Arguments to update or create a Organisation.
     * @example
     * // Update or create a Organisation
     * const organisation = await prisma.organisation.upsert({
     *   create: {
     *     // ... data to create a Organisation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organisation we want to update
     *   }
     * })
     */
    upsert<T extends organisationUpsertArgs>(args: SelectSubset<T, organisationUpsertArgs<ExtArgs>>): Prisma__organisationClient<$Result.GetResult<Prisma.$organisationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationCountArgs} args - Arguments to filter Organisations to count.
     * @example
     * // Count the number of Organisations
     * const count = await prisma.organisation.count({
     *   where: {
     *     // ... the filter for the Organisations we want to count
     *   }
     * })
    **/
    count<T extends organisationCountArgs>(
      args?: Subset<T, organisationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganisationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganisationAggregateArgs>(args: Subset<T, OrganisationAggregateArgs>): Prisma.PrismaPromise<GetOrganisationAggregateType<T>>

    /**
     * Group by Organisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationGroupByArgs} args - Group by arguments.
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
      T extends organisationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organisationGroupByArgs['orderBy'] }
        : { orderBy?: organisationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, organisationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganisationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organisation model
   */
  readonly fields: organisationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organisation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organisationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the organisation model
   */ 
  interface organisationFieldRefs {
    readonly orgId: FieldRef<"organisation", 'String'>
    readonly type: FieldRef<"organisation", 'organisationType'>
  }
    

  // Custom InputTypes
  /**
   * organisation findUnique
   */
  export type organisationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisation
     */
    select?: organisationSelect<ExtArgs> | null
    /**
     * Filter, which organisation to fetch.
     */
    where: organisationWhereUniqueInput
  }

  /**
   * organisation findUniqueOrThrow
   */
  export type organisationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisation
     */
    select?: organisationSelect<ExtArgs> | null
    /**
     * Filter, which organisation to fetch.
     */
    where: organisationWhereUniqueInput
  }

  /**
   * organisation findFirst
   */
  export type organisationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisation
     */
    select?: organisationSelect<ExtArgs> | null
    /**
     * Filter, which organisation to fetch.
     */
    where?: organisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organisations to fetch.
     */
    orderBy?: organisationOrderByWithRelationInput | organisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organisations.
     */
    cursor?: organisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organisations.
     */
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
  }

  /**
   * organisation findFirstOrThrow
   */
  export type organisationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisation
     */
    select?: organisationSelect<ExtArgs> | null
    /**
     * Filter, which organisation to fetch.
     */
    where?: organisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organisations to fetch.
     */
    orderBy?: organisationOrderByWithRelationInput | organisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organisations.
     */
    cursor?: organisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organisations.
     */
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
  }

  /**
   * organisation findMany
   */
  export type organisationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisation
     */
    select?: organisationSelect<ExtArgs> | null
    /**
     * Filter, which organisations to fetch.
     */
    where?: organisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organisations to fetch.
     */
    orderBy?: organisationOrderByWithRelationInput | organisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organisations.
     */
    cursor?: organisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organisations.
     */
    skip?: number
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
  }

  /**
   * organisation create
   */
  export type organisationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisation
     */
    select?: organisationSelect<ExtArgs> | null
    /**
     * The data needed to create a organisation.
     */
    data: XOR<organisationCreateInput, organisationUncheckedCreateInput>
  }

  /**
   * organisation createMany
   */
  export type organisationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organisations.
     */
    data: organisationCreateManyInput | organisationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organisation createManyAndReturn
   */
  export type organisationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisation
     */
    select?: organisationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many organisations.
     */
    data: organisationCreateManyInput | organisationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organisation update
   */
  export type organisationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisation
     */
    select?: organisationSelect<ExtArgs> | null
    /**
     * The data needed to update a organisation.
     */
    data: XOR<organisationUpdateInput, organisationUncheckedUpdateInput>
    /**
     * Choose, which organisation to update.
     */
    where: organisationWhereUniqueInput
  }

  /**
   * organisation updateMany
   */
  export type organisationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organisations.
     */
    data: XOR<organisationUpdateManyMutationInput, organisationUncheckedUpdateManyInput>
    /**
     * Filter which organisations to update
     */
    where?: organisationWhereInput
  }

  /**
   * organisation upsert
   */
  export type organisationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisation
     */
    select?: organisationSelect<ExtArgs> | null
    /**
     * The filter to search for the organisation to update in case it exists.
     */
    where: organisationWhereUniqueInput
    /**
     * In case the organisation found by the `where` argument doesn't exist, create a new organisation with this data.
     */
    create: XOR<organisationCreateInput, organisationUncheckedCreateInput>
    /**
     * In case the organisation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organisationUpdateInput, organisationUncheckedUpdateInput>
  }

  /**
   * organisation delete
   */
  export type organisationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisation
     */
    select?: organisationSelect<ExtArgs> | null
    /**
     * Filter which organisation to delete.
     */
    where: organisationWhereUniqueInput
  }

  /**
   * organisation deleteMany
   */
  export type organisationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organisations to delete
     */
    where?: organisationWhereInput
  }

  /**
   * organisation without action
   */
  export type organisationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisation
     */
    select?: organisationSelect<ExtArgs> | null
  }


  /**
   * Model UserCategoryLinkUp
   */

  export type AggregateUserCategoryLinkUp = {
    _count: UserCategoryLinkUpCountAggregateOutputType | null
    _min: UserCategoryLinkUpMinAggregateOutputType | null
    _max: UserCategoryLinkUpMaxAggregateOutputType | null
  }

  export type UserCategoryLinkUpMinAggregateOutputType = {
    id: string | null
    userId: string | null
    userName: string | null
    categoryId: string | null
    createdAt: Date | null
  }

  export type UserCategoryLinkUpMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    userName: string | null
    categoryId: string | null
    createdAt: Date | null
  }

  export type UserCategoryLinkUpCountAggregateOutputType = {
    id: number
    userId: number
    userName: number
    categoryId: number
    createdAt: number
    _all: number
  }


  export type UserCategoryLinkUpMinAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    categoryId?: true
    createdAt?: true
  }

  export type UserCategoryLinkUpMaxAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    categoryId?: true
    createdAt?: true
  }

  export type UserCategoryLinkUpCountAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    categoryId?: true
    createdAt?: true
    _all?: true
  }

  export type UserCategoryLinkUpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCategoryLinkUp to aggregate.
     */
    where?: UserCategoryLinkUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategoryLinkUps to fetch.
     */
    orderBy?: UserCategoryLinkUpOrderByWithRelationInput | UserCategoryLinkUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCategoryLinkUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategoryLinkUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategoryLinkUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCategoryLinkUps
    **/
    _count?: true | UserCategoryLinkUpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCategoryLinkUpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCategoryLinkUpMaxAggregateInputType
  }

  export type GetUserCategoryLinkUpAggregateType<T extends UserCategoryLinkUpAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCategoryLinkUp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCategoryLinkUp[P]>
      : GetScalarType<T[P], AggregateUserCategoryLinkUp[P]>
  }




  export type UserCategoryLinkUpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCategoryLinkUpWhereInput
    orderBy?: UserCategoryLinkUpOrderByWithAggregationInput | UserCategoryLinkUpOrderByWithAggregationInput[]
    by: UserCategoryLinkUpScalarFieldEnum[] | UserCategoryLinkUpScalarFieldEnum
    having?: UserCategoryLinkUpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCategoryLinkUpCountAggregateInputType | true
    _min?: UserCategoryLinkUpMinAggregateInputType
    _max?: UserCategoryLinkUpMaxAggregateInputType
  }

  export type UserCategoryLinkUpGroupByOutputType = {
    id: string
    userId: string
    userName: string
    categoryId: string
    createdAt: Date
    _count: UserCategoryLinkUpCountAggregateOutputType | null
    _min: UserCategoryLinkUpMinAggregateOutputType | null
    _max: UserCategoryLinkUpMaxAggregateOutputType | null
  }

  type GetUserCategoryLinkUpGroupByPayload<T extends UserCategoryLinkUpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCategoryLinkUpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCategoryLinkUpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCategoryLinkUpGroupByOutputType[P]>
            : GetScalarType<T[P], UserCategoryLinkUpGroupByOutputType[P]>
        }
      >
    >


  export type UserCategoryLinkUpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    categoryId?: boolean
    createdAt?: boolean
    category?: boolean | UserCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCategoryLinkUp"]>

  export type UserCategoryLinkUpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    categoryId?: boolean
    createdAt?: boolean
    category?: boolean | UserCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCategoryLinkUp"]>

  export type UserCategoryLinkUpSelectScalar = {
    id?: boolean
    userId?: boolean
    userName?: boolean
    categoryId?: boolean
    createdAt?: boolean
  }

  export type UserCategoryLinkUpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | UserCategoryDefaultArgs<ExtArgs>
  }
  export type UserCategoryLinkUpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | UserCategoryDefaultArgs<ExtArgs>
  }

  export type $UserCategoryLinkUpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCategoryLinkUp"
    objects: {
      category: Prisma.$UserCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      userName: string
      categoryId: string
      createdAt: Date
    }, ExtArgs["result"]["userCategoryLinkUp"]>
    composites: {}
  }

  type UserCategoryLinkUpGetPayload<S extends boolean | null | undefined | UserCategoryLinkUpDefaultArgs> = $Result.GetResult<Prisma.$UserCategoryLinkUpPayload, S>

  type UserCategoryLinkUpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserCategoryLinkUpFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCategoryLinkUpCountAggregateInputType | true
    }

  export interface UserCategoryLinkUpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCategoryLinkUp'], meta: { name: 'UserCategoryLinkUp' } }
    /**
     * Find zero or one UserCategoryLinkUp that matches the filter.
     * @param {UserCategoryLinkUpFindUniqueArgs} args - Arguments to find a UserCategoryLinkUp
     * @example
     * // Get one UserCategoryLinkUp
     * const userCategoryLinkUp = await prisma.userCategoryLinkUp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCategoryLinkUpFindUniqueArgs>(args: SelectSubset<T, UserCategoryLinkUpFindUniqueArgs<ExtArgs>>): Prisma__UserCategoryLinkUpClient<$Result.GetResult<Prisma.$UserCategoryLinkUpPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserCategoryLinkUp that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserCategoryLinkUpFindUniqueOrThrowArgs} args - Arguments to find a UserCategoryLinkUp
     * @example
     * // Get one UserCategoryLinkUp
     * const userCategoryLinkUp = await prisma.userCategoryLinkUp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCategoryLinkUpFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCategoryLinkUpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCategoryLinkUpClient<$Result.GetResult<Prisma.$UserCategoryLinkUpPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserCategoryLinkUp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryLinkUpFindFirstArgs} args - Arguments to find a UserCategoryLinkUp
     * @example
     * // Get one UserCategoryLinkUp
     * const userCategoryLinkUp = await prisma.userCategoryLinkUp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCategoryLinkUpFindFirstArgs>(args?: SelectSubset<T, UserCategoryLinkUpFindFirstArgs<ExtArgs>>): Prisma__UserCategoryLinkUpClient<$Result.GetResult<Prisma.$UserCategoryLinkUpPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserCategoryLinkUp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryLinkUpFindFirstOrThrowArgs} args - Arguments to find a UserCategoryLinkUp
     * @example
     * // Get one UserCategoryLinkUp
     * const userCategoryLinkUp = await prisma.userCategoryLinkUp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCategoryLinkUpFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCategoryLinkUpFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCategoryLinkUpClient<$Result.GetResult<Prisma.$UserCategoryLinkUpPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserCategoryLinkUps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryLinkUpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCategoryLinkUps
     * const userCategoryLinkUps = await prisma.userCategoryLinkUp.findMany()
     * 
     * // Get first 10 UserCategoryLinkUps
     * const userCategoryLinkUps = await prisma.userCategoryLinkUp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCategoryLinkUpWithIdOnly = await prisma.userCategoryLinkUp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCategoryLinkUpFindManyArgs>(args?: SelectSubset<T, UserCategoryLinkUpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCategoryLinkUpPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserCategoryLinkUp.
     * @param {UserCategoryLinkUpCreateArgs} args - Arguments to create a UserCategoryLinkUp.
     * @example
     * // Create one UserCategoryLinkUp
     * const UserCategoryLinkUp = await prisma.userCategoryLinkUp.create({
     *   data: {
     *     // ... data to create a UserCategoryLinkUp
     *   }
     * })
     * 
     */
    create<T extends UserCategoryLinkUpCreateArgs>(args: SelectSubset<T, UserCategoryLinkUpCreateArgs<ExtArgs>>): Prisma__UserCategoryLinkUpClient<$Result.GetResult<Prisma.$UserCategoryLinkUpPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserCategoryLinkUps.
     * @param {UserCategoryLinkUpCreateManyArgs} args - Arguments to create many UserCategoryLinkUps.
     * @example
     * // Create many UserCategoryLinkUps
     * const userCategoryLinkUp = await prisma.userCategoryLinkUp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCategoryLinkUpCreateManyArgs>(args?: SelectSubset<T, UserCategoryLinkUpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCategoryLinkUps and returns the data saved in the database.
     * @param {UserCategoryLinkUpCreateManyAndReturnArgs} args - Arguments to create many UserCategoryLinkUps.
     * @example
     * // Create many UserCategoryLinkUps
     * const userCategoryLinkUp = await prisma.userCategoryLinkUp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCategoryLinkUps and only return the `id`
     * const userCategoryLinkUpWithIdOnly = await prisma.userCategoryLinkUp.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCategoryLinkUpCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCategoryLinkUpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCategoryLinkUpPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserCategoryLinkUp.
     * @param {UserCategoryLinkUpDeleteArgs} args - Arguments to delete one UserCategoryLinkUp.
     * @example
     * // Delete one UserCategoryLinkUp
     * const UserCategoryLinkUp = await prisma.userCategoryLinkUp.delete({
     *   where: {
     *     // ... filter to delete one UserCategoryLinkUp
     *   }
     * })
     * 
     */
    delete<T extends UserCategoryLinkUpDeleteArgs>(args: SelectSubset<T, UserCategoryLinkUpDeleteArgs<ExtArgs>>): Prisma__UserCategoryLinkUpClient<$Result.GetResult<Prisma.$UserCategoryLinkUpPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserCategoryLinkUp.
     * @param {UserCategoryLinkUpUpdateArgs} args - Arguments to update one UserCategoryLinkUp.
     * @example
     * // Update one UserCategoryLinkUp
     * const userCategoryLinkUp = await prisma.userCategoryLinkUp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCategoryLinkUpUpdateArgs>(args: SelectSubset<T, UserCategoryLinkUpUpdateArgs<ExtArgs>>): Prisma__UserCategoryLinkUpClient<$Result.GetResult<Prisma.$UserCategoryLinkUpPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserCategoryLinkUps.
     * @param {UserCategoryLinkUpDeleteManyArgs} args - Arguments to filter UserCategoryLinkUps to delete.
     * @example
     * // Delete a few UserCategoryLinkUps
     * const { count } = await prisma.userCategoryLinkUp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCategoryLinkUpDeleteManyArgs>(args?: SelectSubset<T, UserCategoryLinkUpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCategoryLinkUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryLinkUpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCategoryLinkUps
     * const userCategoryLinkUp = await prisma.userCategoryLinkUp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCategoryLinkUpUpdateManyArgs>(args: SelectSubset<T, UserCategoryLinkUpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCategoryLinkUp.
     * @param {UserCategoryLinkUpUpsertArgs} args - Arguments to update or create a UserCategoryLinkUp.
     * @example
     * // Update or create a UserCategoryLinkUp
     * const userCategoryLinkUp = await prisma.userCategoryLinkUp.upsert({
     *   create: {
     *     // ... data to create a UserCategoryLinkUp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCategoryLinkUp we want to update
     *   }
     * })
     */
    upsert<T extends UserCategoryLinkUpUpsertArgs>(args: SelectSubset<T, UserCategoryLinkUpUpsertArgs<ExtArgs>>): Prisma__UserCategoryLinkUpClient<$Result.GetResult<Prisma.$UserCategoryLinkUpPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserCategoryLinkUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryLinkUpCountArgs} args - Arguments to filter UserCategoryLinkUps to count.
     * @example
     * // Count the number of UserCategoryLinkUps
     * const count = await prisma.userCategoryLinkUp.count({
     *   where: {
     *     // ... the filter for the UserCategoryLinkUps we want to count
     *   }
     * })
    **/
    count<T extends UserCategoryLinkUpCountArgs>(
      args?: Subset<T, UserCategoryLinkUpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCategoryLinkUpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCategoryLinkUp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryLinkUpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCategoryLinkUpAggregateArgs>(args: Subset<T, UserCategoryLinkUpAggregateArgs>): Prisma.PrismaPromise<GetUserCategoryLinkUpAggregateType<T>>

    /**
     * Group by UserCategoryLinkUp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryLinkUpGroupByArgs} args - Group by arguments.
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
      T extends UserCategoryLinkUpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCategoryLinkUpGroupByArgs['orderBy'] }
        : { orderBy?: UserCategoryLinkUpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCategoryLinkUpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCategoryLinkUpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCategoryLinkUp model
   */
  readonly fields: UserCategoryLinkUpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCategoryLinkUp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCategoryLinkUpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends UserCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserCategoryDefaultArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserCategoryLinkUp model
   */ 
  interface UserCategoryLinkUpFieldRefs {
    readonly id: FieldRef<"UserCategoryLinkUp", 'String'>
    readonly userId: FieldRef<"UserCategoryLinkUp", 'String'>
    readonly userName: FieldRef<"UserCategoryLinkUp", 'String'>
    readonly categoryId: FieldRef<"UserCategoryLinkUp", 'String'>
    readonly createdAt: FieldRef<"UserCategoryLinkUp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCategoryLinkUp findUnique
   */
  export type UserCategoryLinkUpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategoryLinkUp
     */
    select?: UserCategoryLinkUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryLinkUpInclude<ExtArgs> | null
    /**
     * Filter, which UserCategoryLinkUp to fetch.
     */
    where: UserCategoryLinkUpWhereUniqueInput
  }

  /**
   * UserCategoryLinkUp findUniqueOrThrow
   */
  export type UserCategoryLinkUpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategoryLinkUp
     */
    select?: UserCategoryLinkUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryLinkUpInclude<ExtArgs> | null
    /**
     * Filter, which UserCategoryLinkUp to fetch.
     */
    where: UserCategoryLinkUpWhereUniqueInput
  }

  /**
   * UserCategoryLinkUp findFirst
   */
  export type UserCategoryLinkUpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategoryLinkUp
     */
    select?: UserCategoryLinkUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryLinkUpInclude<ExtArgs> | null
    /**
     * Filter, which UserCategoryLinkUp to fetch.
     */
    where?: UserCategoryLinkUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategoryLinkUps to fetch.
     */
    orderBy?: UserCategoryLinkUpOrderByWithRelationInput | UserCategoryLinkUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCategoryLinkUps.
     */
    cursor?: UserCategoryLinkUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategoryLinkUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategoryLinkUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCategoryLinkUps.
     */
    distinct?: UserCategoryLinkUpScalarFieldEnum | UserCategoryLinkUpScalarFieldEnum[]
  }

  /**
   * UserCategoryLinkUp findFirstOrThrow
   */
  export type UserCategoryLinkUpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategoryLinkUp
     */
    select?: UserCategoryLinkUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryLinkUpInclude<ExtArgs> | null
    /**
     * Filter, which UserCategoryLinkUp to fetch.
     */
    where?: UserCategoryLinkUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategoryLinkUps to fetch.
     */
    orderBy?: UserCategoryLinkUpOrderByWithRelationInput | UserCategoryLinkUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCategoryLinkUps.
     */
    cursor?: UserCategoryLinkUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategoryLinkUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategoryLinkUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCategoryLinkUps.
     */
    distinct?: UserCategoryLinkUpScalarFieldEnum | UserCategoryLinkUpScalarFieldEnum[]
  }

  /**
   * UserCategoryLinkUp findMany
   */
  export type UserCategoryLinkUpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategoryLinkUp
     */
    select?: UserCategoryLinkUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryLinkUpInclude<ExtArgs> | null
    /**
     * Filter, which UserCategoryLinkUps to fetch.
     */
    where?: UserCategoryLinkUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategoryLinkUps to fetch.
     */
    orderBy?: UserCategoryLinkUpOrderByWithRelationInput | UserCategoryLinkUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCategoryLinkUps.
     */
    cursor?: UserCategoryLinkUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategoryLinkUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategoryLinkUps.
     */
    skip?: number
    distinct?: UserCategoryLinkUpScalarFieldEnum | UserCategoryLinkUpScalarFieldEnum[]
  }

  /**
   * UserCategoryLinkUp create
   */
  export type UserCategoryLinkUpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategoryLinkUp
     */
    select?: UserCategoryLinkUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryLinkUpInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCategoryLinkUp.
     */
    data: XOR<UserCategoryLinkUpCreateInput, UserCategoryLinkUpUncheckedCreateInput>
  }

  /**
   * UserCategoryLinkUp createMany
   */
  export type UserCategoryLinkUpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCategoryLinkUps.
     */
    data: UserCategoryLinkUpCreateManyInput | UserCategoryLinkUpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCategoryLinkUp createManyAndReturn
   */
  export type UserCategoryLinkUpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategoryLinkUp
     */
    select?: UserCategoryLinkUpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserCategoryLinkUps.
     */
    data: UserCategoryLinkUpCreateManyInput | UserCategoryLinkUpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryLinkUpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCategoryLinkUp update
   */
  export type UserCategoryLinkUpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategoryLinkUp
     */
    select?: UserCategoryLinkUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryLinkUpInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCategoryLinkUp.
     */
    data: XOR<UserCategoryLinkUpUpdateInput, UserCategoryLinkUpUncheckedUpdateInput>
    /**
     * Choose, which UserCategoryLinkUp to update.
     */
    where: UserCategoryLinkUpWhereUniqueInput
  }

  /**
   * UserCategoryLinkUp updateMany
   */
  export type UserCategoryLinkUpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCategoryLinkUps.
     */
    data: XOR<UserCategoryLinkUpUpdateManyMutationInput, UserCategoryLinkUpUncheckedUpdateManyInput>
    /**
     * Filter which UserCategoryLinkUps to update
     */
    where?: UserCategoryLinkUpWhereInput
  }

  /**
   * UserCategoryLinkUp upsert
   */
  export type UserCategoryLinkUpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategoryLinkUp
     */
    select?: UserCategoryLinkUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryLinkUpInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCategoryLinkUp to update in case it exists.
     */
    where: UserCategoryLinkUpWhereUniqueInput
    /**
     * In case the UserCategoryLinkUp found by the `where` argument doesn't exist, create a new UserCategoryLinkUp with this data.
     */
    create: XOR<UserCategoryLinkUpCreateInput, UserCategoryLinkUpUncheckedCreateInput>
    /**
     * In case the UserCategoryLinkUp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCategoryLinkUpUpdateInput, UserCategoryLinkUpUncheckedUpdateInput>
  }

  /**
   * UserCategoryLinkUp delete
   */
  export type UserCategoryLinkUpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategoryLinkUp
     */
    select?: UserCategoryLinkUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryLinkUpInclude<ExtArgs> | null
    /**
     * Filter which UserCategoryLinkUp to delete.
     */
    where: UserCategoryLinkUpWhereUniqueInput
  }

  /**
   * UserCategoryLinkUp deleteMany
   */
  export type UserCategoryLinkUpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCategoryLinkUps to delete
     */
    where?: UserCategoryLinkUpWhereInput
  }

  /**
   * UserCategoryLinkUp without action
   */
  export type UserCategoryLinkUpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategoryLinkUp
     */
    select?: UserCategoryLinkUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryLinkUpInclude<ExtArgs> | null
  }


  /**
   * Model UserLeaves
   */

  export type AggregateUserLeaves = {
    _count: UserLeavesCountAggregateOutputType | null
    _avg: UserLeavesAvgAggregateOutputType | null
    _sum: UserLeavesSumAggregateOutputType | null
    _min: UserLeavesMinAggregateOutputType | null
    _max: UserLeavesMaxAggregateOutputType | null
  }

  export type UserLeavesAvgAggregateOutputType = {
    sickLeaves: Decimal | null
    vacationLeaves: Decimal | null
    parentalLeaves: Decimal | null
    maternityLeaves: Decimal | null
  }

  export type UserLeavesSumAggregateOutputType = {
    sickLeaves: Decimal | null
    vacationLeaves: Decimal | null
    parentalLeaves: Decimal | null
    maternityLeaves: Decimal | null
  }

  export type UserLeavesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sickLeaves: Decimal | null
    vacationLeaves: Decimal | null
    parentalLeaves: Decimal | null
    maternityLeaves: Decimal | null
    createdAt: Date | null
  }

  export type UserLeavesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sickLeaves: Decimal | null
    vacationLeaves: Decimal | null
    parentalLeaves: Decimal | null
    maternityLeaves: Decimal | null
    createdAt: Date | null
  }

  export type UserLeavesCountAggregateOutputType = {
    id: number
    userId: number
    sickLeaves: number
    vacationLeaves: number
    parentalLeaves: number
    maternityLeaves: number
    createdAt: number
    _all: number
  }


  export type UserLeavesAvgAggregateInputType = {
    sickLeaves?: true
    vacationLeaves?: true
    parentalLeaves?: true
    maternityLeaves?: true
  }

  export type UserLeavesSumAggregateInputType = {
    sickLeaves?: true
    vacationLeaves?: true
    parentalLeaves?: true
    maternityLeaves?: true
  }

  export type UserLeavesMinAggregateInputType = {
    id?: true
    userId?: true
    sickLeaves?: true
    vacationLeaves?: true
    parentalLeaves?: true
    maternityLeaves?: true
    createdAt?: true
  }

  export type UserLeavesMaxAggregateInputType = {
    id?: true
    userId?: true
    sickLeaves?: true
    vacationLeaves?: true
    parentalLeaves?: true
    maternityLeaves?: true
    createdAt?: true
  }

  export type UserLeavesCountAggregateInputType = {
    id?: true
    userId?: true
    sickLeaves?: true
    vacationLeaves?: true
    parentalLeaves?: true
    maternityLeaves?: true
    createdAt?: true
    _all?: true
  }

  export type UserLeavesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLeaves to aggregate.
     */
    where?: UserLeavesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLeaves to fetch.
     */
    orderBy?: UserLeavesOrderByWithRelationInput | UserLeavesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLeavesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLeaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLeaves
    **/
    _count?: true | UserLeavesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLeavesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLeavesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLeavesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLeavesMaxAggregateInputType
  }

  export type GetUserLeavesAggregateType<T extends UserLeavesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLeaves]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLeaves[P]>
      : GetScalarType<T[P], AggregateUserLeaves[P]>
  }




  export type UserLeavesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLeavesWhereInput
    orderBy?: UserLeavesOrderByWithAggregationInput | UserLeavesOrderByWithAggregationInput[]
    by: UserLeavesScalarFieldEnum[] | UserLeavesScalarFieldEnum
    having?: UserLeavesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLeavesCountAggregateInputType | true
    _avg?: UserLeavesAvgAggregateInputType
    _sum?: UserLeavesSumAggregateInputType
    _min?: UserLeavesMinAggregateInputType
    _max?: UserLeavesMaxAggregateInputType
  }

  export type UserLeavesGroupByOutputType = {
    id: string
    userId: string
    sickLeaves: Decimal
    vacationLeaves: Decimal
    parentalLeaves: Decimal
    maternityLeaves: Decimal
    createdAt: Date
    _count: UserLeavesCountAggregateOutputType | null
    _avg: UserLeavesAvgAggregateOutputType | null
    _sum: UserLeavesSumAggregateOutputType | null
    _min: UserLeavesMinAggregateOutputType | null
    _max: UserLeavesMaxAggregateOutputType | null
  }

  type GetUserLeavesGroupByPayload<T extends UserLeavesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLeavesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLeavesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLeavesGroupByOutputType[P]>
            : GetScalarType<T[P], UserLeavesGroupByOutputType[P]>
        }
      >
    >


  export type UserLeavesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sickLeaves?: boolean
    vacationLeaves?: boolean
    parentalLeaves?: boolean
    maternityLeaves?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userLeaves"]>

  export type UserLeavesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sickLeaves?: boolean
    vacationLeaves?: boolean
    parentalLeaves?: boolean
    maternityLeaves?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userLeaves"]>

  export type UserLeavesSelectScalar = {
    id?: boolean
    userId?: boolean
    sickLeaves?: boolean
    vacationLeaves?: boolean
    parentalLeaves?: boolean
    maternityLeaves?: boolean
    createdAt?: boolean
  }


  export type $UserLeavesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLeaves"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sickLeaves: Prisma.Decimal
      vacationLeaves: Prisma.Decimal
      parentalLeaves: Prisma.Decimal
      maternityLeaves: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["userLeaves"]>
    composites: {}
  }

  type UserLeavesGetPayload<S extends boolean | null | undefined | UserLeavesDefaultArgs> = $Result.GetResult<Prisma.$UserLeavesPayload, S>

  type UserLeavesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserLeavesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserLeavesCountAggregateInputType | true
    }

  export interface UserLeavesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLeaves'], meta: { name: 'UserLeaves' } }
    /**
     * Find zero or one UserLeaves that matches the filter.
     * @param {UserLeavesFindUniqueArgs} args - Arguments to find a UserLeaves
     * @example
     * // Get one UserLeaves
     * const userLeaves = await prisma.userLeaves.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLeavesFindUniqueArgs>(args: SelectSubset<T, UserLeavesFindUniqueArgs<ExtArgs>>): Prisma__UserLeavesClient<$Result.GetResult<Prisma.$UserLeavesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserLeaves that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserLeavesFindUniqueOrThrowArgs} args - Arguments to find a UserLeaves
     * @example
     * // Get one UserLeaves
     * const userLeaves = await prisma.userLeaves.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLeavesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLeavesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLeavesClient<$Result.GetResult<Prisma.$UserLeavesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserLeaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLeavesFindFirstArgs} args - Arguments to find a UserLeaves
     * @example
     * // Get one UserLeaves
     * const userLeaves = await prisma.userLeaves.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLeavesFindFirstArgs>(args?: SelectSubset<T, UserLeavesFindFirstArgs<ExtArgs>>): Prisma__UserLeavesClient<$Result.GetResult<Prisma.$UserLeavesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserLeaves that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLeavesFindFirstOrThrowArgs} args - Arguments to find a UserLeaves
     * @example
     * // Get one UserLeaves
     * const userLeaves = await prisma.userLeaves.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLeavesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLeavesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLeavesClient<$Result.GetResult<Prisma.$UserLeavesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserLeaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLeavesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLeaves
     * const userLeaves = await prisma.userLeaves.findMany()
     * 
     * // Get first 10 UserLeaves
     * const userLeaves = await prisma.userLeaves.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLeavesWithIdOnly = await prisma.userLeaves.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLeavesFindManyArgs>(args?: SelectSubset<T, UserLeavesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLeavesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserLeaves.
     * @param {UserLeavesCreateArgs} args - Arguments to create a UserLeaves.
     * @example
     * // Create one UserLeaves
     * const UserLeaves = await prisma.userLeaves.create({
     *   data: {
     *     // ... data to create a UserLeaves
     *   }
     * })
     * 
     */
    create<T extends UserLeavesCreateArgs>(args: SelectSubset<T, UserLeavesCreateArgs<ExtArgs>>): Prisma__UserLeavesClient<$Result.GetResult<Prisma.$UserLeavesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserLeaves.
     * @param {UserLeavesCreateManyArgs} args - Arguments to create many UserLeaves.
     * @example
     * // Create many UserLeaves
     * const userLeaves = await prisma.userLeaves.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLeavesCreateManyArgs>(args?: SelectSubset<T, UserLeavesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLeaves and returns the data saved in the database.
     * @param {UserLeavesCreateManyAndReturnArgs} args - Arguments to create many UserLeaves.
     * @example
     * // Create many UserLeaves
     * const userLeaves = await prisma.userLeaves.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLeaves and only return the `id`
     * const userLeavesWithIdOnly = await prisma.userLeaves.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLeavesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLeavesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLeavesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserLeaves.
     * @param {UserLeavesDeleteArgs} args - Arguments to delete one UserLeaves.
     * @example
     * // Delete one UserLeaves
     * const UserLeaves = await prisma.userLeaves.delete({
     *   where: {
     *     // ... filter to delete one UserLeaves
     *   }
     * })
     * 
     */
    delete<T extends UserLeavesDeleteArgs>(args: SelectSubset<T, UserLeavesDeleteArgs<ExtArgs>>): Prisma__UserLeavesClient<$Result.GetResult<Prisma.$UserLeavesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserLeaves.
     * @param {UserLeavesUpdateArgs} args - Arguments to update one UserLeaves.
     * @example
     * // Update one UserLeaves
     * const userLeaves = await prisma.userLeaves.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLeavesUpdateArgs>(args: SelectSubset<T, UserLeavesUpdateArgs<ExtArgs>>): Prisma__UserLeavesClient<$Result.GetResult<Prisma.$UserLeavesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserLeaves.
     * @param {UserLeavesDeleteManyArgs} args - Arguments to filter UserLeaves to delete.
     * @example
     * // Delete a few UserLeaves
     * const { count } = await prisma.userLeaves.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLeavesDeleteManyArgs>(args?: SelectSubset<T, UserLeavesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLeaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLeavesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLeaves
     * const userLeaves = await prisma.userLeaves.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLeavesUpdateManyArgs>(args: SelectSubset<T, UserLeavesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLeaves.
     * @param {UserLeavesUpsertArgs} args - Arguments to update or create a UserLeaves.
     * @example
     * // Update or create a UserLeaves
     * const userLeaves = await prisma.userLeaves.upsert({
     *   create: {
     *     // ... data to create a UserLeaves
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLeaves we want to update
     *   }
     * })
     */
    upsert<T extends UserLeavesUpsertArgs>(args: SelectSubset<T, UserLeavesUpsertArgs<ExtArgs>>): Prisma__UserLeavesClient<$Result.GetResult<Prisma.$UserLeavesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserLeaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLeavesCountArgs} args - Arguments to filter UserLeaves to count.
     * @example
     * // Count the number of UserLeaves
     * const count = await prisma.userLeaves.count({
     *   where: {
     *     // ... the filter for the UserLeaves we want to count
     *   }
     * })
    **/
    count<T extends UserLeavesCountArgs>(
      args?: Subset<T, UserLeavesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLeavesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLeaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLeavesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLeavesAggregateArgs>(args: Subset<T, UserLeavesAggregateArgs>): Prisma.PrismaPromise<GetUserLeavesAggregateType<T>>

    /**
     * Group by UserLeaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLeavesGroupByArgs} args - Group by arguments.
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
      T extends UserLeavesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLeavesGroupByArgs['orderBy'] }
        : { orderBy?: UserLeavesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLeavesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLeavesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLeaves model
   */
  readonly fields: UserLeavesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLeaves.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLeavesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserLeaves model
   */ 
  interface UserLeavesFieldRefs {
    readonly id: FieldRef<"UserLeaves", 'String'>
    readonly userId: FieldRef<"UserLeaves", 'String'>
    readonly sickLeaves: FieldRef<"UserLeaves", 'Decimal'>
    readonly vacationLeaves: FieldRef<"UserLeaves", 'Decimal'>
    readonly parentalLeaves: FieldRef<"UserLeaves", 'Decimal'>
    readonly maternityLeaves: FieldRef<"UserLeaves", 'Decimal'>
    readonly createdAt: FieldRef<"UserLeaves", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLeaves findUnique
   */
  export type UserLeavesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLeaves
     */
    select?: UserLeavesSelect<ExtArgs> | null
    /**
     * Filter, which UserLeaves to fetch.
     */
    where: UserLeavesWhereUniqueInput
  }

  /**
   * UserLeaves findUniqueOrThrow
   */
  export type UserLeavesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLeaves
     */
    select?: UserLeavesSelect<ExtArgs> | null
    /**
     * Filter, which UserLeaves to fetch.
     */
    where: UserLeavesWhereUniqueInput
  }

  /**
   * UserLeaves findFirst
   */
  export type UserLeavesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLeaves
     */
    select?: UserLeavesSelect<ExtArgs> | null
    /**
     * Filter, which UserLeaves to fetch.
     */
    where?: UserLeavesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLeaves to fetch.
     */
    orderBy?: UserLeavesOrderByWithRelationInput | UserLeavesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLeaves.
     */
    cursor?: UserLeavesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLeaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLeaves.
     */
    distinct?: UserLeavesScalarFieldEnum | UserLeavesScalarFieldEnum[]
  }

  /**
   * UserLeaves findFirstOrThrow
   */
  export type UserLeavesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLeaves
     */
    select?: UserLeavesSelect<ExtArgs> | null
    /**
     * Filter, which UserLeaves to fetch.
     */
    where?: UserLeavesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLeaves to fetch.
     */
    orderBy?: UserLeavesOrderByWithRelationInput | UserLeavesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLeaves.
     */
    cursor?: UserLeavesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLeaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLeaves.
     */
    distinct?: UserLeavesScalarFieldEnum | UserLeavesScalarFieldEnum[]
  }

  /**
   * UserLeaves findMany
   */
  export type UserLeavesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLeaves
     */
    select?: UserLeavesSelect<ExtArgs> | null
    /**
     * Filter, which UserLeaves to fetch.
     */
    where?: UserLeavesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLeaves to fetch.
     */
    orderBy?: UserLeavesOrderByWithRelationInput | UserLeavesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLeaves.
     */
    cursor?: UserLeavesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLeaves.
     */
    skip?: number
    distinct?: UserLeavesScalarFieldEnum | UserLeavesScalarFieldEnum[]
  }

  /**
   * UserLeaves create
   */
  export type UserLeavesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLeaves
     */
    select?: UserLeavesSelect<ExtArgs> | null
    /**
     * The data needed to create a UserLeaves.
     */
    data: XOR<UserLeavesCreateInput, UserLeavesUncheckedCreateInput>
  }

  /**
   * UserLeaves createMany
   */
  export type UserLeavesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLeaves.
     */
    data: UserLeavesCreateManyInput | UserLeavesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLeaves createManyAndReturn
   */
  export type UserLeavesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLeaves
     */
    select?: UserLeavesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserLeaves.
     */
    data: UserLeavesCreateManyInput | UserLeavesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLeaves update
   */
  export type UserLeavesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLeaves
     */
    select?: UserLeavesSelect<ExtArgs> | null
    /**
     * The data needed to update a UserLeaves.
     */
    data: XOR<UserLeavesUpdateInput, UserLeavesUncheckedUpdateInput>
    /**
     * Choose, which UserLeaves to update.
     */
    where: UserLeavesWhereUniqueInput
  }

  /**
   * UserLeaves updateMany
   */
  export type UserLeavesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLeaves.
     */
    data: XOR<UserLeavesUpdateManyMutationInput, UserLeavesUncheckedUpdateManyInput>
    /**
     * Filter which UserLeaves to update
     */
    where?: UserLeavesWhereInput
  }

  /**
   * UserLeaves upsert
   */
  export type UserLeavesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLeaves
     */
    select?: UserLeavesSelect<ExtArgs> | null
    /**
     * The filter to search for the UserLeaves to update in case it exists.
     */
    where: UserLeavesWhereUniqueInput
    /**
     * In case the UserLeaves found by the `where` argument doesn't exist, create a new UserLeaves with this data.
     */
    create: XOR<UserLeavesCreateInput, UserLeavesUncheckedCreateInput>
    /**
     * In case the UserLeaves was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLeavesUpdateInput, UserLeavesUncheckedUpdateInput>
  }

  /**
   * UserLeaves delete
   */
  export type UserLeavesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLeaves
     */
    select?: UserLeavesSelect<ExtArgs> | null
    /**
     * Filter which UserLeaves to delete.
     */
    where: UserLeavesWhereUniqueInput
  }

  /**
   * UserLeaves deleteMany
   */
  export type UserLeavesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLeaves to delete
     */
    where?: UserLeavesWhereInput
  }

  /**
   * UserLeaves without action
   */
  export type UserLeavesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLeaves
     */
    select?: UserLeavesSelect<ExtArgs> | null
  }


  /**
   * Model UserHoliday
   */

  export type AggregateUserHoliday = {
    _count: UserHolidayCountAggregateOutputType | null
    _min: UserHolidayMinAggregateOutputType | null
    _max: UserHolidayMaxAggregateOutputType | null
  }

  export type UserHolidayMinAggregateOutputType = {
    id: string | null
    userId: string | null
    holidayId: string | null
    createdAt: Date | null
  }

  export type UserHolidayMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    holidayId: string | null
    createdAt: Date | null
  }

  export type UserHolidayCountAggregateOutputType = {
    id: number
    userId: number
    holidayId: number
    createdAt: number
    _all: number
  }


  export type UserHolidayMinAggregateInputType = {
    id?: true
    userId?: true
    holidayId?: true
    createdAt?: true
  }

  export type UserHolidayMaxAggregateInputType = {
    id?: true
    userId?: true
    holidayId?: true
    createdAt?: true
  }

  export type UserHolidayCountAggregateInputType = {
    id?: true
    userId?: true
    holidayId?: true
    createdAt?: true
    _all?: true
  }

  export type UserHolidayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHoliday to aggregate.
     */
    where?: UserHolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHolidays to fetch.
     */
    orderBy?: UserHolidayOrderByWithRelationInput | UserHolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserHolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHolidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHolidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserHolidays
    **/
    _count?: true | UserHolidayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserHolidayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserHolidayMaxAggregateInputType
  }

  export type GetUserHolidayAggregateType<T extends UserHolidayAggregateArgs> = {
        [P in keyof T & keyof AggregateUserHoliday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserHoliday[P]>
      : GetScalarType<T[P], AggregateUserHoliday[P]>
  }




  export type UserHolidayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHolidayWhereInput
    orderBy?: UserHolidayOrderByWithAggregationInput | UserHolidayOrderByWithAggregationInput[]
    by: UserHolidayScalarFieldEnum[] | UserHolidayScalarFieldEnum
    having?: UserHolidayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserHolidayCountAggregateInputType | true
    _min?: UserHolidayMinAggregateInputType
    _max?: UserHolidayMaxAggregateInputType
  }

  export type UserHolidayGroupByOutputType = {
    id: string
    userId: string
    holidayId: string
    createdAt: Date
    _count: UserHolidayCountAggregateOutputType | null
    _min: UserHolidayMinAggregateOutputType | null
    _max: UserHolidayMaxAggregateOutputType | null
  }

  type GetUserHolidayGroupByPayload<T extends UserHolidayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserHolidayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserHolidayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserHolidayGroupByOutputType[P]>
            : GetScalarType<T[P], UserHolidayGroupByOutputType[P]>
        }
      >
    >


  export type UserHolidaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    holidayId?: boolean
    createdAt?: boolean
    holiday?: boolean | HolidayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHoliday"]>

  export type UserHolidaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    holidayId?: boolean
    createdAt?: boolean
    holiday?: boolean | HolidayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHoliday"]>

  export type UserHolidaySelectScalar = {
    id?: boolean
    userId?: boolean
    holidayId?: boolean
    createdAt?: boolean
  }

  export type UserHolidayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    holiday?: boolean | HolidayDefaultArgs<ExtArgs>
  }
  export type UserHolidayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    holiday?: boolean | HolidayDefaultArgs<ExtArgs>
  }

  export type $UserHolidayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserHoliday"
    objects: {
      holiday: Prisma.$HolidayPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      holidayId: string
      createdAt: Date
    }, ExtArgs["result"]["userHoliday"]>
    composites: {}
  }

  type UserHolidayGetPayload<S extends boolean | null | undefined | UserHolidayDefaultArgs> = $Result.GetResult<Prisma.$UserHolidayPayload, S>

  type UserHolidayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserHolidayFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserHolidayCountAggregateInputType | true
    }

  export interface UserHolidayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserHoliday'], meta: { name: 'UserHoliday' } }
    /**
     * Find zero or one UserHoliday that matches the filter.
     * @param {UserHolidayFindUniqueArgs} args - Arguments to find a UserHoliday
     * @example
     * // Get one UserHoliday
     * const userHoliday = await prisma.userHoliday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserHolidayFindUniqueArgs>(args: SelectSubset<T, UserHolidayFindUniqueArgs<ExtArgs>>): Prisma__UserHolidayClient<$Result.GetResult<Prisma.$UserHolidayPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserHoliday that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserHolidayFindUniqueOrThrowArgs} args - Arguments to find a UserHoliday
     * @example
     * // Get one UserHoliday
     * const userHoliday = await prisma.userHoliday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserHolidayFindUniqueOrThrowArgs>(args: SelectSubset<T, UserHolidayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserHolidayClient<$Result.GetResult<Prisma.$UserHolidayPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserHoliday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHolidayFindFirstArgs} args - Arguments to find a UserHoliday
     * @example
     * // Get one UserHoliday
     * const userHoliday = await prisma.userHoliday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserHolidayFindFirstArgs>(args?: SelectSubset<T, UserHolidayFindFirstArgs<ExtArgs>>): Prisma__UserHolidayClient<$Result.GetResult<Prisma.$UserHolidayPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserHoliday that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHolidayFindFirstOrThrowArgs} args - Arguments to find a UserHoliday
     * @example
     * // Get one UserHoliday
     * const userHoliday = await prisma.userHoliday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserHolidayFindFirstOrThrowArgs>(args?: SelectSubset<T, UserHolidayFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserHolidayClient<$Result.GetResult<Prisma.$UserHolidayPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserHolidays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHolidayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserHolidays
     * const userHolidays = await prisma.userHoliday.findMany()
     * 
     * // Get first 10 UserHolidays
     * const userHolidays = await prisma.userHoliday.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userHolidayWithIdOnly = await prisma.userHoliday.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserHolidayFindManyArgs>(args?: SelectSubset<T, UserHolidayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHolidayPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserHoliday.
     * @param {UserHolidayCreateArgs} args - Arguments to create a UserHoliday.
     * @example
     * // Create one UserHoliday
     * const UserHoliday = await prisma.userHoliday.create({
     *   data: {
     *     // ... data to create a UserHoliday
     *   }
     * })
     * 
     */
    create<T extends UserHolidayCreateArgs>(args: SelectSubset<T, UserHolidayCreateArgs<ExtArgs>>): Prisma__UserHolidayClient<$Result.GetResult<Prisma.$UserHolidayPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserHolidays.
     * @param {UserHolidayCreateManyArgs} args - Arguments to create many UserHolidays.
     * @example
     * // Create many UserHolidays
     * const userHoliday = await prisma.userHoliday.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserHolidayCreateManyArgs>(args?: SelectSubset<T, UserHolidayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserHolidays and returns the data saved in the database.
     * @param {UserHolidayCreateManyAndReturnArgs} args - Arguments to create many UserHolidays.
     * @example
     * // Create many UserHolidays
     * const userHoliday = await prisma.userHoliday.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserHolidays and only return the `id`
     * const userHolidayWithIdOnly = await prisma.userHoliday.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserHolidayCreateManyAndReturnArgs>(args?: SelectSubset<T, UserHolidayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHolidayPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserHoliday.
     * @param {UserHolidayDeleteArgs} args - Arguments to delete one UserHoliday.
     * @example
     * // Delete one UserHoliday
     * const UserHoliday = await prisma.userHoliday.delete({
     *   where: {
     *     // ... filter to delete one UserHoliday
     *   }
     * })
     * 
     */
    delete<T extends UserHolidayDeleteArgs>(args: SelectSubset<T, UserHolidayDeleteArgs<ExtArgs>>): Prisma__UserHolidayClient<$Result.GetResult<Prisma.$UserHolidayPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserHoliday.
     * @param {UserHolidayUpdateArgs} args - Arguments to update one UserHoliday.
     * @example
     * // Update one UserHoliday
     * const userHoliday = await prisma.userHoliday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserHolidayUpdateArgs>(args: SelectSubset<T, UserHolidayUpdateArgs<ExtArgs>>): Prisma__UserHolidayClient<$Result.GetResult<Prisma.$UserHolidayPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserHolidays.
     * @param {UserHolidayDeleteManyArgs} args - Arguments to filter UserHolidays to delete.
     * @example
     * // Delete a few UserHolidays
     * const { count } = await prisma.userHoliday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserHolidayDeleteManyArgs>(args?: SelectSubset<T, UserHolidayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserHolidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHolidayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserHolidays
     * const userHoliday = await prisma.userHoliday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserHolidayUpdateManyArgs>(args: SelectSubset<T, UserHolidayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserHoliday.
     * @param {UserHolidayUpsertArgs} args - Arguments to update or create a UserHoliday.
     * @example
     * // Update or create a UserHoliday
     * const userHoliday = await prisma.userHoliday.upsert({
     *   create: {
     *     // ... data to create a UserHoliday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserHoliday we want to update
     *   }
     * })
     */
    upsert<T extends UserHolidayUpsertArgs>(args: SelectSubset<T, UserHolidayUpsertArgs<ExtArgs>>): Prisma__UserHolidayClient<$Result.GetResult<Prisma.$UserHolidayPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserHolidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHolidayCountArgs} args - Arguments to filter UserHolidays to count.
     * @example
     * // Count the number of UserHolidays
     * const count = await prisma.userHoliday.count({
     *   where: {
     *     // ... the filter for the UserHolidays we want to count
     *   }
     * })
    **/
    count<T extends UserHolidayCountArgs>(
      args?: Subset<T, UserHolidayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserHolidayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserHoliday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHolidayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserHolidayAggregateArgs>(args: Subset<T, UserHolidayAggregateArgs>): Prisma.PrismaPromise<GetUserHolidayAggregateType<T>>

    /**
     * Group by UserHoliday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHolidayGroupByArgs} args - Group by arguments.
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
      T extends UserHolidayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserHolidayGroupByArgs['orderBy'] }
        : { orderBy?: UserHolidayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserHolidayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserHolidayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserHoliday model
   */
  readonly fields: UserHolidayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserHoliday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserHolidayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    holiday<T extends HolidayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HolidayDefaultArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserHoliday model
   */ 
  interface UserHolidayFieldRefs {
    readonly id: FieldRef<"UserHoliday", 'String'>
    readonly userId: FieldRef<"UserHoliday", 'String'>
    readonly holidayId: FieldRef<"UserHoliday", 'String'>
    readonly createdAt: FieldRef<"UserHoliday", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserHoliday findUnique
   */
  export type UserHolidayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHoliday
     */
    select?: UserHolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHolidayInclude<ExtArgs> | null
    /**
     * Filter, which UserHoliday to fetch.
     */
    where: UserHolidayWhereUniqueInput
  }

  /**
   * UserHoliday findUniqueOrThrow
   */
  export type UserHolidayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHoliday
     */
    select?: UserHolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHolidayInclude<ExtArgs> | null
    /**
     * Filter, which UserHoliday to fetch.
     */
    where: UserHolidayWhereUniqueInput
  }

  /**
   * UserHoliday findFirst
   */
  export type UserHolidayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHoliday
     */
    select?: UserHolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHolidayInclude<ExtArgs> | null
    /**
     * Filter, which UserHoliday to fetch.
     */
    where?: UserHolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHolidays to fetch.
     */
    orderBy?: UserHolidayOrderByWithRelationInput | UserHolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHolidays.
     */
    cursor?: UserHolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHolidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHolidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHolidays.
     */
    distinct?: UserHolidayScalarFieldEnum | UserHolidayScalarFieldEnum[]
  }

  /**
   * UserHoliday findFirstOrThrow
   */
  export type UserHolidayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHoliday
     */
    select?: UserHolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHolidayInclude<ExtArgs> | null
    /**
     * Filter, which UserHoliday to fetch.
     */
    where?: UserHolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHolidays to fetch.
     */
    orderBy?: UserHolidayOrderByWithRelationInput | UserHolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHolidays.
     */
    cursor?: UserHolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHolidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHolidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHolidays.
     */
    distinct?: UserHolidayScalarFieldEnum | UserHolidayScalarFieldEnum[]
  }

  /**
   * UserHoliday findMany
   */
  export type UserHolidayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHoliday
     */
    select?: UserHolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHolidayInclude<ExtArgs> | null
    /**
     * Filter, which UserHolidays to fetch.
     */
    where?: UserHolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHolidays to fetch.
     */
    orderBy?: UserHolidayOrderByWithRelationInput | UserHolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserHolidays.
     */
    cursor?: UserHolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHolidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHolidays.
     */
    skip?: number
    distinct?: UserHolidayScalarFieldEnum | UserHolidayScalarFieldEnum[]
  }

  /**
   * UserHoliday create
   */
  export type UserHolidayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHoliday
     */
    select?: UserHolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHolidayInclude<ExtArgs> | null
    /**
     * The data needed to create a UserHoliday.
     */
    data: XOR<UserHolidayCreateInput, UserHolidayUncheckedCreateInput>
  }

  /**
   * UserHoliday createMany
   */
  export type UserHolidayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserHolidays.
     */
    data: UserHolidayCreateManyInput | UserHolidayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserHoliday createManyAndReturn
   */
  export type UserHolidayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHoliday
     */
    select?: UserHolidaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserHolidays.
     */
    data: UserHolidayCreateManyInput | UserHolidayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHolidayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserHoliday update
   */
  export type UserHolidayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHoliday
     */
    select?: UserHolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHolidayInclude<ExtArgs> | null
    /**
     * The data needed to update a UserHoliday.
     */
    data: XOR<UserHolidayUpdateInput, UserHolidayUncheckedUpdateInput>
    /**
     * Choose, which UserHoliday to update.
     */
    where: UserHolidayWhereUniqueInput
  }

  /**
   * UserHoliday updateMany
   */
  export type UserHolidayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserHolidays.
     */
    data: XOR<UserHolidayUpdateManyMutationInput, UserHolidayUncheckedUpdateManyInput>
    /**
     * Filter which UserHolidays to update
     */
    where?: UserHolidayWhereInput
  }

  /**
   * UserHoliday upsert
   */
  export type UserHolidayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHoliday
     */
    select?: UserHolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHolidayInclude<ExtArgs> | null
    /**
     * The filter to search for the UserHoliday to update in case it exists.
     */
    where: UserHolidayWhereUniqueInput
    /**
     * In case the UserHoliday found by the `where` argument doesn't exist, create a new UserHoliday with this data.
     */
    create: XOR<UserHolidayCreateInput, UserHolidayUncheckedCreateInput>
    /**
     * In case the UserHoliday was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserHolidayUpdateInput, UserHolidayUncheckedUpdateInput>
  }

  /**
   * UserHoliday delete
   */
  export type UserHolidayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHoliday
     */
    select?: UserHolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHolidayInclude<ExtArgs> | null
    /**
     * Filter which UserHoliday to delete.
     */
    where: UserHolidayWhereUniqueInput
  }

  /**
   * UserHoliday deleteMany
   */
  export type UserHolidayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHolidays to delete
     */
    where?: UserHolidayWhereInput
  }

  /**
   * UserHoliday without action
   */
  export type UserHolidayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHoliday
     */
    select?: UserHolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHolidayInclude<ExtArgs> | null
  }


  /**
   * Model UserCategory
   */

  export type AggregateUserCategory = {
    _count: UserCategoryCountAggregateOutputType | null
    _avg: UserCategoryAvgAggregateOutputType | null
    _sum: UserCategorySumAggregateOutputType | null
    _min: UserCategoryMinAggregateOutputType | null
    _max: UserCategoryMaxAggregateOutputType | null
  }

  export type UserCategoryAvgAggregateOutputType = {
    optionalHolidays: number | null
  }

  export type UserCategorySumAggregateOutputType = {
    optionalHolidays: number | null
  }

  export type UserCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    optionalHolidays: number | null
  }

  export type UserCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    optionalHolidays: number | null
  }

  export type UserCategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    optionalHolidays: number
    _all: number
  }


  export type UserCategoryAvgAggregateInputType = {
    optionalHolidays?: true
  }

  export type UserCategorySumAggregateInputType = {
    optionalHolidays?: true
  }

  export type UserCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    optionalHolidays?: true
  }

  export type UserCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    optionalHolidays?: true
  }

  export type UserCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    optionalHolidays?: true
    _all?: true
  }

  export type UserCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCategory to aggregate.
     */
    where?: UserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     */
    orderBy?: UserCategoryOrderByWithRelationInput | UserCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCategories
    **/
    _count?: true | UserCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCategoryMaxAggregateInputType
  }

  export type GetUserCategoryAggregateType<T extends UserCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCategory[P]>
      : GetScalarType<T[P], AggregateUserCategory[P]>
  }




  export type UserCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCategoryWhereInput
    orderBy?: UserCategoryOrderByWithAggregationInput | UserCategoryOrderByWithAggregationInput[]
    by: UserCategoryScalarFieldEnum[] | UserCategoryScalarFieldEnum
    having?: UserCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCategoryCountAggregateInputType | true
    _avg?: UserCategoryAvgAggregateInputType
    _sum?: UserCategorySumAggregateInputType
    _min?: UserCategoryMinAggregateInputType
    _max?: UserCategoryMaxAggregateInputType
  }

  export type UserCategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    optionalHolidays: number
    _count: UserCategoryCountAggregateOutputType | null
    _avg: UserCategoryAvgAggregateOutputType | null
    _sum: UserCategorySumAggregateOutputType | null
    _min: UserCategoryMinAggregateOutputType | null
    _max: UserCategoryMaxAggregateOutputType | null
  }

  type GetUserCategoryGroupByPayload<T extends UserCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserCategoryGroupByOutputType[P]>
        }
      >
    >


  export type UserCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    optionalHolidays?: boolean
    users?: boolean | UserCategory$usersArgs<ExtArgs>
    holidays?: boolean | UserCategory$holidaysArgs<ExtArgs>
    leavePolicy?: boolean | UserCategory$leavePolicyArgs<ExtArgs>
    _count?: boolean | UserCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCategory"]>

  export type UserCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    optionalHolidays?: boolean
  }, ExtArgs["result"]["userCategory"]>

  export type UserCategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    optionalHolidays?: boolean
  }

  export type UserCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserCategory$usersArgs<ExtArgs>
    holidays?: boolean | UserCategory$holidaysArgs<ExtArgs>
    leavePolicy?: boolean | UserCategory$leavePolicyArgs<ExtArgs>
    _count?: boolean | UserCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCategory"
    objects: {
      users: Prisma.$UserCategoryLinkUpPayload<ExtArgs>[]
      holidays: Prisma.$HolidayPayload<ExtArgs>[]
      leavePolicy: Prisma.$LeavePolicyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      optionalHolidays: number
    }, ExtArgs["result"]["userCategory"]>
    composites: {}
  }

  type UserCategoryGetPayload<S extends boolean | null | undefined | UserCategoryDefaultArgs> = $Result.GetResult<Prisma.$UserCategoryPayload, S>

  type UserCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCategoryCountAggregateInputType | true
    }

  export interface UserCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCategory'], meta: { name: 'UserCategory' } }
    /**
     * Find zero or one UserCategory that matches the filter.
     * @param {UserCategoryFindUniqueArgs} args - Arguments to find a UserCategory
     * @example
     * // Get one UserCategory
     * const userCategory = await prisma.userCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCategoryFindUniqueArgs>(args: SelectSubset<T, UserCategoryFindUniqueArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserCategoryFindUniqueOrThrowArgs} args - Arguments to find a UserCategory
     * @example
     * // Get one UserCategory
     * const userCategory = await prisma.userCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryFindFirstArgs} args - Arguments to find a UserCategory
     * @example
     * // Get one UserCategory
     * const userCategory = await prisma.userCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCategoryFindFirstArgs>(args?: SelectSubset<T, UserCategoryFindFirstArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryFindFirstOrThrowArgs} args - Arguments to find a UserCategory
     * @example
     * // Get one UserCategory
     * const userCategory = await prisma.userCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCategories
     * const userCategories = await prisma.userCategory.findMany()
     * 
     * // Get first 10 UserCategories
     * const userCategories = await prisma.userCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCategoryWithIdOnly = await prisma.userCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCategoryFindManyArgs>(args?: SelectSubset<T, UserCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserCategory.
     * @param {UserCategoryCreateArgs} args - Arguments to create a UserCategory.
     * @example
     * // Create one UserCategory
     * const UserCategory = await prisma.userCategory.create({
     *   data: {
     *     // ... data to create a UserCategory
     *   }
     * })
     * 
     */
    create<T extends UserCategoryCreateArgs>(args: SelectSubset<T, UserCategoryCreateArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserCategories.
     * @param {UserCategoryCreateManyArgs} args - Arguments to create many UserCategories.
     * @example
     * // Create many UserCategories
     * const userCategory = await prisma.userCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCategoryCreateManyArgs>(args?: SelectSubset<T, UserCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCategories and returns the data saved in the database.
     * @param {UserCategoryCreateManyAndReturnArgs} args - Arguments to create many UserCategories.
     * @example
     * // Create many UserCategories
     * const userCategory = await prisma.userCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCategories and only return the `id`
     * const userCategoryWithIdOnly = await prisma.userCategory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserCategory.
     * @param {UserCategoryDeleteArgs} args - Arguments to delete one UserCategory.
     * @example
     * // Delete one UserCategory
     * const UserCategory = await prisma.userCategory.delete({
     *   where: {
     *     // ... filter to delete one UserCategory
     *   }
     * })
     * 
     */
    delete<T extends UserCategoryDeleteArgs>(args: SelectSubset<T, UserCategoryDeleteArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserCategory.
     * @param {UserCategoryUpdateArgs} args - Arguments to update one UserCategory.
     * @example
     * // Update one UserCategory
     * const userCategory = await prisma.userCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCategoryUpdateArgs>(args: SelectSubset<T, UserCategoryUpdateArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserCategories.
     * @param {UserCategoryDeleteManyArgs} args - Arguments to filter UserCategories to delete.
     * @example
     * // Delete a few UserCategories
     * const { count } = await prisma.userCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCategoryDeleteManyArgs>(args?: SelectSubset<T, UserCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCategories
     * const userCategory = await prisma.userCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCategoryUpdateManyArgs>(args: SelectSubset<T, UserCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCategory.
     * @param {UserCategoryUpsertArgs} args - Arguments to update or create a UserCategory.
     * @example
     * // Update or create a UserCategory
     * const userCategory = await prisma.userCategory.upsert({
     *   create: {
     *     // ... data to create a UserCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCategory we want to update
     *   }
     * })
     */
    upsert<T extends UserCategoryUpsertArgs>(args: SelectSubset<T, UserCategoryUpsertArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryCountArgs} args - Arguments to filter UserCategories to count.
     * @example
     * // Count the number of UserCategories
     * const count = await prisma.userCategory.count({
     *   where: {
     *     // ... the filter for the UserCategories we want to count
     *   }
     * })
    **/
    count<T extends UserCategoryCountArgs>(
      args?: Subset<T, UserCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCategoryAggregateArgs>(args: Subset<T, UserCategoryAggregateArgs>): Prisma.PrismaPromise<GetUserCategoryAggregateType<T>>

    /**
     * Group by UserCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryGroupByArgs} args - Group by arguments.
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
      T extends UserCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCategoryGroupByArgs['orderBy'] }
        : { orderBy?: UserCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCategory model
   */
  readonly fields: UserCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UserCategory$usersArgs<ExtArgs> = {}>(args?: Subset<T, UserCategory$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCategoryLinkUpPayload<ExtArgs>, T, "findMany"> | Null>
    holidays<T extends UserCategory$holidaysArgs<ExtArgs> = {}>(args?: Subset<T, UserCategory$holidaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findMany"> | Null>
    leavePolicy<T extends UserCategory$leavePolicyArgs<ExtArgs> = {}>(args?: Subset<T, UserCategory$leavePolicyArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the UserCategory model
   */ 
  interface UserCategoryFieldRefs {
    readonly id: FieldRef<"UserCategory", 'String'>
    readonly name: FieldRef<"UserCategory", 'String'>
    readonly createdAt: FieldRef<"UserCategory", 'DateTime'>
    readonly optionalHolidays: FieldRef<"UserCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserCategory findUnique
   */
  export type UserCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserCategory to fetch.
     */
    where: UserCategoryWhereUniqueInput
  }

  /**
   * UserCategory findUniqueOrThrow
   */
  export type UserCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserCategory to fetch.
     */
    where: UserCategoryWhereUniqueInput
  }

  /**
   * UserCategory findFirst
   */
  export type UserCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserCategory to fetch.
     */
    where?: UserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     */
    orderBy?: UserCategoryOrderByWithRelationInput | UserCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCategories.
     */
    cursor?: UserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCategories.
     */
    distinct?: UserCategoryScalarFieldEnum | UserCategoryScalarFieldEnum[]
  }

  /**
   * UserCategory findFirstOrThrow
   */
  export type UserCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserCategory to fetch.
     */
    where?: UserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     */
    orderBy?: UserCategoryOrderByWithRelationInput | UserCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCategories.
     */
    cursor?: UserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCategories.
     */
    distinct?: UserCategoryScalarFieldEnum | UserCategoryScalarFieldEnum[]
  }

  /**
   * UserCategory findMany
   */
  export type UserCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserCategories to fetch.
     */
    where?: UserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     */
    orderBy?: UserCategoryOrderByWithRelationInput | UserCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCategories.
     */
    cursor?: UserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     */
    skip?: number
    distinct?: UserCategoryScalarFieldEnum | UserCategoryScalarFieldEnum[]
  }

  /**
   * UserCategory create
   */
  export type UserCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCategory.
     */
    data: XOR<UserCategoryCreateInput, UserCategoryUncheckedCreateInput>
  }

  /**
   * UserCategory createMany
   */
  export type UserCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCategories.
     */
    data: UserCategoryCreateManyInput | UserCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCategory createManyAndReturn
   */
  export type UserCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserCategories.
     */
    data: UserCategoryCreateManyInput | UserCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCategory update
   */
  export type UserCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCategory.
     */
    data: XOR<UserCategoryUpdateInput, UserCategoryUncheckedUpdateInput>
    /**
     * Choose, which UserCategory to update.
     */
    where: UserCategoryWhereUniqueInput
  }

  /**
   * UserCategory updateMany
   */
  export type UserCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCategories.
     */
    data: XOR<UserCategoryUpdateManyMutationInput, UserCategoryUncheckedUpdateManyInput>
    /**
     * Filter which UserCategories to update
     */
    where?: UserCategoryWhereInput
  }

  /**
   * UserCategory upsert
   */
  export type UserCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCategory to update in case it exists.
     */
    where: UserCategoryWhereUniqueInput
    /**
     * In case the UserCategory found by the `where` argument doesn't exist, create a new UserCategory with this data.
     */
    create: XOR<UserCategoryCreateInput, UserCategoryUncheckedCreateInput>
    /**
     * In case the UserCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCategoryUpdateInput, UserCategoryUncheckedUpdateInput>
  }

  /**
   * UserCategory delete
   */
  export type UserCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter which UserCategory to delete.
     */
    where: UserCategoryWhereUniqueInput
  }

  /**
   * UserCategory deleteMany
   */
  export type UserCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCategories to delete
     */
    where?: UserCategoryWhereInput
  }

  /**
   * UserCategory.users
   */
  export type UserCategory$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategoryLinkUp
     */
    select?: UserCategoryLinkUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryLinkUpInclude<ExtArgs> | null
    where?: UserCategoryLinkUpWhereInput
    orderBy?: UserCategoryLinkUpOrderByWithRelationInput | UserCategoryLinkUpOrderByWithRelationInput[]
    cursor?: UserCategoryLinkUpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCategoryLinkUpScalarFieldEnum | UserCategoryLinkUpScalarFieldEnum[]
  }

  /**
   * UserCategory.holidays
   */
  export type UserCategory$holidaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    where?: HolidayWhereInput
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    cursor?: HolidayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * UserCategory.leavePolicy
   */
  export type UserCategory$leavePolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    where?: LeavePolicyWhereInput
  }

  /**
   * UserCategory without action
   */
  export type UserCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Holiday
   */

  export type AggregateHoliday = {
    _count: HolidayCountAggregateOutputType | null
    _min: HolidayMinAggregateOutputType | null
    _max: HolidayMaxAggregateOutputType | null
  }

  export type HolidayMinAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    type: $Enums.HolidayType | null
    createdAt: Date | null
  }

  export type HolidayMaxAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    type: $Enums.HolidayType | null
    createdAt: Date | null
  }

  export type HolidayCountAggregateOutputType = {
    id: number
    name: number
    date: number
    type: number
    createdAt: number
    _all: number
  }


  export type HolidayMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    type?: true
    createdAt?: true
  }

  export type HolidayMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    type?: true
    createdAt?: true
  }

  export type HolidayCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type HolidayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holiday to aggregate.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Holidays
    **/
    _count?: true | HolidayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HolidayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HolidayMaxAggregateInputType
  }

  export type GetHolidayAggregateType<T extends HolidayAggregateArgs> = {
        [P in keyof T & keyof AggregateHoliday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoliday[P]>
      : GetScalarType<T[P], AggregateHoliday[P]>
  }




  export type HolidayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HolidayWhereInput
    orderBy?: HolidayOrderByWithAggregationInput | HolidayOrderByWithAggregationInput[]
    by: HolidayScalarFieldEnum[] | HolidayScalarFieldEnum
    having?: HolidayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HolidayCountAggregateInputType | true
    _min?: HolidayMinAggregateInputType
    _max?: HolidayMaxAggregateInputType
  }

  export type HolidayGroupByOutputType = {
    id: string
    name: string
    date: Date
    type: $Enums.HolidayType
    createdAt: Date
    _count: HolidayCountAggregateOutputType | null
    _min: HolidayMinAggregateOutputType | null
    _max: HolidayMaxAggregateOutputType | null
  }

  type GetHolidayGroupByPayload<T extends HolidayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HolidayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HolidayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HolidayGroupByOutputType[P]>
            : GetScalarType<T[P], HolidayGroupByOutputType[P]>
        }
      >
    >


  export type HolidaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    type?: boolean
    createdAt?: boolean
    userCategories?: boolean | Holiday$userCategoriesArgs<ExtArgs>
    userHolidays?: boolean | Holiday$userHolidaysArgs<ExtArgs>
    _count?: boolean | HolidayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holiday"]>

  export type HolidaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["holiday"]>

  export type HolidaySelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type HolidayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCategories?: boolean | Holiday$userCategoriesArgs<ExtArgs>
    userHolidays?: boolean | Holiday$userHolidaysArgs<ExtArgs>
    _count?: boolean | HolidayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HolidayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HolidayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Holiday"
    objects: {
      userCategories: Prisma.$UserCategoryPayload<ExtArgs>[]
      userHolidays: Prisma.$UserHolidayPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      date: Date
      type: $Enums.HolidayType
      createdAt: Date
    }, ExtArgs["result"]["holiday"]>
    composites: {}
  }

  type HolidayGetPayload<S extends boolean | null | undefined | HolidayDefaultArgs> = $Result.GetResult<Prisma.$HolidayPayload, S>

  type HolidayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HolidayFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HolidayCountAggregateInputType | true
    }

  export interface HolidayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Holiday'], meta: { name: 'Holiday' } }
    /**
     * Find zero or one Holiday that matches the filter.
     * @param {HolidayFindUniqueArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HolidayFindUniqueArgs>(args: SelectSubset<T, HolidayFindUniqueArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Holiday that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HolidayFindUniqueOrThrowArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HolidayFindUniqueOrThrowArgs>(args: SelectSubset<T, HolidayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Holiday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindFirstArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HolidayFindFirstArgs>(args?: SelectSubset<T, HolidayFindFirstArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Holiday that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindFirstOrThrowArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HolidayFindFirstOrThrowArgs>(args?: SelectSubset<T, HolidayFindFirstOrThrowArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Holidays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holidays
     * const holidays = await prisma.holiday.findMany()
     * 
     * // Get first 10 Holidays
     * const holidays = await prisma.holiday.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holidayWithIdOnly = await prisma.holiday.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HolidayFindManyArgs>(args?: SelectSubset<T, HolidayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Holiday.
     * @param {HolidayCreateArgs} args - Arguments to create a Holiday.
     * @example
     * // Create one Holiday
     * const Holiday = await prisma.holiday.create({
     *   data: {
     *     // ... data to create a Holiday
     *   }
     * })
     * 
     */
    create<T extends HolidayCreateArgs>(args: SelectSubset<T, HolidayCreateArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Holidays.
     * @param {HolidayCreateManyArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holiday = await prisma.holiday.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HolidayCreateManyArgs>(args?: SelectSubset<T, HolidayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Holidays and returns the data saved in the database.
     * @param {HolidayCreateManyAndReturnArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holiday = await prisma.holiday.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Holidays and only return the `id`
     * const holidayWithIdOnly = await prisma.holiday.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HolidayCreateManyAndReturnArgs>(args?: SelectSubset<T, HolidayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Holiday.
     * @param {HolidayDeleteArgs} args - Arguments to delete one Holiday.
     * @example
     * // Delete one Holiday
     * const Holiday = await prisma.holiday.delete({
     *   where: {
     *     // ... filter to delete one Holiday
     *   }
     * })
     * 
     */
    delete<T extends HolidayDeleteArgs>(args: SelectSubset<T, HolidayDeleteArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Holiday.
     * @param {HolidayUpdateArgs} args - Arguments to update one Holiday.
     * @example
     * // Update one Holiday
     * const holiday = await prisma.holiday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HolidayUpdateArgs>(args: SelectSubset<T, HolidayUpdateArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Holidays.
     * @param {HolidayDeleteManyArgs} args - Arguments to filter Holidays to delete.
     * @example
     * // Delete a few Holidays
     * const { count } = await prisma.holiday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HolidayDeleteManyArgs>(args?: SelectSubset<T, HolidayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holidays
     * const holiday = await prisma.holiday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HolidayUpdateManyArgs>(args: SelectSubset<T, HolidayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Holiday.
     * @param {HolidayUpsertArgs} args - Arguments to update or create a Holiday.
     * @example
     * // Update or create a Holiday
     * const holiday = await prisma.holiday.upsert({
     *   create: {
     *     // ... data to create a Holiday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Holiday we want to update
     *   }
     * })
     */
    upsert<T extends HolidayUpsertArgs>(args: SelectSubset<T, HolidayUpsertArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayCountArgs} args - Arguments to filter Holidays to count.
     * @example
     * // Count the number of Holidays
     * const count = await prisma.holiday.count({
     *   where: {
     *     // ... the filter for the Holidays we want to count
     *   }
     * })
    **/
    count<T extends HolidayCountArgs>(
      args?: Subset<T, HolidayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HolidayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HolidayAggregateArgs>(args: Subset<T, HolidayAggregateArgs>): Prisma.PrismaPromise<GetHolidayAggregateType<T>>

    /**
     * Group by Holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayGroupByArgs} args - Group by arguments.
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
      T extends HolidayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HolidayGroupByArgs['orderBy'] }
        : { orderBy?: HolidayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HolidayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHolidayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Holiday model
   */
  readonly fields: HolidayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Holiday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HolidayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userCategories<T extends Holiday$userCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Holiday$userCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findMany"> | Null>
    userHolidays<T extends Holiday$userHolidaysArgs<ExtArgs> = {}>(args?: Subset<T, Holiday$userHolidaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHolidayPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Holiday model
   */ 
  interface HolidayFieldRefs {
    readonly id: FieldRef<"Holiday", 'String'>
    readonly name: FieldRef<"Holiday", 'String'>
    readonly date: FieldRef<"Holiday", 'DateTime'>
    readonly type: FieldRef<"Holiday", 'HolidayType'>
    readonly createdAt: FieldRef<"Holiday", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Holiday findUnique
   */
  export type HolidayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday findUniqueOrThrow
   */
  export type HolidayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday findFirst
   */
  export type HolidayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holidays.
     */
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday findFirstOrThrow
   */
  export type HolidayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holidays.
     */
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday findMany
   */
  export type HolidayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holidays to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday create
   */
  export type HolidayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * The data needed to create a Holiday.
     */
    data: XOR<HolidayCreateInput, HolidayUncheckedCreateInput>
  }

  /**
   * Holiday createMany
   */
  export type HolidayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Holidays.
     */
    data: HolidayCreateManyInput | HolidayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Holiday createManyAndReturn
   */
  export type HolidayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Holidays.
     */
    data: HolidayCreateManyInput | HolidayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Holiday update
   */
  export type HolidayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * The data needed to update a Holiday.
     */
    data: XOR<HolidayUpdateInput, HolidayUncheckedUpdateInput>
    /**
     * Choose, which Holiday to update.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday updateMany
   */
  export type HolidayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Holidays.
     */
    data: XOR<HolidayUpdateManyMutationInput, HolidayUncheckedUpdateManyInput>
    /**
     * Filter which Holidays to update
     */
    where?: HolidayWhereInput
  }

  /**
   * Holiday upsert
   */
  export type HolidayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * The filter to search for the Holiday to update in case it exists.
     */
    where: HolidayWhereUniqueInput
    /**
     * In case the Holiday found by the `where` argument doesn't exist, create a new Holiday with this data.
     */
    create: XOR<HolidayCreateInput, HolidayUncheckedCreateInput>
    /**
     * In case the Holiday was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HolidayUpdateInput, HolidayUncheckedUpdateInput>
  }

  /**
   * Holiday delete
   */
  export type HolidayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter which Holiday to delete.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday deleteMany
   */
  export type HolidayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holidays to delete
     */
    where?: HolidayWhereInput
  }

  /**
   * Holiday.userCategories
   */
  export type Holiday$userCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    where?: UserCategoryWhereInput
    orderBy?: UserCategoryOrderByWithRelationInput | UserCategoryOrderByWithRelationInput[]
    cursor?: UserCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCategoryScalarFieldEnum | UserCategoryScalarFieldEnum[]
  }

  /**
   * Holiday.userHolidays
   */
  export type Holiday$userHolidaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHoliday
     */
    select?: UserHolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHolidayInclude<ExtArgs> | null
    where?: UserHolidayWhereInput
    orderBy?: UserHolidayOrderByWithRelationInput | UserHolidayOrderByWithRelationInput[]
    cursor?: UserHolidayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserHolidayScalarFieldEnum | UserHolidayScalarFieldEnum[]
  }

  /**
   * Holiday without action
   */
  export type HolidayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
  }


  /**
   * Model LeavePolicy
   */

  export type AggregateLeavePolicy = {
    _count: LeavePolicyCountAggregateOutputType | null
    _avg: LeavePolicyAvgAggregateOutputType | null
    _sum: LeavePolicySumAggregateOutputType | null
    _min: LeavePolicyMinAggregateOutputType | null
    _max: LeavePolicyMaxAggregateOutputType | null
  }

  export type LeavePolicyAvgAggregateOutputType = {
    sickLeaves: Decimal | null
    vacationLeaves: Decimal | null
    parentalLeaves: Decimal | null
    maternityLeaves: Decimal | null
  }

  export type LeavePolicySumAggregateOutputType = {
    sickLeaves: Decimal | null
    vacationLeaves: Decimal | null
    parentalLeaves: Decimal | null
    maternityLeaves: Decimal | null
  }

  export type LeavePolicyMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    sickLeaves: Decimal | null
    vacationLeaves: Decimal | null
    parentalLeaves: Decimal | null
    maternityLeaves: Decimal | null
    createdAt: Date | null
  }

  export type LeavePolicyMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    sickLeaves: Decimal | null
    vacationLeaves: Decimal | null
    parentalLeaves: Decimal | null
    maternityLeaves: Decimal | null
    createdAt: Date | null
  }

  export type LeavePolicyCountAggregateOutputType = {
    id: number
    categoryId: number
    sickLeaves: number
    vacationLeaves: number
    parentalLeaves: number
    maternityLeaves: number
    createdAt: number
    _all: number
  }


  export type LeavePolicyAvgAggregateInputType = {
    sickLeaves?: true
    vacationLeaves?: true
    parentalLeaves?: true
    maternityLeaves?: true
  }

  export type LeavePolicySumAggregateInputType = {
    sickLeaves?: true
    vacationLeaves?: true
    parentalLeaves?: true
    maternityLeaves?: true
  }

  export type LeavePolicyMinAggregateInputType = {
    id?: true
    categoryId?: true
    sickLeaves?: true
    vacationLeaves?: true
    parentalLeaves?: true
    maternityLeaves?: true
    createdAt?: true
  }

  export type LeavePolicyMaxAggregateInputType = {
    id?: true
    categoryId?: true
    sickLeaves?: true
    vacationLeaves?: true
    parentalLeaves?: true
    maternityLeaves?: true
    createdAt?: true
  }

  export type LeavePolicyCountAggregateInputType = {
    id?: true
    categoryId?: true
    sickLeaves?: true
    vacationLeaves?: true
    parentalLeaves?: true
    maternityLeaves?: true
    createdAt?: true
    _all?: true
  }

  export type LeavePolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeavePolicy to aggregate.
     */
    where?: LeavePolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeavePolicies to fetch.
     */
    orderBy?: LeavePolicyOrderByWithRelationInput | LeavePolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeavePolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeavePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeavePolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeavePolicies
    **/
    _count?: true | LeavePolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeavePolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeavePolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeavePolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeavePolicyMaxAggregateInputType
  }

  export type GetLeavePolicyAggregateType<T extends LeavePolicyAggregateArgs> = {
        [P in keyof T & keyof AggregateLeavePolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeavePolicy[P]>
      : GetScalarType<T[P], AggregateLeavePolicy[P]>
  }




  export type LeavePolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeavePolicyWhereInput
    orderBy?: LeavePolicyOrderByWithAggregationInput | LeavePolicyOrderByWithAggregationInput[]
    by: LeavePolicyScalarFieldEnum[] | LeavePolicyScalarFieldEnum
    having?: LeavePolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeavePolicyCountAggregateInputType | true
    _avg?: LeavePolicyAvgAggregateInputType
    _sum?: LeavePolicySumAggregateInputType
    _min?: LeavePolicyMinAggregateInputType
    _max?: LeavePolicyMaxAggregateInputType
  }

  export type LeavePolicyGroupByOutputType = {
    id: string
    categoryId: string
    sickLeaves: Decimal
    vacationLeaves: Decimal
    parentalLeaves: Decimal
    maternityLeaves: Decimal
    createdAt: Date
    _count: LeavePolicyCountAggregateOutputType | null
    _avg: LeavePolicyAvgAggregateOutputType | null
    _sum: LeavePolicySumAggregateOutputType | null
    _min: LeavePolicyMinAggregateOutputType | null
    _max: LeavePolicyMaxAggregateOutputType | null
  }

  type GetLeavePolicyGroupByPayload<T extends LeavePolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeavePolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeavePolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeavePolicyGroupByOutputType[P]>
            : GetScalarType<T[P], LeavePolicyGroupByOutputType[P]>
        }
      >
    >


  export type LeavePolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    sickLeaves?: boolean
    vacationLeaves?: boolean
    parentalLeaves?: boolean
    maternityLeaves?: boolean
    createdAt?: boolean
    category?: boolean | UserCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leavePolicy"]>

  export type LeavePolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    sickLeaves?: boolean
    vacationLeaves?: boolean
    parentalLeaves?: boolean
    maternityLeaves?: boolean
    createdAt?: boolean
    category?: boolean | UserCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leavePolicy"]>

  export type LeavePolicySelectScalar = {
    id?: boolean
    categoryId?: boolean
    sickLeaves?: boolean
    vacationLeaves?: boolean
    parentalLeaves?: boolean
    maternityLeaves?: boolean
    createdAt?: boolean
  }

  export type LeavePolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | UserCategoryDefaultArgs<ExtArgs>
  }
  export type LeavePolicyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | UserCategoryDefaultArgs<ExtArgs>
  }

  export type $LeavePolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeavePolicy"
    objects: {
      category: Prisma.$UserCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryId: string
      sickLeaves: Prisma.Decimal
      vacationLeaves: Prisma.Decimal
      parentalLeaves: Prisma.Decimal
      maternityLeaves: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["leavePolicy"]>
    composites: {}
  }

  type LeavePolicyGetPayload<S extends boolean | null | undefined | LeavePolicyDefaultArgs> = $Result.GetResult<Prisma.$LeavePolicyPayload, S>

  type LeavePolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LeavePolicyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LeavePolicyCountAggregateInputType | true
    }

  export interface LeavePolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeavePolicy'], meta: { name: 'LeavePolicy' } }
    /**
     * Find zero or one LeavePolicy that matches the filter.
     * @param {LeavePolicyFindUniqueArgs} args - Arguments to find a LeavePolicy
     * @example
     * // Get one LeavePolicy
     * const leavePolicy = await prisma.leavePolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeavePolicyFindUniqueArgs>(args: SelectSubset<T, LeavePolicyFindUniqueArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LeavePolicy that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LeavePolicyFindUniqueOrThrowArgs} args - Arguments to find a LeavePolicy
     * @example
     * // Get one LeavePolicy
     * const leavePolicy = await prisma.leavePolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeavePolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, LeavePolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LeavePolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavePolicyFindFirstArgs} args - Arguments to find a LeavePolicy
     * @example
     * // Get one LeavePolicy
     * const leavePolicy = await prisma.leavePolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeavePolicyFindFirstArgs>(args?: SelectSubset<T, LeavePolicyFindFirstArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LeavePolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavePolicyFindFirstOrThrowArgs} args - Arguments to find a LeavePolicy
     * @example
     * // Get one LeavePolicy
     * const leavePolicy = await prisma.leavePolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeavePolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, LeavePolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LeavePolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavePolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeavePolicies
     * const leavePolicies = await prisma.leavePolicy.findMany()
     * 
     * // Get first 10 LeavePolicies
     * const leavePolicies = await prisma.leavePolicy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leavePolicyWithIdOnly = await prisma.leavePolicy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeavePolicyFindManyArgs>(args?: SelectSubset<T, LeavePolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LeavePolicy.
     * @param {LeavePolicyCreateArgs} args - Arguments to create a LeavePolicy.
     * @example
     * // Create one LeavePolicy
     * const LeavePolicy = await prisma.leavePolicy.create({
     *   data: {
     *     // ... data to create a LeavePolicy
     *   }
     * })
     * 
     */
    create<T extends LeavePolicyCreateArgs>(args: SelectSubset<T, LeavePolicyCreateArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LeavePolicies.
     * @param {LeavePolicyCreateManyArgs} args - Arguments to create many LeavePolicies.
     * @example
     * // Create many LeavePolicies
     * const leavePolicy = await prisma.leavePolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeavePolicyCreateManyArgs>(args?: SelectSubset<T, LeavePolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeavePolicies and returns the data saved in the database.
     * @param {LeavePolicyCreateManyAndReturnArgs} args - Arguments to create many LeavePolicies.
     * @example
     * // Create many LeavePolicies
     * const leavePolicy = await prisma.leavePolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeavePolicies and only return the `id`
     * const leavePolicyWithIdOnly = await prisma.leavePolicy.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeavePolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, LeavePolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LeavePolicy.
     * @param {LeavePolicyDeleteArgs} args - Arguments to delete one LeavePolicy.
     * @example
     * // Delete one LeavePolicy
     * const LeavePolicy = await prisma.leavePolicy.delete({
     *   where: {
     *     // ... filter to delete one LeavePolicy
     *   }
     * })
     * 
     */
    delete<T extends LeavePolicyDeleteArgs>(args: SelectSubset<T, LeavePolicyDeleteArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LeavePolicy.
     * @param {LeavePolicyUpdateArgs} args - Arguments to update one LeavePolicy.
     * @example
     * // Update one LeavePolicy
     * const leavePolicy = await prisma.leavePolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeavePolicyUpdateArgs>(args: SelectSubset<T, LeavePolicyUpdateArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LeavePolicies.
     * @param {LeavePolicyDeleteManyArgs} args - Arguments to filter LeavePolicies to delete.
     * @example
     * // Delete a few LeavePolicies
     * const { count } = await prisma.leavePolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeavePolicyDeleteManyArgs>(args?: SelectSubset<T, LeavePolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeavePolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavePolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeavePolicies
     * const leavePolicy = await prisma.leavePolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeavePolicyUpdateManyArgs>(args: SelectSubset<T, LeavePolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LeavePolicy.
     * @param {LeavePolicyUpsertArgs} args - Arguments to update or create a LeavePolicy.
     * @example
     * // Update or create a LeavePolicy
     * const leavePolicy = await prisma.leavePolicy.upsert({
     *   create: {
     *     // ... data to create a LeavePolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeavePolicy we want to update
     *   }
     * })
     */
    upsert<T extends LeavePolicyUpsertArgs>(args: SelectSubset<T, LeavePolicyUpsertArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LeavePolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavePolicyCountArgs} args - Arguments to filter LeavePolicies to count.
     * @example
     * // Count the number of LeavePolicies
     * const count = await prisma.leavePolicy.count({
     *   where: {
     *     // ... the filter for the LeavePolicies we want to count
     *   }
     * })
    **/
    count<T extends LeavePolicyCountArgs>(
      args?: Subset<T, LeavePolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeavePolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeavePolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavePolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeavePolicyAggregateArgs>(args: Subset<T, LeavePolicyAggregateArgs>): Prisma.PrismaPromise<GetLeavePolicyAggregateType<T>>

    /**
     * Group by LeavePolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavePolicyGroupByArgs} args - Group by arguments.
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
      T extends LeavePolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeavePolicyGroupByArgs['orderBy'] }
        : { orderBy?: LeavePolicyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeavePolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeavePolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeavePolicy model
   */
  readonly fields: LeavePolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeavePolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeavePolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends UserCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserCategoryDefaultArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the LeavePolicy model
   */ 
  interface LeavePolicyFieldRefs {
    readonly id: FieldRef<"LeavePolicy", 'String'>
    readonly categoryId: FieldRef<"LeavePolicy", 'String'>
    readonly sickLeaves: FieldRef<"LeavePolicy", 'Decimal'>
    readonly vacationLeaves: FieldRef<"LeavePolicy", 'Decimal'>
    readonly parentalLeaves: FieldRef<"LeavePolicy", 'Decimal'>
    readonly maternityLeaves: FieldRef<"LeavePolicy", 'Decimal'>
    readonly createdAt: FieldRef<"LeavePolicy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeavePolicy findUnique
   */
  export type LeavePolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * Filter, which LeavePolicy to fetch.
     */
    where: LeavePolicyWhereUniqueInput
  }

  /**
   * LeavePolicy findUniqueOrThrow
   */
  export type LeavePolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * Filter, which LeavePolicy to fetch.
     */
    where: LeavePolicyWhereUniqueInput
  }

  /**
   * LeavePolicy findFirst
   */
  export type LeavePolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * Filter, which LeavePolicy to fetch.
     */
    where?: LeavePolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeavePolicies to fetch.
     */
    orderBy?: LeavePolicyOrderByWithRelationInput | LeavePolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeavePolicies.
     */
    cursor?: LeavePolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeavePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeavePolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeavePolicies.
     */
    distinct?: LeavePolicyScalarFieldEnum | LeavePolicyScalarFieldEnum[]
  }

  /**
   * LeavePolicy findFirstOrThrow
   */
  export type LeavePolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * Filter, which LeavePolicy to fetch.
     */
    where?: LeavePolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeavePolicies to fetch.
     */
    orderBy?: LeavePolicyOrderByWithRelationInput | LeavePolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeavePolicies.
     */
    cursor?: LeavePolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeavePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeavePolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeavePolicies.
     */
    distinct?: LeavePolicyScalarFieldEnum | LeavePolicyScalarFieldEnum[]
  }

  /**
   * LeavePolicy findMany
   */
  export type LeavePolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * Filter, which LeavePolicies to fetch.
     */
    where?: LeavePolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeavePolicies to fetch.
     */
    orderBy?: LeavePolicyOrderByWithRelationInput | LeavePolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeavePolicies.
     */
    cursor?: LeavePolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeavePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeavePolicies.
     */
    skip?: number
    distinct?: LeavePolicyScalarFieldEnum | LeavePolicyScalarFieldEnum[]
  }

  /**
   * LeavePolicy create
   */
  export type LeavePolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * The data needed to create a LeavePolicy.
     */
    data: XOR<LeavePolicyCreateInput, LeavePolicyUncheckedCreateInput>
  }

  /**
   * LeavePolicy createMany
   */
  export type LeavePolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeavePolicies.
     */
    data: LeavePolicyCreateManyInput | LeavePolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeavePolicy createManyAndReturn
   */
  export type LeavePolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LeavePolicies.
     */
    data: LeavePolicyCreateManyInput | LeavePolicyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeavePolicy update
   */
  export type LeavePolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * The data needed to update a LeavePolicy.
     */
    data: XOR<LeavePolicyUpdateInput, LeavePolicyUncheckedUpdateInput>
    /**
     * Choose, which LeavePolicy to update.
     */
    where: LeavePolicyWhereUniqueInput
  }

  /**
   * LeavePolicy updateMany
   */
  export type LeavePolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeavePolicies.
     */
    data: XOR<LeavePolicyUpdateManyMutationInput, LeavePolicyUncheckedUpdateManyInput>
    /**
     * Filter which LeavePolicies to update
     */
    where?: LeavePolicyWhereInput
  }

  /**
   * LeavePolicy upsert
   */
  export type LeavePolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * The filter to search for the LeavePolicy to update in case it exists.
     */
    where: LeavePolicyWhereUniqueInput
    /**
     * In case the LeavePolicy found by the `where` argument doesn't exist, create a new LeavePolicy with this data.
     */
    create: XOR<LeavePolicyCreateInput, LeavePolicyUncheckedCreateInput>
    /**
     * In case the LeavePolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeavePolicyUpdateInput, LeavePolicyUncheckedUpdateInput>
  }

  /**
   * LeavePolicy delete
   */
  export type LeavePolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * Filter which LeavePolicy to delete.
     */
    where: LeavePolicyWhereUniqueInput
  }

  /**
   * LeavePolicy deleteMany
   */
  export type LeavePolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeavePolicies to delete
     */
    where?: LeavePolicyWhereInput
  }

  /**
   * LeavePolicy without action
   */
  export type LeavePolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
  }


  /**
   * Model Leave
   */

  export type AggregateLeave = {
    _count: LeaveCountAggregateOutputType | null
    _avg: LeaveAvgAggregateOutputType | null
    _sum: LeaveSumAggregateOutputType | null
    _min: LeaveMinAggregateOutputType | null
    _max: LeaveMaxAggregateOutputType | null
  }

  export type LeaveAvgAggregateOutputType = {
    effectiveDays: Decimal | null
  }

  export type LeaveSumAggregateOutputType = {
    effectiveDays: Decimal | null
  }

  export type LeaveMinAggregateOutputType = {
    id: string | null
    type: $Enums.LeaveType | null
    userId: string | null
    message: string | null
    effectiveDays: Decimal | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.LeaveStatus | null
    createdAt: Date | null
  }

  export type LeaveMaxAggregateOutputType = {
    id: string | null
    type: $Enums.LeaveType | null
    userId: string | null
    message: string | null
    effectiveDays: Decimal | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.LeaveStatus | null
    createdAt: Date | null
  }

  export type LeaveCountAggregateOutputType = {
    id: number
    type: number
    userId: number
    message: number
    effectiveDays: number
    startDate: number
    endDate: number
    status: number
    createdAt: number
    _all: number
  }


  export type LeaveAvgAggregateInputType = {
    effectiveDays?: true
  }

  export type LeaveSumAggregateInputType = {
    effectiveDays?: true
  }

  export type LeaveMinAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    message?: true
    effectiveDays?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
  }

  export type LeaveMaxAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    message?: true
    effectiveDays?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
  }

  export type LeaveCountAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    message?: true
    effectiveDays?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type LeaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leave to aggregate.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leaves
    **/
    _count?: true | LeaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveMaxAggregateInputType
  }

  export type GetLeaveAggregateType<T extends LeaveAggregateArgs> = {
        [P in keyof T & keyof AggregateLeave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeave[P]>
      : GetScalarType<T[P], AggregateLeave[P]>
  }




  export type LeaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithAggregationInput | LeaveOrderByWithAggregationInput[]
    by: LeaveScalarFieldEnum[] | LeaveScalarFieldEnum
    having?: LeaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveCountAggregateInputType | true
    _avg?: LeaveAvgAggregateInputType
    _sum?: LeaveSumAggregateInputType
    _min?: LeaveMinAggregateInputType
    _max?: LeaveMaxAggregateInputType
  }

  export type LeaveGroupByOutputType = {
    id: string
    type: $Enums.LeaveType
    userId: string
    message: string | null
    effectiveDays: Decimal | null
    startDate: Date
    endDate: Date
    status: $Enums.LeaveStatus
    createdAt: Date
    _count: LeaveCountAggregateOutputType | null
    _avg: LeaveAvgAggregateOutputType | null
    _sum: LeaveSumAggregateOutputType | null
    _min: LeaveMinAggregateOutputType | null
    _max: LeaveMaxAggregateOutputType | null
  }

  type GetLeaveGroupByPayload<T extends LeaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveGroupByOutputType[P]>
        }
      >
    >


  export type LeaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    message?: boolean
    effectiveDays?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["leave"]>

  export type LeaveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    message?: boolean
    effectiveDays?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["leave"]>

  export type LeaveSelectScalar = {
    id?: boolean
    type?: boolean
    userId?: boolean
    message?: boolean
    effectiveDays?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
  }


  export type $LeavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leave"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.LeaveType
      userId: string
      message: string | null
      effectiveDays: Prisma.Decimal | null
      startDate: Date
      endDate: Date
      status: $Enums.LeaveStatus
      createdAt: Date
    }, ExtArgs["result"]["leave"]>
    composites: {}
  }

  type LeaveGetPayload<S extends boolean | null | undefined | LeaveDefaultArgs> = $Result.GetResult<Prisma.$LeavePayload, S>

  type LeaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LeaveFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LeaveCountAggregateInputType | true
    }

  export interface LeaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leave'], meta: { name: 'Leave' } }
    /**
     * Find zero or one Leave that matches the filter.
     * @param {LeaveFindUniqueArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveFindUniqueArgs>(args: SelectSubset<T, LeaveFindUniqueArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Leave that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LeaveFindUniqueOrThrowArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Leave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindFirstArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveFindFirstArgs>(args?: SelectSubset<T, LeaveFindFirstArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Leave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindFirstOrThrowArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Leaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leaves
     * const leaves = await prisma.leave.findMany()
     * 
     * // Get first 10 Leaves
     * const leaves = await prisma.leave.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveWithIdOnly = await prisma.leave.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveFindManyArgs>(args?: SelectSubset<T, LeaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Leave.
     * @param {LeaveCreateArgs} args - Arguments to create a Leave.
     * @example
     * // Create one Leave
     * const Leave = await prisma.leave.create({
     *   data: {
     *     // ... data to create a Leave
     *   }
     * })
     * 
     */
    create<T extends LeaveCreateArgs>(args: SelectSubset<T, LeaveCreateArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Leaves.
     * @param {LeaveCreateManyArgs} args - Arguments to create many Leaves.
     * @example
     * // Create many Leaves
     * const leave = await prisma.leave.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveCreateManyArgs>(args?: SelectSubset<T, LeaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leaves and returns the data saved in the database.
     * @param {LeaveCreateManyAndReturnArgs} args - Arguments to create many Leaves.
     * @example
     * // Create many Leaves
     * const leave = await prisma.leave.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leaves and only return the `id`
     * const leaveWithIdOnly = await prisma.leave.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Leave.
     * @param {LeaveDeleteArgs} args - Arguments to delete one Leave.
     * @example
     * // Delete one Leave
     * const Leave = await prisma.leave.delete({
     *   where: {
     *     // ... filter to delete one Leave
     *   }
     * })
     * 
     */
    delete<T extends LeaveDeleteArgs>(args: SelectSubset<T, LeaveDeleteArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Leave.
     * @param {LeaveUpdateArgs} args - Arguments to update one Leave.
     * @example
     * // Update one Leave
     * const leave = await prisma.leave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveUpdateArgs>(args: SelectSubset<T, LeaveUpdateArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Leaves.
     * @param {LeaveDeleteManyArgs} args - Arguments to filter Leaves to delete.
     * @example
     * // Delete a few Leaves
     * const { count } = await prisma.leave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveDeleteManyArgs>(args?: SelectSubset<T, LeaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leaves
     * const leave = await prisma.leave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveUpdateManyArgs>(args: SelectSubset<T, LeaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Leave.
     * @param {LeaveUpsertArgs} args - Arguments to update or create a Leave.
     * @example
     * // Update or create a Leave
     * const leave = await prisma.leave.upsert({
     *   create: {
     *     // ... data to create a Leave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leave we want to update
     *   }
     * })
     */
    upsert<T extends LeaveUpsertArgs>(args: SelectSubset<T, LeaveUpsertArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveCountArgs} args - Arguments to filter Leaves to count.
     * @example
     * // Count the number of Leaves
     * const count = await prisma.leave.count({
     *   where: {
     *     // ... the filter for the Leaves we want to count
     *   }
     * })
    **/
    count<T extends LeaveCountArgs>(
      args?: Subset<T, LeaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaveAggregateArgs>(args: Subset<T, LeaveAggregateArgs>): Prisma.PrismaPromise<GetLeaveAggregateType<T>>

    /**
     * Group by Leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveGroupByArgs} args - Group by arguments.
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
      T extends LeaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveGroupByArgs['orderBy'] }
        : { orderBy?: LeaveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leave model
   */
  readonly fields: LeaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Leave model
   */ 
  interface LeaveFieldRefs {
    readonly id: FieldRef<"Leave", 'String'>
    readonly type: FieldRef<"Leave", 'LeaveType'>
    readonly userId: FieldRef<"Leave", 'String'>
    readonly message: FieldRef<"Leave", 'String'>
    readonly effectiveDays: FieldRef<"Leave", 'Decimal'>
    readonly startDate: FieldRef<"Leave", 'DateTime'>
    readonly endDate: FieldRef<"Leave", 'DateTime'>
    readonly status: FieldRef<"Leave", 'LeaveStatus'>
    readonly createdAt: FieldRef<"Leave", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Leave findUnique
   */
  export type LeaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave findUniqueOrThrow
   */
  export type LeaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave findFirst
   */
  export type LeaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaves.
     */
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave findFirstOrThrow
   */
  export type LeaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaves.
     */
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave findMany
   */
  export type LeaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Filter, which Leaves to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave create
   */
  export type LeaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * The data needed to create a Leave.
     */
    data: XOR<LeaveCreateInput, LeaveUncheckedCreateInput>
  }

  /**
   * Leave createMany
   */
  export type LeaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leaves.
     */
    data: LeaveCreateManyInput | LeaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leave createManyAndReturn
   */
  export type LeaveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Leaves.
     */
    data: LeaveCreateManyInput | LeaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leave update
   */
  export type LeaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * The data needed to update a Leave.
     */
    data: XOR<LeaveUpdateInput, LeaveUncheckedUpdateInput>
    /**
     * Choose, which Leave to update.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave updateMany
   */
  export type LeaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leaves.
     */
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyInput>
    /**
     * Filter which Leaves to update
     */
    where?: LeaveWhereInput
  }

  /**
   * Leave upsert
   */
  export type LeaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * The filter to search for the Leave to update in case it exists.
     */
    where: LeaveWhereUniqueInput
    /**
     * In case the Leave found by the `where` argument doesn't exist, create a new Leave with this data.
     */
    create: XOR<LeaveCreateInput, LeaveUncheckedCreateInput>
    /**
     * In case the Leave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveUpdateInput, LeaveUncheckedUpdateInput>
  }

  /**
   * Leave delete
   */
  export type LeaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Filter which Leave to delete.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave deleteMany
   */
  export type LeaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaves to delete
     */
    where?: LeaveWhereInput
  }

  /**
   * Leave without action
   */
  export type LeaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
  }


  /**
   * Model UserSchedule
   */

  export type AggregateUserSchedule = {
    _count: UserScheduleCountAggregateOutputType | null
    _min: UserScheduleMinAggregateOutputType | null
    _max: UserScheduleMaxAggregateOutputType | null
  }

  export type UserScheduleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    workingDay: string | null
    startTime: string | null
    endTime: string | null
    createdAt: Date | null
  }

  export type UserScheduleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    workingDay: string | null
    startTime: string | null
    endTime: string | null
    createdAt: Date | null
  }

  export type UserScheduleCountAggregateOutputType = {
    id: number
    userId: number
    workingDay: number
    startTime: number
    endTime: number
    createdAt: number
    _all: number
  }


  export type UserScheduleMinAggregateInputType = {
    id?: true
    userId?: true
    workingDay?: true
    startTime?: true
    endTime?: true
    createdAt?: true
  }

  export type UserScheduleMaxAggregateInputType = {
    id?: true
    userId?: true
    workingDay?: true
    startTime?: true
    endTime?: true
    createdAt?: true
  }

  export type UserScheduleCountAggregateInputType = {
    id?: true
    userId?: true
    workingDay?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    _all?: true
  }

  export type UserScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSchedule to aggregate.
     */
    where?: UserScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSchedules to fetch.
     */
    orderBy?: UserScheduleOrderByWithRelationInput | UserScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSchedules
    **/
    _count?: true | UserScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserScheduleMaxAggregateInputType
  }

  export type GetUserScheduleAggregateType<T extends UserScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSchedule[P]>
      : GetScalarType<T[P], AggregateUserSchedule[P]>
  }




  export type UserScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserScheduleWhereInput
    orderBy?: UserScheduleOrderByWithAggregationInput | UserScheduleOrderByWithAggregationInput[]
    by: UserScheduleScalarFieldEnum[] | UserScheduleScalarFieldEnum
    having?: UserScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserScheduleCountAggregateInputType | true
    _min?: UserScheduleMinAggregateInputType
    _max?: UserScheduleMaxAggregateInputType
  }

  export type UserScheduleGroupByOutputType = {
    id: string
    userId: string
    workingDay: string
    startTime: string
    endTime: string
    createdAt: Date
    _count: UserScheduleCountAggregateOutputType | null
    _min: UserScheduleMinAggregateOutputType | null
    _max: UserScheduleMaxAggregateOutputType | null
  }

  type GetUserScheduleGroupByPayload<T extends UserScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], UserScheduleGroupByOutputType[P]>
        }
      >
    >


  export type UserScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workingDay?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userSchedule"]>

  export type UserScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workingDay?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userSchedule"]>

  export type UserScheduleSelectScalar = {
    id?: boolean
    userId?: boolean
    workingDay?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
  }


  export type $UserSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSchedule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      workingDay: string
      startTime: string
      endTime: string
      createdAt: Date
    }, ExtArgs["result"]["userSchedule"]>
    composites: {}
  }

  type UserScheduleGetPayload<S extends boolean | null | undefined | UserScheduleDefaultArgs> = $Result.GetResult<Prisma.$UserSchedulePayload, S>

  type UserScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserScheduleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserScheduleCountAggregateInputType | true
    }

  export interface UserScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSchedule'], meta: { name: 'UserSchedule' } }
    /**
     * Find zero or one UserSchedule that matches the filter.
     * @param {UserScheduleFindUniqueArgs} args - Arguments to find a UserSchedule
     * @example
     * // Get one UserSchedule
     * const userSchedule = await prisma.userSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserScheduleFindUniqueArgs>(args: SelectSubset<T, UserScheduleFindUniqueArgs<ExtArgs>>): Prisma__UserScheduleClient<$Result.GetResult<Prisma.$UserSchedulePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserSchedule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserScheduleFindUniqueOrThrowArgs} args - Arguments to find a UserSchedule
     * @example
     * // Get one UserSchedule
     * const userSchedule = await prisma.userSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserScheduleClient<$Result.GetResult<Prisma.$UserSchedulePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserScheduleFindFirstArgs} args - Arguments to find a UserSchedule
     * @example
     * // Get one UserSchedule
     * const userSchedule = await prisma.userSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserScheduleFindFirstArgs>(args?: SelectSubset<T, UserScheduleFindFirstArgs<ExtArgs>>): Prisma__UserScheduleClient<$Result.GetResult<Prisma.$UserSchedulePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserScheduleFindFirstOrThrowArgs} args - Arguments to find a UserSchedule
     * @example
     * // Get one UserSchedule
     * const userSchedule = await prisma.userSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserScheduleClient<$Result.GetResult<Prisma.$UserSchedulePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSchedules
     * const userSchedules = await prisma.userSchedule.findMany()
     * 
     * // Get first 10 UserSchedules
     * const userSchedules = await prisma.userSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userScheduleWithIdOnly = await prisma.userSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserScheduleFindManyArgs>(args?: SelectSubset<T, UserScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSchedulePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserSchedule.
     * @param {UserScheduleCreateArgs} args - Arguments to create a UserSchedule.
     * @example
     * // Create one UserSchedule
     * const UserSchedule = await prisma.userSchedule.create({
     *   data: {
     *     // ... data to create a UserSchedule
     *   }
     * })
     * 
     */
    create<T extends UserScheduleCreateArgs>(args: SelectSubset<T, UserScheduleCreateArgs<ExtArgs>>): Prisma__UserScheduleClient<$Result.GetResult<Prisma.$UserSchedulePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserSchedules.
     * @param {UserScheduleCreateManyArgs} args - Arguments to create many UserSchedules.
     * @example
     * // Create many UserSchedules
     * const userSchedule = await prisma.userSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserScheduleCreateManyArgs>(args?: SelectSubset<T, UserScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSchedules and returns the data saved in the database.
     * @param {UserScheduleCreateManyAndReturnArgs} args - Arguments to create many UserSchedules.
     * @example
     * // Create many UserSchedules
     * const userSchedule = await prisma.userSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSchedules and only return the `id`
     * const userScheduleWithIdOnly = await prisma.userSchedule.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSchedulePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserSchedule.
     * @param {UserScheduleDeleteArgs} args - Arguments to delete one UserSchedule.
     * @example
     * // Delete one UserSchedule
     * const UserSchedule = await prisma.userSchedule.delete({
     *   where: {
     *     // ... filter to delete one UserSchedule
     *   }
     * })
     * 
     */
    delete<T extends UserScheduleDeleteArgs>(args: SelectSubset<T, UserScheduleDeleteArgs<ExtArgs>>): Prisma__UserScheduleClient<$Result.GetResult<Prisma.$UserSchedulePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserSchedule.
     * @param {UserScheduleUpdateArgs} args - Arguments to update one UserSchedule.
     * @example
     * // Update one UserSchedule
     * const userSchedule = await prisma.userSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserScheduleUpdateArgs>(args: SelectSubset<T, UserScheduleUpdateArgs<ExtArgs>>): Prisma__UserScheduleClient<$Result.GetResult<Prisma.$UserSchedulePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserSchedules.
     * @param {UserScheduleDeleteManyArgs} args - Arguments to filter UserSchedules to delete.
     * @example
     * // Delete a few UserSchedules
     * const { count } = await prisma.userSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserScheduleDeleteManyArgs>(args?: SelectSubset<T, UserScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSchedules
     * const userSchedule = await prisma.userSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserScheduleUpdateManyArgs>(args: SelectSubset<T, UserScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSchedule.
     * @param {UserScheduleUpsertArgs} args - Arguments to update or create a UserSchedule.
     * @example
     * // Update or create a UserSchedule
     * const userSchedule = await prisma.userSchedule.upsert({
     *   create: {
     *     // ... data to create a UserSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSchedule we want to update
     *   }
     * })
     */
    upsert<T extends UserScheduleUpsertArgs>(args: SelectSubset<T, UserScheduleUpsertArgs<ExtArgs>>): Prisma__UserScheduleClient<$Result.GetResult<Prisma.$UserSchedulePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserScheduleCountArgs} args - Arguments to filter UserSchedules to count.
     * @example
     * // Count the number of UserSchedules
     * const count = await prisma.userSchedule.count({
     *   where: {
     *     // ... the filter for the UserSchedules we want to count
     *   }
     * })
    **/
    count<T extends UserScheduleCountArgs>(
      args?: Subset<T, UserScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserScheduleAggregateArgs>(args: Subset<T, UserScheduleAggregateArgs>): Prisma.PrismaPromise<GetUserScheduleAggregateType<T>>

    /**
     * Group by UserSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserScheduleGroupByArgs} args - Group by arguments.
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
      T extends UserScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserScheduleGroupByArgs['orderBy'] }
        : { orderBy?: UserScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSchedule model
   */
  readonly fields: UserScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserSchedule model
   */ 
  interface UserScheduleFieldRefs {
    readonly id: FieldRef<"UserSchedule", 'String'>
    readonly userId: FieldRef<"UserSchedule", 'String'>
    readonly workingDay: FieldRef<"UserSchedule", 'String'>
    readonly startTime: FieldRef<"UserSchedule", 'String'>
    readonly endTime: FieldRef<"UserSchedule", 'String'>
    readonly createdAt: FieldRef<"UserSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSchedule findUnique
   */
  export type UserScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchedule
     */
    select?: UserScheduleSelect<ExtArgs> | null
    /**
     * Filter, which UserSchedule to fetch.
     */
    where: UserScheduleWhereUniqueInput
  }

  /**
   * UserSchedule findUniqueOrThrow
   */
  export type UserScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchedule
     */
    select?: UserScheduleSelect<ExtArgs> | null
    /**
     * Filter, which UserSchedule to fetch.
     */
    where: UserScheduleWhereUniqueInput
  }

  /**
   * UserSchedule findFirst
   */
  export type UserScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchedule
     */
    select?: UserScheduleSelect<ExtArgs> | null
    /**
     * Filter, which UserSchedule to fetch.
     */
    where?: UserScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSchedules to fetch.
     */
    orderBy?: UserScheduleOrderByWithRelationInput | UserScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSchedules.
     */
    cursor?: UserScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSchedules.
     */
    distinct?: UserScheduleScalarFieldEnum | UserScheduleScalarFieldEnum[]
  }

  /**
   * UserSchedule findFirstOrThrow
   */
  export type UserScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchedule
     */
    select?: UserScheduleSelect<ExtArgs> | null
    /**
     * Filter, which UserSchedule to fetch.
     */
    where?: UserScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSchedules to fetch.
     */
    orderBy?: UserScheduleOrderByWithRelationInput | UserScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSchedules.
     */
    cursor?: UserScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSchedules.
     */
    distinct?: UserScheduleScalarFieldEnum | UserScheduleScalarFieldEnum[]
  }

  /**
   * UserSchedule findMany
   */
  export type UserScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchedule
     */
    select?: UserScheduleSelect<ExtArgs> | null
    /**
     * Filter, which UserSchedules to fetch.
     */
    where?: UserScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSchedules to fetch.
     */
    orderBy?: UserScheduleOrderByWithRelationInput | UserScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSchedules.
     */
    cursor?: UserScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSchedules.
     */
    skip?: number
    distinct?: UserScheduleScalarFieldEnum | UserScheduleScalarFieldEnum[]
  }

  /**
   * UserSchedule create
   */
  export type UserScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchedule
     */
    select?: UserScheduleSelect<ExtArgs> | null
    /**
     * The data needed to create a UserSchedule.
     */
    data: XOR<UserScheduleCreateInput, UserScheduleUncheckedCreateInput>
  }

  /**
   * UserSchedule createMany
   */
  export type UserScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSchedules.
     */
    data: UserScheduleCreateManyInput | UserScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSchedule createManyAndReturn
   */
  export type UserScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchedule
     */
    select?: UserScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserSchedules.
     */
    data: UserScheduleCreateManyInput | UserScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSchedule update
   */
  export type UserScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchedule
     */
    select?: UserScheduleSelect<ExtArgs> | null
    /**
     * The data needed to update a UserSchedule.
     */
    data: XOR<UserScheduleUpdateInput, UserScheduleUncheckedUpdateInput>
    /**
     * Choose, which UserSchedule to update.
     */
    where: UserScheduleWhereUniqueInput
  }

  /**
   * UserSchedule updateMany
   */
  export type UserScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSchedules.
     */
    data: XOR<UserScheduleUpdateManyMutationInput, UserScheduleUncheckedUpdateManyInput>
    /**
     * Filter which UserSchedules to update
     */
    where?: UserScheduleWhereInput
  }

  /**
   * UserSchedule upsert
   */
  export type UserScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchedule
     */
    select?: UserScheduleSelect<ExtArgs> | null
    /**
     * The filter to search for the UserSchedule to update in case it exists.
     */
    where: UserScheduleWhereUniqueInput
    /**
     * In case the UserSchedule found by the `where` argument doesn't exist, create a new UserSchedule with this data.
     */
    create: XOR<UserScheduleCreateInput, UserScheduleUncheckedCreateInput>
    /**
     * In case the UserSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserScheduleUpdateInput, UserScheduleUncheckedUpdateInput>
  }

  /**
   * UserSchedule delete
   */
  export type UserScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchedule
     */
    select?: UserScheduleSelect<ExtArgs> | null
    /**
     * Filter which UserSchedule to delete.
     */
    where: UserScheduleWhereUniqueInput
  }

  /**
   * UserSchedule deleteMany
   */
  export type UserScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSchedules to delete
     */
    where?: UserScheduleWhereInput
  }

  /**
   * UserSchedule without action
   */
  export type UserScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchedule
     */
    select?: UserScheduleSelect<ExtArgs> | null
  }


  /**
   * Model TimeEntry
   */

  export type AggregateTimeEntry = {
    _count: TimeEntryCountAggregateOutputType | null
    _min: TimeEntryMinAggregateOutputType | null
    _max: TimeEntryMaxAggregateOutputType | null
  }

  export type TimeEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    loginTime: Date | null
    logoutTime: Date | null
    createdAt: Date | null
  }

  export type TimeEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    loginTime: Date | null
    logoutTime: Date | null
    createdAt: Date | null
  }

  export type TimeEntryCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    loginTime: number
    logoutTime: number
    createdAt: number
    _all: number
  }


  export type TimeEntryMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    loginTime?: true
    logoutTime?: true
    createdAt?: true
  }

  export type TimeEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    loginTime?: true
    logoutTime?: true
    createdAt?: true
  }

  export type TimeEntryCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    loginTime?: true
    logoutTime?: true
    createdAt?: true
    _all?: true
  }

  export type TimeEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeEntry to aggregate.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeEntries
    **/
    _count?: true | TimeEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeEntryMaxAggregateInputType
  }

  export type GetTimeEntryAggregateType<T extends TimeEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeEntry[P]>
      : GetScalarType<T[P], AggregateTimeEntry[P]>
  }




  export type TimeEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeEntryWhereInput
    orderBy?: TimeEntryOrderByWithAggregationInput | TimeEntryOrderByWithAggregationInput[]
    by: TimeEntryScalarFieldEnum[] | TimeEntryScalarFieldEnum
    having?: TimeEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeEntryCountAggregateInputType | true
    _min?: TimeEntryMinAggregateInputType
    _max?: TimeEntryMaxAggregateInputType
  }

  export type TimeEntryGroupByOutputType = {
    id: string
    userId: string
    date: Date
    loginTime: Date | null
    logoutTime: Date | null
    createdAt: Date
    _count: TimeEntryCountAggregateOutputType | null
    _min: TimeEntryMinAggregateOutputType | null
    _max: TimeEntryMaxAggregateOutputType | null
  }

  type GetTimeEntryGroupByPayload<T extends TimeEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeEntryGroupByOutputType[P]>
            : GetScalarType<T[P], TimeEntryGroupByOutputType[P]>
        }
      >
    >


  export type TimeEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    loginTime?: boolean
    logoutTime?: boolean
    createdAt?: boolean
    breaks?: boolean | TimeEntry$breaksArgs<ExtArgs>
    _count?: boolean | TimeEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeEntry"]>

  export type TimeEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    loginTime?: boolean
    logoutTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["timeEntry"]>

  export type TimeEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    loginTime?: boolean
    logoutTime?: boolean
    createdAt?: boolean
  }

  export type TimeEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    breaks?: boolean | TimeEntry$breaksArgs<ExtArgs>
    _count?: boolean | TimeEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TimeEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TimeEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeEntry"
    objects: {
      breaks: Prisma.$BreakPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      loginTime: Date | null
      logoutTime: Date | null
      createdAt: Date
    }, ExtArgs["result"]["timeEntry"]>
    composites: {}
  }

  type TimeEntryGetPayload<S extends boolean | null | undefined | TimeEntryDefaultArgs> = $Result.GetResult<Prisma.$TimeEntryPayload, S>

  type TimeEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimeEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimeEntryCountAggregateInputType | true
    }

  export interface TimeEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeEntry'], meta: { name: 'TimeEntry' } }
    /**
     * Find zero or one TimeEntry that matches the filter.
     * @param {TimeEntryFindUniqueArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeEntryFindUniqueArgs>(args: SelectSubset<T, TimeEntryFindUniqueArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TimeEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimeEntryFindUniqueOrThrowArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TimeEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryFindFirstArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeEntryFindFirstArgs>(args?: SelectSubset<T, TimeEntryFindFirstArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TimeEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryFindFirstOrThrowArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TimeEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeEntries
     * const timeEntries = await prisma.timeEntry.findMany()
     * 
     * // Get first 10 TimeEntries
     * const timeEntries = await prisma.timeEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeEntryWithIdOnly = await prisma.timeEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeEntryFindManyArgs>(args?: SelectSubset<T, TimeEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TimeEntry.
     * @param {TimeEntryCreateArgs} args - Arguments to create a TimeEntry.
     * @example
     * // Create one TimeEntry
     * const TimeEntry = await prisma.timeEntry.create({
     *   data: {
     *     // ... data to create a TimeEntry
     *   }
     * })
     * 
     */
    create<T extends TimeEntryCreateArgs>(args: SelectSubset<T, TimeEntryCreateArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TimeEntries.
     * @param {TimeEntryCreateManyArgs} args - Arguments to create many TimeEntries.
     * @example
     * // Create many TimeEntries
     * const timeEntry = await prisma.timeEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeEntryCreateManyArgs>(args?: SelectSubset<T, TimeEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeEntries and returns the data saved in the database.
     * @param {TimeEntryCreateManyAndReturnArgs} args - Arguments to create many TimeEntries.
     * @example
     * // Create many TimeEntries
     * const timeEntry = await prisma.timeEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeEntries and only return the `id`
     * const timeEntryWithIdOnly = await prisma.timeEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TimeEntry.
     * @param {TimeEntryDeleteArgs} args - Arguments to delete one TimeEntry.
     * @example
     * // Delete one TimeEntry
     * const TimeEntry = await prisma.timeEntry.delete({
     *   where: {
     *     // ... filter to delete one TimeEntry
     *   }
     * })
     * 
     */
    delete<T extends TimeEntryDeleteArgs>(args: SelectSubset<T, TimeEntryDeleteArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TimeEntry.
     * @param {TimeEntryUpdateArgs} args - Arguments to update one TimeEntry.
     * @example
     * // Update one TimeEntry
     * const timeEntry = await prisma.timeEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeEntryUpdateArgs>(args: SelectSubset<T, TimeEntryUpdateArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TimeEntries.
     * @param {TimeEntryDeleteManyArgs} args - Arguments to filter TimeEntries to delete.
     * @example
     * // Delete a few TimeEntries
     * const { count } = await prisma.timeEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeEntryDeleteManyArgs>(args?: SelectSubset<T, TimeEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeEntries
     * const timeEntry = await prisma.timeEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeEntryUpdateManyArgs>(args: SelectSubset<T, TimeEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimeEntry.
     * @param {TimeEntryUpsertArgs} args - Arguments to update or create a TimeEntry.
     * @example
     * // Update or create a TimeEntry
     * const timeEntry = await prisma.timeEntry.upsert({
     *   create: {
     *     // ... data to create a TimeEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeEntry we want to update
     *   }
     * })
     */
    upsert<T extends TimeEntryUpsertArgs>(args: SelectSubset<T, TimeEntryUpsertArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TimeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryCountArgs} args - Arguments to filter TimeEntries to count.
     * @example
     * // Count the number of TimeEntries
     * const count = await prisma.timeEntry.count({
     *   where: {
     *     // ... the filter for the TimeEntries we want to count
     *   }
     * })
    **/
    count<T extends TimeEntryCountArgs>(
      args?: Subset<T, TimeEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeEntryAggregateArgs>(args: Subset<T, TimeEntryAggregateArgs>): Prisma.PrismaPromise<GetTimeEntryAggregateType<T>>

    /**
     * Group by TimeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryGroupByArgs} args - Group by arguments.
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
      T extends TimeEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeEntryGroupByArgs['orderBy'] }
        : { orderBy?: TimeEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimeEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeEntry model
   */
  readonly fields: TimeEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    breaks<T extends TimeEntry$breaksArgs<ExtArgs> = {}>(args?: Subset<T, TimeEntry$breaksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the TimeEntry model
   */ 
  interface TimeEntryFieldRefs {
    readonly id: FieldRef<"TimeEntry", 'String'>
    readonly userId: FieldRef<"TimeEntry", 'String'>
    readonly date: FieldRef<"TimeEntry", 'DateTime'>
    readonly loginTime: FieldRef<"TimeEntry", 'DateTime'>
    readonly logoutTime: FieldRef<"TimeEntry", 'DateTime'>
    readonly createdAt: FieldRef<"TimeEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TimeEntry findUnique
   */
  export type TimeEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry findUniqueOrThrow
   */
  export type TimeEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry findFirst
   */
  export type TimeEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeEntries.
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeEntries.
     */
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * TimeEntry findFirstOrThrow
   */
  export type TimeEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeEntries.
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeEntries.
     */
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * TimeEntry findMany
   */
  export type TimeEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntries to fetch.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeEntries.
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * TimeEntry create
   */
  export type TimeEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeEntry.
     */
    data: XOR<TimeEntryCreateInput, TimeEntryUncheckedCreateInput>
  }

  /**
   * TimeEntry createMany
   */
  export type TimeEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeEntries.
     */
    data: TimeEntryCreateManyInput | TimeEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeEntry createManyAndReturn
   */
  export type TimeEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TimeEntries.
     */
    data: TimeEntryCreateManyInput | TimeEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeEntry update
   */
  export type TimeEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeEntry.
     */
    data: XOR<TimeEntryUpdateInput, TimeEntryUncheckedUpdateInput>
    /**
     * Choose, which TimeEntry to update.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry updateMany
   */
  export type TimeEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeEntries.
     */
    data: XOR<TimeEntryUpdateManyMutationInput, TimeEntryUncheckedUpdateManyInput>
    /**
     * Filter which TimeEntries to update
     */
    where?: TimeEntryWhereInput
  }

  /**
   * TimeEntry upsert
   */
  export type TimeEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeEntry to update in case it exists.
     */
    where: TimeEntryWhereUniqueInput
    /**
     * In case the TimeEntry found by the `where` argument doesn't exist, create a new TimeEntry with this data.
     */
    create: XOR<TimeEntryCreateInput, TimeEntryUncheckedCreateInput>
    /**
     * In case the TimeEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeEntryUpdateInput, TimeEntryUncheckedUpdateInput>
  }

  /**
   * TimeEntry delete
   */
  export type TimeEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter which TimeEntry to delete.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry deleteMany
   */
  export type TimeEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeEntries to delete
     */
    where?: TimeEntryWhereInput
  }

  /**
   * TimeEntry.breaks
   */
  export type TimeEntry$breaksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    where?: BreakWhereInput
    orderBy?: BreakOrderByWithRelationInput | BreakOrderByWithRelationInput[]
    cursor?: BreakWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BreakScalarFieldEnum | BreakScalarFieldEnum[]
  }

  /**
   * TimeEntry without action
   */
  export type TimeEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
  }


  /**
   * Model Break
   */

  export type AggregateBreak = {
    _count: BreakCountAggregateOutputType | null
    _min: BreakMinAggregateOutputType | null
    _max: BreakMaxAggregateOutputType | null
  }

  export type BreakMinAggregateOutputType = {
    id: string | null
    timeEntryId: string | null
    breakStart: Date | null
    breakEnd: Date | null
  }

  export type BreakMaxAggregateOutputType = {
    id: string | null
    timeEntryId: string | null
    breakStart: Date | null
    breakEnd: Date | null
  }

  export type BreakCountAggregateOutputType = {
    id: number
    timeEntryId: number
    breakStart: number
    breakEnd: number
    _all: number
  }


  export type BreakMinAggregateInputType = {
    id?: true
    timeEntryId?: true
    breakStart?: true
    breakEnd?: true
  }

  export type BreakMaxAggregateInputType = {
    id?: true
    timeEntryId?: true
    breakStart?: true
    breakEnd?: true
  }

  export type BreakCountAggregateInputType = {
    id?: true
    timeEntryId?: true
    breakStart?: true
    breakEnd?: true
    _all?: true
  }

  export type BreakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Break to aggregate.
     */
    where?: BreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breaks to fetch.
     */
    orderBy?: BreakOrderByWithRelationInput | BreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Breaks
    **/
    _count?: true | BreakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BreakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BreakMaxAggregateInputType
  }

  export type GetBreakAggregateType<T extends BreakAggregateArgs> = {
        [P in keyof T & keyof AggregateBreak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBreak[P]>
      : GetScalarType<T[P], AggregateBreak[P]>
  }




  export type BreakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreakWhereInput
    orderBy?: BreakOrderByWithAggregationInput | BreakOrderByWithAggregationInput[]
    by: BreakScalarFieldEnum[] | BreakScalarFieldEnum
    having?: BreakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BreakCountAggregateInputType | true
    _min?: BreakMinAggregateInputType
    _max?: BreakMaxAggregateInputType
  }

  export type BreakGroupByOutputType = {
    id: string
    timeEntryId: string
    breakStart: Date
    breakEnd: Date | null
    _count: BreakCountAggregateOutputType | null
    _min: BreakMinAggregateOutputType | null
    _max: BreakMaxAggregateOutputType | null
  }

  type GetBreakGroupByPayload<T extends BreakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BreakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BreakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BreakGroupByOutputType[P]>
            : GetScalarType<T[P], BreakGroupByOutputType[P]>
        }
      >
    >


  export type BreakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timeEntryId?: boolean
    breakStart?: boolean
    breakEnd?: boolean
    timeEntry?: boolean | TimeEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["break"]>

  export type BreakSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timeEntryId?: boolean
    breakStart?: boolean
    breakEnd?: boolean
    timeEntry?: boolean | TimeEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["break"]>

  export type BreakSelectScalar = {
    id?: boolean
    timeEntryId?: boolean
    breakStart?: boolean
    breakEnd?: boolean
  }

  export type BreakInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeEntry?: boolean | TimeEntryDefaultArgs<ExtArgs>
  }
  export type BreakIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeEntry?: boolean | TimeEntryDefaultArgs<ExtArgs>
  }

  export type $BreakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Break"
    objects: {
      timeEntry: Prisma.$TimeEntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timeEntryId: string
      breakStart: Date
      breakEnd: Date | null
    }, ExtArgs["result"]["break"]>
    composites: {}
  }

  type BreakGetPayload<S extends boolean | null | undefined | BreakDefaultArgs> = $Result.GetResult<Prisma.$BreakPayload, S>

  type BreakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BreakFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BreakCountAggregateInputType | true
    }

  export interface BreakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Break'], meta: { name: 'Break' } }
    /**
     * Find zero or one Break that matches the filter.
     * @param {BreakFindUniqueArgs} args - Arguments to find a Break
     * @example
     * // Get one Break
     * const break = await prisma.break.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BreakFindUniqueArgs>(args: SelectSubset<T, BreakFindUniqueArgs<ExtArgs>>): Prisma__BreakClient<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Break that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BreakFindUniqueOrThrowArgs} args - Arguments to find a Break
     * @example
     * // Get one Break
     * const break = await prisma.break.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BreakFindUniqueOrThrowArgs>(args: SelectSubset<T, BreakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BreakClient<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Break that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakFindFirstArgs} args - Arguments to find a Break
     * @example
     * // Get one Break
     * const break = await prisma.break.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BreakFindFirstArgs>(args?: SelectSubset<T, BreakFindFirstArgs<ExtArgs>>): Prisma__BreakClient<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Break that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakFindFirstOrThrowArgs} args - Arguments to find a Break
     * @example
     * // Get one Break
     * const break = await prisma.break.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BreakFindFirstOrThrowArgs>(args?: SelectSubset<T, BreakFindFirstOrThrowArgs<ExtArgs>>): Prisma__BreakClient<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Breaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Breaks
     * const breaks = await prisma.break.findMany()
     * 
     * // Get first 10 Breaks
     * const breaks = await prisma.break.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const breakWithIdOnly = await prisma.break.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BreakFindManyArgs>(args?: SelectSubset<T, BreakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Break.
     * @param {BreakCreateArgs} args - Arguments to create a Break.
     * @example
     * // Create one Break
     * const Break = await prisma.break.create({
     *   data: {
     *     // ... data to create a Break
     *   }
     * })
     * 
     */
    create<T extends BreakCreateArgs>(args: SelectSubset<T, BreakCreateArgs<ExtArgs>>): Prisma__BreakClient<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Breaks.
     * @param {BreakCreateManyArgs} args - Arguments to create many Breaks.
     * @example
     * // Create many Breaks
     * const break = await prisma.break.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BreakCreateManyArgs>(args?: SelectSubset<T, BreakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Breaks and returns the data saved in the database.
     * @param {BreakCreateManyAndReturnArgs} args - Arguments to create many Breaks.
     * @example
     * // Create many Breaks
     * const break = await prisma.break.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Breaks and only return the `id`
     * const breakWithIdOnly = await prisma.break.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BreakCreateManyAndReturnArgs>(args?: SelectSubset<T, BreakCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Break.
     * @param {BreakDeleteArgs} args - Arguments to delete one Break.
     * @example
     * // Delete one Break
     * const Break = await prisma.break.delete({
     *   where: {
     *     // ... filter to delete one Break
     *   }
     * })
     * 
     */
    delete<T extends BreakDeleteArgs>(args: SelectSubset<T, BreakDeleteArgs<ExtArgs>>): Prisma__BreakClient<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Break.
     * @param {BreakUpdateArgs} args - Arguments to update one Break.
     * @example
     * // Update one Break
     * const break = await prisma.break.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BreakUpdateArgs>(args: SelectSubset<T, BreakUpdateArgs<ExtArgs>>): Prisma__BreakClient<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Breaks.
     * @param {BreakDeleteManyArgs} args - Arguments to filter Breaks to delete.
     * @example
     * // Delete a few Breaks
     * const { count } = await prisma.break.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BreakDeleteManyArgs>(args?: SelectSubset<T, BreakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Breaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Breaks
     * const break = await prisma.break.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BreakUpdateManyArgs>(args: SelectSubset<T, BreakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Break.
     * @param {BreakUpsertArgs} args - Arguments to update or create a Break.
     * @example
     * // Update or create a Break
     * const break = await prisma.break.upsert({
     *   create: {
     *     // ... data to create a Break
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Break we want to update
     *   }
     * })
     */
    upsert<T extends BreakUpsertArgs>(args: SelectSubset<T, BreakUpsertArgs<ExtArgs>>): Prisma__BreakClient<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Breaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakCountArgs} args - Arguments to filter Breaks to count.
     * @example
     * // Count the number of Breaks
     * const count = await prisma.break.count({
     *   where: {
     *     // ... the filter for the Breaks we want to count
     *   }
     * })
    **/
    count<T extends BreakCountArgs>(
      args?: Subset<T, BreakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BreakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Break.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BreakAggregateArgs>(args: Subset<T, BreakAggregateArgs>): Prisma.PrismaPromise<GetBreakAggregateType<T>>

    /**
     * Group by Break.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakGroupByArgs} args - Group by arguments.
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
      T extends BreakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BreakGroupByArgs['orderBy'] }
        : { orderBy?: BreakGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BreakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBreakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Break model
   */
  readonly fields: BreakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Break.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BreakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    timeEntry<T extends TimeEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TimeEntryDefaultArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Break model
   */ 
  interface BreakFieldRefs {
    readonly id: FieldRef<"Break", 'String'>
    readonly timeEntryId: FieldRef<"Break", 'String'>
    readonly breakStart: FieldRef<"Break", 'DateTime'>
    readonly breakEnd: FieldRef<"Break", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Break findUnique
   */
  export type BreakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * Filter, which Break to fetch.
     */
    where: BreakWhereUniqueInput
  }

  /**
   * Break findUniqueOrThrow
   */
  export type BreakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * Filter, which Break to fetch.
     */
    where: BreakWhereUniqueInput
  }

  /**
   * Break findFirst
   */
  export type BreakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * Filter, which Break to fetch.
     */
    where?: BreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breaks to fetch.
     */
    orderBy?: BreakOrderByWithRelationInput | BreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breaks.
     */
    cursor?: BreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breaks.
     */
    distinct?: BreakScalarFieldEnum | BreakScalarFieldEnum[]
  }

  /**
   * Break findFirstOrThrow
   */
  export type BreakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * Filter, which Break to fetch.
     */
    where?: BreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breaks to fetch.
     */
    orderBy?: BreakOrderByWithRelationInput | BreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breaks.
     */
    cursor?: BreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breaks.
     */
    distinct?: BreakScalarFieldEnum | BreakScalarFieldEnum[]
  }

  /**
   * Break findMany
   */
  export type BreakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * Filter, which Breaks to fetch.
     */
    where?: BreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breaks to fetch.
     */
    orderBy?: BreakOrderByWithRelationInput | BreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Breaks.
     */
    cursor?: BreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breaks.
     */
    skip?: number
    distinct?: BreakScalarFieldEnum | BreakScalarFieldEnum[]
  }

  /**
   * Break create
   */
  export type BreakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * The data needed to create a Break.
     */
    data: XOR<BreakCreateInput, BreakUncheckedCreateInput>
  }

  /**
   * Break createMany
   */
  export type BreakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Breaks.
     */
    data: BreakCreateManyInput | BreakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Break createManyAndReturn
   */
  export type BreakCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Breaks.
     */
    data: BreakCreateManyInput | BreakCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Break update
   */
  export type BreakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * The data needed to update a Break.
     */
    data: XOR<BreakUpdateInput, BreakUncheckedUpdateInput>
    /**
     * Choose, which Break to update.
     */
    where: BreakWhereUniqueInput
  }

  /**
   * Break updateMany
   */
  export type BreakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Breaks.
     */
    data: XOR<BreakUpdateManyMutationInput, BreakUncheckedUpdateManyInput>
    /**
     * Filter which Breaks to update
     */
    where?: BreakWhereInput
  }

  /**
   * Break upsert
   */
  export type BreakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * The filter to search for the Break to update in case it exists.
     */
    where: BreakWhereUniqueInput
    /**
     * In case the Break found by the `where` argument doesn't exist, create a new Break with this data.
     */
    create: XOR<BreakCreateInput, BreakUncheckedCreateInput>
    /**
     * In case the Break was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BreakUpdateInput, BreakUncheckedUpdateInput>
  }

  /**
   * Break delete
   */
  export type BreakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * Filter which Break to delete.
     */
    where: BreakWhereUniqueInput
  }

  /**
   * Break deleteMany
   */
  export type BreakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Breaks to delete
     */
    where?: BreakWhereInput
  }

  /**
   * Break without action
   */
  export type BreakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
  }


  /**
   * Model UserStreak
   */

  export type AggregateUserStreak = {
    _count: UserStreakCountAggregateOutputType | null
    _avg: UserStreakAvgAggregateOutputType | null
    _sum: UserStreakSumAggregateOutputType | null
    _min: UserStreakMinAggregateOutputType | null
    _max: UserStreakMaxAggregateOutputType | null
  }

  export type UserStreakAvgAggregateOutputType = {
    currentStreak: number | null
  }

  export type UserStreakSumAggregateOutputType = {
    currentStreak: number | null
  }

  export type UserStreakMinAggregateOutputType = {
    id: string | null
    userId: string | null
    currentStreak: number | null
    lastLoginDate: Date | null
    updatedAt: Date | null
  }

  export type UserStreakMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    currentStreak: number | null
    lastLoginDate: Date | null
    updatedAt: Date | null
  }

  export type UserStreakCountAggregateOutputType = {
    id: number
    userId: number
    currentStreak: number
    lastLoginDate: number
    updatedAt: number
    _all: number
  }


  export type UserStreakAvgAggregateInputType = {
    currentStreak?: true
  }

  export type UserStreakSumAggregateInputType = {
    currentStreak?: true
  }

  export type UserStreakMinAggregateInputType = {
    id?: true
    userId?: true
    currentStreak?: true
    lastLoginDate?: true
    updatedAt?: true
  }

  export type UserStreakMaxAggregateInputType = {
    id?: true
    userId?: true
    currentStreak?: true
    lastLoginDate?: true
    updatedAt?: true
  }

  export type UserStreakCountAggregateInputType = {
    id?: true
    userId?: true
    currentStreak?: true
    lastLoginDate?: true
    updatedAt?: true
    _all?: true
  }

  export type UserStreakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStreak to aggregate.
     */
    where?: UserStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStreaks to fetch.
     */
    orderBy?: UserStreakOrderByWithRelationInput | UserStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStreaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStreaks
    **/
    _count?: true | UserStreakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStreakAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStreakSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStreakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStreakMaxAggregateInputType
  }

  export type GetUserStreakAggregateType<T extends UserStreakAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStreak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStreak[P]>
      : GetScalarType<T[P], AggregateUserStreak[P]>
  }




  export type UserStreakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStreakWhereInput
    orderBy?: UserStreakOrderByWithAggregationInput | UserStreakOrderByWithAggregationInput[]
    by: UserStreakScalarFieldEnum[] | UserStreakScalarFieldEnum
    having?: UserStreakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStreakCountAggregateInputType | true
    _avg?: UserStreakAvgAggregateInputType
    _sum?: UserStreakSumAggregateInputType
    _min?: UserStreakMinAggregateInputType
    _max?: UserStreakMaxAggregateInputType
  }

  export type UserStreakGroupByOutputType = {
    id: string
    userId: string
    currentStreak: number
    lastLoginDate: Date
    updatedAt: Date
    _count: UserStreakCountAggregateOutputType | null
    _avg: UserStreakAvgAggregateOutputType | null
    _sum: UserStreakSumAggregateOutputType | null
    _min: UserStreakMinAggregateOutputType | null
    _max: UserStreakMaxAggregateOutputType | null
  }

  type GetUserStreakGroupByPayload<T extends UserStreakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStreakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStreakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStreakGroupByOutputType[P]>
            : GetScalarType<T[P], UserStreakGroupByOutputType[P]>
        }
      >
    >


  export type UserStreakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentStreak?: boolean
    lastLoginDate?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userStreak"]>

  export type UserStreakSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentStreak?: boolean
    lastLoginDate?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userStreak"]>

  export type UserStreakSelectScalar = {
    id?: boolean
    userId?: boolean
    currentStreak?: boolean
    lastLoginDate?: boolean
    updatedAt?: boolean
  }


  export type $UserStreakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStreak"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      currentStreak: number
      lastLoginDate: Date
      updatedAt: Date
    }, ExtArgs["result"]["userStreak"]>
    composites: {}
  }

  type UserStreakGetPayload<S extends boolean | null | undefined | UserStreakDefaultArgs> = $Result.GetResult<Prisma.$UserStreakPayload, S>

  type UserStreakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserStreakFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserStreakCountAggregateInputType | true
    }

  export interface UserStreakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStreak'], meta: { name: 'UserStreak' } }
    /**
     * Find zero or one UserStreak that matches the filter.
     * @param {UserStreakFindUniqueArgs} args - Arguments to find a UserStreak
     * @example
     * // Get one UserStreak
     * const userStreak = await prisma.userStreak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStreakFindUniqueArgs>(args: SelectSubset<T, UserStreakFindUniqueArgs<ExtArgs>>): Prisma__UserStreakClient<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserStreak that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserStreakFindUniqueOrThrowArgs} args - Arguments to find a UserStreak
     * @example
     * // Get one UserStreak
     * const userStreak = await prisma.userStreak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStreakFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStreakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStreakClient<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserStreak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStreakFindFirstArgs} args - Arguments to find a UserStreak
     * @example
     * // Get one UserStreak
     * const userStreak = await prisma.userStreak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStreakFindFirstArgs>(args?: SelectSubset<T, UserStreakFindFirstArgs<ExtArgs>>): Prisma__UserStreakClient<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserStreak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStreakFindFirstOrThrowArgs} args - Arguments to find a UserStreak
     * @example
     * // Get one UserStreak
     * const userStreak = await prisma.userStreak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStreakFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStreakFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStreakClient<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserStreaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStreakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStreaks
     * const userStreaks = await prisma.userStreak.findMany()
     * 
     * // Get first 10 UserStreaks
     * const userStreaks = await prisma.userStreak.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStreakWithIdOnly = await prisma.userStreak.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStreakFindManyArgs>(args?: SelectSubset<T, UserStreakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserStreak.
     * @param {UserStreakCreateArgs} args - Arguments to create a UserStreak.
     * @example
     * // Create one UserStreak
     * const UserStreak = await prisma.userStreak.create({
     *   data: {
     *     // ... data to create a UserStreak
     *   }
     * })
     * 
     */
    create<T extends UserStreakCreateArgs>(args: SelectSubset<T, UserStreakCreateArgs<ExtArgs>>): Prisma__UserStreakClient<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserStreaks.
     * @param {UserStreakCreateManyArgs} args - Arguments to create many UserStreaks.
     * @example
     * // Create many UserStreaks
     * const userStreak = await prisma.userStreak.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStreakCreateManyArgs>(args?: SelectSubset<T, UserStreakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStreaks and returns the data saved in the database.
     * @param {UserStreakCreateManyAndReturnArgs} args - Arguments to create many UserStreaks.
     * @example
     * // Create many UserStreaks
     * const userStreak = await prisma.userStreak.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStreaks and only return the `id`
     * const userStreakWithIdOnly = await prisma.userStreak.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStreakCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStreakCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserStreak.
     * @param {UserStreakDeleteArgs} args - Arguments to delete one UserStreak.
     * @example
     * // Delete one UserStreak
     * const UserStreak = await prisma.userStreak.delete({
     *   where: {
     *     // ... filter to delete one UserStreak
     *   }
     * })
     * 
     */
    delete<T extends UserStreakDeleteArgs>(args: SelectSubset<T, UserStreakDeleteArgs<ExtArgs>>): Prisma__UserStreakClient<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserStreak.
     * @param {UserStreakUpdateArgs} args - Arguments to update one UserStreak.
     * @example
     * // Update one UserStreak
     * const userStreak = await prisma.userStreak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStreakUpdateArgs>(args: SelectSubset<T, UserStreakUpdateArgs<ExtArgs>>): Prisma__UserStreakClient<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserStreaks.
     * @param {UserStreakDeleteManyArgs} args - Arguments to filter UserStreaks to delete.
     * @example
     * // Delete a few UserStreaks
     * const { count } = await prisma.userStreak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStreakDeleteManyArgs>(args?: SelectSubset<T, UserStreakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStreaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStreakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStreaks
     * const userStreak = await prisma.userStreak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStreakUpdateManyArgs>(args: SelectSubset<T, UserStreakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserStreak.
     * @param {UserStreakUpsertArgs} args - Arguments to update or create a UserStreak.
     * @example
     * // Update or create a UserStreak
     * const userStreak = await prisma.userStreak.upsert({
     *   create: {
     *     // ... data to create a UserStreak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStreak we want to update
     *   }
     * })
     */
    upsert<T extends UserStreakUpsertArgs>(args: SelectSubset<T, UserStreakUpsertArgs<ExtArgs>>): Prisma__UserStreakClient<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserStreaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStreakCountArgs} args - Arguments to filter UserStreaks to count.
     * @example
     * // Count the number of UserStreaks
     * const count = await prisma.userStreak.count({
     *   where: {
     *     // ... the filter for the UserStreaks we want to count
     *   }
     * })
    **/
    count<T extends UserStreakCountArgs>(
      args?: Subset<T, UserStreakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStreakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStreak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStreakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserStreakAggregateArgs>(args: Subset<T, UserStreakAggregateArgs>): Prisma.PrismaPromise<GetUserStreakAggregateType<T>>

    /**
     * Group by UserStreak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStreakGroupByArgs} args - Group by arguments.
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
      T extends UserStreakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStreakGroupByArgs['orderBy'] }
        : { orderBy?: UserStreakGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserStreakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStreakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStreak model
   */
  readonly fields: UserStreakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStreak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStreakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserStreak model
   */ 
  interface UserStreakFieldRefs {
    readonly id: FieldRef<"UserStreak", 'String'>
    readonly userId: FieldRef<"UserStreak", 'String'>
    readonly currentStreak: FieldRef<"UserStreak", 'Int'>
    readonly lastLoginDate: FieldRef<"UserStreak", 'DateTime'>
    readonly updatedAt: FieldRef<"UserStreak", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserStreak findUnique
   */
  export type UserStreakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * Filter, which UserStreak to fetch.
     */
    where: UserStreakWhereUniqueInput
  }

  /**
   * UserStreak findUniqueOrThrow
   */
  export type UserStreakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * Filter, which UserStreak to fetch.
     */
    where: UserStreakWhereUniqueInput
  }

  /**
   * UserStreak findFirst
   */
  export type UserStreakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * Filter, which UserStreak to fetch.
     */
    where?: UserStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStreaks to fetch.
     */
    orderBy?: UserStreakOrderByWithRelationInput | UserStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStreaks.
     */
    cursor?: UserStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStreaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStreaks.
     */
    distinct?: UserStreakScalarFieldEnum | UserStreakScalarFieldEnum[]
  }

  /**
   * UserStreak findFirstOrThrow
   */
  export type UserStreakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * Filter, which UserStreak to fetch.
     */
    where?: UserStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStreaks to fetch.
     */
    orderBy?: UserStreakOrderByWithRelationInput | UserStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStreaks.
     */
    cursor?: UserStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStreaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStreaks.
     */
    distinct?: UserStreakScalarFieldEnum | UserStreakScalarFieldEnum[]
  }

  /**
   * UserStreak findMany
   */
  export type UserStreakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * Filter, which UserStreaks to fetch.
     */
    where?: UserStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStreaks to fetch.
     */
    orderBy?: UserStreakOrderByWithRelationInput | UserStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStreaks.
     */
    cursor?: UserStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStreaks.
     */
    skip?: number
    distinct?: UserStreakScalarFieldEnum | UserStreakScalarFieldEnum[]
  }

  /**
   * UserStreak create
   */
  export type UserStreakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * The data needed to create a UserStreak.
     */
    data: XOR<UserStreakCreateInput, UserStreakUncheckedCreateInput>
  }

  /**
   * UserStreak createMany
   */
  export type UserStreakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStreaks.
     */
    data: UserStreakCreateManyInput | UserStreakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStreak createManyAndReturn
   */
  export type UserStreakCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserStreaks.
     */
    data: UserStreakCreateManyInput | UserStreakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStreak update
   */
  export type UserStreakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * The data needed to update a UserStreak.
     */
    data: XOR<UserStreakUpdateInput, UserStreakUncheckedUpdateInput>
    /**
     * Choose, which UserStreak to update.
     */
    where: UserStreakWhereUniqueInput
  }

  /**
   * UserStreak updateMany
   */
  export type UserStreakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStreaks.
     */
    data: XOR<UserStreakUpdateManyMutationInput, UserStreakUncheckedUpdateManyInput>
    /**
     * Filter which UserStreaks to update
     */
    where?: UserStreakWhereInput
  }

  /**
   * UserStreak upsert
   */
  export type UserStreakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * The filter to search for the UserStreak to update in case it exists.
     */
    where: UserStreakWhereUniqueInput
    /**
     * In case the UserStreak found by the `where` argument doesn't exist, create a new UserStreak with this data.
     */
    create: XOR<UserStreakCreateInput, UserStreakUncheckedCreateInput>
    /**
     * In case the UserStreak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStreakUpdateInput, UserStreakUncheckedUpdateInput>
  }

  /**
   * UserStreak delete
   */
  export type UserStreakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * Filter which UserStreak to delete.
     */
    where: UserStreakWhereUniqueInput
  }

  /**
   * UserStreak deleteMany
   */
  export type UserStreakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStreaks to delete
     */
    where?: UserStreakWhereInput
  }

  /**
   * UserStreak without action
   */
  export type UserStreakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
  }


  /**
   * Model NqlFunctionMapping
   */

  export type AggregateNqlFunctionMapping = {
    _count: NqlFunctionMappingCountAggregateOutputType | null
    _min: NqlFunctionMappingMinAggregateOutputType | null
    _max: NqlFunctionMappingMaxAggregateOutputType | null
  }

  export type NqlFunctionMappingMinAggregateOutputType = {
    id: string | null
    nlq: string | null
    function: string | null
  }

  export type NqlFunctionMappingMaxAggregateOutputType = {
    id: string | null
    nlq: string | null
    function: string | null
  }

  export type NqlFunctionMappingCountAggregateOutputType = {
    id: number
    nlq: number
    function: number
    input: number
    cases: number
    _all: number
  }


  export type NqlFunctionMappingMinAggregateInputType = {
    id?: true
    nlq?: true
    function?: true
  }

  export type NqlFunctionMappingMaxAggregateInputType = {
    id?: true
    nlq?: true
    function?: true
  }

  export type NqlFunctionMappingCountAggregateInputType = {
    id?: true
    nlq?: true
    function?: true
    input?: true
    cases?: true
    _all?: true
  }

  export type NqlFunctionMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NqlFunctionMapping to aggregate.
     */
    where?: NqlFunctionMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NqlFunctionMappings to fetch.
     */
    orderBy?: NqlFunctionMappingOrderByWithRelationInput | NqlFunctionMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NqlFunctionMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NqlFunctionMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NqlFunctionMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NqlFunctionMappings
    **/
    _count?: true | NqlFunctionMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NqlFunctionMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NqlFunctionMappingMaxAggregateInputType
  }

  export type GetNqlFunctionMappingAggregateType<T extends NqlFunctionMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateNqlFunctionMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNqlFunctionMapping[P]>
      : GetScalarType<T[P], AggregateNqlFunctionMapping[P]>
  }




  export type NqlFunctionMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NqlFunctionMappingWhereInput
    orderBy?: NqlFunctionMappingOrderByWithAggregationInput | NqlFunctionMappingOrderByWithAggregationInput[]
    by: NqlFunctionMappingScalarFieldEnum[] | NqlFunctionMappingScalarFieldEnum
    having?: NqlFunctionMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NqlFunctionMappingCountAggregateInputType | true
    _min?: NqlFunctionMappingMinAggregateInputType
    _max?: NqlFunctionMappingMaxAggregateInputType
  }

  export type NqlFunctionMappingGroupByOutputType = {
    id: string
    nlq: string
    function: string
    input: JsonValue
    cases: JsonValue
    _count: NqlFunctionMappingCountAggregateOutputType | null
    _min: NqlFunctionMappingMinAggregateOutputType | null
    _max: NqlFunctionMappingMaxAggregateOutputType | null
  }

  type GetNqlFunctionMappingGroupByPayload<T extends NqlFunctionMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NqlFunctionMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NqlFunctionMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NqlFunctionMappingGroupByOutputType[P]>
            : GetScalarType<T[P], NqlFunctionMappingGroupByOutputType[P]>
        }
      >
    >


  export type NqlFunctionMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nlq?: boolean
    function?: boolean
    input?: boolean
    cases?: boolean
  }, ExtArgs["result"]["nqlFunctionMapping"]>

  export type NqlFunctionMappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nlq?: boolean
    function?: boolean
    input?: boolean
    cases?: boolean
  }, ExtArgs["result"]["nqlFunctionMapping"]>

  export type NqlFunctionMappingSelectScalar = {
    id?: boolean
    nlq?: boolean
    function?: boolean
    input?: boolean
    cases?: boolean
  }


  export type $NqlFunctionMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NqlFunctionMapping"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nlq: string
      function: string
      input: Prisma.JsonValue
      cases: Prisma.JsonValue
    }, ExtArgs["result"]["nqlFunctionMapping"]>
    composites: {}
  }

  type NqlFunctionMappingGetPayload<S extends boolean | null | undefined | NqlFunctionMappingDefaultArgs> = $Result.GetResult<Prisma.$NqlFunctionMappingPayload, S>

  type NqlFunctionMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NqlFunctionMappingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NqlFunctionMappingCountAggregateInputType | true
    }

  export interface NqlFunctionMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NqlFunctionMapping'], meta: { name: 'NqlFunctionMapping' } }
    /**
     * Find zero or one NqlFunctionMapping that matches the filter.
     * @param {NqlFunctionMappingFindUniqueArgs} args - Arguments to find a NqlFunctionMapping
     * @example
     * // Get one NqlFunctionMapping
     * const nqlFunctionMapping = await prisma.nqlFunctionMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NqlFunctionMappingFindUniqueArgs>(args: SelectSubset<T, NqlFunctionMappingFindUniqueArgs<ExtArgs>>): Prisma__NqlFunctionMappingClient<$Result.GetResult<Prisma.$NqlFunctionMappingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NqlFunctionMapping that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NqlFunctionMappingFindUniqueOrThrowArgs} args - Arguments to find a NqlFunctionMapping
     * @example
     * // Get one NqlFunctionMapping
     * const nqlFunctionMapping = await prisma.nqlFunctionMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NqlFunctionMappingFindUniqueOrThrowArgs>(args: SelectSubset<T, NqlFunctionMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NqlFunctionMappingClient<$Result.GetResult<Prisma.$NqlFunctionMappingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NqlFunctionMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NqlFunctionMappingFindFirstArgs} args - Arguments to find a NqlFunctionMapping
     * @example
     * // Get one NqlFunctionMapping
     * const nqlFunctionMapping = await prisma.nqlFunctionMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NqlFunctionMappingFindFirstArgs>(args?: SelectSubset<T, NqlFunctionMappingFindFirstArgs<ExtArgs>>): Prisma__NqlFunctionMappingClient<$Result.GetResult<Prisma.$NqlFunctionMappingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NqlFunctionMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NqlFunctionMappingFindFirstOrThrowArgs} args - Arguments to find a NqlFunctionMapping
     * @example
     * // Get one NqlFunctionMapping
     * const nqlFunctionMapping = await prisma.nqlFunctionMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NqlFunctionMappingFindFirstOrThrowArgs>(args?: SelectSubset<T, NqlFunctionMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__NqlFunctionMappingClient<$Result.GetResult<Prisma.$NqlFunctionMappingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NqlFunctionMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NqlFunctionMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NqlFunctionMappings
     * const nqlFunctionMappings = await prisma.nqlFunctionMapping.findMany()
     * 
     * // Get first 10 NqlFunctionMappings
     * const nqlFunctionMappings = await prisma.nqlFunctionMapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nqlFunctionMappingWithIdOnly = await prisma.nqlFunctionMapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NqlFunctionMappingFindManyArgs>(args?: SelectSubset<T, NqlFunctionMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NqlFunctionMappingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NqlFunctionMapping.
     * @param {NqlFunctionMappingCreateArgs} args - Arguments to create a NqlFunctionMapping.
     * @example
     * // Create one NqlFunctionMapping
     * const NqlFunctionMapping = await prisma.nqlFunctionMapping.create({
     *   data: {
     *     // ... data to create a NqlFunctionMapping
     *   }
     * })
     * 
     */
    create<T extends NqlFunctionMappingCreateArgs>(args: SelectSubset<T, NqlFunctionMappingCreateArgs<ExtArgs>>): Prisma__NqlFunctionMappingClient<$Result.GetResult<Prisma.$NqlFunctionMappingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NqlFunctionMappings.
     * @param {NqlFunctionMappingCreateManyArgs} args - Arguments to create many NqlFunctionMappings.
     * @example
     * // Create many NqlFunctionMappings
     * const nqlFunctionMapping = await prisma.nqlFunctionMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NqlFunctionMappingCreateManyArgs>(args?: SelectSubset<T, NqlFunctionMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NqlFunctionMappings and returns the data saved in the database.
     * @param {NqlFunctionMappingCreateManyAndReturnArgs} args - Arguments to create many NqlFunctionMappings.
     * @example
     * // Create many NqlFunctionMappings
     * const nqlFunctionMapping = await prisma.nqlFunctionMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NqlFunctionMappings and only return the `id`
     * const nqlFunctionMappingWithIdOnly = await prisma.nqlFunctionMapping.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NqlFunctionMappingCreateManyAndReturnArgs>(args?: SelectSubset<T, NqlFunctionMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NqlFunctionMappingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NqlFunctionMapping.
     * @param {NqlFunctionMappingDeleteArgs} args - Arguments to delete one NqlFunctionMapping.
     * @example
     * // Delete one NqlFunctionMapping
     * const NqlFunctionMapping = await prisma.nqlFunctionMapping.delete({
     *   where: {
     *     // ... filter to delete one NqlFunctionMapping
     *   }
     * })
     * 
     */
    delete<T extends NqlFunctionMappingDeleteArgs>(args: SelectSubset<T, NqlFunctionMappingDeleteArgs<ExtArgs>>): Prisma__NqlFunctionMappingClient<$Result.GetResult<Prisma.$NqlFunctionMappingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NqlFunctionMapping.
     * @param {NqlFunctionMappingUpdateArgs} args - Arguments to update one NqlFunctionMapping.
     * @example
     * // Update one NqlFunctionMapping
     * const nqlFunctionMapping = await prisma.nqlFunctionMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NqlFunctionMappingUpdateArgs>(args: SelectSubset<T, NqlFunctionMappingUpdateArgs<ExtArgs>>): Prisma__NqlFunctionMappingClient<$Result.GetResult<Prisma.$NqlFunctionMappingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NqlFunctionMappings.
     * @param {NqlFunctionMappingDeleteManyArgs} args - Arguments to filter NqlFunctionMappings to delete.
     * @example
     * // Delete a few NqlFunctionMappings
     * const { count } = await prisma.nqlFunctionMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NqlFunctionMappingDeleteManyArgs>(args?: SelectSubset<T, NqlFunctionMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NqlFunctionMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NqlFunctionMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NqlFunctionMappings
     * const nqlFunctionMapping = await prisma.nqlFunctionMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NqlFunctionMappingUpdateManyArgs>(args: SelectSubset<T, NqlFunctionMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NqlFunctionMapping.
     * @param {NqlFunctionMappingUpsertArgs} args - Arguments to update or create a NqlFunctionMapping.
     * @example
     * // Update or create a NqlFunctionMapping
     * const nqlFunctionMapping = await prisma.nqlFunctionMapping.upsert({
     *   create: {
     *     // ... data to create a NqlFunctionMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NqlFunctionMapping we want to update
     *   }
     * })
     */
    upsert<T extends NqlFunctionMappingUpsertArgs>(args: SelectSubset<T, NqlFunctionMappingUpsertArgs<ExtArgs>>): Prisma__NqlFunctionMappingClient<$Result.GetResult<Prisma.$NqlFunctionMappingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NqlFunctionMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NqlFunctionMappingCountArgs} args - Arguments to filter NqlFunctionMappings to count.
     * @example
     * // Count the number of NqlFunctionMappings
     * const count = await prisma.nqlFunctionMapping.count({
     *   where: {
     *     // ... the filter for the NqlFunctionMappings we want to count
     *   }
     * })
    **/
    count<T extends NqlFunctionMappingCountArgs>(
      args?: Subset<T, NqlFunctionMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NqlFunctionMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NqlFunctionMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NqlFunctionMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NqlFunctionMappingAggregateArgs>(args: Subset<T, NqlFunctionMappingAggregateArgs>): Prisma.PrismaPromise<GetNqlFunctionMappingAggregateType<T>>

    /**
     * Group by NqlFunctionMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NqlFunctionMappingGroupByArgs} args - Group by arguments.
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
      T extends NqlFunctionMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NqlFunctionMappingGroupByArgs['orderBy'] }
        : { orderBy?: NqlFunctionMappingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NqlFunctionMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNqlFunctionMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NqlFunctionMapping model
   */
  readonly fields: NqlFunctionMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NqlFunctionMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NqlFunctionMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the NqlFunctionMapping model
   */ 
  interface NqlFunctionMappingFieldRefs {
    readonly id: FieldRef<"NqlFunctionMapping", 'String'>
    readonly nlq: FieldRef<"NqlFunctionMapping", 'String'>
    readonly function: FieldRef<"NqlFunctionMapping", 'String'>
    readonly input: FieldRef<"NqlFunctionMapping", 'Json'>
    readonly cases: FieldRef<"NqlFunctionMapping", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * NqlFunctionMapping findUnique
   */
  export type NqlFunctionMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NqlFunctionMapping
     */
    select?: NqlFunctionMappingSelect<ExtArgs> | null
    /**
     * Filter, which NqlFunctionMapping to fetch.
     */
    where: NqlFunctionMappingWhereUniqueInput
  }

  /**
   * NqlFunctionMapping findUniqueOrThrow
   */
  export type NqlFunctionMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NqlFunctionMapping
     */
    select?: NqlFunctionMappingSelect<ExtArgs> | null
    /**
     * Filter, which NqlFunctionMapping to fetch.
     */
    where: NqlFunctionMappingWhereUniqueInput
  }

  /**
   * NqlFunctionMapping findFirst
   */
  export type NqlFunctionMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NqlFunctionMapping
     */
    select?: NqlFunctionMappingSelect<ExtArgs> | null
    /**
     * Filter, which NqlFunctionMapping to fetch.
     */
    where?: NqlFunctionMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NqlFunctionMappings to fetch.
     */
    orderBy?: NqlFunctionMappingOrderByWithRelationInput | NqlFunctionMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NqlFunctionMappings.
     */
    cursor?: NqlFunctionMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NqlFunctionMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NqlFunctionMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NqlFunctionMappings.
     */
    distinct?: NqlFunctionMappingScalarFieldEnum | NqlFunctionMappingScalarFieldEnum[]
  }

  /**
   * NqlFunctionMapping findFirstOrThrow
   */
  export type NqlFunctionMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NqlFunctionMapping
     */
    select?: NqlFunctionMappingSelect<ExtArgs> | null
    /**
     * Filter, which NqlFunctionMapping to fetch.
     */
    where?: NqlFunctionMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NqlFunctionMappings to fetch.
     */
    orderBy?: NqlFunctionMappingOrderByWithRelationInput | NqlFunctionMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NqlFunctionMappings.
     */
    cursor?: NqlFunctionMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NqlFunctionMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NqlFunctionMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NqlFunctionMappings.
     */
    distinct?: NqlFunctionMappingScalarFieldEnum | NqlFunctionMappingScalarFieldEnum[]
  }

  /**
   * NqlFunctionMapping findMany
   */
  export type NqlFunctionMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NqlFunctionMapping
     */
    select?: NqlFunctionMappingSelect<ExtArgs> | null
    /**
     * Filter, which NqlFunctionMappings to fetch.
     */
    where?: NqlFunctionMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NqlFunctionMappings to fetch.
     */
    orderBy?: NqlFunctionMappingOrderByWithRelationInput | NqlFunctionMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NqlFunctionMappings.
     */
    cursor?: NqlFunctionMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NqlFunctionMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NqlFunctionMappings.
     */
    skip?: number
    distinct?: NqlFunctionMappingScalarFieldEnum | NqlFunctionMappingScalarFieldEnum[]
  }

  /**
   * NqlFunctionMapping create
   */
  export type NqlFunctionMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NqlFunctionMapping
     */
    select?: NqlFunctionMappingSelect<ExtArgs> | null
    /**
     * The data needed to create a NqlFunctionMapping.
     */
    data: XOR<NqlFunctionMappingCreateInput, NqlFunctionMappingUncheckedCreateInput>
  }

  /**
   * NqlFunctionMapping createMany
   */
  export type NqlFunctionMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NqlFunctionMappings.
     */
    data: NqlFunctionMappingCreateManyInput | NqlFunctionMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NqlFunctionMapping createManyAndReturn
   */
  export type NqlFunctionMappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NqlFunctionMapping
     */
    select?: NqlFunctionMappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NqlFunctionMappings.
     */
    data: NqlFunctionMappingCreateManyInput | NqlFunctionMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NqlFunctionMapping update
   */
  export type NqlFunctionMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NqlFunctionMapping
     */
    select?: NqlFunctionMappingSelect<ExtArgs> | null
    /**
     * The data needed to update a NqlFunctionMapping.
     */
    data: XOR<NqlFunctionMappingUpdateInput, NqlFunctionMappingUncheckedUpdateInput>
    /**
     * Choose, which NqlFunctionMapping to update.
     */
    where: NqlFunctionMappingWhereUniqueInput
  }

  /**
   * NqlFunctionMapping updateMany
   */
  export type NqlFunctionMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NqlFunctionMappings.
     */
    data: XOR<NqlFunctionMappingUpdateManyMutationInput, NqlFunctionMappingUncheckedUpdateManyInput>
    /**
     * Filter which NqlFunctionMappings to update
     */
    where?: NqlFunctionMappingWhereInput
  }

  /**
   * NqlFunctionMapping upsert
   */
  export type NqlFunctionMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NqlFunctionMapping
     */
    select?: NqlFunctionMappingSelect<ExtArgs> | null
    /**
     * The filter to search for the NqlFunctionMapping to update in case it exists.
     */
    where: NqlFunctionMappingWhereUniqueInput
    /**
     * In case the NqlFunctionMapping found by the `where` argument doesn't exist, create a new NqlFunctionMapping with this data.
     */
    create: XOR<NqlFunctionMappingCreateInput, NqlFunctionMappingUncheckedCreateInput>
    /**
     * In case the NqlFunctionMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NqlFunctionMappingUpdateInput, NqlFunctionMappingUncheckedUpdateInput>
  }

  /**
   * NqlFunctionMapping delete
   */
  export type NqlFunctionMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NqlFunctionMapping
     */
    select?: NqlFunctionMappingSelect<ExtArgs> | null
    /**
     * Filter which NqlFunctionMapping to delete.
     */
    where: NqlFunctionMappingWhereUniqueInput
  }

  /**
   * NqlFunctionMapping deleteMany
   */
  export type NqlFunctionMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NqlFunctionMappings to delete
     */
    where?: NqlFunctionMappingWhereInput
  }

  /**
   * NqlFunctionMapping without action
   */
  export type NqlFunctionMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NqlFunctionMapping
     */
    select?: NqlFunctionMappingSelect<ExtArgs> | null
  }


  /**
   * Model NlqSqlMapping
   */

  export type AggregateNlqSqlMapping = {
    _count: NlqSqlMappingCountAggregateOutputType | null
    _min: NlqSqlMappingMinAggregateOutputType | null
    _max: NlqSqlMappingMaxAggregateOutputType | null
  }

  export type NlqSqlMappingMinAggregateOutputType = {
    id: string | null
    nlq: string | null
    sql: string | null
  }

  export type NlqSqlMappingMaxAggregateOutputType = {
    id: string | null
    nlq: string | null
    sql: string | null
  }

  export type NlqSqlMappingCountAggregateOutputType = {
    id: number
    nlq: number
    sql: number
    cases: number
    _all: number
  }


  export type NlqSqlMappingMinAggregateInputType = {
    id?: true
    nlq?: true
    sql?: true
  }

  export type NlqSqlMappingMaxAggregateInputType = {
    id?: true
    nlq?: true
    sql?: true
  }

  export type NlqSqlMappingCountAggregateInputType = {
    id?: true
    nlq?: true
    sql?: true
    cases?: true
    _all?: true
  }

  export type NlqSqlMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NlqSqlMapping to aggregate.
     */
    where?: NlqSqlMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NlqSqlMappings to fetch.
     */
    orderBy?: NlqSqlMappingOrderByWithRelationInput | NlqSqlMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NlqSqlMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NlqSqlMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NlqSqlMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NlqSqlMappings
    **/
    _count?: true | NlqSqlMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NlqSqlMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NlqSqlMappingMaxAggregateInputType
  }

  export type GetNlqSqlMappingAggregateType<T extends NlqSqlMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateNlqSqlMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNlqSqlMapping[P]>
      : GetScalarType<T[P], AggregateNlqSqlMapping[P]>
  }




  export type NlqSqlMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NlqSqlMappingWhereInput
    orderBy?: NlqSqlMappingOrderByWithAggregationInput | NlqSqlMappingOrderByWithAggregationInput[]
    by: NlqSqlMappingScalarFieldEnum[] | NlqSqlMappingScalarFieldEnum
    having?: NlqSqlMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NlqSqlMappingCountAggregateInputType | true
    _min?: NlqSqlMappingMinAggregateInputType
    _max?: NlqSqlMappingMaxAggregateInputType
  }

  export type NlqSqlMappingGroupByOutputType = {
    id: string
    nlq: string
    sql: string
    cases: JsonValue
    _count: NlqSqlMappingCountAggregateOutputType | null
    _min: NlqSqlMappingMinAggregateOutputType | null
    _max: NlqSqlMappingMaxAggregateOutputType | null
  }

  type GetNlqSqlMappingGroupByPayload<T extends NlqSqlMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NlqSqlMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NlqSqlMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NlqSqlMappingGroupByOutputType[P]>
            : GetScalarType<T[P], NlqSqlMappingGroupByOutputType[P]>
        }
      >
    >


  export type NlqSqlMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nlq?: boolean
    sql?: boolean
    cases?: boolean
  }, ExtArgs["result"]["nlqSqlMapping"]>

  export type NlqSqlMappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nlq?: boolean
    sql?: boolean
    cases?: boolean
  }, ExtArgs["result"]["nlqSqlMapping"]>

  export type NlqSqlMappingSelectScalar = {
    id?: boolean
    nlq?: boolean
    sql?: boolean
    cases?: boolean
  }


  export type $NlqSqlMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NlqSqlMapping"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nlq: string
      sql: string
      cases: Prisma.JsonValue
    }, ExtArgs["result"]["nlqSqlMapping"]>
    composites: {}
  }

  type NlqSqlMappingGetPayload<S extends boolean | null | undefined | NlqSqlMappingDefaultArgs> = $Result.GetResult<Prisma.$NlqSqlMappingPayload, S>

  type NlqSqlMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NlqSqlMappingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NlqSqlMappingCountAggregateInputType | true
    }

  export interface NlqSqlMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NlqSqlMapping'], meta: { name: 'NlqSqlMapping' } }
    /**
     * Find zero or one NlqSqlMapping that matches the filter.
     * @param {NlqSqlMappingFindUniqueArgs} args - Arguments to find a NlqSqlMapping
     * @example
     * // Get one NlqSqlMapping
     * const nlqSqlMapping = await prisma.nlqSqlMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NlqSqlMappingFindUniqueArgs>(args: SelectSubset<T, NlqSqlMappingFindUniqueArgs<ExtArgs>>): Prisma__NlqSqlMappingClient<$Result.GetResult<Prisma.$NlqSqlMappingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NlqSqlMapping that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NlqSqlMappingFindUniqueOrThrowArgs} args - Arguments to find a NlqSqlMapping
     * @example
     * // Get one NlqSqlMapping
     * const nlqSqlMapping = await prisma.nlqSqlMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NlqSqlMappingFindUniqueOrThrowArgs>(args: SelectSubset<T, NlqSqlMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NlqSqlMappingClient<$Result.GetResult<Prisma.$NlqSqlMappingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NlqSqlMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NlqSqlMappingFindFirstArgs} args - Arguments to find a NlqSqlMapping
     * @example
     * // Get one NlqSqlMapping
     * const nlqSqlMapping = await prisma.nlqSqlMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NlqSqlMappingFindFirstArgs>(args?: SelectSubset<T, NlqSqlMappingFindFirstArgs<ExtArgs>>): Prisma__NlqSqlMappingClient<$Result.GetResult<Prisma.$NlqSqlMappingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NlqSqlMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NlqSqlMappingFindFirstOrThrowArgs} args - Arguments to find a NlqSqlMapping
     * @example
     * // Get one NlqSqlMapping
     * const nlqSqlMapping = await prisma.nlqSqlMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NlqSqlMappingFindFirstOrThrowArgs>(args?: SelectSubset<T, NlqSqlMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__NlqSqlMappingClient<$Result.GetResult<Prisma.$NlqSqlMappingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NlqSqlMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NlqSqlMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NlqSqlMappings
     * const nlqSqlMappings = await prisma.nlqSqlMapping.findMany()
     * 
     * // Get first 10 NlqSqlMappings
     * const nlqSqlMappings = await prisma.nlqSqlMapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nlqSqlMappingWithIdOnly = await prisma.nlqSqlMapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NlqSqlMappingFindManyArgs>(args?: SelectSubset<T, NlqSqlMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NlqSqlMappingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NlqSqlMapping.
     * @param {NlqSqlMappingCreateArgs} args - Arguments to create a NlqSqlMapping.
     * @example
     * // Create one NlqSqlMapping
     * const NlqSqlMapping = await prisma.nlqSqlMapping.create({
     *   data: {
     *     // ... data to create a NlqSqlMapping
     *   }
     * })
     * 
     */
    create<T extends NlqSqlMappingCreateArgs>(args: SelectSubset<T, NlqSqlMappingCreateArgs<ExtArgs>>): Prisma__NlqSqlMappingClient<$Result.GetResult<Prisma.$NlqSqlMappingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NlqSqlMappings.
     * @param {NlqSqlMappingCreateManyArgs} args - Arguments to create many NlqSqlMappings.
     * @example
     * // Create many NlqSqlMappings
     * const nlqSqlMapping = await prisma.nlqSqlMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NlqSqlMappingCreateManyArgs>(args?: SelectSubset<T, NlqSqlMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NlqSqlMappings and returns the data saved in the database.
     * @param {NlqSqlMappingCreateManyAndReturnArgs} args - Arguments to create many NlqSqlMappings.
     * @example
     * // Create many NlqSqlMappings
     * const nlqSqlMapping = await prisma.nlqSqlMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NlqSqlMappings and only return the `id`
     * const nlqSqlMappingWithIdOnly = await prisma.nlqSqlMapping.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NlqSqlMappingCreateManyAndReturnArgs>(args?: SelectSubset<T, NlqSqlMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NlqSqlMappingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NlqSqlMapping.
     * @param {NlqSqlMappingDeleteArgs} args - Arguments to delete one NlqSqlMapping.
     * @example
     * // Delete one NlqSqlMapping
     * const NlqSqlMapping = await prisma.nlqSqlMapping.delete({
     *   where: {
     *     // ... filter to delete one NlqSqlMapping
     *   }
     * })
     * 
     */
    delete<T extends NlqSqlMappingDeleteArgs>(args: SelectSubset<T, NlqSqlMappingDeleteArgs<ExtArgs>>): Prisma__NlqSqlMappingClient<$Result.GetResult<Prisma.$NlqSqlMappingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NlqSqlMapping.
     * @param {NlqSqlMappingUpdateArgs} args - Arguments to update one NlqSqlMapping.
     * @example
     * // Update one NlqSqlMapping
     * const nlqSqlMapping = await prisma.nlqSqlMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NlqSqlMappingUpdateArgs>(args: SelectSubset<T, NlqSqlMappingUpdateArgs<ExtArgs>>): Prisma__NlqSqlMappingClient<$Result.GetResult<Prisma.$NlqSqlMappingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NlqSqlMappings.
     * @param {NlqSqlMappingDeleteManyArgs} args - Arguments to filter NlqSqlMappings to delete.
     * @example
     * // Delete a few NlqSqlMappings
     * const { count } = await prisma.nlqSqlMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NlqSqlMappingDeleteManyArgs>(args?: SelectSubset<T, NlqSqlMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NlqSqlMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NlqSqlMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NlqSqlMappings
     * const nlqSqlMapping = await prisma.nlqSqlMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NlqSqlMappingUpdateManyArgs>(args: SelectSubset<T, NlqSqlMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NlqSqlMapping.
     * @param {NlqSqlMappingUpsertArgs} args - Arguments to update or create a NlqSqlMapping.
     * @example
     * // Update or create a NlqSqlMapping
     * const nlqSqlMapping = await prisma.nlqSqlMapping.upsert({
     *   create: {
     *     // ... data to create a NlqSqlMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NlqSqlMapping we want to update
     *   }
     * })
     */
    upsert<T extends NlqSqlMappingUpsertArgs>(args: SelectSubset<T, NlqSqlMappingUpsertArgs<ExtArgs>>): Prisma__NlqSqlMappingClient<$Result.GetResult<Prisma.$NlqSqlMappingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NlqSqlMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NlqSqlMappingCountArgs} args - Arguments to filter NlqSqlMappings to count.
     * @example
     * // Count the number of NlqSqlMappings
     * const count = await prisma.nlqSqlMapping.count({
     *   where: {
     *     // ... the filter for the NlqSqlMappings we want to count
     *   }
     * })
    **/
    count<T extends NlqSqlMappingCountArgs>(
      args?: Subset<T, NlqSqlMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NlqSqlMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NlqSqlMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NlqSqlMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NlqSqlMappingAggregateArgs>(args: Subset<T, NlqSqlMappingAggregateArgs>): Prisma.PrismaPromise<GetNlqSqlMappingAggregateType<T>>

    /**
     * Group by NlqSqlMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NlqSqlMappingGroupByArgs} args - Group by arguments.
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
      T extends NlqSqlMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NlqSqlMappingGroupByArgs['orderBy'] }
        : { orderBy?: NlqSqlMappingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NlqSqlMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNlqSqlMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NlqSqlMapping model
   */
  readonly fields: NlqSqlMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NlqSqlMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NlqSqlMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the NlqSqlMapping model
   */ 
  interface NlqSqlMappingFieldRefs {
    readonly id: FieldRef<"NlqSqlMapping", 'String'>
    readonly nlq: FieldRef<"NlqSqlMapping", 'String'>
    readonly sql: FieldRef<"NlqSqlMapping", 'String'>
    readonly cases: FieldRef<"NlqSqlMapping", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * NlqSqlMapping findUnique
   */
  export type NlqSqlMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NlqSqlMapping
     */
    select?: NlqSqlMappingSelect<ExtArgs> | null
    /**
     * Filter, which NlqSqlMapping to fetch.
     */
    where: NlqSqlMappingWhereUniqueInput
  }

  /**
   * NlqSqlMapping findUniqueOrThrow
   */
  export type NlqSqlMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NlqSqlMapping
     */
    select?: NlqSqlMappingSelect<ExtArgs> | null
    /**
     * Filter, which NlqSqlMapping to fetch.
     */
    where: NlqSqlMappingWhereUniqueInput
  }

  /**
   * NlqSqlMapping findFirst
   */
  export type NlqSqlMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NlqSqlMapping
     */
    select?: NlqSqlMappingSelect<ExtArgs> | null
    /**
     * Filter, which NlqSqlMapping to fetch.
     */
    where?: NlqSqlMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NlqSqlMappings to fetch.
     */
    orderBy?: NlqSqlMappingOrderByWithRelationInput | NlqSqlMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NlqSqlMappings.
     */
    cursor?: NlqSqlMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NlqSqlMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NlqSqlMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NlqSqlMappings.
     */
    distinct?: NlqSqlMappingScalarFieldEnum | NlqSqlMappingScalarFieldEnum[]
  }

  /**
   * NlqSqlMapping findFirstOrThrow
   */
  export type NlqSqlMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NlqSqlMapping
     */
    select?: NlqSqlMappingSelect<ExtArgs> | null
    /**
     * Filter, which NlqSqlMapping to fetch.
     */
    where?: NlqSqlMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NlqSqlMappings to fetch.
     */
    orderBy?: NlqSqlMappingOrderByWithRelationInput | NlqSqlMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NlqSqlMappings.
     */
    cursor?: NlqSqlMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NlqSqlMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NlqSqlMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NlqSqlMappings.
     */
    distinct?: NlqSqlMappingScalarFieldEnum | NlqSqlMappingScalarFieldEnum[]
  }

  /**
   * NlqSqlMapping findMany
   */
  export type NlqSqlMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NlqSqlMapping
     */
    select?: NlqSqlMappingSelect<ExtArgs> | null
    /**
     * Filter, which NlqSqlMappings to fetch.
     */
    where?: NlqSqlMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NlqSqlMappings to fetch.
     */
    orderBy?: NlqSqlMappingOrderByWithRelationInput | NlqSqlMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NlqSqlMappings.
     */
    cursor?: NlqSqlMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NlqSqlMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NlqSqlMappings.
     */
    skip?: number
    distinct?: NlqSqlMappingScalarFieldEnum | NlqSqlMappingScalarFieldEnum[]
  }

  /**
   * NlqSqlMapping create
   */
  export type NlqSqlMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NlqSqlMapping
     */
    select?: NlqSqlMappingSelect<ExtArgs> | null
    /**
     * The data needed to create a NlqSqlMapping.
     */
    data: XOR<NlqSqlMappingCreateInput, NlqSqlMappingUncheckedCreateInput>
  }

  /**
   * NlqSqlMapping createMany
   */
  export type NlqSqlMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NlqSqlMappings.
     */
    data: NlqSqlMappingCreateManyInput | NlqSqlMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NlqSqlMapping createManyAndReturn
   */
  export type NlqSqlMappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NlqSqlMapping
     */
    select?: NlqSqlMappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NlqSqlMappings.
     */
    data: NlqSqlMappingCreateManyInput | NlqSqlMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NlqSqlMapping update
   */
  export type NlqSqlMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NlqSqlMapping
     */
    select?: NlqSqlMappingSelect<ExtArgs> | null
    /**
     * The data needed to update a NlqSqlMapping.
     */
    data: XOR<NlqSqlMappingUpdateInput, NlqSqlMappingUncheckedUpdateInput>
    /**
     * Choose, which NlqSqlMapping to update.
     */
    where: NlqSqlMappingWhereUniqueInput
  }

  /**
   * NlqSqlMapping updateMany
   */
  export type NlqSqlMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NlqSqlMappings.
     */
    data: XOR<NlqSqlMappingUpdateManyMutationInput, NlqSqlMappingUncheckedUpdateManyInput>
    /**
     * Filter which NlqSqlMappings to update
     */
    where?: NlqSqlMappingWhereInput
  }

  /**
   * NlqSqlMapping upsert
   */
  export type NlqSqlMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NlqSqlMapping
     */
    select?: NlqSqlMappingSelect<ExtArgs> | null
    /**
     * The filter to search for the NlqSqlMapping to update in case it exists.
     */
    where: NlqSqlMappingWhereUniqueInput
    /**
     * In case the NlqSqlMapping found by the `where` argument doesn't exist, create a new NlqSqlMapping with this data.
     */
    create: XOR<NlqSqlMappingCreateInput, NlqSqlMappingUncheckedCreateInput>
    /**
     * In case the NlqSqlMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NlqSqlMappingUpdateInput, NlqSqlMappingUncheckedUpdateInput>
  }

  /**
   * NlqSqlMapping delete
   */
  export type NlqSqlMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NlqSqlMapping
     */
    select?: NlqSqlMappingSelect<ExtArgs> | null
    /**
     * Filter which NlqSqlMapping to delete.
     */
    where: NlqSqlMappingWhereUniqueInput
  }

  /**
   * NlqSqlMapping deleteMany
   */
  export type NlqSqlMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NlqSqlMappings to delete
     */
    where?: NlqSqlMappingWhereInput
  }

  /**
   * NlqSqlMapping without action
   */
  export type NlqSqlMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NlqSqlMapping
     */
    select?: NlqSqlMappingSelect<ExtArgs> | null
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


  export const OrganisationScalarFieldEnum: {
    orgId: 'orgId',
    type: 'type'
  };

  export type OrganisationScalarFieldEnum = (typeof OrganisationScalarFieldEnum)[keyof typeof OrganisationScalarFieldEnum]


  export const UserCategoryLinkUpScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userName: 'userName',
    categoryId: 'categoryId',
    createdAt: 'createdAt'
  };

  export type UserCategoryLinkUpScalarFieldEnum = (typeof UserCategoryLinkUpScalarFieldEnum)[keyof typeof UserCategoryLinkUpScalarFieldEnum]


  export const UserLeavesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sickLeaves: 'sickLeaves',
    vacationLeaves: 'vacationLeaves',
    parentalLeaves: 'parentalLeaves',
    maternityLeaves: 'maternityLeaves',
    createdAt: 'createdAt'
  };

  export type UserLeavesScalarFieldEnum = (typeof UserLeavesScalarFieldEnum)[keyof typeof UserLeavesScalarFieldEnum]


  export const UserHolidayScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    holidayId: 'holidayId',
    createdAt: 'createdAt'
  };

  export type UserHolidayScalarFieldEnum = (typeof UserHolidayScalarFieldEnum)[keyof typeof UserHolidayScalarFieldEnum]


  export const UserCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    optionalHolidays: 'optionalHolidays'
  };

  export type UserCategoryScalarFieldEnum = (typeof UserCategoryScalarFieldEnum)[keyof typeof UserCategoryScalarFieldEnum]


  export const HolidayScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type HolidayScalarFieldEnum = (typeof HolidayScalarFieldEnum)[keyof typeof HolidayScalarFieldEnum]


  export const LeavePolicyScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    sickLeaves: 'sickLeaves',
    vacationLeaves: 'vacationLeaves',
    parentalLeaves: 'parentalLeaves',
    maternityLeaves: 'maternityLeaves',
    createdAt: 'createdAt'
  };

  export type LeavePolicyScalarFieldEnum = (typeof LeavePolicyScalarFieldEnum)[keyof typeof LeavePolicyScalarFieldEnum]


  export const LeaveScalarFieldEnum: {
    id: 'id',
    type: 'type',
    userId: 'userId',
    message: 'message',
    effectiveDays: 'effectiveDays',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type LeaveScalarFieldEnum = (typeof LeaveScalarFieldEnum)[keyof typeof LeaveScalarFieldEnum]


  export const UserScheduleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    workingDay: 'workingDay',
    startTime: 'startTime',
    endTime: 'endTime',
    createdAt: 'createdAt'
  };

  export type UserScheduleScalarFieldEnum = (typeof UserScheduleScalarFieldEnum)[keyof typeof UserScheduleScalarFieldEnum]


  export const TimeEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    loginTime: 'loginTime',
    logoutTime: 'logoutTime',
    createdAt: 'createdAt'
  };

  export type TimeEntryScalarFieldEnum = (typeof TimeEntryScalarFieldEnum)[keyof typeof TimeEntryScalarFieldEnum]


  export const BreakScalarFieldEnum: {
    id: 'id',
    timeEntryId: 'timeEntryId',
    breakStart: 'breakStart',
    breakEnd: 'breakEnd'
  };

  export type BreakScalarFieldEnum = (typeof BreakScalarFieldEnum)[keyof typeof BreakScalarFieldEnum]


  export const UserStreakScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    currentStreak: 'currentStreak',
    lastLoginDate: 'lastLoginDate',
    updatedAt: 'updatedAt'
  };

  export type UserStreakScalarFieldEnum = (typeof UserStreakScalarFieldEnum)[keyof typeof UserStreakScalarFieldEnum]


  export const NqlFunctionMappingScalarFieldEnum: {
    id: 'id',
    nlq: 'nlq',
    function: 'function',
    input: 'input',
    cases: 'cases'
  };

  export type NqlFunctionMappingScalarFieldEnum = (typeof NqlFunctionMappingScalarFieldEnum)[keyof typeof NqlFunctionMappingScalarFieldEnum]


  export const NlqSqlMappingScalarFieldEnum: {
    id: 'id',
    nlq: 'nlq',
    sql: 'sql',
    cases: 'cases'
  };

  export type NlqSqlMappingScalarFieldEnum = (typeof NlqSqlMappingScalarFieldEnum)[keyof typeof NlqSqlMappingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'organisationType'
   */
  export type EnumorganisationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'organisationType'>
    


  /**
   * Reference to a field of type 'organisationType[]'
   */
  export type ListEnumorganisationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'organisationType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'HolidayType'
   */
  export type EnumHolidayTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HolidayType'>
    


  /**
   * Reference to a field of type 'HolidayType[]'
   */
  export type ListEnumHolidayTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HolidayType[]'>
    


  /**
   * Reference to a field of type 'LeaveType'
   */
  export type EnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType'>
    


  /**
   * Reference to a field of type 'LeaveType[]'
   */
  export type ListEnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType[]'>
    


  /**
   * Reference to a field of type 'LeaveStatus'
   */
  export type EnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus'>
    


  /**
   * Reference to a field of type 'LeaveStatus[]'
   */
  export type ListEnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus[]'>
    


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
   * Deep Input Types
   */


  export type organisationWhereInput = {
    AND?: organisationWhereInput | organisationWhereInput[]
    OR?: organisationWhereInput[]
    NOT?: organisationWhereInput | organisationWhereInput[]
    orgId?: StringFilter<"organisation"> | string
    type?: EnumorganisationTypeFilter<"organisation"> | $Enums.organisationType
  }

  export type organisationOrderByWithRelationInput = {
    orgId?: SortOrder
    type?: SortOrder
  }

  export type organisationWhereUniqueInput = Prisma.AtLeast<{
    orgId?: string
    AND?: organisationWhereInput | organisationWhereInput[]
    OR?: organisationWhereInput[]
    NOT?: organisationWhereInput | organisationWhereInput[]
    type?: EnumorganisationTypeFilter<"organisation"> | $Enums.organisationType
  }, "orgId">

  export type organisationOrderByWithAggregationInput = {
    orgId?: SortOrder
    type?: SortOrder
    _count?: organisationCountOrderByAggregateInput
    _max?: organisationMaxOrderByAggregateInput
    _min?: organisationMinOrderByAggregateInput
  }

  export type organisationScalarWhereWithAggregatesInput = {
    AND?: organisationScalarWhereWithAggregatesInput | organisationScalarWhereWithAggregatesInput[]
    OR?: organisationScalarWhereWithAggregatesInput[]
    NOT?: organisationScalarWhereWithAggregatesInput | organisationScalarWhereWithAggregatesInput[]
    orgId?: StringWithAggregatesFilter<"organisation"> | string
    type?: EnumorganisationTypeWithAggregatesFilter<"organisation"> | $Enums.organisationType
  }

  export type UserCategoryLinkUpWhereInput = {
    AND?: UserCategoryLinkUpWhereInput | UserCategoryLinkUpWhereInput[]
    OR?: UserCategoryLinkUpWhereInput[]
    NOT?: UserCategoryLinkUpWhereInput | UserCategoryLinkUpWhereInput[]
    id?: UuidFilter<"UserCategoryLinkUp"> | string
    userId?: UuidFilter<"UserCategoryLinkUp"> | string
    userName?: StringFilter<"UserCategoryLinkUp"> | string
    categoryId?: UuidFilter<"UserCategoryLinkUp"> | string
    createdAt?: DateTimeFilter<"UserCategoryLinkUp"> | Date | string
    category?: XOR<UserCategoryRelationFilter, UserCategoryWhereInput>
  }

  export type UserCategoryLinkUpOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    category?: UserCategoryOrderByWithRelationInput
  }

  export type UserCategoryLinkUpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserCategoryLinkUpWhereInput | UserCategoryLinkUpWhereInput[]
    OR?: UserCategoryLinkUpWhereInput[]
    NOT?: UserCategoryLinkUpWhereInput | UserCategoryLinkUpWhereInput[]
    userName?: StringFilter<"UserCategoryLinkUp"> | string
    categoryId?: UuidFilter<"UserCategoryLinkUp"> | string
    createdAt?: DateTimeFilter<"UserCategoryLinkUp"> | Date | string
    category?: XOR<UserCategoryRelationFilter, UserCategoryWhereInput>
  }, "id" | "userId">

  export type UserCategoryLinkUpOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    _count?: UserCategoryLinkUpCountOrderByAggregateInput
    _max?: UserCategoryLinkUpMaxOrderByAggregateInput
    _min?: UserCategoryLinkUpMinOrderByAggregateInput
  }

  export type UserCategoryLinkUpScalarWhereWithAggregatesInput = {
    AND?: UserCategoryLinkUpScalarWhereWithAggregatesInput | UserCategoryLinkUpScalarWhereWithAggregatesInput[]
    OR?: UserCategoryLinkUpScalarWhereWithAggregatesInput[]
    NOT?: UserCategoryLinkUpScalarWhereWithAggregatesInput | UserCategoryLinkUpScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserCategoryLinkUp"> | string
    userId?: UuidWithAggregatesFilter<"UserCategoryLinkUp"> | string
    userName?: StringWithAggregatesFilter<"UserCategoryLinkUp"> | string
    categoryId?: UuidWithAggregatesFilter<"UserCategoryLinkUp"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserCategoryLinkUp"> | Date | string
  }

  export type UserLeavesWhereInput = {
    AND?: UserLeavesWhereInput | UserLeavesWhereInput[]
    OR?: UserLeavesWhereInput[]
    NOT?: UserLeavesWhereInput | UserLeavesWhereInput[]
    id?: UuidFilter<"UserLeaves"> | string
    userId?: UuidFilter<"UserLeaves"> | string
    sickLeaves?: DecimalFilter<"UserLeaves"> | Decimal | DecimalJsLike | number | string
    vacationLeaves?: DecimalFilter<"UserLeaves"> | Decimal | DecimalJsLike | number | string
    parentalLeaves?: DecimalFilter<"UserLeaves"> | Decimal | DecimalJsLike | number | string
    maternityLeaves?: DecimalFilter<"UserLeaves"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"UserLeaves"> | Date | string
  }

  export type UserLeavesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sickLeaves?: SortOrder
    vacationLeaves?: SortOrder
    parentalLeaves?: SortOrder
    maternityLeaves?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLeavesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserLeavesWhereInput | UserLeavesWhereInput[]
    OR?: UserLeavesWhereInput[]
    NOT?: UserLeavesWhereInput | UserLeavesWhereInput[]
    sickLeaves?: DecimalFilter<"UserLeaves"> | Decimal | DecimalJsLike | number | string
    vacationLeaves?: DecimalFilter<"UserLeaves"> | Decimal | DecimalJsLike | number | string
    parentalLeaves?: DecimalFilter<"UserLeaves"> | Decimal | DecimalJsLike | number | string
    maternityLeaves?: DecimalFilter<"UserLeaves"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"UserLeaves"> | Date | string
  }, "id" | "userId">

  export type UserLeavesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sickLeaves?: SortOrder
    vacationLeaves?: SortOrder
    parentalLeaves?: SortOrder
    maternityLeaves?: SortOrder
    createdAt?: SortOrder
    _count?: UserLeavesCountOrderByAggregateInput
    _avg?: UserLeavesAvgOrderByAggregateInput
    _max?: UserLeavesMaxOrderByAggregateInput
    _min?: UserLeavesMinOrderByAggregateInput
    _sum?: UserLeavesSumOrderByAggregateInput
  }

  export type UserLeavesScalarWhereWithAggregatesInput = {
    AND?: UserLeavesScalarWhereWithAggregatesInput | UserLeavesScalarWhereWithAggregatesInput[]
    OR?: UserLeavesScalarWhereWithAggregatesInput[]
    NOT?: UserLeavesScalarWhereWithAggregatesInput | UserLeavesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserLeaves"> | string
    userId?: UuidWithAggregatesFilter<"UserLeaves"> | string
    sickLeaves?: DecimalWithAggregatesFilter<"UserLeaves"> | Decimal | DecimalJsLike | number | string
    vacationLeaves?: DecimalWithAggregatesFilter<"UserLeaves"> | Decimal | DecimalJsLike | number | string
    parentalLeaves?: DecimalWithAggregatesFilter<"UserLeaves"> | Decimal | DecimalJsLike | number | string
    maternityLeaves?: DecimalWithAggregatesFilter<"UserLeaves"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"UserLeaves"> | Date | string
  }

  export type UserHolidayWhereInput = {
    AND?: UserHolidayWhereInput | UserHolidayWhereInput[]
    OR?: UserHolidayWhereInput[]
    NOT?: UserHolidayWhereInput | UserHolidayWhereInput[]
    id?: UuidFilter<"UserHoliday"> | string
    userId?: UuidFilter<"UserHoliday"> | string
    holidayId?: UuidFilter<"UserHoliday"> | string
    createdAt?: DateTimeFilter<"UserHoliday"> | Date | string
    holiday?: XOR<HolidayRelationFilter, HolidayWhereInput>
  }

  export type UserHolidayOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    holidayId?: SortOrder
    createdAt?: SortOrder
    holiday?: HolidayOrderByWithRelationInput
  }

  export type UserHolidayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserHolidayWhereInput | UserHolidayWhereInput[]
    OR?: UserHolidayWhereInput[]
    NOT?: UserHolidayWhereInput | UserHolidayWhereInput[]
    userId?: UuidFilter<"UserHoliday"> | string
    holidayId?: UuidFilter<"UserHoliday"> | string
    createdAt?: DateTimeFilter<"UserHoliday"> | Date | string
    holiday?: XOR<HolidayRelationFilter, HolidayWhereInput>
  }, "id">

  export type UserHolidayOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    holidayId?: SortOrder
    createdAt?: SortOrder
    _count?: UserHolidayCountOrderByAggregateInput
    _max?: UserHolidayMaxOrderByAggregateInput
    _min?: UserHolidayMinOrderByAggregateInput
  }

  export type UserHolidayScalarWhereWithAggregatesInput = {
    AND?: UserHolidayScalarWhereWithAggregatesInput | UserHolidayScalarWhereWithAggregatesInput[]
    OR?: UserHolidayScalarWhereWithAggregatesInput[]
    NOT?: UserHolidayScalarWhereWithAggregatesInput | UserHolidayScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserHoliday"> | string
    userId?: UuidWithAggregatesFilter<"UserHoliday"> | string
    holidayId?: UuidWithAggregatesFilter<"UserHoliday"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserHoliday"> | Date | string
  }

  export type UserCategoryWhereInput = {
    AND?: UserCategoryWhereInput | UserCategoryWhereInput[]
    OR?: UserCategoryWhereInput[]
    NOT?: UserCategoryWhereInput | UserCategoryWhereInput[]
    id?: UuidFilter<"UserCategory"> | string
    name?: StringFilter<"UserCategory"> | string
    createdAt?: DateTimeFilter<"UserCategory"> | Date | string
    optionalHolidays?: IntFilter<"UserCategory"> | number
    users?: UserCategoryLinkUpListRelationFilter
    holidays?: HolidayListRelationFilter
    leavePolicy?: XOR<LeavePolicyNullableRelationFilter, LeavePolicyWhereInput> | null
  }

  export type UserCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    optionalHolidays?: SortOrder
    users?: UserCategoryLinkUpOrderByRelationAggregateInput
    holidays?: HolidayOrderByRelationAggregateInput
    leavePolicy?: LeavePolicyOrderByWithRelationInput
  }

  export type UserCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserCategoryWhereInput | UserCategoryWhereInput[]
    OR?: UserCategoryWhereInput[]
    NOT?: UserCategoryWhereInput | UserCategoryWhereInput[]
    createdAt?: DateTimeFilter<"UserCategory"> | Date | string
    optionalHolidays?: IntFilter<"UserCategory"> | number
    users?: UserCategoryLinkUpListRelationFilter
    holidays?: HolidayListRelationFilter
    leavePolicy?: XOR<LeavePolicyNullableRelationFilter, LeavePolicyWhereInput> | null
  }, "id" | "name">

  export type UserCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    optionalHolidays?: SortOrder
    _count?: UserCategoryCountOrderByAggregateInput
    _avg?: UserCategoryAvgOrderByAggregateInput
    _max?: UserCategoryMaxOrderByAggregateInput
    _min?: UserCategoryMinOrderByAggregateInput
    _sum?: UserCategorySumOrderByAggregateInput
  }

  export type UserCategoryScalarWhereWithAggregatesInput = {
    AND?: UserCategoryScalarWhereWithAggregatesInput | UserCategoryScalarWhereWithAggregatesInput[]
    OR?: UserCategoryScalarWhereWithAggregatesInput[]
    NOT?: UserCategoryScalarWhereWithAggregatesInput | UserCategoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserCategory"> | string
    name?: StringWithAggregatesFilter<"UserCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserCategory"> | Date | string
    optionalHolidays?: IntWithAggregatesFilter<"UserCategory"> | number
  }

  export type HolidayWhereInput = {
    AND?: HolidayWhereInput | HolidayWhereInput[]
    OR?: HolidayWhereInput[]
    NOT?: HolidayWhereInput | HolidayWhereInput[]
    id?: UuidFilter<"Holiday"> | string
    name?: StringFilter<"Holiday"> | string
    date?: DateTimeFilter<"Holiday"> | Date | string
    type?: EnumHolidayTypeFilter<"Holiday"> | $Enums.HolidayType
    createdAt?: DateTimeFilter<"Holiday"> | Date | string
    userCategories?: UserCategoryListRelationFilter
    userHolidays?: UserHolidayListRelationFilter
  }

  export type HolidayOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userCategories?: UserCategoryOrderByRelationAggregateInput
    userHolidays?: UserHolidayOrderByRelationAggregateInput
  }

  export type HolidayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: HolidayWhereInput | HolidayWhereInput[]
    OR?: HolidayWhereInput[]
    NOT?: HolidayWhereInput | HolidayWhereInput[]
    date?: DateTimeFilter<"Holiday"> | Date | string
    type?: EnumHolidayTypeFilter<"Holiday"> | $Enums.HolidayType
    createdAt?: DateTimeFilter<"Holiday"> | Date | string
    userCategories?: UserCategoryListRelationFilter
    userHolidays?: UserHolidayListRelationFilter
  }, "id" | "name">

  export type HolidayOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: HolidayCountOrderByAggregateInput
    _max?: HolidayMaxOrderByAggregateInput
    _min?: HolidayMinOrderByAggregateInput
  }

  export type HolidayScalarWhereWithAggregatesInput = {
    AND?: HolidayScalarWhereWithAggregatesInput | HolidayScalarWhereWithAggregatesInput[]
    OR?: HolidayScalarWhereWithAggregatesInput[]
    NOT?: HolidayScalarWhereWithAggregatesInput | HolidayScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Holiday"> | string
    name?: StringWithAggregatesFilter<"Holiday"> | string
    date?: DateTimeWithAggregatesFilter<"Holiday"> | Date | string
    type?: EnumHolidayTypeWithAggregatesFilter<"Holiday"> | $Enums.HolidayType
    createdAt?: DateTimeWithAggregatesFilter<"Holiday"> | Date | string
  }

  export type LeavePolicyWhereInput = {
    AND?: LeavePolicyWhereInput | LeavePolicyWhereInput[]
    OR?: LeavePolicyWhereInput[]
    NOT?: LeavePolicyWhereInput | LeavePolicyWhereInput[]
    id?: UuidFilter<"LeavePolicy"> | string
    categoryId?: UuidFilter<"LeavePolicy"> | string
    sickLeaves?: DecimalFilter<"LeavePolicy"> | Decimal | DecimalJsLike | number | string
    vacationLeaves?: DecimalFilter<"LeavePolicy"> | Decimal | DecimalJsLike | number | string
    parentalLeaves?: DecimalFilter<"LeavePolicy"> | Decimal | DecimalJsLike | number | string
    maternityLeaves?: DecimalFilter<"LeavePolicy"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"LeavePolicy"> | Date | string
    category?: XOR<UserCategoryRelationFilter, UserCategoryWhereInput>
  }

  export type LeavePolicyOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    sickLeaves?: SortOrder
    vacationLeaves?: SortOrder
    parentalLeaves?: SortOrder
    maternityLeaves?: SortOrder
    createdAt?: SortOrder
    category?: UserCategoryOrderByWithRelationInput
  }

  export type LeavePolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    categoryId?: string
    AND?: LeavePolicyWhereInput | LeavePolicyWhereInput[]
    OR?: LeavePolicyWhereInput[]
    NOT?: LeavePolicyWhereInput | LeavePolicyWhereInput[]
    sickLeaves?: DecimalFilter<"LeavePolicy"> | Decimal | DecimalJsLike | number | string
    vacationLeaves?: DecimalFilter<"LeavePolicy"> | Decimal | DecimalJsLike | number | string
    parentalLeaves?: DecimalFilter<"LeavePolicy"> | Decimal | DecimalJsLike | number | string
    maternityLeaves?: DecimalFilter<"LeavePolicy"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"LeavePolicy"> | Date | string
    category?: XOR<UserCategoryRelationFilter, UserCategoryWhereInput>
  }, "id" | "categoryId">

  export type LeavePolicyOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    sickLeaves?: SortOrder
    vacationLeaves?: SortOrder
    parentalLeaves?: SortOrder
    maternityLeaves?: SortOrder
    createdAt?: SortOrder
    _count?: LeavePolicyCountOrderByAggregateInput
    _avg?: LeavePolicyAvgOrderByAggregateInput
    _max?: LeavePolicyMaxOrderByAggregateInput
    _min?: LeavePolicyMinOrderByAggregateInput
    _sum?: LeavePolicySumOrderByAggregateInput
  }

  export type LeavePolicyScalarWhereWithAggregatesInput = {
    AND?: LeavePolicyScalarWhereWithAggregatesInput | LeavePolicyScalarWhereWithAggregatesInput[]
    OR?: LeavePolicyScalarWhereWithAggregatesInput[]
    NOT?: LeavePolicyScalarWhereWithAggregatesInput | LeavePolicyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LeavePolicy"> | string
    categoryId?: UuidWithAggregatesFilter<"LeavePolicy"> | string
    sickLeaves?: DecimalWithAggregatesFilter<"LeavePolicy"> | Decimal | DecimalJsLike | number | string
    vacationLeaves?: DecimalWithAggregatesFilter<"LeavePolicy"> | Decimal | DecimalJsLike | number | string
    parentalLeaves?: DecimalWithAggregatesFilter<"LeavePolicy"> | Decimal | DecimalJsLike | number | string
    maternityLeaves?: DecimalWithAggregatesFilter<"LeavePolicy"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"LeavePolicy"> | Date | string
  }

  export type LeaveWhereInput = {
    AND?: LeaveWhereInput | LeaveWhereInput[]
    OR?: LeaveWhereInput[]
    NOT?: LeaveWhereInput | LeaveWhereInput[]
    id?: UuidFilter<"Leave"> | string
    type?: EnumLeaveTypeFilter<"Leave"> | $Enums.LeaveType
    userId?: UuidFilter<"Leave"> | string
    message?: StringNullableFilter<"Leave"> | string | null
    effectiveDays?: DecimalNullableFilter<"Leave"> | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeFilter<"Leave"> | Date | string
    endDate?: DateTimeFilter<"Leave"> | Date | string
    status?: EnumLeaveStatusFilter<"Leave"> | $Enums.LeaveStatus
    createdAt?: DateTimeFilter<"Leave"> | Date | string
  }

  export type LeaveOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    message?: SortOrderInput | SortOrder
    effectiveDays?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaveWhereInput | LeaveWhereInput[]
    OR?: LeaveWhereInput[]
    NOT?: LeaveWhereInput | LeaveWhereInput[]
    type?: EnumLeaveTypeFilter<"Leave"> | $Enums.LeaveType
    userId?: UuidFilter<"Leave"> | string
    message?: StringNullableFilter<"Leave"> | string | null
    effectiveDays?: DecimalNullableFilter<"Leave"> | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeFilter<"Leave"> | Date | string
    endDate?: DateTimeFilter<"Leave"> | Date | string
    status?: EnumLeaveStatusFilter<"Leave"> | $Enums.LeaveStatus
    createdAt?: DateTimeFilter<"Leave"> | Date | string
  }, "id">

  export type LeaveOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    message?: SortOrderInput | SortOrder
    effectiveDays?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: LeaveCountOrderByAggregateInput
    _avg?: LeaveAvgOrderByAggregateInput
    _max?: LeaveMaxOrderByAggregateInput
    _min?: LeaveMinOrderByAggregateInput
    _sum?: LeaveSumOrderByAggregateInput
  }

  export type LeaveScalarWhereWithAggregatesInput = {
    AND?: LeaveScalarWhereWithAggregatesInput | LeaveScalarWhereWithAggregatesInput[]
    OR?: LeaveScalarWhereWithAggregatesInput[]
    NOT?: LeaveScalarWhereWithAggregatesInput | LeaveScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Leave"> | string
    type?: EnumLeaveTypeWithAggregatesFilter<"Leave"> | $Enums.LeaveType
    userId?: UuidWithAggregatesFilter<"Leave"> | string
    message?: StringNullableWithAggregatesFilter<"Leave"> | string | null
    effectiveDays?: DecimalNullableWithAggregatesFilter<"Leave"> | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
    status?: EnumLeaveStatusWithAggregatesFilter<"Leave"> | $Enums.LeaveStatus
    createdAt?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
  }

  export type UserScheduleWhereInput = {
    AND?: UserScheduleWhereInput | UserScheduleWhereInput[]
    OR?: UserScheduleWhereInput[]
    NOT?: UserScheduleWhereInput | UserScheduleWhereInput[]
    id?: StringFilter<"UserSchedule"> | string
    userId?: StringFilter<"UserSchedule"> | string
    workingDay?: StringFilter<"UserSchedule"> | string
    startTime?: StringFilter<"UserSchedule"> | string
    endTime?: StringFilter<"UserSchedule"> | string
    createdAt?: DateTimeFilter<"UserSchedule"> | Date | string
  }

  export type UserScheduleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    workingDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_workingDay?: UserScheduleUserIdWorkingDayCompoundUniqueInput
    AND?: UserScheduleWhereInput | UserScheduleWhereInput[]
    OR?: UserScheduleWhereInput[]
    NOT?: UserScheduleWhereInput | UserScheduleWhereInput[]
    userId?: StringFilter<"UserSchedule"> | string
    workingDay?: StringFilter<"UserSchedule"> | string
    startTime?: StringFilter<"UserSchedule"> | string
    endTime?: StringFilter<"UserSchedule"> | string
    createdAt?: DateTimeFilter<"UserSchedule"> | Date | string
  }, "id" | "userId_workingDay">

  export type UserScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    workingDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    _count?: UserScheduleCountOrderByAggregateInput
    _max?: UserScheduleMaxOrderByAggregateInput
    _min?: UserScheduleMinOrderByAggregateInput
  }

  export type UserScheduleScalarWhereWithAggregatesInput = {
    AND?: UserScheduleScalarWhereWithAggregatesInput | UserScheduleScalarWhereWithAggregatesInput[]
    OR?: UserScheduleScalarWhereWithAggregatesInput[]
    NOT?: UserScheduleScalarWhereWithAggregatesInput | UserScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSchedule"> | string
    userId?: StringWithAggregatesFilter<"UserSchedule"> | string
    workingDay?: StringWithAggregatesFilter<"UserSchedule"> | string
    startTime?: StringWithAggregatesFilter<"UserSchedule"> | string
    endTime?: StringWithAggregatesFilter<"UserSchedule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserSchedule"> | Date | string
  }

  export type TimeEntryWhereInput = {
    AND?: TimeEntryWhereInput | TimeEntryWhereInput[]
    OR?: TimeEntryWhereInput[]
    NOT?: TimeEntryWhereInput | TimeEntryWhereInput[]
    id?: StringFilter<"TimeEntry"> | string
    userId?: StringFilter<"TimeEntry"> | string
    date?: DateTimeFilter<"TimeEntry"> | Date | string
    loginTime?: DateTimeNullableFilter<"TimeEntry"> | Date | string | null
    logoutTime?: DateTimeNullableFilter<"TimeEntry"> | Date | string | null
    createdAt?: DateTimeFilter<"TimeEntry"> | Date | string
    breaks?: BreakListRelationFilter
  }

  export type TimeEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    loginTime?: SortOrderInput | SortOrder
    logoutTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    breaks?: BreakOrderByRelationAggregateInput
  }

  export type TimeEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: TimeEntryUserIdDateCompoundUniqueInput
    AND?: TimeEntryWhereInput | TimeEntryWhereInput[]
    OR?: TimeEntryWhereInput[]
    NOT?: TimeEntryWhereInput | TimeEntryWhereInput[]
    userId?: StringFilter<"TimeEntry"> | string
    date?: DateTimeFilter<"TimeEntry"> | Date | string
    loginTime?: DateTimeNullableFilter<"TimeEntry"> | Date | string | null
    logoutTime?: DateTimeNullableFilter<"TimeEntry"> | Date | string | null
    createdAt?: DateTimeFilter<"TimeEntry"> | Date | string
    breaks?: BreakListRelationFilter
  }, "id" | "userId_date">

  export type TimeEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    loginTime?: SortOrderInput | SortOrder
    logoutTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TimeEntryCountOrderByAggregateInput
    _max?: TimeEntryMaxOrderByAggregateInput
    _min?: TimeEntryMinOrderByAggregateInput
  }

  export type TimeEntryScalarWhereWithAggregatesInput = {
    AND?: TimeEntryScalarWhereWithAggregatesInput | TimeEntryScalarWhereWithAggregatesInput[]
    OR?: TimeEntryScalarWhereWithAggregatesInput[]
    NOT?: TimeEntryScalarWhereWithAggregatesInput | TimeEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimeEntry"> | string
    userId?: StringWithAggregatesFilter<"TimeEntry"> | string
    date?: DateTimeWithAggregatesFilter<"TimeEntry"> | Date | string
    loginTime?: DateTimeNullableWithAggregatesFilter<"TimeEntry"> | Date | string | null
    logoutTime?: DateTimeNullableWithAggregatesFilter<"TimeEntry"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TimeEntry"> | Date | string
  }

  export type BreakWhereInput = {
    AND?: BreakWhereInput | BreakWhereInput[]
    OR?: BreakWhereInput[]
    NOT?: BreakWhereInput | BreakWhereInput[]
    id?: StringFilter<"Break"> | string
    timeEntryId?: StringFilter<"Break"> | string
    breakStart?: DateTimeFilter<"Break"> | Date | string
    breakEnd?: DateTimeNullableFilter<"Break"> | Date | string | null
    timeEntry?: XOR<TimeEntryRelationFilter, TimeEntryWhereInput>
  }

  export type BreakOrderByWithRelationInput = {
    id?: SortOrder
    timeEntryId?: SortOrder
    breakStart?: SortOrder
    breakEnd?: SortOrderInput | SortOrder
    timeEntry?: TimeEntryOrderByWithRelationInput
  }

  export type BreakWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BreakWhereInput | BreakWhereInput[]
    OR?: BreakWhereInput[]
    NOT?: BreakWhereInput | BreakWhereInput[]
    timeEntryId?: StringFilter<"Break"> | string
    breakStart?: DateTimeFilter<"Break"> | Date | string
    breakEnd?: DateTimeNullableFilter<"Break"> | Date | string | null
    timeEntry?: XOR<TimeEntryRelationFilter, TimeEntryWhereInput>
  }, "id">

  export type BreakOrderByWithAggregationInput = {
    id?: SortOrder
    timeEntryId?: SortOrder
    breakStart?: SortOrder
    breakEnd?: SortOrderInput | SortOrder
    _count?: BreakCountOrderByAggregateInput
    _max?: BreakMaxOrderByAggregateInput
    _min?: BreakMinOrderByAggregateInput
  }

  export type BreakScalarWhereWithAggregatesInput = {
    AND?: BreakScalarWhereWithAggregatesInput | BreakScalarWhereWithAggregatesInput[]
    OR?: BreakScalarWhereWithAggregatesInput[]
    NOT?: BreakScalarWhereWithAggregatesInput | BreakScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Break"> | string
    timeEntryId?: StringWithAggregatesFilter<"Break"> | string
    breakStart?: DateTimeWithAggregatesFilter<"Break"> | Date | string
    breakEnd?: DateTimeNullableWithAggregatesFilter<"Break"> | Date | string | null
  }

  export type UserStreakWhereInput = {
    AND?: UserStreakWhereInput | UserStreakWhereInput[]
    OR?: UserStreakWhereInput[]
    NOT?: UserStreakWhereInput | UserStreakWhereInput[]
    id?: StringFilter<"UserStreak"> | string
    userId?: StringFilter<"UserStreak"> | string
    currentStreak?: IntFilter<"UserStreak"> | number
    lastLoginDate?: DateTimeFilter<"UserStreak"> | Date | string
    updatedAt?: DateTimeFilter<"UserStreak"> | Date | string
  }

  export type UserStreakOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    lastLoginDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStreakWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserStreakWhereInput | UserStreakWhereInput[]
    OR?: UserStreakWhereInput[]
    NOT?: UserStreakWhereInput | UserStreakWhereInput[]
    currentStreak?: IntFilter<"UserStreak"> | number
    lastLoginDate?: DateTimeFilter<"UserStreak"> | Date | string
    updatedAt?: DateTimeFilter<"UserStreak"> | Date | string
  }, "id" | "userId">

  export type UserStreakOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    lastLoginDate?: SortOrder
    updatedAt?: SortOrder
    _count?: UserStreakCountOrderByAggregateInput
    _avg?: UserStreakAvgOrderByAggregateInput
    _max?: UserStreakMaxOrderByAggregateInput
    _min?: UserStreakMinOrderByAggregateInput
    _sum?: UserStreakSumOrderByAggregateInput
  }

  export type UserStreakScalarWhereWithAggregatesInput = {
    AND?: UserStreakScalarWhereWithAggregatesInput | UserStreakScalarWhereWithAggregatesInput[]
    OR?: UserStreakScalarWhereWithAggregatesInput[]
    NOT?: UserStreakScalarWhereWithAggregatesInput | UserStreakScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserStreak"> | string
    userId?: StringWithAggregatesFilter<"UserStreak"> | string
    currentStreak?: IntWithAggregatesFilter<"UserStreak"> | number
    lastLoginDate?: DateTimeWithAggregatesFilter<"UserStreak"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserStreak"> | Date | string
  }

  export type NqlFunctionMappingWhereInput = {
    AND?: NqlFunctionMappingWhereInput | NqlFunctionMappingWhereInput[]
    OR?: NqlFunctionMappingWhereInput[]
    NOT?: NqlFunctionMappingWhereInput | NqlFunctionMappingWhereInput[]
    id?: UuidFilter<"NqlFunctionMapping"> | string
    nlq?: StringFilter<"NqlFunctionMapping"> | string
    function?: StringFilter<"NqlFunctionMapping"> | string
    input?: JsonFilter<"NqlFunctionMapping">
    cases?: JsonFilter<"NqlFunctionMapping">
  }

  export type NqlFunctionMappingOrderByWithRelationInput = {
    id?: SortOrder
    nlq?: SortOrder
    function?: SortOrder
    input?: SortOrder
    cases?: SortOrder
  }

  export type NqlFunctionMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NqlFunctionMappingWhereInput | NqlFunctionMappingWhereInput[]
    OR?: NqlFunctionMappingWhereInput[]
    NOT?: NqlFunctionMappingWhereInput | NqlFunctionMappingWhereInput[]
    nlq?: StringFilter<"NqlFunctionMapping"> | string
    function?: StringFilter<"NqlFunctionMapping"> | string
    input?: JsonFilter<"NqlFunctionMapping">
    cases?: JsonFilter<"NqlFunctionMapping">
  }, "id">

  export type NqlFunctionMappingOrderByWithAggregationInput = {
    id?: SortOrder
    nlq?: SortOrder
    function?: SortOrder
    input?: SortOrder
    cases?: SortOrder
    _count?: NqlFunctionMappingCountOrderByAggregateInput
    _max?: NqlFunctionMappingMaxOrderByAggregateInput
    _min?: NqlFunctionMappingMinOrderByAggregateInput
  }

  export type NqlFunctionMappingScalarWhereWithAggregatesInput = {
    AND?: NqlFunctionMappingScalarWhereWithAggregatesInput | NqlFunctionMappingScalarWhereWithAggregatesInput[]
    OR?: NqlFunctionMappingScalarWhereWithAggregatesInput[]
    NOT?: NqlFunctionMappingScalarWhereWithAggregatesInput | NqlFunctionMappingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"NqlFunctionMapping"> | string
    nlq?: StringWithAggregatesFilter<"NqlFunctionMapping"> | string
    function?: StringWithAggregatesFilter<"NqlFunctionMapping"> | string
    input?: JsonWithAggregatesFilter<"NqlFunctionMapping">
    cases?: JsonWithAggregatesFilter<"NqlFunctionMapping">
  }

  export type NlqSqlMappingWhereInput = {
    AND?: NlqSqlMappingWhereInput | NlqSqlMappingWhereInput[]
    OR?: NlqSqlMappingWhereInput[]
    NOT?: NlqSqlMappingWhereInput | NlqSqlMappingWhereInput[]
    id?: UuidFilter<"NlqSqlMapping"> | string
    nlq?: StringFilter<"NlqSqlMapping"> | string
    sql?: StringFilter<"NlqSqlMapping"> | string
    cases?: JsonFilter<"NlqSqlMapping">
  }

  export type NlqSqlMappingOrderByWithRelationInput = {
    id?: SortOrder
    nlq?: SortOrder
    sql?: SortOrder
    cases?: SortOrder
  }

  export type NlqSqlMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NlqSqlMappingWhereInput | NlqSqlMappingWhereInput[]
    OR?: NlqSqlMappingWhereInput[]
    NOT?: NlqSqlMappingWhereInput | NlqSqlMappingWhereInput[]
    nlq?: StringFilter<"NlqSqlMapping"> | string
    sql?: StringFilter<"NlqSqlMapping"> | string
    cases?: JsonFilter<"NlqSqlMapping">
  }, "id">

  export type NlqSqlMappingOrderByWithAggregationInput = {
    id?: SortOrder
    nlq?: SortOrder
    sql?: SortOrder
    cases?: SortOrder
    _count?: NlqSqlMappingCountOrderByAggregateInput
    _max?: NlqSqlMappingMaxOrderByAggregateInput
    _min?: NlqSqlMappingMinOrderByAggregateInput
  }

  export type NlqSqlMappingScalarWhereWithAggregatesInput = {
    AND?: NlqSqlMappingScalarWhereWithAggregatesInput | NlqSqlMappingScalarWhereWithAggregatesInput[]
    OR?: NlqSqlMappingScalarWhereWithAggregatesInput[]
    NOT?: NlqSqlMappingScalarWhereWithAggregatesInput | NlqSqlMappingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"NlqSqlMapping"> | string
    nlq?: StringWithAggregatesFilter<"NlqSqlMapping"> | string
    sql?: StringWithAggregatesFilter<"NlqSqlMapping"> | string
    cases?: JsonWithAggregatesFilter<"NlqSqlMapping">
  }

  export type organisationCreateInput = {
    orgId: string
    type?: $Enums.organisationType
  }

  export type organisationUncheckedCreateInput = {
    orgId: string
    type?: $Enums.organisationType
  }

  export type organisationUpdateInput = {
    orgId?: StringFieldUpdateOperationsInput | string
    type?: EnumorganisationTypeFieldUpdateOperationsInput | $Enums.organisationType
  }

  export type organisationUncheckedUpdateInput = {
    orgId?: StringFieldUpdateOperationsInput | string
    type?: EnumorganisationTypeFieldUpdateOperationsInput | $Enums.organisationType
  }

  export type organisationCreateManyInput = {
    orgId: string
    type?: $Enums.organisationType
  }

  export type organisationUpdateManyMutationInput = {
    orgId?: StringFieldUpdateOperationsInput | string
    type?: EnumorganisationTypeFieldUpdateOperationsInput | $Enums.organisationType
  }

  export type organisationUncheckedUpdateManyInput = {
    orgId?: StringFieldUpdateOperationsInput | string
    type?: EnumorganisationTypeFieldUpdateOperationsInput | $Enums.organisationType
  }

  export type UserCategoryLinkUpCreateInput = {
    id?: string
    userId: string
    userName?: string
    createdAt?: Date | string
    category: UserCategoryCreateNestedOneWithoutUsersInput
  }

  export type UserCategoryLinkUpUncheckedCreateInput = {
    id?: string
    userId: string
    userName?: string
    categoryId: string
    createdAt?: Date | string
  }

  export type UserCategoryLinkUpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: UserCategoryUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserCategoryLinkUpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryLinkUpCreateManyInput = {
    id?: string
    userId: string
    userName?: string
    categoryId: string
    createdAt?: Date | string
  }

  export type UserCategoryLinkUpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryLinkUpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLeavesCreateInput = {
    id?: string
    userId: string
    sickLeaves: Decimal | DecimalJsLike | number | string
    vacationLeaves: Decimal | DecimalJsLike | number | string
    parentalLeaves: Decimal | DecimalJsLike | number | string
    maternityLeaves: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type UserLeavesUncheckedCreateInput = {
    id?: string
    userId: string
    sickLeaves: Decimal | DecimalJsLike | number | string
    vacationLeaves: Decimal | DecimalJsLike | number | string
    parentalLeaves: Decimal | DecimalJsLike | number | string
    maternityLeaves: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type UserLeavesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sickLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vacationLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parentalLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maternityLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLeavesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sickLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vacationLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parentalLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maternityLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLeavesCreateManyInput = {
    id?: string
    userId: string
    sickLeaves: Decimal | DecimalJsLike | number | string
    vacationLeaves: Decimal | DecimalJsLike | number | string
    parentalLeaves: Decimal | DecimalJsLike | number | string
    maternityLeaves: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type UserLeavesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sickLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vacationLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parentalLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maternityLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLeavesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sickLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vacationLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parentalLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maternityLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHolidayCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    holiday: HolidayCreateNestedOneWithoutUserHolidaysInput
  }

  export type UserHolidayUncheckedCreateInput = {
    id?: string
    userId: string
    holidayId: string
    createdAt?: Date | string
  }

  export type UserHolidayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holiday?: HolidayUpdateOneRequiredWithoutUserHolidaysNestedInput
  }

  export type UserHolidayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    holidayId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHolidayCreateManyInput = {
    id?: string
    userId: string
    holidayId: string
    createdAt?: Date | string
  }

  export type UserHolidayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHolidayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    holidayId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    optionalHolidays?: number
    users?: UserCategoryLinkUpCreateNestedManyWithoutCategoryInput
    holidays?: HolidayCreateNestedManyWithoutUserCategoriesInput
    leavePolicy?: LeavePolicyCreateNestedOneWithoutCategoryInput
  }

  export type UserCategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    optionalHolidays?: number
    users?: UserCategoryLinkUpUncheckedCreateNestedManyWithoutCategoryInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutUserCategoriesInput
    leavePolicy?: LeavePolicyUncheckedCreateNestedOneWithoutCategoryInput
  }

  export type UserCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    optionalHolidays?: IntFieldUpdateOperationsInput | number
    users?: UserCategoryLinkUpUpdateManyWithoutCategoryNestedInput
    holidays?: HolidayUpdateManyWithoutUserCategoriesNestedInput
    leavePolicy?: LeavePolicyUpdateOneWithoutCategoryNestedInput
  }

  export type UserCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    optionalHolidays?: IntFieldUpdateOperationsInput | number
    users?: UserCategoryLinkUpUncheckedUpdateManyWithoutCategoryNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutUserCategoriesNestedInput
    leavePolicy?: LeavePolicyUncheckedUpdateOneWithoutCategoryNestedInput
  }

  export type UserCategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    optionalHolidays?: number
  }

  export type UserCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    optionalHolidays?: IntFieldUpdateOperationsInput | number
  }

  export type UserCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    optionalHolidays?: IntFieldUpdateOperationsInput | number
  }

  export type HolidayCreateInput = {
    id?: string
    name: string
    date: Date | string
    type?: $Enums.HolidayType
    createdAt?: Date | string
    userCategories?: UserCategoryCreateNestedManyWithoutHolidaysInput
    userHolidays?: UserHolidayCreateNestedManyWithoutHolidayInput
  }

  export type HolidayUncheckedCreateInput = {
    id?: string
    name: string
    date: Date | string
    type?: $Enums.HolidayType
    createdAt?: Date | string
    userCategories?: UserCategoryUncheckedCreateNestedManyWithoutHolidaysInput
    userHolidays?: UserHolidayUncheckedCreateNestedManyWithoutHolidayInput
  }

  export type HolidayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCategories?: UserCategoryUpdateManyWithoutHolidaysNestedInput
    userHolidays?: UserHolidayUpdateManyWithoutHolidayNestedInput
  }

  export type HolidayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCategories?: UserCategoryUncheckedUpdateManyWithoutHolidaysNestedInput
    userHolidays?: UserHolidayUncheckedUpdateManyWithoutHolidayNestedInput
  }

  export type HolidayCreateManyInput = {
    id?: string
    name: string
    date: Date | string
    type?: $Enums.HolidayType
    createdAt?: Date | string
  }

  export type HolidayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeavePolicyCreateInput = {
    id?: string
    sickLeaves: Decimal | DecimalJsLike | number | string
    vacationLeaves: Decimal | DecimalJsLike | number | string
    parentalLeaves: Decimal | DecimalJsLike | number | string
    maternityLeaves: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    category: UserCategoryCreateNestedOneWithoutLeavePolicyInput
  }

  export type LeavePolicyUncheckedCreateInput = {
    id?: string
    categoryId: string
    sickLeaves: Decimal | DecimalJsLike | number | string
    vacationLeaves: Decimal | DecimalJsLike | number | string
    parentalLeaves: Decimal | DecimalJsLike | number | string
    maternityLeaves: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type LeavePolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sickLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vacationLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parentalLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maternityLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: UserCategoryUpdateOneRequiredWithoutLeavePolicyNestedInput
  }

  export type LeavePolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    sickLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vacationLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parentalLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maternityLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeavePolicyCreateManyInput = {
    id?: string
    categoryId: string
    sickLeaves: Decimal | DecimalJsLike | number | string
    vacationLeaves: Decimal | DecimalJsLike | number | string
    parentalLeaves: Decimal | DecimalJsLike | number | string
    maternityLeaves: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type LeavePolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sickLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vacationLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parentalLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maternityLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeavePolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    sickLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vacationLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parentalLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maternityLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveCreateInput = {
    id?: string
    type: $Enums.LeaveType
    userId: string
    message?: string | null
    effectiveDays?: Decimal | DecimalJsLike | number | string | null
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
  }

  export type LeaveUncheckedCreateInput = {
    id?: string
    type: $Enums.LeaveType
    userId: string
    message?: string | null
    effectiveDays?: Decimal | DecimalJsLike | number | string | null
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
  }

  export type LeaveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    userId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveDays?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    userId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveDays?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveCreateManyInput = {
    id?: string
    type: $Enums.LeaveType
    userId: string
    message?: string | null
    effectiveDays?: Decimal | DecimalJsLike | number | string | null
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
  }

  export type LeaveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    userId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveDays?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    userId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveDays?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserScheduleCreateInput = {
    id?: string
    userId: string
    workingDay: string
    startTime: string
    endTime: string
    createdAt?: Date | string
  }

  export type UserScheduleUncheckedCreateInput = {
    id?: string
    userId: string
    workingDay: string
    startTime: string
    endTime: string
    createdAt?: Date | string
  }

  export type UserScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workingDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workingDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserScheduleCreateManyInput = {
    id?: string
    userId: string
    workingDay: string
    startTime: string
    endTime: string
    createdAt?: Date | string
  }

  export type UserScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workingDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workingDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeEntryCreateInput = {
    id?: string
    userId: string
    date: Date | string
    loginTime?: Date | string | null
    logoutTime?: Date | string | null
    createdAt?: Date | string
    breaks?: BreakCreateNestedManyWithoutTimeEntryInput
  }

  export type TimeEntryUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    loginTime?: Date | string | null
    logoutTime?: Date | string | null
    createdAt?: Date | string
    breaks?: BreakUncheckedCreateNestedManyWithoutTimeEntryInput
  }

  export type TimeEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    loginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logoutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    breaks?: BreakUpdateManyWithoutTimeEntryNestedInput
  }

  export type TimeEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    loginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logoutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    breaks?: BreakUncheckedUpdateManyWithoutTimeEntryNestedInput
  }

  export type TimeEntryCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    loginTime?: Date | string | null
    logoutTime?: Date | string | null
    createdAt?: Date | string
  }

  export type TimeEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    loginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logoutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    loginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logoutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreakCreateInput = {
    id?: string
    breakStart: Date | string
    breakEnd?: Date | string | null
    timeEntry: TimeEntryCreateNestedOneWithoutBreaksInput
  }

  export type BreakUncheckedCreateInput = {
    id?: string
    timeEntryId: string
    breakStart: Date | string
    breakEnd?: Date | string | null
  }

  export type BreakUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    breakStart?: DateTimeFieldUpdateOperationsInput | Date | string
    breakEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeEntry?: TimeEntryUpdateOneRequiredWithoutBreaksNestedInput
  }

  export type BreakUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeEntryId?: StringFieldUpdateOperationsInput | string
    breakStart?: DateTimeFieldUpdateOperationsInput | Date | string
    breakEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BreakCreateManyInput = {
    id?: string
    timeEntryId: string
    breakStart: Date | string
    breakEnd?: Date | string | null
  }

  export type BreakUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    breakStart?: DateTimeFieldUpdateOperationsInput | Date | string
    breakEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BreakUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeEntryId?: StringFieldUpdateOperationsInput | string
    breakStart?: DateTimeFieldUpdateOperationsInput | Date | string
    breakEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserStreakCreateInput = {
    id?: string
    userId: string
    currentStreak?: number
    lastLoginDate: Date | string
    updatedAt?: Date | string
  }

  export type UserStreakUncheckedCreateInput = {
    id?: string
    userId: string
    currentStreak?: number
    lastLoginDate: Date | string
    updatedAt?: Date | string
  }

  export type UserStreakUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStreakUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStreakCreateManyInput = {
    id?: string
    userId: string
    currentStreak?: number
    lastLoginDate: Date | string
    updatedAt?: Date | string
  }

  export type UserStreakUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStreakUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NqlFunctionMappingCreateInput = {
    id?: string
    nlq: string
    function: string
    input: JsonNullValueInput | InputJsonValue
    cases?: JsonNullValueInput | InputJsonValue
  }

  export type NqlFunctionMappingUncheckedCreateInput = {
    id?: string
    nlq: string
    function: string
    input: JsonNullValueInput | InputJsonValue
    cases?: JsonNullValueInput | InputJsonValue
  }

  export type NqlFunctionMappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nlq?: StringFieldUpdateOperationsInput | string
    function?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    cases?: JsonNullValueInput | InputJsonValue
  }

  export type NqlFunctionMappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nlq?: StringFieldUpdateOperationsInput | string
    function?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    cases?: JsonNullValueInput | InputJsonValue
  }

  export type NqlFunctionMappingCreateManyInput = {
    id?: string
    nlq: string
    function: string
    input: JsonNullValueInput | InputJsonValue
    cases?: JsonNullValueInput | InputJsonValue
  }

  export type NqlFunctionMappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nlq?: StringFieldUpdateOperationsInput | string
    function?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    cases?: JsonNullValueInput | InputJsonValue
  }

  export type NqlFunctionMappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nlq?: StringFieldUpdateOperationsInput | string
    function?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    cases?: JsonNullValueInput | InputJsonValue
  }

  export type NlqSqlMappingCreateInput = {
    id?: string
    nlq: string
    sql: string
    cases?: JsonNullValueInput | InputJsonValue
  }

  export type NlqSqlMappingUncheckedCreateInput = {
    id?: string
    nlq: string
    sql: string
    cases?: JsonNullValueInput | InputJsonValue
  }

  export type NlqSqlMappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nlq?: StringFieldUpdateOperationsInput | string
    sql?: StringFieldUpdateOperationsInput | string
    cases?: JsonNullValueInput | InputJsonValue
  }

  export type NlqSqlMappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nlq?: StringFieldUpdateOperationsInput | string
    sql?: StringFieldUpdateOperationsInput | string
    cases?: JsonNullValueInput | InputJsonValue
  }

  export type NlqSqlMappingCreateManyInput = {
    id?: string
    nlq: string
    sql: string
    cases?: JsonNullValueInput | InputJsonValue
  }

  export type NlqSqlMappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nlq?: StringFieldUpdateOperationsInput | string
    sql?: StringFieldUpdateOperationsInput | string
    cases?: JsonNullValueInput | InputJsonValue
  }

  export type NlqSqlMappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nlq?: StringFieldUpdateOperationsInput | string
    sql?: StringFieldUpdateOperationsInput | string
    cases?: JsonNullValueInput | InputJsonValue
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

  export type EnumorganisationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.organisationType | EnumorganisationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.organisationType[] | ListEnumorganisationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.organisationType[] | ListEnumorganisationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumorganisationTypeFilter<$PrismaModel> | $Enums.organisationType
  }

  export type organisationCountOrderByAggregateInput = {
    orgId?: SortOrder
    type?: SortOrder
  }

  export type organisationMaxOrderByAggregateInput = {
    orgId?: SortOrder
    type?: SortOrder
  }

  export type organisationMinOrderByAggregateInput = {
    orgId?: SortOrder
    type?: SortOrder
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

  export type EnumorganisationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.organisationType | EnumorganisationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.organisationType[] | ListEnumorganisationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.organisationType[] | ListEnumorganisationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumorganisationTypeWithAggregatesFilter<$PrismaModel> | $Enums.organisationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorganisationTypeFilter<$PrismaModel>
    _max?: NestedEnumorganisationTypeFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type UserCategoryRelationFilter = {
    is?: UserCategoryWhereInput
    isNot?: UserCategoryWhereInput
  }

  export type UserCategoryLinkUpCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCategoryLinkUpMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCategoryLinkUpMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UserLeavesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sickLeaves?: SortOrder
    vacationLeaves?: SortOrder
    parentalLeaves?: SortOrder
    maternityLeaves?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLeavesAvgOrderByAggregateInput = {
    sickLeaves?: SortOrder
    vacationLeaves?: SortOrder
    parentalLeaves?: SortOrder
    maternityLeaves?: SortOrder
  }

  export type UserLeavesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sickLeaves?: SortOrder
    vacationLeaves?: SortOrder
    parentalLeaves?: SortOrder
    maternityLeaves?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLeavesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sickLeaves?: SortOrder
    vacationLeaves?: SortOrder
    parentalLeaves?: SortOrder
    maternityLeaves?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLeavesSumOrderByAggregateInput = {
    sickLeaves?: SortOrder
    vacationLeaves?: SortOrder
    parentalLeaves?: SortOrder
    maternityLeaves?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type HolidayRelationFilter = {
    is?: HolidayWhereInput
    isNot?: HolidayWhereInput
  }

  export type UserHolidayCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    holidayId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserHolidayMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    holidayId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserHolidayMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    holidayId?: SortOrder
    createdAt?: SortOrder
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

  export type UserCategoryLinkUpListRelationFilter = {
    every?: UserCategoryLinkUpWhereInput
    some?: UserCategoryLinkUpWhereInput
    none?: UserCategoryLinkUpWhereInput
  }

  export type HolidayListRelationFilter = {
    every?: HolidayWhereInput
    some?: HolidayWhereInput
    none?: HolidayWhereInput
  }

  export type LeavePolicyNullableRelationFilter = {
    is?: LeavePolicyWhereInput | null
    isNot?: LeavePolicyWhereInput | null
  }

  export type UserCategoryLinkUpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HolidayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    optionalHolidays?: SortOrder
  }

  export type UserCategoryAvgOrderByAggregateInput = {
    optionalHolidays?: SortOrder
  }

  export type UserCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    optionalHolidays?: SortOrder
  }

  export type UserCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    optionalHolidays?: SortOrder
  }

  export type UserCategorySumOrderByAggregateInput = {
    optionalHolidays?: SortOrder
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

  export type EnumHolidayTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HolidayType | EnumHolidayTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHolidayTypeFilter<$PrismaModel> | $Enums.HolidayType
  }

  export type UserCategoryListRelationFilter = {
    every?: UserCategoryWhereInput
    some?: UserCategoryWhereInput
    none?: UserCategoryWhereInput
  }

  export type UserHolidayListRelationFilter = {
    every?: UserHolidayWhereInput
    some?: UserHolidayWhereInput
    none?: UserHolidayWhereInput
  }

  export type UserCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserHolidayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HolidayCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type HolidayMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type HolidayMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumHolidayTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HolidayType | EnumHolidayTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHolidayTypeWithAggregatesFilter<$PrismaModel> | $Enums.HolidayType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHolidayTypeFilter<$PrismaModel>
    _max?: NestedEnumHolidayTypeFilter<$PrismaModel>
  }

  export type LeavePolicyCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    sickLeaves?: SortOrder
    vacationLeaves?: SortOrder
    parentalLeaves?: SortOrder
    maternityLeaves?: SortOrder
    createdAt?: SortOrder
  }

  export type LeavePolicyAvgOrderByAggregateInput = {
    sickLeaves?: SortOrder
    vacationLeaves?: SortOrder
    parentalLeaves?: SortOrder
    maternityLeaves?: SortOrder
  }

  export type LeavePolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    sickLeaves?: SortOrder
    vacationLeaves?: SortOrder
    parentalLeaves?: SortOrder
    maternityLeaves?: SortOrder
    createdAt?: SortOrder
  }

  export type LeavePolicyMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    sickLeaves?: SortOrder
    vacationLeaves?: SortOrder
    parentalLeaves?: SortOrder
    maternityLeaves?: SortOrder
    createdAt?: SortOrder
  }

  export type LeavePolicySumOrderByAggregateInput = {
    sickLeaves?: SortOrder
    vacationLeaves?: SortOrder
    parentalLeaves?: SortOrder
    maternityLeaves?: SortOrder
  }

  export type EnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeaveCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    effectiveDays?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaveAvgOrderByAggregateInput = {
    effectiveDays?: SortOrder
  }

  export type LeaveMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    effectiveDays?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaveMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    effectiveDays?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaveSumOrderByAggregateInput = {
    effectiveDays?: SortOrder
  }

  export type EnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveStatusFilter<$PrismaModel>
  }

  export type UserScheduleUserIdWorkingDayCompoundUniqueInput = {
    userId: string
    workingDay: string
  }

  export type UserScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workingDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workingDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workingDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
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

  export type BreakListRelationFilter = {
    every?: BreakWhereInput
    some?: BreakWhereInput
    none?: BreakWhereInput
  }

  export type BreakOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimeEntryUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type TimeEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    loginTime?: SortOrder
    logoutTime?: SortOrder
    createdAt?: SortOrder
  }

  export type TimeEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    loginTime?: SortOrder
    logoutTime?: SortOrder
    createdAt?: SortOrder
  }

  export type TimeEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    loginTime?: SortOrder
    logoutTime?: SortOrder
    createdAt?: SortOrder
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

  export type TimeEntryRelationFilter = {
    is?: TimeEntryWhereInput
    isNot?: TimeEntryWhereInput
  }

  export type BreakCountOrderByAggregateInput = {
    id?: SortOrder
    timeEntryId?: SortOrder
    breakStart?: SortOrder
    breakEnd?: SortOrder
  }

  export type BreakMaxOrderByAggregateInput = {
    id?: SortOrder
    timeEntryId?: SortOrder
    breakStart?: SortOrder
    breakEnd?: SortOrder
  }

  export type BreakMinOrderByAggregateInput = {
    id?: SortOrder
    timeEntryId?: SortOrder
    breakStart?: SortOrder
    breakEnd?: SortOrder
  }

  export type UserStreakCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    lastLoginDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStreakAvgOrderByAggregateInput = {
    currentStreak?: SortOrder
  }

  export type UserStreakMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    lastLoginDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStreakMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    lastLoginDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStreakSumOrderByAggregateInput = {
    currentStreak?: SortOrder
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

  export type NqlFunctionMappingCountOrderByAggregateInput = {
    id?: SortOrder
    nlq?: SortOrder
    function?: SortOrder
    input?: SortOrder
    cases?: SortOrder
  }

  export type NqlFunctionMappingMaxOrderByAggregateInput = {
    id?: SortOrder
    nlq?: SortOrder
    function?: SortOrder
  }

  export type NqlFunctionMappingMinOrderByAggregateInput = {
    id?: SortOrder
    nlq?: SortOrder
    function?: SortOrder
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

  export type NlqSqlMappingCountOrderByAggregateInput = {
    id?: SortOrder
    nlq?: SortOrder
    sql?: SortOrder
    cases?: SortOrder
  }

  export type NlqSqlMappingMaxOrderByAggregateInput = {
    id?: SortOrder
    nlq?: SortOrder
    sql?: SortOrder
  }

  export type NlqSqlMappingMinOrderByAggregateInput = {
    id?: SortOrder
    nlq?: SortOrder
    sql?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumorganisationTypeFieldUpdateOperationsInput = {
    set?: $Enums.organisationType
  }

  export type UserCategoryCreateNestedOneWithoutUsersInput = {
    create?: XOR<UserCategoryCreateWithoutUsersInput, UserCategoryUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserCategoryCreateOrConnectWithoutUsersInput
    connect?: UserCategoryWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserCategoryUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<UserCategoryCreateWithoutUsersInput, UserCategoryUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserCategoryCreateOrConnectWithoutUsersInput
    upsert?: UserCategoryUpsertWithoutUsersInput
    connect?: UserCategoryWhereUniqueInput
    update?: XOR<XOR<UserCategoryUpdateToOneWithWhereWithoutUsersInput, UserCategoryUpdateWithoutUsersInput>, UserCategoryUncheckedUpdateWithoutUsersInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type HolidayCreateNestedOneWithoutUserHolidaysInput = {
    create?: XOR<HolidayCreateWithoutUserHolidaysInput, HolidayUncheckedCreateWithoutUserHolidaysInput>
    connectOrCreate?: HolidayCreateOrConnectWithoutUserHolidaysInput
    connect?: HolidayWhereUniqueInput
  }

  export type HolidayUpdateOneRequiredWithoutUserHolidaysNestedInput = {
    create?: XOR<HolidayCreateWithoutUserHolidaysInput, HolidayUncheckedCreateWithoutUserHolidaysInput>
    connectOrCreate?: HolidayCreateOrConnectWithoutUserHolidaysInput
    upsert?: HolidayUpsertWithoutUserHolidaysInput
    connect?: HolidayWhereUniqueInput
    update?: XOR<XOR<HolidayUpdateToOneWithWhereWithoutUserHolidaysInput, HolidayUpdateWithoutUserHolidaysInput>, HolidayUncheckedUpdateWithoutUserHolidaysInput>
  }

  export type UserCategoryLinkUpCreateNestedManyWithoutCategoryInput = {
    create?: XOR<UserCategoryLinkUpCreateWithoutCategoryInput, UserCategoryLinkUpUncheckedCreateWithoutCategoryInput> | UserCategoryLinkUpCreateWithoutCategoryInput[] | UserCategoryLinkUpUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: UserCategoryLinkUpCreateOrConnectWithoutCategoryInput | UserCategoryLinkUpCreateOrConnectWithoutCategoryInput[]
    createMany?: UserCategoryLinkUpCreateManyCategoryInputEnvelope
    connect?: UserCategoryLinkUpWhereUniqueInput | UserCategoryLinkUpWhereUniqueInput[]
  }

  export type HolidayCreateNestedManyWithoutUserCategoriesInput = {
    create?: XOR<HolidayCreateWithoutUserCategoriesInput, HolidayUncheckedCreateWithoutUserCategoriesInput> | HolidayCreateWithoutUserCategoriesInput[] | HolidayUncheckedCreateWithoutUserCategoriesInput[]
    connectOrCreate?: HolidayCreateOrConnectWithoutUserCategoriesInput | HolidayCreateOrConnectWithoutUserCategoriesInput[]
    connect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
  }

  export type LeavePolicyCreateNestedOneWithoutCategoryInput = {
    create?: XOR<LeavePolicyCreateWithoutCategoryInput, LeavePolicyUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: LeavePolicyCreateOrConnectWithoutCategoryInput
    connect?: LeavePolicyWhereUniqueInput
  }

  export type UserCategoryLinkUpUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<UserCategoryLinkUpCreateWithoutCategoryInput, UserCategoryLinkUpUncheckedCreateWithoutCategoryInput> | UserCategoryLinkUpCreateWithoutCategoryInput[] | UserCategoryLinkUpUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: UserCategoryLinkUpCreateOrConnectWithoutCategoryInput | UserCategoryLinkUpCreateOrConnectWithoutCategoryInput[]
    createMany?: UserCategoryLinkUpCreateManyCategoryInputEnvelope
    connect?: UserCategoryLinkUpWhereUniqueInput | UserCategoryLinkUpWhereUniqueInput[]
  }

  export type HolidayUncheckedCreateNestedManyWithoutUserCategoriesInput = {
    create?: XOR<HolidayCreateWithoutUserCategoriesInput, HolidayUncheckedCreateWithoutUserCategoriesInput> | HolidayCreateWithoutUserCategoriesInput[] | HolidayUncheckedCreateWithoutUserCategoriesInput[]
    connectOrCreate?: HolidayCreateOrConnectWithoutUserCategoriesInput | HolidayCreateOrConnectWithoutUserCategoriesInput[]
    connect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
  }

  export type LeavePolicyUncheckedCreateNestedOneWithoutCategoryInput = {
    create?: XOR<LeavePolicyCreateWithoutCategoryInput, LeavePolicyUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: LeavePolicyCreateOrConnectWithoutCategoryInput
    connect?: LeavePolicyWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCategoryLinkUpUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<UserCategoryLinkUpCreateWithoutCategoryInput, UserCategoryLinkUpUncheckedCreateWithoutCategoryInput> | UserCategoryLinkUpCreateWithoutCategoryInput[] | UserCategoryLinkUpUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: UserCategoryLinkUpCreateOrConnectWithoutCategoryInput | UserCategoryLinkUpCreateOrConnectWithoutCategoryInput[]
    upsert?: UserCategoryLinkUpUpsertWithWhereUniqueWithoutCategoryInput | UserCategoryLinkUpUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: UserCategoryLinkUpCreateManyCategoryInputEnvelope
    set?: UserCategoryLinkUpWhereUniqueInput | UserCategoryLinkUpWhereUniqueInput[]
    disconnect?: UserCategoryLinkUpWhereUniqueInput | UserCategoryLinkUpWhereUniqueInput[]
    delete?: UserCategoryLinkUpWhereUniqueInput | UserCategoryLinkUpWhereUniqueInput[]
    connect?: UserCategoryLinkUpWhereUniqueInput | UserCategoryLinkUpWhereUniqueInput[]
    update?: UserCategoryLinkUpUpdateWithWhereUniqueWithoutCategoryInput | UserCategoryLinkUpUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: UserCategoryLinkUpUpdateManyWithWhereWithoutCategoryInput | UserCategoryLinkUpUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: UserCategoryLinkUpScalarWhereInput | UserCategoryLinkUpScalarWhereInput[]
  }

  export type HolidayUpdateManyWithoutUserCategoriesNestedInput = {
    create?: XOR<HolidayCreateWithoutUserCategoriesInput, HolidayUncheckedCreateWithoutUserCategoriesInput> | HolidayCreateWithoutUserCategoriesInput[] | HolidayUncheckedCreateWithoutUserCategoriesInput[]
    connectOrCreate?: HolidayCreateOrConnectWithoutUserCategoriesInput | HolidayCreateOrConnectWithoutUserCategoriesInput[]
    upsert?: HolidayUpsertWithWhereUniqueWithoutUserCategoriesInput | HolidayUpsertWithWhereUniqueWithoutUserCategoriesInput[]
    set?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    disconnect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    delete?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    connect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    update?: HolidayUpdateWithWhereUniqueWithoutUserCategoriesInput | HolidayUpdateWithWhereUniqueWithoutUserCategoriesInput[]
    updateMany?: HolidayUpdateManyWithWhereWithoutUserCategoriesInput | HolidayUpdateManyWithWhereWithoutUserCategoriesInput[]
    deleteMany?: HolidayScalarWhereInput | HolidayScalarWhereInput[]
  }

  export type LeavePolicyUpdateOneWithoutCategoryNestedInput = {
    create?: XOR<LeavePolicyCreateWithoutCategoryInput, LeavePolicyUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: LeavePolicyCreateOrConnectWithoutCategoryInput
    upsert?: LeavePolicyUpsertWithoutCategoryInput
    disconnect?: LeavePolicyWhereInput | boolean
    delete?: LeavePolicyWhereInput | boolean
    connect?: LeavePolicyWhereUniqueInput
    update?: XOR<XOR<LeavePolicyUpdateToOneWithWhereWithoutCategoryInput, LeavePolicyUpdateWithoutCategoryInput>, LeavePolicyUncheckedUpdateWithoutCategoryInput>
  }

  export type UserCategoryLinkUpUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<UserCategoryLinkUpCreateWithoutCategoryInput, UserCategoryLinkUpUncheckedCreateWithoutCategoryInput> | UserCategoryLinkUpCreateWithoutCategoryInput[] | UserCategoryLinkUpUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: UserCategoryLinkUpCreateOrConnectWithoutCategoryInput | UserCategoryLinkUpCreateOrConnectWithoutCategoryInput[]
    upsert?: UserCategoryLinkUpUpsertWithWhereUniqueWithoutCategoryInput | UserCategoryLinkUpUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: UserCategoryLinkUpCreateManyCategoryInputEnvelope
    set?: UserCategoryLinkUpWhereUniqueInput | UserCategoryLinkUpWhereUniqueInput[]
    disconnect?: UserCategoryLinkUpWhereUniqueInput | UserCategoryLinkUpWhereUniqueInput[]
    delete?: UserCategoryLinkUpWhereUniqueInput | UserCategoryLinkUpWhereUniqueInput[]
    connect?: UserCategoryLinkUpWhereUniqueInput | UserCategoryLinkUpWhereUniqueInput[]
    update?: UserCategoryLinkUpUpdateWithWhereUniqueWithoutCategoryInput | UserCategoryLinkUpUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: UserCategoryLinkUpUpdateManyWithWhereWithoutCategoryInput | UserCategoryLinkUpUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: UserCategoryLinkUpScalarWhereInput | UserCategoryLinkUpScalarWhereInput[]
  }

  export type HolidayUncheckedUpdateManyWithoutUserCategoriesNestedInput = {
    create?: XOR<HolidayCreateWithoutUserCategoriesInput, HolidayUncheckedCreateWithoutUserCategoriesInput> | HolidayCreateWithoutUserCategoriesInput[] | HolidayUncheckedCreateWithoutUserCategoriesInput[]
    connectOrCreate?: HolidayCreateOrConnectWithoutUserCategoriesInput | HolidayCreateOrConnectWithoutUserCategoriesInput[]
    upsert?: HolidayUpsertWithWhereUniqueWithoutUserCategoriesInput | HolidayUpsertWithWhereUniqueWithoutUserCategoriesInput[]
    set?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    disconnect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    delete?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    connect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    update?: HolidayUpdateWithWhereUniqueWithoutUserCategoriesInput | HolidayUpdateWithWhereUniqueWithoutUserCategoriesInput[]
    updateMany?: HolidayUpdateManyWithWhereWithoutUserCategoriesInput | HolidayUpdateManyWithWhereWithoutUserCategoriesInput[]
    deleteMany?: HolidayScalarWhereInput | HolidayScalarWhereInput[]
  }

  export type LeavePolicyUncheckedUpdateOneWithoutCategoryNestedInput = {
    create?: XOR<LeavePolicyCreateWithoutCategoryInput, LeavePolicyUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: LeavePolicyCreateOrConnectWithoutCategoryInput
    upsert?: LeavePolicyUpsertWithoutCategoryInput
    disconnect?: LeavePolicyWhereInput | boolean
    delete?: LeavePolicyWhereInput | boolean
    connect?: LeavePolicyWhereUniqueInput
    update?: XOR<XOR<LeavePolicyUpdateToOneWithWhereWithoutCategoryInput, LeavePolicyUpdateWithoutCategoryInput>, LeavePolicyUncheckedUpdateWithoutCategoryInput>
  }

  export type UserCategoryCreateNestedManyWithoutHolidaysInput = {
    create?: XOR<UserCategoryCreateWithoutHolidaysInput, UserCategoryUncheckedCreateWithoutHolidaysInput> | UserCategoryCreateWithoutHolidaysInput[] | UserCategoryUncheckedCreateWithoutHolidaysInput[]
    connectOrCreate?: UserCategoryCreateOrConnectWithoutHolidaysInput | UserCategoryCreateOrConnectWithoutHolidaysInput[]
    connect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
  }

  export type UserHolidayCreateNestedManyWithoutHolidayInput = {
    create?: XOR<UserHolidayCreateWithoutHolidayInput, UserHolidayUncheckedCreateWithoutHolidayInput> | UserHolidayCreateWithoutHolidayInput[] | UserHolidayUncheckedCreateWithoutHolidayInput[]
    connectOrCreate?: UserHolidayCreateOrConnectWithoutHolidayInput | UserHolidayCreateOrConnectWithoutHolidayInput[]
    createMany?: UserHolidayCreateManyHolidayInputEnvelope
    connect?: UserHolidayWhereUniqueInput | UserHolidayWhereUniqueInput[]
  }

  export type UserCategoryUncheckedCreateNestedManyWithoutHolidaysInput = {
    create?: XOR<UserCategoryCreateWithoutHolidaysInput, UserCategoryUncheckedCreateWithoutHolidaysInput> | UserCategoryCreateWithoutHolidaysInput[] | UserCategoryUncheckedCreateWithoutHolidaysInput[]
    connectOrCreate?: UserCategoryCreateOrConnectWithoutHolidaysInput | UserCategoryCreateOrConnectWithoutHolidaysInput[]
    connect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
  }

  export type UserHolidayUncheckedCreateNestedManyWithoutHolidayInput = {
    create?: XOR<UserHolidayCreateWithoutHolidayInput, UserHolidayUncheckedCreateWithoutHolidayInput> | UserHolidayCreateWithoutHolidayInput[] | UserHolidayUncheckedCreateWithoutHolidayInput[]
    connectOrCreate?: UserHolidayCreateOrConnectWithoutHolidayInput | UserHolidayCreateOrConnectWithoutHolidayInput[]
    createMany?: UserHolidayCreateManyHolidayInputEnvelope
    connect?: UserHolidayWhereUniqueInput | UserHolidayWhereUniqueInput[]
  }

  export type EnumHolidayTypeFieldUpdateOperationsInput = {
    set?: $Enums.HolidayType
  }

  export type UserCategoryUpdateManyWithoutHolidaysNestedInput = {
    create?: XOR<UserCategoryCreateWithoutHolidaysInput, UserCategoryUncheckedCreateWithoutHolidaysInput> | UserCategoryCreateWithoutHolidaysInput[] | UserCategoryUncheckedCreateWithoutHolidaysInput[]
    connectOrCreate?: UserCategoryCreateOrConnectWithoutHolidaysInput | UserCategoryCreateOrConnectWithoutHolidaysInput[]
    upsert?: UserCategoryUpsertWithWhereUniqueWithoutHolidaysInput | UserCategoryUpsertWithWhereUniqueWithoutHolidaysInput[]
    set?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    disconnect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    delete?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    connect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    update?: UserCategoryUpdateWithWhereUniqueWithoutHolidaysInput | UserCategoryUpdateWithWhereUniqueWithoutHolidaysInput[]
    updateMany?: UserCategoryUpdateManyWithWhereWithoutHolidaysInput | UserCategoryUpdateManyWithWhereWithoutHolidaysInput[]
    deleteMany?: UserCategoryScalarWhereInput | UserCategoryScalarWhereInput[]
  }

  export type UserHolidayUpdateManyWithoutHolidayNestedInput = {
    create?: XOR<UserHolidayCreateWithoutHolidayInput, UserHolidayUncheckedCreateWithoutHolidayInput> | UserHolidayCreateWithoutHolidayInput[] | UserHolidayUncheckedCreateWithoutHolidayInput[]
    connectOrCreate?: UserHolidayCreateOrConnectWithoutHolidayInput | UserHolidayCreateOrConnectWithoutHolidayInput[]
    upsert?: UserHolidayUpsertWithWhereUniqueWithoutHolidayInput | UserHolidayUpsertWithWhereUniqueWithoutHolidayInput[]
    createMany?: UserHolidayCreateManyHolidayInputEnvelope
    set?: UserHolidayWhereUniqueInput | UserHolidayWhereUniqueInput[]
    disconnect?: UserHolidayWhereUniqueInput | UserHolidayWhereUniqueInput[]
    delete?: UserHolidayWhereUniqueInput | UserHolidayWhereUniqueInput[]
    connect?: UserHolidayWhereUniqueInput | UserHolidayWhereUniqueInput[]
    update?: UserHolidayUpdateWithWhereUniqueWithoutHolidayInput | UserHolidayUpdateWithWhereUniqueWithoutHolidayInput[]
    updateMany?: UserHolidayUpdateManyWithWhereWithoutHolidayInput | UserHolidayUpdateManyWithWhereWithoutHolidayInput[]
    deleteMany?: UserHolidayScalarWhereInput | UserHolidayScalarWhereInput[]
  }

  export type UserCategoryUncheckedUpdateManyWithoutHolidaysNestedInput = {
    create?: XOR<UserCategoryCreateWithoutHolidaysInput, UserCategoryUncheckedCreateWithoutHolidaysInput> | UserCategoryCreateWithoutHolidaysInput[] | UserCategoryUncheckedCreateWithoutHolidaysInput[]
    connectOrCreate?: UserCategoryCreateOrConnectWithoutHolidaysInput | UserCategoryCreateOrConnectWithoutHolidaysInput[]
    upsert?: UserCategoryUpsertWithWhereUniqueWithoutHolidaysInput | UserCategoryUpsertWithWhereUniqueWithoutHolidaysInput[]
    set?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    disconnect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    delete?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    connect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    update?: UserCategoryUpdateWithWhereUniqueWithoutHolidaysInput | UserCategoryUpdateWithWhereUniqueWithoutHolidaysInput[]
    updateMany?: UserCategoryUpdateManyWithWhereWithoutHolidaysInput | UserCategoryUpdateManyWithWhereWithoutHolidaysInput[]
    deleteMany?: UserCategoryScalarWhereInput | UserCategoryScalarWhereInput[]
  }

  export type UserHolidayUncheckedUpdateManyWithoutHolidayNestedInput = {
    create?: XOR<UserHolidayCreateWithoutHolidayInput, UserHolidayUncheckedCreateWithoutHolidayInput> | UserHolidayCreateWithoutHolidayInput[] | UserHolidayUncheckedCreateWithoutHolidayInput[]
    connectOrCreate?: UserHolidayCreateOrConnectWithoutHolidayInput | UserHolidayCreateOrConnectWithoutHolidayInput[]
    upsert?: UserHolidayUpsertWithWhereUniqueWithoutHolidayInput | UserHolidayUpsertWithWhereUniqueWithoutHolidayInput[]
    createMany?: UserHolidayCreateManyHolidayInputEnvelope
    set?: UserHolidayWhereUniqueInput | UserHolidayWhereUniqueInput[]
    disconnect?: UserHolidayWhereUniqueInput | UserHolidayWhereUniqueInput[]
    delete?: UserHolidayWhereUniqueInput | UserHolidayWhereUniqueInput[]
    connect?: UserHolidayWhereUniqueInput | UserHolidayWhereUniqueInput[]
    update?: UserHolidayUpdateWithWhereUniqueWithoutHolidayInput | UserHolidayUpdateWithWhereUniqueWithoutHolidayInput[]
    updateMany?: UserHolidayUpdateManyWithWhereWithoutHolidayInput | UserHolidayUpdateManyWithWhereWithoutHolidayInput[]
    deleteMany?: UserHolidayScalarWhereInput | UserHolidayScalarWhereInput[]
  }

  export type UserCategoryCreateNestedOneWithoutLeavePolicyInput = {
    create?: XOR<UserCategoryCreateWithoutLeavePolicyInput, UserCategoryUncheckedCreateWithoutLeavePolicyInput>
    connectOrCreate?: UserCategoryCreateOrConnectWithoutLeavePolicyInput
    connect?: UserCategoryWhereUniqueInput
  }

  export type UserCategoryUpdateOneRequiredWithoutLeavePolicyNestedInput = {
    create?: XOR<UserCategoryCreateWithoutLeavePolicyInput, UserCategoryUncheckedCreateWithoutLeavePolicyInput>
    connectOrCreate?: UserCategoryCreateOrConnectWithoutLeavePolicyInput
    upsert?: UserCategoryUpsertWithoutLeavePolicyInput
    connect?: UserCategoryWhereUniqueInput
    update?: XOR<XOR<UserCategoryUpdateToOneWithWhereWithoutLeavePolicyInput, UserCategoryUpdateWithoutLeavePolicyInput>, UserCategoryUncheckedUpdateWithoutLeavePolicyInput>
  }

  export type EnumLeaveTypeFieldUpdateOperationsInput = {
    set?: $Enums.LeaveType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumLeaveStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeaveStatus
  }

  export type BreakCreateNestedManyWithoutTimeEntryInput = {
    create?: XOR<BreakCreateWithoutTimeEntryInput, BreakUncheckedCreateWithoutTimeEntryInput> | BreakCreateWithoutTimeEntryInput[] | BreakUncheckedCreateWithoutTimeEntryInput[]
    connectOrCreate?: BreakCreateOrConnectWithoutTimeEntryInput | BreakCreateOrConnectWithoutTimeEntryInput[]
    createMany?: BreakCreateManyTimeEntryInputEnvelope
    connect?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
  }

  export type BreakUncheckedCreateNestedManyWithoutTimeEntryInput = {
    create?: XOR<BreakCreateWithoutTimeEntryInput, BreakUncheckedCreateWithoutTimeEntryInput> | BreakCreateWithoutTimeEntryInput[] | BreakUncheckedCreateWithoutTimeEntryInput[]
    connectOrCreate?: BreakCreateOrConnectWithoutTimeEntryInput | BreakCreateOrConnectWithoutTimeEntryInput[]
    createMany?: BreakCreateManyTimeEntryInputEnvelope
    connect?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BreakUpdateManyWithoutTimeEntryNestedInput = {
    create?: XOR<BreakCreateWithoutTimeEntryInput, BreakUncheckedCreateWithoutTimeEntryInput> | BreakCreateWithoutTimeEntryInput[] | BreakUncheckedCreateWithoutTimeEntryInput[]
    connectOrCreate?: BreakCreateOrConnectWithoutTimeEntryInput | BreakCreateOrConnectWithoutTimeEntryInput[]
    upsert?: BreakUpsertWithWhereUniqueWithoutTimeEntryInput | BreakUpsertWithWhereUniqueWithoutTimeEntryInput[]
    createMany?: BreakCreateManyTimeEntryInputEnvelope
    set?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
    disconnect?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
    delete?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
    connect?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
    update?: BreakUpdateWithWhereUniqueWithoutTimeEntryInput | BreakUpdateWithWhereUniqueWithoutTimeEntryInput[]
    updateMany?: BreakUpdateManyWithWhereWithoutTimeEntryInput | BreakUpdateManyWithWhereWithoutTimeEntryInput[]
    deleteMany?: BreakScalarWhereInput | BreakScalarWhereInput[]
  }

  export type BreakUncheckedUpdateManyWithoutTimeEntryNestedInput = {
    create?: XOR<BreakCreateWithoutTimeEntryInput, BreakUncheckedCreateWithoutTimeEntryInput> | BreakCreateWithoutTimeEntryInput[] | BreakUncheckedCreateWithoutTimeEntryInput[]
    connectOrCreate?: BreakCreateOrConnectWithoutTimeEntryInput | BreakCreateOrConnectWithoutTimeEntryInput[]
    upsert?: BreakUpsertWithWhereUniqueWithoutTimeEntryInput | BreakUpsertWithWhereUniqueWithoutTimeEntryInput[]
    createMany?: BreakCreateManyTimeEntryInputEnvelope
    set?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
    disconnect?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
    delete?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
    connect?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
    update?: BreakUpdateWithWhereUniqueWithoutTimeEntryInput | BreakUpdateWithWhereUniqueWithoutTimeEntryInput[]
    updateMany?: BreakUpdateManyWithWhereWithoutTimeEntryInput | BreakUpdateManyWithWhereWithoutTimeEntryInput[]
    deleteMany?: BreakScalarWhereInput | BreakScalarWhereInput[]
  }

  export type TimeEntryCreateNestedOneWithoutBreaksInput = {
    create?: XOR<TimeEntryCreateWithoutBreaksInput, TimeEntryUncheckedCreateWithoutBreaksInput>
    connectOrCreate?: TimeEntryCreateOrConnectWithoutBreaksInput
    connect?: TimeEntryWhereUniqueInput
  }

  export type TimeEntryUpdateOneRequiredWithoutBreaksNestedInput = {
    create?: XOR<TimeEntryCreateWithoutBreaksInput, TimeEntryUncheckedCreateWithoutBreaksInput>
    connectOrCreate?: TimeEntryCreateOrConnectWithoutBreaksInput
    upsert?: TimeEntryUpsertWithoutBreaksInput
    connect?: TimeEntryWhereUniqueInput
    update?: XOR<XOR<TimeEntryUpdateToOneWithWhereWithoutBreaksInput, TimeEntryUpdateWithoutBreaksInput>, TimeEntryUncheckedUpdateWithoutBreaksInput>
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

  export type NestedEnumorganisationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.organisationType | EnumorganisationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.organisationType[] | ListEnumorganisationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.organisationType[] | ListEnumorganisationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumorganisationTypeFilter<$PrismaModel> | $Enums.organisationType
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

  export type NestedEnumorganisationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.organisationType | EnumorganisationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.organisationType[] | ListEnumorganisationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.organisationType[] | ListEnumorganisationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumorganisationTypeWithAggregatesFilter<$PrismaModel> | $Enums.organisationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorganisationTypeFilter<$PrismaModel>
    _max?: NestedEnumorganisationTypeFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumHolidayTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HolidayType | EnumHolidayTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHolidayTypeFilter<$PrismaModel> | $Enums.HolidayType
  }

  export type NestedEnumHolidayTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HolidayType | EnumHolidayTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHolidayTypeWithAggregatesFilter<$PrismaModel> | $Enums.HolidayType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHolidayTypeFilter<$PrismaModel>
    _max?: NestedEnumHolidayTypeFilter<$PrismaModel>
  }

  export type NestedEnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus
  }

  export type NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveStatusFilter<$PrismaModel>
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

  export type UserCategoryCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    optionalHolidays?: number
    holidays?: HolidayCreateNestedManyWithoutUserCategoriesInput
    leavePolicy?: LeavePolicyCreateNestedOneWithoutCategoryInput
  }

  export type UserCategoryUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    optionalHolidays?: number
    holidays?: HolidayUncheckedCreateNestedManyWithoutUserCategoriesInput
    leavePolicy?: LeavePolicyUncheckedCreateNestedOneWithoutCategoryInput
  }

  export type UserCategoryCreateOrConnectWithoutUsersInput = {
    where: UserCategoryWhereUniqueInput
    create: XOR<UserCategoryCreateWithoutUsersInput, UserCategoryUncheckedCreateWithoutUsersInput>
  }

  export type UserCategoryUpsertWithoutUsersInput = {
    update: XOR<UserCategoryUpdateWithoutUsersInput, UserCategoryUncheckedUpdateWithoutUsersInput>
    create: XOR<UserCategoryCreateWithoutUsersInput, UserCategoryUncheckedCreateWithoutUsersInput>
    where?: UserCategoryWhereInput
  }

  export type UserCategoryUpdateToOneWithWhereWithoutUsersInput = {
    where?: UserCategoryWhereInput
    data: XOR<UserCategoryUpdateWithoutUsersInput, UserCategoryUncheckedUpdateWithoutUsersInput>
  }

  export type UserCategoryUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    optionalHolidays?: IntFieldUpdateOperationsInput | number
    holidays?: HolidayUpdateManyWithoutUserCategoriesNestedInput
    leavePolicy?: LeavePolicyUpdateOneWithoutCategoryNestedInput
  }

  export type UserCategoryUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    optionalHolidays?: IntFieldUpdateOperationsInput | number
    holidays?: HolidayUncheckedUpdateManyWithoutUserCategoriesNestedInput
    leavePolicy?: LeavePolicyUncheckedUpdateOneWithoutCategoryNestedInput
  }

  export type HolidayCreateWithoutUserHolidaysInput = {
    id?: string
    name: string
    date: Date | string
    type?: $Enums.HolidayType
    createdAt?: Date | string
    userCategories?: UserCategoryCreateNestedManyWithoutHolidaysInput
  }

  export type HolidayUncheckedCreateWithoutUserHolidaysInput = {
    id?: string
    name: string
    date: Date | string
    type?: $Enums.HolidayType
    createdAt?: Date | string
    userCategories?: UserCategoryUncheckedCreateNestedManyWithoutHolidaysInput
  }

  export type HolidayCreateOrConnectWithoutUserHolidaysInput = {
    where: HolidayWhereUniqueInput
    create: XOR<HolidayCreateWithoutUserHolidaysInput, HolidayUncheckedCreateWithoutUserHolidaysInput>
  }

  export type HolidayUpsertWithoutUserHolidaysInput = {
    update: XOR<HolidayUpdateWithoutUserHolidaysInput, HolidayUncheckedUpdateWithoutUserHolidaysInput>
    create: XOR<HolidayCreateWithoutUserHolidaysInput, HolidayUncheckedCreateWithoutUserHolidaysInput>
    where?: HolidayWhereInput
  }

  export type HolidayUpdateToOneWithWhereWithoutUserHolidaysInput = {
    where?: HolidayWhereInput
    data: XOR<HolidayUpdateWithoutUserHolidaysInput, HolidayUncheckedUpdateWithoutUserHolidaysInput>
  }

  export type HolidayUpdateWithoutUserHolidaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCategories?: UserCategoryUpdateManyWithoutHolidaysNestedInput
  }

  export type HolidayUncheckedUpdateWithoutUserHolidaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCategories?: UserCategoryUncheckedUpdateManyWithoutHolidaysNestedInput
  }

  export type UserCategoryLinkUpCreateWithoutCategoryInput = {
    id?: string
    userId: string
    userName?: string
    createdAt?: Date | string
  }

  export type UserCategoryLinkUpUncheckedCreateWithoutCategoryInput = {
    id?: string
    userId: string
    userName?: string
    createdAt?: Date | string
  }

  export type UserCategoryLinkUpCreateOrConnectWithoutCategoryInput = {
    where: UserCategoryLinkUpWhereUniqueInput
    create: XOR<UserCategoryLinkUpCreateWithoutCategoryInput, UserCategoryLinkUpUncheckedCreateWithoutCategoryInput>
  }

  export type UserCategoryLinkUpCreateManyCategoryInputEnvelope = {
    data: UserCategoryLinkUpCreateManyCategoryInput | UserCategoryLinkUpCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type HolidayCreateWithoutUserCategoriesInput = {
    id?: string
    name: string
    date: Date | string
    type?: $Enums.HolidayType
    createdAt?: Date | string
    userHolidays?: UserHolidayCreateNestedManyWithoutHolidayInput
  }

  export type HolidayUncheckedCreateWithoutUserCategoriesInput = {
    id?: string
    name: string
    date: Date | string
    type?: $Enums.HolidayType
    createdAt?: Date | string
    userHolidays?: UserHolidayUncheckedCreateNestedManyWithoutHolidayInput
  }

  export type HolidayCreateOrConnectWithoutUserCategoriesInput = {
    where: HolidayWhereUniqueInput
    create: XOR<HolidayCreateWithoutUserCategoriesInput, HolidayUncheckedCreateWithoutUserCategoriesInput>
  }

  export type LeavePolicyCreateWithoutCategoryInput = {
    id?: string
    sickLeaves: Decimal | DecimalJsLike | number | string
    vacationLeaves: Decimal | DecimalJsLike | number | string
    parentalLeaves: Decimal | DecimalJsLike | number | string
    maternityLeaves: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type LeavePolicyUncheckedCreateWithoutCategoryInput = {
    id?: string
    sickLeaves: Decimal | DecimalJsLike | number | string
    vacationLeaves: Decimal | DecimalJsLike | number | string
    parentalLeaves: Decimal | DecimalJsLike | number | string
    maternityLeaves: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type LeavePolicyCreateOrConnectWithoutCategoryInput = {
    where: LeavePolicyWhereUniqueInput
    create: XOR<LeavePolicyCreateWithoutCategoryInput, LeavePolicyUncheckedCreateWithoutCategoryInput>
  }

  export type UserCategoryLinkUpUpsertWithWhereUniqueWithoutCategoryInput = {
    where: UserCategoryLinkUpWhereUniqueInput
    update: XOR<UserCategoryLinkUpUpdateWithoutCategoryInput, UserCategoryLinkUpUncheckedUpdateWithoutCategoryInput>
    create: XOR<UserCategoryLinkUpCreateWithoutCategoryInput, UserCategoryLinkUpUncheckedCreateWithoutCategoryInput>
  }

  export type UserCategoryLinkUpUpdateWithWhereUniqueWithoutCategoryInput = {
    where: UserCategoryLinkUpWhereUniqueInput
    data: XOR<UserCategoryLinkUpUpdateWithoutCategoryInput, UserCategoryLinkUpUncheckedUpdateWithoutCategoryInput>
  }

  export type UserCategoryLinkUpUpdateManyWithWhereWithoutCategoryInput = {
    where: UserCategoryLinkUpScalarWhereInput
    data: XOR<UserCategoryLinkUpUpdateManyMutationInput, UserCategoryLinkUpUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCategoryLinkUpScalarWhereInput = {
    AND?: UserCategoryLinkUpScalarWhereInput | UserCategoryLinkUpScalarWhereInput[]
    OR?: UserCategoryLinkUpScalarWhereInput[]
    NOT?: UserCategoryLinkUpScalarWhereInput | UserCategoryLinkUpScalarWhereInput[]
    id?: UuidFilter<"UserCategoryLinkUp"> | string
    userId?: UuidFilter<"UserCategoryLinkUp"> | string
    userName?: StringFilter<"UserCategoryLinkUp"> | string
    categoryId?: UuidFilter<"UserCategoryLinkUp"> | string
    createdAt?: DateTimeFilter<"UserCategoryLinkUp"> | Date | string
  }

  export type HolidayUpsertWithWhereUniqueWithoutUserCategoriesInput = {
    where: HolidayWhereUniqueInput
    update: XOR<HolidayUpdateWithoutUserCategoriesInput, HolidayUncheckedUpdateWithoutUserCategoriesInput>
    create: XOR<HolidayCreateWithoutUserCategoriesInput, HolidayUncheckedCreateWithoutUserCategoriesInput>
  }

  export type HolidayUpdateWithWhereUniqueWithoutUserCategoriesInput = {
    where: HolidayWhereUniqueInput
    data: XOR<HolidayUpdateWithoutUserCategoriesInput, HolidayUncheckedUpdateWithoutUserCategoriesInput>
  }

  export type HolidayUpdateManyWithWhereWithoutUserCategoriesInput = {
    where: HolidayScalarWhereInput
    data: XOR<HolidayUpdateManyMutationInput, HolidayUncheckedUpdateManyWithoutUserCategoriesInput>
  }

  export type HolidayScalarWhereInput = {
    AND?: HolidayScalarWhereInput | HolidayScalarWhereInput[]
    OR?: HolidayScalarWhereInput[]
    NOT?: HolidayScalarWhereInput | HolidayScalarWhereInput[]
    id?: UuidFilter<"Holiday"> | string
    name?: StringFilter<"Holiday"> | string
    date?: DateTimeFilter<"Holiday"> | Date | string
    type?: EnumHolidayTypeFilter<"Holiday"> | $Enums.HolidayType
    createdAt?: DateTimeFilter<"Holiday"> | Date | string
  }

  export type LeavePolicyUpsertWithoutCategoryInput = {
    update: XOR<LeavePolicyUpdateWithoutCategoryInput, LeavePolicyUncheckedUpdateWithoutCategoryInput>
    create: XOR<LeavePolicyCreateWithoutCategoryInput, LeavePolicyUncheckedCreateWithoutCategoryInput>
    where?: LeavePolicyWhereInput
  }

  export type LeavePolicyUpdateToOneWithWhereWithoutCategoryInput = {
    where?: LeavePolicyWhereInput
    data: XOR<LeavePolicyUpdateWithoutCategoryInput, LeavePolicyUncheckedUpdateWithoutCategoryInput>
  }

  export type LeavePolicyUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    sickLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vacationLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parentalLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maternityLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeavePolicyUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    sickLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    vacationLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parentalLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maternityLeaves?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryCreateWithoutHolidaysInput = {
    id?: string
    name: string
    createdAt?: Date | string
    optionalHolidays?: number
    users?: UserCategoryLinkUpCreateNestedManyWithoutCategoryInput
    leavePolicy?: LeavePolicyCreateNestedOneWithoutCategoryInput
  }

  export type UserCategoryUncheckedCreateWithoutHolidaysInput = {
    id?: string
    name: string
    createdAt?: Date | string
    optionalHolidays?: number
    users?: UserCategoryLinkUpUncheckedCreateNestedManyWithoutCategoryInput
    leavePolicy?: LeavePolicyUncheckedCreateNestedOneWithoutCategoryInput
  }

  export type UserCategoryCreateOrConnectWithoutHolidaysInput = {
    where: UserCategoryWhereUniqueInput
    create: XOR<UserCategoryCreateWithoutHolidaysInput, UserCategoryUncheckedCreateWithoutHolidaysInput>
  }

  export type UserHolidayCreateWithoutHolidayInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type UserHolidayUncheckedCreateWithoutHolidayInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type UserHolidayCreateOrConnectWithoutHolidayInput = {
    where: UserHolidayWhereUniqueInput
    create: XOR<UserHolidayCreateWithoutHolidayInput, UserHolidayUncheckedCreateWithoutHolidayInput>
  }

  export type UserHolidayCreateManyHolidayInputEnvelope = {
    data: UserHolidayCreateManyHolidayInput | UserHolidayCreateManyHolidayInput[]
    skipDuplicates?: boolean
  }

  export type UserCategoryUpsertWithWhereUniqueWithoutHolidaysInput = {
    where: UserCategoryWhereUniqueInput
    update: XOR<UserCategoryUpdateWithoutHolidaysInput, UserCategoryUncheckedUpdateWithoutHolidaysInput>
    create: XOR<UserCategoryCreateWithoutHolidaysInput, UserCategoryUncheckedCreateWithoutHolidaysInput>
  }

  export type UserCategoryUpdateWithWhereUniqueWithoutHolidaysInput = {
    where: UserCategoryWhereUniqueInput
    data: XOR<UserCategoryUpdateWithoutHolidaysInput, UserCategoryUncheckedUpdateWithoutHolidaysInput>
  }

  export type UserCategoryUpdateManyWithWhereWithoutHolidaysInput = {
    where: UserCategoryScalarWhereInput
    data: XOR<UserCategoryUpdateManyMutationInput, UserCategoryUncheckedUpdateManyWithoutHolidaysInput>
  }

  export type UserCategoryScalarWhereInput = {
    AND?: UserCategoryScalarWhereInput | UserCategoryScalarWhereInput[]
    OR?: UserCategoryScalarWhereInput[]
    NOT?: UserCategoryScalarWhereInput | UserCategoryScalarWhereInput[]
    id?: UuidFilter<"UserCategory"> | string
    name?: StringFilter<"UserCategory"> | string
    createdAt?: DateTimeFilter<"UserCategory"> | Date | string
    optionalHolidays?: IntFilter<"UserCategory"> | number
  }

  export type UserHolidayUpsertWithWhereUniqueWithoutHolidayInput = {
    where: UserHolidayWhereUniqueInput
    update: XOR<UserHolidayUpdateWithoutHolidayInput, UserHolidayUncheckedUpdateWithoutHolidayInput>
    create: XOR<UserHolidayCreateWithoutHolidayInput, UserHolidayUncheckedCreateWithoutHolidayInput>
  }

  export type UserHolidayUpdateWithWhereUniqueWithoutHolidayInput = {
    where: UserHolidayWhereUniqueInput
    data: XOR<UserHolidayUpdateWithoutHolidayInput, UserHolidayUncheckedUpdateWithoutHolidayInput>
  }

  export type UserHolidayUpdateManyWithWhereWithoutHolidayInput = {
    where: UserHolidayScalarWhereInput
    data: XOR<UserHolidayUpdateManyMutationInput, UserHolidayUncheckedUpdateManyWithoutHolidayInput>
  }

  export type UserHolidayScalarWhereInput = {
    AND?: UserHolidayScalarWhereInput | UserHolidayScalarWhereInput[]
    OR?: UserHolidayScalarWhereInput[]
    NOT?: UserHolidayScalarWhereInput | UserHolidayScalarWhereInput[]
    id?: UuidFilter<"UserHoliday"> | string
    userId?: UuidFilter<"UserHoliday"> | string
    holidayId?: UuidFilter<"UserHoliday"> | string
    createdAt?: DateTimeFilter<"UserHoliday"> | Date | string
  }

  export type UserCategoryCreateWithoutLeavePolicyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    optionalHolidays?: number
    users?: UserCategoryLinkUpCreateNestedManyWithoutCategoryInput
    holidays?: HolidayCreateNestedManyWithoutUserCategoriesInput
  }

  export type UserCategoryUncheckedCreateWithoutLeavePolicyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    optionalHolidays?: number
    users?: UserCategoryLinkUpUncheckedCreateNestedManyWithoutCategoryInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutUserCategoriesInput
  }

  export type UserCategoryCreateOrConnectWithoutLeavePolicyInput = {
    where: UserCategoryWhereUniqueInput
    create: XOR<UserCategoryCreateWithoutLeavePolicyInput, UserCategoryUncheckedCreateWithoutLeavePolicyInput>
  }

  export type UserCategoryUpsertWithoutLeavePolicyInput = {
    update: XOR<UserCategoryUpdateWithoutLeavePolicyInput, UserCategoryUncheckedUpdateWithoutLeavePolicyInput>
    create: XOR<UserCategoryCreateWithoutLeavePolicyInput, UserCategoryUncheckedCreateWithoutLeavePolicyInput>
    where?: UserCategoryWhereInput
  }

  export type UserCategoryUpdateToOneWithWhereWithoutLeavePolicyInput = {
    where?: UserCategoryWhereInput
    data: XOR<UserCategoryUpdateWithoutLeavePolicyInput, UserCategoryUncheckedUpdateWithoutLeavePolicyInput>
  }

  export type UserCategoryUpdateWithoutLeavePolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    optionalHolidays?: IntFieldUpdateOperationsInput | number
    users?: UserCategoryLinkUpUpdateManyWithoutCategoryNestedInput
    holidays?: HolidayUpdateManyWithoutUserCategoriesNestedInput
  }

  export type UserCategoryUncheckedUpdateWithoutLeavePolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    optionalHolidays?: IntFieldUpdateOperationsInput | number
    users?: UserCategoryLinkUpUncheckedUpdateManyWithoutCategoryNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutUserCategoriesNestedInput
  }

  export type BreakCreateWithoutTimeEntryInput = {
    id?: string
    breakStart: Date | string
    breakEnd?: Date | string | null
  }

  export type BreakUncheckedCreateWithoutTimeEntryInput = {
    id?: string
    breakStart: Date | string
    breakEnd?: Date | string | null
  }

  export type BreakCreateOrConnectWithoutTimeEntryInput = {
    where: BreakWhereUniqueInput
    create: XOR<BreakCreateWithoutTimeEntryInput, BreakUncheckedCreateWithoutTimeEntryInput>
  }

  export type BreakCreateManyTimeEntryInputEnvelope = {
    data: BreakCreateManyTimeEntryInput | BreakCreateManyTimeEntryInput[]
    skipDuplicates?: boolean
  }

  export type BreakUpsertWithWhereUniqueWithoutTimeEntryInput = {
    where: BreakWhereUniqueInput
    update: XOR<BreakUpdateWithoutTimeEntryInput, BreakUncheckedUpdateWithoutTimeEntryInput>
    create: XOR<BreakCreateWithoutTimeEntryInput, BreakUncheckedCreateWithoutTimeEntryInput>
  }

  export type BreakUpdateWithWhereUniqueWithoutTimeEntryInput = {
    where: BreakWhereUniqueInput
    data: XOR<BreakUpdateWithoutTimeEntryInput, BreakUncheckedUpdateWithoutTimeEntryInput>
  }

  export type BreakUpdateManyWithWhereWithoutTimeEntryInput = {
    where: BreakScalarWhereInput
    data: XOR<BreakUpdateManyMutationInput, BreakUncheckedUpdateManyWithoutTimeEntryInput>
  }

  export type BreakScalarWhereInput = {
    AND?: BreakScalarWhereInput | BreakScalarWhereInput[]
    OR?: BreakScalarWhereInput[]
    NOT?: BreakScalarWhereInput | BreakScalarWhereInput[]
    id?: StringFilter<"Break"> | string
    timeEntryId?: StringFilter<"Break"> | string
    breakStart?: DateTimeFilter<"Break"> | Date | string
    breakEnd?: DateTimeNullableFilter<"Break"> | Date | string | null
  }

  export type TimeEntryCreateWithoutBreaksInput = {
    id?: string
    userId: string
    date: Date | string
    loginTime?: Date | string | null
    logoutTime?: Date | string | null
    createdAt?: Date | string
  }

  export type TimeEntryUncheckedCreateWithoutBreaksInput = {
    id?: string
    userId: string
    date: Date | string
    loginTime?: Date | string | null
    logoutTime?: Date | string | null
    createdAt?: Date | string
  }

  export type TimeEntryCreateOrConnectWithoutBreaksInput = {
    where: TimeEntryWhereUniqueInput
    create: XOR<TimeEntryCreateWithoutBreaksInput, TimeEntryUncheckedCreateWithoutBreaksInput>
  }

  export type TimeEntryUpsertWithoutBreaksInput = {
    update: XOR<TimeEntryUpdateWithoutBreaksInput, TimeEntryUncheckedUpdateWithoutBreaksInput>
    create: XOR<TimeEntryCreateWithoutBreaksInput, TimeEntryUncheckedCreateWithoutBreaksInput>
    where?: TimeEntryWhereInput
  }

  export type TimeEntryUpdateToOneWithWhereWithoutBreaksInput = {
    where?: TimeEntryWhereInput
    data: XOR<TimeEntryUpdateWithoutBreaksInput, TimeEntryUncheckedUpdateWithoutBreaksInput>
  }

  export type TimeEntryUpdateWithoutBreaksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    loginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logoutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeEntryUncheckedUpdateWithoutBreaksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    loginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logoutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryLinkUpCreateManyCategoryInput = {
    id?: string
    userId: string
    userName?: string
    createdAt?: Date | string
  }

  export type UserCategoryLinkUpUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryLinkUpUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryLinkUpUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayUpdateWithoutUserCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userHolidays?: UserHolidayUpdateManyWithoutHolidayNestedInput
  }

  export type HolidayUncheckedUpdateWithoutUserCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userHolidays?: UserHolidayUncheckedUpdateManyWithoutHolidayNestedInput
  }

  export type HolidayUncheckedUpdateManyWithoutUserCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHolidayCreateManyHolidayInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type UserCategoryUpdateWithoutHolidaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    optionalHolidays?: IntFieldUpdateOperationsInput | number
    users?: UserCategoryLinkUpUpdateManyWithoutCategoryNestedInput
    leavePolicy?: LeavePolicyUpdateOneWithoutCategoryNestedInput
  }

  export type UserCategoryUncheckedUpdateWithoutHolidaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    optionalHolidays?: IntFieldUpdateOperationsInput | number
    users?: UserCategoryLinkUpUncheckedUpdateManyWithoutCategoryNestedInput
    leavePolicy?: LeavePolicyUncheckedUpdateOneWithoutCategoryNestedInput
  }

  export type UserCategoryUncheckedUpdateManyWithoutHolidaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    optionalHolidays?: IntFieldUpdateOperationsInput | number
  }

  export type UserHolidayUpdateWithoutHolidayInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHolidayUncheckedUpdateWithoutHolidayInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHolidayUncheckedUpdateManyWithoutHolidayInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreakCreateManyTimeEntryInput = {
    id?: string
    breakStart: Date | string
    breakEnd?: Date | string | null
  }

  export type BreakUpdateWithoutTimeEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    breakStart?: DateTimeFieldUpdateOperationsInput | Date | string
    breakEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BreakUncheckedUpdateWithoutTimeEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    breakStart?: DateTimeFieldUpdateOperationsInput | Date | string
    breakEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BreakUncheckedUpdateManyWithoutTimeEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    breakStart?: DateTimeFieldUpdateOperationsInput | Date | string
    breakEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCategoryCountOutputTypeDefaultArgs instead
     */
    export type UserCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HolidayCountOutputTypeDefaultArgs instead
     */
    export type HolidayCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HolidayCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimeEntryCountOutputTypeDefaultArgs instead
     */
    export type TimeEntryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimeEntryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use organisationDefaultArgs instead
     */
    export type organisationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = organisationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCategoryLinkUpDefaultArgs instead
     */
    export type UserCategoryLinkUpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCategoryLinkUpDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserLeavesDefaultArgs instead
     */
    export type UserLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserLeavesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserHolidayDefaultArgs instead
     */
    export type UserHolidayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserHolidayDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCategoryDefaultArgs instead
     */
    export type UserCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HolidayDefaultArgs instead
     */
    export type HolidayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HolidayDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LeavePolicyDefaultArgs instead
     */
    export type LeavePolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LeavePolicyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LeaveDefaultArgs instead
     */
    export type LeaveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LeaveDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserScheduleDefaultArgs instead
     */
    export type UserScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserScheduleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimeEntryDefaultArgs instead
     */
    export type TimeEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimeEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BreakDefaultArgs instead
     */
    export type BreakArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BreakDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserStreakDefaultArgs instead
     */
    export type UserStreakArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserStreakDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NqlFunctionMappingDefaultArgs instead
     */
    export type NqlFunctionMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NqlFunctionMappingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NlqSqlMappingDefaultArgs instead
     */
    export type NlqSqlMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NlqSqlMappingDefaultArgs<ExtArgs>

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