
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
 * Model Pessoa
 * 
 */
export type Pessoa = $Result.DefaultSelection<Prisma.$PessoaPayload>
/**
 * Model Livro
 * 
 */
export type Livro = $Result.DefaultSelection<Prisma.$LivroPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pessoas
 * const pessoas = await prisma.pessoa.findMany()
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
   * // Fetch zero or more Pessoas
   * const pessoas = await prisma.pessoa.findMany()
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
   * `prisma.pessoa`: Exposes CRUD operations for the **Pessoa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pessoas
    * const pessoas = await prisma.pessoa.findMany()
    * ```
    */
  get pessoa(): Prisma.PessoaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.livro`: Exposes CRUD operations for the **Livro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livros
    * const livros = await prisma.livro.findMany()
    * ```
    */
  get livro(): Prisma.LivroDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    Pessoa: 'Pessoa',
    Livro: 'Livro'
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
      modelProps: "pessoa" | "livro"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pessoa: {
        payload: Prisma.$PessoaPayload<ExtArgs>
        fields: Prisma.PessoaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PessoaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PessoaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          findFirst: {
            args: Prisma.PessoaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PessoaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          findMany: {
            args: Prisma.PessoaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>[]
          }
          create: {
            args: Prisma.PessoaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          createMany: {
            args: Prisma.PessoaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PessoaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>[]
          }
          delete: {
            args: Prisma.PessoaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          update: {
            args: Prisma.PessoaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          deleteMany: {
            args: Prisma.PessoaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PessoaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PessoaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>[]
          }
          upsert: {
            args: Prisma.PessoaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          aggregate: {
            args: Prisma.PessoaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePessoa>
          }
          groupBy: {
            args: Prisma.PessoaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PessoaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PessoaCountArgs<ExtArgs>
            result: $Utils.Optional<PessoaCountAggregateOutputType> | number
          }
        }
      }
      Livro: {
        payload: Prisma.$LivroPayload<ExtArgs>
        fields: Prisma.LivroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LivroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LivroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          findFirst: {
            args: Prisma.LivroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LivroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          findMany: {
            args: Prisma.LivroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          create: {
            args: Prisma.LivroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          createMany: {
            args: Prisma.LivroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LivroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          delete: {
            args: Prisma.LivroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          update: {
            args: Prisma.LivroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          deleteMany: {
            args: Prisma.LivroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LivroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LivroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          upsert: {
            args: Prisma.LivroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          aggregate: {
            args: Prisma.LivroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivro>
          }
          groupBy: {
            args: Prisma.LivroGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivroGroupByOutputType>[]
          }
          count: {
            args: Prisma.LivroCountArgs<ExtArgs>
            result: $Utils.Optional<LivroCountAggregateOutputType> | number
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
    pessoa?: PessoaOmit
    livro?: LivroOmit
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
   * Models
   */

  /**
   * Model Pessoa
   */

  export type AggregatePessoa = {
    _count: PessoaCountAggregateOutputType | null
    _avg: PessoaAvgAggregateOutputType | null
    _sum: PessoaSumAggregateOutputType | null
    _min: PessoaMinAggregateOutputType | null
    _max: PessoaMaxAggregateOutputType | null
  }

  export type PessoaAvgAggregateOutputType = {
    id: number | null
    idade: number | null
  }

  export type PessoaSumAggregateOutputType = {
    id: number | null
    idade: number | null
  }

  export type PessoaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    idade: number | null
    cpf: string | null
  }

  export type PessoaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    idade: number | null
    cpf: string | null
  }

  export type PessoaCountAggregateOutputType = {
    id: number
    nome: number
    idade: number
    cpf: number
    _all: number
  }


  export type PessoaAvgAggregateInputType = {
    id?: true
    idade?: true
  }

  export type PessoaSumAggregateInputType = {
    id?: true
    idade?: true
  }

  export type PessoaMinAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    cpf?: true
  }

  export type PessoaMaxAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    cpf?: true
  }

  export type PessoaCountAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    cpf?: true
    _all?: true
  }

  export type PessoaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pessoa to aggregate.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pessoas
    **/
    _count?: true | PessoaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PessoaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PessoaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PessoaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PessoaMaxAggregateInputType
  }

  export type GetPessoaAggregateType<T extends PessoaAggregateArgs> = {
        [P in keyof T & keyof AggregatePessoa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePessoa[P]>
      : GetScalarType<T[P], AggregatePessoa[P]>
  }




  export type PessoaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PessoaWhereInput
    orderBy?: PessoaOrderByWithAggregationInput | PessoaOrderByWithAggregationInput[]
    by: PessoaScalarFieldEnum[] | PessoaScalarFieldEnum
    having?: PessoaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PessoaCountAggregateInputType | true
    _avg?: PessoaAvgAggregateInputType
    _sum?: PessoaSumAggregateInputType
    _min?: PessoaMinAggregateInputType
    _max?: PessoaMaxAggregateInputType
  }

  export type PessoaGroupByOutputType = {
    id: number
    nome: string
    idade: number
    cpf: string
    _count: PessoaCountAggregateOutputType | null
    _avg: PessoaAvgAggregateOutputType | null
    _sum: PessoaSumAggregateOutputType | null
    _min: PessoaMinAggregateOutputType | null
    _max: PessoaMaxAggregateOutputType | null
  }

  type GetPessoaGroupByPayload<T extends PessoaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PessoaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PessoaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PessoaGroupByOutputType[P]>
            : GetScalarType<T[P], PessoaGroupByOutputType[P]>
        }
      >
    >


  export type PessoaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
    cpf?: boolean
  }, ExtArgs["result"]["pessoa"]>

  export type PessoaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
    cpf?: boolean
  }, ExtArgs["result"]["pessoa"]>

  export type PessoaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
    cpf?: boolean
  }, ExtArgs["result"]["pessoa"]>

  export type PessoaSelectScalar = {
    id?: boolean
    nome?: boolean
    idade?: boolean
    cpf?: boolean
  }

  export type PessoaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "idade" | "cpf", ExtArgs["result"]["pessoa"]>

  export type $PessoaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pessoa"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      idade: number
      cpf: string
    }, ExtArgs["result"]["pessoa"]>
    composites: {}
  }

  type PessoaGetPayload<S extends boolean | null | undefined | PessoaDefaultArgs> = $Result.GetResult<Prisma.$PessoaPayload, S>

  type PessoaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PessoaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PessoaCountAggregateInputType | true
    }

  export interface PessoaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pessoa'], meta: { name: 'Pessoa' } }
    /**
     * Find zero or one Pessoa that matches the filter.
     * @param {PessoaFindUniqueArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PessoaFindUniqueArgs>(args: SelectSubset<T, PessoaFindUniqueArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pessoa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PessoaFindUniqueOrThrowArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PessoaFindUniqueOrThrowArgs>(args: SelectSubset<T, PessoaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pessoa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindFirstArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PessoaFindFirstArgs>(args?: SelectSubset<T, PessoaFindFirstArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pessoa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindFirstOrThrowArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PessoaFindFirstOrThrowArgs>(args?: SelectSubset<T, PessoaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pessoas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pessoas
     * const pessoas = await prisma.pessoa.findMany()
     * 
     * // Get first 10 Pessoas
     * const pessoas = await prisma.pessoa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pessoaWithIdOnly = await prisma.pessoa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PessoaFindManyArgs>(args?: SelectSubset<T, PessoaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pessoa.
     * @param {PessoaCreateArgs} args - Arguments to create a Pessoa.
     * @example
     * // Create one Pessoa
     * const Pessoa = await prisma.pessoa.create({
     *   data: {
     *     // ... data to create a Pessoa
     *   }
     * })
     * 
     */
    create<T extends PessoaCreateArgs>(args: SelectSubset<T, PessoaCreateArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pessoas.
     * @param {PessoaCreateManyArgs} args - Arguments to create many Pessoas.
     * @example
     * // Create many Pessoas
     * const pessoa = await prisma.pessoa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PessoaCreateManyArgs>(args?: SelectSubset<T, PessoaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pessoas and returns the data saved in the database.
     * @param {PessoaCreateManyAndReturnArgs} args - Arguments to create many Pessoas.
     * @example
     * // Create many Pessoas
     * const pessoa = await prisma.pessoa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pessoas and only return the `id`
     * const pessoaWithIdOnly = await prisma.pessoa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PessoaCreateManyAndReturnArgs>(args?: SelectSubset<T, PessoaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pessoa.
     * @param {PessoaDeleteArgs} args - Arguments to delete one Pessoa.
     * @example
     * // Delete one Pessoa
     * const Pessoa = await prisma.pessoa.delete({
     *   where: {
     *     // ... filter to delete one Pessoa
     *   }
     * })
     * 
     */
    delete<T extends PessoaDeleteArgs>(args: SelectSubset<T, PessoaDeleteArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pessoa.
     * @param {PessoaUpdateArgs} args - Arguments to update one Pessoa.
     * @example
     * // Update one Pessoa
     * const pessoa = await prisma.pessoa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PessoaUpdateArgs>(args: SelectSubset<T, PessoaUpdateArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pessoas.
     * @param {PessoaDeleteManyArgs} args - Arguments to filter Pessoas to delete.
     * @example
     * // Delete a few Pessoas
     * const { count } = await prisma.pessoa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PessoaDeleteManyArgs>(args?: SelectSubset<T, PessoaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pessoas
     * const pessoa = await prisma.pessoa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PessoaUpdateManyArgs>(args: SelectSubset<T, PessoaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pessoas and returns the data updated in the database.
     * @param {PessoaUpdateManyAndReturnArgs} args - Arguments to update many Pessoas.
     * @example
     * // Update many Pessoas
     * const pessoa = await prisma.pessoa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pessoas and only return the `id`
     * const pessoaWithIdOnly = await prisma.pessoa.updateManyAndReturn({
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
    updateManyAndReturn<T extends PessoaUpdateManyAndReturnArgs>(args: SelectSubset<T, PessoaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pessoa.
     * @param {PessoaUpsertArgs} args - Arguments to update or create a Pessoa.
     * @example
     * // Update or create a Pessoa
     * const pessoa = await prisma.pessoa.upsert({
     *   create: {
     *     // ... data to create a Pessoa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pessoa we want to update
     *   }
     * })
     */
    upsert<T extends PessoaUpsertArgs>(args: SelectSubset<T, PessoaUpsertArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaCountArgs} args - Arguments to filter Pessoas to count.
     * @example
     * // Count the number of Pessoas
     * const count = await prisma.pessoa.count({
     *   where: {
     *     // ... the filter for the Pessoas we want to count
     *   }
     * })
    **/
    count<T extends PessoaCountArgs>(
      args?: Subset<T, PessoaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PessoaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pessoa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PessoaAggregateArgs>(args: Subset<T, PessoaAggregateArgs>): Prisma.PrismaPromise<GetPessoaAggregateType<T>>

    /**
     * Group by Pessoa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaGroupByArgs} args - Group by arguments.
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
      T extends PessoaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PessoaGroupByArgs['orderBy'] }
        : { orderBy?: PessoaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PessoaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPessoaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pessoa model
   */
  readonly fields: PessoaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pessoa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PessoaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Pessoa model
   */
  interface PessoaFieldRefs {
    readonly id: FieldRef<"Pessoa", 'Int'>
    readonly nome: FieldRef<"Pessoa", 'String'>
    readonly idade: FieldRef<"Pessoa", 'Int'>
    readonly cpf: FieldRef<"Pessoa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pessoa findUnique
   */
  export type PessoaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where: PessoaWhereUniqueInput
  }

  /**
   * Pessoa findUniqueOrThrow
   */
  export type PessoaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where: PessoaWhereUniqueInput
  }

  /**
   * Pessoa findFirst
   */
  export type PessoaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pessoas.
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pessoas.
     */
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }

  /**
   * Pessoa findFirstOrThrow
   */
  export type PessoaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pessoas.
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pessoas.
     */
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }

  /**
   * Pessoa findMany
   */
  export type PessoaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Filter, which Pessoas to fetch.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pessoas.
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }

  /**
   * Pessoa create
   */
  export type PessoaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * The data needed to create a Pessoa.
     */
    data: XOR<PessoaCreateInput, PessoaUncheckedCreateInput>
  }

  /**
   * Pessoa createMany
   */
  export type PessoaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pessoas.
     */
    data: PessoaCreateManyInput | PessoaCreateManyInput[]
  }

  /**
   * Pessoa createManyAndReturn
   */
  export type PessoaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * The data used to create many Pessoas.
     */
    data: PessoaCreateManyInput | PessoaCreateManyInput[]
  }

  /**
   * Pessoa update
   */
  export type PessoaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * The data needed to update a Pessoa.
     */
    data: XOR<PessoaUpdateInput, PessoaUncheckedUpdateInput>
    /**
     * Choose, which Pessoa to update.
     */
    where: PessoaWhereUniqueInput
  }

  /**
   * Pessoa updateMany
   */
  export type PessoaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pessoas.
     */
    data: XOR<PessoaUpdateManyMutationInput, PessoaUncheckedUpdateManyInput>
    /**
     * Filter which Pessoas to update
     */
    where?: PessoaWhereInput
    /**
     * Limit how many Pessoas to update.
     */
    limit?: number
  }

  /**
   * Pessoa updateManyAndReturn
   */
  export type PessoaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * The data used to update Pessoas.
     */
    data: XOR<PessoaUpdateManyMutationInput, PessoaUncheckedUpdateManyInput>
    /**
     * Filter which Pessoas to update
     */
    where?: PessoaWhereInput
    /**
     * Limit how many Pessoas to update.
     */
    limit?: number
  }

  /**
   * Pessoa upsert
   */
  export type PessoaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * The filter to search for the Pessoa to update in case it exists.
     */
    where: PessoaWhereUniqueInput
    /**
     * In case the Pessoa found by the `where` argument doesn't exist, create a new Pessoa with this data.
     */
    create: XOR<PessoaCreateInput, PessoaUncheckedCreateInput>
    /**
     * In case the Pessoa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PessoaUpdateInput, PessoaUncheckedUpdateInput>
  }

  /**
   * Pessoa delete
   */
  export type PessoaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Filter which Pessoa to delete.
     */
    where: PessoaWhereUniqueInput
  }

  /**
   * Pessoa deleteMany
   */
  export type PessoaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pessoas to delete
     */
    where?: PessoaWhereInput
    /**
     * Limit how many Pessoas to delete.
     */
    limit?: number
  }

  /**
   * Pessoa without action
   */
  export type PessoaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
  }


  /**
   * Model Livro
   */

  export type AggregateLivro = {
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  export type LivroAvgAggregateOutputType = {
    id: number | null
    ano: number | null
  }

  export type LivroSumAggregateOutputType = {
    id: number | null
    ano: number | null
  }

  export type LivroMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    autor: string | null
    ano: number | null
  }

  export type LivroMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    autor: string | null
    ano: number | null
  }

  export type LivroCountAggregateOutputType = {
    id: number
    titulo: number
    autor: number
    ano: number
    _all: number
  }


  export type LivroAvgAggregateInputType = {
    id?: true
    ano?: true
  }

  export type LivroSumAggregateInputType = {
    id?: true
    ano?: true
  }

  export type LivroMinAggregateInputType = {
    id?: true
    titulo?: true
    autor?: true
    ano?: true
  }

  export type LivroMaxAggregateInputType = {
    id?: true
    titulo?: true
    autor?: true
    ano?: true
  }

  export type LivroCountAggregateInputType = {
    id?: true
    titulo?: true
    autor?: true
    ano?: true
    _all?: true
  }

  export type LivroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livro to aggregate.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Livros
    **/
    _count?: true | LivroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LivroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LivroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivroMaxAggregateInputType
  }

  export type GetLivroAggregateType<T extends LivroAggregateArgs> = {
        [P in keyof T & keyof AggregateLivro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivro[P]>
      : GetScalarType<T[P], AggregateLivro[P]>
  }




  export type LivroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroWhereInput
    orderBy?: LivroOrderByWithAggregationInput | LivroOrderByWithAggregationInput[]
    by: LivroScalarFieldEnum[] | LivroScalarFieldEnum
    having?: LivroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivroCountAggregateInputType | true
    _avg?: LivroAvgAggregateInputType
    _sum?: LivroSumAggregateInputType
    _min?: LivroMinAggregateInputType
    _max?: LivroMaxAggregateInputType
  }

  export type LivroGroupByOutputType = {
    id: number
    titulo: string
    autor: string
    ano: number
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  type GetLivroGroupByPayload<T extends LivroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivroGroupByOutputType[P]>
            : GetScalarType<T[P], LivroGroupByOutputType[P]>
        }
      >
    >


  export type LivroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    autor?: boolean
    ano?: boolean
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    autor?: boolean
    ano?: boolean
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    autor?: boolean
    ano?: boolean
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectScalar = {
    id?: boolean
    titulo?: boolean
    autor?: boolean
    ano?: boolean
  }

  export type LivroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "autor" | "ano", ExtArgs["result"]["livro"]>

  export type $LivroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Livro"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      autor: string
      ano: number
    }, ExtArgs["result"]["livro"]>
    composites: {}
  }

  type LivroGetPayload<S extends boolean | null | undefined | LivroDefaultArgs> = $Result.GetResult<Prisma.$LivroPayload, S>

  type LivroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LivroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivroCountAggregateInputType | true
    }

  export interface LivroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Livro'], meta: { name: 'Livro' } }
    /**
     * Find zero or one Livro that matches the filter.
     * @param {LivroFindUniqueArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LivroFindUniqueArgs>(args: SelectSubset<T, LivroFindUniqueArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LivroFindUniqueOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LivroFindUniqueOrThrowArgs>(args: SelectSubset<T, LivroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindFirstArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LivroFindFirstArgs>(args?: SelectSubset<T, LivroFindFirstArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindFirstOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LivroFindFirstOrThrowArgs>(args?: SelectSubset<T, LivroFindFirstOrThrowArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Livros
     * const livros = await prisma.livro.findMany()
     * 
     * // Get first 10 Livros
     * const livros = await prisma.livro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const livroWithIdOnly = await prisma.livro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LivroFindManyArgs>(args?: SelectSubset<T, LivroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livro.
     * @param {LivroCreateArgs} args - Arguments to create a Livro.
     * @example
     * // Create one Livro
     * const Livro = await prisma.livro.create({
     *   data: {
     *     // ... data to create a Livro
     *   }
     * })
     * 
     */
    create<T extends LivroCreateArgs>(args: SelectSubset<T, LivroCreateArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Livros.
     * @param {LivroCreateManyArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LivroCreateManyArgs>(args?: SelectSubset<T, LivroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Livros and returns the data saved in the database.
     * @param {LivroCreateManyAndReturnArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Livros and only return the `id`
     * const livroWithIdOnly = await prisma.livro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LivroCreateManyAndReturnArgs>(args?: SelectSubset<T, LivroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Livro.
     * @param {LivroDeleteArgs} args - Arguments to delete one Livro.
     * @example
     * // Delete one Livro
     * const Livro = await prisma.livro.delete({
     *   where: {
     *     // ... filter to delete one Livro
     *   }
     * })
     * 
     */
    delete<T extends LivroDeleteArgs>(args: SelectSubset<T, LivroDeleteArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livro.
     * @param {LivroUpdateArgs} args - Arguments to update one Livro.
     * @example
     * // Update one Livro
     * const livro = await prisma.livro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LivroUpdateArgs>(args: SelectSubset<T, LivroUpdateArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Livros.
     * @param {LivroDeleteManyArgs} args - Arguments to filter Livros to delete.
     * @example
     * // Delete a few Livros
     * const { count } = await prisma.livro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LivroDeleteManyArgs>(args?: SelectSubset<T, LivroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LivroUpdateManyArgs>(args: SelectSubset<T, LivroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros and returns the data updated in the database.
     * @param {LivroUpdateManyAndReturnArgs} args - Arguments to update many Livros.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Livros and only return the `id`
     * const livroWithIdOnly = await prisma.livro.updateManyAndReturn({
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
    updateManyAndReturn<T extends LivroUpdateManyAndReturnArgs>(args: SelectSubset<T, LivroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Livro.
     * @param {LivroUpsertArgs} args - Arguments to update or create a Livro.
     * @example
     * // Update or create a Livro
     * const livro = await prisma.livro.upsert({
     *   create: {
     *     // ... data to create a Livro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livro we want to update
     *   }
     * })
     */
    upsert<T extends LivroUpsertArgs>(args: SelectSubset<T, LivroUpsertArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroCountArgs} args - Arguments to filter Livros to count.
     * @example
     * // Count the number of Livros
     * const count = await prisma.livro.count({
     *   where: {
     *     // ... the filter for the Livros we want to count
     *   }
     * })
    **/
    count<T extends LivroCountArgs>(
      args?: Subset<T, LivroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LivroAggregateArgs>(args: Subset<T, LivroAggregateArgs>): Prisma.PrismaPromise<GetLivroAggregateType<T>>

    /**
     * Group by Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroGroupByArgs} args - Group by arguments.
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
      T extends LivroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LivroGroupByArgs['orderBy'] }
        : { orderBy?: LivroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LivroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Livro model
   */
  readonly fields: LivroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Livro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LivroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Livro model
   */
  interface LivroFieldRefs {
    readonly id: FieldRef<"Livro", 'Int'>
    readonly titulo: FieldRef<"Livro", 'String'>
    readonly autor: FieldRef<"Livro", 'String'>
    readonly ano: FieldRef<"Livro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Livro findUnique
   */
  export type LivroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro findUniqueOrThrow
   */
  export type LivroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro findFirst
   */
  export type LivroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro findFirstOrThrow
   */
  export type LivroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro findMany
   */
  export type LivroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Filter, which Livros to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro create
   */
  export type LivroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The data needed to create a Livro.
     */
    data: XOR<LivroCreateInput, LivroUncheckedCreateInput>
  }

  /**
   * Livro createMany
   */
  export type LivroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Livros.
     */
    data: LivroCreateManyInput | LivroCreateManyInput[]
  }

  /**
   * Livro createManyAndReturn
   */
  export type LivroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The data used to create many Livros.
     */
    data: LivroCreateManyInput | LivroCreateManyInput[]
  }

  /**
   * Livro update
   */
  export type LivroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The data needed to update a Livro.
     */
    data: XOR<LivroUpdateInput, LivroUncheckedUpdateInput>
    /**
     * Choose, which Livro to update.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro updateMany
   */
  export type LivroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Livros.
     */
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
  }

  /**
   * Livro updateManyAndReturn
   */
  export type LivroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The data used to update Livros.
     */
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
  }

  /**
   * Livro upsert
   */
  export type LivroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The filter to search for the Livro to update in case it exists.
     */
    where: LivroWhereUniqueInput
    /**
     * In case the Livro found by the `where` argument doesn't exist, create a new Livro with this data.
     */
    create: XOR<LivroCreateInput, LivroUncheckedCreateInput>
    /**
     * In case the Livro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LivroUpdateInput, LivroUncheckedUpdateInput>
  }

  /**
   * Livro delete
   */
  export type LivroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Filter which Livro to delete.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro deleteMany
   */
  export type LivroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livros to delete
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to delete.
     */
    limit?: number
  }

  /**
   * Livro without action
   */
  export type LivroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PessoaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    idade: 'idade',
    cpf: 'cpf'
  };

  export type PessoaScalarFieldEnum = (typeof PessoaScalarFieldEnum)[keyof typeof PessoaScalarFieldEnum]


  export const LivroScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    autor: 'autor',
    ano: 'ano'
  };

  export type LivroScalarFieldEnum = (typeof LivroScalarFieldEnum)[keyof typeof LivroScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PessoaWhereInput = {
    AND?: PessoaWhereInput | PessoaWhereInput[]
    OR?: PessoaWhereInput[]
    NOT?: PessoaWhereInput | PessoaWhereInput[]
    id?: IntFilter<"Pessoa"> | number
    nome?: StringFilter<"Pessoa"> | string
    idade?: IntFilter<"Pessoa"> | number
    cpf?: StringFilter<"Pessoa"> | string
  }

  export type PessoaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    cpf?: SortOrder
  }

  export type PessoaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    AND?: PessoaWhereInput | PessoaWhereInput[]
    OR?: PessoaWhereInput[]
    NOT?: PessoaWhereInput | PessoaWhereInput[]
    nome?: StringFilter<"Pessoa"> | string
    idade?: IntFilter<"Pessoa"> | number
  }, "id" | "cpf">

  export type PessoaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    cpf?: SortOrder
    _count?: PessoaCountOrderByAggregateInput
    _avg?: PessoaAvgOrderByAggregateInput
    _max?: PessoaMaxOrderByAggregateInput
    _min?: PessoaMinOrderByAggregateInput
    _sum?: PessoaSumOrderByAggregateInput
  }

  export type PessoaScalarWhereWithAggregatesInput = {
    AND?: PessoaScalarWhereWithAggregatesInput | PessoaScalarWhereWithAggregatesInput[]
    OR?: PessoaScalarWhereWithAggregatesInput[]
    NOT?: PessoaScalarWhereWithAggregatesInput | PessoaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pessoa"> | number
    nome?: StringWithAggregatesFilter<"Pessoa"> | string
    idade?: IntWithAggregatesFilter<"Pessoa"> | number
    cpf?: StringWithAggregatesFilter<"Pessoa"> | string
  }

  export type LivroWhereInput = {
    AND?: LivroWhereInput | LivroWhereInput[]
    OR?: LivroWhereInput[]
    NOT?: LivroWhereInput | LivroWhereInput[]
    id?: IntFilter<"Livro"> | number
    titulo?: StringFilter<"Livro"> | string
    autor?: StringFilter<"Livro"> | string
    ano?: IntFilter<"Livro"> | number
  }

  export type LivroOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    ano?: SortOrder
  }

  export type LivroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LivroWhereInput | LivroWhereInput[]
    OR?: LivroWhereInput[]
    NOT?: LivroWhereInput | LivroWhereInput[]
    titulo?: StringFilter<"Livro"> | string
    autor?: StringFilter<"Livro"> | string
    ano?: IntFilter<"Livro"> | number
  }, "id">

  export type LivroOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    ano?: SortOrder
    _count?: LivroCountOrderByAggregateInput
    _avg?: LivroAvgOrderByAggregateInput
    _max?: LivroMaxOrderByAggregateInput
    _min?: LivroMinOrderByAggregateInput
    _sum?: LivroSumOrderByAggregateInput
  }

  export type LivroScalarWhereWithAggregatesInput = {
    AND?: LivroScalarWhereWithAggregatesInput | LivroScalarWhereWithAggregatesInput[]
    OR?: LivroScalarWhereWithAggregatesInput[]
    NOT?: LivroScalarWhereWithAggregatesInput | LivroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Livro"> | number
    titulo?: StringWithAggregatesFilter<"Livro"> | string
    autor?: StringWithAggregatesFilter<"Livro"> | string
    ano?: IntWithAggregatesFilter<"Livro"> | number
  }

  export type PessoaCreateInput = {
    nome: string
    idade: number
    cpf: string
  }

  export type PessoaUncheckedCreateInput = {
    id?: number
    nome: string
    idade: number
    cpf: string
  }

  export type PessoaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type PessoaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type PessoaCreateManyInput = {
    id?: number
    nome: string
    idade: number
    cpf: string
  }

  export type PessoaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type PessoaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type LivroCreateInput = {
    titulo: string
    autor: string
    ano: number
  }

  export type LivroUncheckedCreateInput = {
    id?: number
    titulo: string
    autor: string
    ano: number
  }

  export type LivroUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
  }

  export type LivroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
  }

  export type LivroCreateManyInput = {
    id?: number
    titulo: string
    autor: string
    ano: number
  }

  export type LivroUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
  }

  export type LivroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PessoaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    cpf?: SortOrder
  }

  export type PessoaAvgOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
  }

  export type PessoaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    cpf?: SortOrder
  }

  export type PessoaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    cpf?: SortOrder
  }

  export type PessoaSumOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type LivroCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    ano?: SortOrder
  }

  export type LivroAvgOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
  }

  export type LivroMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    ano?: SortOrder
  }

  export type LivroMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    ano?: SortOrder
  }

  export type LivroSumOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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