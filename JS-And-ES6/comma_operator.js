// A comma operator(,) takes two expressions, evaluates them from left to right, and returns the value of the right expression.
let result = (10, 10 + 29);
console.log(result);

let x = 10;
let y = (x++, x + 1);
console.log(x, y);

// you might want to use the comma operator inside a for loop to update multiple variables each time through the loop.

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = "";

for (i = 0, j = 1; i < a.length; i++, j++) {
  b += a[i] + " ";
  if (j % 3 == 0) {
    console.log(b);
    b = "";
  }
}

// Use two statements rather than the comma operator elsewhere to make the code more explicit and easier to understand.
