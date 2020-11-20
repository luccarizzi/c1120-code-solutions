/* exported numVowels */

function numVowels(string) {
  var vowelCounter = 0;
  var i = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  while (i < string.length) {
    if (string[i] === vowels[0] || string[i] === vowels[0].toUpperCase()) {
      vowelCounter++;
    } else if (string[i] === vowels[1] || string[i] === vowels[1].toUpperCase()) {
      vowelCounter++;
    } else if (string[i] === vowels[2] || string[i] === vowels[2].toUpperCase()) {
      vowelCounter++;
    } else if (string[i] === vowels[3] || string[i] === vowels[3].toUpperCase()) {
      vowelCounter++;
    } else if (string[i] === vowels[4] || string[i] === vowels[4].toUpperCase()) {
      vowelCounter++;
    }
    i++
  }
  return vowelCounter;
}
