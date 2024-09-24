function isPrime(num){

    if(num<=1) return false // Numbers less than or equal to 1 are not prime
    if(num<=2) return true // 2 is the only even prime number

     // Check divisibility from 2 up to the square root of num
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0) return false ; // If divisible, not prime
    }
    return true // If no divisors found, the number is prime
}

console.log(isPrime(5)); // Output: true
console.log(isPrime(8)); // Output: false