type MyAwaited<T> = T extends Promise<infer U> ? U : T

export declare function PromiseAll<T extends readonly unknown[]>(values: readonly [...T]): Promise<{-readonly[K in keyof T] : MyAwaited<T[K]>}>
