/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

// 1

function getNumbersToTen () {
  var numbers = [];
  currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber += 1;
  }
  return numbers;
}

console.log("value of getNumbersToTen:", getNumbersToTen());

// 2

function getEvenNumbersToTwenty () {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log("value of getEvenNumbersToTwenty:", getEvenNumbersToTwenty());

// 3

function repeatWord(word, times) {
  var count = 1;
  var repeated = "";
  while (count <= times) {
    repeated += word;
    count += 1;
  }
  return repeated;
}

console.log("value of repeatWord;", repeatWord("Hey ",5));

// 4

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

logEachCharacter("My name is")
logEachCharacter("");
logEachCharacter("Lucca");

// 5

function doubleAll (numbers) {
  doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    var doubledNum = numbers[i] * 2;
    doubled.push(doubledNum);
  }
  return doubled;
}

console.log("value of doubleAll:", doubleAll([1,2,3,4]));

// 6

function getKeys (object) {
  keys = [];
  for (x in object) {
    keys.push(x);
  }
  return keys;
}

var car = {
  year: 2006,
  make: "Toyota",
  model: "Corolla"
}

console.log("value of getKeys:", getKeys(car));

// 7

function getValues (object) {
  var values = [];
  for (x in object) {
    values.push(object[x]);
  }
  return values;
}

console.log("value of getValues:", getValues(car));
