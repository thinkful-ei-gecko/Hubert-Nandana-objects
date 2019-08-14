// Object Drills - 2
'use strict';

// Make Student Reports
function makeStudentsReport(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    arr.push(`${data[i].name}: ${data[i].grade}`);
  }
  return arr;
}

const test = [{
  name: 'Johnny Robot', 
  grade: 'C'
}];

let dataz = makeStudentsReport(test);
console.log(dataz);

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];
  
function enrollInSummerSchool(students) {
  // your code here
  let result=[];
  for (let i=0; i<students.length;i++){
      result.push({name:students[i].name,
      status:'In Summer School',
      course:students[i].course})
  }
  return result;
}
console.log(enrollInSummerSchool(studentData));