
function targetCallback (e) {
  console.log("e.target:", e.target);
  console.log("e.target.tagName:", e.target.tagName);
  if (e.target.tagName === "BUTTON") {
    var $target = e.target.closest(".task-list-item");
    console.log("closest .task-list-item:", $target);
    $target.remove();
  }
}

var $taskListClick = document.querySelector(".task-list");
$taskListClick.addEventListener("click", targetCallback, false);
