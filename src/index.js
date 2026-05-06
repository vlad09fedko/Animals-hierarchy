class Animals {
  static maxAge = 500;
  static maxWeight = 200000;

  constructor(age, name, weight, limbAmount) {
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
  }

  move() {
    return `I can move`;
  }
  say() {
    return `I can say`;
  }
  eat() {
    return `I can eat`;
  }

  static isAnimal(obj) {
    return obj instanceof this;
  }
}

class Mammals extends Animals {
  static maxAge = 200;
  static maxWeight = 200000;

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isMammal(obj) {
    return obj instanceof this;
  }
}

class Birds extends Animals {
  static maxAge = 80;
  static maxWeight = 165;

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  move() {
    return `I can fly`;
  }
  say() {
    return `I can sing`;
  }
  eat() {
    return `${super.eat()} insects`;
  }

  static isBird(obj) {
    return obj instanceof this;
  }
}

class Fish extends Animals {
  static maxAge = 500;
  static maxWeight = 1000;

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  move() {
    return `I can swim`;
  }
  say() {
    return `I can't say`;
  }
  eat() {
    return `${super.eat()} seaweed`;
  }

  static isFish(obj) {
    return obj instanceof this;
  }
}

class Predators extends Mammals {
  static maxAge = 70;
  static maxWeight = 600;

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isPredator(obj) {
    return obj instanceof this;
  }
}

class Whales extends Mammals {
  static maxAge = 200;
  static maxWeight = 200000;

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  move() {
    return `I can swim`;
  }

  static isWhale(obj) {
    return obj instanceof this;
  }
}

class Primates extends Mammals {
  static maxAge = 120;
  static maxWeight = 600;

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isPrimate(obj) {
    return obj instanceof this;
  }
}

class Dog extends Predators {
  static maxAge = 31;
  static maxWeight = 110;

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  move() {
    return `I can run`;
  }
  say() {
    return `I can bark`;
  }
  eat() {
    return `${super.eat()}`;
  }

  static isDog(obj) {
    return obj instanceof this;
  }
}

class Dolphin extends Whales {
  static maxAge = 55;
  static maxWeight = 650;

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  move() {
    return `I can swim`;
  }
  say() {
    return `I can sing`;
  }
  eat() {
    return `${super.eat()}`;
  }

  static isDolphin(obj) {
    return obj instanceof this;
  }
}

class Human extends Primates {
  static maxAge = 120;
  static maxWeight = 600;

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  move() {
    return `I can walk`;
  }
  say() {
    return `I can say`;
  }
  eat() {
    return `${super.eat()}`;
  }

  static isHuman(obj) {
    return obj instanceof this;
  }
}

// Creating objects
const genericAnimal = new Animals(5, 'Generic Animal', 10, 4);
const testCreature = new Animals(2, 'Test Creature', 1, 2);

const elephant = new Mammals(10, 'Elephant', 5000, 4);
const cat = new Mammals(3, 'Cat', 4, 4);

const eagle = new Birds(2, 'Eagle', 6, 2);
const sparrow = new Birds(1, 'Sparrow', 0.1, 2);

const goldfish = new Fish(1, 'Goldfish', 0.2, 0);
const shark = new Fish(5, 'Shark', 800, 0);

const lion = new Predators(8, 'Lion', 190, 4);
const wolf = new Predators(4, 'Wolf', 40, 4);

const blueWhale = new Whales(50, 'Blue Whale', 150000, 0);
const orca = new Whales(30, 'Orca', 5000, 0);

const chimpanzee = new Primates(15, 'Chimpanzee', 50, 4);
const gorilla = new Primates(20, 'Gorilla', 160, 4);

const buddy = new Dog(5, 'Buddy', 25, 4);
const max = new Dog(3, 'Max', 15, 4);

const flipper = new Dolphin(12, 'Flipper', 200, 0);
const echo = new Dolphin(7, 'Echo', 180, 0);

const alice = new Human(25, 'Alice', 65, 2);
const bob = new Human(30, 'Bob', 80, 2);

const creatures = [
  genericAnimal,
  testCreature,
  elephant,
  cat,
  eagle,
  sparrow,
  goldfish,
  shark,
  lion,
  wolf,
  blueWhale,
  orca,
  chimpanzee,
  gorilla,
  buddy,
  max,
  flipper,
  echo,
  alice,
  bob,
];

// Demonstration of objects and their methods

function showProperties(obj) {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(obj);
  console.log('Max age:', obj.constructor.maxAge);
  console.log('Max weight:', obj.constructor.maxWeight);
  console.log(obj.move());
  console.log(obj.say());
  console.log(obj.eat());
  console.log('isAnimal:', Animals.isAnimal(obj));
  console.log('isMammal:', Mammals.isMammal(obj));
  console.log('isBird:', Birds.isBird(obj));
  console.log('isFish:', Fish.isFish(obj));
  console.log('isPredator:', Predators.isPredator(obj));
  console.log('isWhale:', Whales.isWhale(obj));
  console.log('isPrimate:', Primates.isPrimate(obj));
  console.log('isDog:', Dog.isDog(obj));
  console.log('isDolphin:', Dolphin.isDolphin(obj));
  console.log('isHuman:', Human.isHuman(obj));
}

creatures.forEach(showProperties);
