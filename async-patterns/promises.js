/*

Use named function declarations.
Make them return promises so that you can chain them, and avoid messy christmas tree type of look.

*/

function asyncMethod(message) {
	return new Promise(function (fulfill, reject) {
		setTimeout(function () {
			console.log(message);
			fulfill();
		}, 500)
	});
}

function findUser() {
	return asyncMethod('Find User')
}

function validateUser() {
	return asyncMethod('validate User')
}

function doStuff() {
	return asyncMethod('do stuff')
}
asyncMethod('Open DB Connection')
	.then(findUser)
	.then(validateUser)
	.then(doStuff)
	.then(function () {})

// The parameter being passed in to the fulfill method is the return value of the promise:

function asyncMethod2(message) {
	return new Promise(function (fulfill, reject) {
		setTimeout(function () {
			console.log(message);
			fulfill(15);
		}, 500)
	});
}

// Instead of .then().catch(),
// we can also pass two functions into then, the first being success, the second being error
var myVar = asyncMethod2("hello")
	.then(function(response){
		console.log("Result: " + response); // Result: 15
	})
	.catch(function(error){
		console.log("ERROR: " + error);
	});

function asyncMethodError(message) {
	return new Promise(function (fulfill, reject) {
		setTimeout(function () {
			reject(Error("This failed"));
		}, 500)
	});
}

var myVarError = asyncMethodError("hello")
	.then(function(response){
		console.log("Result: " + response);
	})
	.catch(function(error){
		console.log(error); // This runs and prints "Error: This failed"
	});
