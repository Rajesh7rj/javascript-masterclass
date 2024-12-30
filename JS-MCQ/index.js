// *** example : 1 ***
console.log("example -1");
class Person{
  constructor(name){
    this.name = name;
  }
}

Person.prototype.age = 24;

const rajesh = new Person("Rajesh");

console.log(Object.hasOwn(rajesh, "name")); //true => object has name property in it
console.log(Object.hasOwn(rajesh, "age")); // false => object don't have age property, it's age assign to the prototype


// *** example : 2 ***
console.log("example -2");
function foo(str){
  let obj = {};
  for(let i of str){
    // console.log(i);
      if(obj[i]){
        return false
      }else{
        obj[i] = true
      }
  }
  return true
}

const str1 = "Javascript";
const str2 = "Jayesh";

console.log(foo(str1));
console.log(foo(str2));


// *** example : 3 ***
console.log("example -3");
const arr1 = Array.of(3);
const arr2 = Array.of(1,2,3);
// the Array constructor is useful for creating arrays with a specific length or for initializing arrays with undefined values. In contrast, Array.of() is useful for creating arrays with specific elements and provides more flexibility when it comes to the number and type of elements in the new array.
const arr3 = Array(3);
const arr4 = Array(1,2,3)

console.log(arr1, arr2);
console.log(arr3, arr4);


// *** example : 4 ***
console.log("example -4");
const person = {
  name : "Rajesh",
  age : 27,
  skill :{
    lang : "Javascript"
  }
}

Object.freeze(person);
// freeze() methods makes object immutable, but this method not affects the nested objects in main object 

const res1 = Object.isExtensible(person);
const res2 = Object.isExtensible(person.skill);
console.log(res1, res2);



// *** example : 5 ***
console.log("example -5");

const person2 = {};

Object.defineProperties(person2,{
  name : {
    value : "Rj",
    writable : true,
  },
  age : {
    value : 27,
    writable : false,
  }
});

person2.name = "Rajesh";
person2.age = 25; //doesn't change because writable is false

console.log(person2.name, person2.age);


// *** example : 5  leetcode ***
console.log("example -5");

var partitionString = function(s) {

  let ans = 1;
  let map = new Set();
  for(let i=0; i<s.length; i++){
    console.log(map)
    if(map.has(s[i])){
      map.clear();
      console.log("c",map)
      map.add(s[i]);
      console.log("if",map)
      ans++;
    }else{
      map.add(s[i]);
      console.log("else",map);
    }
  }
  return ans;
}



s = "abacaba";
partitionString(s)


// *** example : 6  leetcode ***
console.log("example -6");

const str = "rajesh janyani"
const arr = str.split(" ");

const res = arr.map((word)=> {
   return word[0].toUpperCase() + word.slice(1)
  
})

const output  = res.join("")
console.log(output);


// *** example : 7  leetcode ***
console.log("example -7");

let closedIsland= function(grid){
  let res = 0;
  let rows = grid[0].length
  let cols = grid.length

  if(cols<3 || rows <3) return 0;
  
 let  checkNeighbours= function(i,j){
    if(i<0 || i>=rows || j<0 || j>=cols) return false;
    if(grid[i][j]===1) return true;

    grid[i][j] =1;
    let left = checkNeighbours(i,j-1);
    let right = checkNeighbours(i,j+1)
    let top = checkNeighbours(i-1, j);
    let bottom = checkNeighbours(i+1, j);
    return left && right && top && bottom
    
    }
    for(let i=0; i<rows-1; i++){
      for(let j=0; J<cols-1; j++){
        if(grid[i][j] === 1)  res +=checkNeighbours(i,j);
       
      }
  }
  return res;
}


// *** example : 8  leetcode ***
console.log("example -8");

let array = ["eat", "ate", "dna", "and"];
let obj ={};

for(let word of array){
  let key = word.split("").sort().join("");
  // console.log(word.split("").sort().join(""));
  if(obj[key]){
    obj[key] = [...obj[key], word];
  } else{
    obj[key] = [word]
    console.log(obj);
  }
}

console.log(Object.values(obj));


// *** example : 9 ***
console.log("example -9");
const hof = (c1, c2) =>{
  c1();
  setTimeout(c2, 1000);
  console.log("Three");
};

const c1 = () =>{
  console.log("One");
}

const c2 = () =>{
  console.log("Two");
}


hof(c1,c2)


// *** example : 10 *** leetcode
console.log("example -10");
var removeStars = function(s) {
  let result = [];
  for(let char of s){
      if(char === "*" && s.length) { result.pop()
        console.log(result);}
       else result.push(char)
       console.log(result)
      
  }
  return result.join("");
};

removeStars("leet**cod*e");


// *** example : 11 *** leetcode
console.log("example -11");
let path = "/home/"
 stack = [];
console.log(path.split("/"));
for(let i of path){
  console.log(i);
  if(i === "" || i === ".") continue;
  else if(i === "..") stack.pop();
  else stack.push(i);
  
}
stack = "/" + stack.join("/")
console.log(stack);



// *** example : 12 *** leetcode
console.log("example -12");


let validateStackSequences = function(pushed, popped) {
  let stack1 = [];
  for(let i of pushed){
    stack1.push(i);
    for(let j=0; j<popped.length; j++){
      if(stack1[i] === popped[j]) 
      stack1.pop()
      return stack1;
    }
  }
  console.log(stack1);
  return stack1;
};


let pushed = [1,2,3,4,5], popped = [4,5,3,2,1];

validateStackSequences(pushed, popped);



var x = 43;


let hero ={
  power:99,
  getP(){
    return this.power;
  }
}
let hero2 = {power:42}
let getP = hero.getP;



{
  var a = 4;
  let b = 10;
  const c = 20;
  console.log(a);
console.log(b);
console.log(c);
}




let str5 = "hello world";
let res4 = str5.split("").reverse().join("");
let rs = res4.split(" ").reverse().join(" ")
console.log(rs);


let string = "Hello, I am frontend developer."
let ar1= [1,2,3,4,5,6,7,8,9,10]
console.log(ar1.length)
ar1.push(11);
console.log(ar1);
ar1.pop();
console.log(ar1);
ar1.unshift(0);
console.log(ar1);
ar1.shift();
console.log(ar1);

ar1.splice(2, 3, 12,12,13)
console.log(ar1);

let slice =ar1.slice(0,2)
console.log(slice);

let s2 = string.slice();
console.log(s2);

console.log(ar1.indexOf(10, 4));
console.log(ar1.lastIndexOf(12)); // find last occerence index of 12
console.log(ar1.find(e => e%4 === 0)) 
// console.log(ar1.findAll()) 
console.log(ar1.includes(12));
console.log(ar1.findIndex(e => e === 12));
console.log(ar1.map(e => e*2));
console.log(ar1.filter(e=> e%2===0 && e>6));
console.log(ar1.reduce((prev, cur)=>(prev+cur)));
console.log(ar1.reduceRight((prev, cur)=>(prev+cur)));
console.log(ar1.every(e => e>0));
console.log(ar1.some(e=>e>10));
console.log(ar1.sort((a,b) => a-b));
let sa = ["box", "cat", "apple", "fan", "dog", "egg"]
// sa.sort()
sa.sort((a,b)=> {
  if (a > b) return -1;
  if(a<b) return 1 ;

  return 0;
  
})
console.log(sa);
ar1.forEach(e => console.log(e*2));
console.log(ar1.concat(sa));
let a2 = Array.of(3,4,5,"p")
console.log(a2, a2[0]);

function addOne(){
  return Array.from(arguments, x=> x*2);
}

console.log(addOne(1,2,3,4,5,));
console.log(ar1.join(","));
let a3 = [1,2,3,4,5,6,7,8]
console.log(a3.at(-4));

const numbers = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
const flatNumbers = numbers.flat(Infinity);

console.log(flatNumbers);

const numbers1 = [1, 2, , 4, , 5];
const sequence = numbers1.flat();

console.log(sequence);

let regexp = /[.]/;
console.log(string.search(regexp));

console.log(string.substring(-6, -1));
console.log(string.slice(-6, -1));

let str6 = 'JS will, JS will rock you!';
let newStr = str6.replace('JS','JavaScript');

console.log(newStr);
console.log(str6);
let newStr2 = str6.replaceAll('JS','JavaScript');

console.log(newStr2);


let name = {
  fn: "rj",
  ln : "jr",
  fun: function(hometown){
     console.log(this.fn+ " "+this.ln +" "+ hometown);
  }
}

name.fun()

let name2 = {
  fn: "rj2",
  ln : "jr2",
  
}

name.fun.call(name2)
name.fun.apply(name2, ["raj"])

console.log(Math.max(...ar1));


let word1 = "1234", word2= "123";


var mergeAlternately = function(word1, word2) {
  let merged = [];
  let length = word1.length > word2.length ? word1.length : word2.length;
  for(let i=0; i< length; i++){
    if(i<word1.length ) merged.push(word1[i]);
    if(i<word2.length) merged.push(word2[i]);
  }
  return  merged.join("");
};

console.log(mergeAlternately(word1, word2));

function demo(){
  console.log(d);
  var d = "123"
}

demo()
