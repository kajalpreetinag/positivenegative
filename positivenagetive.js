const input = require("readline-sync");
let n = input.questionInt("enter number: ");

if(n>0){
console.log("n is positive",n)
}
else if(n<0)
{
    console.log("n is negative",n)
}
else{console.log("n is zero",n)}
