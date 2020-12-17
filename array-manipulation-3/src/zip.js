/* exported zip */

function zip(first, second) {
  var zipped = [];
  if (first.length <= second.length) {
    for (var i = 0; i < first.length; i++) {
      zipped.push([first[i], second[i]]);
    }
  } else {
    for (var i = 0; i < second.length; i++) {
      zipped.push([first[i], second[i]]);
    }
  }
  return zipped;
}
