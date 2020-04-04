// The Module Wrapper Function
// (function(exports, require, module, __filename, __dirname){})

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`The name is ${this.name} and age is ${this.age}`);
  }

  wrapper_functions() {
    console.log(
      `The file name is ${__filename} and the directory is ${__dirname}`
    );
  }
}

module.exports = Person;
