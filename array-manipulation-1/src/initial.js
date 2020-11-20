/* exported initial */

function initial(array) {
  var initialValue = [];
  for (var i = 0; i < array.length - 1; i++) {
    initialValue.push(array[i]);
  }
  return initialValue;
}
