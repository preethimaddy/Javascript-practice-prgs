// Check if a string contain only numeric

function ifNumeric(str) {
    return /^\d+$/.test(str)
}

let str = "123456"
console.log(ifNumeric(str)) // true

// Check if a string contain only numeric

function ifNumeric(string) {
    return /^\d+$/.test(string)
}

let string = "125ttgfr3456"
console.log(ifNumeric(string)) // true

