
const chat  = document.getElementById('chat') as HTMLDivElement;
const input = document.getElementById('messageInput') as HTMLInputElement;
const sendBtn = document.getElementById('sendBtn') as HTMLButtonElement;

let username: string = '';

while (!username) {
  username = prompt('Enter your name:')?.trim() || '';
}

const ws = new WebSocket(`ws://${window.location.host}`);

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);

  const msg = document.createElement('div');
  msg.className = 'message';
  msg.innerHTML = `<strong>${data.username}</strong> <em>@${data.timestamp}</em>: ${data.message}`;

  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
};

sendBtn.addEventListener('click', () => {
  if (input.value.trim()) {
    const messageData = {
      username,
      message: input.value,
      timestamp: new Date().toLocaleTimeString([], {hour:'2-digit', minute :'2-digit'}),
    };

    ws.send(JSON.stringify(messageData));
    input.value = '';
  }
});

input.addEventListener('keyup', (event) =>{
    if (event.key === 'Enter'){
        sendBtn.click();
    }
});