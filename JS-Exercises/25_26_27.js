// ex:25

function check(n){
  if(n%3===0){
    return(n + " is multiple of 3.")
  }else if(n%7 === 0){
    return(n + " is multiple of 7.")
  }else{
    return(n + " is not multiple of 3 or 7.")
  }
}

console.log(check(70));
console.log(check(43));
console.log(check(33));

// ------ or -------
function test37(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11));



// ex: 26
function nStr (str){
  if(str.length <= 3){
    return str;
  }else{
    return str.substring(str.length-3) + str + str.substring(str.length-3)
  }
}

console.log(nStr("Java"));



// ex:27
function check1(str1){
  if(str1.length >= 4 && "Java" === str1.substring(0,4)){
    return true;
  }
  {
    return false;
  }
};

console.log(check1("JavaScript"));
console.log(check1("pie"));
console.log(check1("python"));

