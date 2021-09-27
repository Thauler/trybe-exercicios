const fatorial = n => {
    for (let index = 1; index <= n; index += 1) {
        console.log(n * (n - index) * (n - (index + 1)));
        break;
    }
}
fatorial(4);

// const factorial = number => {
//     let result = 1;

//     for (let index = 2; index <= number; index += 1) {
//         result *= index;
//     }

//     return result;
// }

// console.log(factorial(5));

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5));