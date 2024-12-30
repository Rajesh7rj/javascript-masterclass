// primitive datatype

let a = typeof 2.7;
let b = typeof "hi";
let c = typeof true;
let myName;
let obj = typeof null;
console.log(a, b, c, typeof myName, obj);
//The typeof null returns object is a known bug in JavaScript. A proposal to fix this was proposed but rejected. The reason was the that fix would break a lot of existing sites.
console.log(null == undefined); // JavaScript defines that null is equal to undefined
console.log("a" / 2); //NaN - not a number
console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

let message = "I'm also a valid string"; // use \ to escape the single quote (')

let s1 = Symbol();//symbol
console.log(Symbol() == Symbol()); 

let pageView = 9007199254740991n;// 'bigint'
console.log(typeof(pageView)); 


// object is a collection of properties, where each property is defined as a key-value pair.
let person = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(person.firstName);
console.log(person["lastName"]);
