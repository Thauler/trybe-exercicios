// Declarando um array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Declarando variavel para a quantidade de numeros impares
let quantOdd = 0;
// Criar um loop para percorrer o array
for (let index = 0; index < numbers.length; index++) {
// Cria uma condição para verificar os numeros impares
    if (numbers[index] % 2 !== 0) {
        quantOdd += 1;
    }
}
// Criar a condição caso não exista numeros impares
if (quantOdd === 0) {
    console.log('nenhum valor impar encontrado');
} else {
    console.log(quantOdd);
}