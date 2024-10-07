// Remove duplicate elements from an array

function removeDuplicates(arr) {
    return [... new Set(arr)]
}
let arr = [11,22,3,34,55,66,33,22,55,7]
console.log(removeDuplicates(arr));