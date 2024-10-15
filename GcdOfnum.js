let a = 56;
let b = 98;

while(b) {
    let temp = b;
    b = a % b;
    a =temp;
}

console.log(`GCD of  a and b : ${a}`)