/*

== makes a type conversion.
1 == '1' // true
1 == true // true
0 == false // true

=== first checks if the two things are of the same type. If they are not, it immediately return false. If they are, then it checks for equality.
No type conversion.

0 === false // false

*/

// To check the existence of a variable, we should check its type and see if it is undefined.

// It is common to make the following mistake.
// It'll say x doesn't exist although we know that it does.
var x = 0;
if (x) { // This gets converted to "if (x == true)"
  console.log('exists');
} else {
  console.log('does not exist');
}

// The correct way is to do the following:
if (typeof x !== 'undefined') {
  console.log('exists');
}

/*

Use === as default! You can even set JSHint to flag usages of == as a warning!

*/
