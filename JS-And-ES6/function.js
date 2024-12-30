/* To avoid repeating the same code all over places, you can use a function to wrap 
that code and reuse it. */
// Declare a function
function functionName(parameters) {
  // function body
  // ...
}

//  By convention, the function names are in camelCase and start with verbs like getData(), fetchContents(), and isValid()

// Calling a function :- To use a function, you need to call it. Calling a function is also known as invoking a function.
functionName(arguments);

// Every function in JavaScript implicitly returns undefined unless you explicitly specify a return value
function say(message) {
  console.log(message);
}

let result = say("Hello");
console.log("Result :", result);

function add(a, b) {
  return a + b;
}
let s = add(10, 20);
console.log("sum :", s);

/* JavaScript functions are first-class citizens. This means that you can store functions in 
variables, pass them to other functions as arguments, and return them from other functions as values. */

// Storing functions in variables
function add(a, b) {
  return a + b;
}

let sum = add;
console.log(add(10, 20));
console.log(sum(10, 20));

// Passing a function to another function
// Because functions are values, you can pass a function as an argument into another function.

function add(a, b) {
  return a + b;
}

sum = add;

function average(a, b, fn) {
  return fn(a, b) / 2;
}

result = average(10, 20, sum);
console.log(result);

// Returning functions from functions

function compareBy(propertyName) {
  return function (a, b) {
    let x = a[propertyName],
      y = b[propertyName];

    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}

let products = [
  { name: "iPhone", price: 900 },
  { name: "Samsung Galaxy", price: 850 },
  { name: "Sony Xperia", price: 700 },
];

console.log("Products sorted by name:");
products.sort(compareBy("name"));
console.table(products);

console.log("Products sorted by price:");
products.sort(compareBy("price"));
console.table(products);


// >>> Pass-by-value of primitives values
function square(x){
  x=x*x;
  return x;
}
let y=10;
// Any changes that you make to the arguments inside the function do not reflect the passing variables outside of the function.
result = square(y);
console.log(result); //100
console.log(y); //10 - no change


// >>> Pass-by-value of reference values
// the changes of variables that you pass into the function will be reflected outside the function
let men = {
  firstName : "John",
  age : 25
}

function increaseAge(obj){
  obj.age +=1;
}

increaseAge(men);
console.log(men); // changed

// when passing an object to a function, you are passing the reference of that object, not the actual object. Therefore, the function can modify the properties of the object via its reference.

 person = {
  name: 'John',
  age: 25,
};

function increaseAge(obj) {
  obj.age += 1;

  // reference another object
  obj = { name: 'Jane', age: 22 }; 
}

increaseAge(person);

console.log(person);
//Function arguments are local variables in JavaScript.



