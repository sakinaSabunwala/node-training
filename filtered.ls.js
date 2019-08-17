const fs = require('fs');
const path = require('path');

let dirPath = process.argv[2]; // path to your directory goes here
let ext = '.' + process.argv[3];

fs.readdir(dirPath, function(err, files) {
    if (err) {
        return console.log(err);
    } else {

        files.forEach(function(file) {
            if (path.extname(file) === ext)
                console.log(file);
        });
    }
});