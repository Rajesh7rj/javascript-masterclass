/* An object is a collection of key/value pairs or properties When the value is a function, 
the property becomes a method. Typically, you use methods to describe the object behaviors. */

let person = {
  name : "Mick",
  age : 34,
};

function greet() {
  console.log("Hello World!");
};

person.greet = greet; // or person.greet = greet();

person.greet(); // or person.greet;

// Object method shorthand
person = {
  name : "Mick",
  age : 34,
  greet : function () {
    console.log('Hello, World!');
}
};

person.greet();

// ES6 provides you with the concise method syntax that allows you to define a method for an object:
person = {
  firstName: 'John',
  lastName: 'Doe',
  greet() {
      console.log('Hello, World!');
  }
};

person.greet();


// >>> The this value
/* Typically, methods need to access other properties of the object.
For example, you may want to define a method that returns the full name of the person object 
by concatenating the first name and last name.
Inside a method, the this value references the object that invokes the method. Therefore, 
you can access a property using the this value as follows
 */

person = {
  firstName: 'John',
  lastName: 'Doe',
  greet() {
      console.log('Hello, World!');
  },
  getFullName(){
    console.log(this.firstName + " "+ this.lastName);
  }
};

person.getFullName();

//              -----------------                 
//***** Object.values() method
// to use the JavaScript Object.values() method to access the own enumerable properties of an object.

// Prior to ES2017, you use a for...in loop and Object.hasOwnProperty()  method to access values of own enumerable properties of an object. For example:

person = {
  name : "John",
  age : 32,
  job : "Pilot"
};

for (const key in person){
  if(person.hasOwnProperty(key)){
    const values = person[key]
    console.log(values);
  }
}


//ES2017 introduces a new method called Object.values()

const values = Object.values(person);
console.log(values);

// Object.values() vs. for...in
/*The Object.values() returns own enumerable properties while the for...in loop iterates properties in the prototype chain.

Technically, if you use the for...in loop with the Object.hasOwnProperty() method, you will get the same set of values as the Object.values(). */



//Object.entries()
//ES2017 introduces the Object.entries() method that accepts an object and returns its own enumerable string-keyed property [key, value] pairs of the object.

const kv = Object.entries(person);
console.log(kv);



//JavaScript Object.is()
//JavaScript Object.is() to check if two values are the same.

/*The Object.is() behaves like the === operator with two differences:

-0 and +0
NaN */
//The === operator treats -0 and +0 are the same value:

let amount = +0;
let volume = -0;

console.log(amount === volume);

//However, the Object.is() treats +0 and -0 as different values. For example:
console.log(Object.is(amount, volume));


//The === operator considers NaN and NaN are different values. The NaN is the only number that does not equal itself.
let quantity = NaN;

console.log(NaN === NaN);

// However, Object.is() treats NaN as the same value:
console.log(Object.is(NaN,NaN));