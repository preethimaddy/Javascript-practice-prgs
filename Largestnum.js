// Find the largest number without using loop

let array =[1,2,3,4,9,6];

const largest = Math.max(...array)
console.log("largest num in an array is : ", largest)

//  With loop

let input =[1,2,3,4,9,6];

let largestnum =input[0]
for(let i=0; i<input.length; i++) {
    if(input[i]>largestnum){
        largestnum = input[i]
    }
}
console.log("The largest number by using loop method",largestnum);