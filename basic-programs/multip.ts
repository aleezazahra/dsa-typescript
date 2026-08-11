import {createInterface} from "node:readline"

const rl=createInterface({
    input:process.stdin,
    output:process.stdout,

})
function question(q:string):Promise<string>{
    return new Promise((resolve)=>rl.question(q,resolve))

}
async function PrintTable(){
    const input=await question("give a number")
    const num=Number(input)

    for(let i:number=0;i<13;i++){
        console.log(`${num} x ${i}=${num*i}`)
    }
}
PrintTable()