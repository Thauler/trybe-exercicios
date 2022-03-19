import readline from 'readline-sync';

const distance = readline.questionInt('Qual a distancia em metros?');
const time = readline.questionInt('Qual o tempo gasto em segundos?');

const velocidadeMedia = (d, t) => {
  return Math.round(d / t);
}

console.log(`${velocidadeMedia(distance, time)}m/s`);

export default velocidadeMedia;