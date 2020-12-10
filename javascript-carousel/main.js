
var count = 1;
var timer = null;
var $carouselImage = document.getElementById("carousel-image");
var imagesSrc = [
  "images/001.png",
  "images/004.png",
  "images/007.png",
  "images/025.png",
  "images/039.png"
]
var $iList = document.querySelectorAll("i");

$iList[0].setAttribute("class", "fas fa-circle");

function carousel() {
  if (count === 0) {
    $carouselImage.setAttribute("src", imagesSrc[count]);
    // console.log(count);
    $iList[0].setAttribute("class", "fas fa-circle");
    $iList[4].setAttribute("class", "far fa-circle");
    count++;
  } else if (count < 4) {
    $carouselImage.setAttribute("src", imagesSrc[count]);
    // console.log(count);
    $iList[count].setAttribute("class", "fas fa-circle");
    $iList[count - 1].setAttribute("class", "far fa-circle");
    count++;
  } else {
    $carouselImage.setAttribute("src", imagesSrc[count]);
    // console.log(count);
    // console.log("Lap")
    $iList[4].setAttribute("class", "fas fa-circle");
    $iList[count - 1].setAttribute("class", "far fa-circle");
    count = 0;
  }
}

timer = setInterval(carousel, 500);

function move(moveCount) {
  // console.log(count);
  clearInterval(timer);
  if (count === 0) {
    $iList[4].setAttribute("class", "far fa-circle");
  } else {
    $iList[count - 1].setAttribute("class", "far fa-circle");
  }
  $iList[moveCount].setAttribute("class", "fas fa-circle");
  $carouselImage.setAttribute("src", imagesSrc[moveCount]);
  count = moveCount;
  timer = setInterval(carousel, 500);
}

var $dots = document.querySelector(".dots");

$dots.addEventListener("click", function(event) {
  if (event.target.nodeName === "I") {
    var moveCount = Number(event.target.id)
    move(moveCount);
  }
})
