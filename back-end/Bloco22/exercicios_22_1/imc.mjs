import readline from 'readline-sync';

const IMC = (w, h) => {
  const imc = w / (h ** 2);
  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return imc;
  }
  if (imc >= 18.5 && imc <= 24.9) {
    console.log('Situação: Peso normal');
    return imc;
  }
  if (imc >= 25.0 && imc <= 29.9) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return imc;
  }
  if (imc >= 30.0 && imc <= 34.9) {
    console.log('Situação: Obesidade grau I');
    return imc;
  }
  if (imc >= 35.0 && imc <= 39.9) {
    console.log('Situação: Obesidade grau II');
    return imc;
  }
  console.log('Situação: Obesidade graus III e IV');
  return imc;
}

const weight = readline.questionFloat('Qual o seu peso?');
const height = readline.questionFloat('Qual a sua altura em metros?');

console.log(`IMC: ${IMC(weight, height)}`);

export default IMC;