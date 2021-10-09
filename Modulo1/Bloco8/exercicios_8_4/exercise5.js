const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => names
    .reduce((acc, pv) => acc + pv).split('')
    .filter(name => name.toLowerCase() === 'a').length;
console.log(containsA());