const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
    [9, 8, 10, 7, 5],
    [10, 9, 9, 10, 8],
    [10, 7, 10, 8, 9]
];

const studentAverage = () => students.map((students, index) => {
    return {
        name: students,
        grades: grades[index].reduce((acc, cv) => acc + cv) / grades[index].length

    }
})

console.log(studentAverage());
const expected = [
    { name: 'Pedro Henrique', average: 7.8 },
    { name: 'Miguel', average: 9.2 },
    { name: 'Maria Clara', average: 8.8 },
];