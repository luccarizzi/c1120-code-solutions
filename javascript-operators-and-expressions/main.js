/* eslint-disable no-console */

var width = 10;
var height = 3;
var area = width * height;

console.log("value of area:", area);
console.log("type of area:", typeof area);

var payment = 100;
var bill = 74.3;
var change = payment - bill;

console.log("value of change:", change);
console.log("type of change:", typeof change);

var quizzes = 8;
var midterm = 9;
var final = 8.5;
var grade = (quizzes + midterm + final) / 3;

console.log("value of grade:", grade);
console.log("type of grade:", typeof grade);

var firstName = "Lucca";
var lastName = "Rizzi";
var fullName = firstName + " " + lastName;

console.log("value of fullName:", fullName);
console.log("type of fullName:", typeof fullName);

var pH = 8;
var isAcidic = pH < 7;

console.log("value of isAcidic:", isAcidic);
console.log("type of isAcidic:", typeof isAcidic);

var headCount = 298;
var isSparta = headCount == 300;

console.log("value of isSparta:", isSparta);
console.log("type of isSparta:", typeof isSparta);

var motto = fullName;
motto = fullName + " is the GOAT";

console.log("value of motto:", motto);
console.log("type of motto:", typeof motto);
