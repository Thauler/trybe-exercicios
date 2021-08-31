let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  //   Exercicio 1
// console.log('Bem-vinda, ' + info.personagem);

// Exercicio 2
info.recorrente = 'Sim'
// console.log(info);

// Exercicio 3
for(let keys in info) {
    // console.log(keys);
}

// Exercicio 4
for(let value in info) {
    // console.log(info[value]);
}

// Exercicio 5
let info2 = {
    personagem: 'Tio patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}
for (let infos in info) {
    if (
      infos === 'recorrente' &&
      info[infos] === 'Sim' &&
      info2[infos] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[infos] + ' e ' + info2[infos]);
    }
  }