
var $heading = document.querySelector("h1");

var $headingCounter = Number($heading.textContent);

var changeHeading = setInterval(timer, 1000)

function timer () {
  if ($headingCounter > 0) {
    console.log($headingCounter);
    $heading.textContent = $headingCounter;
    $headingCounter -= 1;
  } else {
    $heading.textContent = "~Earth Beeeelooowww Us~";
    clearInterval(changeHeading);
    console.log("Timer stopped.")
  }
}
