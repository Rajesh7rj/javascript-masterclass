// ** octal literals

/* ES5 provided numeric literals in octal (prefix 0), decimal (no prefix), and 
hexadecimal (0x). ES6 added support for binary literals and changed how it 
represents octal literals. */

let num = 051;
console.log(num);

/* In this example, since 8 is an invalid digit for representing the octal number, 
JavaScript ignores the 0 and treats the whole number as a decimal with a value of 58. */
num = 058; //non-strict mode.
console.log(num);


// If you use them in strict mode, JavaScript will throw an error.
"use strict"
num = 058; //SyntaxError: Decimals with leading zeros are not allowed in strict mode.

/* ES6 allows you to specify the octal literal by using the prefix 0o followed by a sequence of 
octal digits from 0 through 7. Here is an example: */

num = 0o34;
console.log(num);

// num = 0o58; //invalid octal throw error
// console.log(num);


// ***** binary literals

/* In ES5, JavaScript didn’t provide any literal form for binary numbers. 
To parse a binary string, you use the parseInt() function as follows: */
num = parseInt('111',2);
console.log(num);

/* ES6 added support for binary literals by using the 0b prefix followed by a sequence 
of binary numbers (0 and 1). Here is an example: */
num = 0b111;
console.log(num);
