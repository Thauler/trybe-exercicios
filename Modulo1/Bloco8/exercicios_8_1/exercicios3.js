const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checker = (a, b, c) => {
    let counter = 0;
    for (let index = 0; index < a.length; index += 1) {
        const count = c(a[index], b[index]);
        counter += count;
    }
    return counter;
}

console.log(checker(RIGHT_ANSWERS, STUDENT_ANSWERS, (r, s) => {
    if (r === s) {
        return 1;
    }
    if (s === 'N.A') {
        return 0;
    }
    return -0.5;
}));