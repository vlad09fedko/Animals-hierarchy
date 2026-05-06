class Animals {
  constructor(age, name, weight, limbAmount) {
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
  }

  can() {
    return 'I can'
  }
  move() {
    return `${this.can()} move`
  }
  say() {
    return `${this.can()} say`
  }
  eat() {
    return `${this.can()} eat`
  }

  isAnimal() {
    return this instanceof Animals;
  }
}

class Mammals extends Animals {
  maxAge = 200;
  maxWeight = 200000;

  isMammal() {
    return this instanceof Mammals;
  }
}

class Birds extends Animals {
  maxAge = 80;
  maxWeight = 165;

  move() {
    return `${super.can()} fly`;
  }
  say() {
    return `${super.can()} sing`;
  }
  eat() {
    return `${super.eat()} insects`;
  }

  isBird() {
    return this instanceof Birds;
  }
}

class Fish extends Animals {
  maxAge = 500;
  maxWeight = 1000;

  move() {
    return `${super.can()} swim`;
  }
  say() {
    return `${super.can()}'t say`;
  }
  eat() {
    return `${super.eat()} seaweed`;
  }

  isFish() {
    return this instanceof Fish;
  }
}

class Predators extends Mammals {
  maxAge = 70;
  maxWeight = 600;

  isPredator() {
    return this instanceof Predators;
  }
}

class Whales extends Mammals {
  maxAge = 200;
  maxWeight = 200000;

  move() {
    return `${super.can()} swim`
  }

  isWhale() {
    return this instanceof Whales;
  }
}

class Primates extends Mammals {
  maxAge = 120;
  maxWeight = 600;

  isPrimate() {
    return this instanceof Primates;
  }
}

class Dog extends Predators {
  maxAge = 31;
  maxWeight = 110;

  move() {
    return `${super.can()} run`;
  }
  say() {
    return `${super.can()} bark`;
  }
  eat() {
    return `${super.eat()}`;
  }

  isDog() {
    return this instanceof Dog;
  }
}

class Dolphin extends Whales {
  maxAge = 55;
  maxWeight = 650;

  move() {
    return `${super.can()} swim`;
  }
  say() {
    return `${super.can()} sing`;
  }
  eat() {
    return `${super.eat()}`;
  }

  isDolphin() {
    return this instanceof Dolphin;
  }
}

class Human extends Primates {
  maxAge = 120;
  maxWeight = 600;

  move() {
    return `${super.can()} walk`;
  }
  say() {
    return `${super.can()} say`;
  }
  eat() {
    return `${super.eat()}`;
  }

  isHuman() {
    return this instanceof Human;
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

// Demonstration of objects and their methods

function showProperties(obj) {
  const separator =
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~';
  console.log(separator);
  console.log(obj);
  console.log(obj.move());
  console.log(obj.say());
  console.log(obj.eat());
  console.log('isAnimal:', obj.isAnimal());
  if (obj instanceof Mammals) {
    console.log('isMammal:', obj.isMammal());
    if (obj instanceof Predators) {
      console.log('isPredator:', obj.isPredator());
      if (obj instanceof Dog) {
        console.log('isDog:', obj.isDog());
      }
    }
    if (obj instanceof Whales) {
      console.log('isWhale:', obj.isWhale());
      if (obj instanceof Dolphin) {
        console.log('isDolphin:', obj.isDolphin());
      }
    }
    if (obj instanceof Primates) {
      console.log('isPrimate:', obj.isPrimate());
      if (obj instanceof Human) {
        console.log('isHuman:', obj.isHuman());
      }
    }
  }
  if (obj instanceof Birds) {
    console.log('isBird:', obj.isBird());
  }
  if (obj instanceof Fish) {
    console.log('isFish:', obj.isFish());
  }
}

// Animals
showProperties(genericAnimal);
showProperties(testCreature);

// Mammals
showProperties(elephant);
showProperties(cat);

// Birds
showProperties(eagle);
showProperties(sparrow);

// Fish
showProperties(goldfish);
showProperties(shark);

// Predators
showProperties(lion);
showProperties(wolf);

// Whales
showProperties(blueWhale);
showProperties(orca);

// Primates
showProperties(chimpanzee);
showProperties(gorilla);

// Dog
showProperties(buddy);
showProperties(max);

// Dolphin
showProperties(flipper);
showProperties(echo);

// Human
showProperties(alice);
showProperties(bob);
