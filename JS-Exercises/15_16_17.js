// ex:15
function diff(num){
  if(num <= 13){
    return 13-num;
  } else {
    return(num-13)*2
  }
};

console.log(diff(10));
console.log(diff(20));

//// ex:15
function sum(x,y){
  if(x===y){
    return (x+y)*3;
  } else {
    return x+y
  }
};

console.log(sum(10,5));
console.log(sum(5,5));

//// ex:17
function diff2(num){
  if(num <= 19){
    return 19-num;
  } else {
    return(num-19)*3
  }
};

console.log(diff2(10));
console.log(diff2(21));