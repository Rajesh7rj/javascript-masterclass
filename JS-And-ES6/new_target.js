// JavaScript new.target metaproperty that detects whether a function or constructor was called using the new operator.

// The new.target is very useful to inspect at runtime whether a function is being executed as a function or as a constructor. It is also handy to determine a specific derived class that was called by using the new operator from within a parent class.

function Person(name){
  if (!new.target) {
    throw "must use new operator with Person";
}
this.name = name;
}

const person = new Person("john");
// const person2 = Person("lily");

console.log(person.name);
// console.log(person2.name);


class Person2{
  constructor(name){
    this.name = name;
    console.log(new.target.name);
  }

}

class Employee extends Person2{
  constructor(name, title){
    super(name);
    this.title =title;
  }
}


const raj = new Person2("Raj")
const riya = new Employee("Riya", "Programmer")

