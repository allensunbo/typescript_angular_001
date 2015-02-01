interface Person {
    getName(): string;
}
declare class Student implements Person {
    firstname: string;
    lastname: string;
    constructor(firstname: string, lastname: string);
    getName(): string;
}
