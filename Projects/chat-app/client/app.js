var chat = document.getElementById('chat');
var input = document.getElementById('messageInput');
var sendBtn = document.getElementById('sendBtn');
var ws = new WebSocket("ws://".concat(window.location.host));
ws.onmessage = function (event) {
    var msg = document.createElement('div');
    msg.textContent = event.data;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
};
sendBtn.addEventListener('click', function () {
    if (input.value.trim()) {
        ws.send(input.value);
        input.value = '';
    }
});
input.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});
