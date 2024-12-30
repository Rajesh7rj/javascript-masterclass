/* The numeric separator allows you to create a visual separation between groups of digits
 by using underscores (_) as separators. */

 let num = 1000000000;
 num = 1_000_000_000; 
 num = 125_405.75
 console.log(num);

 // BigInt
const max = 9_223_372_036_854_775_807n;

// binary
let nibbles = 0b1011_0101_0101;

// octal
let val = 0o1234_5670;

// hex
let message = 0xD0_E0_F0;

console.log(max, nibbles, val, message);