const { count } = require('console');
const fs = require('fs');

let input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

let notes = [100,50,20,10,5,2,1];

let x1 = Number(input[0]);
console.log(x1); // Print the original number

for(let i=0; i<notes.length;i++)
{
    let cnt = Math.floor(x1/notes[i]);
    console.log(`${cnt} nota(s) de R$ ${notes[i]},00`);
    x1 %= notes[i]; // Update the remaining amount
}