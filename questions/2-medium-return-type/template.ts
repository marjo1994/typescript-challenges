export type MyReturnType<T> = T extends (...args: never[]) => infer Return
  ? Return
  : never;
