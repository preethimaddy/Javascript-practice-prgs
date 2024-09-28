function countVowels(str) {

   
    let vowels ="aeiouAEIOU"
    let count =0;
    for(let char of str) {

        if(vowels.includes(char)) {

            count++;
        }
        
    }
    return count;
}

let str = "Heloooo my world";

console.log(countVowels(str))