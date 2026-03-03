const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

const x1 = Number(input[0]);
const x2 = Number(input[1]);
const mlt = x1*x2;

console.log((mlt/12).toFixed(3));