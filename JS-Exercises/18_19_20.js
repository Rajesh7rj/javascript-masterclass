//ex:18
function check(x,y){
  if(x==50 || y==50 || x+y == 50){
    return true;
  } else{
    return false;
  }
};

console.log(check(50,55));
console.log(check(30,35));
console.log(check(25,25));
console.log(check(56,50));
console.log("-------------\n");

//ex:19
function test(x){
  return (Math.abs(100-x) <= 20) || (Math.abs(400-x) <= 20);
}

console.log(test(19));
console.log(test(190));
console.log(test(89));
console.log(test(389));
console.log("-------------\n");


//ex:20

function check2(x,y){
  if((x <0 && y>0) || (y <0 && x>0)) {
    return true;
  } else{
    return false;
  }
}

console.log(check2(12,-12));
console.log(check2(-12,12));
console.log(check2(12,12));

