function sumOfDigits(num){

    return num.toString().split('').reduce((sum, digit) => sum + Number(digit),0);
}

let number = 1234;
console.log(`The sum of given number  ${number} is:${sumOfDigits(number)}`); //The sum of given number  1234 is:10