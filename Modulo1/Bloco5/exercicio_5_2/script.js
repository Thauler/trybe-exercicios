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
const sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);
// 6
const sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);
// 7
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
sectionLeft.appendChild(img);
// 8
