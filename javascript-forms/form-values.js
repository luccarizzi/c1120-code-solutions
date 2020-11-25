
var contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var messageData = {
    Name: contactForm.elements[0].value,
    Email: contactForm.elements["email"].value,
    Message: contactForm.elements["user-message"].value
  }
  console.log(messageData);
  contactForm.reset();
});
