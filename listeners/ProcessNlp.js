const NlpService = require('../services/NlpService');
const IntentTraining = require('../data/IntentTraining');

const AnswerTraining = require('../data/AnswerTraining');

module.exports = {

  async process(phrase){
    IntentTraining.map(item =>{
      NlpService.addIntent(item.language, item.phrase, item.intent);
    })

    AnswerTraining.map(item =>{
      NlpService.addAnswer(item.language, item.intent, item.answer);
    })

    await NlpService.fit()

    return await NlpService.processPhrase(phrase);
  }
}