const http = require('http');
const Cookies = require('cookies');

http.createServer((req, res) => {
    const cookies = new Cookies(req, res, {'keys': ['Secret_string']});
    console.log('Cookies: ', cookies.get('login'));

    const cookiesOptions = {
        maxAge: 12000,
        // expires: (new Date() + 7).toLocaleString(),
        path: '/admin',
        secure: false,
        signed: true
    };

    cookies.set('login', 'test@ex.com', cookiesOptions);

    res.end();
}).listen(8080, () => console.log('Server is started on port 8080'));
