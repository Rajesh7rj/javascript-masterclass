// ex : 21
function newString(str){
  if(str === null || str === undefined || str.substring(0,2) === "Py" ){
    return str;
  } else {
    return "Py"+str;
  }
};

console.log(newString("Python"));
console.log(newString());
console.log(newString("cham"));

// ex : 22
function remove_character(str1, char_pos){
  part1 = str1.substring(0, char_pos);
  part2 = str1.substring(char_pos+1, str1.length);
  return part1 + part2;
}

console.log( remove_character("I am Happy.", 2));
console.log( remove_character("JavaScript", 4));

//ex : 23
function nStr(str2){
  if(str2.length <= 1){
    return str2
      }else{
        return str2.substring(str2.length -1, str2.length) + str2.substring(1,str2.length-1) + str2.substring(0,1);
  }
}

console.log(nStr("javascript"));
console.log(nStr("k"));
console.log(nStr("mk"));

//ex : 24
function nStr2(str3){
  return str3.substring(0,1) + str3 + str3.substring(0,1);
}

console.log(nStr2("JavaScript"));
console.log(nStr2("J"));
console.log(nStr2("Jp"));