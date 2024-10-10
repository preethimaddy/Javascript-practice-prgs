//Flatten a Multi-Dimensional Array

let array =[1, [2, [3, 4], 5], 6];

let arrayFlatten = array.flat(Infinity) // Using .flat() with Infinity depth

console.log(arrayFlatten);