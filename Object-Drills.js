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

let jobs=[{name:'John',jobTitle:'sales'},
  {name:'Alex',jobTitle:'teacher'},
  {name:'Nandana',jobTitle:'developer'},
  {name:'Hubert',jobTitle:'developer'}];

  for (let i=0;i<jobs.length;i++){
      console.log(`${jobs[i].jobTitle}:${jobs[i].name}`);
  }