/* exported filterOutStrings */

function filterOutStrings(values) {
  var filteredOutStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof(values[i]) !== typeof("")) {
      filteredOutStrings.push(values[i]);
    }
  }
  return filteredOutStrings;
}
