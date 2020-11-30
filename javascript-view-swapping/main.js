
var $tabContainer = document.querySelector(".tab-container");
var $tabList = document.querySelectorAll(".tab");
var $viewList = document.querySelectorAll(".view");

$tabContainer.addEventListener("click", function (e) {
  for (var i = 0; i < $tabList.length; i++) {
    if (e.target === $tabList[i]) {
      $tabList[i].className = "tab active";
    } else {
      $tabList[i].className = "tab";
    }
  }

  var dataViewAttr = e.target.getAttribute("data-view");
  for (var j = 0; j < $viewList.length; j++) {
    if (dataViewAttr === $viewList[j].getAttribute("data-view")) {
      $viewList[j].className = "view";
    } else {
      $viewList[j].className = "view hidden";
    }
  }
})
