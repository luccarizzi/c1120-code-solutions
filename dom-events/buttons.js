
function handleClick (event) {
  console.log("button clicked");
  console.log(event);
  console.log(event["target"]);
}

var clickButton = document.querySelector(".click-button");
clickButton.addEventListener("click", handleClick, false);

function handleMouseover (event) {
  console.log("button hovered");
  console.log(event);
  console.log(event["target"]);
}

var hoveredButton = document.querySelector(".hover-button");
hoveredButton.addEventListener("mouseover", handleMouseover, false);

function handleDoubleClick (event) {
  console.log("button double-clicked");
  console.log(event);
  console.log(event["target"]);
}

var doubleClickedButton = document.querySelector(".double-click-button");
doubleClickedButton.addEventListener("dblclick", handleDoubleClick, false);
