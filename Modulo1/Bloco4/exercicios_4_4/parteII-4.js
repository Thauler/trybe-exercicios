function bigest(names) {
    let bigest = names[0];
    for(let index = 0; index < names[index].length; index += 1) {
        for(indexWord = 0; indexWord < bigest.length; indexWord += 1) {
            if (bigest.length < names[index].length) {
                bigest = names[index];
            }
        }
        return bigest;
    }
}

console.log(bigest(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));