const chat  = document.getElementById('chat') as HTMLDivElement;
const input = document.getElementById('messageInput') as HTMLInputElement;
const sendBtn = document.getElementById('sendBtn') as HTMLButtonElement;

const ws = new WebSocket(`ws://${window.location.host}`);

ws.onmessage = (event)=>{
    const msg = document.createElement('div');
    msg.textContent = event.data;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
};

sendBtn.addEventListener('click', () => {
  if(input.value.trim()) {
    ws.send(input.value);
    input.value = '';
  }
});
input.addEventListener('keyup', (event) =>{
    if (event.key === 'Enter'){
        sendBtn.click();
    }
});