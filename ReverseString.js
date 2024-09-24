// Reverse a string

let str = "Helloooo";

let rev = str.split('').reverse().join('');
console.log("Desired O/p :", rev);


// Palindrome checker

function isPalindrome(name) {

    let input = name.toString();

let reverseIn = input.split('').reverse().join('');

 return reverseIn === input;
}
console.log(isPalindrome("HANNAH"))

