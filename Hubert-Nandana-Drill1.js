/* eslint-disable strict */
/*function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello() {
      console.log('hello');
    }
  };
}

let sayHi = createMyObject();
console.log(sayHi.sayHello());*/

function updateObject(obj){
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz='bizz';
  obj.bang='bang';
  return obj;
}

let obj1={};
let updateObj =updateObject(obj1);
console.log(updateObj);

