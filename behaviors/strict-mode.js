/*

'use strict': Prevents JS from "helping" you.

Examples below are allowed when we are not in strict mode, but they all can lead to unexpected behavior and
none of them are allowed in the strict mode.

*/

/* Global variables */
function print(text) {
  message = text; // error -> strict mode doesn't allow global variables
  console.log(message);
}

/* Overwriting readonly properties */
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

/* Deleting objects or variables */
// In non-strict mode, JS will not delete the object and silently carry on.
// In strict mode, it'll throw an error when you try to delete.
var obj = {a: 1, b:2};
var myVar = 10;

delete obj.a;
delete myVar; // ERROR

/* Dupes */

// In strict mode, the following would error saying that functions cannot have duplicate parameter names.
// In non-strict mode, it is allowed.
function xxx(a,b,a){
  console.log(a);
}
xxx(1,2,3); // 3

/* Octals and hexidecimals */

// In strict mode, the following is not allowed, it says a number cannot start with 0.
// If you really want to use octal, then you use parseInt: var a = parseInt(12, 8);
var a = 012; // Gets converted to octal since it starts with 0, so it is actually equal to 10.
var b = 0x12; // Hexidecimal, so it is actually 18
console.log(a+b); // 28
