
var counter = 1;
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

var fullDot = "fas fa-circle";
var emptyDot = "far fa-circle";

$iList[0].className = fullDot;

timer = setInterval(carousel, 3000);

function carousel() {
  for (var i = 0; i < $iList.length; i++) {
    $iList[i].className = emptyDot;
  }
  if (counter > 4) {
    counter = 0;
  }
  $iList[counter].className = fullDot;
  $carouselImage.setAttribute("src", imagesSrc[counter]);
  counter++;
}

function move(moveCounter) {
  clearInterval(timer);
  for (var i = 0; i < $iList.length; i++) {
    $iList[i].className = emptyDot;
  }
  $iList[moveCounter].className = fullDot;
  $carouselImage.setAttribute("src", imagesSrc[moveCounter]);
  counter = moveCounter + 1;
  timer = setInterval(carousel, 3000);
}

var $dots = document.querySelector(".dots");

$dots.addEventListener("click", function (event) {
  move(Number(event.target.id));
})

var $left = document.getElementById("left");
var $right = document.getElementById("right");

$right.addEventListener("click", function (event) {
  if (counter > 4) {
    counter = 0;
  }
  move(counter);
})

$left.addEventListener("click", function (event) {
  if (counter === 1) {
    for (var i = 0; i < $iList.length; i++) {
      $iList[i].className = emptyDot;
    }
    $iList[4].className = fullDot;
    $carouselImage.setAttribute("src", imagesSrc[4]);
    counter = 5;
  } else {
    move(counter - 2)
  }
})
