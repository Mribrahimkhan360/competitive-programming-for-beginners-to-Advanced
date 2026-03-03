const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

const x1 = Number(input[0]);
const y1 = Number(input[1]);
const x2 = Number(input[2]);
const y2 = Number(input[3]);
const sub1 = (x2 - x1) ** 2;
const sub2 = (y2 - y1) ** 2;
const root = Math.sqrt(sub1+sub2);


console.log(root.toFixed(4));