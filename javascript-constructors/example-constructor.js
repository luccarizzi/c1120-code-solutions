
function ExampleConstructor() {

}

console.log("value ExampleConstructor prototype:", ExampleConstructor.prototype);
console.log("typeof ExampleConstructor:", typeof ExampleConstructor);

var anExampleConstructor = new ExampleConstructor();

console.log("variable anExampleConstructor:", anExampleConstructor);

console.log("anExampleConstructor instanceof ExampleConstructor:", anExampleConstructor instanceof ExampleConstructor);
