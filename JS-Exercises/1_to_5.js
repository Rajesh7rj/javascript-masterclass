//  1  console time 
let today = new Date();
let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saterday"];
let day = today.getDay() ;
console.log(dayList[day]);

let hr = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();

if(hr >= 12){
  console.log(`${hr} PM : ${min} : ${sec}`);
}
else{
  console.log(`${hr} AM : ${min} : ${sec}`);
}


// 2 print window
function print_current_page() {
  window.print();
}


// 3, console date
let date = today.getDate();
let month = today.getMonth()+1;
let year = today.getFullYear();

console.log(`${date}-${month}-${year}`);
console.log(`${date}/${month}/${year}`);
console.log(`${month}-${date}-${year}`);
console.log(`${month}/${date}/${year}`);


 // 4 area of triangle
let a=5,b=6,c=7;
let s = Semi_perimeter = (a+b+c)/2;

// heron's formula
let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

console.log(area);


// 5 setInterval
let element = document.getElementById("text").childNodes[0].data;
let text = document.getElementById("text");

setInterval(function(){
  element = element[element.length -1] + element.substring(0, element.length-1);
  text.innerText = element;
}, 100)