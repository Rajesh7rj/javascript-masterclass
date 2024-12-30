// JavaScript object destructuring which assigns properties of an object to individual variables.
let person = {
  firstName : "Jeck",
  lastName : "Kilon"
}

// when you want to assign properties of the person object to variables, you typically do it like this:

let firstName = person.firstName;
let lastName = person.lastName;

console.log(firstName, lastName);

// ES6 introduces the object destructuring syntax that provides an alternative way to assign properties of an object to variables

let{firstName : fName, lastName :lName } = person; //let { property1: variable1, property2: variable2 } = object;
console.log(fName, lName);

// If the variables have the same names as the properties of the object, you can make the code more concise as follows
({ firstName, lastName } = person); //If you don’t use the parentheses, the JavaScript engine will interpret the left-hand side as a block and throw a syntax error

console.log(firstName); // 'John'
console.log(lastName); // 'Doe'


// When you assign a property that does not exist to a variable using the object destructuring, the variable is set to undefined. 
({ firstName, lastName, middleName } = person);
console.log(middleName); //undefined, middleName property doesn’t exist in the person object


// >>>> Setting default values
person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 28
};

({ firstName, lastName, middleName = '', age = 18 } = person);

console.log(middleName); // '' // we assign an empty string to the middleName variable when the person object doesn’t have the middleName property.
console.log(age); // 28

// when the person object does have the middleName property
person = {
  firstName: 'John',
  lastName: 'Doe',
  middleName : "C.",
  age: 28
};
({ firstName, lastName, middleName = '', age = 18 } = person);
console.log(middleName);



// >>> Destructuring a null object
function getPerson(){
  return null;
};

// ({ firstName, lastName } = getPerson());
// console.log(firstName, lastName); //The code will throw a TypeError

// To avoid this, you can use the OR operator (||) to fallback the null object to an empty object:
({ firstName, lastName } = getPerson() || {});
console.log(firstName, lastName); //Now, no error will occur. And the firstName and lastName will be undefined.



// >>>> Nested object destructuring
let employee = {
  id : 007,
  name :{
    firstName : "James",
    lastName : "Bond"
  }
};

({
  name :{
    firstName,
    lastName
  }
} = employee);

console.log(firstName);
console.log(lastName);


// It’s possible to do multiple assignement of a property to multiple variables:
({
  name :{
    firstName,
    lastName
  },name
} = employee);
console.log(firstName);
console.log(lastName);
console.log(name);



// >>>> Destructuring function arguments
let display = (person) => console.log(`${person.firstName} ${person.lastName}`);
display(person);

// It’s possible to destructure the object argument passed into the function like this
let display2 = ({firstName,lastName}) => console.log(`${person.firstName} ${person.lastName}`);
display2(person);