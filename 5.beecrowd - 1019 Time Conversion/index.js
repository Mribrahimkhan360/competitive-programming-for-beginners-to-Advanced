const { count } = require('console');
const fs = require('fs');

let input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

const hours = Math.floor(input/3600);
const min = Math.floor((input%3600)/60)
const sec = input%60;

console.log(`${hours}:${min}:${sec}`);