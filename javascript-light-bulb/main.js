
var lightBulbButton = document.querySelector("button");
var backgroundArea = document.querySelector("div");

var i = 1;
lightBulbButton.addEventListener("click", function (e) {
  if (i % 2 === 0) {
    lightBulbButton.className = "light-bulb-off";
    backgroundArea.className = "background-off";
  } else {
    lightBulbButton.className = "light-bulb-on";
    backgroundArea.className = "background-on";
  }
  i++;
})
