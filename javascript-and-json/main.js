
var library = [
  {
    isbn: "978-1118531648",
    title: "JavaScript and JQuery",
    author: "Jon Duckett"
  },
  {
    isbn: "978-1118008188",
    title: "HTML and CSS",
    author: "Jon Duckett"
  },
  {
    isbn: "978-1839211560",
    title: "Responsive Web Design with HTML5 and CSS",
    author: "Ben Frain"
  }
]

console.log("typeof library:", typeof(library));

console.log("library:", library);

var jsonLibrary = JSON.stringify(library);

console.log("typeof jsonLibrary:", typeof(jsonLibrary));

var string = '"11135019, Lucca"';

console.log("string:", string);

console.log("typeof string:", typeof(string));

var jsonString = JSON.stringify(string);

console.log("typeof jsonString:", jsonString);
