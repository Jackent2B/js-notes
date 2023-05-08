// Prototypal Inheritance and the Prototype chain

// ES6 introduce classes which is the modern way to construct objects

// That said, prototypal inheritance and the prototype chain are:
// 1) "under the hood", (ES6 Classes are considered "syntactic sugar")
// 2) Often used in interviews
// 3) Good to understand

const person = {
  alive: true,
};

const musician = {
  plays: true,
};

// by doing so, musician will inherit person object, so now
// we can use all the properties of person object

musician.__proto__ = person;
console.log(musician);
console.log(musician.plays);
console.log(musician.alive);
console.log(person.alive);

// Note: All the object inherits a global object.

// JS now has getProtoTypeOf and setProtoTypeOf methods instead of using __proto__
Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician));
console.log(musician.__proto__);
console.log(Object.getPrototypeOf(musician, person) === musician.__proto__);

/*
__proto__ chain moves up the order, so here when we did musician.alive it will look for
alive property in musician object but it won't find that, so now it will move up the order
and now as we have inherited person object in musicain using __proto__, so it will see that 
__proto__ of musician (i.e person object) has alive property, so it will print that.
*/
console.log(musician.alive);

// Extending the prototype chain -> general to specific to more specific
const guitarist = {
  strings: 6,
  __proto__: musician,
};

console.log(guitarist.strings);
console.log(guitarist.plays);
console.log(guitarist.alive);
console.log(guitarist);

// THREE Rules of Prototypal Inheritance
// 1.) No Circular Reference Allowed ( person.__proto__ can not be guitarist)
// 2.) The __proto__ must be an object or null
// 3.) An object can can only directly inherit from one object

// object with getter and setter methods
const car = {
  doors: 2,
  seats: "vinyl",
  get setMaterial() {
    return this.seats;
  },
  set setMaterial(material) {
    this.seats = material;
  },
};

const anotherCar = {};
Object.setPrototypeOf(anotherCar, car);

console.log(anotherCar); // empty object
console.log(anotherCar.setMaterial); // will Inherit seats property from car and return vinyl
console.log(anotherCar.valueOf());
anotherCar.setMaterial = "leather"; // Note Keyword this, so it will create new seats key with value leather
console.log(anotherCar.setMaterial); // will return leather
console.log(anotherCar.valueOf());

// Getting the keys of the object
console.log(Object.keys(anotherCar));
//looping thorugh the keys of object using forEach
Object.keys(anotherCar).forEach((key) => console.log(key));

// looping through the keys of object using for loop (It includes inherited properties as welll)
for (let key in anotherCar) {
  console.log(key);
}

//Object constructors
function Animal(species) {
  this.species = species;
  this.eats = true;
}

Animal.prototype.walks = function () {
  return `A ${this.species} is walking.`;
};

const bear = new Animal("bear");

console.log(bear.species);
console.log(bear.walks());

// The prototype property is where inheritable methods and methods are.
console.log(bear);
console.log(bear.__proto__);
console.log(Animal.prototype);
console.log(bear.__proto__ === Animal.prototype);

// what is the difference between __proto__ vs prototype?

//Now an ES6 Classes example of Inheritance
class Vehicle {
  constructor() {
    (this.wheels = 4), (this.motorized = true);
  }
  ready() {
    return "Ready to go";
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(); // It is necessary to override the parents value with our own value
    this.wheels = 2;
  }

  wheelie() {
    return "Hoorayy Wheelie";
  }
}

const myBike = new Motorcycle();
console.log(myBike);
console.log(myBike.wheels);
console.log(myBike.wheelie());
console.log(myBike.ready());

const myTruck = new Vehicle();
console.log(myTruck);
