//Find the Sum of All Odd Numbers in an Array

let array = [1,2,3,4,5,6,7,8,9];

let oddSum = array.reduce((sum,num)=> num % 2 !== 0 ? sum+num : sum, 0)

console.log(`Some of all Oddnumbers in an array : ${oddSum}`);