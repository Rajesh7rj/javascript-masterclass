/*The for...in loop over the enumerable properties that are keyed by strings of an object. Note that a property can be keyed by a string or a symbol.

A property is enumerable when its internal enumerable flag is set to true.

The enumerable flag defaults to true when a property is created via a simple assignment or via a property initializer: */

let person = {
  firstName: 'John',
  lastName: 'Doe',
  ssn: '299-24-2351'
};

for(let prop in person){
  console.log(prop+ " : " + person[prop]);
};


// The for...in loop & Inheritance :

let decoration = {
  color : "red"
}

let circle = Object.create(decoration);
circle.radius = 30;

for(let prop in circle){
  console.log(prop);
}

// If you want to enumerate only the own properties of an object
for(let prop in circle){
  if(circle.hasOwnProperty(prop)){
  console.log(prop);}
}


// The for...in loop and Array:
// It’s good practice to not use the for...in to iterate over an array, especially when the order of the array elements is important.
const items= [10,20,30];
let total = 0;

for(const item  in items){
  total += items[item];
};

console.log(total);

// However, someone may set a property of the built-in Array type in their libraries 
Array.prototype.foo = 100;

// Hence, the for...in will not work correctly
// somewhere else
Array.prototype.foo = 100;

total = 0;
for (var prop in items) {
  console.log({ prop, value: items[prop] });
  total += items[prop];
}
console.log(total); 
