let sequence = [1, 2, 4, 5, 7, 9, 10, 15, 17];  // Given sequence with multiple missing numbers
let n = 17; // Full sequence should be from 1 to 17

// Full sequence from 1 to n
let fullSequence = Array.from({ length: n }, (item, i) => i + 1);

// Find all missing numbers by comparing both sequences
let missingNumbers = fullSequence.filter(num => !sequence.includes(num));

console.log(`Expected sequence: ${fullSequence}`);
console.log(`Given sequence: ${sequence}`);
console.log(`Missing numbers are: ${missingNumbers}`);
