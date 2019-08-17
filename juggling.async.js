const http = require('http')

let result = [];
let count = 0;

for (let i = 0; i < 3; i++) {
    getData(i);
}

function getData(index) {
    result[index] = '';
    http.get(process.argv[2 + index], function(response) {
        response.setEncoding('utf8');
        response.on('data', function(chunk) {
            result[index] += chunk;
            // console.log(result);
        });
        response.on('end', async function() {
            count++;
            if (count === 3) {
                await printResults();
            }
        });
    });
}


function printResults() {
    for (let i = 0; i < 3; i++) {
        console.log(result[i]);
    }
}