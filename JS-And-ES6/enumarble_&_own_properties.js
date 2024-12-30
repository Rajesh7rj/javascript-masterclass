
const person = {
  firstName: 'John', //property created via property initializer
  lastName: 'Doe'   //property created via property initializer
};

person.age = 25; ////property created via simple assignment

for (const key in person) {
  console.log(key);
}


Object.defineProperty(person, "ssn", { //created with the enumerable flag sets
  enumerable : false,
  value : "123-445-6754",
});

for(const key in person){
  console.log(key); 
} //In this example, the ssn property is created with the enumerable flag sets to false, therefore it does not show up in the for...in loop.



// ES6 provides a method propertyIsEnumerable() that determines whether or not a property is enumerable.

console.log(person.propertyIsEnumerable("firstName"));
console.log(person.propertyIsEnumerable("lastName"));
console.log(person.propertyIsEnumerable("age"));
console.log(person.propertyIsEnumerable("ssn"));
console.log("_______________");



// own properties :
/* JavaScript uses prototypal inheritance. Therefore, a property of an object can be either own or inherited.

A property that is defined directly on an object is own while a property that the object receives 
from its prototype is inherited.*/


const employee = Object.create(person, {
  job : {
    value : "JS developer",
    enumerable : true,
  }
})


// The hasOwnProperty() method returns true if a property is ow
console.log(person.hasOwnProperty("job"));
console.log(person.hasOwnProperty("firstName"));
console.log(employee.hasOwnProperty("job"));
console.log(employee.hasOwnProperty("lastName"));

