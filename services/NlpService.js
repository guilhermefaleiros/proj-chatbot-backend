const { NlpManager } = require('node-nlp');

class NlpService{
  
  InstanceManager(){
    return new NlpManager({ languages: ['pt']});
  }

  constructor(){
    this.manager = this.InstanceManager();
  }
  
 

  addIntent(language, phrase, intent){
    this.manager.addDocument(language, phrase, intent);
  }

  addAnswer(language, intent, answer){
    this.manager.addAnswer(language, intent, answer);
  }

  async fit(){
    await this.manager.train();
    this.manager.save();
  }

  async processPhrase(language, phrase){
    return await this.manager.process(language, phrase);
  }

}

module.exports = new NlpService()