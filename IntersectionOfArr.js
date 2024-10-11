let array1 = [1,2,3,4,5,6,7,8];
let array2= [1,3,5,7,9];


let intersection = array1.filter(value =>array2.includes(value))

console.log("intersection of a two arrays:",intersection);
