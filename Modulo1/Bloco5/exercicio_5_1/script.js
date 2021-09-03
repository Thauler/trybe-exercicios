function mudarTextoEmP() {
    let tagP = document.getElementsByTagName('p');
    for (let index = 0; index < tagP.length; index += 1) {
        tagP[index].innerText = 'Empregado';
    }
}
mudarTextoEmP();

function changeBackgroundMain(index) {
    let tagMain = document.getElementsByClassName('main-content');
    tagMain[index].style.background = 'rgb(76,164,109)';
}
changeBackgroundMain(0);

function changeBackgroundSection(index) {
    let tagSection = document.getElementsByTagName('section');
    tagSection[index].style.background = '#fff'
}
changeBackgroundSection(0);

function correctH1(index) {
    let tagH1 = document.getElementsByClassName('title');
    tagH1[index].innerText = 'Exercício 5.1 - JavaScript';
}
correctH1(0);

function changeText() {
    let upperCase = document.getElementsByTagName('p');
    for (let index = 0; index < upperCase.length; index += 1) {
        upperCase[index].style.textTransform = 'uppercase';
    }
}
changeText();

function printTagsP() {
    let printP = document.getElementsByTagName('p');
    for (let index = 0; index < printP.length; index += 1) {
       console.log(printP[index].innerHTML);
    }
}
printTagsP();