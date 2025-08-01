export type LengthOfString<S extends string, StringArr extends any[] = []> =
S extends `${infer _First}${infer Rest}`
? LengthOfString<Rest, [...StringArr, unknown]>
: StringArr['length'];