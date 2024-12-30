//A factory function is a function that returns a new object

let person1 = {
  firstName: "Raj",
  lastName: "Sinha",
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person1.getFullName());

//Suppose that you need to create another similar object called person2, you can duplicate the code as follows
let person2 = {
  firstName: "Raj",
  lastName: "Sinha",
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person2.getFullName());

//The problem is that the more objects you want to create, the more duplicate code you have.

//To avoid copying the same code all over again, you can define a function that creates the person object:

function createPerson(firstName, lastName) {
  // <<<<< factory function
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + " " + lastName;
    },
  };
}

//When a function creates and returns a new object, it is called a factory function. The createPerson() is a factory function because it returns a new person object.

p1 = createPerson("John", "Cena");
p2 = createPerson("John", "Wilson");

console.log(p1);
console.log(p2);

//By using the factory function, you create any number of the person objects without duplicating code.

/* When you create an object, the JavaScript engine allocates memory to it. If you create many person objects, the JavaScript engine needs lots of memory spaces to store these objects.

However, each person object has a copy of the same getFullName() method. It’s not efficient memory management.

To avoid duplicating the same getFullName() function in every object, you can remove the getFullName() method from the person object */
// And move this method to another object:
let personActions = {
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

person1.getFullName = personActions.getFullName;
console.log(person1.getFullName());

//This approach is not scalable if the object has many methods because you have to manually assign them individually. This is why the Object.create() method comes into play.

// >>>>>>> Object.create() method <<<<<<<<
// The Object.create() method creates a new object using an existing object as the prototype of the new object

function create_Person(firstName, lastName) {
  let person = Object.create(personActions);
  this.firstName = firstName;
  this.lastName = lastName;
  return person;
}

person1 = createPerson("Rave", "Bolla");
console.log(person1.getFullName());
