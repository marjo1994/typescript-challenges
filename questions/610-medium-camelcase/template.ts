export type CamelCase<S extends string> =
S extends `${infer First}-${infer Rest}`
  ? Rest extends Capitalize<Rest>
    ? `${First}-${CamelCase<Rest>}`
    : Rest extends `${infer Next}${infer Rest2}`
      ? Next extends '-'
        ? `${First}-${CamelCase<`-${Rest2}`>}`  
        : `${First}${Capitalize<Next>}${CamelCase<Rest2>}`
      : S
  : S;
