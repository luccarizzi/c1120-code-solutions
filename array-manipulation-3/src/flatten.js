/* exported flatten */

function flatten(array) {
  var flatArray = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "object") {
      for (var j = 0; j < array[i].length; j++) {
        flatArray.push(array[i][j]);
      }
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
}
