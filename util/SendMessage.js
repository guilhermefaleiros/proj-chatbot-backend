const Sleep = require('../util/Sleep');

module.exports = async function(socket, message){
  await Sleep(1000);
  await socket.emit('receivedMessage', message);
}