// prototypal inheritance

function Animal(legs) {
  this.legs = legs;
}

Animal.prototype.walk = function () {
  console.log(`Walking on ${this.legs} legs`);
};

function Bird(legs) {
  Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;

Bird.prototype.fly = function () {
  console.log("flying");
};

let animal = new Animal(4);
let bird = new Bird(2);

animal.walk();
bird.walk();
bird.fly();

// inheritance through extend and super keywords

class Animal2 {
  constructor(legs) {
    this.legs = legs;
  }

  walk() {
    console.log(`Walking on ${this.legs} legs`);
  }
  static hello(){
    console.log("Hello world");
  }
}
console.log("------------");

class Bird2 extends Animal2 {
  constructor(legs, color) {
    super(legs);
    /*  in the Bird‘s constructor, call super() to invoke the Animal‘s constructor with the legs argument.
        JavaScript requires the child class to call super() if it has a constructor. As you can see in the Bird class, the super(legs) is equivalent to  ==> Animal.call(this, legs);*/

        this.color = color;
        //Because the super() initializes the this object, you need to call the super() before accessing the this object. Trying to access this before calling super() also results in an error.
  }

  fly() {
    console.log(`flying`);
  }

  getColor (){
    console.log(this.color);
  } 

 
}

crow = new Bird2(2, "Black");

crow.walk();
crow.fly();
crow.getColor();

// Shadowing methods
/*ES6 allows the child class and parent class to have methods with the same name. In this case, when you call the method of an object of the child class, the method in the child class will shadow the method in the parent class. */

class Dog extends Animal2{
  constructor(){
    super(4);
  }
  // To call the method of the parent class in the child class, you use super.method(arguments) like this:
  
  walk(){
    super.walk();
    console.log("go walking");
  }
}

let dog = new Dog();

dog.walk();
/* 
Call the super(arguments) in the child class’s constructor to invoke the parent class’s constructor.
Use super keyword to call methods of the parent class in the methods of the child class.
 */

// Inheriting static members

//Besides the properties and methods, the child class also inherits all static properties and methods of the parent class.

Bird2.hello();

// Inheriting from built-in types
// JavaScript allows you to extend a built-in type such as Array, String, Map, and Set through inheritance.
class Queue extends Array {
  enqueue(e) {
      super.push(e);
  }
  dequeue() {
      return super.shift();
  }
  peek() {
      return !this.empty() ? this[0] : undefined;
  }
  empty() {
      return this.length === 0;
  }
}

var customers = new Queue();
customers.enqueue('A');
customers.enqueue('B');
customers.enqueue('C');

console.log(customers);

while (!customers.empty()) {
  console.log(customers.dequeue());
}