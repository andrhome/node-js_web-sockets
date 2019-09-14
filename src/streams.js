const fs = require('fs');

// let i = 1;
// myReadShort.on('data', (stream) => {
//   console.log(`STREAM: ${i++}`);
//   myWriteShort.write(stream);
// });



/**
 * Connection to the local server
  */

const http = require('http');
// Display HTML page from the index.html file
// const server = http.createServer((req, res) => {
//   console.log(`Page URL is ${req.url}`);
//   res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//   const myReadShort = fs.createReadStream(`${__dirname}/index.html`, 'utf8');
//   myReadShort.pipe(res);
// });

// Display JSON data
const server = http.createServer((req, res) => {
  console.log(`Page URL is ${req.url}`);
  res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  const obj = {
    model: 'Audi',
    speed: '280.5',
    doors: 4
  };

  res.end(JSON.stringify(obj));
});

server.listen(7777, '127.0.0.1');
console.log('We are listening the PORT 7777.');
