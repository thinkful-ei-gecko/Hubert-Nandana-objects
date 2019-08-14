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

function decode(sentence){
  const cipher={
    a:2,
    b:3,
    c:4,
    d:5

  };
  //craft block argon meter bells brown croon droop
  const sentArray = sentence.split(' ');
  const decoded = sentArray.map(word => {
    let offset;
    if(cipher[word[0]]){
        offset=cipher[word[0]]-1;
    }
    return offset?word[offset]:' ';
  });
  return decoded.join('');
}

console.log(decode('craft block argon meter bells brown croon droop'));

//7. Factory Functions with LOTR
//Each character should have "describe" & "evaluateFight" method

function createCharacter(name, nickName, race, origin, attack, defense) {
    return {
        name,
        nickName,
        race,
        origin,
        attack,
        defense,
        describe() {
            return `${name} is a ${race} from ${origin}.`
        },
        evaluateFight() {
            let x = this.attack - this.damage; 
            if (this.defense > this.attack) {
                return `Your oppent takes zero damage`;
            } else {
                return `Your opponent takes ${x} damage and you receive ${this.attack}`
            }
        }
    }
}

const characters = [
    {
        name: 'Gandalf the White'
    },
    {
        name: 'Bilbo Baggins'
    },
    {
        name: 'Frodo Baggins'
    },
    {
        name: 'Aragorn son of Arathorn'
    },
    {
        name: 'Legolas'
    }
];

for (let i=0; i < characters.length; i++) {

}

const character = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
console.log(character.describe());
console.log(character.evaluateFight());