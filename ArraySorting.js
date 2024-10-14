let arr = [3, 0, 2, 5, -1, 4, 1];

let sortedArr = [];

while(arr.length){

    let min = Math.min(...arr);
    sortedArr.push(min);
    arr.splice(arr.indexOf(min),1);

}
console.log(`Sorted Array: ${sortedArr}`);