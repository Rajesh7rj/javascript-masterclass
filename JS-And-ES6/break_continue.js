// break : use the break statement to terminate a loop prematurely.

for (let i = 0; i < 7; i++) {
  console.log(i);
  if (i == 3) {
    break;
  }
}

let i = 0;

while (i < 5) {
  i++;
  console.log(i);
  if (i == 3) {
    break;
  }
}

do {
  i++;
  console.log(i);
  if (i == 3) {
    break;
  }
} while (i < 5);

// label statement : you can label a statement for later use
// the following shows how to label a for loop using the outer label:
outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i + j == 4) {
      break outer;
    }
    console.log(i, j);
  }
}
// Once defining a label, you can reference it in the break or continue statement.

// >>>>> continue :continue statement to skip the current iteration of a loop.

for (i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}

// Using the continue statement with a label example
outer: for (let i = 1; i < 4; i++) {
  for (let j = 1; j < 4; j++) {
    if (i + j == 3) continue outer;
    console.log(i, j);
  }
}
