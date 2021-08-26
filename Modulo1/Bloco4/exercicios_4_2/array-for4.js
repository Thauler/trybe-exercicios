let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let soma = (accumulative , currentValue) => accumulative + currentValue;
//let mediaAritmética = numbers.reduce(soma) / numbers.length;
//console.log(mediaAritmética);
let resultado = 0;
for (let index = 0; index < numbers.length; index += 1) {
    resultado += numbers[index];    
}
let mediaAritmética = resultado / numbers.length;
if (mediaAritmética > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor igual ou menor a 20');
}