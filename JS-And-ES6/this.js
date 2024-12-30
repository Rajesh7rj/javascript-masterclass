// In these languages, the this keyword represents the current instance of the class. And it is only relevant within the class.

/* In JavaScript, you can use the this keyword in the global and function contexts. Moreover, 
the behavior of the  this keyword changes between strict and non-strict modes. */

// the this references the object that is currently calling the function.

let counter = {
  count : 0,
  next : function(){
    return ++this.count;
  }
};

console.log(counter.next()); 


// >>> Global context
// In the global context, the this references the global object, which is the window object on the web browser or global object on Node.js.


// console.log(this === window); // true in web browser

this.color = "red";
// console.log(window.color);//red


// >>> Function context
// 1) Simple function invocation
function show(){
  // console.log(this === window);//true
}

show();


// 2) Method invocation

let car ={
  brand : "Honda",
  getBrand(){
    return this.brand;
  },
  getBrandName(){
    
  }
}

console.log(car.getBrand()); //the this object in the getBrand() method references the car object.

let brand = car.getBrandName();
console.log(brand);//undefined




/*^^ You get undefined instead of "Honda" because when you call a method without specifying its object, 
JavaScript sets this to the global object in non-strict mode and undefined in the strict mode.*/

/* To fix this issue, you use the bind() method of the Function.prototype object. 
The bind() method creates a new function whose the this keyword is set to a specified value.*/

let car1 = {
  brand: 'Honda',
  getBrand: function () {
      return this.brand;
  }
}

let bike = {
  brand: 'Harley Davidson'
}

brand = car1.getBrand.bind(bike);
console.log(brand());


// 3) Constructor invocation
function Car(brand){
  this.brand = brand
}

Car.prototype.getBrand= function(){
  return this.brand;
}

let car2 = new Car ("Honda");
console.log(car2.getBrand());

// The expression new Car('Honda') is a constructor invocation of the Car function.

// JavaScript creates a new object and sets this to the newly created object. This pattern works great with only one potential problem.


// Now, you can invoke the Car() as a function or as a constructor. If you omit the new keyword
// var bmw = Car('BMW');
// console.log(bmw.brand);
// => TypeError: Cannot read property 'brand' of undefined

// Since the this value in the Car() sets to the global object, the bmw.brand returns undefined.
// To make sure that the Car() function is always invoked using constructor invocation, you add a check at the beginning of the Car() function as follows:

function Car(brand) {
  if (!(this instanceof Car)) {
      throw Error('Must use the new operator to call the function');
  }
  this.brand = brand;
}

//  bmw = Car('BMW');
//  console.log(bmw.brand);


// 4) Indirect Invocation

/*The Function type has two methods: call() and apply() . These methods allow you to set the 
this value when calling a function. */

function getBrand(prefix) {
  console.log(prefix + this.brand);
}

let honda = {
  brand: 'Honda'
};
let audi = {
  brand: 'Audi'
};

// call() method
getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");

// apply() method
getBrand.apply(honda, ["It's a "]); // "It's a Honda"
getBrand.apply(audi, ["It's an "]); // "It's a Audi"