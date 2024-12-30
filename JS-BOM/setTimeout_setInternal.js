// >>>  setTimeout() :
// JavaScript setTimeout() that sets a timer and executes a callback function after the timer expires.
let timeoutID  = setTimeout(cb ,[delay], arg1, arg2,...etc);

/*cb is a callback function to be executed after the timer expires.
delay is the time in milliseconds that the timer should wait before executing the callback function. If you omit it, the delay defaults to 0.
arg1, arg2, … are arguments passed to the cb callback function. */


// The timeoutID can be used to cancel timeout by passing it to the clearTimeout() method.
function showAlert() {
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!');
}

function clearAlert() {
    clearTimeout(timeoutID);
}

// When you click the Show button, the showAlert() is invoked and shows an alert dialog after 3 seconds. To cancel the timeout, you click the Cancel button.



//  >>> setInterval() :
// JavaScript setInterval() to repeatedly call a function with a fixed delay between each call.
intervalID = setInterval(callback, delay,[arg1, arg2, ...etc]);

// The setInterval() returns a numeric, non-zero number that identifies the created timer. You can pass the intervalID to the clearInterval() to cancel the timeout.

// Note that the setInterval() works like the setTimeout() but it repeatedly executes a callback once every specified delay.

let intervalID;
 
    function toggleColor() {
      let e = document.getElementById('flashtext');
      e.style.color = e.style.color == 'red' ? 'blue' : 'red';
    }

    function stop() {
      clearInterval(intervalID);
    }

    function start() {
       intervalID = setInterval(toggleColor, 1000); 
    }

/*setInterval() and clearInterval() to change the color of a heading once a second once you press 
the Start button. If you stop the button, the clearInterval() will cancel the timeout. */