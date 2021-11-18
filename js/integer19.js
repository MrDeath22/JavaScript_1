let a = +prompt();

let b = a % 10; // 1
let c = (a - b) / 10; // 24
let d = c % 10; // 4
let e = (c - d) / 10; // 2
let sum1 = b + d + e;
let sum2 = b * d * e;

console.log(sum1, sum2);