// Remove particular element from ana array

let arr = [1,2,3,2,4,2,5,2,6,7,2,8,9];

let elementORemove = 2;

let filteredArr = arr.filter(num => num !== elementORemove)
console.log(`After removing ${elementORemove} from an array ${filteredArr}`);
