// find sum of even numbers


let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let evenSum = numbers.reduce((sum,num) => num % 2 === 0 ? sum + num : sum, 0)

console.log(`Sum of even numbers: ${evenSum}`);