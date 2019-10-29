const fs = require('fs');
const http = require('http');

/**
 * 1_Connection to the local server
 */
const server = http.createServer((req, res) => {
  console.log(`Page URL is ${req.url}`);

  if (req.url === '/index' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(`${__dirname}/data/html/index.html`).pipe(res);
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(`${__dirname}/data/html/about.html`).pipe(res);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(`${__dirname}/data/html/404.html`).pipe(res);
  }
});

server.listen(7777, '127.0.0.1');
console.log('We are listening the PORT 7777');
