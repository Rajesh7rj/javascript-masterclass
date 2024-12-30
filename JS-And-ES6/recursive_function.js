// >>> Recursive function
// A recursive function is a function that calls itself until it doesn’t
// A recursive function always has a condition that stops the function from calling itself.

function countDown(number){
  console.log(number);
  countDown(number-1);
}

// countDown(3); //this will run until the call stack size is exceeded  because it doesn’t have the condition to stop calling itself.


function countDown(number){
console.log(number);
let nextNum = number-1;
if(nextNum > 0){
  countDown(nextNum);
}
}

countDown(3);

/*If the function name is set to null somewhere in the code, the recursive function will stop working.
To fix it, you can use a named function expression */
countDown = function f(fromNumber) {
console.log(fromNumber);

let nextNumber = fromNumber - 1;

if (nextNumber > 0) {
    f(nextNumber);
}
}

let newYearCountDown = countDown;
countDown = null;
newYearCountDown(10);

//  Calculate the sum of n natural numbers example

function total(n){
if(n<=1){
  return n
}else{
  return n * total(n-1)
}
};

result = total (5);
console.log(result);

