// Arithmetic Operators
let a = 50;
let b = 10;
let c= "10"
let d = "50"

console.log(a+b);
console.log(b+c); //concatenation 
console.log(c+d); //concatenation


console.log(a-b);
console.log(a-c);
console.log(d-c);

console.log(a*b);
console.log(a*c);

console.log(a/b);
console.log(a/c);

console.log("\t----------");


// Remainder Operator
let remainder = 5%2;
console.log(remainder);

console.log(5%-2);

console.log(-15%4);
console.log(-15%-4);

console.log(Infinity%2);
console.log(10%0);
console.log(Infinity%Infinity);
console.log(10%Infinity);
console.log(0%10);
console.log("10"%3);

//>>>> Remainder vs Modulo operator
// In JavaScript, the remainder operator (%) is not the modulo operator.

// To get a modulo in JavaScript, you use the following expression:
const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

// If the division and divisor have the same sign, the remainder and modulo operators return the same result.
// In mathematics, the result of a modulo operation is the remainder of an arithmetic division.

// dividen and divisor have the same sign
console.log('remainder:', 5 % 3); // 2
console.log('modulo:', mod(5, 3)); // 2

// dividen and divisor have the different signs
console.log('remainder:', -5 % 3); // -2
console.log('modulo:', mod(-5, 3)); // 1

console.log("\t----------");



// assignment operators
 a = 3;
 b = 4;
 console.log(a+=b);
 console.log(b-=2);
 console.log(b*=3);
 console.log(b/=2);
 console.log(b%=5);



//  comparison operators
let r1 = 20 > 10; // true
let r2 = 20 < 10; // false
let r3 = 10 == 10; // true

console.log(r3);

// In this example, letter B has the character code 66 while the letter a has the character code 97.
console.log("apple"<"banana");
console.log("alice" < "Banana");

// Compare a number with a value of another type
console.log(10 <= "10");
console.log(10 < "20");

// Compare an object with a non-object
let apple = {
  valueOf : function(){
    return 10;
  }
};

let orange = {
  toString : function(){
    return 20;
  }
};

console.log(apple == 20);
console.log(orange >= 20);

// Compare a Boolean with another value
console.log(true > 0); // true
console.log(false < 1); // true
console.log(true > false); // true
console.log(false > true); // false
console.log(true >= true); // true
console.log(true <= true); // true
console.log(false <= false); // true
console.log(false >= false); // true

// Compare null and undefined
console.log(null == undefined); // true

// Compare NaN with other values
console.log(NaN == 1);
console.log(NaN == NaN);
console.log(NaN != 1);

// strictly equal
console.log("10" == 10); // true
console.log("10" === 10); // false

console.log("\t----------");



//  unary operators : Unary operators work on one value. 
let x = 10;
let y = +x;
console.log(y); // 10

y=-x
console.log(y);
y=10
console.log(y++); // first initialize then increment
console.log(y++);
console.log(++x); // first increment then initialize

let z = 20;
y = 20
console.log(--z);
console.log(y--);


let person = {
  name: 'John',
  toString: function () {
    return '25';
  },
  valueOf: function () {
    return '30';
  },
};

console.log(+person);
console.log("\t----------");



//  Logical operators : logical NOT operator(!), the logical AND operator (&&) and the logical OR operator (||).

let eligible = true;
let required = false;
console.log(!eligible); // the ! returns true if the value is false and false if the value if true
console.log(!required);

let counter = 10;
console.log(!!counter); // true

// The Logical AND operator (&&) : the && operator is true only if both values are true, otherwise, it is false
console.log(eligible && required);
required = true;
console.log(eligible && required);

// The Logical OR operator (||) : The || operator returns false if both values evaluate to false. In case either value is true, the || operator returns true
a = false, b= false;
console.log(a || b);
console.log(eligible || required);

// the logical operator precedence from the highest to the lowest is !, && and ||.

// Logical Assignment Operators
// The logical OR assignment (x ||= y) operator only assigns y to x if x is falsy.
let x1 = false;
let y1 =true;
let title = "assigned"
console.log(x1 ||= title );
console.log(y1 ||= title );

// The logical AND assignment (x &&= y) operator only assigns y to x if x is truthy.
x1=false;
console.log(y1 &&= title );
console.log(x1 &&= title );

//The nullish coalesing assignment (x ??= y) operator only assigns y to x if x is nullish.

let men = {
  firstName : "John"
};

men.lastName ??= "Jonny";
console.log(men);
console.log("\t----------");


// nullish coalescing operator (??) that accepts two values and returns the second value if the first one is null or undefined.

const name = null ?? "jack";
console.log(name);

const age = undefined ?? 28;
console.log(age);

// Chaining with the AND or OR operator
// const result = null || undefined ?? 'OK'; // SyntaxError

const result = (null || undefined) ?? 'OK'; 
console.log(result); // 'OK'
console.log("\t----------");



//  exponentiation operator : 
// exponentiation operator (**) to raise a number to the power of an exponent.

console.log(Math.pow(5,2));

console.log(5 ** 2);

/* Both Math.pow() and operator ** accept values of the number type. However, 
the operator ** also accepts the numbers of the bigint type */

console.log(2n ** 3n); // bigint

// javaScript doe not allow you to put a unary operator immediately before the base number.
// console.log(-2 ** 3); //syntax error

console.log((-2) ** 3);