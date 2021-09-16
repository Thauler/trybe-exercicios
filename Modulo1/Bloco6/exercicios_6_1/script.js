let estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];
const selectedEstados = document.getElementById('estado');
const data = document.getElementById('data');
const submitBtt = document.querySelector('#subibtt');

function states() {
  for (let index of estados) {
    const xablau = document.createElement('option');
    xablau.innerText = index;
    selectedEstados.appendChild(xablau);
  }
}
states();

function submitbutton(event) {
  event.preventDefault();
}
submitBtt.addEventListener('click', submitbutton);
