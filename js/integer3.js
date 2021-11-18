let a = +prompt();

let b = a % 10; // 3
let c = (a - b) / 10; // 12
let d = c % 10; // 2
let g = (c - d) / 10; // 1
let sum = 100 * b + d * 10 + g; 

console.log(sum);