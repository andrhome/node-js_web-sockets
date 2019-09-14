$(function () {
    console.log('CONNECT');
    const socket = io.connect();
    const $messageForm = $('#messageForm');
    const $message = $('#message');
    const $chat = $('#chat');
    const $userForm = $('#userForm');
    const $userFormArea = $('#userFormArea');
    const $messageArea = $('#messageArea');
    const $username = $('#username');
    const $users = $('#users');

    $messageForm.submit((e) => {
        e.preventDefault();
        socket.emit('send message', $message.val());
        $message.val('');
    });

    socket.on('new message', (data) => {
        $chat.append('<div class="alert alert-secondary"><strong>' + data.user + '</strong>:' + ' ' + data.msg + '</div>')
    });

    $userForm.submit((e) => {
        e.preventDefault();
        socket.emit('new user', $username.val(), (data) => {
            if (data) {
                $userFormArea.hide();
                $messageArea.show();
            }
        });
        $username.val('');
    });

    socket.on('get users', (users) => {
        let html = '';
        for (i = 0; i < users.length; i++) {
            html += '<li class="list-group-item">' + users[i] + '</li>';
        }
        $users.html(html);
    });
});