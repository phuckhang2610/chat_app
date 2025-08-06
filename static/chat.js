const socket = io();
const messages = document.getElementById('messages');
const input = document.getElementById('message');

socket.on('message', msg => {
    const li = document.createElement('li');
    li.textContent = msg;
    messages.appendChild(li);
});

function sendMessage() {
    const msg = input.value;
    if (msg) {
        socket.send(msg);
        input.value = '';
    }
}

input.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') sendMessage();
});
