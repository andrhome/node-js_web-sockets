const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Page URL is ${req.url}`);
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('Hello, World!:)');
});

server.listen(7777, '127.0.0.1');
console.log('We are listening the PORT 7777.');
