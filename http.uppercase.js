const http = require("http");

let portNumber = process.argv[2];
let body = '';


let server = http.createServer(function(req, res) {
    req.on('data', function(data) {
        body += data;
    });
    req.on('end', function() {
        res.end(body.toUpperCase());
    })
})
server.listen(portNumber);