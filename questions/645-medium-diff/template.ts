export type Diff<O, O1> = {
    [K in keyof (O & O1) as Exclude<K, keyof O & keyof O1>] :
    (O & O1)[K]
}
