const express = require('express');
const app = express();

app.use((req, res) => {
    console.log(req.headers['cookie']);
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, () => {
    console.log('The server is started!');
});
