const [a,b] = [
    {
        name: "hungnv"
    },
    {
        age: 12
    }
]

console.log(a,b)

const {name} = a;
console.log(name)

// const moreStudents = [
//     'Chris',
//     ['Ahmad', 'Antigoni'],
//     ['Toby', 'Sam'],
//     {
//         name: "Michal"
//     }
// ];
//
// // Write your code here
// const [student1,[student2,student3],[student4,student5],{name:student6}] = moreStudents;
//
// console.log(student1, student2, student3, student4, student5, student6);

//write your code to get only Sam student in nested array
const moreStudents = [
    'Chris',
    ['Ahmad', 'Antigoni'],
    ['Toby', 'Sam'],
    {
        name: "Michal"
    }
];

// Write your code here
const [,,[,sam]] = moreStudents;

console.log(sam);