// JavaScript Navigator object
/*
The JavaScript Navigator provides information about the web browser and its capabilities. 
You can reference the Navigator object via the read-only window.navigator property. 

The Navigator object has properties that convey the browser’s information. For ex., the userAgent
is a property of the window.navigator object. It is a long string that identifies the web browser.
*/

window.navigator.userAgent;

// In Google Chrome, you may see the following output:
'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36'

/*
Note that the userAgent may be a little bit different, depending on the Google Chrome version.

The different web browser provides specific capabilities which are not standardized. It’s better not 
to use the userAgent to identify the web browser because some web browsers allow users to modify the 
userAgent to pretend they are using a different browser. 
*/



//  >>> JavaScript Navigator Properties & Methods :

window.navigator.appName; // Returns the full browser name.
window.navigator.appVersion; // Returns the browser version. However, it typically does not correspond to the actual version of the browser.
window.navigator.appCodeName; // Returns “Mozilla” even in non-Mozilla browsers.
window.navigator.buildId; // Return the build number for the web browser.
window.navigator.deviceMemory; // Returns the amount of device memory in gigabytes.
window.navigator.getVRDisplays(); //Returns an array of every VRDisplay instance if available.
window.navigator.language; // Returns the browser’s primary language.
window.navigator.storage ;// Returns the StorageManager object to interact with the Storage API.
window.navigator.vendor; // Returns the brand name of the browser

// and many more.....


