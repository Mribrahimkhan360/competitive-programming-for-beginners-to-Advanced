eecrowd | 1018
Banknotes
Adapted by Neilor Tonin, URI  Brazil

Timelimit: 1
In this problem you have to read an integer value and calculate the smallest possible number of banknotes in which the value may be decomposed. The possible banknotes are 100, 50, 20, 10, 5, 2 and 1. Print the read value and the list of banknotes.

Input
The input file contains an integer value N (0 < N < 1000000).

Output
Print the read number and the minimum quantity of each necessary banknotes in Portuguese language, as the given example. Do not forget to print the end of line after each line, otherwise you will receive “Presentation Error”.

Input Sample	Output Sample
576

576
5 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
1 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
0 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00

11257

11257
112 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
0 nota(s) de R$ 1,00

503

503
5 nota(s) de R$ 100,00
0 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
0 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00



const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);
let x1 = Number(input[0]); // Use let here

const notes = [100, 50, 20, 10, 5, 2, 1];

console.log(x1); // Print the original number

for (let i = 0; i < notes.length; i++) {
    let cnt = Math.floor(x1 / notes[i]);
    console.log(`${cnt} nota(s) de R$ ${notes[i]},00`);
    x1 %= notes[i]; // Update the remaining amount
}