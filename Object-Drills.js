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