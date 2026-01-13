import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: process.env.PORT || 3000 });

wss.on('connection', (ws) => {

    ws.on('message', msg => console.log('recv:', msg.toString()));

    ws.send('connected to the fly.io ws');

    ws.on('close', () => console.log('client disconnected'));

    ws.on('error', (err) => console.error('ws error', err));

    setInterval( ()=>ws.send('simule une connection permanante : '+Math.random()), 100 );
});