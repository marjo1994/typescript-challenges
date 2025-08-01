type UnionToIntersection<U> =
(U extends any ? (args: U) => void : never ) extends ((args: infer I) => void)
    ? I
    :never

type LastOfUnion<U> =
UnionToIntersection<U extends U ? (args: U) => 0 : never> extends (args: infer Last) => 0
    ? Last
    : never


export type UnionToTuple<U, Last = LastOfUnion<U>> =
[U] extends [never]
? []
: [...UnionToTuple<Exclude<U, Last>>, Last]


