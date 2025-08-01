export type IsAny<T> = (<U>() => U extends T ? true : false) extends (<U>() => U extends any ? true : false )
    ? true
    : false


    //The first condition: any is wider than concrete types, but when T is any is true.
    //Fail with unknown because U could be `never`
    //The second condition is always true because any covers everything