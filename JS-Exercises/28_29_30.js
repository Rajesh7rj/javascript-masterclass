// ex:28
function check(x,y){
  if((x>= 50 && x <= 99) || (y>= 50 && y <= 99)){
    return true;
  } return false;

};

console.log(check(58, 9));
console.log(check(8, 9));
console.log(check(8, 99));


//ex:29
function check(x,y,z){
  if((x>= 50 && x <= 99) || (y>= 50 && y <= 99) || (y>= 50 && y <= 99)){
    return true;
  } return false;

};

console.log(check(58, 9, 34));
console.log(check(8, 9, 35 ));
console.log(check(8, 99, 78));


//ex:30
function check(str){
  if(str.length >=6 && "Script" === str.substring(4, 10)){
    return str.substring(0,4) + str.substring(10,str.length);
  }
  return str;
};

console.log(check("JavaScript"));
console.log(check("Python"));
console.log("myScript");
console.log(check("I am learning JavaScript"));
