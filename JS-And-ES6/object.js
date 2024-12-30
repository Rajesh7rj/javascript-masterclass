/* In JavaScript, an object is an unordered collection of key-value pairs. 
Each key-value pair is called a property.  */

let obj = {}; // empty object

/* The key of a property can be a string. And the value of a property can be any value,
 e.g., a string, a number, an array, and even a function. */
let car = {
  company : "Tata",
  model : "Nano",
  color : "White",
  capacity : "5 persons",
  "car-engine" : "660 cc",
  'year of manufacruring': 2010 //Note that it is not a good practice to use spaces in the property names of an object.
}

//Accessing properties
console.log(car.capacity); //The dot notation (.)
console.log(car.company);
console.log(car["color"]);
console.log(car["car-engine"]); //Array-like notation ( [])

console.log(car.average); //property that does not exist will result in an undefined


// Modifying the value of a property

console.log(car.model = "Punch");
console.log(car["year of manufacruring"] = 2020);

// Adding a new property to an object
car.price = "5lacs";

// Deleting a property of an object
delete car["car-engine"];
console.log(car["car-engine"]);

// Checking if a property exists
console.log(car.weight in car);
console.log("model" in car);

console.log(car);
