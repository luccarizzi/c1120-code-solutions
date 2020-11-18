// The Math Object

var num1 = 29;
var num2 = 6;
var num3 = 92;
var maximumValue = Math.max(num1, num2, num3);
console.log("value of maximumValue:", maximumValue);

var heroes = [
  "Spider-Man",
  "Batman",
  "Deadpool",
  "Starchild"
]
var randomNumber = Math.random();
randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log("value of randomIndex", randomIndex);

var randomHero = heroes[randomIndex];
console.log("value of randomHero:", randomHero);

// Arrays Method

var library = [
  {
    title: "HTML & CSS",
    author: "Jon Duckett"
  },
  {
    title: "JAVASCRIPT & JQUERY",
    author: "Jon Duckett"
  },
  {
    title: "Responsive Web Design with HTML5 and CSS",
    author: "Ben Frain"
  }
];

var lastBook = library.pop();
console.log("value of lastBook:", lastBook);

var firstBook = library.shift();
console.log("value of firstBook:", firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1,1);
console.log("value of library:", library);

// String Methods

var fullName = "Lucca Rizzi";
var firstAndLastName = fullName.split(" ");

console.log("value of firstAndLastName:", firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log("value of sayMyName:", sayMyName);
