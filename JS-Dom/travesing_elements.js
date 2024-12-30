//  parentNode attribute :
// how to get the parent node of an element by using the JavaScript parentNode attribute of the Node object.

let parent = node.parentNode;
/*The parentNode is read-only.

The Document and DocumentFragment nodes do not have a parent. Therefore, the parentNode will always be null.

If you create a new node but haven’t attached it to the DOM tree, the parentNode of that node will also be null. */




// how to select the next siblings, previous siblings, and all siblings of an element. 
// >>>>> Get the Siblings of element :

let nextSibling = currentNode.nextElementSibling;

let current = document.querySelector('.current');
let prevSibling = currentNode.previousElementSibling;



// Get all siblings of an element


let getSiblings = function (e) {
  // for collecting siblings
  let siblings = []; 
  // if no parent, return no sibling
  if(!e.parentNode) {
      return siblings;
  }
  // first child of the parent node
  let sibling  = e.parentNode.firstChild;
  
  // collecting siblings
  while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
          siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
  }
  return siblings;
};

/*The nextElementSibling returns the next sibling of an element or null if the element is the last one in the list.

The previousElementSibling returns the previous sibling of an element or null if the element is the first one in the list.

To get all siblings of an element, you can use a helper function that utilizes the nextElementSibling property. */




// >>>> Get Children of an Element :
// how to get the first child element, last child element, and all children of a specified element.

// Get the first child element :
let firstChild = parentElement.firstChild; 

let content = document.getElementById('menu');
firstChild = content.firstChild.nodeName;
console.log(firstChild);

/*he Console window show #text because a text node is inserted to maintain the whitespace between the openning <ul> and <li> tags. This whitespace creates a #text node.

Note that any whitespace such as a single space, multiple spaces, returns, and tabs will create a #text node. To remove the #text node, you can remove the whitespaces as follows:
 */

// ___----  or -----____Or to get the first child with the Element node only, you can use the firstElementChild property:

let firstElementChild = parentElement.firstElementChild;


// Get the last child element

let lastChild = parentElement.lastChild; 

lastChild = parentElement.lastElementChild;


// Get all child elements :
// To get a live NodeList of child elements of a specified element, you use the childNodes property:

let children = parentElement.childNodes;

children = parentElement.children;

/*The firstChild and lastChild return the first and last child of a node, which can be any node type including text node, comment node, and element node.
The firstElementChild and lastElementChild return the first and last child Element node.
The childNodes returns a live NodeList of all child nodes of any node type of a specified node. The children return all child Element nodes of a specified node. */

