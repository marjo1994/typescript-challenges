export type Chainable<O = {}> = {
  option<T extends string, P>(key: T, value: P): Chainable<O & {[K in T] : P }>
  get(): O
}
