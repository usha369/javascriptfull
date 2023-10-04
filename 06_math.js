let balance = 100000;
let score = 234.6;
// console.log(balance.toFixed(5))
console.log(score.toPrecision(4))
console.log(balance.toLocaleString('en-IN'));
console.log(Math.round(4.2))
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);