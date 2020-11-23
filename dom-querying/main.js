console.log("hello, world");

var h1Element = document.querySelector("h1");

console.log("h1 element query:", h1Element);
console.dir(h1Element);

var explanationId = document.querySelector("#explanation");

console.log("explanation id query:", explanationId);
console.dir(explanationId);

var hintClass = document.querySelector(".hint");

console.log("hint class query:", hintClass);
console.dir(hintClass);

var pElements = document.querySelectorAll("p");

console.log("all p element query:", pElements);

var exampleLinkClass = document.querySelectorAll(".example-link");

console.log("all example-link class query:", exampleLinkClass);
