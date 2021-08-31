function lower(numbers) {
    let indexlow = 0;
    for(let index in numbers) {
        if(numbers[indexlow] > numbers[index]) {
            indexlow = index;
        }
    }
    return indexlow;
}

console.log(lower([2, 3, 6, 7, 10, 1]));