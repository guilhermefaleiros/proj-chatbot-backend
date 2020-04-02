const express = require('express');
const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

const EntryListener = require('./listeners/EntryListener');

io.on('connection', async (socket) => {
  const listener = new EntryListener(socket);
  listener.sendInitialMessages();
  listener.listen();
})

server.listen(3333, () =>{
  console.log('Server up')
})