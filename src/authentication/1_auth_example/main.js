const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

const port = 8080;

const users = [
    {username: 'admin', password: '12345'},
    {username: 'foo', password: 'bar'},
    {username: 'user', password: 'test'}
];

const sessionHandler = require('./js/session_handler');
const store = sessionHandler.createStore();

app.use(cookieParser());
app.use(session({
    store: store,
    resave: false,
    saveUninitialized: true,
    secret: 'supersecret'
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.post('/login', (req, res) => {
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        const u = users[i];
        if (u.username === req.body.username && u.password === req.body.password) {
            foundUser = u.username;
            break;
        }
    }

    if (foundUser) {
        req.session.username = foundUser;
        console.log('Login succeeded: ', req.session.username);
        res.send('Login successful: ' + 'sessionID: ' + req.session.id + '; user: ' + req.session.username);
    } else {
        console.log('Login failed: ', req.body.username);
        res.status(401).send('Login error');
    }
});

app.get('/check', (req, res) => {
    if (req.session.username) {
        res.set('Content-Type', 'text/html');
        res.send('<h2>User ' + req.session.username + ' is logged in!</h2>');
    } else {
        res.send('Not logged in!');
    }
});

app.listen(port, () => console.log('App running on port ' + port));