// prototypal inheritance :-

/* In this programming paradigm, a class is a blueprint for creating objects. If you want a new 
class to reuse the functionality of an existing class, you can create a new class that extends the 
existing class. This is called classical inheritance.

> JavaScript doesn’t use classical inheritance. Instead, it uses prototypal inheritance.

> In prototypal inheritance, an object “inherits” properties from another object via the prototype linkage. */


//>>>> JavaScript prototypal inheritance and __proto__ :-


let person = { //person object
  name:"John Cena",
  greet : function(){
    return "Hi, I'm "+ this.name;
  }
};

/* By default, the JavaScript engine provides you with a built-in Object() function and an anonymous
 object that can be referenced by the Object.prototype 
 
 The person object has a link to the anonymous object referenced by the Object() function. The [[Prototype]] represents the linkage

 It means that the person object can call any methods defined in the anonymous object referenced by the Object.prototype likes this
 */

console.log(person.toString());
// To access the prototype of the person object, you can use the __proto__ property 
// console.log(person.__proto__);


let teacher = {
  teach : function(subject){
    return "I can teach "+ subject;
  }
} //Like the person object, the teacher.__proto__ references the Object.prototype

/* If you want the teacher object to access all methods and properties of the person object, 
you can set the prototype of teacher object to the person object like this: */

teacher.__proto__ = person;
console.log(teacher.__proto__);
//Note that you should never use the __proto__ property in the production code. Please use it for demonstration purposes only.

console.log(teacher.name);
console.log(teacher.greet());



// >>>> A standard way to implement prototypal inheritance in ES5
// you should use the newer ES6 class and extends keywords to implement inheritance. It’s much simpler.

// Object.create(proto, [propertiesObject]);

person = { //person object
  name:"John Cena",
  greet : function(){
    return "Hi, I'm "+ this.name;
  }
};

teacher = Object.create(person); // creates an empty teacher object 

teacher.name = 'Jane Doe'; // define properties for the teacher object
teacher.teach = function (subject) {
        return "I can teach " + subject;
}
//       ----- or -----

 teacher = Object.create(person, {
  name: { value: 'John Doe' } ,
  teach: { value: function(subject) {
      return "I can teach " + subject;
  }}
});

console.log(Object.getPrototypeOf(teacher) === person);
console.log(teacher.name);
console.log(teacher.greet());




