/* objects can inherit features from one another via prototypes. Every object has its own property called prototype. 

Because a prototype itself is also another object, the prototype has its own prototype. This creates 
a something called prototype chain. The prototype chain ends when a prototype has null for its own prototype.
*/

// JavaScript prototype illustration

console.log(typeof(Object)); //Please note that Object() is a function, not an object
console.log(Object.prototype);
console.log(Object.prototype.constructor === Object );

// the Person() function accepts a name argument and assigns it to the name property of the this object.

function Person(name) {
  this.name = name;
}
// Behind the scenes, JavaScript creates a new function Person() and an anonymous object
/*Like the Object() function, the Person() function has a property called prototype that references
 an anonymous object. And the anonymous object has the constructor property that references the Person() function. */

 console.log(Person);
 console.log(Person.prototype);

//  In addition, JavaScript links the Person.prototype object to the Object.prototype object via the [[Prototype]], which is known as a prototype linkage.


// Defining methods in the JavaScript prototype object

// defines a new method called greet() in the Person.prototype object
Person.prototype.greet = function(){
  return "Hi, I am "+ this.name + "!";
}//the JavaScript engine adds the greet() method to the Person.prototype object

// Internally, the JavaScript engine creates a new object named p1 and links the p1 object to the Person.prototype object via the prototype linkage
let p1 =new Person("John");
// The link between p1, Person.prototype, and Object.protoype is called a prototype chain.

let greeting = p1.greet();
console.log(greeting);
// Because p1 doesn’t have the greet() method, JavaScript follows the prototype linkage and finds it on the Person.prototype object.
// it executes the greet() method and returns the result:

let s = p1.toString();
console.log(s);
/*the JavaScript engine follows the prototype chain to look up for the toString() method in the Person.prototype.

Because the Person.prototype doesn’t have the toString() method, the JavaScript engine goes up to 
the prototype chain and searches for the toString() method in the Object.prototype object. */

// p1.fly();
/*If you call a method that doesn’t exist on the Person.prototype and Object.prototype object, 
the JavaScript engine will follow the prototype chain and throw an error if it cannot find the method. */
let p2 = new Person('Jane');
/*The p2 object has the properties and methods as the p1 object.
In conclusion, when you define a method on the prototype object, this method is shared by all instances. */



// >>> Defining methods in an individual object

p2.draw= function(){
  return "I can draw."
} //adds the draw() method to the p2 object, not the Person.prototype object:

p2.draw(); //It means that you can call the draw() method on the p2 object

// p1.draw(); //But you cannot call the draw() method on the p1 object, you'll get error
// When you define a method in an object, the method is only available to that object


// >>> Getting prototype linkage
console.log(p1.__proto__ === Person.prototype); // true
console.log(p1.__proto__ === p2.__proto__); // true

// you should use the Object.getPrototypeOf() method instead of the __proto__. The Object.getPrototypeOf() method returns the prototype of a specified object.
console.log(p1.__proto__ === Object.getPrototypeOf(p1));

// Another popular way to get the prototype linkage is when the Object.getPrototypeOf() method is not available
console.log(p1.constructor.prototype);



// >>>> Shadowing

console.log(p1.greet());
/* The p1 object doesn’t have the greet() method defined, therefore JavaScript goes up to the prototype 
chain to find it. In this case, it can find the method in the Person.prototype object.*/

p1.greet = function() {
  console.log('Hello');
}
console.log(p1.greet());

/*Because the p1 object has the greet() method, JavaScript just executes it immediately without 
looking it up in the prototype chain. */

/*This is an example of shadowing. The greet() method of the p1 object shadows the greet() method 
of the prototype object which the p1 object references.
 */

