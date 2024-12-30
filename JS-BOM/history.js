//  JavaScript history object. 
// how to access the browser’s session history by using the JavaScript history object.

/*
When you launch the web browser and open a new webpage, the web browser creates a new entry in its history stack.

If you navigate to another webpage, the web browser also creates a new entry in the history stack.

The history stack stores the current page and previous pages that you visited.

To manipulate the history stack, you use the history object which is a property of the window object:
*/
window.history;

// For the security reason, it’s not possible to query the pages that a user have visited. However, you can use the history object to navigate back and forth without knowing the exact URL.



//  >>> Using JavaScript history for navigation :
// Move backward : To move backward through history, you use the back() method
window.history.back(); // or
history.back();


// Move forward : Similarly, you can move forward by using the forward() method
window.history.forward(); // or
history.forward();


// Move to a specific URL in the history 
/*To move to a specific URL in the history stack, you use the go() method. The go() method accepts 
an integer that is the relative position to the current page. The current page’s position is 0. */

window.history.go(0) //current page
window.history.go(-1) // previous page
history.go(1); // forward, next page


// history.length : To determine the number of URLs in the history stack, you use the length property:
history.length;
