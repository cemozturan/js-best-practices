/*

There are 3 rules for automatic semicolon insertion.

*/

/*

1) The compiler keeps reading characters from left to right, even goes on to the next line. When it sees a charcter that isn't valid after the preceding set of characters,
it checks the previous characters. If it's a new line char, then it inserts a semi colon.

*/

// After reading 12, it moves on to the next line and reads v. "12v" doesn't make sense, and it sees that before "v" there was a new line char,
// so it inserts a semi colon and we get "var a = 12;"
// It then does the same with the next line: "var b = 13;"
var a = 12
var b = 13

// If the offending token is a curly brace, a semicolon is inserted in front of the curly brace.
// (a)} is not allowed, so compiler inserts a semicolon and we get: "log(a);}"
if (a){console.log(a)}

// The following can break, because a[...] is valid syntax, so we won't get an ASI after "var c = b + a"
var a2 = 12
var b2 = 13

var c2 = b2 + a2

['item', 'menu']
  .forEach(function (element) {
    console.log(element);
  })

// This happens much more often when using IIFEs. Below, we won't get an ASI after "b3 + a3" and "a3(func)" will get invoked as a function.

var a3 = 12
var b3 = 13

var c3 = b3 + a3

(function() {
  console.log('inside my life');
  console.log('doing secret stuff...');
}())

/*

2) we get a semicolon insertions at the end of the input stream. So if the following line was the end of the file,
then we'd get console.log(a+b);
console.log(a+b)

*/

/*

3) If restricted productions (return, continue, break, throw) are separated from the next token by at least one line terminator,
then an ASI happens.

*/

// The following will not return { hi: 'hello'} as an ASI will happen and we'll get "return;"
function someFunc() {
  return
  {
    hi: 'hello'
  }
}

/*

Use semicolons in conjunction with JSHint or ESLint!

*/
