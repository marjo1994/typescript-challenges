export type GetRequired<T> = {
  [K in keyof T as (T[K] extends Required<T>[K] ? K : never)] : T[K]
}

type example = GetRequired<{ foo: undefined; bar?: undefined }>