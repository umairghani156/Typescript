var a = "Umair";
console.log(a);


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

type UserName = string | number | boolean;

let c: UserName = false;


type User = (m: number, n: number)=> number;


const func3: User = (m, n) => {
    return m * n
}