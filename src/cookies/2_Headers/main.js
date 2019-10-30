const express = require('express');
const app = express();

app.use('/', (req, res) => {
    console.log('Cookies from client: ', req.headers['cookie']);
    // res.setHeader('Set-Cookie', 'TestHeader=HeaderValue');
    // res.setHeader('Set-Cookie', ['item1=value1', 'item2=value2']);
    res.setHeader('Set-Cookie', ['item1=value1', 'item2=value2']);

    console.log('Method getHeader(): ', res.getHeader('Set-Cookie'));
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, () => {
    console.log('The server is started!');
});
