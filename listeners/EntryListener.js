const ProcessNlp = require('../process/ProcessNlp');
const NlpResponseBuilder = require('../builders/NlpResponseBuilder');
const WelcomeMessageBuilder = require('../builders/WelcomeMessageBuilder');
const SendMessage = require('../util/SendMessage');
const Sleep = require('../util/SendMessage');

class EntryListener{
  constructor(socket){
    this.socket = socket;
  }

  listen(){
    this.socket.on('sendMessage', async(data) => {
      let response = await ProcessNlp.process(data.content);
      console.log(response);
      let NlpResponse = NlpResponseBuilder(response.answer);
      SendMessage(this.socket, NlpResponse);
    })
  }

  async sendInitialMessages(){
    const messages = WelcomeMessageBuilder();
    await SendMessage(this.socket, messages[0]);
    await SendMessage(this.socket, messages[1]);
    await SendMessage(this.socket, messages[2]);
    await SendMessage(this.socket, messages[3]);
  
  }
}

module.exports = EntryListener