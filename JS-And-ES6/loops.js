// for loop
// The for loop statement creates a loop with three optional expressions

for (let i=0 ;i<=5 ; i++) {
  console.log(i);
}

// no initializer
let i=1;
for ( ;i<=5 ; i++) { 
  console.log(i);
}

// without the condition example

for (let i=1 ; ; i++) { 
  console.log(i);
  if(i>10){
    break;
  }
}

// without any expression example
let j=1;
for(;;){
  if(j>10){
    break;
  }
  console.log(j);
  j+=2;
}

// without the loop body example
let sum = 0;
for(let i=0; i<10; i++, sum +=i);
console.log(sum);


// >>> while Loop
// while statement creates a loop that executes a block as long as a condition evaluates to true.
let count = 1;
while( count <10 ){
  count ++;
  console.log(count);
  
}


// >>> do....while Loop
// you often use the do...while statement when you want to execute the loop body at least once before checking the condition.

count = 0;
do{
  console.log(count);
  count++;
} 
while(count < 10)


// do while statement to make a simple number guessing game
let MIN = 1;
let MAX = 10;

let secretNumber = Math.floor(Math.random()*(MAX-MIN+1))+MIN;

let gusses = 0;
let number = 0;
let hint = '';

do{
  let input = prompt("Enter your secret number :");
  number = parseInt(input);

  gusses++;

  if(number > secretNumber){
  hint =', and less than ' + number;
  } else if(number < secretNumber){
    hint =', and greter than ' + number;
    } else if (number === secretNumber){
      alert(`Bravo! you're correct after ${guesses} guess(es).`)
    }
}
while(number != secretNumber);
