const http = require('http');

var data = '';

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
            data += chunk;
        },
        response.on('end', function() {
            console.log(data.length);
            console.log(data);
        }))
});