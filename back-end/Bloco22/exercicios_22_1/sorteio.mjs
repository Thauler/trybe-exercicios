import readline from 'readline-sync';

const result = (num, ans) => {
  if (ans === num) {
    console.log('Parabéns, número correto!');
  }
  console.log(`Opa, não foi dessa vez. O número era ${num}`);
}

const game = () => {
  const random = parseInt(Math.random() * 10);

  const guess = readline.questionInt('Qual o seu palpite de um numero entre 0 e 10?');

  result(random, guess);

  const again = readline.question('Quer jogar de novo? Digite (s/n)');
  (again === 's') ? game() : console.log('Até a próxima!');
}

game();

export default game;