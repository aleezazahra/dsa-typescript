import {createInterface} from "node:readline"

const rl=createInterface({
    input:process.stdin,
    output:process.stdout,

})
function question(q:string):Promise<string>{
    return new Promise((resolve)=>rl.question(q,resolve))

}
async function sum_natural(){
    const input=question("add a number")
    const num=Number(input)

    let sum:number=0
    for (let i:number=0;i<=num;i++){
        sum=sum+i;
        
    }
    console.log(sum)
    rl.close()

}
sum_natural()