const http = require('http');
const Cookies = require('cookies');

http.createServer((req, res) => {
    const cookies = new Cookies(req, res);

    if (req.url === '/favicon.ico') {
        res.end();
        return;
    }

    cookies.set('admin', 'true');
    console.log('Cookies: ', cookies.get('admin'));

    res.end();
}).listen(8080, () => console.log('Server is started on port 8080'));
