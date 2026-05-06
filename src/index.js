class Animals {
  constructor(age, name, weight, limbAmount) {
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
  }

  can() {
    return 'I can';
  }
  eat() {
    return `${this.can()} eat`;
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

const blue_Whale = new Whales(50, 'Blue Whale', 150000, 0);
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

const separator = '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~';

// Animals
console.log(separator);
console.log(genericAnimal);
console.log('isAnimal:', genericAnimal.isAnimal());

console.log(separator);
console.log(testCreature);
console.log('isAnimal:', testCreature.isAnimal());

// Mammals
console.log(separator);
console.log(elephant);
console.log('isAnimal:', elephant.isAnimal());
console.log('isMammal:', elephant.isMammal());

console.log(separator);
console.log(cat);
console.log('isAnimal:', cat.isAnimal());
console.log('isMammal:', cat.isMammal());

// Birds
console.log(separator);
console.log(eagle);
console.log(eagle.move());
console.log(eagle.say());
console.log(eagle.eat());
console.log('isAnimal:', eagle.isAnimal());
console.log('isBird:', eagle.isBird());

console.log(separator);
console.log(sparrow);
console.log(sparrow.move());
console.log(sparrow.say());
console.log(sparrow.eat());
console.log('isAnimal:', sparrow.isAnimal());
console.log('isBird:', sparrow.isBird());

// Fish
console.log(separator);
console.log(goldfish);
console.log(goldfish.move());
console.log(goldfish.say());
console.log(goldfish.eat());
console.log('isAnimal:', goldfish.isAnimal());
console.log('isFish:', goldfish.isFish());

console.log(separator);
console.log(shark);
console.log(shark.move());
console.log(shark.say());
console.log(shark.eat());
console.log('isAnimal:', shark.isAnimal());
console.log('isFish:', shark.isFish());

// Predators
console.log(separator);
console.log(lion);
console.log('isAnimal:', lion.isAnimal());
console.log('isMammal:', lion.isMammal());
console.log('isPredator:', lion.isPredator());

console.log(separator);
console.log(wolf);
console.log('isAnimal:', wolf.isAnimal());
console.log('isMammal:', wolf.isMammal());
console.log('isPredator:', wolf.isPredator());

// Whales
console.log(separator);
console.log(blue_Whale);
console.log('isAnimal:', blue_Whale.isAnimal());
console.log('isMammal:', blue_Whale.isMammal());
console.log('isWhale:', blue_Whale.isWhale());

console.log(separator);
console.log(orca);
console.log('isAnimal:', orca.isAnimal());
console.log('isMammal:', orca.isMammal());
console.log('isWhale:', orca.isWhale());

// Primates
console.log(separator);
console.log(chimpanzee);
console.log('isAnimal:', chimpanzee.isAnimal());
console.log('isMammal:', chimpanzee.isMammal());
console.log('isPrimate:', chimpanzee.isPrimate());

console.log(separator);
console.log(gorilla);
console.log('isAnimal:', gorilla.isAnimal());
console.log('isMammal:', gorilla.isMammal());
console.log('isPrimate:', gorilla.isPrimate());

// Dog
console.log(separator);
console.log(buddy);
console.log(buddy.move());
console.log(buddy.say());
console.log(buddy.eat());
console.log('isAnimal:', buddy.isAnimal());
console.log('isMammal:', buddy.isMammal());
console.log('isPredator:', buddy.isPredator());
console.log('isDog:', buddy.isDog());

console.log(separator);
console.log(max);
console.log(max.move());
console.log(max.say());
console.log(max.eat());
console.log('isAnimal:', max.isAnimal());
console.log('isMammal:', max.isMammal());
console.log('isPredator:', max.isPredator());
console.log('isDog:', max.isDog());

// Dolphin
console.log(separator);
console.log(flipper);
console.log(flipper.move());
console.log(flipper.say());
console.log(flipper.eat());
console.log('isAnimal:', flipper.isAnimal());
console.log('isMammal:', flipper.isMammal());
console.log('isWhale:', flipper.isWhale());
console.log('isDolphin:', flipper.isDolphin());

console.log(separator);
console.log(echo);
console.log(echo.move());
console.log(echo.say());
console.log(echo.eat());
console.log('isAnimal:', echo.isAnimal());
console.log('isMammal:', echo.isMammal());
console.log('isWhale:', echo.isWhale());
console.log('isDolphin:', echo.isDolphin());

// Human
console.log(separator);
console.log(alice);
console.log(alice.move());
console.log(alice.say());
console.log(alice.eat());
console.log('isAnimal:', alice.isAnimal());
console.log('isMammal:', alice.isMammal());
console.log('isPrimate:', alice.isPrimate());
console.log('isHuman:', alice.isHuman());

console.log(separator);
console.log(bob);
console.log(bob.move());
console.log(bob.say());
console.log(bob.eat());
console.log('isAnimal:', bob.isAnimal());
console.log('isMammal:', bob.isMammal());
console.log('isPrimate:', bob.isPrimate());
console.log('isHuman:', bob.isHuman());
