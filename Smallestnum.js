function findsmallestnum(arr) {
    return Math.min(...arr)
}

let arr = [22, 33, 44, 55, 66, 77, 11, 26]
console.log(`Smallest number in an array is :${findsmallestnum(arr)}`);