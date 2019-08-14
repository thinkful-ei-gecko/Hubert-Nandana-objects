// Object Drills - 2


// Make Student Reports
function makeStudentsReport(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        arr.push(`${data[i].name}: ${data[i].grade}`);
    }
    return arr
  }

const test = [{
    name: 'Johnny Robot', 
    grade: 'C'
}];

let dataz = makeStudentsReport(test);
console.log(dataz);