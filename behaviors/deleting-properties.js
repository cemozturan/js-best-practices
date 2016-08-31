/*

We can delete properties, but not objects or variables!
In non-strict mode, JS will not delete the object and silently carry on.
In strict mode, it'll throw an error when you try to delete.

*/

var obj = {a: 1, b:2};
var myVar = 10;

delete obj.a;
delete myVar;
console.log(obj); // {b:2}
console.log(myVar); // 10 (object itself is not deleted)

delete obj;
console.log(obj); // {b:2} (object itself is not deleted)
