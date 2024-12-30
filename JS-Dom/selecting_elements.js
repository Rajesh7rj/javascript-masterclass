// >>> JavaScript getElementById() method :

// The document.getElementById() method returns an Element object that represents an HTML element with an id that matches a specified string.
// If the document has no element with the specified id, the document.getElementById() returns null.

// Unlike the querySelector() method, the getElementById() is only available on the document object, not other elements.

const element = document.getElementById(id);

{/* <p id="message">A paragraph</p> */}
const element1 = document.getElementById("message");

/*The id is unique within an HTML document. However, HTML is a forgiving language. If the HTML 
document has multiple elements with the same id, the document.getElementById() method returns the 
first element it encounters. */



// >>> JavaScript getElementsByName() :
// Unlike the id attribute, multiple HTML elements can share the same value of the name attribute like this:
{/* <input type="radio" name="language" value="JavaScript"> */}
{/* <input type="radio" name="language" value="TypeScript"> */}

// To get all elements with a specified name, you use the getElementsByName() method of the document object:

let elements = document.getElementsByName(name);

// The getElementsByName() accepts a name which is the value of the name attribute of elements and returns a live NodeList of elements.

// The return collection of elements is live. It means that the return elements are automatically updated when elements with the same name are inserted and/or removed from the document.
// The NodeList is an array-like object, not an array object.


// >>> JavaScript getElementsByTagName() :
/* The getElementsByTagName() method accepts a tag name and returns a live HTMLCollection of elements 
with the matching tag name in the order which they appear in the document.*/

let elements1 = document.getElementsByTagName(tagName);
// Note that the HTMLCollection is an array-like object, like arguments object of a function.

// The getElementsByTagName() accepts a tag name and returns a list of elements with the matching tag name.



// >>> JavaScript getElementsByClassName :
/*The getElementsByClassName() method returns an array-like of objects of the child elements with a 
specified class name. The getElementsByClassName() method is available on the document element or any other elements.

When calling the method on the document element, it searches the entire document and returns the 
child elements of the document: */

let elements2 = document.getElementsByClassName(names);



// >>> JavaScript querySelector : 
// use the JavaScript querySelector() and querySelectorAll() to find elements based on CSS selectors.

// JavaScript querySelector() and querySelectorAll() methods :
// The querySelector() is a method of the Element interface. The querySelector() method allows you to select the first element that matches one or more CSS selectors.

let element3 = parentNode.querySelector(selector);


// Besides the querySelector(), you can use the querySelectorAll() method to select all elements that match a CSS selector or a group of CSS selectors:
let elementList = parentNode.querySelectorAll(selector);

// The querySelectorAll() method returns a static NodeList of elements that match the CSS selector. If no element matches, it returns an empty NodeList.

// To convert the NodeList to an array, you use the Array.from() method like this
let nodeList = document.querySelectorAll(selector);
let elements4 = Array.from(nodeList);


// 1) Universal selector
element = document.querySelector('*');
elements = document.querySelectorAll('*');

// 2) Type selector
let firstHeading = document.querySelector('h1');
let heading2 = document.querySelectorAll('h2');

// 3) Class selector 
let note = document.querySelector('.menu-item');
let notes = document.querySelectorAll('.menu-item');

// 4) ID Selector
let logo = document.querySelector('#logo');

// 5) Attribute selector
let autoplay = document.querySelector('[autoplay]');
let autoplays = document.querySelectorAll('[autoplay]');


// Grouping selectors
let element_s = document.querySelectorAll('div, p');



// Combinators
// 1) descendant combinator
// To find descendants of a node, you use the space ( ) descendant combinator syntax:
let links = document.querySelector('p a');


// 2) Child combinator
// The > child combinator finds all elements that are direct children of the first element:
let listItems = document.querySelectorAll('ul > li');
let listItems1 = document.querySelectorAll('ul.nav > li');

// 3) General sibling combinator
// The ~ combinator selects siblings that share the same parent:
let link_s = document.querySelectorAll('p ~ a');

// 4) Adjacent sibling combinator
// For example, h1 + a matches all elements that directly follow an h1:
let links1 = document.querySelectorAll('h1 + a');

// And select the first <a> that directly follows an h1:
let links2 = document.querySelector('h1 + a');



// >>> Pseudo :
// 1) Pseudo-classes
// For example, the li:nth-child(2) selects the second <li> element in a list:
let listItem = document.querySelectorAll('li:nth-child(2)');

// 2) Pseudo-elements 
// For example, p::first-line matches the first-line of all div elements:
let links3 = document.querySelector('p::first-line');    



