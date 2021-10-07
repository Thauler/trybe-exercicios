const lotteryResult = (num) => {
    return num === Math.round(Math.random(1) * 5);
}

const lotteryChecker = (number) => {
    if (number === true) {
        return 'Parabéns você ganhou';
    }
    return 'Tente Novamente';
}
console.log(lotteryChecker(lotteryResult(3)));