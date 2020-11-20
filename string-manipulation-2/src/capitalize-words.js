/* exported capitalizeWords */

function capitalizeWords(string) {
  var capitalizedWords = '';
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      capitalizedWords += string[i].toUpperCase();
    } else if (string[i - 1] === ' ') {
      capitalizedWords += string[i].toUpperCase();
    } else {
      capitalizedWords += string[i].toLowerCase();
    }
  }
  return capitalizedWords;
}
