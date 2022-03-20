const prom = (a, b, c) => {
  return new Promise ((res, rej) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      rej('Informe apenas números');
    }
    const result = (a + b) * c;
    if (result < 50) {
      return rej('Valor muito baixo');
    }
    res(result);
  });
}

prom(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

const randomNum = () => Math.floor(Math.random() * 100 + 1);

const calculatorR = async () => {
  await prom(randomNum(), randomNum(), randomNum())
    .then((p) => console.log(p))
    .catch((err) => console.log(err.message));
}