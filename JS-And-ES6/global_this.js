// ES2020 introduced the globalThis object that provides a standard way to access the global object across environments.

/*In web browsers, the global object is window or frames.

However, the Web Workers API doesn’t have the window object because it has no browsing context. 
Hence, the Web Workers API uses self as a global object.

Node.js, on the other hand, uses the global keyword to reference the global object. */

// **To standardize this, ES2020 introduced the globalThis that is available across environments.

const canFetch = typeof globalThis.fetch === "function";

console.log(canFetch); //run in web browser

/*The code checks if the fetch() function is a property of the global object. In the web browsers,
 the globalThis is the window object. Therefore, if you run this code on the modern web browser, 
 the canFetch will be true. */
