/* exported getKeys */

function getKeys(object) {
  var keys = [];
  for (key in object) {
    keys.push(key);
  }
  return keys;
}
