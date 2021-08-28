// Declarando um array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Declarar  a variavel menor numero contido no array
let lowNumber = numbers[0];
// Percorrer o array
for (let index = 1; index < numbers.length; index += 1) {
    // Criar uma condição para que ao percorrer encontre o menor numero
    if (numbers[index] < lowNumber) {
        lowNumber = numbers[index]
    }
}
console.log(lowNumber);