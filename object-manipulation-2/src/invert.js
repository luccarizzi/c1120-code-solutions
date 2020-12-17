/* exported invert */

function invert(source) {
  var invertedObject = {};
  for (var prop in source) {
    invertedObject[source[prop]] = prop;
  }
  return invertedObject;
}
