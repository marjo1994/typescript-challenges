export type Length<T extends any> = T extends {length: infer L} ? L : never
