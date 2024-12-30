// integer
let num = 445;
console.log(num);

// ********* Octal numbers
/*  An octal literal number starts with the digit zero (0) followed by 
a sequence of octal digits (numbers from 0 through 7).*/
num = 071;
console.log(num);

/* if an octal number contains a number not in the range from 0 to 7, 
the JavaScript engine ignores the 0 and treats the number as a decimal. */
num = 080;
console.log(num);

/* This implicit behavior might cause issues. Therefore, ES6 introduced a new octal 
literal that starts with the 0o followed by a sequence of octal digits (from 0 to 7).*/
num = 0o71;

console.log(num, typeof(num));

// If you an invalid number after 0o, JavaScript will issue a syntax error 
// num = 0o81; //SyntaxError: Invalid or unexpected token
// console.log(num);


//******  Hexadecimal numbers 
/*Hexadecimal numbers start with 0x or 0X followed by any number 
of hexadecimal digits (0 through 9, and a through f) */

num = 0x56;
console.log(num, typeof(num));


// ******* floating-point numbers
num = 12.5;
console.log(num, typeof(num));
let discount = .05; // valid but not recommeded

/* When you have a very big number, you can use e-notation. 
E-notation indicates a number should be multiplied by 10 raised to a given power */
num = 3.14e7;
console.log(num); //The notation 3.14e7 means that take 3.14 and multiply it by 10^7.

num = 5e-7; //The 5e-7 notation means that take 5 and divide it by 10,000,000.
console.log(num);

// >>> Floating-point numbers are accurate up to 17 decimal places


// ******* bigint
// The bigint type stores whole numbers whose values are greater than 253 – 1.
num = 9007199254740991n;
console.log(num, typeof(num));
