// OBJECT DRILLS

// 1. Object initializers and methods
'use strict';

function loaf() {
  return {
    flour: 300,
    water: 210,
    hydration() {
      return (this.water / this.flour) * 100;
    }
  }
}

let bread = loaf();
console.log(bread.hydration());

let object={
  foo:'happy',
  bar:'chcolate',
  fum:'icecream',
  quux:'soda',
  spam:'sandwitch'

};
for(let key in object){
  console.log(`${key} : ${object[key]}`);
}

// 3. Array in Objects

let food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(food.meals[3]);


// 4 & 5 Array of Objects/ Properties that aren't there

let jobs=[
  {name:'John',jobTitle:'sales', boss: 'Joe'},
  {name:'Alex',jobTitle:'teacher', boss: 'Jane'},
  {name:'Nandana',jobTitle:'developer', boss: 'Jimmy'},
  {name:'Hubert',jobTitle:'Founder', boss: 'Owner'}
];

  for (let i=0;i<jobs.length;i++){
      if (jobs[i].boss === 'Owner') {
          console.log(`${jobs[i].jobTitle} ${jobs[i].name} doesn't report to anybody`)
      } else {
        console.log(`${jobs[i].jobTitle} ${jobs[i].name} reports to ${jobs[i].boss}`);
      }
  }

