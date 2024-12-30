class Person1 {
  constructor(name) {
    this.name = name;
  }
}

let person = new Person1("Akash");
console.log(person.name);

// Class vs. Custom type
/* 
Despite the similarities between a class and a custom type defined via a constructor function, there are some important differences.

First, class declarations are not hoisted like function declarations.
Second, all the code inside a class automatically executes in the strict mode. And you cannot change this behavior.
Third, class methods are non-enumerable. If you use a constructor/prototype pattern, you have to use the Object.defineProperty() method to make a property non-enumerable.

*/

// getter and setter

class Person {
  constructor(name) {
    this.setName(name);
  }
  getName() {
    return this.name;
  }

  setName(newName) {
    newName = newName.trim();
    if (newName === '') {
      throw "The name can not be empty.";
    }
  this.name = newName;
  }
}

let person1 = new Person('Virat Kohli');
console.log(person1);

person1.setName('MS Dhoni');
console.log(person1.getName());


// ES6 provides specific syntax for defining the getter and setter using the get and set keywords

class Person2 {
  constructor(name) {
      this.name = name;
  }
  get name() {
      return this._name;
  }
  set name(newName) {
      newName = newName.trim();
      if (newName === '') {
          throw 'The name cannot be empty';
      }
      this._name = newName;
  }
}



// First-class citizen
/* JavaScript classes are first-class citizens. It means that you can pass a class into a function, 
return it from a function, and assign it to a variable.
*/

function factory(aClass) {
  return new aClass();
}

let greeting = factory(class {
  sayHi() { console.log('Hi'); }
});

greeting.sayHi(); // 'Hi'

// Singleton

/*Singleton is a design pattern that limits the instantiation of a class to a single instance. 
It ensures that only one instance of a class can be created throughout the system. */

let app = new class {
  constructor(name) {
      this.name = name;
  }
  start() {
      console.log(`Starting the ${this.name}...`);
  }
}('Awesome App');

app.start(); // Starting the Awesome App...