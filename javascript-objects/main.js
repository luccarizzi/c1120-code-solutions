/* eslint-disable no-console, no-unused-vars, dot-notation */

var student = {
  firstName: "Lucca",
  lastName: "Rizzi",
  age: 28
};

var fullName = student.firstName + " " + student.lastName;
console.log("value of student.fullName:", fullName);

student.livesInIrvine = false;
console.log("value of student.liveInIrvine:", student.livesInIrvine);

student.previousOccupation = "Machinist";
console.log("value of student.previousOccupation:", student.previousOccupation);

var vehicle = {
  make: "Toyota",
  model: "Corolla",
  year: "2006"
};

vehicle["color"] = "Red";
console.log("value of vehicle['color']:", vehicle["color"])

vehicle["isConvertible"] = false;
console.log("value of vehicle['isConvertible']:", vehicle["isConvertible"])

console.log("value of vehicle:", vehicle);

var pet = {
  name: "Venus",
  type: "Dog"
}

delete pet.name;
delete pet.type;

console.log("value of pet:", pet);
