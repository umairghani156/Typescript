type Product ={
   name:string,
   age:number
}
// var a = "Umair";
// console.log(a);

type Post ={
   id: string,
   name:string,
}
   


// function hello(a:number, b: number): number{
//     return a * b 
// }
// hello(2,3)

// let n = <number> 123;
// let b: string = "Umair"

// const func = (m:number,n:number)=>{
//     return m + n
// }

const updateHandler = (data:[]): Product=>{
   return data.map(val=> val.name );
}

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

function hello2(username:string): string=>{
   return arr.find((val)=> val.name === username);
}
interface Person {
  name: string; 
  age: number;   
  greet(): void; 
}

const person: Person = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet();

interface Person2 {
   name : string
}
interface Person3 extends Person2 {
   age: number
   address : string
}

type Person ={
name : string,
age: number
}

const obj: Person = {
   name :"Umair",
   age:23
}

interface Person {
  name: string;
  age: number;
}

const person1: Person = { name: "Ali", age: 25 };

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = { name: "Bulldog", breed: "Pug" };

let personInfo: [string, number?, string?] = ["John", 30];

function printArray<T>(items: T[]): void{
   items.forEach((val)=> console.log(val))
}
printArray(["umair","ahmed","ghani"])

enum Direction {
   up = 10,
   down = 20,
   left = 30,
   right = 40
}
let move: Direction = Direction.up
console.log(move)


enum User {
  admin,
  user,
  manager
}

enum User {
  admin,
  user,
  manager
}

interface Product{
   name: string,
   price: number,
   totalSum: number,
   orderId: string[],
   createdAt: string,
   updatedAt: string,
}

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
   
