/* exported pick */

function pick(source, keys) {
  var pickedObject = {};
  for (var sourceKey in source) {
    for (var i = 0; i < keys.length; i++) {
      if (sourceKey === keys[i]) {
        pickedObject[keys[i]] = source[keys[i]];
      }
    }
  }
  return pickedObject;
}
