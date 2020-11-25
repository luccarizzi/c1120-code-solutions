
var allSpan = document.querySelectorAll("span");
var accuracy = document.querySelector("#accu");
var question = document.querySelector("#again");
var questionClass = "flex col-1 justify-align new-game";

var i = 0;
var scoreCounter = 0;

document.addEventListener("keydown", function (e) {
  if (allSpan[i].textContent === e.key) {
    if (i === allSpan.length - 1) {
      allSpan[i].className = "font-green";
      scoreCounter++;
      i++;
    } else {
      allSpan[i].className = "font-green";
      allSpan[i + 1].className = "underscore";
      scoreCounter++;
      i++;
    }
  } else {
    allSpan[i].className = "font-red underscore-red";
    scoreCounter--;
  }
  if (i === 30) {
    accuracy.textContent = "Accuracy: " + (scoreCounter / 30 * 100).toFixed(2) + "%";
    question.className = questionClass + " display";
  }
})

var resetGameButton = document.querySelector("#play-again-yes");

resetGameButton.addEventListener("click", function (e) {
  console.log("reset pressed");
  i = 0;
  scoreCounter = 0;
  for (var j = 0; j < allSpan.length; j++) {
    allSpan[j].className = "";
  }
  allSpan[0].className = "underscore";
  question.className = questionClass;
})
