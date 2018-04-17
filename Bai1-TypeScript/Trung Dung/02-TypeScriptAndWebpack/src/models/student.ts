import { Person } from "../interfaces/person";

export class Student implements Person{
    fullName: string;
    firstName:string;
    middleInitial:string;
    lastName:string;
    constructor(firstName: string, lastName: string, middleInitial:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitial = middleInitial;
        this.fullName = firstName + " " + lastName 
    }
}