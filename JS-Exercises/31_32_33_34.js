// ex: 31
function largest(x, y, z) {
  if (x > y && x > z) {
    return x + " is largest number.";
  } else if (y > z && y > x) {
    return y + " is largest number.";
  } else {
    return z + " is largest number.";
  }
}

console.log(largest(10, 20, 15));
console.log(largest(100, 20, 15));
console.log(largest(10, 20, 150));

// ------ or -------

function max_of_three(x, y, z) {
  max_val = 0;
  if (x > y) {
    max_val = x;
  } else {
    max_val = y;
  }
  if (z > max_val) {
    max_val = z;
  }
  return max_val;
}

console.log(max_of_three(1, 0, 1));
console.log(max_of_three(0, -10, -20));
console.log(max_of_three(1000, 510, 440));

// ex:32
function nearest(x, y) {
  if (x != y) {
    if (x <= 100 && x > y) {
      return x + " is nearest valut to 100.";
    }
    return y + " is nearest valut to 100.";
  }
  return false;
}

console.log(nearest(50, 80));
console.log(nearest(-74, -32));
console.log(nearest(-32, -32));

// ex:33
function range(x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    return true;
  }
  return false;
}

console.log(range(40, 100));
console.log(range(50, 30));
console.log(range(88, 73));
console.log(range(46, 55));

//ex:34
function larger(x, y) {
  if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
    if (x === y) {
      return "Numbers are the same";
    } else if (x > y) {
      return x;
    } else {
      return y;
    }
  } else {
    return "Numbers don't fit in range";
  }
}

console.log(larger(30, 30));
console.log(larger(60, 60));
console.log(larger(60, 50));
