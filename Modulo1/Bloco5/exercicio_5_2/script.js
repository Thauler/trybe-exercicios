// 1
const h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1);
// 2
const main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);
// 3
const sectionCenter = document.createElement('section');
sectionCenter.className = 'center-content';
main.appendChild(sectionCenter);
// 4
const p = document.createElement('p');
p.innerText = 'Adicione seu texto aqui';
sectionCenter.appendChild(p);
// 5