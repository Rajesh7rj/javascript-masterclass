// an array is an ordered list of values. Each value is called an element specified by an index.

// Creating JavaScript arrays

let array = new Array(); //empty array
let scores = new Array(10); //creates array with initial size of 10, specifies size of array
let a = new Array("ram"); //creates array with one element
let b = new Array(2, 3, 4, 5); //creats array with four numbers

/* Note that if you use the Array() constructor to create an array and pass a number 
into it, you are creating an array with an initial size. */

console.log(array);
console.log(scores);
console.log(a);
console.log(b);

// JavaScript allows you to omit the new operator when you use the Array() constructor

let c = Array();
let colors = Array("red", "blue", "black");

console.log(colors);

/*** In practice, you’ll rarely use the Array() constructor to create an array.
The more preferred way to create an array is to use the array literal notation: */

let d = []; //empty array
let cars = ["suv", "sedan", "heatchback"];

console.log(cars);

// Accessing JavaScript array elements
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

// add , change
cars[3] = "luxury";
cars[2] = "BMW";
console.log(cars);

// LENGTH
console.log(cars.length);

// Basic operations on arrays

cars.push("Tata"); //Adding an element to the end of an array
cars.unshift("Nano"); //Adding an element to the beginning of an array
console.log(cars);

cars.pop(); //Removing an element from the end of an array
cars.shift(); //Removing an element from the beginning of an array
console.log(cars);

console.log(cars.indexOf("sedan")); //Finding an index of an element in the array

// >>>> How to Check If a Variable is an Array in JavaScript
console.log(Array.isArray(cars)); //Check if an value is an array

let dog = "tommy"; // string
let game = {}; // empty object

console.log(Array.isArray(dog));

console.log(cars instanceof Array);
console.log(game instanceof Array);
