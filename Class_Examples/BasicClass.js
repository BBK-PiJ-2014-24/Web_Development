// *****************************************
//          Object Literals - Objects that don't have Classes
// *****************************************

const ernie = {
  animal: "Dog",
  age: "1",
  breed: "pug",

  bark() {
    console.log("woof, woof");
  }
};

console.log(ernie.animal);
ernie.bark();
var x = "bark";
ernie[x](); // bracket notation
ernie.color = "red"; // Add a new property to object on the fly.
console.log(ernie); // display the object.

// *********************************************************
// Class Objects
// ***********************************

class Pet {
  constructor(animal, age, breed) {
    this.animal = animal; // Static Properties
    this.age = age;
    this.breed = breed;
  }

  // Getter - for a dynamic property, activity that has variable conditional state
  get activity() {
    const today = new Date();
    const hour = today.getHours();
    if (hour > 8 && hour <= 20) {
      return "awake";
    } else {
      return "sleep";
    }
  }

  speak() {
    if (this.animal === "dog") {
      console.log("woofy");
    }
  }
}
/*
    const baxter = new Pet("dog", 4, "white");
    console.log(baxter.breed);
    baxter.speak();
    console.log(baxter.activity); // Call dynamic property.
*/

// *****************************************************
// Class with Getter and Setters and private properties
// ******************************************************
class Person {
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  }

  set fullName(name) {
    const parts = name.split(" ");
    this.first_name = parts[0];
    this.last_name = parts[1];
    this._full_name = this.first_name + " " + this.last_name;
  }

  get fullName() {
    return _full_name;
  }

  static say_something(quote) {
    return console.log(quote);
  }
}

console.log("***** PERSON OBJECT*******");
var me = new Person("s", "newnham");
console.log(me);
Person.say_something("Hello There, this is a Static Method!!");
console.log("**** Display the Person Object Again******");
me.fullname = "stewart Newnham";
console.log(me);
