const fs = require('fs');
const http = require('http');

let portnumber = process.argv[2];
let file = process.argv[3];

let server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    fs.createReadStream(file).pipe(res);
});

server.listen(portnumber);