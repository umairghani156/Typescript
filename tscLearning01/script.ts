// var a = "Umair";
// console.log(a);


// function hello(a:number, b: number): number{
//     return a * b 
// }
// hello(2,3)

// let n = <number> 123;
// let b: string = "Umair"

// const func = (m:number,n:number)=>{
//     return m + n
// }

// func(2,3)

// const funcb = (m:number, n:number): number=>{
//     return m * n
// }
// funcb(2,3)

//Array in TypeScript
//TYPE and INTERFACE

// type UserName = string | number | boolean;

// let c: UserName = false;


// type User = (m: number, n: number)=> number;


// const func3: User = (m, n) => {
//     return m * n
// }

// let user: string = 'Umair';
// user = "Umair";

// type Address ={
//     street: string,
//     area : string
// }
// type User = {
//     name: string,
//     age: Number,
//     city: string,
//     address?: Address
   
// }
// let person: User = {
//     name : "Umair",
//     age: 24,
//     city : "Karachi"
// }

// let person2: User = {
//     name: "Ahmed",
//     age: 23,
//     city : "Karachi",
//     address: {
//         street: "204",
//         area: "Mehmood Abad"
//     }
// }

//console.log(person);



// const orderQueue:[string, number, string] = ["hello", 23, "jee"];

// type Order = {
//     name: string,
//     age: number,
//     address : string
// }


// const orderQueue: number[] = []
// orderQueue.push(30)


// type Person = {
//     id : number,
//     name: string,
//     age:number,
//     address: string
//     status?: string
// }



// const person1 = {
//     id: 1,
//     name: "Umair",
//     age: 23,
//     address: "Mehmood abad"
// }
// const person2 = {
//     id: 2,
//     name: "Ahmed",
//     age: 22,
//     address: "Karachi"
// }

// // //let people: Person[] = [person1, person2]
// // let people: Array<Person> = [person1, person2]

// const orderQueue: Array<Person> = [person1, person2]

// function completeOrder(userId: number){
//  let order = orderQueue.find((od)=> od.id === userId);
//  if(!order){
//     console.log("Nothing");
//     return
    
//  }
//  order.status = "completed";
//  return order
// }
// completeOrder(1)

// let myName: "Umair" = "Umair";
// const myName2: "Umair" = "Umair";


// type UserRole = "admin" | "member" | "manager"
// let userRole: UserRole = "member"

type Person = {
    id: number,
    name: string,
    age: number,
}

const person1: Person[] = [{
    id: 1,
    name: "Umair",
    age: 23,
},
{
    id: 2,
    name: "Ahmed",
    age: 22,
},
];

function completeOrder(userId: number): Person| undefined{
    let order = person1.find((od)=> od.id === userId);
    if(!order){
        console.log("Nothing");
        return
    }
    order.age = 24;
    return order
}
completeOrder(1)


<<<<<<< HEAD
=======
const func3: User = (m, n) => {
    return m * n
}

type Person = {
name : string,
    age : number,
    address: string
}

function hello(userId: string): string =>{
    return userId + Date.now();
}
>>>>>>> 2a0f3e2dc01525787feab0404eda6e80d4ce9766
