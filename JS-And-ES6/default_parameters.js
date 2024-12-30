/* In JavaScript, default function parameters allow you to initialize named parameters with 
default values if no values or undefined are passed into the function.*/

function say(message = "Hi"){
  console.log(message);
}

say(); // Hi
say("Hello") //Hello

/*parameters are what you specify in the function declaration whereas the arguments are 
what you pass into the function. */

function add(x, y) { //the x and y are the parameters of the add() function
  return x + y;
}

add(100,200); // the values passed to the add() function 100 and 200 are the arguments.

// assign a default value if it is undefined using a ternary operator:
function say(message) {
  message = typeof message !== 'undefined' ? message : 'Hi';
  console.log(message);
}
say(); // 'Hi'

// 1) Passing undefined arguments
// function createDiv(height = '100px', width = '100px', border = 'solid 1px red') {
//   let div = document.createElement('div');
//   div.style.height = height;
//   div.style.width = width;
//   div.style.border = border;
//   document.body.appendChild(div);
//   return div;
// }

// createDiv(undefined,undefined,'solid 5px blue');

// 2) Evaluating default parameters

function put(toy, toyBox = []) {
  toyBox.push(toy);
  return toyBox;
}

console.log(put('Toy Car'));
// -> ['Toy Car']
console.log(put('Teddy Bear'));
// -> ['Teddy Bear'], not ['Toy Car','Teddy Bear']

function requiredArg() {
  throw new Error('The argument is required');
}
function add(x = requiredArg(), y = requiredArg()){
  return x + y;
}

// add(10); // error
add(10,20); // OK


// 3)Using other parameters in default values
function add(x = 1, y = x, z = x + y) {
  return x + y + z;
}

console.log(add()); // 4


// >>>> The arguments object

function add(x, y = 1, z = 2) {
  console.log( arguments.length );
  return x + y + z;
}
// The value of the arguments object inside the function is the number of actual arguments that you pass to the function.
add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3