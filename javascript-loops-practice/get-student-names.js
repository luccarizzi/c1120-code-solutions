/* exported getStudentNames */

function getStudentNames(students) {
  var names = [];
  var newStudentsObject;
  for (var i = 0; i < students.length; i++) {
    names.push(students[i].name);

  }
  return names;
}
