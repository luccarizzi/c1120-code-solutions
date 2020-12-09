/* exported Student */

function Student (firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

var aStudent = new Student ("Lucca", "Rizzi", "JavaScript");

Student.prototype.getFullName = function() {
  var fullName = this.firstName + ' ' + this.lastName;
  return fullName;
}

Student.prototype.getIntroduction = function() {
  var introduction = 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  return introduction;
}
