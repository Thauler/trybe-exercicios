// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];
// prev = previousValue, cur = currentValue
const flatten = () => arrays.reduce((prev, cur) => prev.concat(cur), []);

console.log(flatten());