const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

const x1 = Number(input[0]);


console.log(x1*2+' minutos');