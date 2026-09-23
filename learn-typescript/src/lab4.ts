class Student {
    id: number;
    name: string;
    constructor(id: number,name: string){
        this.id = id;
        this.name = name;
    }
    display(){
        return `ID: ${this.id}, name: ${this.name}`
    }
}
const p = new Student(1,"Trong");

console.log(p.display());


interface User {
    id: number;
    email: string;
    phone?: number;
}


type Product = {
    id: number;
    name: string;
    price: number;
}
const productItem: Product ={
    id:1,
    name:"Trong",
    price:222
}
console.log(productItem);


type Status = "loading" | "success" | "error";
function logStatus(status: Status): void {
    switch (status) {
        case "loading":
            break;
        case "success":
            break;
        case "error":
            break;
        default:
            break;
    }
}
logStatus("loading");
logStatus("success");
logStatus("error");


function identity<T>(value: T): T{
    return value;
}
console.log(identity("Trong"));
console.log(identity(20));
console.log(identity(true));