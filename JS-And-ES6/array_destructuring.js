// >>>> array destructuring
// ES6 provides a new feature called destructing assignment that allows you to destructure properties of an object or elements of an array into individual variables.
function getScore(){
  return [40,45,50];
};

let score = getScore();

let x = score[0];
y= score[1];
z=score[2];
console.log(x);

/*Prior to ES6, there was no direct way to assign the elements of the returned array to multiple variables such as x, y and z.

Fortunately, starting from ES6, you can use the destructing assignment as follows: */
[x,y,z] = getScore(); //Note that the square brackets [] look like the array syntax but they are not.
console.log(x);
console.log(y);
console.log(z);

// If the getScores() function returns an array of two elements, the third variable will be undefined
function getScore(){
  return [40,50];
};

[x,y,z] = getScore();
console.log(x);
console.log(y);
console.log(z);

// In case the getScores() function returns an array that has more than three elements, the remaining elements are discarded
function getScore(){
  return [40,50,60,70];
};
console.log(x);
console.log(y);
console.log(z);



// >>>> Array Destructuring Assignment and Rest syntax
// It’s possible to take all remaining elements of an array and put them in a new array by using the rest syntax (...)
function getScore(){
  return [40,50,60,70];
};

[x,y, ...args] = getScore();

console.log(x);
console.log(y);
console.log(...args);
// The variables x and y receive values of the first two elements of the returned array. And the args variable receives all the remaining arguments, which are the last two elements of the returned array.


// Note that it’s possible to destructure an array in the assignment that separates from the variable’s declaration. For example:
let p,q;
[p,q] = [10,20];
console.log(p);
console.log(q);

// Setting default values
function getItems(){
  return [30,40];
}
let items = getItems()
let thirdItem = items[2] != undefined ? items[2] : 0;
console.log(thirdItem);

// It’ll be simpler with the destructuring assignment with a default value:
[, , thirdItem=0] = getItems();
console.log(thirdItem);

// If the value taken from the array is undefined, you can assign the variable a default value, like this:
let r,s;
[r=1,s=2] = [10]; //in this r=1 is default value of r but in array its 10 so it'll show 10, and there is one value of s in the array so it show default value of s=2
console.log(r); //10
console.log(s); //2


// If the getItems() function doesn’t return an array and you expect an array, the destructing assignment will result in an error.
// function getItems(){
//   return null;
// }

// let [t,m] = getItems();

// console.log(t); //Uncaught TypeError: getItems is not a function or its return value is not iterable


// A typical way to solve this is to fallback the returned value of the getItems() function to an empty array like this
// function getItems(){
//     return null;
//   }

//   [a=10,b=20] = getItems() || [];
//   console.log(a,b);


// >>>> Nested array destructuring
function get(){
  return [
    "John","Doe", ["red", "blue", "black"]
  ]
};

let [fName, lName, [color1,color2,color3]] = get();

console.log(color1,color2,color3);



// >>>>> Array Destructuring Assignment Applications
// 1) Swapping variables

// The array destructuring makes it easy to swap values of variables without using a temporary variable

let o=10,k=20;
[o,k] = [k,o]
console.log(o); //20
console.log(k); //10

// 2) Functions that return multiple values
// In JavaScript, a function can return a value. However, you can return an array that contains multiple values

function stat (a,b){
  return [a+b, a-b, a/b, a*b];
}

let [sum, diff, div, mul] = stat(20,10);
console.log(sum);
console.log(diff);
console.log(div);
console.log(mul);