/* Primitive values are atomic pieces of data while reference values are objects 
that might consist of multiple values.*/

// Stack and heap memory 
/* When you declare variables, the JavaScript engine allocates the memory for them on two memory 
locations: stack and heap.*/

/* he JavaScript engine allocates a fixed amount of memory space to the static data
 and store it on the stack. */

 let name = "Roy";
 let surName = "wiliiam";

//  Note that strings are objects in many programming languages, including Java and C#. However, strings are primitive values in JavaScript.

/*Unlike the stack, JavaScript stores objects (and functions) on the heap. The 
JavaScript engine doesn’t allocate a fixed amount of memory for these objects. 
Instead, it’ll allocate more space as needed. */


// Dynamic properties

// A reference value allows you to add, change, or delete properties at any time. 

let car = {
  company : "Tata",
  model : "Nano",
  color : "White",
  capacity : "5 persons"}

  car.price = "5lacs"; //add
  car.model = "Punch"; //change
  delete car.capacity; //delete

console.log(car);

// Copying values
let age = 26;
let newAge = age;

console.log(newAge);

newAge = newAge+1;
console.log(age);
console.log(newAge); //On the stack memory, the newAge and age are separate variables.


let person = {
 name : "vicky",
  age : 24
}

let member = person;

member.age = 26; /* Since both person and member variables reference the same object, changing 
                  the object via the member variable is also reflected in the person variable. */

console.log(person);
console.log(member);