
function handleFocus(event) {
  console.log("focus was fired");
  console.log("event.target.name", event.target.name);
}

function handleBlur(event) {
  console.log("blur was fired");
  console.log("event.target.name", event.target.name);
}

function handleInput(event) {
  // console.log("event.target.name", event.target.name);
  console.log("value of name", event.target.value);
}

var inputUserName = document.getElementById("user-name");
var inputUserEmail = document.getElementById("user-email");
var textareaUserMessage = document.getElementById("user-message");

inputUserName.addEventListener("focus", handleFocus);
inputUserName.addEventListener("blur", handleBlur);
inputUserName.addEventListener("input", handleInput);

inputUserEmail.addEventListener("focus", handleFocus);
inputUserEmail.addEventListener("blur", handleBlur);
inputUserEmail.addEventListener("input", handleInput);

textareaUserMessage.addEventListener("focus", handleFocus);
textareaUserMessage.addEventListener("blur", handleBlur);
textareaUserMessage.addEventListener("input", handleInput);
