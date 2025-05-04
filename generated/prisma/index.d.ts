
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
 * Model Modality
 * 
 */
export type Modality = $Result.DefaultSelection<Prisma.$ModalityPayload>
/**
 * Model UserModality
 * 
 */
export type UserModality = $Result.DefaultSelection<Prisma.$UserModalityPayload>
/**
 * Model BeltRank
 * 
 */
export type BeltRank = $Result.DefaultSelection<Prisma.$BeltRankPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model ClassRecurrence
 * 
 */
export type ClassRecurrence = $Result.DefaultSelection<Prisma.$ClassRecurrencePayload>
/**
 * Model CheckIn
 * 
 */
export type CheckIn = $Result.DefaultSelection<Prisma.$CheckInPayload>
/**
 * Model StudentProgress
 * 
 */
export type StudentProgress = $Result.DefaultSelection<Prisma.$StudentProgressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  INSTRUCTOR: 'INSTRUCTOR',
  STUDENT: 'STUDENT'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const DayOfWeek: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type DayOfWeek = $Enums.DayOfWeek

export const DayOfWeek: typeof $Enums.DayOfWeek

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modality`: Exposes CRUD operations for the **Modality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modalities
    * const modalities = await prisma.modality.findMany()
    * ```
    */
  get modality(): Prisma.ModalityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userModality`: Exposes CRUD operations for the **UserModality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserModalities
    * const userModalities = await prisma.userModality.findMany()
    * ```
    */
  get userModality(): Prisma.UserModalityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.beltRank`: Exposes CRUD operations for the **BeltRank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BeltRanks
    * const beltRanks = await prisma.beltRank.findMany()
    * ```
    */
  get beltRank(): Prisma.BeltRankDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classRecurrence`: Exposes CRUD operations for the **ClassRecurrence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassRecurrences
    * const classRecurrences = await prisma.classRecurrence.findMany()
    * ```
    */
  get classRecurrence(): Prisma.ClassRecurrenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkIn`: Exposes CRUD operations for the **CheckIn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckIns
    * const checkIns = await prisma.checkIn.findMany()
    * ```
    */
  get checkIn(): Prisma.CheckInDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentProgress`: Exposes CRUD operations for the **StudentProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentProgresses
    * const studentProgresses = await prisma.studentProgress.findMany()
    * ```
    */
  get studentProgress(): Prisma.StudentProgressDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Modality: 'Modality',
    UserModality: 'UserModality',
    BeltRank: 'BeltRank',
    Class: 'Class',
    ClassRecurrence: 'ClassRecurrence',
    CheckIn: 'CheckIn',
    StudentProgress: 'StudentProgress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "modality" | "userModality" | "beltRank" | "class" | "classRecurrence" | "checkIn" | "studentProgress"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Modality: {
        payload: Prisma.$ModalityPayload<ExtArgs>
        fields: Prisma.ModalityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModalityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModalityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalityPayload>
          }
          findFirst: {
            args: Prisma.ModalityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModalityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalityPayload>
          }
          findMany: {
            args: Prisma.ModalityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalityPayload>[]
          }
          create: {
            args: Prisma.ModalityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalityPayload>
          }
          createMany: {
            args: Prisma.ModalityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModalityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalityPayload>[]
          }
          delete: {
            args: Prisma.ModalityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalityPayload>
          }
          update: {
            args: Prisma.ModalityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalityPayload>
          }
          deleteMany: {
            args: Prisma.ModalityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModalityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModalityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalityPayload>[]
          }
          upsert: {
            args: Prisma.ModalityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModalityPayload>
          }
          aggregate: {
            args: Prisma.ModalityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModality>
          }
          groupBy: {
            args: Prisma.ModalityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModalityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModalityCountArgs<ExtArgs>
            result: $Utils.Optional<ModalityCountAggregateOutputType> | number
          }
        }
      }
      UserModality: {
        payload: Prisma.$UserModalityPayload<ExtArgs>
        fields: Prisma.UserModalityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserModalityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModalityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserModalityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModalityPayload>
          }
          findFirst: {
            args: Prisma.UserModalityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModalityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserModalityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModalityPayload>
          }
          findMany: {
            args: Prisma.UserModalityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModalityPayload>[]
          }
          create: {
            args: Prisma.UserModalityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModalityPayload>
          }
          createMany: {
            args: Prisma.UserModalityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserModalityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModalityPayload>[]
          }
          delete: {
            args: Prisma.UserModalityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModalityPayload>
          }
          update: {
            args: Prisma.UserModalityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModalityPayload>
          }
          deleteMany: {
            args: Prisma.UserModalityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserModalityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserModalityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModalityPayload>[]
          }
          upsert: {
            args: Prisma.UserModalityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModalityPayload>
          }
          aggregate: {
            args: Prisma.UserModalityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserModality>
          }
          groupBy: {
            args: Prisma.UserModalityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserModalityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserModalityCountArgs<ExtArgs>
            result: $Utils.Optional<UserModalityCountAggregateOutputType> | number
          }
        }
      }
      BeltRank: {
        payload: Prisma.$BeltRankPayload<ExtArgs>
        fields: Prisma.BeltRankFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BeltRankFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeltRankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BeltRankFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeltRankPayload>
          }
          findFirst: {
            args: Prisma.BeltRankFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeltRankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BeltRankFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeltRankPayload>
          }
          findMany: {
            args: Prisma.BeltRankFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeltRankPayload>[]
          }
          create: {
            args: Prisma.BeltRankCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeltRankPayload>
          }
          createMany: {
            args: Prisma.BeltRankCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BeltRankCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeltRankPayload>[]
          }
          delete: {
            args: Prisma.BeltRankDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeltRankPayload>
          }
          update: {
            args: Prisma.BeltRankUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeltRankPayload>
          }
          deleteMany: {
            args: Prisma.BeltRankDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BeltRankUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BeltRankUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeltRankPayload>[]
          }
          upsert: {
            args: Prisma.BeltRankUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeltRankPayload>
          }
          aggregate: {
            args: Prisma.BeltRankAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBeltRank>
          }
          groupBy: {
            args: Prisma.BeltRankGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeltRankGroupByOutputType>[]
          }
          count: {
            args: Prisma.BeltRankCountArgs<ExtArgs>
            result: $Utils.Optional<BeltRankCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      ClassRecurrence: {
        payload: Prisma.$ClassRecurrencePayload<ExtArgs>
        fields: Prisma.ClassRecurrenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassRecurrenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRecurrencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassRecurrenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRecurrencePayload>
          }
          findFirst: {
            args: Prisma.ClassRecurrenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRecurrencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassRecurrenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRecurrencePayload>
          }
          findMany: {
            args: Prisma.ClassRecurrenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRecurrencePayload>[]
          }
          create: {
            args: Prisma.ClassRecurrenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRecurrencePayload>
          }
          createMany: {
            args: Prisma.ClassRecurrenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassRecurrenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRecurrencePayload>[]
          }
          delete: {
            args: Prisma.ClassRecurrenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRecurrencePayload>
          }
          update: {
            args: Prisma.ClassRecurrenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRecurrencePayload>
          }
          deleteMany: {
            args: Prisma.ClassRecurrenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassRecurrenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassRecurrenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRecurrencePayload>[]
          }
          upsert: {
            args: Prisma.ClassRecurrenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRecurrencePayload>
          }
          aggregate: {
            args: Prisma.ClassRecurrenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassRecurrence>
          }
          groupBy: {
            args: Prisma.ClassRecurrenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassRecurrenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassRecurrenceCountArgs<ExtArgs>
            result: $Utils.Optional<ClassRecurrenceCountAggregateOutputType> | number
          }
        }
      }
      CheckIn: {
        payload: Prisma.$CheckInPayload<ExtArgs>
        fields: Prisma.CheckInFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckInFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckInFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          findFirst: {
            args: Prisma.CheckInFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckInFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          findMany: {
            args: Prisma.CheckInFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[]
          }
          create: {
            args: Prisma.CheckInCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          createMany: {
            args: Prisma.CheckInCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckInCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[]
          }
          delete: {
            args: Prisma.CheckInDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          update: {
            args: Prisma.CheckInUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          deleteMany: {
            args: Prisma.CheckInDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckInUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckInUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[]
          }
          upsert: {
            args: Prisma.CheckInUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          aggregate: {
            args: Prisma.CheckInAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckIn>
          }
          groupBy: {
            args: Prisma.CheckInGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckInGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckInCountArgs<ExtArgs>
            result: $Utils.Optional<CheckInCountAggregateOutputType> | number
          }
        }
      }
      StudentProgress: {
        payload: Prisma.$StudentProgressPayload<ExtArgs>
        fields: Prisma.StudentProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload>
          }
          findFirst: {
            args: Prisma.StudentProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload>
          }
          findMany: {
            args: Prisma.StudentProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload>[]
          }
          create: {
            args: Prisma.StudentProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload>
          }
          createMany: {
            args: Prisma.StudentProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload>[]
          }
          delete: {
            args: Prisma.StudentProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload>
          }
          update: {
            args: Prisma.StudentProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload>
          }
          deleteMany: {
            args: Prisma.StudentProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload>[]
          }
          upsert: {
            args: Prisma.StudentProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload>
          }
          aggregate: {
            args: Prisma.StudentProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentProgress>
          }
          groupBy: {
            args: Prisma.StudentProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentProgressCountArgs<ExtArgs>
            result: $Utils.Optional<StudentProgressCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    modality?: ModalityOmit
    userModality?: UserModalityOmit
    beltRank?: BeltRankOmit
    class?: ClassOmit
    classRecurrence?: ClassRecurrenceOmit
    checkIn?: CheckInOmit
    studentProgress?: StudentProgressOmit
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
    | 'updateManyAndReturn'
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
    modalities: number
    belt_ranks: number
    taught_classes: number
    check_ins: number
    progress: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalities?: boolean | UserCountOutputTypeCountModalitiesArgs
    belt_ranks?: boolean | UserCountOutputTypeCountBelt_ranksArgs
    taught_classes?: boolean | UserCountOutputTypeCountTaught_classesArgs
    check_ins?: boolean | UserCountOutputTypeCountCheck_insArgs
    progress?: boolean | UserCountOutputTypeCountProgressArgs
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
  export type UserCountOutputTypeCountModalitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModalityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBelt_ranksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeltRankWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaught_classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCheck_insArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProgressWhereInput
  }


  /**
   * Count Type ModalityCountOutputType
   */

  export type ModalityCountOutputType = {
    users: number
    belt_ranks: number
    classes: number
  }

  export type ModalityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ModalityCountOutputTypeCountUsersArgs
    belt_ranks?: boolean | ModalityCountOutputTypeCountBelt_ranksArgs
    classes?: boolean | ModalityCountOutputTypeCountClassesArgs
  }

  // Custom InputTypes
  /**
   * ModalityCountOutputType without action
   */
  export type ModalityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModalityCountOutputType
     */
    select?: ModalityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModalityCountOutputType without action
   */
  export type ModalityCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModalityWhereInput
  }

  /**
   * ModalityCountOutputType without action
   */
  export type ModalityCountOutputTypeCountBelt_ranksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeltRankWhereInput
  }

  /**
   * ModalityCountOutputType without action
   */
  export type ModalityCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }


  /**
   * Count Type BeltRankCountOutputType
   */

  export type BeltRankCountOutputType = {
    users: number
    progress: number
  }

  export type BeltRankCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BeltRankCountOutputTypeCountUsersArgs
    progress?: boolean | BeltRankCountOutputTypeCountProgressArgs
  }

  // Custom InputTypes
  /**
   * BeltRankCountOutputType without action
   */
  export type BeltRankCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeltRankCountOutputType
     */
    select?: BeltRankCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BeltRankCountOutputType without action
   */
  export type BeltRankCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * BeltRankCountOutputType without action
   */
  export type BeltRankCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProgressWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    check_ins: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    check_ins?: boolean | ClassCountOutputTypeCountCheck_insArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountCheck_insArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
  }


  /**
   * Count Type ClassRecurrenceCountOutputType
   */

  export type ClassRecurrenceCountOutputType = {
    classes: number
  }

  export type ClassRecurrenceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | ClassRecurrenceCountOutputTypeCountClassesArgs
  }

  // Custom InputTypes
  /**
   * ClassRecurrenceCountOutputType without action
   */
  export type ClassRecurrenceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRecurrenceCountOutputType
     */
    select?: ClassRecurrenceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassRecurrenceCountOutputType without action
   */
  export type ClassRecurrenceCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
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
    password_hash: string | null
    role: $Enums.UserRole | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.UserRole | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
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
    password_hash: string
    role: $Enums.UserRole
    created_at: Date
    updated_at: Date
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
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    modalities?: boolean | User$modalitiesArgs<ExtArgs>
    belt_ranks?: boolean | User$belt_ranksArgs<ExtArgs>
    taught_classes?: boolean | User$taught_classesArgs<ExtArgs>
    check_ins?: boolean | User$check_insArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "role" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalities?: boolean | User$modalitiesArgs<ExtArgs>
    belt_ranks?: boolean | User$belt_ranksArgs<ExtArgs>
    taught_classes?: boolean | User$taught_classesArgs<ExtArgs>
    check_ins?: boolean | User$check_insArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      modalities: Prisma.$UserModalityPayload<ExtArgs>[]
      belt_ranks: Prisma.$BeltRankPayload<ExtArgs>[]
      taught_classes: Prisma.$ClassPayload<ExtArgs>[]
      check_ins: Prisma.$CheckInPayload<ExtArgs>[]
      progress: Prisma.$StudentProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password_hash: string
      role: $Enums.UserRole
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modalities<T extends User$modalitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$modalitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModalityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    belt_ranks<T extends User$belt_ranksArgs<ExtArgs> = {}>(args?: Subset<T, User$belt_ranksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeltRankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taught_classes<T extends User$taught_classesArgs<ExtArgs> = {}>(args?: Subset<T, User$taught_classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    check_ins<T extends User$check_insArgs<ExtArgs> = {}>(args?: Subset<T, User$check_insArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progress<T extends User$progressArgs<ExtArgs> = {}>(args?: Subset<T, User$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly password_hash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.modalities
   */
  export type User$modalitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModality
     */
    select?: UserModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModality
     */
    omit?: UserModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModalityInclude<ExtArgs> | null
    where?: UserModalityWhereInput
    orderBy?: UserModalityOrderByWithRelationInput | UserModalityOrderByWithRelationInput[]
    cursor?: UserModalityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserModalityScalarFieldEnum | UserModalityScalarFieldEnum[]
  }

  /**
   * User.belt_ranks
   */
  export type User$belt_ranksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeltRank
     */
    select?: BeltRankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeltRank
     */
    omit?: BeltRankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeltRankInclude<ExtArgs> | null
    where?: BeltRankWhereInput
    orderBy?: BeltRankOrderByWithRelationInput | BeltRankOrderByWithRelationInput[]
    cursor?: BeltRankWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BeltRankScalarFieldEnum | BeltRankScalarFieldEnum[]
  }

  /**
   * User.taught_classes
   */
  export type User$taught_classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * User.check_ins
   */
  export type User$check_insArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    cursor?: CheckInWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * User.progress
   */
  export type User$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    where?: StudentProgressWhereInput
    orderBy?: StudentProgressOrderByWithRelationInput | StudentProgressOrderByWithRelationInput[]
    cursor?: StudentProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentProgressScalarFieldEnum | StudentProgressScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Modality
   */

  export type AggregateModality = {
    _count: ModalityCountAggregateOutputType | null
    _min: ModalityMinAggregateOutputType | null
    _max: ModalityMaxAggregateOutputType | null
  }

  export type ModalityMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ModalityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ModalityCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ModalityMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ModalityMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ModalityCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ModalityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modality to aggregate.
     */
    where?: ModalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modalities to fetch.
     */
    orderBy?: ModalityOrderByWithRelationInput | ModalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modalities
    **/
    _count?: true | ModalityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModalityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModalityMaxAggregateInputType
  }

  export type GetModalityAggregateType<T extends ModalityAggregateArgs> = {
        [P in keyof T & keyof AggregateModality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModality[P]>
      : GetScalarType<T[P], AggregateModality[P]>
  }




  export type ModalityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModalityWhereInput
    orderBy?: ModalityOrderByWithAggregationInput | ModalityOrderByWithAggregationInput[]
    by: ModalityScalarFieldEnum[] | ModalityScalarFieldEnum
    having?: ModalityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModalityCountAggregateInputType | true
    _min?: ModalityMinAggregateInputType
    _max?: ModalityMaxAggregateInputType
  }

  export type ModalityGroupByOutputType = {
    id: string
    name: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: ModalityCountAggregateOutputType | null
    _min: ModalityMinAggregateOutputType | null
    _max: ModalityMaxAggregateOutputType | null
  }

  type GetModalityGroupByPayload<T extends ModalityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModalityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModalityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModalityGroupByOutputType[P]>
            : GetScalarType<T[P], ModalityGroupByOutputType[P]>
        }
      >
    >


  export type ModalitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | Modality$usersArgs<ExtArgs>
    belt_ranks?: boolean | Modality$belt_ranksArgs<ExtArgs>
    classes?: boolean | Modality$classesArgs<ExtArgs>
    _count?: boolean | ModalityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modality"]>

  export type ModalitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["modality"]>

  export type ModalitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["modality"]>

  export type ModalitySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ModalityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["modality"]>
  export type ModalityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Modality$usersArgs<ExtArgs>
    belt_ranks?: boolean | Modality$belt_ranksArgs<ExtArgs>
    classes?: boolean | Modality$classesArgs<ExtArgs>
    _count?: boolean | ModalityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModalityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModalityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModalityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Modality"
    objects: {
      users: Prisma.$UserModalityPayload<ExtArgs>[]
      belt_ranks: Prisma.$BeltRankPayload<ExtArgs>[]
      classes: Prisma.$ClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["modality"]>
    composites: {}
  }

  type ModalityGetPayload<S extends boolean | null | undefined | ModalityDefaultArgs> = $Result.GetResult<Prisma.$ModalityPayload, S>

  type ModalityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModalityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModalityCountAggregateInputType | true
    }

  export interface ModalityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Modality'], meta: { name: 'Modality' } }
    /**
     * Find zero or one Modality that matches the filter.
     * @param {ModalityFindUniqueArgs} args - Arguments to find a Modality
     * @example
     * // Get one Modality
     * const modality = await prisma.modality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModalityFindUniqueArgs>(args: SelectSubset<T, ModalityFindUniqueArgs<ExtArgs>>): Prisma__ModalityClient<$Result.GetResult<Prisma.$ModalityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Modality that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModalityFindUniqueOrThrowArgs} args - Arguments to find a Modality
     * @example
     * // Get one Modality
     * const modality = await prisma.modality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModalityFindUniqueOrThrowArgs>(args: SelectSubset<T, ModalityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModalityClient<$Result.GetResult<Prisma.$ModalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModalityFindFirstArgs} args - Arguments to find a Modality
     * @example
     * // Get one Modality
     * const modality = await prisma.modality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModalityFindFirstArgs>(args?: SelectSubset<T, ModalityFindFirstArgs<ExtArgs>>): Prisma__ModalityClient<$Result.GetResult<Prisma.$ModalityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModalityFindFirstOrThrowArgs} args - Arguments to find a Modality
     * @example
     * // Get one Modality
     * const modality = await prisma.modality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModalityFindFirstOrThrowArgs>(args?: SelectSubset<T, ModalityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModalityClient<$Result.GetResult<Prisma.$ModalityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modalities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModalityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modalities
     * const modalities = await prisma.modality.findMany()
     * 
     * // Get first 10 Modalities
     * const modalities = await prisma.modality.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modalityWithIdOnly = await prisma.modality.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModalityFindManyArgs>(args?: SelectSubset<T, ModalityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModalityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Modality.
     * @param {ModalityCreateArgs} args - Arguments to create a Modality.
     * @example
     * // Create one Modality
     * const Modality = await prisma.modality.create({
     *   data: {
     *     // ... data to create a Modality
     *   }
     * })
     * 
     */
    create<T extends ModalityCreateArgs>(args: SelectSubset<T, ModalityCreateArgs<ExtArgs>>): Prisma__ModalityClient<$Result.GetResult<Prisma.$ModalityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modalities.
     * @param {ModalityCreateManyArgs} args - Arguments to create many Modalities.
     * @example
     * // Create many Modalities
     * const modality = await prisma.modality.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModalityCreateManyArgs>(args?: SelectSubset<T, ModalityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modalities and returns the data saved in the database.
     * @param {ModalityCreateManyAndReturnArgs} args - Arguments to create many Modalities.
     * @example
     * // Create many Modalities
     * const modality = await prisma.modality.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modalities and only return the `id`
     * const modalityWithIdOnly = await prisma.modality.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModalityCreateManyAndReturnArgs>(args?: SelectSubset<T, ModalityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModalityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Modality.
     * @param {ModalityDeleteArgs} args - Arguments to delete one Modality.
     * @example
     * // Delete one Modality
     * const Modality = await prisma.modality.delete({
     *   where: {
     *     // ... filter to delete one Modality
     *   }
     * })
     * 
     */
    delete<T extends ModalityDeleteArgs>(args: SelectSubset<T, ModalityDeleteArgs<ExtArgs>>): Prisma__ModalityClient<$Result.GetResult<Prisma.$ModalityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Modality.
     * @param {ModalityUpdateArgs} args - Arguments to update one Modality.
     * @example
     * // Update one Modality
     * const modality = await prisma.modality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModalityUpdateArgs>(args: SelectSubset<T, ModalityUpdateArgs<ExtArgs>>): Prisma__ModalityClient<$Result.GetResult<Prisma.$ModalityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modalities.
     * @param {ModalityDeleteManyArgs} args - Arguments to filter Modalities to delete.
     * @example
     * // Delete a few Modalities
     * const { count } = await prisma.modality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModalityDeleteManyArgs>(args?: SelectSubset<T, ModalityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModalityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modalities
     * const modality = await prisma.modality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModalityUpdateManyArgs>(args: SelectSubset<T, ModalityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modalities and returns the data updated in the database.
     * @param {ModalityUpdateManyAndReturnArgs} args - Arguments to update many Modalities.
     * @example
     * // Update many Modalities
     * const modality = await prisma.modality.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modalities and only return the `id`
     * const modalityWithIdOnly = await prisma.modality.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModalityUpdateManyAndReturnArgs>(args: SelectSubset<T, ModalityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModalityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Modality.
     * @param {ModalityUpsertArgs} args - Arguments to update or create a Modality.
     * @example
     * // Update or create a Modality
     * const modality = await prisma.modality.upsert({
     *   create: {
     *     // ... data to create a Modality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modality we want to update
     *   }
     * })
     */
    upsert<T extends ModalityUpsertArgs>(args: SelectSubset<T, ModalityUpsertArgs<ExtArgs>>): Prisma__ModalityClient<$Result.GetResult<Prisma.$ModalityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModalityCountArgs} args - Arguments to filter Modalities to count.
     * @example
     * // Count the number of Modalities
     * const count = await prisma.modality.count({
     *   where: {
     *     // ... the filter for the Modalities we want to count
     *   }
     * })
    **/
    count<T extends ModalityCountArgs>(
      args?: Subset<T, ModalityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModalityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModalityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModalityAggregateArgs>(args: Subset<T, ModalityAggregateArgs>): Prisma.PrismaPromise<GetModalityAggregateType<T>>

    /**
     * Group by Modality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModalityGroupByArgs} args - Group by arguments.
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
      T extends ModalityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModalityGroupByArgs['orderBy'] }
        : { orderBy?: ModalityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModalityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModalityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Modality model
   */
  readonly fields: ModalityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Modality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModalityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Modality$usersArgs<ExtArgs> = {}>(args?: Subset<T, Modality$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModalityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    belt_ranks<T extends Modality$belt_ranksArgs<ExtArgs> = {}>(args?: Subset<T, Modality$belt_ranksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeltRankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classes<T extends Modality$classesArgs<ExtArgs> = {}>(args?: Subset<T, Modality$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Modality model
   */
  interface ModalityFieldRefs {
    readonly id: FieldRef<"Modality", 'String'>
    readonly name: FieldRef<"Modality", 'String'>
    readonly description: FieldRef<"Modality", 'String'>
    readonly created_at: FieldRef<"Modality", 'DateTime'>
    readonly updated_at: FieldRef<"Modality", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Modality findUnique
   */
  export type ModalityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modality
     */
    select?: ModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modality
     */
    omit?: ModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalityInclude<ExtArgs> | null
    /**
     * Filter, which Modality to fetch.
     */
    where: ModalityWhereUniqueInput
  }

  /**
   * Modality findUniqueOrThrow
   */
  export type ModalityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modality
     */
    select?: ModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modality
     */
    omit?: ModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalityInclude<ExtArgs> | null
    /**
     * Filter, which Modality to fetch.
     */
    where: ModalityWhereUniqueInput
  }

  /**
   * Modality findFirst
   */
  export type ModalityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modality
     */
    select?: ModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modality
     */
    omit?: ModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalityInclude<ExtArgs> | null
    /**
     * Filter, which Modality to fetch.
     */
    where?: ModalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modalities to fetch.
     */
    orderBy?: ModalityOrderByWithRelationInput | ModalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modalities.
     */
    cursor?: ModalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modalities.
     */
    distinct?: ModalityScalarFieldEnum | ModalityScalarFieldEnum[]
  }

  /**
   * Modality findFirstOrThrow
   */
  export type ModalityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modality
     */
    select?: ModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modality
     */
    omit?: ModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalityInclude<ExtArgs> | null
    /**
     * Filter, which Modality to fetch.
     */
    where?: ModalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modalities to fetch.
     */
    orderBy?: ModalityOrderByWithRelationInput | ModalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modalities.
     */
    cursor?: ModalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modalities.
     */
    distinct?: ModalityScalarFieldEnum | ModalityScalarFieldEnum[]
  }

  /**
   * Modality findMany
   */
  export type ModalityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modality
     */
    select?: ModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modality
     */
    omit?: ModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalityInclude<ExtArgs> | null
    /**
     * Filter, which Modalities to fetch.
     */
    where?: ModalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modalities to fetch.
     */
    orderBy?: ModalityOrderByWithRelationInput | ModalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modalities.
     */
    cursor?: ModalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modalities.
     */
    skip?: number
    distinct?: ModalityScalarFieldEnum | ModalityScalarFieldEnum[]
  }

  /**
   * Modality create
   */
  export type ModalityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modality
     */
    select?: ModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modality
     */
    omit?: ModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalityInclude<ExtArgs> | null
    /**
     * The data needed to create a Modality.
     */
    data: XOR<ModalityCreateInput, ModalityUncheckedCreateInput>
  }

  /**
   * Modality createMany
   */
  export type ModalityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modalities.
     */
    data: ModalityCreateManyInput | ModalityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Modality createManyAndReturn
   */
  export type ModalityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modality
     */
    select?: ModalitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Modality
     */
    omit?: ModalityOmit<ExtArgs> | null
    /**
     * The data used to create many Modalities.
     */
    data: ModalityCreateManyInput | ModalityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Modality update
   */
  export type ModalityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modality
     */
    select?: ModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modality
     */
    omit?: ModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalityInclude<ExtArgs> | null
    /**
     * The data needed to update a Modality.
     */
    data: XOR<ModalityUpdateInput, ModalityUncheckedUpdateInput>
    /**
     * Choose, which Modality to update.
     */
    where: ModalityWhereUniqueInput
  }

  /**
   * Modality updateMany
   */
  export type ModalityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modalities.
     */
    data: XOR<ModalityUpdateManyMutationInput, ModalityUncheckedUpdateManyInput>
    /**
     * Filter which Modalities to update
     */
    where?: ModalityWhereInput
    /**
     * Limit how many Modalities to update.
     */
    limit?: number
  }

  /**
   * Modality updateManyAndReturn
   */
  export type ModalityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modality
     */
    select?: ModalitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Modality
     */
    omit?: ModalityOmit<ExtArgs> | null
    /**
     * The data used to update Modalities.
     */
    data: XOR<ModalityUpdateManyMutationInput, ModalityUncheckedUpdateManyInput>
    /**
     * Filter which Modalities to update
     */
    where?: ModalityWhereInput
    /**
     * Limit how many Modalities to update.
     */
    limit?: number
  }

  /**
   * Modality upsert
   */
  export type ModalityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modality
     */
    select?: ModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modality
     */
    omit?: ModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalityInclude<ExtArgs> | null
    /**
     * The filter to search for the Modality to update in case it exists.
     */
    where: ModalityWhereUniqueInput
    /**
     * In case the Modality found by the `where` argument doesn't exist, create a new Modality with this data.
     */
    create: XOR<ModalityCreateInput, ModalityUncheckedCreateInput>
    /**
     * In case the Modality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModalityUpdateInput, ModalityUncheckedUpdateInput>
  }

  /**
   * Modality delete
   */
  export type ModalityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modality
     */
    select?: ModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modality
     */
    omit?: ModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalityInclude<ExtArgs> | null
    /**
     * Filter which Modality to delete.
     */
    where: ModalityWhereUniqueInput
  }

  /**
   * Modality deleteMany
   */
  export type ModalityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modalities to delete
     */
    where?: ModalityWhereInput
    /**
     * Limit how many Modalities to delete.
     */
    limit?: number
  }

  /**
   * Modality.users
   */
  export type Modality$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModality
     */
    select?: UserModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModality
     */
    omit?: UserModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModalityInclude<ExtArgs> | null
    where?: UserModalityWhereInput
    orderBy?: UserModalityOrderByWithRelationInput | UserModalityOrderByWithRelationInput[]
    cursor?: UserModalityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserModalityScalarFieldEnum | UserModalityScalarFieldEnum[]
  }

  /**
   * Modality.belt_ranks
   */
  export type Modality$belt_ranksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeltRank
     */
    select?: BeltRankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeltRank
     */
    omit?: BeltRankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeltRankInclude<ExtArgs> | null
    where?: BeltRankWhereInput
    orderBy?: BeltRankOrderByWithRelationInput | BeltRankOrderByWithRelationInput[]
    cursor?: BeltRankWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BeltRankScalarFieldEnum | BeltRankScalarFieldEnum[]
  }

  /**
   * Modality.classes
   */
  export type Modality$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Modality without action
   */
  export type ModalityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modality
     */
    select?: ModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modality
     */
    omit?: ModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModalityInclude<ExtArgs> | null
  }


  /**
   * Model UserModality
   */

  export type AggregateUserModality = {
    _count: UserModalityCountAggregateOutputType | null
    _min: UserModalityMinAggregateOutputType | null
    _max: UserModalityMaxAggregateOutputType | null
  }

  export type UserModalityMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    modality_id: string | null
    created_at: Date | null
  }

  export type UserModalityMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    modality_id: string | null
    created_at: Date | null
  }

  export type UserModalityCountAggregateOutputType = {
    id: number
    user_id: number
    modality_id: number
    created_at: number
    _all: number
  }


  export type UserModalityMinAggregateInputType = {
    id?: true
    user_id?: true
    modality_id?: true
    created_at?: true
  }

  export type UserModalityMaxAggregateInputType = {
    id?: true
    user_id?: true
    modality_id?: true
    created_at?: true
  }

  export type UserModalityCountAggregateInputType = {
    id?: true
    user_id?: true
    modality_id?: true
    created_at?: true
    _all?: true
  }

  export type UserModalityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserModality to aggregate.
     */
    where?: UserModalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModalities to fetch.
     */
    orderBy?: UserModalityOrderByWithRelationInput | UserModalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserModalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserModalities
    **/
    _count?: true | UserModalityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserModalityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserModalityMaxAggregateInputType
  }

  export type GetUserModalityAggregateType<T extends UserModalityAggregateArgs> = {
        [P in keyof T & keyof AggregateUserModality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserModality[P]>
      : GetScalarType<T[P], AggregateUserModality[P]>
  }




  export type UserModalityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModalityWhereInput
    orderBy?: UserModalityOrderByWithAggregationInput | UserModalityOrderByWithAggregationInput[]
    by: UserModalityScalarFieldEnum[] | UserModalityScalarFieldEnum
    having?: UserModalityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserModalityCountAggregateInputType | true
    _min?: UserModalityMinAggregateInputType
    _max?: UserModalityMaxAggregateInputType
  }

  export type UserModalityGroupByOutputType = {
    id: string
    user_id: string
    modality_id: string
    created_at: Date
    _count: UserModalityCountAggregateOutputType | null
    _min: UserModalityMinAggregateOutputType | null
    _max: UserModalityMaxAggregateOutputType | null
  }

  type GetUserModalityGroupByPayload<T extends UserModalityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserModalityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserModalityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserModalityGroupByOutputType[P]>
            : GetScalarType<T[P], UserModalityGroupByOutputType[P]>
        }
      >
    >


  export type UserModalitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    modality_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userModality"]>

  export type UserModalitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    modality_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userModality"]>

  export type UserModalitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    modality_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userModality"]>

  export type UserModalitySelectScalar = {
    id?: boolean
    user_id?: boolean
    modality_id?: boolean
    created_at?: boolean
  }

  export type UserModalityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "modality_id" | "created_at", ExtArgs["result"]["userModality"]>
  export type UserModalityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
  }
  export type UserModalityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
  }
  export type UserModalityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
  }

  export type $UserModalityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserModality"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      modality: Prisma.$ModalityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      modality_id: string
      created_at: Date
    }, ExtArgs["result"]["userModality"]>
    composites: {}
  }

  type UserModalityGetPayload<S extends boolean | null | undefined | UserModalityDefaultArgs> = $Result.GetResult<Prisma.$UserModalityPayload, S>

  type UserModalityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserModalityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserModalityCountAggregateInputType | true
    }

  export interface UserModalityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserModality'], meta: { name: 'UserModality' } }
    /**
     * Find zero or one UserModality that matches the filter.
     * @param {UserModalityFindUniqueArgs} args - Arguments to find a UserModality
     * @example
     * // Get one UserModality
     * const userModality = await prisma.userModality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserModalityFindUniqueArgs>(args: SelectSubset<T, UserModalityFindUniqueArgs<ExtArgs>>): Prisma__UserModalityClient<$Result.GetResult<Prisma.$UserModalityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserModality that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserModalityFindUniqueOrThrowArgs} args - Arguments to find a UserModality
     * @example
     * // Get one UserModality
     * const userModality = await prisma.userModality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserModalityFindUniqueOrThrowArgs>(args: SelectSubset<T, UserModalityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserModalityClient<$Result.GetResult<Prisma.$UserModalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserModality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModalityFindFirstArgs} args - Arguments to find a UserModality
     * @example
     * // Get one UserModality
     * const userModality = await prisma.userModality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserModalityFindFirstArgs>(args?: SelectSubset<T, UserModalityFindFirstArgs<ExtArgs>>): Prisma__UserModalityClient<$Result.GetResult<Prisma.$UserModalityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserModality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModalityFindFirstOrThrowArgs} args - Arguments to find a UserModality
     * @example
     * // Get one UserModality
     * const userModality = await prisma.userModality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserModalityFindFirstOrThrowArgs>(args?: SelectSubset<T, UserModalityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserModalityClient<$Result.GetResult<Prisma.$UserModalityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserModalities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModalityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserModalities
     * const userModalities = await prisma.userModality.findMany()
     * 
     * // Get first 10 UserModalities
     * const userModalities = await prisma.userModality.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userModalityWithIdOnly = await prisma.userModality.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserModalityFindManyArgs>(args?: SelectSubset<T, UserModalityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModalityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserModality.
     * @param {UserModalityCreateArgs} args - Arguments to create a UserModality.
     * @example
     * // Create one UserModality
     * const UserModality = await prisma.userModality.create({
     *   data: {
     *     // ... data to create a UserModality
     *   }
     * })
     * 
     */
    create<T extends UserModalityCreateArgs>(args: SelectSubset<T, UserModalityCreateArgs<ExtArgs>>): Prisma__UserModalityClient<$Result.GetResult<Prisma.$UserModalityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserModalities.
     * @param {UserModalityCreateManyArgs} args - Arguments to create many UserModalities.
     * @example
     * // Create many UserModalities
     * const userModality = await prisma.userModality.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserModalityCreateManyArgs>(args?: SelectSubset<T, UserModalityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserModalities and returns the data saved in the database.
     * @param {UserModalityCreateManyAndReturnArgs} args - Arguments to create many UserModalities.
     * @example
     * // Create many UserModalities
     * const userModality = await prisma.userModality.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserModalities and only return the `id`
     * const userModalityWithIdOnly = await prisma.userModality.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserModalityCreateManyAndReturnArgs>(args?: SelectSubset<T, UserModalityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModalityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserModality.
     * @param {UserModalityDeleteArgs} args - Arguments to delete one UserModality.
     * @example
     * // Delete one UserModality
     * const UserModality = await prisma.userModality.delete({
     *   where: {
     *     // ... filter to delete one UserModality
     *   }
     * })
     * 
     */
    delete<T extends UserModalityDeleteArgs>(args: SelectSubset<T, UserModalityDeleteArgs<ExtArgs>>): Prisma__UserModalityClient<$Result.GetResult<Prisma.$UserModalityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserModality.
     * @param {UserModalityUpdateArgs} args - Arguments to update one UserModality.
     * @example
     * // Update one UserModality
     * const userModality = await prisma.userModality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserModalityUpdateArgs>(args: SelectSubset<T, UserModalityUpdateArgs<ExtArgs>>): Prisma__UserModalityClient<$Result.GetResult<Prisma.$UserModalityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserModalities.
     * @param {UserModalityDeleteManyArgs} args - Arguments to filter UserModalities to delete.
     * @example
     * // Delete a few UserModalities
     * const { count } = await prisma.userModality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserModalityDeleteManyArgs>(args?: SelectSubset<T, UserModalityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserModalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModalityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserModalities
     * const userModality = await prisma.userModality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserModalityUpdateManyArgs>(args: SelectSubset<T, UserModalityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserModalities and returns the data updated in the database.
     * @param {UserModalityUpdateManyAndReturnArgs} args - Arguments to update many UserModalities.
     * @example
     * // Update many UserModalities
     * const userModality = await prisma.userModality.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserModalities and only return the `id`
     * const userModalityWithIdOnly = await prisma.userModality.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserModalityUpdateManyAndReturnArgs>(args: SelectSubset<T, UserModalityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModalityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserModality.
     * @param {UserModalityUpsertArgs} args - Arguments to update or create a UserModality.
     * @example
     * // Update or create a UserModality
     * const userModality = await prisma.userModality.upsert({
     *   create: {
     *     // ... data to create a UserModality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserModality we want to update
     *   }
     * })
     */
    upsert<T extends UserModalityUpsertArgs>(args: SelectSubset<T, UserModalityUpsertArgs<ExtArgs>>): Prisma__UserModalityClient<$Result.GetResult<Prisma.$UserModalityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserModalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModalityCountArgs} args - Arguments to filter UserModalities to count.
     * @example
     * // Count the number of UserModalities
     * const count = await prisma.userModality.count({
     *   where: {
     *     // ... the filter for the UserModalities we want to count
     *   }
     * })
    **/
    count<T extends UserModalityCountArgs>(
      args?: Subset<T, UserModalityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserModalityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserModality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModalityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserModalityAggregateArgs>(args: Subset<T, UserModalityAggregateArgs>): Prisma.PrismaPromise<GetUserModalityAggregateType<T>>

    /**
     * Group by UserModality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModalityGroupByArgs} args - Group by arguments.
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
      T extends UserModalityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserModalityGroupByArgs['orderBy'] }
        : { orderBy?: UserModalityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserModalityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserModalityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserModality model
   */
  readonly fields: UserModalityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserModality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserModalityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modality<T extends ModalityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModalityDefaultArgs<ExtArgs>>): Prisma__ModalityClient<$Result.GetResult<Prisma.$ModalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserModality model
   */
  interface UserModalityFieldRefs {
    readonly id: FieldRef<"UserModality", 'String'>
    readonly user_id: FieldRef<"UserModality", 'String'>
    readonly modality_id: FieldRef<"UserModality", 'String'>
    readonly created_at: FieldRef<"UserModality", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserModality findUnique
   */
  export type UserModalityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModality
     */
    select?: UserModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModality
     */
    omit?: UserModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModalityInclude<ExtArgs> | null
    /**
     * Filter, which UserModality to fetch.
     */
    where: UserModalityWhereUniqueInput
  }

  /**
   * UserModality findUniqueOrThrow
   */
  export type UserModalityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModality
     */
    select?: UserModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModality
     */
    omit?: UserModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModalityInclude<ExtArgs> | null
    /**
     * Filter, which UserModality to fetch.
     */
    where: UserModalityWhereUniqueInput
  }

  /**
   * UserModality findFirst
   */
  export type UserModalityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModality
     */
    select?: UserModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModality
     */
    omit?: UserModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModalityInclude<ExtArgs> | null
    /**
     * Filter, which UserModality to fetch.
     */
    where?: UserModalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModalities to fetch.
     */
    orderBy?: UserModalityOrderByWithRelationInput | UserModalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModalities.
     */
    cursor?: UserModalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModalities.
     */
    distinct?: UserModalityScalarFieldEnum | UserModalityScalarFieldEnum[]
  }

  /**
   * UserModality findFirstOrThrow
   */
  export type UserModalityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModality
     */
    select?: UserModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModality
     */
    omit?: UserModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModalityInclude<ExtArgs> | null
    /**
     * Filter, which UserModality to fetch.
     */
    where?: UserModalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModalities to fetch.
     */
    orderBy?: UserModalityOrderByWithRelationInput | UserModalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModalities.
     */
    cursor?: UserModalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModalities.
     */
    distinct?: UserModalityScalarFieldEnum | UserModalityScalarFieldEnum[]
  }

  /**
   * UserModality findMany
   */
  export type UserModalityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModality
     */
    select?: UserModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModality
     */
    omit?: UserModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModalityInclude<ExtArgs> | null
    /**
     * Filter, which UserModalities to fetch.
     */
    where?: UserModalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModalities to fetch.
     */
    orderBy?: UserModalityOrderByWithRelationInput | UserModalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserModalities.
     */
    cursor?: UserModalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModalities.
     */
    skip?: number
    distinct?: UserModalityScalarFieldEnum | UserModalityScalarFieldEnum[]
  }

  /**
   * UserModality create
   */
  export type UserModalityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModality
     */
    select?: UserModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModality
     */
    omit?: UserModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModalityInclude<ExtArgs> | null
    /**
     * The data needed to create a UserModality.
     */
    data: XOR<UserModalityCreateInput, UserModalityUncheckedCreateInput>
  }

  /**
   * UserModality createMany
   */
  export type UserModalityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserModalities.
     */
    data: UserModalityCreateManyInput | UserModalityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserModality createManyAndReturn
   */
  export type UserModalityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModality
     */
    select?: UserModalitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserModality
     */
    omit?: UserModalityOmit<ExtArgs> | null
    /**
     * The data used to create many UserModalities.
     */
    data: UserModalityCreateManyInput | UserModalityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModalityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserModality update
   */
  export type UserModalityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModality
     */
    select?: UserModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModality
     */
    omit?: UserModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModalityInclude<ExtArgs> | null
    /**
     * The data needed to update a UserModality.
     */
    data: XOR<UserModalityUpdateInput, UserModalityUncheckedUpdateInput>
    /**
     * Choose, which UserModality to update.
     */
    where: UserModalityWhereUniqueInput
  }

  /**
   * UserModality updateMany
   */
  export type UserModalityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserModalities.
     */
    data: XOR<UserModalityUpdateManyMutationInput, UserModalityUncheckedUpdateManyInput>
    /**
     * Filter which UserModalities to update
     */
    where?: UserModalityWhereInput
    /**
     * Limit how many UserModalities to update.
     */
    limit?: number
  }

  /**
   * UserModality updateManyAndReturn
   */
  export type UserModalityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModality
     */
    select?: UserModalitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserModality
     */
    omit?: UserModalityOmit<ExtArgs> | null
    /**
     * The data used to update UserModalities.
     */
    data: XOR<UserModalityUpdateManyMutationInput, UserModalityUncheckedUpdateManyInput>
    /**
     * Filter which UserModalities to update
     */
    where?: UserModalityWhereInput
    /**
     * Limit how many UserModalities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModalityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserModality upsert
   */
  export type UserModalityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModality
     */
    select?: UserModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModality
     */
    omit?: UserModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModalityInclude<ExtArgs> | null
    /**
     * The filter to search for the UserModality to update in case it exists.
     */
    where: UserModalityWhereUniqueInput
    /**
     * In case the UserModality found by the `where` argument doesn't exist, create a new UserModality with this data.
     */
    create: XOR<UserModalityCreateInput, UserModalityUncheckedCreateInput>
    /**
     * In case the UserModality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserModalityUpdateInput, UserModalityUncheckedUpdateInput>
  }

  /**
   * UserModality delete
   */
  export type UserModalityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModality
     */
    select?: UserModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModality
     */
    omit?: UserModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModalityInclude<ExtArgs> | null
    /**
     * Filter which UserModality to delete.
     */
    where: UserModalityWhereUniqueInput
  }

  /**
   * UserModality deleteMany
   */
  export type UserModalityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserModalities to delete
     */
    where?: UserModalityWhereInput
    /**
     * Limit how many UserModalities to delete.
     */
    limit?: number
  }

  /**
   * UserModality without action
   */
  export type UserModalityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModality
     */
    select?: UserModalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModality
     */
    omit?: UserModalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModalityInclude<ExtArgs> | null
  }


  /**
   * Model BeltRank
   */

  export type AggregateBeltRank = {
    _count: BeltRankCountAggregateOutputType | null
    _avg: BeltRankAvgAggregateOutputType | null
    _sum: BeltRankSumAggregateOutputType | null
    _min: BeltRankMinAggregateOutputType | null
    _max: BeltRankMaxAggregateOutputType | null
  }

  export type BeltRankAvgAggregateOutputType = {
    order: number | null
    required_classes: number | null
  }

  export type BeltRankSumAggregateOutputType = {
    order: number | null
    required_classes: number | null
  }

  export type BeltRankMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    order: number | null
    modality_id: string | null
    required_classes: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BeltRankMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    order: number | null
    modality_id: string | null
    required_classes: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BeltRankCountAggregateOutputType = {
    id: number
    name: number
    color: number
    order: number
    modality_id: number
    required_classes: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BeltRankAvgAggregateInputType = {
    order?: true
    required_classes?: true
  }

  export type BeltRankSumAggregateInputType = {
    order?: true
    required_classes?: true
  }

  export type BeltRankMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    order?: true
    modality_id?: true
    required_classes?: true
    created_at?: true
    updated_at?: true
  }

  export type BeltRankMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    order?: true
    modality_id?: true
    required_classes?: true
    created_at?: true
    updated_at?: true
  }

  export type BeltRankCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    order?: true
    modality_id?: true
    required_classes?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BeltRankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BeltRank to aggregate.
     */
    where?: BeltRankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BeltRanks to fetch.
     */
    orderBy?: BeltRankOrderByWithRelationInput | BeltRankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BeltRankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BeltRanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BeltRanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BeltRanks
    **/
    _count?: true | BeltRankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BeltRankAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BeltRankSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeltRankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeltRankMaxAggregateInputType
  }

  export type GetBeltRankAggregateType<T extends BeltRankAggregateArgs> = {
        [P in keyof T & keyof AggregateBeltRank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBeltRank[P]>
      : GetScalarType<T[P], AggregateBeltRank[P]>
  }




  export type BeltRankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeltRankWhereInput
    orderBy?: BeltRankOrderByWithAggregationInput | BeltRankOrderByWithAggregationInput[]
    by: BeltRankScalarFieldEnum[] | BeltRankScalarFieldEnum
    having?: BeltRankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeltRankCountAggregateInputType | true
    _avg?: BeltRankAvgAggregateInputType
    _sum?: BeltRankSumAggregateInputType
    _min?: BeltRankMinAggregateInputType
    _max?: BeltRankMaxAggregateInputType
  }

  export type BeltRankGroupByOutputType = {
    id: string
    name: string
    color: string
    order: number
    modality_id: string
    required_classes: number
    created_at: Date
    updated_at: Date
    _count: BeltRankCountAggregateOutputType | null
    _avg: BeltRankAvgAggregateOutputType | null
    _sum: BeltRankSumAggregateOutputType | null
    _min: BeltRankMinAggregateOutputType | null
    _max: BeltRankMaxAggregateOutputType | null
  }

  type GetBeltRankGroupByPayload<T extends BeltRankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeltRankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeltRankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeltRankGroupByOutputType[P]>
            : GetScalarType<T[P], BeltRankGroupByOutputType[P]>
        }
      >
    >


  export type BeltRankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    order?: boolean
    modality_id?: boolean
    required_classes?: boolean
    created_at?: boolean
    updated_at?: boolean
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
    users?: boolean | BeltRank$usersArgs<ExtArgs>
    progress?: boolean | BeltRank$progressArgs<ExtArgs>
    _count?: boolean | BeltRankCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beltRank"]>

  export type BeltRankSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    order?: boolean
    modality_id?: boolean
    required_classes?: boolean
    created_at?: boolean
    updated_at?: boolean
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beltRank"]>

  export type BeltRankSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    order?: boolean
    modality_id?: boolean
    required_classes?: boolean
    created_at?: boolean
    updated_at?: boolean
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beltRank"]>

  export type BeltRankSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    order?: boolean
    modality_id?: boolean
    required_classes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BeltRankOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color" | "order" | "modality_id" | "required_classes" | "created_at" | "updated_at", ExtArgs["result"]["beltRank"]>
  export type BeltRankInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
    users?: boolean | BeltRank$usersArgs<ExtArgs>
    progress?: boolean | BeltRank$progressArgs<ExtArgs>
    _count?: boolean | BeltRankCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BeltRankIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
  }
  export type BeltRankIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
  }

  export type $BeltRankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BeltRank"
    objects: {
      modality: Prisma.$ModalityPayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>[]
      progress: Prisma.$StudentProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string
      order: number
      modality_id: string
      required_classes: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["beltRank"]>
    composites: {}
  }

  type BeltRankGetPayload<S extends boolean | null | undefined | BeltRankDefaultArgs> = $Result.GetResult<Prisma.$BeltRankPayload, S>

  type BeltRankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BeltRankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BeltRankCountAggregateInputType | true
    }

  export interface BeltRankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BeltRank'], meta: { name: 'BeltRank' } }
    /**
     * Find zero or one BeltRank that matches the filter.
     * @param {BeltRankFindUniqueArgs} args - Arguments to find a BeltRank
     * @example
     * // Get one BeltRank
     * const beltRank = await prisma.beltRank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BeltRankFindUniqueArgs>(args: SelectSubset<T, BeltRankFindUniqueArgs<ExtArgs>>): Prisma__BeltRankClient<$Result.GetResult<Prisma.$BeltRankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BeltRank that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BeltRankFindUniqueOrThrowArgs} args - Arguments to find a BeltRank
     * @example
     * // Get one BeltRank
     * const beltRank = await prisma.beltRank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BeltRankFindUniqueOrThrowArgs>(args: SelectSubset<T, BeltRankFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BeltRankClient<$Result.GetResult<Prisma.$BeltRankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BeltRank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeltRankFindFirstArgs} args - Arguments to find a BeltRank
     * @example
     * // Get one BeltRank
     * const beltRank = await prisma.beltRank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BeltRankFindFirstArgs>(args?: SelectSubset<T, BeltRankFindFirstArgs<ExtArgs>>): Prisma__BeltRankClient<$Result.GetResult<Prisma.$BeltRankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BeltRank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeltRankFindFirstOrThrowArgs} args - Arguments to find a BeltRank
     * @example
     * // Get one BeltRank
     * const beltRank = await prisma.beltRank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BeltRankFindFirstOrThrowArgs>(args?: SelectSubset<T, BeltRankFindFirstOrThrowArgs<ExtArgs>>): Prisma__BeltRankClient<$Result.GetResult<Prisma.$BeltRankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BeltRanks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeltRankFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BeltRanks
     * const beltRanks = await prisma.beltRank.findMany()
     * 
     * // Get first 10 BeltRanks
     * const beltRanks = await prisma.beltRank.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const beltRankWithIdOnly = await prisma.beltRank.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BeltRankFindManyArgs>(args?: SelectSubset<T, BeltRankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeltRankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BeltRank.
     * @param {BeltRankCreateArgs} args - Arguments to create a BeltRank.
     * @example
     * // Create one BeltRank
     * const BeltRank = await prisma.beltRank.create({
     *   data: {
     *     // ... data to create a BeltRank
     *   }
     * })
     * 
     */
    create<T extends BeltRankCreateArgs>(args: SelectSubset<T, BeltRankCreateArgs<ExtArgs>>): Prisma__BeltRankClient<$Result.GetResult<Prisma.$BeltRankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BeltRanks.
     * @param {BeltRankCreateManyArgs} args - Arguments to create many BeltRanks.
     * @example
     * // Create many BeltRanks
     * const beltRank = await prisma.beltRank.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BeltRankCreateManyArgs>(args?: SelectSubset<T, BeltRankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BeltRanks and returns the data saved in the database.
     * @param {BeltRankCreateManyAndReturnArgs} args - Arguments to create many BeltRanks.
     * @example
     * // Create many BeltRanks
     * const beltRank = await prisma.beltRank.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BeltRanks and only return the `id`
     * const beltRankWithIdOnly = await prisma.beltRank.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BeltRankCreateManyAndReturnArgs>(args?: SelectSubset<T, BeltRankCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeltRankPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BeltRank.
     * @param {BeltRankDeleteArgs} args - Arguments to delete one BeltRank.
     * @example
     * // Delete one BeltRank
     * const BeltRank = await prisma.beltRank.delete({
     *   where: {
     *     // ... filter to delete one BeltRank
     *   }
     * })
     * 
     */
    delete<T extends BeltRankDeleteArgs>(args: SelectSubset<T, BeltRankDeleteArgs<ExtArgs>>): Prisma__BeltRankClient<$Result.GetResult<Prisma.$BeltRankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BeltRank.
     * @param {BeltRankUpdateArgs} args - Arguments to update one BeltRank.
     * @example
     * // Update one BeltRank
     * const beltRank = await prisma.beltRank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BeltRankUpdateArgs>(args: SelectSubset<T, BeltRankUpdateArgs<ExtArgs>>): Prisma__BeltRankClient<$Result.GetResult<Prisma.$BeltRankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BeltRanks.
     * @param {BeltRankDeleteManyArgs} args - Arguments to filter BeltRanks to delete.
     * @example
     * // Delete a few BeltRanks
     * const { count } = await prisma.beltRank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BeltRankDeleteManyArgs>(args?: SelectSubset<T, BeltRankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BeltRanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeltRankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BeltRanks
     * const beltRank = await prisma.beltRank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BeltRankUpdateManyArgs>(args: SelectSubset<T, BeltRankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BeltRanks and returns the data updated in the database.
     * @param {BeltRankUpdateManyAndReturnArgs} args - Arguments to update many BeltRanks.
     * @example
     * // Update many BeltRanks
     * const beltRank = await prisma.beltRank.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BeltRanks and only return the `id`
     * const beltRankWithIdOnly = await prisma.beltRank.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BeltRankUpdateManyAndReturnArgs>(args: SelectSubset<T, BeltRankUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeltRankPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BeltRank.
     * @param {BeltRankUpsertArgs} args - Arguments to update or create a BeltRank.
     * @example
     * // Update or create a BeltRank
     * const beltRank = await prisma.beltRank.upsert({
     *   create: {
     *     // ... data to create a BeltRank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BeltRank we want to update
     *   }
     * })
     */
    upsert<T extends BeltRankUpsertArgs>(args: SelectSubset<T, BeltRankUpsertArgs<ExtArgs>>): Prisma__BeltRankClient<$Result.GetResult<Prisma.$BeltRankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BeltRanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeltRankCountArgs} args - Arguments to filter BeltRanks to count.
     * @example
     * // Count the number of BeltRanks
     * const count = await prisma.beltRank.count({
     *   where: {
     *     // ... the filter for the BeltRanks we want to count
     *   }
     * })
    **/
    count<T extends BeltRankCountArgs>(
      args?: Subset<T, BeltRankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeltRankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BeltRank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeltRankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BeltRankAggregateArgs>(args: Subset<T, BeltRankAggregateArgs>): Prisma.PrismaPromise<GetBeltRankAggregateType<T>>

    /**
     * Group by BeltRank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeltRankGroupByArgs} args - Group by arguments.
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
      T extends BeltRankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BeltRankGroupByArgs['orderBy'] }
        : { orderBy?: BeltRankGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BeltRankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeltRankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BeltRank model
   */
  readonly fields: BeltRankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BeltRank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BeltRankClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modality<T extends ModalityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModalityDefaultArgs<ExtArgs>>): Prisma__ModalityClient<$Result.GetResult<Prisma.$ModalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends BeltRank$usersArgs<ExtArgs> = {}>(args?: Subset<T, BeltRank$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progress<T extends BeltRank$progressArgs<ExtArgs> = {}>(args?: Subset<T, BeltRank$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BeltRank model
   */
  interface BeltRankFieldRefs {
    readonly id: FieldRef<"BeltRank", 'String'>
    readonly name: FieldRef<"BeltRank", 'String'>
    readonly color: FieldRef<"BeltRank", 'String'>
    readonly order: FieldRef<"BeltRank", 'Int'>
    readonly modality_id: FieldRef<"BeltRank", 'String'>
    readonly required_classes: FieldRef<"BeltRank", 'Int'>
    readonly created_at: FieldRef<"BeltRank", 'DateTime'>
    readonly updated_at: FieldRef<"BeltRank", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BeltRank findUnique
   */
  export type BeltRankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeltRank
     */
    select?: BeltRankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeltRank
     */
    omit?: BeltRankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeltRankInclude<ExtArgs> | null
    /**
     * Filter, which BeltRank to fetch.
     */
    where: BeltRankWhereUniqueInput
  }

  /**
   * BeltRank findUniqueOrThrow
   */
  export type BeltRankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeltRank
     */
    select?: BeltRankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeltRank
     */
    omit?: BeltRankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeltRankInclude<ExtArgs> | null
    /**
     * Filter, which BeltRank to fetch.
     */
    where: BeltRankWhereUniqueInput
  }

  /**
   * BeltRank findFirst
   */
  export type BeltRankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeltRank
     */
    select?: BeltRankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeltRank
     */
    omit?: BeltRankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeltRankInclude<ExtArgs> | null
    /**
     * Filter, which BeltRank to fetch.
     */
    where?: BeltRankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BeltRanks to fetch.
     */
    orderBy?: BeltRankOrderByWithRelationInput | BeltRankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BeltRanks.
     */
    cursor?: BeltRankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BeltRanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BeltRanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BeltRanks.
     */
    distinct?: BeltRankScalarFieldEnum | BeltRankScalarFieldEnum[]
  }

  /**
   * BeltRank findFirstOrThrow
   */
  export type BeltRankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeltRank
     */
    select?: BeltRankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeltRank
     */
    omit?: BeltRankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeltRankInclude<ExtArgs> | null
    /**
     * Filter, which BeltRank to fetch.
     */
    where?: BeltRankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BeltRanks to fetch.
     */
    orderBy?: BeltRankOrderByWithRelationInput | BeltRankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BeltRanks.
     */
    cursor?: BeltRankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BeltRanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BeltRanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BeltRanks.
     */
    distinct?: BeltRankScalarFieldEnum | BeltRankScalarFieldEnum[]
  }

  /**
   * BeltRank findMany
   */
  export type BeltRankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeltRank
     */
    select?: BeltRankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeltRank
     */
    omit?: BeltRankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeltRankInclude<ExtArgs> | null
    /**
     * Filter, which BeltRanks to fetch.
     */
    where?: BeltRankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BeltRanks to fetch.
     */
    orderBy?: BeltRankOrderByWithRelationInput | BeltRankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BeltRanks.
     */
    cursor?: BeltRankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BeltRanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BeltRanks.
     */
    skip?: number
    distinct?: BeltRankScalarFieldEnum | BeltRankScalarFieldEnum[]
  }

  /**
   * BeltRank create
   */
  export type BeltRankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeltRank
     */
    select?: BeltRankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeltRank
     */
    omit?: BeltRankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeltRankInclude<ExtArgs> | null
    /**
     * The data needed to create a BeltRank.
     */
    data: XOR<BeltRankCreateInput, BeltRankUncheckedCreateInput>
  }

  /**
   * BeltRank createMany
   */
  export type BeltRankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BeltRanks.
     */
    data: BeltRankCreateManyInput | BeltRankCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BeltRank createManyAndReturn
   */
  export type BeltRankCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeltRank
     */
    select?: BeltRankSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BeltRank
     */
    omit?: BeltRankOmit<ExtArgs> | null
    /**
     * The data used to create many BeltRanks.
     */
    data: BeltRankCreateManyInput | BeltRankCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeltRankIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BeltRank update
   */
  export type BeltRankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeltRank
     */
    select?: BeltRankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeltRank
     */
    omit?: BeltRankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeltRankInclude<ExtArgs> | null
    /**
     * The data needed to update a BeltRank.
     */
    data: XOR<BeltRankUpdateInput, BeltRankUncheckedUpdateInput>
    /**
     * Choose, which BeltRank to update.
     */
    where: BeltRankWhereUniqueInput
  }

  /**
   * BeltRank updateMany
   */
  export type BeltRankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BeltRanks.
     */
    data: XOR<BeltRankUpdateManyMutationInput, BeltRankUncheckedUpdateManyInput>
    /**
     * Filter which BeltRanks to update
     */
    where?: BeltRankWhereInput
    /**
     * Limit how many BeltRanks to update.
     */
    limit?: number
  }

  /**
   * BeltRank updateManyAndReturn
   */
  export type BeltRankUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeltRank
     */
    select?: BeltRankSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BeltRank
     */
    omit?: BeltRankOmit<ExtArgs> | null
    /**
     * The data used to update BeltRanks.
     */
    data: XOR<BeltRankUpdateManyMutationInput, BeltRankUncheckedUpdateManyInput>
    /**
     * Filter which BeltRanks to update
     */
    where?: BeltRankWhereInput
    /**
     * Limit how many BeltRanks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeltRankIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BeltRank upsert
   */
  export type BeltRankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeltRank
     */
    select?: BeltRankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeltRank
     */
    omit?: BeltRankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeltRankInclude<ExtArgs> | null
    /**
     * The filter to search for the BeltRank to update in case it exists.
     */
    where: BeltRankWhereUniqueInput
    /**
     * In case the BeltRank found by the `where` argument doesn't exist, create a new BeltRank with this data.
     */
    create: XOR<BeltRankCreateInput, BeltRankUncheckedCreateInput>
    /**
     * In case the BeltRank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BeltRankUpdateInput, BeltRankUncheckedUpdateInput>
  }

  /**
   * BeltRank delete
   */
  export type BeltRankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeltRank
     */
    select?: BeltRankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeltRank
     */
    omit?: BeltRankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeltRankInclude<ExtArgs> | null
    /**
     * Filter which BeltRank to delete.
     */
    where: BeltRankWhereUniqueInput
  }

  /**
   * BeltRank deleteMany
   */
  export type BeltRankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BeltRanks to delete
     */
    where?: BeltRankWhereInput
    /**
     * Limit how many BeltRanks to delete.
     */
    limit?: number
  }

  /**
   * BeltRank.users
   */
  export type BeltRank$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * BeltRank.progress
   */
  export type BeltRank$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    where?: StudentProgressWhereInput
    orderBy?: StudentProgressOrderByWithRelationInput | StudentProgressOrderByWithRelationInput[]
    cursor?: StudentProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentProgressScalarFieldEnum | StudentProgressScalarFieldEnum[]
  }

  /**
   * BeltRank without action
   */
  export type BeltRankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeltRank
     */
    select?: BeltRankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BeltRank
     */
    omit?: BeltRankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeltRankInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassAvgAggregateOutputType = {
    max_students: number | null
  }

  export type ClassSumAggregateOutputType = {
    max_students: number | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    start_time: Date | null
    end_time: Date | null
    instructor_id: string | null
    modality_id: string | null
    max_students: number | null
    is_recurring: boolean | null
    recurrence_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    start_time: Date | null
    end_time: Date | null
    instructor_id: string | null
    modality_id: string | null
    max_students: number | null
    is_recurring: boolean | null
    recurrence_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    title: number
    description: number
    start_time: number
    end_time: number
    instructor_id: number
    modality_id: number
    max_students: number
    is_recurring: number
    recurrence_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClassAvgAggregateInputType = {
    max_students?: true
  }

  export type ClassSumAggregateInputType = {
    max_students?: true
  }

  export type ClassMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    start_time?: true
    end_time?: true
    instructor_id?: true
    modality_id?: true
    max_students?: true
    is_recurring?: true
    recurrence_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    start_time?: true
    end_time?: true
    instructor_id?: true
    modality_id?: true
    max_students?: true
    is_recurring?: true
    recurrence_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    start_time?: true
    end_time?: true
    instructor_id?: true
    modality_id?: true
    max_students?: true
    is_recurring?: true
    recurrence_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _avg?: ClassAvgAggregateInputType
    _sum?: ClassSumAggregateInputType
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    title: string
    description: string | null
    start_time: Date
    end_time: Date
    instructor_id: string
    modality_id: string
    max_students: number | null
    is_recurring: boolean
    recurrence_id: string | null
    created_at: Date
    updated_at: Date
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    start_time?: boolean
    end_time?: boolean
    instructor_id?: boolean
    modality_id?: boolean
    max_students?: boolean
    is_recurring?: boolean
    recurrence_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
    recurrence?: boolean | Class$recurrenceArgs<ExtArgs>
    check_ins?: boolean | Class$check_insArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    start_time?: boolean
    end_time?: boolean
    instructor_id?: boolean
    modality_id?: boolean
    max_students?: boolean
    is_recurring?: boolean
    recurrence_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
    recurrence?: boolean | Class$recurrenceArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    start_time?: boolean
    end_time?: boolean
    instructor_id?: boolean
    modality_id?: boolean
    max_students?: boolean
    is_recurring?: boolean
    recurrence_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
    recurrence?: boolean | Class$recurrenceArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    start_time?: boolean
    end_time?: boolean
    instructor_id?: boolean
    modality_id?: boolean
    max_students?: boolean
    is_recurring?: boolean
    recurrence_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "start_time" | "end_time" | "instructor_id" | "modality_id" | "max_students" | "is_recurring" | "recurrence_id" | "created_at" | "updated_at", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
    recurrence?: boolean | Class$recurrenceArgs<ExtArgs>
    check_ins?: boolean | Class$check_insArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
    recurrence?: boolean | Class$recurrenceArgs<ExtArgs>
  }
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    modality?: boolean | ModalityDefaultArgs<ExtArgs>
    recurrence?: boolean | Class$recurrenceArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      instructor: Prisma.$UserPayload<ExtArgs>
      modality: Prisma.$ModalityPayload<ExtArgs>
      recurrence: Prisma.$ClassRecurrencePayload<ExtArgs> | null
      check_ins: Prisma.$CheckInPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      start_time: Date
      end_time: Date
      instructor_id: string
      modality_id: string
      max_students: number | null
      is_recurring: boolean
      recurrence_id: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
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
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modality<T extends ModalityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModalityDefaultArgs<ExtArgs>>): Prisma__ModalityClient<$Result.GetResult<Prisma.$ModalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recurrence<T extends Class$recurrenceArgs<ExtArgs> = {}>(args?: Subset<T, Class$recurrenceArgs<ExtArgs>>): Prisma__ClassRecurrenceClient<$Result.GetResult<Prisma.$ClassRecurrencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    check_ins<T extends Class$check_insArgs<ExtArgs> = {}>(args?: Subset<T, Class$check_insArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly title: FieldRef<"Class", 'String'>
    readonly description: FieldRef<"Class", 'String'>
    readonly start_time: FieldRef<"Class", 'DateTime'>
    readonly end_time: FieldRef<"Class", 'DateTime'>
    readonly instructor_id: FieldRef<"Class", 'String'>
    readonly modality_id: FieldRef<"Class", 'String'>
    readonly max_students: FieldRef<"Class", 'Int'>
    readonly is_recurring: FieldRef<"Class", 'Boolean'>
    readonly recurrence_id: FieldRef<"Class", 'String'>
    readonly created_at: FieldRef<"Class", 'DateTime'>
    readonly updated_at: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.recurrence
   */
  export type Class$recurrenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRecurrence
     */
    select?: ClassRecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRecurrence
     */
    omit?: ClassRecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRecurrenceInclude<ExtArgs> | null
    where?: ClassRecurrenceWhereInput
  }

  /**
   * Class.check_ins
   */
  export type Class$check_insArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    cursor?: CheckInWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model ClassRecurrence
   */

  export type AggregateClassRecurrence = {
    _count: ClassRecurrenceCountAggregateOutputType | null
    _min: ClassRecurrenceMinAggregateOutputType | null
    _max: ClassRecurrenceMaxAggregateOutputType | null
  }

  export type ClassRecurrenceMinAggregateOutputType = {
    id: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClassRecurrenceMaxAggregateOutputType = {
    id: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClassRecurrenceCountAggregateOutputType = {
    id: number
    days_of_week: number
    start_date: number
    end_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClassRecurrenceMinAggregateInputType = {
    id?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type ClassRecurrenceMaxAggregateInputType = {
    id?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type ClassRecurrenceCountAggregateInputType = {
    id?: true
    days_of_week?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClassRecurrenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassRecurrence to aggregate.
     */
    where?: ClassRecurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassRecurrences to fetch.
     */
    orderBy?: ClassRecurrenceOrderByWithRelationInput | ClassRecurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassRecurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassRecurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassRecurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassRecurrences
    **/
    _count?: true | ClassRecurrenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassRecurrenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassRecurrenceMaxAggregateInputType
  }

  export type GetClassRecurrenceAggregateType<T extends ClassRecurrenceAggregateArgs> = {
        [P in keyof T & keyof AggregateClassRecurrence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassRecurrence[P]>
      : GetScalarType<T[P], AggregateClassRecurrence[P]>
  }




  export type ClassRecurrenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassRecurrenceWhereInput
    orderBy?: ClassRecurrenceOrderByWithAggregationInput | ClassRecurrenceOrderByWithAggregationInput[]
    by: ClassRecurrenceScalarFieldEnum[] | ClassRecurrenceScalarFieldEnum
    having?: ClassRecurrenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassRecurrenceCountAggregateInputType | true
    _min?: ClassRecurrenceMinAggregateInputType
    _max?: ClassRecurrenceMaxAggregateInputType
  }

  export type ClassRecurrenceGroupByOutputType = {
    id: string
    days_of_week: $Enums.DayOfWeek[]
    start_date: Date
    end_date: Date | null
    created_at: Date
    updated_at: Date
    _count: ClassRecurrenceCountAggregateOutputType | null
    _min: ClassRecurrenceMinAggregateOutputType | null
    _max: ClassRecurrenceMaxAggregateOutputType | null
  }

  type GetClassRecurrenceGroupByPayload<T extends ClassRecurrenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassRecurrenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassRecurrenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassRecurrenceGroupByOutputType[P]>
            : GetScalarType<T[P], ClassRecurrenceGroupByOutputType[P]>
        }
      >
    >


  export type ClassRecurrenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    days_of_week?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    classes?: boolean | ClassRecurrence$classesArgs<ExtArgs>
    _count?: boolean | ClassRecurrenceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classRecurrence"]>

  export type ClassRecurrenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    days_of_week?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["classRecurrence"]>

  export type ClassRecurrenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    days_of_week?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["classRecurrence"]>

  export type ClassRecurrenceSelectScalar = {
    id?: boolean
    days_of_week?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ClassRecurrenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "days_of_week" | "start_date" | "end_date" | "created_at" | "updated_at", ExtArgs["result"]["classRecurrence"]>
  export type ClassRecurrenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | ClassRecurrence$classesArgs<ExtArgs>
    _count?: boolean | ClassRecurrenceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassRecurrenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClassRecurrenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassRecurrencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassRecurrence"
    objects: {
      classes: Prisma.$ClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      days_of_week: $Enums.DayOfWeek[]
      start_date: Date
      end_date: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["classRecurrence"]>
    composites: {}
  }

  type ClassRecurrenceGetPayload<S extends boolean | null | undefined | ClassRecurrenceDefaultArgs> = $Result.GetResult<Prisma.$ClassRecurrencePayload, S>

  type ClassRecurrenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassRecurrenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassRecurrenceCountAggregateInputType | true
    }

  export interface ClassRecurrenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassRecurrence'], meta: { name: 'ClassRecurrence' } }
    /**
     * Find zero or one ClassRecurrence that matches the filter.
     * @param {ClassRecurrenceFindUniqueArgs} args - Arguments to find a ClassRecurrence
     * @example
     * // Get one ClassRecurrence
     * const classRecurrence = await prisma.classRecurrence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassRecurrenceFindUniqueArgs>(args: SelectSubset<T, ClassRecurrenceFindUniqueArgs<ExtArgs>>): Prisma__ClassRecurrenceClient<$Result.GetResult<Prisma.$ClassRecurrencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassRecurrence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassRecurrenceFindUniqueOrThrowArgs} args - Arguments to find a ClassRecurrence
     * @example
     * // Get one ClassRecurrence
     * const classRecurrence = await prisma.classRecurrence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassRecurrenceFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassRecurrenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassRecurrenceClient<$Result.GetResult<Prisma.$ClassRecurrencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassRecurrence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassRecurrenceFindFirstArgs} args - Arguments to find a ClassRecurrence
     * @example
     * // Get one ClassRecurrence
     * const classRecurrence = await prisma.classRecurrence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassRecurrenceFindFirstArgs>(args?: SelectSubset<T, ClassRecurrenceFindFirstArgs<ExtArgs>>): Prisma__ClassRecurrenceClient<$Result.GetResult<Prisma.$ClassRecurrencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassRecurrence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassRecurrenceFindFirstOrThrowArgs} args - Arguments to find a ClassRecurrence
     * @example
     * // Get one ClassRecurrence
     * const classRecurrence = await prisma.classRecurrence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassRecurrenceFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassRecurrenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassRecurrenceClient<$Result.GetResult<Prisma.$ClassRecurrencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassRecurrences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassRecurrenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassRecurrences
     * const classRecurrences = await prisma.classRecurrence.findMany()
     * 
     * // Get first 10 ClassRecurrences
     * const classRecurrences = await prisma.classRecurrence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classRecurrenceWithIdOnly = await prisma.classRecurrence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassRecurrenceFindManyArgs>(args?: SelectSubset<T, ClassRecurrenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassRecurrencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassRecurrence.
     * @param {ClassRecurrenceCreateArgs} args - Arguments to create a ClassRecurrence.
     * @example
     * // Create one ClassRecurrence
     * const ClassRecurrence = await prisma.classRecurrence.create({
     *   data: {
     *     // ... data to create a ClassRecurrence
     *   }
     * })
     * 
     */
    create<T extends ClassRecurrenceCreateArgs>(args: SelectSubset<T, ClassRecurrenceCreateArgs<ExtArgs>>): Prisma__ClassRecurrenceClient<$Result.GetResult<Prisma.$ClassRecurrencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassRecurrences.
     * @param {ClassRecurrenceCreateManyArgs} args - Arguments to create many ClassRecurrences.
     * @example
     * // Create many ClassRecurrences
     * const classRecurrence = await prisma.classRecurrence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassRecurrenceCreateManyArgs>(args?: SelectSubset<T, ClassRecurrenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassRecurrences and returns the data saved in the database.
     * @param {ClassRecurrenceCreateManyAndReturnArgs} args - Arguments to create many ClassRecurrences.
     * @example
     * // Create many ClassRecurrences
     * const classRecurrence = await prisma.classRecurrence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassRecurrences and only return the `id`
     * const classRecurrenceWithIdOnly = await prisma.classRecurrence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassRecurrenceCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassRecurrenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassRecurrencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassRecurrence.
     * @param {ClassRecurrenceDeleteArgs} args - Arguments to delete one ClassRecurrence.
     * @example
     * // Delete one ClassRecurrence
     * const ClassRecurrence = await prisma.classRecurrence.delete({
     *   where: {
     *     // ... filter to delete one ClassRecurrence
     *   }
     * })
     * 
     */
    delete<T extends ClassRecurrenceDeleteArgs>(args: SelectSubset<T, ClassRecurrenceDeleteArgs<ExtArgs>>): Prisma__ClassRecurrenceClient<$Result.GetResult<Prisma.$ClassRecurrencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassRecurrence.
     * @param {ClassRecurrenceUpdateArgs} args - Arguments to update one ClassRecurrence.
     * @example
     * // Update one ClassRecurrence
     * const classRecurrence = await prisma.classRecurrence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassRecurrenceUpdateArgs>(args: SelectSubset<T, ClassRecurrenceUpdateArgs<ExtArgs>>): Prisma__ClassRecurrenceClient<$Result.GetResult<Prisma.$ClassRecurrencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassRecurrences.
     * @param {ClassRecurrenceDeleteManyArgs} args - Arguments to filter ClassRecurrences to delete.
     * @example
     * // Delete a few ClassRecurrences
     * const { count } = await prisma.classRecurrence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassRecurrenceDeleteManyArgs>(args?: SelectSubset<T, ClassRecurrenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassRecurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassRecurrenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassRecurrences
     * const classRecurrence = await prisma.classRecurrence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassRecurrenceUpdateManyArgs>(args: SelectSubset<T, ClassRecurrenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassRecurrences and returns the data updated in the database.
     * @param {ClassRecurrenceUpdateManyAndReturnArgs} args - Arguments to update many ClassRecurrences.
     * @example
     * // Update many ClassRecurrences
     * const classRecurrence = await prisma.classRecurrence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassRecurrences and only return the `id`
     * const classRecurrenceWithIdOnly = await prisma.classRecurrence.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassRecurrenceUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassRecurrenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassRecurrencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassRecurrence.
     * @param {ClassRecurrenceUpsertArgs} args - Arguments to update or create a ClassRecurrence.
     * @example
     * // Update or create a ClassRecurrence
     * const classRecurrence = await prisma.classRecurrence.upsert({
     *   create: {
     *     // ... data to create a ClassRecurrence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassRecurrence we want to update
     *   }
     * })
     */
    upsert<T extends ClassRecurrenceUpsertArgs>(args: SelectSubset<T, ClassRecurrenceUpsertArgs<ExtArgs>>): Prisma__ClassRecurrenceClient<$Result.GetResult<Prisma.$ClassRecurrencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassRecurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassRecurrenceCountArgs} args - Arguments to filter ClassRecurrences to count.
     * @example
     * // Count the number of ClassRecurrences
     * const count = await prisma.classRecurrence.count({
     *   where: {
     *     // ... the filter for the ClassRecurrences we want to count
     *   }
     * })
    **/
    count<T extends ClassRecurrenceCountArgs>(
      args?: Subset<T, ClassRecurrenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassRecurrenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassRecurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassRecurrenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassRecurrenceAggregateArgs>(args: Subset<T, ClassRecurrenceAggregateArgs>): Prisma.PrismaPromise<GetClassRecurrenceAggregateType<T>>

    /**
     * Group by ClassRecurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassRecurrenceGroupByArgs} args - Group by arguments.
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
      T extends ClassRecurrenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassRecurrenceGroupByArgs['orderBy'] }
        : { orderBy?: ClassRecurrenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassRecurrenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassRecurrenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassRecurrence model
   */
  readonly fields: ClassRecurrenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassRecurrence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassRecurrenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends ClassRecurrence$classesArgs<ExtArgs> = {}>(args?: Subset<T, ClassRecurrence$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ClassRecurrence model
   */
  interface ClassRecurrenceFieldRefs {
    readonly id: FieldRef<"ClassRecurrence", 'String'>
    readonly days_of_week: FieldRef<"ClassRecurrence", 'DayOfWeek[]'>
    readonly start_date: FieldRef<"ClassRecurrence", 'DateTime'>
    readonly end_date: FieldRef<"ClassRecurrence", 'DateTime'>
    readonly created_at: FieldRef<"ClassRecurrence", 'DateTime'>
    readonly updated_at: FieldRef<"ClassRecurrence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassRecurrence findUnique
   */
  export type ClassRecurrenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRecurrence
     */
    select?: ClassRecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRecurrence
     */
    omit?: ClassRecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRecurrenceInclude<ExtArgs> | null
    /**
     * Filter, which ClassRecurrence to fetch.
     */
    where: ClassRecurrenceWhereUniqueInput
  }

  /**
   * ClassRecurrence findUniqueOrThrow
   */
  export type ClassRecurrenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRecurrence
     */
    select?: ClassRecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRecurrence
     */
    omit?: ClassRecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRecurrenceInclude<ExtArgs> | null
    /**
     * Filter, which ClassRecurrence to fetch.
     */
    where: ClassRecurrenceWhereUniqueInput
  }

  /**
   * ClassRecurrence findFirst
   */
  export type ClassRecurrenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRecurrence
     */
    select?: ClassRecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRecurrence
     */
    omit?: ClassRecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRecurrenceInclude<ExtArgs> | null
    /**
     * Filter, which ClassRecurrence to fetch.
     */
    where?: ClassRecurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassRecurrences to fetch.
     */
    orderBy?: ClassRecurrenceOrderByWithRelationInput | ClassRecurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassRecurrences.
     */
    cursor?: ClassRecurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassRecurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassRecurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassRecurrences.
     */
    distinct?: ClassRecurrenceScalarFieldEnum | ClassRecurrenceScalarFieldEnum[]
  }

  /**
   * ClassRecurrence findFirstOrThrow
   */
  export type ClassRecurrenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRecurrence
     */
    select?: ClassRecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRecurrence
     */
    omit?: ClassRecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRecurrenceInclude<ExtArgs> | null
    /**
     * Filter, which ClassRecurrence to fetch.
     */
    where?: ClassRecurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassRecurrences to fetch.
     */
    orderBy?: ClassRecurrenceOrderByWithRelationInput | ClassRecurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassRecurrences.
     */
    cursor?: ClassRecurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassRecurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassRecurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassRecurrences.
     */
    distinct?: ClassRecurrenceScalarFieldEnum | ClassRecurrenceScalarFieldEnum[]
  }

  /**
   * ClassRecurrence findMany
   */
  export type ClassRecurrenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRecurrence
     */
    select?: ClassRecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRecurrence
     */
    omit?: ClassRecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRecurrenceInclude<ExtArgs> | null
    /**
     * Filter, which ClassRecurrences to fetch.
     */
    where?: ClassRecurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassRecurrences to fetch.
     */
    orderBy?: ClassRecurrenceOrderByWithRelationInput | ClassRecurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassRecurrences.
     */
    cursor?: ClassRecurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassRecurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassRecurrences.
     */
    skip?: number
    distinct?: ClassRecurrenceScalarFieldEnum | ClassRecurrenceScalarFieldEnum[]
  }

  /**
   * ClassRecurrence create
   */
  export type ClassRecurrenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRecurrence
     */
    select?: ClassRecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRecurrence
     */
    omit?: ClassRecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRecurrenceInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassRecurrence.
     */
    data: XOR<ClassRecurrenceCreateInput, ClassRecurrenceUncheckedCreateInput>
  }

  /**
   * ClassRecurrence createMany
   */
  export type ClassRecurrenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassRecurrences.
     */
    data: ClassRecurrenceCreateManyInput | ClassRecurrenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassRecurrence createManyAndReturn
   */
  export type ClassRecurrenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRecurrence
     */
    select?: ClassRecurrenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRecurrence
     */
    omit?: ClassRecurrenceOmit<ExtArgs> | null
    /**
     * The data used to create many ClassRecurrences.
     */
    data: ClassRecurrenceCreateManyInput | ClassRecurrenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassRecurrence update
   */
  export type ClassRecurrenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRecurrence
     */
    select?: ClassRecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRecurrence
     */
    omit?: ClassRecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRecurrenceInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassRecurrence.
     */
    data: XOR<ClassRecurrenceUpdateInput, ClassRecurrenceUncheckedUpdateInput>
    /**
     * Choose, which ClassRecurrence to update.
     */
    where: ClassRecurrenceWhereUniqueInput
  }

  /**
   * ClassRecurrence updateMany
   */
  export type ClassRecurrenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassRecurrences.
     */
    data: XOR<ClassRecurrenceUpdateManyMutationInput, ClassRecurrenceUncheckedUpdateManyInput>
    /**
     * Filter which ClassRecurrences to update
     */
    where?: ClassRecurrenceWhereInput
    /**
     * Limit how many ClassRecurrences to update.
     */
    limit?: number
  }

  /**
   * ClassRecurrence updateManyAndReturn
   */
  export type ClassRecurrenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRecurrence
     */
    select?: ClassRecurrenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRecurrence
     */
    omit?: ClassRecurrenceOmit<ExtArgs> | null
    /**
     * The data used to update ClassRecurrences.
     */
    data: XOR<ClassRecurrenceUpdateManyMutationInput, ClassRecurrenceUncheckedUpdateManyInput>
    /**
     * Filter which ClassRecurrences to update
     */
    where?: ClassRecurrenceWhereInput
    /**
     * Limit how many ClassRecurrences to update.
     */
    limit?: number
  }

  /**
   * ClassRecurrence upsert
   */
  export type ClassRecurrenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRecurrence
     */
    select?: ClassRecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRecurrence
     */
    omit?: ClassRecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRecurrenceInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassRecurrence to update in case it exists.
     */
    where: ClassRecurrenceWhereUniqueInput
    /**
     * In case the ClassRecurrence found by the `where` argument doesn't exist, create a new ClassRecurrence with this data.
     */
    create: XOR<ClassRecurrenceCreateInput, ClassRecurrenceUncheckedCreateInput>
    /**
     * In case the ClassRecurrence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassRecurrenceUpdateInput, ClassRecurrenceUncheckedUpdateInput>
  }

  /**
   * ClassRecurrence delete
   */
  export type ClassRecurrenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRecurrence
     */
    select?: ClassRecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRecurrence
     */
    omit?: ClassRecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRecurrenceInclude<ExtArgs> | null
    /**
     * Filter which ClassRecurrence to delete.
     */
    where: ClassRecurrenceWhereUniqueInput
  }

  /**
   * ClassRecurrence deleteMany
   */
  export type ClassRecurrenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassRecurrences to delete
     */
    where?: ClassRecurrenceWhereInput
    /**
     * Limit how many ClassRecurrences to delete.
     */
    limit?: number
  }

  /**
   * ClassRecurrence.classes
   */
  export type ClassRecurrence$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * ClassRecurrence without action
   */
  export type ClassRecurrenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRecurrence
     */
    select?: ClassRecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRecurrence
     */
    omit?: ClassRecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRecurrenceInclude<ExtArgs> | null
  }


  /**
   * Model CheckIn
   */

  export type AggregateCheckIn = {
    _count: CheckInCountAggregateOutputType | null
    _min: CheckInMinAggregateOutputType | null
    _max: CheckInMaxAggregateOutputType | null
  }

  export type CheckInMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    class_id: string | null
    check_in_time: Date | null
    notes: string | null
  }

  export type CheckInMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    class_id: string | null
    check_in_time: Date | null
    notes: string | null
  }

  export type CheckInCountAggregateOutputType = {
    id: number
    user_id: number
    class_id: number
    check_in_time: number
    notes: number
    _all: number
  }


  export type CheckInMinAggregateInputType = {
    id?: true
    user_id?: true
    class_id?: true
    check_in_time?: true
    notes?: true
  }

  export type CheckInMaxAggregateInputType = {
    id?: true
    user_id?: true
    class_id?: true
    check_in_time?: true
    notes?: true
  }

  export type CheckInCountAggregateInputType = {
    id?: true
    user_id?: true
    class_id?: true
    check_in_time?: true
    notes?: true
    _all?: true
  }

  export type CheckInAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckIn to aggregate.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckIns
    **/
    _count?: true | CheckInCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckInMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckInMaxAggregateInputType
  }

  export type GetCheckInAggregateType<T extends CheckInAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckIn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckIn[P]>
      : GetScalarType<T[P], AggregateCheckIn[P]>
  }




  export type CheckInGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithAggregationInput | CheckInOrderByWithAggregationInput[]
    by: CheckInScalarFieldEnum[] | CheckInScalarFieldEnum
    having?: CheckInScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckInCountAggregateInputType | true
    _min?: CheckInMinAggregateInputType
    _max?: CheckInMaxAggregateInputType
  }

  export type CheckInGroupByOutputType = {
    id: string
    user_id: string
    class_id: string
    check_in_time: Date
    notes: string | null
    _count: CheckInCountAggregateOutputType | null
    _min: CheckInMinAggregateOutputType | null
    _max: CheckInMaxAggregateOutputType | null
  }

  type GetCheckInGroupByPayload<T extends CheckInGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckInGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckInGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckInGroupByOutputType[P]>
            : GetScalarType<T[P], CheckInGroupByOutputType[P]>
        }
      >
    >


  export type CheckInSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    class_id?: boolean
    check_in_time?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkIn"]>

  export type CheckInSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    class_id?: boolean
    check_in_time?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkIn"]>

  export type CheckInSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    class_id?: boolean
    check_in_time?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkIn"]>

  export type CheckInSelectScalar = {
    id?: boolean
    user_id?: boolean
    class_id?: boolean
    check_in_time?: boolean
    notes?: boolean
  }

  export type CheckInOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "class_id" | "check_in_time" | "notes", ExtArgs["result"]["checkIn"]>
  export type CheckInInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type CheckInIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type CheckInIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $CheckInPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckIn"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      class_id: string
      check_in_time: Date
      notes: string | null
    }, ExtArgs["result"]["checkIn"]>
    composites: {}
  }

  type CheckInGetPayload<S extends boolean | null | undefined | CheckInDefaultArgs> = $Result.GetResult<Prisma.$CheckInPayload, S>

  type CheckInCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckInFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckInCountAggregateInputType | true
    }

  export interface CheckInDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckIn'], meta: { name: 'CheckIn' } }
    /**
     * Find zero or one CheckIn that matches the filter.
     * @param {CheckInFindUniqueArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckInFindUniqueArgs>(args: SelectSubset<T, CheckInFindUniqueArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CheckIn that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckInFindUniqueOrThrowArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckInFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckInFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckIn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindFirstArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckInFindFirstArgs>(args?: SelectSubset<T, CheckInFindFirstArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckIn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindFirstOrThrowArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckInFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckInFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CheckIns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckIns
     * const checkIns = await prisma.checkIn.findMany()
     * 
     * // Get first 10 CheckIns
     * const checkIns = await prisma.checkIn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkInWithIdOnly = await prisma.checkIn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckInFindManyArgs>(args?: SelectSubset<T, CheckInFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CheckIn.
     * @param {CheckInCreateArgs} args - Arguments to create a CheckIn.
     * @example
     * // Create one CheckIn
     * const CheckIn = await prisma.checkIn.create({
     *   data: {
     *     // ... data to create a CheckIn
     *   }
     * })
     * 
     */
    create<T extends CheckInCreateArgs>(args: SelectSubset<T, CheckInCreateArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CheckIns.
     * @param {CheckInCreateManyArgs} args - Arguments to create many CheckIns.
     * @example
     * // Create many CheckIns
     * const checkIn = await prisma.checkIn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckInCreateManyArgs>(args?: SelectSubset<T, CheckInCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckIns and returns the data saved in the database.
     * @param {CheckInCreateManyAndReturnArgs} args - Arguments to create many CheckIns.
     * @example
     * // Create many CheckIns
     * const checkIn = await prisma.checkIn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckIns and only return the `id`
     * const checkInWithIdOnly = await prisma.checkIn.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckInCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckInCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CheckIn.
     * @param {CheckInDeleteArgs} args - Arguments to delete one CheckIn.
     * @example
     * // Delete one CheckIn
     * const CheckIn = await prisma.checkIn.delete({
     *   where: {
     *     // ... filter to delete one CheckIn
     *   }
     * })
     * 
     */
    delete<T extends CheckInDeleteArgs>(args: SelectSubset<T, CheckInDeleteArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CheckIn.
     * @param {CheckInUpdateArgs} args - Arguments to update one CheckIn.
     * @example
     * // Update one CheckIn
     * const checkIn = await prisma.checkIn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckInUpdateArgs>(args: SelectSubset<T, CheckInUpdateArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CheckIns.
     * @param {CheckInDeleteManyArgs} args - Arguments to filter CheckIns to delete.
     * @example
     * // Delete a few CheckIns
     * const { count } = await prisma.checkIn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckInDeleteManyArgs>(args?: SelectSubset<T, CheckInDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckIns
     * const checkIn = await prisma.checkIn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckInUpdateManyArgs>(args: SelectSubset<T, CheckInUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckIns and returns the data updated in the database.
     * @param {CheckInUpdateManyAndReturnArgs} args - Arguments to update many CheckIns.
     * @example
     * // Update many CheckIns
     * const checkIn = await prisma.checkIn.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CheckIns and only return the `id`
     * const checkInWithIdOnly = await prisma.checkIn.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CheckInUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckInUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CheckIn.
     * @param {CheckInUpsertArgs} args - Arguments to update or create a CheckIn.
     * @example
     * // Update or create a CheckIn
     * const checkIn = await prisma.checkIn.upsert({
     *   create: {
     *     // ... data to create a CheckIn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckIn we want to update
     *   }
     * })
     */
    upsert<T extends CheckInUpsertArgs>(args: SelectSubset<T, CheckInUpsertArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInCountArgs} args - Arguments to filter CheckIns to count.
     * @example
     * // Count the number of CheckIns
     * const count = await prisma.checkIn.count({
     *   where: {
     *     // ... the filter for the CheckIns we want to count
     *   }
     * })
    **/
    count<T extends CheckInCountArgs>(
      args?: Subset<T, CheckInCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckInCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckInAggregateArgs>(args: Subset<T, CheckInAggregateArgs>): Prisma.PrismaPromise<GetCheckInAggregateType<T>>

    /**
     * Group by CheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInGroupByArgs} args - Group by arguments.
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
      T extends CheckInGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckInGroupByArgs['orderBy'] }
        : { orderBy?: CheckInGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CheckInGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckInGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckIn model
   */
  readonly fields: CheckInFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckIn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckInClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CheckIn model
   */
  interface CheckInFieldRefs {
    readonly id: FieldRef<"CheckIn", 'String'>
    readonly user_id: FieldRef<"CheckIn", 'String'>
    readonly class_id: FieldRef<"CheckIn", 'String'>
    readonly check_in_time: FieldRef<"CheckIn", 'DateTime'>
    readonly notes: FieldRef<"CheckIn", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CheckIn findUnique
   */
  export type CheckInFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn findUniqueOrThrow
   */
  export type CheckInFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn findFirst
   */
  export type CheckInFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn findFirstOrThrow
   */
  export type CheckInFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn findMany
   */
  export type CheckInFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIns to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn create
   */
  export type CheckInCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckIn.
     */
    data: XOR<CheckInCreateInput, CheckInUncheckedCreateInput>
  }

  /**
   * CheckIn createMany
   */
  export type CheckInCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckIns.
     */
    data: CheckInCreateManyInput | CheckInCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckIn createManyAndReturn
   */
  export type CheckInCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * The data used to create many CheckIns.
     */
    data: CheckInCreateManyInput | CheckInCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckIn update
   */
  export type CheckInUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckIn.
     */
    data: XOR<CheckInUpdateInput, CheckInUncheckedUpdateInput>
    /**
     * Choose, which CheckIn to update.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn updateMany
   */
  export type CheckInUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckIns.
     */
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyInput>
    /**
     * Filter which CheckIns to update
     */
    where?: CheckInWhereInput
    /**
     * Limit how many CheckIns to update.
     */
    limit?: number
  }

  /**
   * CheckIn updateManyAndReturn
   */
  export type CheckInUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * The data used to update CheckIns.
     */
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyInput>
    /**
     * Filter which CheckIns to update
     */
    where?: CheckInWhereInput
    /**
     * Limit how many CheckIns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckIn upsert
   */
  export type CheckInUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckIn to update in case it exists.
     */
    where: CheckInWhereUniqueInput
    /**
     * In case the CheckIn found by the `where` argument doesn't exist, create a new CheckIn with this data.
     */
    create: XOR<CheckInCreateInput, CheckInUncheckedCreateInput>
    /**
     * In case the CheckIn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckInUpdateInput, CheckInUncheckedUpdateInput>
  }

  /**
   * CheckIn delete
   */
  export type CheckInDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter which CheckIn to delete.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn deleteMany
   */
  export type CheckInDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckIns to delete
     */
    where?: CheckInWhereInput
    /**
     * Limit how many CheckIns to delete.
     */
    limit?: number
  }

  /**
   * CheckIn without action
   */
  export type CheckInDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
  }


  /**
   * Model StudentProgress
   */

  export type AggregateStudentProgress = {
    _count: StudentProgressCountAggregateOutputType | null
    _avg: StudentProgressAvgAggregateOutputType | null
    _sum: StudentProgressSumAggregateOutputType | null
    _min: StudentProgressMinAggregateOutputType | null
    _max: StudentProgressMaxAggregateOutputType | null
  }

  export type StudentProgressAvgAggregateOutputType = {
    classes_completed: number | null
  }

  export type StudentProgressSumAggregateOutputType = {
    classes_completed: number | null
  }

  export type StudentProgressMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    belt_rank_id: string | null
    classes_completed: number | null
    promoted: boolean | null
    promotion_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StudentProgressMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    belt_rank_id: string | null
    classes_completed: number | null
    promoted: boolean | null
    promotion_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StudentProgressCountAggregateOutputType = {
    id: number
    user_id: number
    belt_rank_id: number
    classes_completed: number
    promoted: number
    promotion_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StudentProgressAvgAggregateInputType = {
    classes_completed?: true
  }

  export type StudentProgressSumAggregateInputType = {
    classes_completed?: true
  }

  export type StudentProgressMinAggregateInputType = {
    id?: true
    user_id?: true
    belt_rank_id?: true
    classes_completed?: true
    promoted?: true
    promotion_date?: true
    created_at?: true
    updated_at?: true
  }

  export type StudentProgressMaxAggregateInputType = {
    id?: true
    user_id?: true
    belt_rank_id?: true
    classes_completed?: true
    promoted?: true
    promotion_date?: true
    created_at?: true
    updated_at?: true
  }

  export type StudentProgressCountAggregateInputType = {
    id?: true
    user_id?: true
    belt_rank_id?: true
    classes_completed?: true
    promoted?: true
    promotion_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StudentProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProgress to aggregate.
     */
    where?: StudentProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProgresses to fetch.
     */
    orderBy?: StudentProgressOrderByWithRelationInput | StudentProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentProgresses
    **/
    _count?: true | StudentProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentProgressMaxAggregateInputType
  }

  export type GetStudentProgressAggregateType<T extends StudentProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentProgress[P]>
      : GetScalarType<T[P], AggregateStudentProgress[P]>
  }




  export type StudentProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProgressWhereInput
    orderBy?: StudentProgressOrderByWithAggregationInput | StudentProgressOrderByWithAggregationInput[]
    by: StudentProgressScalarFieldEnum[] | StudentProgressScalarFieldEnum
    having?: StudentProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentProgressCountAggregateInputType | true
    _avg?: StudentProgressAvgAggregateInputType
    _sum?: StudentProgressSumAggregateInputType
    _min?: StudentProgressMinAggregateInputType
    _max?: StudentProgressMaxAggregateInputType
  }

  export type StudentProgressGroupByOutputType = {
    id: string
    user_id: string
    belt_rank_id: string
    classes_completed: number
    promoted: boolean
    promotion_date: Date | null
    created_at: Date
    updated_at: Date
    _count: StudentProgressCountAggregateOutputType | null
    _avg: StudentProgressAvgAggregateOutputType | null
    _sum: StudentProgressSumAggregateOutputType | null
    _min: StudentProgressMinAggregateOutputType | null
    _max: StudentProgressMaxAggregateOutputType | null
  }

  type GetStudentProgressGroupByPayload<T extends StudentProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentProgressGroupByOutputType[P]>
            : GetScalarType<T[P], StudentProgressGroupByOutputType[P]>
        }
      >
    >


  export type StudentProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    belt_rank_id?: boolean
    classes_completed?: boolean
    promoted?: boolean
    promotion_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    belt_rank?: boolean | BeltRankDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProgress"]>

  export type StudentProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    belt_rank_id?: boolean
    classes_completed?: boolean
    promoted?: boolean
    promotion_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    belt_rank?: boolean | BeltRankDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProgress"]>

  export type StudentProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    belt_rank_id?: boolean
    classes_completed?: boolean
    promoted?: boolean
    promotion_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    belt_rank?: boolean | BeltRankDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProgress"]>

  export type StudentProgressSelectScalar = {
    id?: boolean
    user_id?: boolean
    belt_rank_id?: boolean
    classes_completed?: boolean
    promoted?: boolean
    promotion_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type StudentProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "belt_rank_id" | "classes_completed" | "promoted" | "promotion_date" | "created_at" | "updated_at", ExtArgs["result"]["studentProgress"]>
  export type StudentProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    belt_rank?: boolean | BeltRankDefaultArgs<ExtArgs>
  }
  export type StudentProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    belt_rank?: boolean | BeltRankDefaultArgs<ExtArgs>
  }
  export type StudentProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    belt_rank?: boolean | BeltRankDefaultArgs<ExtArgs>
  }

  export type $StudentProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      belt_rank: Prisma.$BeltRankPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      belt_rank_id: string
      classes_completed: number
      promoted: boolean
      promotion_date: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["studentProgress"]>
    composites: {}
  }

  type StudentProgressGetPayload<S extends boolean | null | undefined | StudentProgressDefaultArgs> = $Result.GetResult<Prisma.$StudentProgressPayload, S>

  type StudentProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentProgressCountAggregateInputType | true
    }

  export interface StudentProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentProgress'], meta: { name: 'StudentProgress' } }
    /**
     * Find zero or one StudentProgress that matches the filter.
     * @param {StudentProgressFindUniqueArgs} args - Arguments to find a StudentProgress
     * @example
     * // Get one StudentProgress
     * const studentProgress = await prisma.studentProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentProgressFindUniqueArgs>(args: SelectSubset<T, StudentProgressFindUniqueArgs<ExtArgs>>): Prisma__StudentProgressClient<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentProgressFindUniqueOrThrowArgs} args - Arguments to find a StudentProgress
     * @example
     * // Get one StudentProgress
     * const studentProgress = await prisma.studentProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentProgressClient<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProgressFindFirstArgs} args - Arguments to find a StudentProgress
     * @example
     * // Get one StudentProgress
     * const studentProgress = await prisma.studentProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentProgressFindFirstArgs>(args?: SelectSubset<T, StudentProgressFindFirstArgs<ExtArgs>>): Prisma__StudentProgressClient<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProgressFindFirstOrThrowArgs} args - Arguments to find a StudentProgress
     * @example
     * // Get one StudentProgress
     * const studentProgress = await prisma.studentProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentProgressClient<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentProgresses
     * const studentProgresses = await prisma.studentProgress.findMany()
     * 
     * // Get first 10 StudentProgresses
     * const studentProgresses = await prisma.studentProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentProgressWithIdOnly = await prisma.studentProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentProgressFindManyArgs>(args?: SelectSubset<T, StudentProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentProgress.
     * @param {StudentProgressCreateArgs} args - Arguments to create a StudentProgress.
     * @example
     * // Create one StudentProgress
     * const StudentProgress = await prisma.studentProgress.create({
     *   data: {
     *     // ... data to create a StudentProgress
     *   }
     * })
     * 
     */
    create<T extends StudentProgressCreateArgs>(args: SelectSubset<T, StudentProgressCreateArgs<ExtArgs>>): Prisma__StudentProgressClient<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentProgresses.
     * @param {StudentProgressCreateManyArgs} args - Arguments to create many StudentProgresses.
     * @example
     * // Create many StudentProgresses
     * const studentProgress = await prisma.studentProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentProgressCreateManyArgs>(args?: SelectSubset<T, StudentProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentProgresses and returns the data saved in the database.
     * @param {StudentProgressCreateManyAndReturnArgs} args - Arguments to create many StudentProgresses.
     * @example
     * // Create many StudentProgresses
     * const studentProgress = await prisma.studentProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentProgresses and only return the `id`
     * const studentProgressWithIdOnly = await prisma.studentProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentProgress.
     * @param {StudentProgressDeleteArgs} args - Arguments to delete one StudentProgress.
     * @example
     * // Delete one StudentProgress
     * const StudentProgress = await prisma.studentProgress.delete({
     *   where: {
     *     // ... filter to delete one StudentProgress
     *   }
     * })
     * 
     */
    delete<T extends StudentProgressDeleteArgs>(args: SelectSubset<T, StudentProgressDeleteArgs<ExtArgs>>): Prisma__StudentProgressClient<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentProgress.
     * @param {StudentProgressUpdateArgs} args - Arguments to update one StudentProgress.
     * @example
     * // Update one StudentProgress
     * const studentProgress = await prisma.studentProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentProgressUpdateArgs>(args: SelectSubset<T, StudentProgressUpdateArgs<ExtArgs>>): Prisma__StudentProgressClient<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentProgresses.
     * @param {StudentProgressDeleteManyArgs} args - Arguments to filter StudentProgresses to delete.
     * @example
     * // Delete a few StudentProgresses
     * const { count } = await prisma.studentProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentProgressDeleteManyArgs>(args?: SelectSubset<T, StudentProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentProgresses
     * const studentProgress = await prisma.studentProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentProgressUpdateManyArgs>(args: SelectSubset<T, StudentProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProgresses and returns the data updated in the database.
     * @param {StudentProgressUpdateManyAndReturnArgs} args - Arguments to update many StudentProgresses.
     * @example
     * // Update many StudentProgresses
     * const studentProgress = await prisma.studentProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentProgresses and only return the `id`
     * const studentProgressWithIdOnly = await prisma.studentProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentProgress.
     * @param {StudentProgressUpsertArgs} args - Arguments to update or create a StudentProgress.
     * @example
     * // Update or create a StudentProgress
     * const studentProgress = await prisma.studentProgress.upsert({
     *   create: {
     *     // ... data to create a StudentProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentProgress we want to update
     *   }
     * })
     */
    upsert<T extends StudentProgressUpsertArgs>(args: SelectSubset<T, StudentProgressUpsertArgs<ExtArgs>>): Prisma__StudentProgressClient<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProgressCountArgs} args - Arguments to filter StudentProgresses to count.
     * @example
     * // Count the number of StudentProgresses
     * const count = await prisma.studentProgress.count({
     *   where: {
     *     // ... the filter for the StudentProgresses we want to count
     *   }
     * })
    **/
    count<T extends StudentProgressCountArgs>(
      args?: Subset<T, StudentProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentProgressAggregateArgs>(args: Subset<T, StudentProgressAggregateArgs>): Prisma.PrismaPromise<GetStudentProgressAggregateType<T>>

    /**
     * Group by StudentProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProgressGroupByArgs} args - Group by arguments.
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
      T extends StudentProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentProgressGroupByArgs['orderBy'] }
        : { orderBy?: StudentProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentProgress model
   */
  readonly fields: StudentProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    belt_rank<T extends BeltRankDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BeltRankDefaultArgs<ExtArgs>>): Prisma__BeltRankClient<$Result.GetResult<Prisma.$BeltRankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentProgress model
   */
  interface StudentProgressFieldRefs {
    readonly id: FieldRef<"StudentProgress", 'String'>
    readonly user_id: FieldRef<"StudentProgress", 'String'>
    readonly belt_rank_id: FieldRef<"StudentProgress", 'String'>
    readonly classes_completed: FieldRef<"StudentProgress", 'Int'>
    readonly promoted: FieldRef<"StudentProgress", 'Boolean'>
    readonly promotion_date: FieldRef<"StudentProgress", 'DateTime'>
    readonly created_at: FieldRef<"StudentProgress", 'DateTime'>
    readonly updated_at: FieldRef<"StudentProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentProgress findUnique
   */
  export type StudentProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * Filter, which StudentProgress to fetch.
     */
    where: StudentProgressWhereUniqueInput
  }

  /**
   * StudentProgress findUniqueOrThrow
   */
  export type StudentProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * Filter, which StudentProgress to fetch.
     */
    where: StudentProgressWhereUniqueInput
  }

  /**
   * StudentProgress findFirst
   */
  export type StudentProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * Filter, which StudentProgress to fetch.
     */
    where?: StudentProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProgresses to fetch.
     */
    orderBy?: StudentProgressOrderByWithRelationInput | StudentProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProgresses.
     */
    cursor?: StudentProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProgresses.
     */
    distinct?: StudentProgressScalarFieldEnum | StudentProgressScalarFieldEnum[]
  }

  /**
   * StudentProgress findFirstOrThrow
   */
  export type StudentProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * Filter, which StudentProgress to fetch.
     */
    where?: StudentProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProgresses to fetch.
     */
    orderBy?: StudentProgressOrderByWithRelationInput | StudentProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProgresses.
     */
    cursor?: StudentProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProgresses.
     */
    distinct?: StudentProgressScalarFieldEnum | StudentProgressScalarFieldEnum[]
  }

  /**
   * StudentProgress findMany
   */
  export type StudentProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * Filter, which StudentProgresses to fetch.
     */
    where?: StudentProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProgresses to fetch.
     */
    orderBy?: StudentProgressOrderByWithRelationInput | StudentProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentProgresses.
     */
    cursor?: StudentProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProgresses.
     */
    skip?: number
    distinct?: StudentProgressScalarFieldEnum | StudentProgressScalarFieldEnum[]
  }

  /**
   * StudentProgress create
   */
  export type StudentProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentProgress.
     */
    data: XOR<StudentProgressCreateInput, StudentProgressUncheckedCreateInput>
  }

  /**
   * StudentProgress createMany
   */
  export type StudentProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentProgresses.
     */
    data: StudentProgressCreateManyInput | StudentProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentProgress createManyAndReturn
   */
  export type StudentProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * The data used to create many StudentProgresses.
     */
    data: StudentProgressCreateManyInput | StudentProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProgress update
   */
  export type StudentProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentProgress.
     */
    data: XOR<StudentProgressUpdateInput, StudentProgressUncheckedUpdateInput>
    /**
     * Choose, which StudentProgress to update.
     */
    where: StudentProgressWhereUniqueInput
  }

  /**
   * StudentProgress updateMany
   */
  export type StudentProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentProgresses.
     */
    data: XOR<StudentProgressUpdateManyMutationInput, StudentProgressUncheckedUpdateManyInput>
    /**
     * Filter which StudentProgresses to update
     */
    where?: StudentProgressWhereInput
    /**
     * Limit how many StudentProgresses to update.
     */
    limit?: number
  }

  /**
   * StudentProgress updateManyAndReturn
   */
  export type StudentProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * The data used to update StudentProgresses.
     */
    data: XOR<StudentProgressUpdateManyMutationInput, StudentProgressUncheckedUpdateManyInput>
    /**
     * Filter which StudentProgresses to update
     */
    where?: StudentProgressWhereInput
    /**
     * Limit how many StudentProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProgress upsert
   */
  export type StudentProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentProgress to update in case it exists.
     */
    where: StudentProgressWhereUniqueInput
    /**
     * In case the StudentProgress found by the `where` argument doesn't exist, create a new StudentProgress with this data.
     */
    create: XOR<StudentProgressCreateInput, StudentProgressUncheckedCreateInput>
    /**
     * In case the StudentProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentProgressUpdateInput, StudentProgressUncheckedUpdateInput>
  }

  /**
   * StudentProgress delete
   */
  export type StudentProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * Filter which StudentProgress to delete.
     */
    where: StudentProgressWhereUniqueInput
  }

  /**
   * StudentProgress deleteMany
   */
  export type StudentProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProgresses to delete
     */
    where?: StudentProgressWhereInput
    /**
     * Limit how many StudentProgresses to delete.
     */
    limit?: number
  }

  /**
   * StudentProgress without action
   */
  export type StudentProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
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
    password_hash: 'password_hash',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ModalityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ModalityScalarFieldEnum = (typeof ModalityScalarFieldEnum)[keyof typeof ModalityScalarFieldEnum]


  export const UserModalityScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    modality_id: 'modality_id',
    created_at: 'created_at'
  };

  export type UserModalityScalarFieldEnum = (typeof UserModalityScalarFieldEnum)[keyof typeof UserModalityScalarFieldEnum]


  export const BeltRankScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    order: 'order',
    modality_id: 'modality_id',
    required_classes: 'required_classes',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BeltRankScalarFieldEnum = (typeof BeltRankScalarFieldEnum)[keyof typeof BeltRankScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    start_time: 'start_time',
    end_time: 'end_time',
    instructor_id: 'instructor_id',
    modality_id: 'modality_id',
    max_students: 'max_students',
    is_recurring: 'is_recurring',
    recurrence_id: 'recurrence_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const ClassRecurrenceScalarFieldEnum: {
    id: 'id',
    days_of_week: 'days_of_week',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClassRecurrenceScalarFieldEnum = (typeof ClassRecurrenceScalarFieldEnum)[keyof typeof ClassRecurrenceScalarFieldEnum]


  export const CheckInScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    class_id: 'class_id',
    check_in_time: 'check_in_time',
    notes: 'notes'
  };

  export type CheckInScalarFieldEnum = (typeof CheckInScalarFieldEnum)[keyof typeof CheckInScalarFieldEnum]


  export const StudentProgressScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    belt_rank_id: 'belt_rank_id',
    classes_completed: 'classes_completed',
    promoted: 'promoted',
    promotion_date: 'promotion_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StudentProgressScalarFieldEnum = (typeof StudentProgressScalarFieldEnum)[keyof typeof StudentProgressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DayOfWeek[]'
   */
  export type ListEnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek[]'>
    


  /**
   * Reference to a field of type 'DayOfWeek'
   */
  export type EnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    modalities?: UserModalityListRelationFilter
    belt_ranks?: BeltRankListRelationFilter
    taught_classes?: ClassListRelationFilter
    check_ins?: CheckInListRelationFilter
    progress?: StudentProgressListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    modalities?: UserModalityOrderByRelationAggregateInput
    belt_ranks?: BeltRankOrderByRelationAggregateInput
    taught_classes?: ClassOrderByRelationAggregateInput
    check_ins?: CheckInOrderByRelationAggregateInput
    progress?: StudentProgressOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    modalities?: UserModalityListRelationFilter
    belt_ranks?: BeltRankListRelationFilter
    taught_classes?: ClassListRelationFilter
    check_ins?: CheckInListRelationFilter
    progress?: StudentProgressListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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
    password_hash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ModalityWhereInput = {
    AND?: ModalityWhereInput | ModalityWhereInput[]
    OR?: ModalityWhereInput[]
    NOT?: ModalityWhereInput | ModalityWhereInput[]
    id?: StringFilter<"Modality"> | string
    name?: StringFilter<"Modality"> | string
    description?: StringNullableFilter<"Modality"> | string | null
    created_at?: DateTimeFilter<"Modality"> | Date | string
    updated_at?: DateTimeFilter<"Modality"> | Date | string
    users?: UserModalityListRelationFilter
    belt_ranks?: BeltRankListRelationFilter
    classes?: ClassListRelationFilter
  }

  export type ModalityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: UserModalityOrderByRelationAggregateInput
    belt_ranks?: BeltRankOrderByRelationAggregateInput
    classes?: ClassOrderByRelationAggregateInput
  }

  export type ModalityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ModalityWhereInput | ModalityWhereInput[]
    OR?: ModalityWhereInput[]
    NOT?: ModalityWhereInput | ModalityWhereInput[]
    description?: StringNullableFilter<"Modality"> | string | null
    created_at?: DateTimeFilter<"Modality"> | Date | string
    updated_at?: DateTimeFilter<"Modality"> | Date | string
    users?: UserModalityListRelationFilter
    belt_ranks?: BeltRankListRelationFilter
    classes?: ClassListRelationFilter
  }, "id" | "name">

  export type ModalityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ModalityCountOrderByAggregateInput
    _max?: ModalityMaxOrderByAggregateInput
    _min?: ModalityMinOrderByAggregateInput
  }

  export type ModalityScalarWhereWithAggregatesInput = {
    AND?: ModalityScalarWhereWithAggregatesInput | ModalityScalarWhereWithAggregatesInput[]
    OR?: ModalityScalarWhereWithAggregatesInput[]
    NOT?: ModalityScalarWhereWithAggregatesInput | ModalityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Modality"> | string
    name?: StringWithAggregatesFilter<"Modality"> | string
    description?: StringNullableWithAggregatesFilter<"Modality"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Modality"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Modality"> | Date | string
  }

  export type UserModalityWhereInput = {
    AND?: UserModalityWhereInput | UserModalityWhereInput[]
    OR?: UserModalityWhereInput[]
    NOT?: UserModalityWhereInput | UserModalityWhereInput[]
    id?: StringFilter<"UserModality"> | string
    user_id?: StringFilter<"UserModality"> | string
    modality_id?: StringFilter<"UserModality"> | string
    created_at?: DateTimeFilter<"UserModality"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    modality?: XOR<ModalityScalarRelationFilter, ModalityWhereInput>
  }

  export type UserModalityOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    modality_id?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    modality?: ModalityOrderByWithRelationInput
  }

  export type UserModalityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_modality_id?: UserModalityUser_idModality_idCompoundUniqueInput
    AND?: UserModalityWhereInput | UserModalityWhereInput[]
    OR?: UserModalityWhereInput[]
    NOT?: UserModalityWhereInput | UserModalityWhereInput[]
    user_id?: StringFilter<"UserModality"> | string
    modality_id?: StringFilter<"UserModality"> | string
    created_at?: DateTimeFilter<"UserModality"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    modality?: XOR<ModalityScalarRelationFilter, ModalityWhereInput>
  }, "id" | "user_id_modality_id">

  export type UserModalityOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    modality_id?: SortOrder
    created_at?: SortOrder
    _count?: UserModalityCountOrderByAggregateInput
    _max?: UserModalityMaxOrderByAggregateInput
    _min?: UserModalityMinOrderByAggregateInput
  }

  export type UserModalityScalarWhereWithAggregatesInput = {
    AND?: UserModalityScalarWhereWithAggregatesInput | UserModalityScalarWhereWithAggregatesInput[]
    OR?: UserModalityScalarWhereWithAggregatesInput[]
    NOT?: UserModalityScalarWhereWithAggregatesInput | UserModalityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserModality"> | string
    user_id?: StringWithAggregatesFilter<"UserModality"> | string
    modality_id?: StringWithAggregatesFilter<"UserModality"> | string
    created_at?: DateTimeWithAggregatesFilter<"UserModality"> | Date | string
  }

  export type BeltRankWhereInput = {
    AND?: BeltRankWhereInput | BeltRankWhereInput[]
    OR?: BeltRankWhereInput[]
    NOT?: BeltRankWhereInput | BeltRankWhereInput[]
    id?: StringFilter<"BeltRank"> | string
    name?: StringFilter<"BeltRank"> | string
    color?: StringFilter<"BeltRank"> | string
    order?: IntFilter<"BeltRank"> | number
    modality_id?: StringFilter<"BeltRank"> | string
    required_classes?: IntFilter<"BeltRank"> | number
    created_at?: DateTimeFilter<"BeltRank"> | Date | string
    updated_at?: DateTimeFilter<"BeltRank"> | Date | string
    modality?: XOR<ModalityScalarRelationFilter, ModalityWhereInput>
    users?: UserListRelationFilter
    progress?: StudentProgressListRelationFilter
  }

  export type BeltRankOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    order?: SortOrder
    modality_id?: SortOrder
    required_classes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    modality?: ModalityOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    progress?: StudentProgressOrderByRelationAggregateInput
  }

  export type BeltRankWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    modality_id_order?: BeltRankModality_idOrderCompoundUniqueInput
    AND?: BeltRankWhereInput | BeltRankWhereInput[]
    OR?: BeltRankWhereInput[]
    NOT?: BeltRankWhereInput | BeltRankWhereInput[]
    name?: StringFilter<"BeltRank"> | string
    color?: StringFilter<"BeltRank"> | string
    order?: IntFilter<"BeltRank"> | number
    modality_id?: StringFilter<"BeltRank"> | string
    required_classes?: IntFilter<"BeltRank"> | number
    created_at?: DateTimeFilter<"BeltRank"> | Date | string
    updated_at?: DateTimeFilter<"BeltRank"> | Date | string
    modality?: XOR<ModalityScalarRelationFilter, ModalityWhereInput>
    users?: UserListRelationFilter
    progress?: StudentProgressListRelationFilter
  }, "id" | "modality_id_order">

  export type BeltRankOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    order?: SortOrder
    modality_id?: SortOrder
    required_classes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BeltRankCountOrderByAggregateInput
    _avg?: BeltRankAvgOrderByAggregateInput
    _max?: BeltRankMaxOrderByAggregateInput
    _min?: BeltRankMinOrderByAggregateInput
    _sum?: BeltRankSumOrderByAggregateInput
  }

  export type BeltRankScalarWhereWithAggregatesInput = {
    AND?: BeltRankScalarWhereWithAggregatesInput | BeltRankScalarWhereWithAggregatesInput[]
    OR?: BeltRankScalarWhereWithAggregatesInput[]
    NOT?: BeltRankScalarWhereWithAggregatesInput | BeltRankScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BeltRank"> | string
    name?: StringWithAggregatesFilter<"BeltRank"> | string
    color?: StringWithAggregatesFilter<"BeltRank"> | string
    order?: IntWithAggregatesFilter<"BeltRank"> | number
    modality_id?: StringWithAggregatesFilter<"BeltRank"> | string
    required_classes?: IntWithAggregatesFilter<"BeltRank"> | number
    created_at?: DateTimeWithAggregatesFilter<"BeltRank"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"BeltRank"> | Date | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    title?: StringFilter<"Class"> | string
    description?: StringNullableFilter<"Class"> | string | null
    start_time?: DateTimeFilter<"Class"> | Date | string
    end_time?: DateTimeFilter<"Class"> | Date | string
    instructor_id?: StringFilter<"Class"> | string
    modality_id?: StringFilter<"Class"> | string
    max_students?: IntNullableFilter<"Class"> | number | null
    is_recurring?: BoolFilter<"Class"> | boolean
    recurrence_id?: StringNullableFilter<"Class"> | string | null
    created_at?: DateTimeFilter<"Class"> | Date | string
    updated_at?: DateTimeFilter<"Class"> | Date | string
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    modality?: XOR<ModalityScalarRelationFilter, ModalityWhereInput>
    recurrence?: XOR<ClassRecurrenceNullableScalarRelationFilter, ClassRecurrenceWhereInput> | null
    check_ins?: CheckInListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    instructor_id?: SortOrder
    modality_id?: SortOrder
    max_students?: SortOrderInput | SortOrder
    is_recurring?: SortOrder
    recurrence_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    instructor?: UserOrderByWithRelationInput
    modality?: ModalityOrderByWithRelationInput
    recurrence?: ClassRecurrenceOrderByWithRelationInput
    check_ins?: CheckInOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    title?: StringFilter<"Class"> | string
    description?: StringNullableFilter<"Class"> | string | null
    start_time?: DateTimeFilter<"Class"> | Date | string
    end_time?: DateTimeFilter<"Class"> | Date | string
    instructor_id?: StringFilter<"Class"> | string
    modality_id?: StringFilter<"Class"> | string
    max_students?: IntNullableFilter<"Class"> | number | null
    is_recurring?: BoolFilter<"Class"> | boolean
    recurrence_id?: StringNullableFilter<"Class"> | string | null
    created_at?: DateTimeFilter<"Class"> | Date | string
    updated_at?: DateTimeFilter<"Class"> | Date | string
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    modality?: XOR<ModalityScalarRelationFilter, ModalityWhereInput>
    recurrence?: XOR<ClassRecurrenceNullableScalarRelationFilter, ClassRecurrenceWhereInput> | null
    check_ins?: CheckInListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    instructor_id?: SortOrder
    modality_id?: SortOrder
    max_students?: SortOrderInput | SortOrder
    is_recurring?: SortOrder
    recurrence_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _avg?: ClassAvgOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
    _sum?: ClassSumOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    title?: StringWithAggregatesFilter<"Class"> | string
    description?: StringNullableWithAggregatesFilter<"Class"> | string | null
    start_time?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    instructor_id?: StringWithAggregatesFilter<"Class"> | string
    modality_id?: StringWithAggregatesFilter<"Class"> | string
    max_students?: IntNullableWithAggregatesFilter<"Class"> | number | null
    is_recurring?: BoolWithAggregatesFilter<"Class"> | boolean
    recurrence_id?: StringNullableWithAggregatesFilter<"Class"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Class"> | Date | string
  }

  export type ClassRecurrenceWhereInput = {
    AND?: ClassRecurrenceWhereInput | ClassRecurrenceWhereInput[]
    OR?: ClassRecurrenceWhereInput[]
    NOT?: ClassRecurrenceWhereInput | ClassRecurrenceWhereInput[]
    id?: StringFilter<"ClassRecurrence"> | string
    days_of_week?: EnumDayOfWeekNullableListFilter<"ClassRecurrence">
    start_date?: DateTimeFilter<"ClassRecurrence"> | Date | string
    end_date?: DateTimeNullableFilter<"ClassRecurrence"> | Date | string | null
    created_at?: DateTimeFilter<"ClassRecurrence"> | Date | string
    updated_at?: DateTimeFilter<"ClassRecurrence"> | Date | string
    classes?: ClassListRelationFilter
  }

  export type ClassRecurrenceOrderByWithRelationInput = {
    id?: SortOrder
    days_of_week?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    classes?: ClassOrderByRelationAggregateInput
  }

  export type ClassRecurrenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassRecurrenceWhereInput | ClassRecurrenceWhereInput[]
    OR?: ClassRecurrenceWhereInput[]
    NOT?: ClassRecurrenceWhereInput | ClassRecurrenceWhereInput[]
    days_of_week?: EnumDayOfWeekNullableListFilter<"ClassRecurrence">
    start_date?: DateTimeFilter<"ClassRecurrence"> | Date | string
    end_date?: DateTimeNullableFilter<"ClassRecurrence"> | Date | string | null
    created_at?: DateTimeFilter<"ClassRecurrence"> | Date | string
    updated_at?: DateTimeFilter<"ClassRecurrence"> | Date | string
    classes?: ClassListRelationFilter
  }, "id">

  export type ClassRecurrenceOrderByWithAggregationInput = {
    id?: SortOrder
    days_of_week?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ClassRecurrenceCountOrderByAggregateInput
    _max?: ClassRecurrenceMaxOrderByAggregateInput
    _min?: ClassRecurrenceMinOrderByAggregateInput
  }

  export type ClassRecurrenceScalarWhereWithAggregatesInput = {
    AND?: ClassRecurrenceScalarWhereWithAggregatesInput | ClassRecurrenceScalarWhereWithAggregatesInput[]
    OR?: ClassRecurrenceScalarWhereWithAggregatesInput[]
    NOT?: ClassRecurrenceScalarWhereWithAggregatesInput | ClassRecurrenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassRecurrence"> | string
    days_of_week?: EnumDayOfWeekNullableListFilter<"ClassRecurrence">
    start_date?: DateTimeWithAggregatesFilter<"ClassRecurrence"> | Date | string
    end_date?: DateTimeNullableWithAggregatesFilter<"ClassRecurrence"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"ClassRecurrence"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ClassRecurrence"> | Date | string
  }

  export type CheckInWhereInput = {
    AND?: CheckInWhereInput | CheckInWhereInput[]
    OR?: CheckInWhereInput[]
    NOT?: CheckInWhereInput | CheckInWhereInput[]
    id?: StringFilter<"CheckIn"> | string
    user_id?: StringFilter<"CheckIn"> | string
    class_id?: StringFilter<"CheckIn"> | string
    check_in_time?: DateTimeFilter<"CheckIn"> | Date | string
    notes?: StringNullableFilter<"CheckIn"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }

  export type CheckInOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    check_in_time?: SortOrder
    notes?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type CheckInWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_class_id?: CheckInUser_idClass_idCompoundUniqueInput
    AND?: CheckInWhereInput | CheckInWhereInput[]
    OR?: CheckInWhereInput[]
    NOT?: CheckInWhereInput | CheckInWhereInput[]
    user_id?: StringFilter<"CheckIn"> | string
    class_id?: StringFilter<"CheckIn"> | string
    check_in_time?: DateTimeFilter<"CheckIn"> | Date | string
    notes?: StringNullableFilter<"CheckIn"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }, "id" | "user_id_class_id">

  export type CheckInOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    check_in_time?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: CheckInCountOrderByAggregateInput
    _max?: CheckInMaxOrderByAggregateInput
    _min?: CheckInMinOrderByAggregateInput
  }

  export type CheckInScalarWhereWithAggregatesInput = {
    AND?: CheckInScalarWhereWithAggregatesInput | CheckInScalarWhereWithAggregatesInput[]
    OR?: CheckInScalarWhereWithAggregatesInput[]
    NOT?: CheckInScalarWhereWithAggregatesInput | CheckInScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CheckIn"> | string
    user_id?: StringWithAggregatesFilter<"CheckIn"> | string
    class_id?: StringWithAggregatesFilter<"CheckIn"> | string
    check_in_time?: DateTimeWithAggregatesFilter<"CheckIn"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"CheckIn"> | string | null
  }

  export type StudentProgressWhereInput = {
    AND?: StudentProgressWhereInput | StudentProgressWhereInput[]
    OR?: StudentProgressWhereInput[]
    NOT?: StudentProgressWhereInput | StudentProgressWhereInput[]
    id?: StringFilter<"StudentProgress"> | string
    user_id?: StringFilter<"StudentProgress"> | string
    belt_rank_id?: StringFilter<"StudentProgress"> | string
    classes_completed?: IntFilter<"StudentProgress"> | number
    promoted?: BoolFilter<"StudentProgress"> | boolean
    promotion_date?: DateTimeNullableFilter<"StudentProgress"> | Date | string | null
    created_at?: DateTimeFilter<"StudentProgress"> | Date | string
    updated_at?: DateTimeFilter<"StudentProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    belt_rank?: XOR<BeltRankScalarRelationFilter, BeltRankWhereInput>
  }

  export type StudentProgressOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    belt_rank_id?: SortOrder
    classes_completed?: SortOrder
    promoted?: SortOrder
    promotion_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    belt_rank?: BeltRankOrderByWithRelationInput
  }

  export type StudentProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_belt_rank_id?: StudentProgressUser_idBelt_rank_idCompoundUniqueInput
    AND?: StudentProgressWhereInput | StudentProgressWhereInput[]
    OR?: StudentProgressWhereInput[]
    NOT?: StudentProgressWhereInput | StudentProgressWhereInput[]
    user_id?: StringFilter<"StudentProgress"> | string
    belt_rank_id?: StringFilter<"StudentProgress"> | string
    classes_completed?: IntFilter<"StudentProgress"> | number
    promoted?: BoolFilter<"StudentProgress"> | boolean
    promotion_date?: DateTimeNullableFilter<"StudentProgress"> | Date | string | null
    created_at?: DateTimeFilter<"StudentProgress"> | Date | string
    updated_at?: DateTimeFilter<"StudentProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    belt_rank?: XOR<BeltRankScalarRelationFilter, BeltRankWhereInput>
  }, "id" | "user_id_belt_rank_id">

  export type StudentProgressOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    belt_rank_id?: SortOrder
    classes_completed?: SortOrder
    promoted?: SortOrder
    promotion_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: StudentProgressCountOrderByAggregateInput
    _avg?: StudentProgressAvgOrderByAggregateInput
    _max?: StudentProgressMaxOrderByAggregateInput
    _min?: StudentProgressMinOrderByAggregateInput
    _sum?: StudentProgressSumOrderByAggregateInput
  }

  export type StudentProgressScalarWhereWithAggregatesInput = {
    AND?: StudentProgressScalarWhereWithAggregatesInput | StudentProgressScalarWhereWithAggregatesInput[]
    OR?: StudentProgressScalarWhereWithAggregatesInput[]
    NOT?: StudentProgressScalarWhereWithAggregatesInput | StudentProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentProgress"> | string
    user_id?: StringWithAggregatesFilter<"StudentProgress"> | string
    belt_rank_id?: StringWithAggregatesFilter<"StudentProgress"> | string
    classes_completed?: IntWithAggregatesFilter<"StudentProgress"> | number
    promoted?: BoolWithAggregatesFilter<"StudentProgress"> | boolean
    promotion_date?: DateTimeNullableWithAggregatesFilter<"StudentProgress"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"StudentProgress"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"StudentProgress"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    created_at?: Date | string
    updated_at?: Date | string
    modalities?: UserModalityCreateNestedManyWithoutUserInput
    belt_ranks?: BeltRankCreateNestedManyWithoutUsersInput
    taught_classes?: ClassCreateNestedManyWithoutInstructorInput
    check_ins?: CheckInCreateNestedManyWithoutUserInput
    progress?: StudentProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    created_at?: Date | string
    updated_at?: Date | string
    modalities?: UserModalityUncheckedCreateNestedManyWithoutUserInput
    belt_ranks?: BeltRankUncheckedCreateNestedManyWithoutUsersInput
    taught_classes?: ClassUncheckedCreateNestedManyWithoutInstructorInput
    check_ins?: CheckInUncheckedCreateNestedManyWithoutUserInput
    progress?: StudentProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modalities?: UserModalityUpdateManyWithoutUserNestedInput
    belt_ranks?: BeltRankUpdateManyWithoutUsersNestedInput
    taught_classes?: ClassUpdateManyWithoutInstructorNestedInput
    check_ins?: CheckInUpdateManyWithoutUserNestedInput
    progress?: StudentProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modalities?: UserModalityUncheckedUpdateManyWithoutUserNestedInput
    belt_ranks?: BeltRankUncheckedUpdateManyWithoutUsersNestedInput
    taught_classes?: ClassUncheckedUpdateManyWithoutInstructorNestedInput
    check_ins?: CheckInUncheckedUpdateManyWithoutUserNestedInput
    progress?: StudentProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModalityCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserModalityCreateNestedManyWithoutModalityInput
    belt_ranks?: BeltRankCreateNestedManyWithoutModalityInput
    classes?: ClassCreateNestedManyWithoutModalityInput
  }

  export type ModalityUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserModalityUncheckedCreateNestedManyWithoutModalityInput
    belt_ranks?: BeltRankUncheckedCreateNestedManyWithoutModalityInput
    classes?: ClassUncheckedCreateNestedManyWithoutModalityInput
  }

  export type ModalityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserModalityUpdateManyWithoutModalityNestedInput
    belt_ranks?: BeltRankUpdateManyWithoutModalityNestedInput
    classes?: ClassUpdateManyWithoutModalityNestedInput
  }

  export type ModalityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserModalityUncheckedUpdateManyWithoutModalityNestedInput
    belt_ranks?: BeltRankUncheckedUpdateManyWithoutModalityNestedInput
    classes?: ClassUncheckedUpdateManyWithoutModalityNestedInput
  }

  export type ModalityCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ModalityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModalityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModalityCreateInput = {
    id?: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutModalitiesInput
    modality: ModalityCreateNestedOneWithoutUsersInput
  }

  export type UserModalityUncheckedCreateInput = {
    id?: string
    user_id: string
    modality_id: string
    created_at?: Date | string
  }

  export type UserModalityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutModalitiesNestedInput
    modality?: ModalityUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserModalityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    modality_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModalityCreateManyInput = {
    id?: string
    user_id: string
    modality_id: string
    created_at?: Date | string
  }

  export type UserModalityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModalityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    modality_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeltRankCreateInput = {
    id?: string
    name: string
    color: string
    order: number
    required_classes?: number
    created_at?: Date | string
    updated_at?: Date | string
    modality: ModalityCreateNestedOneWithoutBelt_ranksInput
    users?: UserCreateNestedManyWithoutBelt_ranksInput
    progress?: StudentProgressCreateNestedManyWithoutBelt_rankInput
  }

  export type BeltRankUncheckedCreateInput = {
    id?: string
    name: string
    color: string
    order: number
    modality_id: string
    required_classes?: number
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBelt_ranksInput
    progress?: StudentProgressUncheckedCreateNestedManyWithoutBelt_rankInput
  }

  export type BeltRankUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    required_classes?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modality?: ModalityUpdateOneRequiredWithoutBelt_ranksNestedInput
    users?: UserUpdateManyWithoutBelt_ranksNestedInput
    progress?: StudentProgressUpdateManyWithoutBelt_rankNestedInput
  }

  export type BeltRankUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    modality_id?: StringFieldUpdateOperationsInput | string
    required_classes?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBelt_ranksNestedInput
    progress?: StudentProgressUncheckedUpdateManyWithoutBelt_rankNestedInput
  }

  export type BeltRankCreateManyInput = {
    id?: string
    name: string
    color: string
    order: number
    modality_id: string
    required_classes?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BeltRankUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    required_classes?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeltRankUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    modality_id?: StringFieldUpdateOperationsInput | string
    required_classes?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassCreateInput = {
    id?: string
    title: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    max_students?: number | null
    is_recurring?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    instructor: UserCreateNestedOneWithoutTaught_classesInput
    modality: ModalityCreateNestedOneWithoutClassesInput
    recurrence?: ClassRecurrenceCreateNestedOneWithoutClassesInput
    check_ins?: CheckInCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    instructor_id: string
    modality_id: string
    max_students?: number | null
    is_recurring?: boolean
    recurrence_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    check_ins?: CheckInUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_students?: NullableIntFieldUpdateOperationsInput | number | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutTaught_classesNestedInput
    modality?: ModalityUpdateOneRequiredWithoutClassesNestedInput
    recurrence?: ClassRecurrenceUpdateOneWithoutClassesNestedInput
    check_ins?: CheckInUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor_id?: StringFieldUpdateOperationsInput | string
    modality_id?: StringFieldUpdateOperationsInput | string
    max_students?: NullableIntFieldUpdateOperationsInput | number | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    check_ins?: CheckInUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    instructor_id: string
    modality_id: string
    max_students?: number | null
    is_recurring?: boolean
    recurrence_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_students?: NullableIntFieldUpdateOperationsInput | number | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor_id?: StringFieldUpdateOperationsInput | string
    modality_id?: StringFieldUpdateOperationsInput | string
    max_students?: NullableIntFieldUpdateOperationsInput | number | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassRecurrenceCreateInput = {
    id?: string
    days_of_week?: ClassRecurrenceCreatedays_of_weekInput | $Enums.DayOfWeek[]
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    classes?: ClassCreateNestedManyWithoutRecurrenceInput
  }

  export type ClassRecurrenceUncheckedCreateInput = {
    id?: string
    days_of_week?: ClassRecurrenceCreatedays_of_weekInput | $Enums.DayOfWeek[]
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    classes?: ClassUncheckedCreateNestedManyWithoutRecurrenceInput
  }

  export type ClassRecurrenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    days_of_week?: ClassRecurrenceUpdatedays_of_weekInput | $Enums.DayOfWeek[]
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassUpdateManyWithoutRecurrenceNestedInput
  }

  export type ClassRecurrenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    days_of_week?: ClassRecurrenceUpdatedays_of_weekInput | $Enums.DayOfWeek[]
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassUncheckedUpdateManyWithoutRecurrenceNestedInput
  }

  export type ClassRecurrenceCreateManyInput = {
    id?: string
    days_of_week?: ClassRecurrenceCreatedays_of_weekInput | $Enums.DayOfWeek[]
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassRecurrenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    days_of_week?: ClassRecurrenceUpdatedays_of_weekInput | $Enums.DayOfWeek[]
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassRecurrenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    days_of_week?: ClassRecurrenceUpdatedays_of_weekInput | $Enums.DayOfWeek[]
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInCreateInput = {
    id?: string
    check_in_time?: Date | string
    notes?: string | null
    user: UserCreateNestedOneWithoutCheck_insInput
    class: ClassCreateNestedOneWithoutCheck_insInput
  }

  export type CheckInUncheckedCreateInput = {
    id?: string
    user_id: string
    class_id: string
    check_in_time?: Date | string
    notes?: string | null
  }

  export type CheckInUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCheck_insNestedInput
    class?: ClassUpdateOneRequiredWithoutCheck_insNestedInput
  }

  export type CheckInUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckInCreateManyInput = {
    id?: string
    user_id: string
    class_id: string
    check_in_time?: Date | string
    notes?: string | null
  }

  export type CheckInUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckInUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProgressCreateInput = {
    id?: string
    classes_completed?: number
    promoted?: boolean
    promotion_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutProgressInput
    belt_rank: BeltRankCreateNestedOneWithoutProgressInput
  }

  export type StudentProgressUncheckedCreateInput = {
    id?: string
    user_id: string
    belt_rank_id: string
    classes_completed?: number
    promoted?: boolean
    promotion_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StudentProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classes_completed?: IntFieldUpdateOperationsInput | number
    promoted?: BoolFieldUpdateOperationsInput | boolean
    promotion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
    belt_rank?: BeltRankUpdateOneRequiredWithoutProgressNestedInput
  }

  export type StudentProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    belt_rank_id?: StringFieldUpdateOperationsInput | string
    classes_completed?: IntFieldUpdateOperationsInput | number
    promoted?: BoolFieldUpdateOperationsInput | boolean
    promotion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProgressCreateManyInput = {
    id?: string
    user_id: string
    belt_rank_id: string
    classes_completed?: number
    promoted?: boolean
    promotion_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StudentProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    classes_completed?: IntFieldUpdateOperationsInput | number
    promoted?: BoolFieldUpdateOperationsInput | boolean
    promotion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    belt_rank_id?: StringFieldUpdateOperationsInput | string
    classes_completed?: IntFieldUpdateOperationsInput | number
    promoted?: BoolFieldUpdateOperationsInput | boolean
    promotion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type UserModalityListRelationFilter = {
    every?: UserModalityWhereInput
    some?: UserModalityWhereInput
    none?: UserModalityWhereInput
  }

  export type BeltRankListRelationFilter = {
    every?: BeltRankWhereInput
    some?: BeltRankWhereInput
    none?: BeltRankWhereInput
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type CheckInListRelationFilter = {
    every?: CheckInWhereInput
    some?: CheckInWhereInput
    none?: CheckInWhereInput
  }

  export type StudentProgressListRelationFilter = {
    every?: StudentProgressWhereInput
    some?: StudentProgressWhereInput
    none?: StudentProgressWhereInput
  }

  export type UserModalityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BeltRankOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CheckInOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ModalityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ModalityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ModalityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ModalityScalarRelationFilter = {
    is?: ModalityWhereInput
    isNot?: ModalityWhereInput
  }

  export type UserModalityUser_idModality_idCompoundUniqueInput = {
    user_id: string
    modality_id: string
  }

  export type UserModalityCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    modality_id?: SortOrder
    created_at?: SortOrder
  }

  export type UserModalityMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    modality_id?: SortOrder
    created_at?: SortOrder
  }

  export type UserModalityMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    modality_id?: SortOrder
    created_at?: SortOrder
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BeltRankModality_idOrderCompoundUniqueInput = {
    modality_id: string
    order: number
  }

  export type BeltRankCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    order?: SortOrder
    modality_id?: SortOrder
    required_classes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BeltRankAvgOrderByAggregateInput = {
    order?: SortOrder
    required_classes?: SortOrder
  }

  export type BeltRankMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    order?: SortOrder
    modality_id?: SortOrder
    required_classes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BeltRankMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    order?: SortOrder
    modality_id?: SortOrder
    required_classes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BeltRankSumOrderByAggregateInput = {
    order?: SortOrder
    required_classes?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ClassRecurrenceNullableScalarRelationFilter = {
    is?: ClassRecurrenceWhereInput | null
    isNot?: ClassRecurrenceWhereInput | null
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    instructor_id?: SortOrder
    modality_id?: SortOrder
    max_students?: SortOrder
    is_recurring?: SortOrder
    recurrence_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClassAvgOrderByAggregateInput = {
    max_students?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    instructor_id?: SortOrder
    modality_id?: SortOrder
    max_students?: SortOrder
    is_recurring?: SortOrder
    recurrence_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    instructor_id?: SortOrder
    modality_id?: SortOrder
    max_students?: SortOrder
    is_recurring?: SortOrder
    recurrence_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClassSumOrderByAggregateInput = {
    max_students?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDayOfWeekNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel> | null
    has?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    hasSome?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type ClassRecurrenceCountOrderByAggregateInput = {
    id?: SortOrder
    days_of_week?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClassRecurrenceMaxOrderByAggregateInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClassRecurrenceMinOrderByAggregateInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type CheckInUser_idClass_idCompoundUniqueInput = {
    user_id: string
    class_id: string
  }

  export type CheckInCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    check_in_time?: SortOrder
    notes?: SortOrder
  }

  export type CheckInMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    check_in_time?: SortOrder
    notes?: SortOrder
  }

  export type CheckInMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    check_in_time?: SortOrder
    notes?: SortOrder
  }

  export type BeltRankScalarRelationFilter = {
    is?: BeltRankWhereInput
    isNot?: BeltRankWhereInput
  }

  export type StudentProgressUser_idBelt_rank_idCompoundUniqueInput = {
    user_id: string
    belt_rank_id: string
  }

  export type StudentProgressCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    belt_rank_id?: SortOrder
    classes_completed?: SortOrder
    promoted?: SortOrder
    promotion_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StudentProgressAvgOrderByAggregateInput = {
    classes_completed?: SortOrder
  }

  export type StudentProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    belt_rank_id?: SortOrder
    classes_completed?: SortOrder
    promoted?: SortOrder
    promotion_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StudentProgressMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    belt_rank_id?: SortOrder
    classes_completed?: SortOrder
    promoted?: SortOrder
    promotion_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StudentProgressSumOrderByAggregateInput = {
    classes_completed?: SortOrder
  }

  export type UserModalityCreateNestedManyWithoutUserInput = {
    create?: XOR<UserModalityCreateWithoutUserInput, UserModalityUncheckedCreateWithoutUserInput> | UserModalityCreateWithoutUserInput[] | UserModalityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModalityCreateOrConnectWithoutUserInput | UserModalityCreateOrConnectWithoutUserInput[]
    createMany?: UserModalityCreateManyUserInputEnvelope
    connect?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
  }

  export type BeltRankCreateNestedManyWithoutUsersInput = {
    create?: XOR<BeltRankCreateWithoutUsersInput, BeltRankUncheckedCreateWithoutUsersInput> | BeltRankCreateWithoutUsersInput[] | BeltRankUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: BeltRankCreateOrConnectWithoutUsersInput | BeltRankCreateOrConnectWithoutUsersInput[]
    connect?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
  }

  export type ClassCreateNestedManyWithoutInstructorInput = {
    create?: XOR<ClassCreateWithoutInstructorInput, ClassUncheckedCreateWithoutInstructorInput> | ClassCreateWithoutInstructorInput[] | ClassUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutInstructorInput | ClassCreateOrConnectWithoutInstructorInput[]
    createMany?: ClassCreateManyInstructorInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type CheckInCreateNestedManyWithoutUserInput = {
    create?: XOR<CheckInCreateWithoutUserInput, CheckInUncheckedCreateWithoutUserInput> | CheckInCreateWithoutUserInput[] | CheckInUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutUserInput | CheckInCreateOrConnectWithoutUserInput[]
    createMany?: CheckInCreateManyUserInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type StudentProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<StudentProgressCreateWithoutUserInput, StudentProgressUncheckedCreateWithoutUserInput> | StudentProgressCreateWithoutUserInput[] | StudentProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentProgressCreateOrConnectWithoutUserInput | StudentProgressCreateOrConnectWithoutUserInput[]
    createMany?: StudentProgressCreateManyUserInputEnvelope
    connect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
  }

  export type UserModalityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserModalityCreateWithoutUserInput, UserModalityUncheckedCreateWithoutUserInput> | UserModalityCreateWithoutUserInput[] | UserModalityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModalityCreateOrConnectWithoutUserInput | UserModalityCreateOrConnectWithoutUserInput[]
    createMany?: UserModalityCreateManyUserInputEnvelope
    connect?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
  }

  export type BeltRankUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<BeltRankCreateWithoutUsersInput, BeltRankUncheckedCreateWithoutUsersInput> | BeltRankCreateWithoutUsersInput[] | BeltRankUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: BeltRankCreateOrConnectWithoutUsersInput | BeltRankCreateOrConnectWithoutUsersInput[]
    connect?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<ClassCreateWithoutInstructorInput, ClassUncheckedCreateWithoutInstructorInput> | ClassCreateWithoutInstructorInput[] | ClassUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutInstructorInput | ClassCreateOrConnectWithoutInstructorInput[]
    createMany?: ClassCreateManyInstructorInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type CheckInUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CheckInCreateWithoutUserInput, CheckInUncheckedCreateWithoutUserInput> | CheckInCreateWithoutUserInput[] | CheckInUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutUserInput | CheckInCreateOrConnectWithoutUserInput[]
    createMany?: CheckInCreateManyUserInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type StudentProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StudentProgressCreateWithoutUserInput, StudentProgressUncheckedCreateWithoutUserInput> | StudentProgressCreateWithoutUserInput[] | StudentProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentProgressCreateOrConnectWithoutUserInput | StudentProgressCreateOrConnectWithoutUserInput[]
    createMany?: StudentProgressCreateManyUserInputEnvelope
    connect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserModalityUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserModalityCreateWithoutUserInput, UserModalityUncheckedCreateWithoutUserInput> | UserModalityCreateWithoutUserInput[] | UserModalityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModalityCreateOrConnectWithoutUserInput | UserModalityCreateOrConnectWithoutUserInput[]
    upsert?: UserModalityUpsertWithWhereUniqueWithoutUserInput | UserModalityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserModalityCreateManyUserInputEnvelope
    set?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
    disconnect?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
    delete?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
    connect?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
    update?: UserModalityUpdateWithWhereUniqueWithoutUserInput | UserModalityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserModalityUpdateManyWithWhereWithoutUserInput | UserModalityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserModalityScalarWhereInput | UserModalityScalarWhereInput[]
  }

  export type BeltRankUpdateManyWithoutUsersNestedInput = {
    create?: XOR<BeltRankCreateWithoutUsersInput, BeltRankUncheckedCreateWithoutUsersInput> | BeltRankCreateWithoutUsersInput[] | BeltRankUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: BeltRankCreateOrConnectWithoutUsersInput | BeltRankCreateOrConnectWithoutUsersInput[]
    upsert?: BeltRankUpsertWithWhereUniqueWithoutUsersInput | BeltRankUpsertWithWhereUniqueWithoutUsersInput[]
    set?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
    disconnect?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
    delete?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
    connect?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
    update?: BeltRankUpdateWithWhereUniqueWithoutUsersInput | BeltRankUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: BeltRankUpdateManyWithWhereWithoutUsersInput | BeltRankUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: BeltRankScalarWhereInput | BeltRankScalarWhereInput[]
  }

  export type ClassUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<ClassCreateWithoutInstructorInput, ClassUncheckedCreateWithoutInstructorInput> | ClassCreateWithoutInstructorInput[] | ClassUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutInstructorInput | ClassCreateOrConnectWithoutInstructorInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutInstructorInput | ClassUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: ClassCreateManyInstructorInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutInstructorInput | ClassUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutInstructorInput | ClassUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type CheckInUpdateManyWithoutUserNestedInput = {
    create?: XOR<CheckInCreateWithoutUserInput, CheckInUncheckedCreateWithoutUserInput> | CheckInCreateWithoutUserInput[] | CheckInUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutUserInput | CheckInCreateOrConnectWithoutUserInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutUserInput | CheckInUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CheckInCreateManyUserInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutUserInput | CheckInUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutUserInput | CheckInUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type StudentProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudentProgressCreateWithoutUserInput, StudentProgressUncheckedCreateWithoutUserInput> | StudentProgressCreateWithoutUserInput[] | StudentProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentProgressCreateOrConnectWithoutUserInput | StudentProgressCreateOrConnectWithoutUserInput[]
    upsert?: StudentProgressUpsertWithWhereUniqueWithoutUserInput | StudentProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudentProgressCreateManyUserInputEnvelope
    set?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    disconnect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    delete?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    connect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    update?: StudentProgressUpdateWithWhereUniqueWithoutUserInput | StudentProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudentProgressUpdateManyWithWhereWithoutUserInput | StudentProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudentProgressScalarWhereInput | StudentProgressScalarWhereInput[]
  }

  export type UserModalityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserModalityCreateWithoutUserInput, UserModalityUncheckedCreateWithoutUserInput> | UserModalityCreateWithoutUserInput[] | UserModalityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModalityCreateOrConnectWithoutUserInput | UserModalityCreateOrConnectWithoutUserInput[]
    upsert?: UserModalityUpsertWithWhereUniqueWithoutUserInput | UserModalityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserModalityCreateManyUserInputEnvelope
    set?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
    disconnect?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
    delete?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
    connect?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
    update?: UserModalityUpdateWithWhereUniqueWithoutUserInput | UserModalityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserModalityUpdateManyWithWhereWithoutUserInput | UserModalityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserModalityScalarWhereInput | UserModalityScalarWhereInput[]
  }

  export type BeltRankUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<BeltRankCreateWithoutUsersInput, BeltRankUncheckedCreateWithoutUsersInput> | BeltRankCreateWithoutUsersInput[] | BeltRankUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: BeltRankCreateOrConnectWithoutUsersInput | BeltRankCreateOrConnectWithoutUsersInput[]
    upsert?: BeltRankUpsertWithWhereUniqueWithoutUsersInput | BeltRankUpsertWithWhereUniqueWithoutUsersInput[]
    set?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
    disconnect?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
    delete?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
    connect?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
    update?: BeltRankUpdateWithWhereUniqueWithoutUsersInput | BeltRankUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: BeltRankUpdateManyWithWhereWithoutUsersInput | BeltRankUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: BeltRankScalarWhereInput | BeltRankScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<ClassCreateWithoutInstructorInput, ClassUncheckedCreateWithoutInstructorInput> | ClassCreateWithoutInstructorInput[] | ClassUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutInstructorInput | ClassCreateOrConnectWithoutInstructorInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutInstructorInput | ClassUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: ClassCreateManyInstructorInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutInstructorInput | ClassUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutInstructorInput | ClassUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type CheckInUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CheckInCreateWithoutUserInput, CheckInUncheckedCreateWithoutUserInput> | CheckInCreateWithoutUserInput[] | CheckInUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutUserInput | CheckInCreateOrConnectWithoutUserInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutUserInput | CheckInUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CheckInCreateManyUserInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutUserInput | CheckInUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutUserInput | CheckInUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type StudentProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudentProgressCreateWithoutUserInput, StudentProgressUncheckedCreateWithoutUserInput> | StudentProgressCreateWithoutUserInput[] | StudentProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentProgressCreateOrConnectWithoutUserInput | StudentProgressCreateOrConnectWithoutUserInput[]
    upsert?: StudentProgressUpsertWithWhereUniqueWithoutUserInput | StudentProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudentProgressCreateManyUserInputEnvelope
    set?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    disconnect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    delete?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    connect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    update?: StudentProgressUpdateWithWhereUniqueWithoutUserInput | StudentProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudentProgressUpdateManyWithWhereWithoutUserInput | StudentProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudentProgressScalarWhereInput | StudentProgressScalarWhereInput[]
  }

  export type UserModalityCreateNestedManyWithoutModalityInput = {
    create?: XOR<UserModalityCreateWithoutModalityInput, UserModalityUncheckedCreateWithoutModalityInput> | UserModalityCreateWithoutModalityInput[] | UserModalityUncheckedCreateWithoutModalityInput[]
    connectOrCreate?: UserModalityCreateOrConnectWithoutModalityInput | UserModalityCreateOrConnectWithoutModalityInput[]
    createMany?: UserModalityCreateManyModalityInputEnvelope
    connect?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
  }

  export type BeltRankCreateNestedManyWithoutModalityInput = {
    create?: XOR<BeltRankCreateWithoutModalityInput, BeltRankUncheckedCreateWithoutModalityInput> | BeltRankCreateWithoutModalityInput[] | BeltRankUncheckedCreateWithoutModalityInput[]
    connectOrCreate?: BeltRankCreateOrConnectWithoutModalityInput | BeltRankCreateOrConnectWithoutModalityInput[]
    createMany?: BeltRankCreateManyModalityInputEnvelope
    connect?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
  }

  export type ClassCreateNestedManyWithoutModalityInput = {
    create?: XOR<ClassCreateWithoutModalityInput, ClassUncheckedCreateWithoutModalityInput> | ClassCreateWithoutModalityInput[] | ClassUncheckedCreateWithoutModalityInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutModalityInput | ClassCreateOrConnectWithoutModalityInput[]
    createMany?: ClassCreateManyModalityInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type UserModalityUncheckedCreateNestedManyWithoutModalityInput = {
    create?: XOR<UserModalityCreateWithoutModalityInput, UserModalityUncheckedCreateWithoutModalityInput> | UserModalityCreateWithoutModalityInput[] | UserModalityUncheckedCreateWithoutModalityInput[]
    connectOrCreate?: UserModalityCreateOrConnectWithoutModalityInput | UserModalityCreateOrConnectWithoutModalityInput[]
    createMany?: UserModalityCreateManyModalityInputEnvelope
    connect?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
  }

  export type BeltRankUncheckedCreateNestedManyWithoutModalityInput = {
    create?: XOR<BeltRankCreateWithoutModalityInput, BeltRankUncheckedCreateWithoutModalityInput> | BeltRankCreateWithoutModalityInput[] | BeltRankUncheckedCreateWithoutModalityInput[]
    connectOrCreate?: BeltRankCreateOrConnectWithoutModalityInput | BeltRankCreateOrConnectWithoutModalityInput[]
    createMany?: BeltRankCreateManyModalityInputEnvelope
    connect?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutModalityInput = {
    create?: XOR<ClassCreateWithoutModalityInput, ClassUncheckedCreateWithoutModalityInput> | ClassCreateWithoutModalityInput[] | ClassUncheckedCreateWithoutModalityInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutModalityInput | ClassCreateOrConnectWithoutModalityInput[]
    createMany?: ClassCreateManyModalityInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserModalityUpdateManyWithoutModalityNestedInput = {
    create?: XOR<UserModalityCreateWithoutModalityInput, UserModalityUncheckedCreateWithoutModalityInput> | UserModalityCreateWithoutModalityInput[] | UserModalityUncheckedCreateWithoutModalityInput[]
    connectOrCreate?: UserModalityCreateOrConnectWithoutModalityInput | UserModalityCreateOrConnectWithoutModalityInput[]
    upsert?: UserModalityUpsertWithWhereUniqueWithoutModalityInput | UserModalityUpsertWithWhereUniqueWithoutModalityInput[]
    createMany?: UserModalityCreateManyModalityInputEnvelope
    set?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
    disconnect?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
    delete?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
    connect?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
    update?: UserModalityUpdateWithWhereUniqueWithoutModalityInput | UserModalityUpdateWithWhereUniqueWithoutModalityInput[]
    updateMany?: UserModalityUpdateManyWithWhereWithoutModalityInput | UserModalityUpdateManyWithWhereWithoutModalityInput[]
    deleteMany?: UserModalityScalarWhereInput | UserModalityScalarWhereInput[]
  }

  export type BeltRankUpdateManyWithoutModalityNestedInput = {
    create?: XOR<BeltRankCreateWithoutModalityInput, BeltRankUncheckedCreateWithoutModalityInput> | BeltRankCreateWithoutModalityInput[] | BeltRankUncheckedCreateWithoutModalityInput[]
    connectOrCreate?: BeltRankCreateOrConnectWithoutModalityInput | BeltRankCreateOrConnectWithoutModalityInput[]
    upsert?: BeltRankUpsertWithWhereUniqueWithoutModalityInput | BeltRankUpsertWithWhereUniqueWithoutModalityInput[]
    createMany?: BeltRankCreateManyModalityInputEnvelope
    set?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
    disconnect?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
    delete?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
    connect?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
    update?: BeltRankUpdateWithWhereUniqueWithoutModalityInput | BeltRankUpdateWithWhereUniqueWithoutModalityInput[]
    updateMany?: BeltRankUpdateManyWithWhereWithoutModalityInput | BeltRankUpdateManyWithWhereWithoutModalityInput[]
    deleteMany?: BeltRankScalarWhereInput | BeltRankScalarWhereInput[]
  }

  export type ClassUpdateManyWithoutModalityNestedInput = {
    create?: XOR<ClassCreateWithoutModalityInput, ClassUncheckedCreateWithoutModalityInput> | ClassCreateWithoutModalityInput[] | ClassUncheckedCreateWithoutModalityInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutModalityInput | ClassCreateOrConnectWithoutModalityInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutModalityInput | ClassUpsertWithWhereUniqueWithoutModalityInput[]
    createMany?: ClassCreateManyModalityInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutModalityInput | ClassUpdateWithWhereUniqueWithoutModalityInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutModalityInput | ClassUpdateManyWithWhereWithoutModalityInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type UserModalityUncheckedUpdateManyWithoutModalityNestedInput = {
    create?: XOR<UserModalityCreateWithoutModalityInput, UserModalityUncheckedCreateWithoutModalityInput> | UserModalityCreateWithoutModalityInput[] | UserModalityUncheckedCreateWithoutModalityInput[]
    connectOrCreate?: UserModalityCreateOrConnectWithoutModalityInput | UserModalityCreateOrConnectWithoutModalityInput[]
    upsert?: UserModalityUpsertWithWhereUniqueWithoutModalityInput | UserModalityUpsertWithWhereUniqueWithoutModalityInput[]
    createMany?: UserModalityCreateManyModalityInputEnvelope
    set?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
    disconnect?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
    delete?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
    connect?: UserModalityWhereUniqueInput | UserModalityWhereUniqueInput[]
    update?: UserModalityUpdateWithWhereUniqueWithoutModalityInput | UserModalityUpdateWithWhereUniqueWithoutModalityInput[]
    updateMany?: UserModalityUpdateManyWithWhereWithoutModalityInput | UserModalityUpdateManyWithWhereWithoutModalityInput[]
    deleteMany?: UserModalityScalarWhereInput | UserModalityScalarWhereInput[]
  }

  export type BeltRankUncheckedUpdateManyWithoutModalityNestedInput = {
    create?: XOR<BeltRankCreateWithoutModalityInput, BeltRankUncheckedCreateWithoutModalityInput> | BeltRankCreateWithoutModalityInput[] | BeltRankUncheckedCreateWithoutModalityInput[]
    connectOrCreate?: BeltRankCreateOrConnectWithoutModalityInput | BeltRankCreateOrConnectWithoutModalityInput[]
    upsert?: BeltRankUpsertWithWhereUniqueWithoutModalityInput | BeltRankUpsertWithWhereUniqueWithoutModalityInput[]
    createMany?: BeltRankCreateManyModalityInputEnvelope
    set?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
    disconnect?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
    delete?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
    connect?: BeltRankWhereUniqueInput | BeltRankWhereUniqueInput[]
    update?: BeltRankUpdateWithWhereUniqueWithoutModalityInput | BeltRankUpdateWithWhereUniqueWithoutModalityInput[]
    updateMany?: BeltRankUpdateManyWithWhereWithoutModalityInput | BeltRankUpdateManyWithWhereWithoutModalityInput[]
    deleteMany?: BeltRankScalarWhereInput | BeltRankScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutModalityNestedInput = {
    create?: XOR<ClassCreateWithoutModalityInput, ClassUncheckedCreateWithoutModalityInput> | ClassCreateWithoutModalityInput[] | ClassUncheckedCreateWithoutModalityInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutModalityInput | ClassCreateOrConnectWithoutModalityInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutModalityInput | ClassUpsertWithWhereUniqueWithoutModalityInput[]
    createMany?: ClassCreateManyModalityInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutModalityInput | ClassUpdateWithWhereUniqueWithoutModalityInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutModalityInput | ClassUpdateManyWithWhereWithoutModalityInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutModalitiesInput = {
    create?: XOR<UserCreateWithoutModalitiesInput, UserUncheckedCreateWithoutModalitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutModalitiesInput
    connect?: UserWhereUniqueInput
  }

  export type ModalityCreateNestedOneWithoutUsersInput = {
    create?: XOR<ModalityCreateWithoutUsersInput, ModalityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ModalityCreateOrConnectWithoutUsersInput
    connect?: ModalityWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutModalitiesNestedInput = {
    create?: XOR<UserCreateWithoutModalitiesInput, UserUncheckedCreateWithoutModalitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutModalitiesInput
    upsert?: UserUpsertWithoutModalitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModalitiesInput, UserUpdateWithoutModalitiesInput>, UserUncheckedUpdateWithoutModalitiesInput>
  }

  export type ModalityUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ModalityCreateWithoutUsersInput, ModalityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ModalityCreateOrConnectWithoutUsersInput
    upsert?: ModalityUpsertWithoutUsersInput
    connect?: ModalityWhereUniqueInput
    update?: XOR<XOR<ModalityUpdateToOneWithWhereWithoutUsersInput, ModalityUpdateWithoutUsersInput>, ModalityUncheckedUpdateWithoutUsersInput>
  }

  export type ModalityCreateNestedOneWithoutBelt_ranksInput = {
    create?: XOR<ModalityCreateWithoutBelt_ranksInput, ModalityUncheckedCreateWithoutBelt_ranksInput>
    connectOrCreate?: ModalityCreateOrConnectWithoutBelt_ranksInput
    connect?: ModalityWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutBelt_ranksInput = {
    create?: XOR<UserCreateWithoutBelt_ranksInput, UserUncheckedCreateWithoutBelt_ranksInput> | UserCreateWithoutBelt_ranksInput[] | UserUncheckedCreateWithoutBelt_ranksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBelt_ranksInput | UserCreateOrConnectWithoutBelt_ranksInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StudentProgressCreateNestedManyWithoutBelt_rankInput = {
    create?: XOR<StudentProgressCreateWithoutBelt_rankInput, StudentProgressUncheckedCreateWithoutBelt_rankInput> | StudentProgressCreateWithoutBelt_rankInput[] | StudentProgressUncheckedCreateWithoutBelt_rankInput[]
    connectOrCreate?: StudentProgressCreateOrConnectWithoutBelt_rankInput | StudentProgressCreateOrConnectWithoutBelt_rankInput[]
    createMany?: StudentProgressCreateManyBelt_rankInputEnvelope
    connect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBelt_ranksInput = {
    create?: XOR<UserCreateWithoutBelt_ranksInput, UserUncheckedCreateWithoutBelt_ranksInput> | UserCreateWithoutBelt_ranksInput[] | UserUncheckedCreateWithoutBelt_ranksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBelt_ranksInput | UserCreateOrConnectWithoutBelt_ranksInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StudentProgressUncheckedCreateNestedManyWithoutBelt_rankInput = {
    create?: XOR<StudentProgressCreateWithoutBelt_rankInput, StudentProgressUncheckedCreateWithoutBelt_rankInput> | StudentProgressCreateWithoutBelt_rankInput[] | StudentProgressUncheckedCreateWithoutBelt_rankInput[]
    connectOrCreate?: StudentProgressCreateOrConnectWithoutBelt_rankInput | StudentProgressCreateOrConnectWithoutBelt_rankInput[]
    createMany?: StudentProgressCreateManyBelt_rankInputEnvelope
    connect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ModalityUpdateOneRequiredWithoutBelt_ranksNestedInput = {
    create?: XOR<ModalityCreateWithoutBelt_ranksInput, ModalityUncheckedCreateWithoutBelt_ranksInput>
    connectOrCreate?: ModalityCreateOrConnectWithoutBelt_ranksInput
    upsert?: ModalityUpsertWithoutBelt_ranksInput
    connect?: ModalityWhereUniqueInput
    update?: XOR<XOR<ModalityUpdateToOneWithWhereWithoutBelt_ranksInput, ModalityUpdateWithoutBelt_ranksInput>, ModalityUncheckedUpdateWithoutBelt_ranksInput>
  }

  export type UserUpdateManyWithoutBelt_ranksNestedInput = {
    create?: XOR<UserCreateWithoutBelt_ranksInput, UserUncheckedCreateWithoutBelt_ranksInput> | UserCreateWithoutBelt_ranksInput[] | UserUncheckedCreateWithoutBelt_ranksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBelt_ranksInput | UserCreateOrConnectWithoutBelt_ranksInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBelt_ranksInput | UserUpsertWithWhereUniqueWithoutBelt_ranksInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBelt_ranksInput | UserUpdateWithWhereUniqueWithoutBelt_ranksInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBelt_ranksInput | UserUpdateManyWithWhereWithoutBelt_ranksInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StudentProgressUpdateManyWithoutBelt_rankNestedInput = {
    create?: XOR<StudentProgressCreateWithoutBelt_rankInput, StudentProgressUncheckedCreateWithoutBelt_rankInput> | StudentProgressCreateWithoutBelt_rankInput[] | StudentProgressUncheckedCreateWithoutBelt_rankInput[]
    connectOrCreate?: StudentProgressCreateOrConnectWithoutBelt_rankInput | StudentProgressCreateOrConnectWithoutBelt_rankInput[]
    upsert?: StudentProgressUpsertWithWhereUniqueWithoutBelt_rankInput | StudentProgressUpsertWithWhereUniqueWithoutBelt_rankInput[]
    createMany?: StudentProgressCreateManyBelt_rankInputEnvelope
    set?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    disconnect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    delete?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    connect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    update?: StudentProgressUpdateWithWhereUniqueWithoutBelt_rankInput | StudentProgressUpdateWithWhereUniqueWithoutBelt_rankInput[]
    updateMany?: StudentProgressUpdateManyWithWhereWithoutBelt_rankInput | StudentProgressUpdateManyWithWhereWithoutBelt_rankInput[]
    deleteMany?: StudentProgressScalarWhereInput | StudentProgressScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBelt_ranksNestedInput = {
    create?: XOR<UserCreateWithoutBelt_ranksInput, UserUncheckedCreateWithoutBelt_ranksInput> | UserCreateWithoutBelt_ranksInput[] | UserUncheckedCreateWithoutBelt_ranksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBelt_ranksInput | UserCreateOrConnectWithoutBelt_ranksInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBelt_ranksInput | UserUpsertWithWhereUniqueWithoutBelt_ranksInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBelt_ranksInput | UserUpdateWithWhereUniqueWithoutBelt_ranksInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBelt_ranksInput | UserUpdateManyWithWhereWithoutBelt_ranksInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StudentProgressUncheckedUpdateManyWithoutBelt_rankNestedInput = {
    create?: XOR<StudentProgressCreateWithoutBelt_rankInput, StudentProgressUncheckedCreateWithoutBelt_rankInput> | StudentProgressCreateWithoutBelt_rankInput[] | StudentProgressUncheckedCreateWithoutBelt_rankInput[]
    connectOrCreate?: StudentProgressCreateOrConnectWithoutBelt_rankInput | StudentProgressCreateOrConnectWithoutBelt_rankInput[]
    upsert?: StudentProgressUpsertWithWhereUniqueWithoutBelt_rankInput | StudentProgressUpsertWithWhereUniqueWithoutBelt_rankInput[]
    createMany?: StudentProgressCreateManyBelt_rankInputEnvelope
    set?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    disconnect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    delete?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    connect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    update?: StudentProgressUpdateWithWhereUniqueWithoutBelt_rankInput | StudentProgressUpdateWithWhereUniqueWithoutBelt_rankInput[]
    updateMany?: StudentProgressUpdateManyWithWhereWithoutBelt_rankInput | StudentProgressUpdateManyWithWhereWithoutBelt_rankInput[]
    deleteMany?: StudentProgressScalarWhereInput | StudentProgressScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTaught_classesInput = {
    create?: XOR<UserCreateWithoutTaught_classesInput, UserUncheckedCreateWithoutTaught_classesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaught_classesInput
    connect?: UserWhereUniqueInput
  }

  export type ModalityCreateNestedOneWithoutClassesInput = {
    create?: XOR<ModalityCreateWithoutClassesInput, ModalityUncheckedCreateWithoutClassesInput>
    connectOrCreate?: ModalityCreateOrConnectWithoutClassesInput
    connect?: ModalityWhereUniqueInput
  }

  export type ClassRecurrenceCreateNestedOneWithoutClassesInput = {
    create?: XOR<ClassRecurrenceCreateWithoutClassesInput, ClassRecurrenceUncheckedCreateWithoutClassesInput>
    connectOrCreate?: ClassRecurrenceCreateOrConnectWithoutClassesInput
    connect?: ClassRecurrenceWhereUniqueInput
  }

  export type CheckInCreateNestedManyWithoutClassInput = {
    create?: XOR<CheckInCreateWithoutClassInput, CheckInUncheckedCreateWithoutClassInput> | CheckInCreateWithoutClassInput[] | CheckInUncheckedCreateWithoutClassInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutClassInput | CheckInCreateOrConnectWithoutClassInput[]
    createMany?: CheckInCreateManyClassInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type CheckInUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<CheckInCreateWithoutClassInput, CheckInUncheckedCreateWithoutClassInput> | CheckInCreateWithoutClassInput[] | CheckInUncheckedCreateWithoutClassInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutClassInput | CheckInCreateOrConnectWithoutClassInput[]
    createMany?: CheckInCreateManyClassInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutTaught_classesNestedInput = {
    create?: XOR<UserCreateWithoutTaught_classesInput, UserUncheckedCreateWithoutTaught_classesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaught_classesInput
    upsert?: UserUpsertWithoutTaught_classesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaught_classesInput, UserUpdateWithoutTaught_classesInput>, UserUncheckedUpdateWithoutTaught_classesInput>
  }

  export type ModalityUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<ModalityCreateWithoutClassesInput, ModalityUncheckedCreateWithoutClassesInput>
    connectOrCreate?: ModalityCreateOrConnectWithoutClassesInput
    upsert?: ModalityUpsertWithoutClassesInput
    connect?: ModalityWhereUniqueInput
    update?: XOR<XOR<ModalityUpdateToOneWithWhereWithoutClassesInput, ModalityUpdateWithoutClassesInput>, ModalityUncheckedUpdateWithoutClassesInput>
  }

  export type ClassRecurrenceUpdateOneWithoutClassesNestedInput = {
    create?: XOR<ClassRecurrenceCreateWithoutClassesInput, ClassRecurrenceUncheckedCreateWithoutClassesInput>
    connectOrCreate?: ClassRecurrenceCreateOrConnectWithoutClassesInput
    upsert?: ClassRecurrenceUpsertWithoutClassesInput
    disconnect?: ClassRecurrenceWhereInput | boolean
    delete?: ClassRecurrenceWhereInput | boolean
    connect?: ClassRecurrenceWhereUniqueInput
    update?: XOR<XOR<ClassRecurrenceUpdateToOneWithWhereWithoutClassesInput, ClassRecurrenceUpdateWithoutClassesInput>, ClassRecurrenceUncheckedUpdateWithoutClassesInput>
  }

  export type CheckInUpdateManyWithoutClassNestedInput = {
    create?: XOR<CheckInCreateWithoutClassInput, CheckInUncheckedCreateWithoutClassInput> | CheckInCreateWithoutClassInput[] | CheckInUncheckedCreateWithoutClassInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutClassInput | CheckInCreateOrConnectWithoutClassInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutClassInput | CheckInUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: CheckInCreateManyClassInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutClassInput | CheckInUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutClassInput | CheckInUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type CheckInUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<CheckInCreateWithoutClassInput, CheckInUncheckedCreateWithoutClassInput> | CheckInCreateWithoutClassInput[] | CheckInUncheckedCreateWithoutClassInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutClassInput | CheckInCreateOrConnectWithoutClassInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutClassInput | CheckInUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: CheckInCreateManyClassInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutClassInput | CheckInUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutClassInput | CheckInUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type ClassRecurrenceCreatedays_of_weekInput = {
    set: $Enums.DayOfWeek[]
  }

  export type ClassCreateNestedManyWithoutRecurrenceInput = {
    create?: XOR<ClassCreateWithoutRecurrenceInput, ClassUncheckedCreateWithoutRecurrenceInput> | ClassCreateWithoutRecurrenceInput[] | ClassUncheckedCreateWithoutRecurrenceInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutRecurrenceInput | ClassCreateOrConnectWithoutRecurrenceInput[]
    createMany?: ClassCreateManyRecurrenceInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutRecurrenceInput = {
    create?: XOR<ClassCreateWithoutRecurrenceInput, ClassUncheckedCreateWithoutRecurrenceInput> | ClassCreateWithoutRecurrenceInput[] | ClassUncheckedCreateWithoutRecurrenceInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutRecurrenceInput | ClassCreateOrConnectWithoutRecurrenceInput[]
    createMany?: ClassCreateManyRecurrenceInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassRecurrenceUpdatedays_of_weekInput = {
    set?: $Enums.DayOfWeek[]
    push?: $Enums.DayOfWeek | $Enums.DayOfWeek[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClassUpdateManyWithoutRecurrenceNestedInput = {
    create?: XOR<ClassCreateWithoutRecurrenceInput, ClassUncheckedCreateWithoutRecurrenceInput> | ClassCreateWithoutRecurrenceInput[] | ClassUncheckedCreateWithoutRecurrenceInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutRecurrenceInput | ClassCreateOrConnectWithoutRecurrenceInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutRecurrenceInput | ClassUpsertWithWhereUniqueWithoutRecurrenceInput[]
    createMany?: ClassCreateManyRecurrenceInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutRecurrenceInput | ClassUpdateWithWhereUniqueWithoutRecurrenceInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutRecurrenceInput | ClassUpdateManyWithWhereWithoutRecurrenceInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutRecurrenceNestedInput = {
    create?: XOR<ClassCreateWithoutRecurrenceInput, ClassUncheckedCreateWithoutRecurrenceInput> | ClassCreateWithoutRecurrenceInput[] | ClassUncheckedCreateWithoutRecurrenceInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutRecurrenceInput | ClassCreateOrConnectWithoutRecurrenceInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutRecurrenceInput | ClassUpsertWithWhereUniqueWithoutRecurrenceInput[]
    createMany?: ClassCreateManyRecurrenceInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutRecurrenceInput | ClassUpdateWithWhereUniqueWithoutRecurrenceInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutRecurrenceInput | ClassUpdateManyWithWhereWithoutRecurrenceInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCheck_insInput = {
    create?: XOR<UserCreateWithoutCheck_insInput, UserUncheckedCreateWithoutCheck_insInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheck_insInput
    connect?: UserWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutCheck_insInput = {
    create?: XOR<ClassCreateWithoutCheck_insInput, ClassUncheckedCreateWithoutCheck_insInput>
    connectOrCreate?: ClassCreateOrConnectWithoutCheck_insInput
    connect?: ClassWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCheck_insNestedInput = {
    create?: XOR<UserCreateWithoutCheck_insInput, UserUncheckedCreateWithoutCheck_insInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheck_insInput
    upsert?: UserUpsertWithoutCheck_insInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCheck_insInput, UserUpdateWithoutCheck_insInput>, UserUncheckedUpdateWithoutCheck_insInput>
  }

  export type ClassUpdateOneRequiredWithoutCheck_insNestedInput = {
    create?: XOR<ClassCreateWithoutCheck_insInput, ClassUncheckedCreateWithoutCheck_insInput>
    connectOrCreate?: ClassCreateOrConnectWithoutCheck_insInput
    upsert?: ClassUpsertWithoutCheck_insInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutCheck_insInput, ClassUpdateWithoutCheck_insInput>, ClassUncheckedUpdateWithoutCheck_insInput>
  }

  export type UserCreateNestedOneWithoutProgressInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    connect?: UserWhereUniqueInput
  }

  export type BeltRankCreateNestedOneWithoutProgressInput = {
    create?: XOR<BeltRankCreateWithoutProgressInput, BeltRankUncheckedCreateWithoutProgressInput>
    connectOrCreate?: BeltRankCreateOrConnectWithoutProgressInput
    connect?: BeltRankWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    upsert?: UserUpsertWithoutProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressInput, UserUpdateWithoutProgressInput>, UserUncheckedUpdateWithoutProgressInput>
  }

  export type BeltRankUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<BeltRankCreateWithoutProgressInput, BeltRankUncheckedCreateWithoutProgressInput>
    connectOrCreate?: BeltRankCreateOrConnectWithoutProgressInput
    upsert?: BeltRankUpsertWithoutProgressInput
    connect?: BeltRankWhereUniqueInput
    update?: XOR<XOR<BeltRankUpdateToOneWithWhereWithoutProgressInput, BeltRankUpdateWithoutProgressInput>, BeltRankUncheckedUpdateWithoutProgressInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserModalityCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    modality: ModalityCreateNestedOneWithoutUsersInput
  }

  export type UserModalityUncheckedCreateWithoutUserInput = {
    id?: string
    modality_id: string
    created_at?: Date | string
  }

  export type UserModalityCreateOrConnectWithoutUserInput = {
    where: UserModalityWhereUniqueInput
    create: XOR<UserModalityCreateWithoutUserInput, UserModalityUncheckedCreateWithoutUserInput>
  }

  export type UserModalityCreateManyUserInputEnvelope = {
    data: UserModalityCreateManyUserInput | UserModalityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BeltRankCreateWithoutUsersInput = {
    id?: string
    name: string
    color: string
    order: number
    required_classes?: number
    created_at?: Date | string
    updated_at?: Date | string
    modality: ModalityCreateNestedOneWithoutBelt_ranksInput
    progress?: StudentProgressCreateNestedManyWithoutBelt_rankInput
  }

  export type BeltRankUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    color: string
    order: number
    modality_id: string
    required_classes?: number
    created_at?: Date | string
    updated_at?: Date | string
    progress?: StudentProgressUncheckedCreateNestedManyWithoutBelt_rankInput
  }

  export type BeltRankCreateOrConnectWithoutUsersInput = {
    where: BeltRankWhereUniqueInput
    create: XOR<BeltRankCreateWithoutUsersInput, BeltRankUncheckedCreateWithoutUsersInput>
  }

  export type ClassCreateWithoutInstructorInput = {
    id?: string
    title: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    max_students?: number | null
    is_recurring?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    modality: ModalityCreateNestedOneWithoutClassesInput
    recurrence?: ClassRecurrenceCreateNestedOneWithoutClassesInput
    check_ins?: CheckInCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutInstructorInput = {
    id?: string
    title: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    modality_id: string
    max_students?: number | null
    is_recurring?: boolean
    recurrence_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    check_ins?: CheckInUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutInstructorInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutInstructorInput, ClassUncheckedCreateWithoutInstructorInput>
  }

  export type ClassCreateManyInstructorInputEnvelope = {
    data: ClassCreateManyInstructorInput | ClassCreateManyInstructorInput[]
    skipDuplicates?: boolean
  }

  export type CheckInCreateWithoutUserInput = {
    id?: string
    check_in_time?: Date | string
    notes?: string | null
    class: ClassCreateNestedOneWithoutCheck_insInput
  }

  export type CheckInUncheckedCreateWithoutUserInput = {
    id?: string
    class_id: string
    check_in_time?: Date | string
    notes?: string | null
  }

  export type CheckInCreateOrConnectWithoutUserInput = {
    where: CheckInWhereUniqueInput
    create: XOR<CheckInCreateWithoutUserInput, CheckInUncheckedCreateWithoutUserInput>
  }

  export type CheckInCreateManyUserInputEnvelope = {
    data: CheckInCreateManyUserInput | CheckInCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StudentProgressCreateWithoutUserInput = {
    id?: string
    classes_completed?: number
    promoted?: boolean
    promotion_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    belt_rank: BeltRankCreateNestedOneWithoutProgressInput
  }

  export type StudentProgressUncheckedCreateWithoutUserInput = {
    id?: string
    belt_rank_id: string
    classes_completed?: number
    promoted?: boolean
    promotion_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StudentProgressCreateOrConnectWithoutUserInput = {
    where: StudentProgressWhereUniqueInput
    create: XOR<StudentProgressCreateWithoutUserInput, StudentProgressUncheckedCreateWithoutUserInput>
  }

  export type StudentProgressCreateManyUserInputEnvelope = {
    data: StudentProgressCreateManyUserInput | StudentProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserModalityUpsertWithWhereUniqueWithoutUserInput = {
    where: UserModalityWhereUniqueInput
    update: XOR<UserModalityUpdateWithoutUserInput, UserModalityUncheckedUpdateWithoutUserInput>
    create: XOR<UserModalityCreateWithoutUserInput, UserModalityUncheckedCreateWithoutUserInput>
  }

  export type UserModalityUpdateWithWhereUniqueWithoutUserInput = {
    where: UserModalityWhereUniqueInput
    data: XOR<UserModalityUpdateWithoutUserInput, UserModalityUncheckedUpdateWithoutUserInput>
  }

  export type UserModalityUpdateManyWithWhereWithoutUserInput = {
    where: UserModalityScalarWhereInput
    data: XOR<UserModalityUpdateManyMutationInput, UserModalityUncheckedUpdateManyWithoutUserInput>
  }

  export type UserModalityScalarWhereInput = {
    AND?: UserModalityScalarWhereInput | UserModalityScalarWhereInput[]
    OR?: UserModalityScalarWhereInput[]
    NOT?: UserModalityScalarWhereInput | UserModalityScalarWhereInput[]
    id?: StringFilter<"UserModality"> | string
    user_id?: StringFilter<"UserModality"> | string
    modality_id?: StringFilter<"UserModality"> | string
    created_at?: DateTimeFilter<"UserModality"> | Date | string
  }

  export type BeltRankUpsertWithWhereUniqueWithoutUsersInput = {
    where: BeltRankWhereUniqueInput
    update: XOR<BeltRankUpdateWithoutUsersInput, BeltRankUncheckedUpdateWithoutUsersInput>
    create: XOR<BeltRankCreateWithoutUsersInput, BeltRankUncheckedCreateWithoutUsersInput>
  }

  export type BeltRankUpdateWithWhereUniqueWithoutUsersInput = {
    where: BeltRankWhereUniqueInput
    data: XOR<BeltRankUpdateWithoutUsersInput, BeltRankUncheckedUpdateWithoutUsersInput>
  }

  export type BeltRankUpdateManyWithWhereWithoutUsersInput = {
    where: BeltRankScalarWhereInput
    data: XOR<BeltRankUpdateManyMutationInput, BeltRankUncheckedUpdateManyWithoutUsersInput>
  }

  export type BeltRankScalarWhereInput = {
    AND?: BeltRankScalarWhereInput | BeltRankScalarWhereInput[]
    OR?: BeltRankScalarWhereInput[]
    NOT?: BeltRankScalarWhereInput | BeltRankScalarWhereInput[]
    id?: StringFilter<"BeltRank"> | string
    name?: StringFilter<"BeltRank"> | string
    color?: StringFilter<"BeltRank"> | string
    order?: IntFilter<"BeltRank"> | number
    modality_id?: StringFilter<"BeltRank"> | string
    required_classes?: IntFilter<"BeltRank"> | number
    created_at?: DateTimeFilter<"BeltRank"> | Date | string
    updated_at?: DateTimeFilter<"BeltRank"> | Date | string
  }

  export type ClassUpsertWithWhereUniqueWithoutInstructorInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutInstructorInput, ClassUncheckedUpdateWithoutInstructorInput>
    create: XOR<ClassCreateWithoutInstructorInput, ClassUncheckedCreateWithoutInstructorInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutInstructorInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutInstructorInput, ClassUncheckedUpdateWithoutInstructorInput>
  }

  export type ClassUpdateManyWithWhereWithoutInstructorInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutInstructorInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: StringFilter<"Class"> | string
    title?: StringFilter<"Class"> | string
    description?: StringNullableFilter<"Class"> | string | null
    start_time?: DateTimeFilter<"Class"> | Date | string
    end_time?: DateTimeFilter<"Class"> | Date | string
    instructor_id?: StringFilter<"Class"> | string
    modality_id?: StringFilter<"Class"> | string
    max_students?: IntNullableFilter<"Class"> | number | null
    is_recurring?: BoolFilter<"Class"> | boolean
    recurrence_id?: StringNullableFilter<"Class"> | string | null
    created_at?: DateTimeFilter<"Class"> | Date | string
    updated_at?: DateTimeFilter<"Class"> | Date | string
  }

  export type CheckInUpsertWithWhereUniqueWithoutUserInput = {
    where: CheckInWhereUniqueInput
    update: XOR<CheckInUpdateWithoutUserInput, CheckInUncheckedUpdateWithoutUserInput>
    create: XOR<CheckInCreateWithoutUserInput, CheckInUncheckedCreateWithoutUserInput>
  }

  export type CheckInUpdateWithWhereUniqueWithoutUserInput = {
    where: CheckInWhereUniqueInput
    data: XOR<CheckInUpdateWithoutUserInput, CheckInUncheckedUpdateWithoutUserInput>
  }

  export type CheckInUpdateManyWithWhereWithoutUserInput = {
    where: CheckInScalarWhereInput
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyWithoutUserInput>
  }

  export type CheckInScalarWhereInput = {
    AND?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
    OR?: CheckInScalarWhereInput[]
    NOT?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
    id?: StringFilter<"CheckIn"> | string
    user_id?: StringFilter<"CheckIn"> | string
    class_id?: StringFilter<"CheckIn"> | string
    check_in_time?: DateTimeFilter<"CheckIn"> | Date | string
    notes?: StringNullableFilter<"CheckIn"> | string | null
  }

  export type StudentProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: StudentProgressWhereUniqueInput
    update: XOR<StudentProgressUpdateWithoutUserInput, StudentProgressUncheckedUpdateWithoutUserInput>
    create: XOR<StudentProgressCreateWithoutUserInput, StudentProgressUncheckedCreateWithoutUserInput>
  }

  export type StudentProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: StudentProgressWhereUniqueInput
    data: XOR<StudentProgressUpdateWithoutUserInput, StudentProgressUncheckedUpdateWithoutUserInput>
  }

  export type StudentProgressUpdateManyWithWhereWithoutUserInput = {
    where: StudentProgressScalarWhereInput
    data: XOR<StudentProgressUpdateManyMutationInput, StudentProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type StudentProgressScalarWhereInput = {
    AND?: StudentProgressScalarWhereInput | StudentProgressScalarWhereInput[]
    OR?: StudentProgressScalarWhereInput[]
    NOT?: StudentProgressScalarWhereInput | StudentProgressScalarWhereInput[]
    id?: StringFilter<"StudentProgress"> | string
    user_id?: StringFilter<"StudentProgress"> | string
    belt_rank_id?: StringFilter<"StudentProgress"> | string
    classes_completed?: IntFilter<"StudentProgress"> | number
    promoted?: BoolFilter<"StudentProgress"> | boolean
    promotion_date?: DateTimeNullableFilter<"StudentProgress"> | Date | string | null
    created_at?: DateTimeFilter<"StudentProgress"> | Date | string
    updated_at?: DateTimeFilter<"StudentProgress"> | Date | string
  }

  export type UserModalityCreateWithoutModalityInput = {
    id?: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutModalitiesInput
  }

  export type UserModalityUncheckedCreateWithoutModalityInput = {
    id?: string
    user_id: string
    created_at?: Date | string
  }

  export type UserModalityCreateOrConnectWithoutModalityInput = {
    where: UserModalityWhereUniqueInput
    create: XOR<UserModalityCreateWithoutModalityInput, UserModalityUncheckedCreateWithoutModalityInput>
  }

  export type UserModalityCreateManyModalityInputEnvelope = {
    data: UserModalityCreateManyModalityInput | UserModalityCreateManyModalityInput[]
    skipDuplicates?: boolean
  }

  export type BeltRankCreateWithoutModalityInput = {
    id?: string
    name: string
    color: string
    order: number
    required_classes?: number
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserCreateNestedManyWithoutBelt_ranksInput
    progress?: StudentProgressCreateNestedManyWithoutBelt_rankInput
  }

  export type BeltRankUncheckedCreateWithoutModalityInput = {
    id?: string
    name: string
    color: string
    order: number
    required_classes?: number
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBelt_ranksInput
    progress?: StudentProgressUncheckedCreateNestedManyWithoutBelt_rankInput
  }

  export type BeltRankCreateOrConnectWithoutModalityInput = {
    where: BeltRankWhereUniqueInput
    create: XOR<BeltRankCreateWithoutModalityInput, BeltRankUncheckedCreateWithoutModalityInput>
  }

  export type BeltRankCreateManyModalityInputEnvelope = {
    data: BeltRankCreateManyModalityInput | BeltRankCreateManyModalityInput[]
    skipDuplicates?: boolean
  }

  export type ClassCreateWithoutModalityInput = {
    id?: string
    title: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    max_students?: number | null
    is_recurring?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    instructor: UserCreateNestedOneWithoutTaught_classesInput
    recurrence?: ClassRecurrenceCreateNestedOneWithoutClassesInput
    check_ins?: CheckInCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutModalityInput = {
    id?: string
    title: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    instructor_id: string
    max_students?: number | null
    is_recurring?: boolean
    recurrence_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    check_ins?: CheckInUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutModalityInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutModalityInput, ClassUncheckedCreateWithoutModalityInput>
  }

  export type ClassCreateManyModalityInputEnvelope = {
    data: ClassCreateManyModalityInput | ClassCreateManyModalityInput[]
    skipDuplicates?: boolean
  }

  export type UserModalityUpsertWithWhereUniqueWithoutModalityInput = {
    where: UserModalityWhereUniqueInput
    update: XOR<UserModalityUpdateWithoutModalityInput, UserModalityUncheckedUpdateWithoutModalityInput>
    create: XOR<UserModalityCreateWithoutModalityInput, UserModalityUncheckedCreateWithoutModalityInput>
  }

  export type UserModalityUpdateWithWhereUniqueWithoutModalityInput = {
    where: UserModalityWhereUniqueInput
    data: XOR<UserModalityUpdateWithoutModalityInput, UserModalityUncheckedUpdateWithoutModalityInput>
  }

  export type UserModalityUpdateManyWithWhereWithoutModalityInput = {
    where: UserModalityScalarWhereInput
    data: XOR<UserModalityUpdateManyMutationInput, UserModalityUncheckedUpdateManyWithoutModalityInput>
  }

  export type BeltRankUpsertWithWhereUniqueWithoutModalityInput = {
    where: BeltRankWhereUniqueInput
    update: XOR<BeltRankUpdateWithoutModalityInput, BeltRankUncheckedUpdateWithoutModalityInput>
    create: XOR<BeltRankCreateWithoutModalityInput, BeltRankUncheckedCreateWithoutModalityInput>
  }

  export type BeltRankUpdateWithWhereUniqueWithoutModalityInput = {
    where: BeltRankWhereUniqueInput
    data: XOR<BeltRankUpdateWithoutModalityInput, BeltRankUncheckedUpdateWithoutModalityInput>
  }

  export type BeltRankUpdateManyWithWhereWithoutModalityInput = {
    where: BeltRankScalarWhereInput
    data: XOR<BeltRankUpdateManyMutationInput, BeltRankUncheckedUpdateManyWithoutModalityInput>
  }

  export type ClassUpsertWithWhereUniqueWithoutModalityInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutModalityInput, ClassUncheckedUpdateWithoutModalityInput>
    create: XOR<ClassCreateWithoutModalityInput, ClassUncheckedCreateWithoutModalityInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutModalityInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutModalityInput, ClassUncheckedUpdateWithoutModalityInput>
  }

  export type ClassUpdateManyWithWhereWithoutModalityInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutModalityInput>
  }

  export type UserCreateWithoutModalitiesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    created_at?: Date | string
    updated_at?: Date | string
    belt_ranks?: BeltRankCreateNestedManyWithoutUsersInput
    taught_classes?: ClassCreateNestedManyWithoutInstructorInput
    check_ins?: CheckInCreateNestedManyWithoutUserInput
    progress?: StudentProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModalitiesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    created_at?: Date | string
    updated_at?: Date | string
    belt_ranks?: BeltRankUncheckedCreateNestedManyWithoutUsersInput
    taught_classes?: ClassUncheckedCreateNestedManyWithoutInstructorInput
    check_ins?: CheckInUncheckedCreateNestedManyWithoutUserInput
    progress?: StudentProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModalitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModalitiesInput, UserUncheckedCreateWithoutModalitiesInput>
  }

  export type ModalityCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    belt_ranks?: BeltRankCreateNestedManyWithoutModalityInput
    classes?: ClassCreateNestedManyWithoutModalityInput
  }

  export type ModalityUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    belt_ranks?: BeltRankUncheckedCreateNestedManyWithoutModalityInput
    classes?: ClassUncheckedCreateNestedManyWithoutModalityInput
  }

  export type ModalityCreateOrConnectWithoutUsersInput = {
    where: ModalityWhereUniqueInput
    create: XOR<ModalityCreateWithoutUsersInput, ModalityUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutModalitiesInput = {
    update: XOR<UserUpdateWithoutModalitiesInput, UserUncheckedUpdateWithoutModalitiesInput>
    create: XOR<UserCreateWithoutModalitiesInput, UserUncheckedCreateWithoutModalitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModalitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModalitiesInput, UserUncheckedUpdateWithoutModalitiesInput>
  }

  export type UserUpdateWithoutModalitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    belt_ranks?: BeltRankUpdateManyWithoutUsersNestedInput
    taught_classes?: ClassUpdateManyWithoutInstructorNestedInput
    check_ins?: CheckInUpdateManyWithoutUserNestedInput
    progress?: StudentProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutModalitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    belt_ranks?: BeltRankUncheckedUpdateManyWithoutUsersNestedInput
    taught_classes?: ClassUncheckedUpdateManyWithoutInstructorNestedInput
    check_ins?: CheckInUncheckedUpdateManyWithoutUserNestedInput
    progress?: StudentProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModalityUpsertWithoutUsersInput = {
    update: XOR<ModalityUpdateWithoutUsersInput, ModalityUncheckedUpdateWithoutUsersInput>
    create: XOR<ModalityCreateWithoutUsersInput, ModalityUncheckedCreateWithoutUsersInput>
    where?: ModalityWhereInput
  }

  export type ModalityUpdateToOneWithWhereWithoutUsersInput = {
    where?: ModalityWhereInput
    data: XOR<ModalityUpdateWithoutUsersInput, ModalityUncheckedUpdateWithoutUsersInput>
  }

  export type ModalityUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    belt_ranks?: BeltRankUpdateManyWithoutModalityNestedInput
    classes?: ClassUpdateManyWithoutModalityNestedInput
  }

  export type ModalityUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    belt_ranks?: BeltRankUncheckedUpdateManyWithoutModalityNestedInput
    classes?: ClassUncheckedUpdateManyWithoutModalityNestedInput
  }

  export type ModalityCreateWithoutBelt_ranksInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserModalityCreateNestedManyWithoutModalityInput
    classes?: ClassCreateNestedManyWithoutModalityInput
  }

  export type ModalityUncheckedCreateWithoutBelt_ranksInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserModalityUncheckedCreateNestedManyWithoutModalityInput
    classes?: ClassUncheckedCreateNestedManyWithoutModalityInput
  }

  export type ModalityCreateOrConnectWithoutBelt_ranksInput = {
    where: ModalityWhereUniqueInput
    create: XOR<ModalityCreateWithoutBelt_ranksInput, ModalityUncheckedCreateWithoutBelt_ranksInput>
  }

  export type UserCreateWithoutBelt_ranksInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    created_at?: Date | string
    updated_at?: Date | string
    modalities?: UserModalityCreateNestedManyWithoutUserInput
    taught_classes?: ClassCreateNestedManyWithoutInstructorInput
    check_ins?: CheckInCreateNestedManyWithoutUserInput
    progress?: StudentProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBelt_ranksInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    created_at?: Date | string
    updated_at?: Date | string
    modalities?: UserModalityUncheckedCreateNestedManyWithoutUserInput
    taught_classes?: ClassUncheckedCreateNestedManyWithoutInstructorInput
    check_ins?: CheckInUncheckedCreateNestedManyWithoutUserInput
    progress?: StudentProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBelt_ranksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBelt_ranksInput, UserUncheckedCreateWithoutBelt_ranksInput>
  }

  export type StudentProgressCreateWithoutBelt_rankInput = {
    id?: string
    classes_completed?: number
    promoted?: boolean
    promotion_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutProgressInput
  }

  export type StudentProgressUncheckedCreateWithoutBelt_rankInput = {
    id?: string
    user_id: string
    classes_completed?: number
    promoted?: boolean
    promotion_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StudentProgressCreateOrConnectWithoutBelt_rankInput = {
    where: StudentProgressWhereUniqueInput
    create: XOR<StudentProgressCreateWithoutBelt_rankInput, StudentProgressUncheckedCreateWithoutBelt_rankInput>
  }

  export type StudentProgressCreateManyBelt_rankInputEnvelope = {
    data: StudentProgressCreateManyBelt_rankInput | StudentProgressCreateManyBelt_rankInput[]
    skipDuplicates?: boolean
  }

  export type ModalityUpsertWithoutBelt_ranksInput = {
    update: XOR<ModalityUpdateWithoutBelt_ranksInput, ModalityUncheckedUpdateWithoutBelt_ranksInput>
    create: XOR<ModalityCreateWithoutBelt_ranksInput, ModalityUncheckedCreateWithoutBelt_ranksInput>
    where?: ModalityWhereInput
  }

  export type ModalityUpdateToOneWithWhereWithoutBelt_ranksInput = {
    where?: ModalityWhereInput
    data: XOR<ModalityUpdateWithoutBelt_ranksInput, ModalityUncheckedUpdateWithoutBelt_ranksInput>
  }

  export type ModalityUpdateWithoutBelt_ranksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserModalityUpdateManyWithoutModalityNestedInput
    classes?: ClassUpdateManyWithoutModalityNestedInput
  }

  export type ModalityUncheckedUpdateWithoutBelt_ranksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserModalityUncheckedUpdateManyWithoutModalityNestedInput
    classes?: ClassUncheckedUpdateManyWithoutModalityNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutBelt_ranksInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBelt_ranksInput, UserUncheckedUpdateWithoutBelt_ranksInput>
    create: XOR<UserCreateWithoutBelt_ranksInput, UserUncheckedCreateWithoutBelt_ranksInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBelt_ranksInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBelt_ranksInput, UserUncheckedUpdateWithoutBelt_ranksInput>
  }

  export type UserUpdateManyWithWhereWithoutBelt_ranksInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBelt_ranksInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }

  export type StudentProgressUpsertWithWhereUniqueWithoutBelt_rankInput = {
    where: StudentProgressWhereUniqueInput
    update: XOR<StudentProgressUpdateWithoutBelt_rankInput, StudentProgressUncheckedUpdateWithoutBelt_rankInput>
    create: XOR<StudentProgressCreateWithoutBelt_rankInput, StudentProgressUncheckedCreateWithoutBelt_rankInput>
  }

  export type StudentProgressUpdateWithWhereUniqueWithoutBelt_rankInput = {
    where: StudentProgressWhereUniqueInput
    data: XOR<StudentProgressUpdateWithoutBelt_rankInput, StudentProgressUncheckedUpdateWithoutBelt_rankInput>
  }

  export type StudentProgressUpdateManyWithWhereWithoutBelt_rankInput = {
    where: StudentProgressScalarWhereInput
    data: XOR<StudentProgressUpdateManyMutationInput, StudentProgressUncheckedUpdateManyWithoutBelt_rankInput>
  }

  export type UserCreateWithoutTaught_classesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    created_at?: Date | string
    updated_at?: Date | string
    modalities?: UserModalityCreateNestedManyWithoutUserInput
    belt_ranks?: BeltRankCreateNestedManyWithoutUsersInput
    check_ins?: CheckInCreateNestedManyWithoutUserInput
    progress?: StudentProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTaught_classesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    created_at?: Date | string
    updated_at?: Date | string
    modalities?: UserModalityUncheckedCreateNestedManyWithoutUserInput
    belt_ranks?: BeltRankUncheckedCreateNestedManyWithoutUsersInput
    check_ins?: CheckInUncheckedCreateNestedManyWithoutUserInput
    progress?: StudentProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTaught_classesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaught_classesInput, UserUncheckedCreateWithoutTaught_classesInput>
  }

  export type ModalityCreateWithoutClassesInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserModalityCreateNestedManyWithoutModalityInput
    belt_ranks?: BeltRankCreateNestedManyWithoutModalityInput
  }

  export type ModalityUncheckedCreateWithoutClassesInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserModalityUncheckedCreateNestedManyWithoutModalityInput
    belt_ranks?: BeltRankUncheckedCreateNestedManyWithoutModalityInput
  }

  export type ModalityCreateOrConnectWithoutClassesInput = {
    where: ModalityWhereUniqueInput
    create: XOR<ModalityCreateWithoutClassesInput, ModalityUncheckedCreateWithoutClassesInput>
  }

  export type ClassRecurrenceCreateWithoutClassesInput = {
    id?: string
    days_of_week?: ClassRecurrenceCreatedays_of_weekInput | $Enums.DayOfWeek[]
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassRecurrenceUncheckedCreateWithoutClassesInput = {
    id?: string
    days_of_week?: ClassRecurrenceCreatedays_of_weekInput | $Enums.DayOfWeek[]
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassRecurrenceCreateOrConnectWithoutClassesInput = {
    where: ClassRecurrenceWhereUniqueInput
    create: XOR<ClassRecurrenceCreateWithoutClassesInput, ClassRecurrenceUncheckedCreateWithoutClassesInput>
  }

  export type CheckInCreateWithoutClassInput = {
    id?: string
    check_in_time?: Date | string
    notes?: string | null
    user: UserCreateNestedOneWithoutCheck_insInput
  }

  export type CheckInUncheckedCreateWithoutClassInput = {
    id?: string
    user_id: string
    check_in_time?: Date | string
    notes?: string | null
  }

  export type CheckInCreateOrConnectWithoutClassInput = {
    where: CheckInWhereUniqueInput
    create: XOR<CheckInCreateWithoutClassInput, CheckInUncheckedCreateWithoutClassInput>
  }

  export type CheckInCreateManyClassInputEnvelope = {
    data: CheckInCreateManyClassInput | CheckInCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTaught_classesInput = {
    update: XOR<UserUpdateWithoutTaught_classesInput, UserUncheckedUpdateWithoutTaught_classesInput>
    create: XOR<UserCreateWithoutTaught_classesInput, UserUncheckedCreateWithoutTaught_classesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaught_classesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaught_classesInput, UserUncheckedUpdateWithoutTaught_classesInput>
  }

  export type UserUpdateWithoutTaught_classesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modalities?: UserModalityUpdateManyWithoutUserNestedInput
    belt_ranks?: BeltRankUpdateManyWithoutUsersNestedInput
    check_ins?: CheckInUpdateManyWithoutUserNestedInput
    progress?: StudentProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTaught_classesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modalities?: UserModalityUncheckedUpdateManyWithoutUserNestedInput
    belt_ranks?: BeltRankUncheckedUpdateManyWithoutUsersNestedInput
    check_ins?: CheckInUncheckedUpdateManyWithoutUserNestedInput
    progress?: StudentProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModalityUpsertWithoutClassesInput = {
    update: XOR<ModalityUpdateWithoutClassesInput, ModalityUncheckedUpdateWithoutClassesInput>
    create: XOR<ModalityCreateWithoutClassesInput, ModalityUncheckedCreateWithoutClassesInput>
    where?: ModalityWhereInput
  }

  export type ModalityUpdateToOneWithWhereWithoutClassesInput = {
    where?: ModalityWhereInput
    data: XOR<ModalityUpdateWithoutClassesInput, ModalityUncheckedUpdateWithoutClassesInput>
  }

  export type ModalityUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserModalityUpdateManyWithoutModalityNestedInput
    belt_ranks?: BeltRankUpdateManyWithoutModalityNestedInput
  }

  export type ModalityUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserModalityUncheckedUpdateManyWithoutModalityNestedInput
    belt_ranks?: BeltRankUncheckedUpdateManyWithoutModalityNestedInput
  }

  export type ClassRecurrenceUpsertWithoutClassesInput = {
    update: XOR<ClassRecurrenceUpdateWithoutClassesInput, ClassRecurrenceUncheckedUpdateWithoutClassesInput>
    create: XOR<ClassRecurrenceCreateWithoutClassesInput, ClassRecurrenceUncheckedCreateWithoutClassesInput>
    where?: ClassRecurrenceWhereInput
  }

  export type ClassRecurrenceUpdateToOneWithWhereWithoutClassesInput = {
    where?: ClassRecurrenceWhereInput
    data: XOR<ClassRecurrenceUpdateWithoutClassesInput, ClassRecurrenceUncheckedUpdateWithoutClassesInput>
  }

  export type ClassRecurrenceUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    days_of_week?: ClassRecurrenceUpdatedays_of_weekInput | $Enums.DayOfWeek[]
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassRecurrenceUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    days_of_week?: ClassRecurrenceUpdatedays_of_weekInput | $Enums.DayOfWeek[]
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUpsertWithWhereUniqueWithoutClassInput = {
    where: CheckInWhereUniqueInput
    update: XOR<CheckInUpdateWithoutClassInput, CheckInUncheckedUpdateWithoutClassInput>
    create: XOR<CheckInCreateWithoutClassInput, CheckInUncheckedCreateWithoutClassInput>
  }

  export type CheckInUpdateWithWhereUniqueWithoutClassInput = {
    where: CheckInWhereUniqueInput
    data: XOR<CheckInUpdateWithoutClassInput, CheckInUncheckedUpdateWithoutClassInput>
  }

  export type CheckInUpdateManyWithWhereWithoutClassInput = {
    where: CheckInScalarWhereInput
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyWithoutClassInput>
  }

  export type ClassCreateWithoutRecurrenceInput = {
    id?: string
    title: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    max_students?: number | null
    is_recurring?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    instructor: UserCreateNestedOneWithoutTaught_classesInput
    modality: ModalityCreateNestedOneWithoutClassesInput
    check_ins?: CheckInCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutRecurrenceInput = {
    id?: string
    title: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    instructor_id: string
    modality_id: string
    max_students?: number | null
    is_recurring?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    check_ins?: CheckInUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutRecurrenceInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutRecurrenceInput, ClassUncheckedCreateWithoutRecurrenceInput>
  }

  export type ClassCreateManyRecurrenceInputEnvelope = {
    data: ClassCreateManyRecurrenceInput | ClassCreateManyRecurrenceInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithWhereUniqueWithoutRecurrenceInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutRecurrenceInput, ClassUncheckedUpdateWithoutRecurrenceInput>
    create: XOR<ClassCreateWithoutRecurrenceInput, ClassUncheckedCreateWithoutRecurrenceInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutRecurrenceInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutRecurrenceInput, ClassUncheckedUpdateWithoutRecurrenceInput>
  }

  export type ClassUpdateManyWithWhereWithoutRecurrenceInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutRecurrenceInput>
  }

  export type UserCreateWithoutCheck_insInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    created_at?: Date | string
    updated_at?: Date | string
    modalities?: UserModalityCreateNestedManyWithoutUserInput
    belt_ranks?: BeltRankCreateNestedManyWithoutUsersInput
    taught_classes?: ClassCreateNestedManyWithoutInstructorInput
    progress?: StudentProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCheck_insInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    created_at?: Date | string
    updated_at?: Date | string
    modalities?: UserModalityUncheckedCreateNestedManyWithoutUserInput
    belt_ranks?: BeltRankUncheckedCreateNestedManyWithoutUsersInput
    taught_classes?: ClassUncheckedCreateNestedManyWithoutInstructorInput
    progress?: StudentProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCheck_insInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCheck_insInput, UserUncheckedCreateWithoutCheck_insInput>
  }

  export type ClassCreateWithoutCheck_insInput = {
    id?: string
    title: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    max_students?: number | null
    is_recurring?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    instructor: UserCreateNestedOneWithoutTaught_classesInput
    modality: ModalityCreateNestedOneWithoutClassesInput
    recurrence?: ClassRecurrenceCreateNestedOneWithoutClassesInput
  }

  export type ClassUncheckedCreateWithoutCheck_insInput = {
    id?: string
    title: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    instructor_id: string
    modality_id: string
    max_students?: number | null
    is_recurring?: boolean
    recurrence_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassCreateOrConnectWithoutCheck_insInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutCheck_insInput, ClassUncheckedCreateWithoutCheck_insInput>
  }

  export type UserUpsertWithoutCheck_insInput = {
    update: XOR<UserUpdateWithoutCheck_insInput, UserUncheckedUpdateWithoutCheck_insInput>
    create: XOR<UserCreateWithoutCheck_insInput, UserUncheckedCreateWithoutCheck_insInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCheck_insInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCheck_insInput, UserUncheckedUpdateWithoutCheck_insInput>
  }

  export type UserUpdateWithoutCheck_insInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modalities?: UserModalityUpdateManyWithoutUserNestedInput
    belt_ranks?: BeltRankUpdateManyWithoutUsersNestedInput
    taught_classes?: ClassUpdateManyWithoutInstructorNestedInput
    progress?: StudentProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCheck_insInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modalities?: UserModalityUncheckedUpdateManyWithoutUserNestedInput
    belt_ranks?: BeltRankUncheckedUpdateManyWithoutUsersNestedInput
    taught_classes?: ClassUncheckedUpdateManyWithoutInstructorNestedInput
    progress?: StudentProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClassUpsertWithoutCheck_insInput = {
    update: XOR<ClassUpdateWithoutCheck_insInput, ClassUncheckedUpdateWithoutCheck_insInput>
    create: XOR<ClassCreateWithoutCheck_insInput, ClassUncheckedCreateWithoutCheck_insInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutCheck_insInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutCheck_insInput, ClassUncheckedUpdateWithoutCheck_insInput>
  }

  export type ClassUpdateWithoutCheck_insInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_students?: NullableIntFieldUpdateOperationsInput | number | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutTaught_classesNestedInput
    modality?: ModalityUpdateOneRequiredWithoutClassesNestedInput
    recurrence?: ClassRecurrenceUpdateOneWithoutClassesNestedInput
  }

  export type ClassUncheckedUpdateWithoutCheck_insInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor_id?: StringFieldUpdateOperationsInput | string
    modality_id?: StringFieldUpdateOperationsInput | string
    max_students?: NullableIntFieldUpdateOperationsInput | number | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutProgressInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    created_at?: Date | string
    updated_at?: Date | string
    modalities?: UserModalityCreateNestedManyWithoutUserInput
    belt_ranks?: BeltRankCreateNestedManyWithoutUsersInput
    taught_classes?: ClassCreateNestedManyWithoutInstructorInput
    check_ins?: CheckInCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    created_at?: Date | string
    updated_at?: Date | string
    modalities?: UserModalityUncheckedCreateNestedManyWithoutUserInput
    belt_ranks?: BeltRankUncheckedCreateNestedManyWithoutUsersInput
    taught_classes?: ClassUncheckedCreateNestedManyWithoutInstructorInput
    check_ins?: CheckInUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
  }

  export type BeltRankCreateWithoutProgressInput = {
    id?: string
    name: string
    color: string
    order: number
    required_classes?: number
    created_at?: Date | string
    updated_at?: Date | string
    modality: ModalityCreateNestedOneWithoutBelt_ranksInput
    users?: UserCreateNestedManyWithoutBelt_ranksInput
  }

  export type BeltRankUncheckedCreateWithoutProgressInput = {
    id?: string
    name: string
    color: string
    order: number
    modality_id: string
    required_classes?: number
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBelt_ranksInput
  }

  export type BeltRankCreateOrConnectWithoutProgressInput = {
    where: BeltRankWhereUniqueInput
    create: XOR<BeltRankCreateWithoutProgressInput, BeltRankUncheckedCreateWithoutProgressInput>
  }

  export type UserUpsertWithoutProgressInput = {
    update: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
  }

  export type UserUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modalities?: UserModalityUpdateManyWithoutUserNestedInput
    belt_ranks?: BeltRankUpdateManyWithoutUsersNestedInput
    taught_classes?: ClassUpdateManyWithoutInstructorNestedInput
    check_ins?: CheckInUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modalities?: UserModalityUncheckedUpdateManyWithoutUserNestedInput
    belt_ranks?: BeltRankUncheckedUpdateManyWithoutUsersNestedInput
    taught_classes?: ClassUncheckedUpdateManyWithoutInstructorNestedInput
    check_ins?: CheckInUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BeltRankUpsertWithoutProgressInput = {
    update: XOR<BeltRankUpdateWithoutProgressInput, BeltRankUncheckedUpdateWithoutProgressInput>
    create: XOR<BeltRankCreateWithoutProgressInput, BeltRankUncheckedCreateWithoutProgressInput>
    where?: BeltRankWhereInput
  }

  export type BeltRankUpdateToOneWithWhereWithoutProgressInput = {
    where?: BeltRankWhereInput
    data: XOR<BeltRankUpdateWithoutProgressInput, BeltRankUncheckedUpdateWithoutProgressInput>
  }

  export type BeltRankUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    required_classes?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modality?: ModalityUpdateOneRequiredWithoutBelt_ranksNestedInput
    users?: UserUpdateManyWithoutBelt_ranksNestedInput
  }

  export type BeltRankUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    modality_id?: StringFieldUpdateOperationsInput | string
    required_classes?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBelt_ranksNestedInput
  }

  export type UserModalityCreateManyUserInput = {
    id?: string
    modality_id: string
    created_at?: Date | string
  }

  export type ClassCreateManyInstructorInput = {
    id?: string
    title: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    modality_id: string
    max_students?: number | null
    is_recurring?: boolean
    recurrence_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CheckInCreateManyUserInput = {
    id?: string
    class_id: string
    check_in_time?: Date | string
    notes?: string | null
  }

  export type StudentProgressCreateManyUserInput = {
    id?: string
    belt_rank_id: string
    classes_completed?: number
    promoted?: boolean
    promotion_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserModalityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modality?: ModalityUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserModalityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    modality_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModalityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    modality_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeltRankUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    required_classes?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modality?: ModalityUpdateOneRequiredWithoutBelt_ranksNestedInput
    progress?: StudentProgressUpdateManyWithoutBelt_rankNestedInput
  }

  export type BeltRankUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    modality_id?: StringFieldUpdateOperationsInput | string
    required_classes?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: StudentProgressUncheckedUpdateManyWithoutBelt_rankNestedInput
  }

  export type BeltRankUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    modality_id?: StringFieldUpdateOperationsInput | string
    required_classes?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_students?: NullableIntFieldUpdateOperationsInput | number | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modality?: ModalityUpdateOneRequiredWithoutClassesNestedInput
    recurrence?: ClassRecurrenceUpdateOneWithoutClassesNestedInput
    check_ins?: CheckInUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    modality_id?: StringFieldUpdateOperationsInput | string
    max_students?: NullableIntFieldUpdateOperationsInput | number | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    check_ins?: CheckInUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    modality_id?: StringFieldUpdateOperationsInput | string
    max_students?: NullableIntFieldUpdateOperationsInput | number | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    class?: ClassUpdateOneRequiredWithoutCheck_insNestedInput
  }

  export type CheckInUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckInUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    classes_completed?: IntFieldUpdateOperationsInput | number
    promoted?: BoolFieldUpdateOperationsInput | boolean
    promotion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    belt_rank?: BeltRankUpdateOneRequiredWithoutProgressNestedInput
  }

  export type StudentProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    belt_rank_id?: StringFieldUpdateOperationsInput | string
    classes_completed?: IntFieldUpdateOperationsInput | number
    promoted?: BoolFieldUpdateOperationsInput | boolean
    promotion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    belt_rank_id?: StringFieldUpdateOperationsInput | string
    classes_completed?: IntFieldUpdateOperationsInput | number
    promoted?: BoolFieldUpdateOperationsInput | boolean
    promotion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModalityCreateManyModalityInput = {
    id?: string
    user_id: string
    created_at?: Date | string
  }

  export type BeltRankCreateManyModalityInput = {
    id?: string
    name: string
    color: string
    order: number
    required_classes?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassCreateManyModalityInput = {
    id?: string
    title: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    instructor_id: string
    max_students?: number | null
    is_recurring?: boolean
    recurrence_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserModalityUpdateWithoutModalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutModalitiesNestedInput
  }

  export type UserModalityUncheckedUpdateWithoutModalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModalityUncheckedUpdateManyWithoutModalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeltRankUpdateWithoutModalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    required_classes?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBelt_ranksNestedInput
    progress?: StudentProgressUpdateManyWithoutBelt_rankNestedInput
  }

  export type BeltRankUncheckedUpdateWithoutModalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    required_classes?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBelt_ranksNestedInput
    progress?: StudentProgressUncheckedUpdateManyWithoutBelt_rankNestedInput
  }

  export type BeltRankUncheckedUpdateManyWithoutModalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    required_classes?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUpdateWithoutModalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_students?: NullableIntFieldUpdateOperationsInput | number | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutTaught_classesNestedInput
    recurrence?: ClassRecurrenceUpdateOneWithoutClassesNestedInput
    check_ins?: CheckInUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutModalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor_id?: StringFieldUpdateOperationsInput | string
    max_students?: NullableIntFieldUpdateOperationsInput | number | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    check_ins?: CheckInUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutModalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor_id?: StringFieldUpdateOperationsInput | string
    max_students?: NullableIntFieldUpdateOperationsInput | number | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProgressCreateManyBelt_rankInput = {
    id?: string
    user_id: string
    classes_completed?: number
    promoted?: boolean
    promotion_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateWithoutBelt_ranksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modalities?: UserModalityUpdateManyWithoutUserNestedInput
    taught_classes?: ClassUpdateManyWithoutInstructorNestedInput
    check_ins?: CheckInUpdateManyWithoutUserNestedInput
    progress?: StudentProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBelt_ranksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modalities?: UserModalityUncheckedUpdateManyWithoutUserNestedInput
    taught_classes?: ClassUncheckedUpdateManyWithoutInstructorNestedInput
    check_ins?: CheckInUncheckedUpdateManyWithoutUserNestedInput
    progress?: StudentProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBelt_ranksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProgressUpdateWithoutBelt_rankInput = {
    id?: StringFieldUpdateOperationsInput | string
    classes_completed?: IntFieldUpdateOperationsInput | number
    promoted?: BoolFieldUpdateOperationsInput | boolean
    promotion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
  }

  export type StudentProgressUncheckedUpdateWithoutBelt_rankInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    classes_completed?: IntFieldUpdateOperationsInput | number
    promoted?: BoolFieldUpdateOperationsInput | boolean
    promotion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProgressUncheckedUpdateManyWithoutBelt_rankInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    classes_completed?: IntFieldUpdateOperationsInput | number
    promoted?: BoolFieldUpdateOperationsInput | boolean
    promotion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInCreateManyClassInput = {
    id?: string
    user_id: string
    check_in_time?: Date | string
    notes?: string | null
  }

  export type CheckInUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCheck_insNestedInput
  }

  export type CheckInUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckInUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassCreateManyRecurrenceInput = {
    id?: string
    title: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    instructor_id: string
    modality_id: string
    max_students?: number | null
    is_recurring?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassUpdateWithoutRecurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_students?: NullableIntFieldUpdateOperationsInput | number | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutTaught_classesNestedInput
    modality?: ModalityUpdateOneRequiredWithoutClassesNestedInput
    check_ins?: CheckInUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutRecurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor_id?: StringFieldUpdateOperationsInput | string
    modality_id?: StringFieldUpdateOperationsInput | string
    max_students?: NullableIntFieldUpdateOperationsInput | number | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    check_ins?: CheckInUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutRecurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor_id?: StringFieldUpdateOperationsInput | string
    modality_id?: StringFieldUpdateOperationsInput | string
    max_students?: NullableIntFieldUpdateOperationsInput | number | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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