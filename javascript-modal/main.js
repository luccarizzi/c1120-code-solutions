
var openModalButton = document.querySelector(".open-modal-button");

var model = document.querySelector(".modal");
var modalClasses = "modal-position modal"

var modalContainer = document.querySelector(".container")
var modalContainerClasses = "container";

openModalButton.addEventListener("click", function (e) {
  model.className = modalClasses + " display";
  modalContainer.className = modalContainerClasses + " display"
})

var noButton = document.querySelector(".no-button");

noButton.addEventListener("click", function (e) {
  model.className = modalClasses;
  modalContainer.className = modalContainerClasses;
})
