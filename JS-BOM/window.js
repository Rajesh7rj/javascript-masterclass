// The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
/*The Browser Object Model (BOM) in JavaScript includes the properties and methods for JavaScript to 
interact with the web browser. BOM provides you with a window objects, for example, to show the width and
height of the window. It also includes the window. screen object to show the width and height of the screen. */

// >>> window object
// JavaScript window object which is the global object of JavaScript in the browser and exposes the browser’s functionality.

/*The global object of JavaScript in the web browser is the window object. It means that all variables 
and functions declared globally with the var keyword become the properties and methods of the window object.  */

var counter = 1;  // >>> write this code in the browser's console
var showCounter = () => console.log(counter);

console.log(window.counter); 
window.showCounter();

// If you don’t want to pollute the window object, you can use the let keyword to declare variables and functions.
let month = "January";
console.log(window.month);



// >>> The window object exposes the browser’s functionality :
// 1) Window size :
/*The innerWidth and innerHeight properties return the size of the page viewport inside the browser window (not including the borders and toolbars).
The outerWidth and outerHeight properties return the size of the browser window itself. 

document.documentElement.clientWidth and document.documentElement.clientHeight properties indicate the width and height of the page viewport.*/


// To get the size of the window, you use the following snippet:

const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


// 2) Open a new window :

window.open(url, windowname, [windowFeatures]);
window.open('http://localhost:3000/main.html', "main", "width = 500 height = 400");

let features = 'height=600,width=800',
    url = 'http://localhost/js/about.html';
let jsWindow = window.open(url, 'about', features);

// To load another URL on an existing window, you pass an existing window name to the window.open() method.
// window.open('http://localhost/js/contact.html','about');

setTimeout(() => {
    window.open('http://localhost/js/contact.html', 'about')
}, 3000);

// >>> write this code in the browser's console
jsWindow = window.open(
  '',
  'untitled',
  'height=600,width=800');

setTimeout(() => {
  window.open('http://google.com', 'untitled')
}, 3000);
// The following code opens a new window that loads the webpage about.html and then after 3 seconds, it loads the webpage contact.html in the same window


// 3) Resize a window :
window.resizeTo(width,height);

jsWindow = window.open(
  '', // <<< url
  '', // <<< window name
  'height=600,width=800');

setTimeout(() => {
  jsWindow.resizeTo(600, 300);
}, 3000);

// The window.resizeBy() method allows you to resize the current window by a specified amount:
setTimeout(() => {
  jsWindow.resizeBy(-100, -100);
}, 3000);


// 4) Move a window :
// To move a window to a specified coordinate, you use the moveTo() method:
window.moveTo(x, y); //x and y are horizontal and vertical coordinates to be moved to

setTimeout(() => {
  jsWindow.moveTo(500, 500);
}, 3000);

setTimeout(() => {
  jsWindow.moveBy(100, -100);
}, 3000);


// 5) Close a window :
window.close();
setTimeout(() => {
  jsWindow.close();
}, 3000);


// 6) The window.opener property :
/* A newly created window can reference back to the window that opened it via the window.opener 
property. This allows you to exchange data between the two windows. */