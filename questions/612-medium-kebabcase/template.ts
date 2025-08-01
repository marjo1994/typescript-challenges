export type KebabCase<S> = 
S extends `${infer L}${infer Rest}`
    ? Rest extends Uncapitalize<Rest>
        ?`${Uncapitalize<L>}${KebabCase<Rest>}`
        : `${Uncapitalize<L>}-${KebabCase<Rest>}`
    : S
