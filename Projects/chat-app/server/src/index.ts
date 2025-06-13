import express from 'express';
import { WebSocketServer } from 'ws';
import http from 'http';

const app = express();
const server = http.createServer(app)

const wss = new WebSocketServer({server});

const port = 3000;

app.use(express.static('../client')); //server client files

wss.on('connection',(ws) =>{
    console.log('Client Connected');
    ws.on('message', (message) =>{
        wss.clients.forEach(client =>{
            if(client !== ws && client.readyState ===1){
                client.send(message.toString());
            }
        });
    });

    ws.on('close', () =>{
        console.log('Client Disconnected');
    });
 });

 server.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`);
 });
