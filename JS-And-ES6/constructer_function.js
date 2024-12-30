// The name of a constructor function starts with a capital letter like Person, Document
// A constructor function should be called only with the new operator.

function Person(firstName, lastName){
      this.firstName = firstName;
        this.lastName = lastName;
}

let person = new Person("Jen", "Willy");
let person2 = new Person("Jenny", "Ronda");
console.log(person);
console.log(person2);

/* Basically, the new operator does the following:

>> Create a new empty object and assign it to the this variable.
>> Assign the arguments 'John' and 'Doe' to the firstName and lastName properties of the object.
>> Return the this value. */

function Person(firstName, lastName) {
  // this = {};

  // add properties to this
  this.firstName = firstName;
  this.lastName = lastName;

  // >>> Adding methods to JavaScript constructor functions
  this.getFullName= function(){
    return this.firstName +" "+ this.lastName;
  }

  // return this;
}

console.log(person.getFullName());

/* The problem with the constructor function is that when you create multiple instances of the 
Person, the this.getFullName() is duplicated in every instance, which is not memory efficient. 
To resolve this, you can use the prototype so that all instances of a custom type can share the same methods.
*/


// Calling a constructor function without the new keyword
let person5 = Person('John','Doe');
/* In this case, the Person just executes like a regular function. Therefore, the this inside the 
Person function doesn’t bind to the person variable but the global object. */

// To prevent a constructor function to be invoked without the new keyword, ES6 introduced the new.target property.
function Person(firstName, lastName) {
  console.log(new.target);

  this.firstName = firstName;
  this.lastName  = lastName;

  this.getFullName = function () {
      return this.firstName + " " + this.lastName;
  };
}

console.log(person5);

/* if a constructor function is called with the new keyword, the new.target returns a reference of 
the function. Otherwise, it returns undefined.*/





