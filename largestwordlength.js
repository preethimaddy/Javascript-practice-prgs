// find the words length in a sentence

let sentence = "Find a marvelous day in your life";

let words = sentence.split(' ');

let LongestWordLength = 0
for(let word of words){

    if(word.length > LongestWordLength){

        LongestWordLength = word.length;
    }
}
console.log("The length of the longest word is: ",LongestWordLength);