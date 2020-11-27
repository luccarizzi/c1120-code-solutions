/* exported isPalindromic */

function isPalindromic(string) {
  // debugger;
  var noSpaceString = string.replace(" ","");
  var test = [];
  for (var i = 0; i < noSpaceString.length; i++) {
    if (noSpaceString[i] === noSpaceString[noSpaceString.length - (i + 1)]) {
    test.push(true);
    } else {
      test.push(false);
    }
  }
  for (var j = 0; j < test.length; j++) {
    if (test[j] === false) {
      return false;
    }
  }
  return true;
}
