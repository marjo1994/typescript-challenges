export type TrimLeft<S extends string> = 
S extends ` ${infer Rest}` ? TrimLeft<Rest> :
S extends `\n${infer Rest}` ? TrimLeft<Rest> :
S extends `\t${infer Rest}` ? TrimLeft<Rest>
: S