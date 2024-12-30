//ex:35
function check(str, char) {
  let ctr = 0;
  for (i = 0; i <= str.length; i++) {
    if (str.charAt(i) == char && i >= 1 && i <= 3) {
      ctr = 1;
      break;
    }
  }
  if (ctr === 1) {
    return true;
  }
  return false;
}

console.log(check("python", "y"));
console.log(check("javascript", "v"));
console.log(check("python", "o"));
console.log(check("python", "p"));
console.log("------------\n");


// ex:36
function last_digit(x, y, z) {
  if (x > 0 && y > 0 && z > 0) {
    return x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10;
  } else return false;
}

console.log(last_digit(73, 173, 1273));


// ex:37
function convert(str) {
  if (str.length >= 3) {
    return str.substring(0, 3).toLowerCase() + str.substring(3, str.length);
  } else {
    return str.toUpperCase();
  }
}

console.log(convert("my"));
console.log(convert("JavaScript"));
console.log(convert("PYTHON"));


// ex :38
function exam_status(totalmarks, is_exam) {
  if (is_exam) {
    return totalmarks >= 90;
  }
  return totalmarks >= 89 && totalmarks <= 100;
}

console.log(exam_status(90, "true")); // if final exam
console.log(exam_status(89, "true")); //if final exam
console.log(exam_status(89, ""));
console.log(exam_status(70, "true")); //if final exam


//ex:39
function sum(x,y){

  if(x+y >=50 && x+y <= 80){
    return 65;
  }else{
    return 80;
  }
}

console.log(sum(70,95));
console.log(sum(30,15));
console.log(sum(20,45));


// ex:40
function check8 (x,y){
  if(x === 8 || y ===8 || x+y ===8 || x-y ===8){
    return true
  }{
    return false;
  }
}

console.log(check8(3,5));
console.log(check8(1,5));
console.log(check8(8,5));
console.log(check8(3,8));
console.log(check8(18,10));
