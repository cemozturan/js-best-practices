/*

Two ways to create them:

1) Declaration

function someName() {

}

2) Expression

var someName = function() {

}

*/

/* Ex #1*/

myFunc(); // hi

 // When the compiler sees the following declaration, it is going to
 // move the whole thing to the top, including the function content.
 // So, no matter where the function is called within the containing scope,
 // it'll run without issues.
function myFunc() {
  console.log("hi");
}

myFunc(); // hi

/* Ex #2 */

expression(); // Throws an error, expression is not a function!

// The compiler will see the variable, move "var expression;" to the top, and the line above will throw an error.
var expression = function() {
  console.log("Hello");
}

expression(); // Hello

/*

1) First, declare all the variables at the top of the scope.
2) Write all the functions next
3) And then, run code

*/

// variable first
var x =10;
// functions next
function print(inp) {
  // variable first
  var x = 0;
  // fucntions next
  function log() {
    // log stuff
  }
  // run code
  console.log(inp);
}
// run code
print(10);
