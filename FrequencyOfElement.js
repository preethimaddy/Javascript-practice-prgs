// Find the frequency of element

let array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

let frequency = {}

for(let item of array) {

    frequency[item] = frequency[item] ? frequency[item] + 1 : 1;
}
console.log(frequency);