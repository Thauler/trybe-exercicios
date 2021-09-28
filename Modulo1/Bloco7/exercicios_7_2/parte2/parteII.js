const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// 1-Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function addNightShift(lesson2, shift, valor) {
    return lesson2[shift] = valor;
}
addNightShift(lesson2, 'shift', 'noite');
console.log(lesson2);
console.log('------------------------------');
// 2-Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function lesson1Keys(lesson1) {
    return Object.keys(lesson1);
}
console.log(lesson1Keys(lesson1));
console.log('------------------------------');
// 3-Crie uma função para mostrar o tamanho de um objeto.

function objLength(lesson3) {
    return Object.entries(lesson3).length;
}
console.log(objLength(lesson3));
console.log('------------------------------');

// 4-Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function listOfValues(lesson1) {
    return Object.values(lesson1);
}
console.log(listOfValues(lesson1));
console.log('------------------------------');

// 5-Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:


function allLesson(lesson1, lesson2, lesson3) {
    let allLessons = {};
    Object.assign(allLessons, {
        lesson1
    }, {
        lesson2
    }, {
        lesson3
    });
    return allLessons;
}
console.log(allLesson(lesson1, lesson2, lesson3));
let objAll = allLesson(lesson1, lesson2, lesson3);
console.log('------------------------------');

// 6-Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

function allStudents(allLessons) {
    return `O numero total de estudantes é: ${allLessons['lesson1']['numeroEstudantes'] + allLessons['lesson2']['numeroEstudantes'] + allLessons['lesson3']['numeroEstudantes']}`;
}
console.log(allStudents(objAll));
console.log('------------------------------');

// 7-Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

function keyValue(lessons1, n) {
    return Object.values(lessons1)[n];
}
console.log(keyValue(lesson1, 0));
console.log('------------------------------');

// 8-Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

function verifyKeyValue(lesson1, key, value) {
    let resultado = false;
    for (index in lesson1 && lesson1[key].includes(lesson1[value])) {
        if (index === key) {
            return resultado = true;
        } else {
            return resultado;
        }
    }
}
console.log(verifyKeyValue(lesson1, 'materia', 'Matemática'));