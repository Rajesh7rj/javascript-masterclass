// The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML documents.

/*The DOM represents an HTML document as a tree of nodes. The DOM provides functions that allow you 
to add, remove, and modify parts of the document effectively. 

Note that the DOM is cross-platform and language-independent ways of manipulating HTML and XML documents.
*/


// >>> A document as a hierarchy of nodes :

/*In this DOM tree, the document is the root node. The root node has one child node which is the <html> element. The <html> element is called the document element.

Each document can have only one document element. In an HTML document, the document element is the <html> element. Each markup can be represented by a node in the tree.
 */

// A node is a part of the DOM tree that is used to get access to every component of a webpage.
// To get the type of node, you use the nodeType property:
node.nodeType;


// >>> The nodeName and nodeValue properties :
/*The values of these properties depend on the node type. For example, if the node type is the element 
node, the nodeName is always the same as the element’s tag name and nodeValue is always null. */


// >>> Node and Element :
/*Sometimes it’s easy to confuse between the Node and the Element.

A node is a generic name of any object in the DOM tree. It can be any built-in DOM element such as 
the document. Or it can be any HTML tag specified in the HTML document like <div> or <p>. 

An element is a node with a specific node type Node.ELEMENT_NODE, which is equal to 1.

In other words, the node is the generic type of element. The element is a specific type of the node 
with the node type Node.ELEMENT_NODE. 


Note that the getElementById() and querySelector() returns an object with the Element type while 
getElementsByTagName() or querySelectorAll() returns NodeList which is a collection of nodes.*/


// >>> Node Relationships :
/*For example, <body> is a child node of the <html> node, and <html> is the parent of the <body> node.

The <body> node is the sibling of the <head> node because they share the same immediate parent, which is the <html> element. */



