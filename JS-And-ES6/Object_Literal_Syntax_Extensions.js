/*syntax extensions of the object literal in ES6 that make your code cleaner and more flexible.

The object literal is one of the most popular patterns for creating objects in JavaScript because of its 
simplicity. ES6 makes the object literal more succinct and powerful by extending the syntax in some ways.
*/

// >>> Object property initializer shorthand :

function creatMachine(name,status){
  return {
    name : name,
    status :status,
  };
};

// shorthand
// ES6 allows you to eliminate the duplication when a property of an object is the same as the local variable name by including the name without a colon and value.

function creatMachine(name,status){
  return {
    name,
    status,
  };
};

// In this example, the JavaScript engine assigns the name and status property values of the name and status arguments

// Similarly, you can construct an object literal from local variables as shown in the following example

let name = "computer";
let status = "on";

let machine = {
  name,
  status
};
console.log(machine.name);


// >>> Computed property name:
// Prior to ES6, you could use the square brackets( [])  to enable the computed property names for the properties on objects.
// The square brackets allow you to use the string literals and variables as the property names.

name = "Machine name";

machine = {
  [name] : "server",
  "Machine hours" : 10000 ,

};

console.log(machine[name]);
console.log(machine["Machine hours"]);

// When a property name is placed inside the square brackets, the JavaScript engine evaluates it as a string. It means that you can use an expression as a property name. For example:
let prefix = 'machine';
machine = {
    [prefix + ' name']: 'server',
    [prefix + ' hours']: 10000
};

console.log(machine['machine name']); // server
console.log(machine['machine hours']); // 10000


// >>> Concise method syntax

// Prior to ES6, when defining a method for an object literal, you need to specify the name and full function definition as shown in the following example:

machine = {
  name : "computer",
  restart : function(){
    return console.log(this.name + " is restarting...");
  }
}

// ES6 makes the syntax for making a method of the object literal more succinct by removing the colon (:) and the function keyword.
machine = {
  name : "computer",
  restart (){               // <<<<<<<
    return console.log(this.name + " is restarting...");
  }
}; //This shorthand syntax is also known as the concise method syntax


let server = {
  name: 'Server',
  restart() {
      console.log("The " + this.name + " is restarting...");
  },
  'starting up'() {
      console.log("The " +  this.name + " is starting up!");
  }
};


console.log(server['starting up']());

