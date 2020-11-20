/* exported isVowel */

function isVowel(char) {
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < vowels.length; i++) {
    if (char === vowels[i] || char === vowels[i].toUpperCase()) {
      return true;
    }
  }
  return false;
}
