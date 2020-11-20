/* exported compact */

function compact(array) {
  var nonFalseyValues = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      nonFalseyValues.push(array[i]);
    }
  }
  return nonFalseyValues;
}
