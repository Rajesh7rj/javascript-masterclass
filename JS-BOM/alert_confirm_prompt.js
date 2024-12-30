// >>> alert() :

// The browser can invoke a system dialog to display information to the user.

/*The system dialog is not related to the webpage being shown in the browser. It also does not contain 
any HTML. Its appearance depends solely on the current operating system and browser, rather than CSS. */

alert(message)  // or   window.alert(message);

/*Note that the alert dialog is synchronous and modal. It means that the code execution stops when 
a dialog is displayed and resumes after it has been dismissed. For example, the following code display an alert dialog after three seconds: */

alert("Welcome to JavaScriptTutorial.net!")



// >>> confirm() :

// To invoke a dialog with a question and two buttons OK and Cancel, you use the confirm() method of the window object:
window.confirm(question);

/*In this syntax:

The question is an optional string to display in the dialog.
The result is a Boolean value indicating whether the OK or Cancel button was clicked. If the OK button is clicked, the result is true; otherwise, the result is false.
Note that if a browser ignores in-page dialogs, then the result is always false. */

// The confirmation dialog is modal and synchronous. It means that the code execution stops when a dialog is displayed and resumes after it has been dismissed.

let result = window.confirm("Are you sure you want to delete?");

let message = result ? "You clicked OK button." : "You clicked Cancle button." 

alert(message);



// >>> prompt() :

// JavaScript prompt() method to display a dialog with a message prompting for user input.
// The prompt() method instructs the web browser to display a dialog with a text, text input field, and two buttons OK and Cancel.
window.prompt(message, default);

/*The message is a string to display. If you omit it, nothing will display on the dialog.
The default is a string containing the default value of the text input field.
The result is a string that contains the text entered by the user or null.

Like alert() and confirm(), the prompt() is modal and synchronous. In other words, the code execution stops when the dialog is displayed and resumes after the dialog has been dismissed. */

// 1) Display a prompt dialog :
let lang = prompt('What is your favorite programming language?');

let feedback = lang.toLowerCase() === 'javascript' ? `It's great!` :
    `It's ${lang}`;

alert(feedback);


// 2) Convert a user input to a number :
// The result of the prompt() is a string. If you want to get the answer as a number, you should always cast the string into a number.
let ageStr = prompt('How old are you?');
let age = Number(ageStr);

feedback = age >= 16 ?
    "You're eligible to join." :
    'You must be at least 16 year old to join.';

alert(feedback);