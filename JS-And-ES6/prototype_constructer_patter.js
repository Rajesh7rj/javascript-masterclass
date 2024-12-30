// Constructor/Prototype Pattern

/*The combination of the constructor and prototype patterns is the most common way to define custom 
types in ES5. In this pattern:

> The constructor pattern defines the object properties.
> The prototype pattern defines the object methods.
 */

// By using this pattern, all objects of the custom type share the methods defined in the prototype. Also, each object has its own properties.

// use the constructor function to initialize the properties
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// define the getFullName() method in the prototype object of the Person function
Person.prototype.getFullName = function(){
  return this.firstName +" "+ this.lastName;
}

//create multiple instances of the Person type
let p1 = new Person("John", "Cena");
let p2 = new Person("Jeck", "Manir");

/*Javascript creates two objects p1 and p2. These objects link to the Person.prototype object via 
the [[Prototype]] linkage: 

Each object has its own properties firstName and lastName. However, they share the same getFullName() method.
*/
console.log(p1.getFullName());
console.log(p2.getFullName());



// >>>>> Classes in ES6

//ES6 introduces the class keyword that makes the constructor/prototype pattern easier to use

class Person1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let p3 = new Person1("John", "Bena");
let p4 = new Person1("Jeck", "Kanir");

console.log(p3.getFullName());
console.log(p4.getFullName());
