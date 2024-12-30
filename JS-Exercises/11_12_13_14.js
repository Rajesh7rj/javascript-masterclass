function cToF (cel){
  let cTemp = cel;
  let cToFahr = (cTemp * 9 /5) +32;
  console.log(cTemp+'\xB0C is ' + cToFahr + ' \xB0F.');
}

function fToC (fahr){
  let fTemp = fahr;
  let fToCel = (fTemp  -32)*5/9;
  console.log(fTemp+'\xB0C is ' + fToCel + ' \xB0F.');
}

cToF(60);
fToC(45);


//ex:12
// write this in your web browser console
function getUrl(){
  console.log(window.location.href);
}

console.log(document.URL);


//ex:13
const var_name = "afddfas";
const n = 203;
this[var_name]=n;
console.log(this[var_name]);


//ex:14
let filename = "myname.php";
console.log(filename.split(".").pop());
console.log(filename.split(".").shift());

filename = "myfile.js";
console.log(filename.split(".").pop());
console.log(filename.split(".").shift());