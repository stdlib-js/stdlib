const Proxy = require('../lib/proxy/ctor/polyfill'); // Assuming the polyfill is inside the 'lib' folder

// Define a simple handler
const handler = {
    get: (target, prop) => prop in target ? target[prop] * 2 : 0
};

// Create a proxied object
const obj = new Proxy({}, handler);

// Add a property
obj.a = 5;

// Check if the polyfill works
console.log(obj.a);  // Should output 10, since it's doubled by the 'get' handler
