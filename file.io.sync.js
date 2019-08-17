const fs = require('fs');

let content = fs.readFileSync(process.argv[2]);
let number_of_lines = content.toString().split('\n').length - 1;

console.log(number_of_lines);