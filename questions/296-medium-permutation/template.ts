export type Permutation<T, K = T> = 
[T] extends [never]
? []
: K extends unknown
? [K, ...Permutation<Exclude<T, K>>]
: never

