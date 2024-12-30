// JavaScript boolean primitive type

// JavaScript provides a boolean primitive type that has two values of true and false.

let isPending = false;
let isDone = true;

console.log(typeof(isPending, isDone));



// JavaScript Boolean object

/*JavaScript also provides you with the global Boolean() function, with the letter B 
in uppercase, to cast a value of another type to boolean. */

let str = Boolean("HI");
console.log(typeof(str));

/*The Boolean is also a wrapper object of the boolean primitive type. It means that when you 
pass either true or false to the Boolean constructor, it’ll create a Boolean object. For example: */

let b = new Boolean(true);

console.log(b.valueOf());
console.log(b.toString());



// JavaScript boolean vs. Boolean

let complete = true;
let active = new Boolean(false);

// First, active is an object so you can add a property to it:
active.value = active.valueOf();
console.log(active.value);

// However, you cannot do it with the primitive boolean variable like the completed variable
complete.value = complete.valueOf();
console.log(complete.value);

/*Second, the typeof of Boolean object returns object, whereas the typeof of a 
primitive boolean value returns boolean */

console.log(typeof(active));
console.log(typeof(complete));

/*Third, when applying the  instanceof operator to a Boolean object, it returns true. 
However, it returns false if you apply the  instanceof operator to a boolean value. */

console.log(complete instanceof Boolean );
console.log(active instanceof Boolean );

