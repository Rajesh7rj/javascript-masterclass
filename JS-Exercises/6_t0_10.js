
//6 leap year
let year = 2016;

if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
  console.log("Leap year");
} else {
  console.log("Not Leap year");
}

function leapYear(year){
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
};

console.log(leapYear(year));
console.log(leapYear(1900));



// 7 1st January is being a Sunday
let year_;
for (year_ = 2014; year_<=2050; year_++){
  let d = new Date(year_, 0 ,1); // 0 for 1st month of year, 1 for 1st day of month 
  if(d.getDay() === 0){
    console.log("1st January is being a Sunday ", year_);
  }
}
console.log("----------------");

// 8
// The Math.ceil() function is used to get the smallest integer greater than or equal to a given number.
let num = Math.ceil(Math.random()*10) + 1;
console.log(num);
let gnum = prompt("gnum a number between 1 to 10. ");

if(gnum == num){
  alert("Good Work");
  console.log("Good Work");
}else{
  alert("Not Matched, the number was " + gnum);
  console.log("Not Matched, the number was " + gnum);
};


// 9 days left to Christmas!
let today = new Date();

let xmas = new Date(today.getFullYear(), 11, 25) // year,month(0-11=dec),date

if(today.getMonth() == 11 && today.getDate() == 25){
  xmas.setFullYear(xmas.getFullYear()+1);
}

one_day = 1000*60*60*24 //milliseconds

console.log(Math.ceil((xmas.getTime()-today.getTime())/one_day) + " days left to Christmas!");

/*The getTime() method is used to get the numeric value corresponding to the time for the 
specified date according to universal time in milliseconds. */


// 10 
function mul(){
  var num1=document.getElementById("in1").value;
  var num2=document.getElementById("in2").value;
  document.getElementById("res").innerHTML=num1*num2
  }
  function div(){
  var num1=document.getElementById("in1").value;
  var num2=document.getElementById("in2").value;
  
  document.getElementById("res").innerHTML=num1/num2
  }
