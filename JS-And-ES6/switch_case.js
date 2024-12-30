// JavaScript switch statement to execute a block based on multiple conditions.

// The switch statement evaluates an expression, compares its result with case values, and executes the statement associated with the matching case value.

//  you often use a switch statement to replace a complex if...else...if statement to make the code more readable.

let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Mon";
    break;
  case 2:
    dayName = "Tue";
    break;
  case 3:
    dayName = "Wed";
    break;
  case 4:
    dayName = "Thu";
    break;
  case 5:
    dayName = "Fri";
    break;
  case 6:
    dayName = "Sat";
    break;
  case 7:
    dayName = "Sun";
    break;
  default:
    "invalid day";
}

console.log(dayName);

// switch statement to get the day count based of a month

let month = 2;
let year = 2016;
let daysCount;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    daysCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    daysCount = 30;
  case 2:
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      daysCount = 29;
    } else {
      daysCount = 28;
    }
    break;
  default:
    daysCount = -1; //invalid month
}

console.log(daysCount);
