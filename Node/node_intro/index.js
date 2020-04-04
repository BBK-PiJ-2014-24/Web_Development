console.log("This is Node Working");

const Person = require("./person");

const person1 = new Person("John Doe", 30);

person1.greeting();

person1.wrapper_functions();
