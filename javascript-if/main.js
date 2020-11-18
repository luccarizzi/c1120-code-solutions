/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// 1

function isUnderFive(number) {
  if (number < 5) {
    return true
  } else {
    return false
  }
};

console.log("Is 4 under 5?", isUnderFive(4));
console.log("Is 5 under 5?", isUnderFive(5));
console.log("Is 10 under 5?", isUnderFive(10));

// 2

function isEven(number) {
  if (number % 2 === 0) {
    return true
  } else {
    return false
  }
};

console.log("Is 4 even?", isEven(4));
console.log("Is 10 even?", isEven(10));
console.log("Is 5 even?", isEven(5));

// 3

function startsWithJ(string) {
  if (string[0] === "J") {
    return true
  } else {
    return false
  }
};

console.log("Does JavaScript start with a J?", startsWithJ("JavaScript"));
console.log("Does PHP start with a J?", startsWithJ("PHP"));
console.log("Does HTML start with a J?", startsWithJ("HTML"));
console.log("Does Java start with a J?", startsWithJ("Java"));
console.log("Does Kotlin start with a J?", startsWithJ("Kotlin"));
console.log("Does C# start with a J?", startsWithJ("C#"));

// 4

var lucca = {
  name: "Lucca Rizzi",
  age: 28
};

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true
  } else {
    return false
  }
};

console.log("Is Lucca old enough to drink?", isOldEnoughToDrink(lucca));

// 5

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true
  } else {
    return false
  }
};

console.log("Is Lucca old enough to drive?", isOldEnoughToDrive(lucca));

// 6

function isOldEnoughToDrinkAndDrive(person) {
  return false
};

console.log("Is Lucca old enough to drink and drive?", isOldEnoughToDrinkAndDrive(lucca));

// 7

function categorizeAcidity(pH) {
  if (pH === 7) {
    return "The pH level " + pH + " is neutral."
  } else if (pH >= 0 && pH < 7) {
    return "The pH level " + pH + " is acid."
  } else if (pH > 8 && pH <= 14) {
    return "The pH level " + pH + " is basic."
  } else {
    return "Invalid pH level."
  }
};

console.log("What pH level is -1?", categorizeAcidity(-1));
console.log("What pH level is 14.0000001?", categorizeAcidity(14.0000001));
console.log("What pH level is 7?", categorizeAcidity(7));
console.log("What pH level is 2?", categorizeAcidity(2));
console.log("What pH level is 9?", categorizeAcidity(9));

// 8

function introduceWarnerBro(name) {
  if (name === "yakko" || name === "wakko") {
    return "We're the warner brothers!"
  } else if (name === "dot") {
    return "I'm cute~"
  } else {
    return "Goodnight everybody!"
  }
};

console.log("Who are you?", introduceWarnerBro("yakko"))
console.log("Who are you?", introduceWarnerBro("wakko"))
console.log("Who are you?", introduceWarnerBro("dot"))
console.log("Who are you?", introduceWarnerBro("minerva"))
