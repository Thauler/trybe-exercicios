const alpha = 90;
const beta = 60;
const omega = -100;
let resultado = beta + alpha + omega
if (resultado === 180) {
    console.log(true);
} else if (alpha || beta || omega < 0) {
    console.log("Error 404");
} else {
    console.log(false);
}