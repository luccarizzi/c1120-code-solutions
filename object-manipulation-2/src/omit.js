/* exported omit */

function omit(source, keys) {
  // debugger;
  var omittedObject = {};
  for (var property in source) {
    omittedObject[property] = source[property];
    for (var i = 0; i < keys.length; i++) {
      for (var prop in omittedObject) {
        if (keys[i] === prop) {
          delete omittedObject[prop];
        }
      }
    }
  }
  return omittedObject;
}
