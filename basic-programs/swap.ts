let a:number=4;
let b:number=6;

let temp:number=a;
a=b;
b=temp;
console.log(`value of a is ${a} and b is ${b}`)

//using function
function swap(c,d){
    return [d,c]
}
let c:number=10;
let d:number=20;
console.log(swap(c,d))
