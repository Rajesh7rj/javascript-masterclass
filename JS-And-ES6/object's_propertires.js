// JavaScript specifies the characteristics of properties of objects via internal attributes surrounded by the two pairs of square brackets, e.g., [[Enumerable]].

// Objects have two types of properties: data and accessor properties.

//1) Data properties:
/*A data property contains a single location for a data value. A data property has four attributes:

 [[Configurarable]] – determines whether a property can be redefined or removed via delete operator.
 [[Enumerable]] – indicates if a property can be returned in the for...in loop.
 [[Writable]] – specifies that the value of a property can be changed.
 [[Value]] – contains the actual value of a property.
By default, the [[Configurable]] , [[Enumerable]]And [[Writable]] attributes set to true for all 
properties defined directly on an object. The default value of the[[Value]] attribute is undefined. */

let person = {
  firstName : "John",
  lastName : "Doe"
}

// To change any attribute of a property, you use the Object.defineProperty() method.

person.age = 34;

// Since the default value of the [[Configurable]] attribute is set to true, you can remove it via the delete operator:
delete person.age;
console.log(person.age);

'use strict';

 person = {};

Object.defineProperty(person, 'ssn', {
    configurable: false,
    value: '012-38-9119'
});

// Object.defineProperty(person, 'ssn', { //TypeError: Cannot redefine property: ssn
//   configurable: true
// });

delete person.ssn;
console.log(person.ssn);


//By default, the enumerable attribute of all the properties defined on an object is true. t means that you can iterate over all object properties using the for...in loop like this:
 person = {};
person.age = 25;
person.ssn = '012-38-9119';

for(let persons in person){
  console.log(persons);
}

Object.defineProperty(person, "ssn",{
  enumerable :false,
})


for(let p in person){
  console.log(p);
}



//2) Accessor properties:
/*Similar to data properties, accessor properties also have [[Configurable]] and [[Enumerable]] attributes.
But the accessor properties have the [[Get]] and [[Set]] attributes instead of [[Value]] and [[Writable]].

When you read data from an accessor property, the [[Get]] function is called automatically to return a value. The default return value of the [[Get]] function is undefined.

If you assign a value to an accessor property, the [[Set]] function is called automatically.
To define an accessor property, you must use the Object.defineProperty() method. */

person = {
  firstName : "John",
  lastName : "Doe"
}

Object.defineProperty(person, "fullName", {
  get : function(){
    return this.firstName +" "+ this.lastName
  },
  
    set : function(){
      let parts = value.split(" ");
      if(parts.lenght == 2){
        this.firstName = parts[0];
        this.lastName = parts[1]
      }else{
        throw "Invalid name formate";
      }
    }
  });

  console.log(person.fullName);

  // Define multiple properties: Object.defineProperties()

  let product ={};

Object.defineProperties(product, {
    name : {
      value:"smartphone"
    },
    price : {
      value: 799
    },
    tax : {
      value : 0.1
    },
    netPrice: {
      get : function(){
        return this.price * (1+this.tax)
      }
    }
  });

  console.log('The net price of a ' + product.name + ' is ' + product.netPrice.toFixed(2) + ' USD');


//JavaScript object property descriptor:

// The  Object.getOwnPropertyDescriptor() method allows you to get the descriptor object of a property.

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName")
console.log(descriptor);

// important **
/*JavaScript objects have two types of properties: data properties and accessor properties.
JavaScript uses internal attributes denoted by [[...]] to describe the characteristics of properties such as [[Configurable]], [[Enumerable]], [[Writable]], and  [[Value]], [[Get]], and [[Set]].
The method Object.getOwnPropertyDescriptor() return a property descriptor of a property in an object.
A property can be defined directly on an object or indirectly via the Object.defineProperty() or Object.defineProperties() methods. These methods can be used to change the attributes of a property. */