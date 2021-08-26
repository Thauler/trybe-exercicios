const a = 10;
const b = 29;
let custoTotal = 10 + 2;
let lucro = b - custoTotal;
if ((a < 0 || b < 0 || custoTotal < 0 || lucro < 0)) {
    console.log('ERROR 410');
} else {
    console.log(lucro * 1000);
}