const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const users = [];
const connections = [];

server.listen(process.env.PORT || 3000);
console.log('Server running...');

/**
 * include static files (for example: js files)
 */
app.use('/js', express.static('js'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', (socket) => {
    connections.push(socket);
    console.log('Connected: %s sockets connected ', connections.length);

    // Disconnect
    socket.on('disconnect', () => {
        if (!socket.username) {
            return;
        }
        users.splice(users.indexOf(socket.username), 1);
        updateUsernames();
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected ', connections.length);
    });

    // Send message
    socket.on('send message', (data) => {
        console.log('Serve: send message', data);
        io.sockets.emit('new message', {msg: data, user: socket.username});
    });

    // New user
    socket.on('new user', (data, callback) => {
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsernames();
    });
    
    function updateUsernames() {
        io.sockets.emit('get users', users);
    }
});
