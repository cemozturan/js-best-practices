/*

We can declare certain properties as readonly. It makes sense especially when we are creating a function as a property of an object.

Trying to overwrite them will throw an error.

*/

var obj = {};

Object.defineProperty(obj, 'someProp', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'This is read only'
});

console.log(obj.someProp); // 'This is read only'

// In non-strict mode, the following doesn't throw an error but silently fails to overwrite the value.
// In strict mode, it'll throw.
obj.someProp = 'cem kebabson';

console.log(obj.someProp); // 'This is read only'
