// concat() method
let str = "This is "
let stri = "javascrip."
console.log(str.concat(stri));
let result = str.concat('JavaScript', ' ', 'String',' ', 'Concatenation');
console.log(result);

let newStr = "racing " + 1
console.log(newStr);

// Using the + and += operators

newStr = "Hello " + "Harry";
console.log(newStr);

newStr += " How are you?";
newStr += " all good?";
console.log(newStr);

/* According to a performance test on some modern web browsers, 
the + and += operators perform faster than the concat() method. */


// Using template literals

let s1 = "Hi";
let s2 = "How are you?"

console.log(`${s1} ${s2}`);