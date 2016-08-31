/*

Hoisting: JS's default behaviour of moving all declarations to the top of the file.
Technically, it doesn't move them, it simply goes over the code twice. In the first time,
it registers all the declarations, and in the second time it actually executes the code.

*/

/* Ex #1 */
console.log(myVar); // undefined
var myVar = 10;

/* Ex #2 */
var myVar2 = 10;

function func2() {
  myVar2 = 25;
}

func2();
console.log(myVar2); // 25

/* Ex #3 */
var myVar3 = 10;

function func3() {
  myVar3 = 25;
  var myVar3;
}

func3();
console.log(myVar3); // 10

/*

All var declarations should be at the top of the containing scope to avoid any confusion!

*/
