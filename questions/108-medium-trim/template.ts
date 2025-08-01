type TrimRight<S extends string> =
S extends `${infer Rest} ` ? TrimRight<Rest> :
S extends `${infer Rest}\n` ? TrimRight<Rest> :
S extends `${infer Rest}\t` ? TrimRight<Rest>
: S

type TrimLeft<S extends string> =
S extends ` ${infer Rest}` ? TrimLeft<Rest> :
S extends `\n${infer Rest}` ? TrimLeft<Rest> :
S extends `\t${infer Rest}` ? TrimLeft<Rest>
: S


export type Trim<S extends string> = TrimLeft<TrimRight<S>>