/* exported getValues */

function getValues(object) {
  var values = [];
  for (value in object) {
    values.push(object[value]);
  }
  return values;
}
