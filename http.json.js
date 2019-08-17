const http = require('http');
const url = require('url');

let output;
let portnumber = process.argv[2];


let server = http.createServer(function(request, response) {
    if (request.method === 'GET') {
        let parsedURL = url.parse(request.url, true);
        let path = parsedURL.pathname;
        let date = new Date(parsedURL.query.iso);
        if (path === '/api/parsetime') {
            output = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };
        } else if (path === '/api/unixtime') {
            output = { unixtime: date.getTime() };
        }
        if (output) {
            response.writeHead(200, { 'content-type': 'application/json' });
            response.end(JSON.stringify(output));
        }
    }
});
server.listen(portnumber);