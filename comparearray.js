// Compare array of two elements 

let arr1 = [1,2,3,4,5,6,7,8]

let arr2 = [1,2,3,4,5,6,7,8]

let compare = arr1.length === arr2.length && arr1.every((value,index)=> arr2[index]);

console.log(`Arrays are equal: ${compare}`);

// Compare array of two elements = not equal
let arr3 = [1,2,5,4,5,6,7,8]

let arr4 = [1,2,3,4,5,6,7,8]
let compare1 = arr3.length === arr4.length && arr3.every((value,index)=> arr4[index]);

console.log(`Both Arrays are equal: ${compare1}`);