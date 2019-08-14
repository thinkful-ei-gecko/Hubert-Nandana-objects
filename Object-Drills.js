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

const arwen = characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell','Hadhafang',  5, 6));
const nickNameFinder = characters.find(name => name.nickName === 'legolas').describe();
const race = characters.filter(home => home.race === 'Hobbit');
const attack = characters.filter(atk => atk.attack > 5);

//console.log(nickNameFinder);

//8. BONUS: A Database Search

const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];

  function findOne(arr, query) {
      //always return the first matching result
      //return NULL if object keys are not matched
      //return the object if there is a partial match
    for (let query in HEROES) {
        if (Object.keys(HEROES)[query] === HEROES[query]) {
            return HEROES[query];
        }
}

const character = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
console.log(character.describe());
console.log(character.evaluateFight());