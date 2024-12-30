let age = 18;
if (age >= 18){ // //condition is true, execution of the block of codes happens
  console.log("You are eligible");
};

age = 16;
if (age >= 18){ //condition is false, no execution of the block of codes 
  console.log("You are eligible.");
};

// Nested if statement
let state = "Gujarat";

if(state === "Gujarat"){
  if (age >= 16){
    console.log("You can drive.");
  };
};

// you should avoid using nested if statements as much as possible

if(state === "Gujarat" && age >= 16){
  console.log("You can drive.");
}


// if…else statement
age = 15
if (age >= 18){
  console.log("You are eligible");
}
else{
  console.log("You are'n eligible");
};


//  if else if statement
let month = 6;
let monthName;

if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}
console.log(monthName);


// use a 'ternary operator (? :)' instead of the if-else statement
let msg;
age == 16 ? (msg = "You can drive.") : (msg = "You can't drive.") ; 
console.log(msg);

let locked = 1;
let canChange = locked !=1 ? true : false;
console.log(canChange);

//  multiple JavaScript ternary operators 

let speed = 90;
let message = speed >= 120 ? "Too fast" : speed >= 80 ? "Fast" : "Ok";
console.log(message);


