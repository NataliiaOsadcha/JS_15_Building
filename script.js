class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Flat {
  constructor() {
    this.flat = [];
  }
  addHuman (...person) {
    this.flat.push(person);
  }
}

class Building {
  constructor (maxFlats) {
    this.allFlats = [];
    this.maxFlats = maxFlats;
  }
  addFlat(flat) {
    if (this.allFlats.length < this.maxFlats) {
      this.allFlats.push(flat);
    } else {
      console.log('max count of flats')
    }
  }
}

const humanOne = new Human('Mark', 'male');
const humanTwo =  new Human('Any', 'female');
const humanThree =  new Human('Lora', 'female');
const humanFour = new Human('Kevin', 'male');
const humanFive =  new Human('Megan', 'female');
const humanSix = new Human('Nick', 'male');

const flat01 = new Flat();
const flat02 = new Flat();
const flat03 = new Flat();
const flat04 = new Flat();

flat01.addHuman(humanOne, humanFive);
flat02.addHuman(humanTwo);
flat03.addHuman(humanThree, humanSix);
flat04.addHuman(humanFour);

const buildingOne = new Building (5);

buildingOne.addFlat(flat01);
buildingOne.addFlat(flat02);
buildingOne.addFlat(flat03);
buildingOne.addFlat(flat04);


console.log(flat01);
console.log(flat02);
console.log(flat03);
console.log(flat04);

console.log(buildingOne);



