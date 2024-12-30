/* JavaScript strings are primitive values. Also, strings are immutable. 
It means that if you modify a string, you will always get a new string. 
The original string doesn’t change. */

let s1 = 'hi';
let s2 = "hello";
console.log(s1,s2);
// ES6 introduced template literals that allow you to define a string backtick (`) characters:

let s3 = `hi"`;

/* The template literals allow you to use the single quotes and double quotes inside a string
 without the need of escaping them. For example: */
s3 = `Hi, I'm John."Good Morning!"`
console.log(s3);

/* Also, you can place the variables and expressions inside a template literal. JavaScript 
will replace the variables with their value in the string. This is called string interpolation. */

let name = 'John';
let s4 = `I am ${name}`;
console.log(s4);


/* Escaping special characters

To escape special characters, you use the backslash \ character. For example:

Windows line break: '\r\n'
Unix line break: '\n'
Tab: '\t'
Backslash '\'
 */

s4 = 'I\'m John.\r\nFrom america. \n Hello. \t tab'
console.log(s4);

// string length
console.log(s4.length);

// Accessing characters
console.log(s4[7]);

// concatenate two or more strings
console.log( s2+' '+name);
console.log(s2 +' Roy');

// Converting values to string

/* To convert a non-string value to a string, you use one of the following:

String(n);
” + n
n.toString()
Note that the toString() method doesn’t work for undefined and null.
 */

let status = false;
str = String(status)
console.log(str, typeof(str));

console.log(typeof(status.toString()));


// Comparing strings
let result = 'a' < 'b';
console.log(result);
console.log('a'< 'B');