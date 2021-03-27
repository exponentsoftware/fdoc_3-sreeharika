const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
// function convertArrayToObject(students){
//     var rv = {};
//     return students.reduce((obj) => {
//         return{
//             ...obj
//         };
//     }, rv);
// }
function convertArrayToObject(array) {
    for(const [name,skills,scores] of array) {
        console.log(`name:${name},skills:[${skills}],scores:[${scores}]`);
    }
}
convertArrayToObject(students);


const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}
let newStudent = student;

newStudent.skills.frontEnd.push({'skill':'Bootstrap', 'level':'8'});
newStudent.skills.backEnd.push({'skill':'Express', 'level':'9'});
newStudent.skills.dataBase.push({'skill':'SQL', 'level': '8'});
newStudent.skills.dataScience.push('SQL');
console.log(newStudent.skills);