const NlpResponseBuilder = require('./NlpResponseBuilder');

module.exports = function WelcomeMessageBuilder () {
  const messages = [
    'Olá, eu sou o Tróia. Estou aqui para te ajudar contra o covid-19. Consigo responder algumas perguntas sobre o vírus, algumas recomendações:',
    '- O que é o covid-19',
    '- Quais os sintomas do covid-19',
    '- O que fazer em suspeita de covid-19'
  ]

  const response = messages.map(item =>{
    return NlpResponseBuilder(item);
  })

  return response;
}