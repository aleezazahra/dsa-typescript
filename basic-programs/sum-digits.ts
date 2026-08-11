let sum=0;
function Sum_digits(num:number){
   while(num>0){

         sum=num%10+sum
         num=Math.floor(num/10)
        

    }
    return sum;

}
const num:number=1234;
console.log(Sum_digits(num))
