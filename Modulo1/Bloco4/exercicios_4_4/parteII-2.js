function bigger(numbers) {
    let indexBig = 0;
    for(let index in numbers) {
        if(numbers[indexBig] < numbers[index]) {
            indexBig = index;
        }
    }
    return indexBig;
}

console.log(bigger([2, 3, 6, 7, 10, 1]));