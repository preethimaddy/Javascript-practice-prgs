// Frequency of a number

let arr = [1,2,2,3,3,3,4,4,4,4]

let frequency ={}

for(let num of arr){
    frequency[num] = frequency[num] ? num : 1 + 1;
}

console.log(frequency)