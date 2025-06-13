var _a;
var chat = document.getElementById('chat');
var input = document.getElementById('messageInput');
var sendBtn = document.getElementById('sendBtn');
var username = '';
while (!username) {
    username = ((_a = prompt('Enter your name:')) === null || _a === void 0 ? void 0 : _a.trim()) || '';
}
var ws = new WebSocket("ws://".concat(window.location.host));
ws.onmessage = function (event) {
    var data = JSON.parse(event.data);
    var msg = document.createElement('div');
    msg.className = 'message';
    msg.innerHTML = "<strong>".concat(data.username, "</strong> <em>@").concat(data.timestamp, "</em>: ").concat(data.message);
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
};
sendBtn.addEventListener('click', function () {
    if (input.value.trim()) {
        var messageData = {
            username: username,
            message: input.value,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        ws.send(JSON.stringify(messageData));
        input.value = '';
    }
});
input.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});
