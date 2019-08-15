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
//console.log(bread.hydration());

let object={
  foo:'happy',
  bar:'chcolate',
  fum:'icecream',
  quux:'soda',
  spam:'sandwitch'

};
/*
for(let key in object){
  console.log(`${key} : ${object[key]}`);
}
*/

// 3. Array in Objects

let food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

//console.log(food.meals[3]);


// 4 & 5 Array of Objects/ Properties that aren't there

let jobs=[
  {name:'John',jobTitle:'sales', boss: 'Joe'},
  {name:'Alex',jobTitle:'teacher', boss: 'Jane'},
  {name:'Nandana',jobTitle:'developer', boss: 'Jimmy'},
  {name:'Hubert',jobTitle:'Founder', boss: 'Owner'}
];
/*
for (let i=0;i<jobs.length;i++){
  if (jobs[i].boss === 'Owner') {
    console.log(`${jobs[i].jobTitle} ${jobs[i].name} doesn't report to anybody`)
  } else {
    console.log(`${jobs[i].jobTitle} ${jobs[i].name} reports to ${jobs[i].boss}`);
  }
}
*/
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

//console.log(decode('craft block argon meter bells brown croon droop'));

//7. Factory Functions with LOTR
//Each character should have "describe" & "evaluateFight" method

function createCharacter(name, nickName, race, origin, weapon, attack, defense,) {
    return {
        name,
        nickName,
        race,
        origin,
        weapon,
        attack,
        defense,
        describe() {
            return `${name} is a ${race} from ${origin} who uses a ${weapon}.`
        },
        evaluateFight() {
            let x = this.attack - this.damage; 
            let y = this.damage - this.attack;
            if (this.defense > this.attack) {
                return `Your oppent takes zero damage`;
            } else {
                return `Your opponent takes ${x} damage and you receive ${y}`
            }
        }
    };
};

const characters = [
    createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 'wizard staff', 10, 6),
    createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 'ring', 2, 1),
    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 'String and Barrow Blade', 3, 2),
    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 'Anduril', 6, 8),
    createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 'Bow and Arrow', 8, 5)
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

  /*function findOne(arr, query) {
      //always return the first matching result
      //return NULL if object keys are not matched
      //return the object if there is a partial match
    for (let query in HEROES) {
        if (Object.keys(HEROES)[query] === HEROES[query]) {
            return HEROES[query];
        }
    }
  };*/

  function findOne(arr, query) {
    let obj = arr.find(elem => {
      let found = true;
      for (let key in query) {
        if(elem.hasOwnProperty(key)) {
          if (elem[key] !== query[key]) {
            found = false;
          }
        }
        else {
          found = false;
        }
      }
      if(found === true) {
        return elem;
      }
    });
  
    if (obj === undefined) {
      return null;
    }
    else {
      return obj;
    }
  }
  
  console.log(findOne(HEROES, { id: 1 }));
  console.log(findOne(HEROES, { id: 10 }));
  console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
  console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
  console.log(findOne(HEROES, { squad: 'Justice League' }));
  