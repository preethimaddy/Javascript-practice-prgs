let arr=[1,2,3,4,5]

function sumArray(arr) {
    let sum =0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(sumArray(arr)) // 15

// Using REDUCE method

let numbers = [1,2,3,4,5];

let sum1 = numbers.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
console.log(sum1)
