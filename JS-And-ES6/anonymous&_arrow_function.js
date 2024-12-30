// >>>> anonymous functions
// An anonymous function is a function without a name
(function(){ //Note that if you don’t place the anonymous function inside the (), you’ll get a syntax error. 
  console.log("Hi!");
} )


// An anonymous function is not accessible after its initial creation. Therefore, you often need to assign it to a variable.
let show = function() {
  console.log("Anonymous functions");
}

show();


// Using anonymous functions as arguments
setTimeout(function() {
  console.log('Execute later after 1 second')
}, 1000);


// Immediately invoked function execution
// If you want to create a function and execute it immediately after the declaration, you can declare an anonymous function like this
(function(){
  console.log('Immediately invoked function execution');
})();

// sometimes, you may want to pass arguments into it
let person = {
  firstName: 'John',
  lastName: 'Doe'
};

(function () {
  console.log((person.firstName) + ' ' + person.lastName);
})(person);


// >>> Arrow functions
// ES6 introduced arrow function expressions that provide a shorthand for declaring anonymous functions

show = () => console.log("Anonymous function");
show();
let aDD = (a,b) => a+b;

