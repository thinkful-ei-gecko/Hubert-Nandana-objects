// Object Drills - 2


// Make Student
// function makeStudentsReport(data) {
//     let arr = [];
//     for (let i = 0; i < data.length; i++) {
//         arr.push(`${data[i].name}: ${data[i].grade}`);
//     }
//     return arr
//   }

// const test = [{
//     name: 'Johnny Robot', 
//   name: 'Johnny Robot', 
//     name: 'Johnny Robot', 
//     grade: 'C'
// }];

// let dataz = makeStudentsReport(test);
// console.log(dataz);

// Find by ID

// you can pass in `scratchData` to test out `findByid`
// your function
const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  // your code here
  for (let i=0; i < items.length; i++) {
    if (items[i].id === idNum) {
      return items[i];
    }
  }
}

//

function testIt() {
  const testData = [
    { id: 1, foo: 'bar' },
    { id: 2, foo: 'bizz' },
    { id: 3, bang: 'boo' },
  ];
  const result = findById(testData, 3);
  if (!(result && result !== null && typeof result === 'object')) {
    console.error('`findById` must return an object');
    return;
  }
  if (result.id !== 3) {
    console.error(
      'Asked for item with id of `3` but got back one with id of ' + result.id
    );
    return;
  }
  if (result.bang !== 'boo') {
    console.error(
      'Expected all key/value pairs from target object to be returned'
    );
    return;
  }
  console.log('SUCCESS: `findByid` is working');
}

testIt();

const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };
  
  // running the function with `objectB` and `expectedKeys`
  // should return `false`
  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };
  
  const expectedKeys = ['id', 'name', 'age', 'city'];
  
  function validateKeys(object, expectedKeys) {
    // your code goes here
    if(Object.keys(object).length != expectedKeys.length){
        return false;
    }
    for (let i=0; i<expectedKeys.length;i++){
       Object.keys(object).find(el=>el===expectedKeys[i])
       return true;
    }
  
  }
  
  console.log(validateKeys(objectA,expectedKeys));
  console.log(validateKeys(objectB,expectedKeys));



