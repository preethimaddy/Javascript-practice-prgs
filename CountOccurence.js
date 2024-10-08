//Count ocurence of each character

function countOccurence(str) {

    let charCount ={}

    for(let char of str){

        charCount[char] = charCount[char] ? charCount[char] + 1 : 1
    }
    return charCount;
}
let sentence = "kevinpeterson"
console.log(`Counting Occurence of each word(${sentence}):`,countOccurence(sentence));