const ETypeIntent = require('../util/ETypeIntent');

module.exports = [
  {
    language: 'pt',
    intent: ETypeIntent.COVID_DEFINITION,
    answer: 'O coronavírus (COVID-19) é uma doença infecciosa causada por um novo vírus que nunca havia sido identificado em humanos.'
  },
  {
    language: 'pt',
    intent: ETypeIntent.COVID_SYMPTOMS,
    answer: 'Dor de garganta, tosse, febre e dificuldade para respirar (em casos graves)'
  },
  {
    language: 'pt',
    intent: ETypeIntent.COVID_ACTION,
    answer: 'Assim que os primeiros sintomas surgirem, é fundamental procurar ajuda médica imediata para confirmar diagnóstico e iniciar o tratamento. Por enquanto, não existe um tratamento específico para infecções causadas por coronavírus. O Ministério da Saúde indicado repouso e consumo de bastante água, além de algumas medidas adotadas para aliviar os sintomas, com antitérmicos e analgésicos.'
  },
  {
    language: 'pt',
    intent: ETypeIntent.CONVERSATION_SAUDACAO,
    answer: 'Olá, eu sou o Tróia! Sou o bot criado pela Level 5 para ajudar você contra o covid-19!'
  },
  {
    language: 'pt',
    intent: ETypeIntent.CONVERSATION_LEVEL,
    answer: 'Você disse Level? Level ao contrário é Level, sabia?'
  },
  {
    language: 'pt',
    intent: ETypeIntent.CONVERSATION_CREATION,
    answer: 'Eu fui criado pelo time de Pesquisa e Desenvolvimento da Level 5!'
  },
  {
    language: 'pt',
    intent: ETypeIntent.COVID_PREVENTION,
    
    answer: 'Lave as mãos com água e sabão ou use álcool em gel, cubra o nariz e boca ao espirrar ou tossir e evite aglomerações se estiver doente.'
  },
  {
    language: 'pt',
    intent: ETypeIntent.CONVERSATION_DADDY,
    answer: 'Guilherme Faleiros é meu papai'
  }
]