// JavaScript Computed Property
/*ES6 allows you to use an expression in brackets []. It’ll then use the result of the expression 
as the property name of an object. For example:
 */

let propName = "c";

const rank = {
  a:1, 
  b:2,
  [propName]: 3,
};

console.log(rank.c); //3

// Like an object literal, you can use computed properties for getters and setters of a class. 

let name = "fullName";

class Person{
  constructor (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get [name](){
    return `${this.firstName} ${this.lastName}`;
  }
};

let person = new Person("Virat", "Sharma");
console.log(person.fullName);