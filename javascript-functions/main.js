
function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log("convertMinutesToSecondsResult:", convertMinutesToSecondsResult);

function greet(name) {
  var greeting = "Hey, " + name + "!";
  return greeting;
}

var greetResult = greet("Peter");
console.log("greetResult:", greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(20,7);
console.log("getAreaResult:", getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName({ firstName: "Peter", lastName: "Steele"});
console.log("getFirstNameResult:", getFirstNameResult);

function getLastElement(array) {
  var arrLen = array.length;
  var lastIndex = arrLen - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var getLastElementResult = getLastElement([ "microfone", "guitar", "bass", "keyboard", "drumkit" ]);
console.log("getLastElementResult:", getLastElementResult);
