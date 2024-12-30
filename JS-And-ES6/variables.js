// Declare a variable
var nothing; //Variable names cannot use the reserved words.

// Initialize a variable
var $name = "ramesh";
let _ageOfPerson = 30;
var  gender3 = "male";
const pie = 3.14;

console.log($name);
console.log(_ageOfPerson);
console.log(pie);

// Change a variable
_ageOfPerson = 34;
gender3 = "female";
console.log(_ageOfPerson, gender3);

// Undefined vs. undeclared variables

let fireGun;
console.log(fireGun); //Undefined
// console.log(noWay); //undeclared
