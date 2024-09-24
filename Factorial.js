// Calculate factorial using Recursion

let number = 6;

function factorial(number) {
    if(number === 0 || number === 1) {
        return 1;
    }
    return number * factorial(number-1);
}
console.log(factorial(number));

// calculate using for loop

function facto(n) {
    let result=1;
    for(let i=2; i<=n; i++) {

        return n * facto(n-1)
    }
    return result
}
console.log(facto(8))