/* exported pick */

function pick(source, keys) {
  var pickedObject = {};
  for (var value in source) {
    if (source[value] !== undefined) {
      for (var i = 0; i < keys.length; i++) {
        if (value === keys[i]) {
          pickedObject[keys[i]] = source[keys[i]];
        }
      }
    }
  }
  return pickedObject;
}
