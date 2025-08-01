type Falsy = 0 | '' | false | undefined | null;

type IsEmptyArray<T> = T extends any[] 
? T['length'] extends 0
   ? true
   : false
: false;

type IsEmptyObject<T> = T extends object 
? keyof T extends never
   ? true
   : false
: false;

export type AnyOf<T extends unknown[]> = 
T extends [infer First, ...infer Rest]
? First extends Falsy
    ? AnyOf<Rest>
    : IsEmptyArray<First> extends true
      ? AnyOf<Rest>
      : IsEmptyObject<First> extends true
         ? AnyOf<Rest>
         : true
: false