const GetTime = require('../util/GetDate');

module.exports = function NlpResponseBuilder(response){
  if(response === undefined){
    response = "Não consegui entender o que você disse"
  }
  else{
    response = response;
  }
  
  return {
    author: 'BOT',
    content: response,
    hour: GetTime(),
  }
}

