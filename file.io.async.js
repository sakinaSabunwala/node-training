const fs = require('fs');
let file = process.argv[2];


fs.readFile(file, function(err, data) {
    if (err) {
        return console.log(err)
    } else {
        let lines = data.toString().split('\n').length - 1;
        console.log(lines);
    }
});