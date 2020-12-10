
var $heading = document.querySelector("h1");

window.setInterval(function () {
  $heading.textContent = "Hello There";
}, 2*1000);
