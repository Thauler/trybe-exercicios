import readline from 'readline-sync';

const choices = [
  { name: 'Calcular IMC', script: './imc.mjs' },
  { name: 'Calcular velocidade média', script: './velocidade.mjs' },
  { name: 'Jogo de adivinhação', script: './sorteio.mjs' }
]

let message = choices
  .map((choice, i) => `${i} - ${choice.name}`);

  message = message.join('\n');

const userAnswer = readline.questionInt(`Qual script gostaria de executar? \n${message} \n=>`);

const ans = choices[userAnswer];

if (!ans) console.log('Inválido');

import(ans.script);