const addEmployees = (fullname) => {
    const email = fullname.toLowerCase().split(' ').join('');
    return { fullname, email: `${email}@gmail.com` }
}

const newEmployees = (add) => {
    const employees = {
        id1: add('Pedro Guerra'),
        id2: add('Luiza Drumond'),
        id3: add('Carla Paiva'),
    }
    return employees;
};
console.log(newEmployees(addEmployees));