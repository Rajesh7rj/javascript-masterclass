function say() {
  console.log("Hello World");
}

say();

function add(x, y) {
  console.log(x + y);
}

add(3, 5);

// Every function in JavaScript implicitly returns undefined unless you explicitly specify a return value.

function say(message) {
  console.log(message);
}

let result = say("Hello");
console.log("Result:", result);

// -----------

function square(a) {
  return a * a;
}

console.log(square(3));

// multiple returns in functions
function compare(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }
  return 0;
}
console.log(compare(3, 5));

// The arguments object

function addition(){
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
     sum += arguments[i];
  }
  return sum;
}

console.log(addition(1,2,3));

// Returning multiple values from a function using an array
function getNames() {
  let firstName = "John",
    lastName = "Cena";

  return [firstName, lastName];
}
let names = getNames();

let [ firstName, lastName ] = names;
console.log(firstName);

console.log(names);
console.log(names[0]);

// JavaScript Array destructuring

function getScores() {
  return [60, 70,80,90];
}

let scores = getScores();
console.log(scores[0]);

let [x,y,...args] = getScores();
console.log(x);
console.log(y);


// Rest syntax '...'
console.log(x,y, ...args);

// Function hoisting
showMe();
function showMe(){
  console.log("an hoisting example");
}
