
var count = 1;
var timerImages = null;
var timerDots = null;
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

function carouselImages () {
  if (count === 0) {
    $carouselImage.setAttribute("src", imagesSrc[count]);
    console.log(count);
    $iList[0].setAttribute("class", "fas fa-circle");
    $iList[4].setAttribute("class", "far fa-circle");
    count++;
  } else if (count < 4) {
    $carouselImage.setAttribute("src", imagesSrc[count]);
    console.log(count);
    $iList[count].setAttribute("class", "fas fa-circle");
    $iList[count - 1].setAttribute("class", "far fa-circle");
    count++;
  } else {
    $carouselImage.setAttribute("src", imagesSrc[count]);
    console.log(count);
    console.log("Lap")
    $iList[4].setAttribute("class", "fas fa-circle");
    $iList[count - 1].setAttribute("class", "far fa-circle");
    count = 0;
  }
}

timerImages = setInterval(carouselImages, 3000);

// <i class="fas fa-circle"></i> closed
// <i class="far fa-circle"></i> opened

// $iList[count].setAttribute("class", "fas fa-circle")
