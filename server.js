const express = require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const ProcessNlp = require('./listeners/ProcessNlp');

io.on('connection', socket => {
  console.log(`Socket conectado: ${socket.id}`)
  socket.on('sendMessage', async (data) => {

    let response = await ProcessNlp.process(data.content);

    console.log(response);

    if(response.answer === undefined){
      response = 'Não consegui entender o que disse!';
    }

    const responseDTO = {
      author: 'BOT',
      content: response.answer === undefined ? response : response.answer,
      hour: data.hour
    }

    socket.emit('receivedMessage', responseDTO);
  })
})

server.listen(3333, () =>{
  console.log('Server up')
})