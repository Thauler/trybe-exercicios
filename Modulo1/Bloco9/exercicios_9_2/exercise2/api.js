const crypto = document.getElementById('typeOfCoins');

const coinGenerator = (input) => {
  const teste = input.data;
  console.log(teste);
const datas = {
  rank: `${teste.rank}º`,
  name: teste.name,
  symbol: `(${teste.symbol})`,
  mercado: ` => Mais info: ${teste.explorer}`
}
const result = `${datas.rank} ${datas.name} ${datas.symbol} ${datas.mercado}`

console.log(result);
  crypto.innerText = result
}

const cryptoCoins = (coin) => {
  fetch(`https://api.coincap.io/v2/assets/${coin.toLowerCase()}`)
  .then(response => response.json())
  .then(inputs => coinGenerator(inputs))
  .catch(err => window.alert('Não existe essa moeda pois o Airton é BBK'));
}

const button = document.getElementById('find');
button.addEventListener('click', () => {
  const searchInput = document.getElementById('search');
  cryptoCoins(searchInput.value);
})
cryptoCoins();
