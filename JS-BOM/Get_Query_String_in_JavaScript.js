// Get Query String in JavaScript
// To get a query string you can access the search property of the location object
location.search = '?type=list&page=20';


// To work with the query string, you can use the URLSearchParams object.

const urlParams = URLSearchParams(location.search);

// The URLSearchParams is an iterable object, therefore you can use the for...of structure to iterate over its elements which are query string parameters:

for(const [key, value] of urlParams){
  console.log(`${key}:${value}`);
}


// >>> Useful URLSearchParams methods :
/*keys() returns an iterator that iterates over the parameter keys.
values() returns an iterator that iterates over the parameter values.
entries() returns an iterator that iterates over the (key, value) pairs of the parameters. */

for (const key of urlParams.keys()) {
    console.log(key);
}

for (const value of urlParams.values()) {
  console.log(value);
}

for (const entry of urlParams.entries()) {
  console.log(entry);
}



// >>> Check if a query string parameter exists :
// The has() method of the URLSearchParams determines if a parameter with a specified name exists.

console.log(urlParams.has("type")); // true
console.log(urlParams.has("foo"));  // false