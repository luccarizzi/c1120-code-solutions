/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var firstStringNoSpace = firstString.replaceAll(" ", "");
  var secondStringNoSpace = secondString.replaceAll(" ", "");
  var testString = "";

  if (firstStringNoSpace.length !== secondStringNoSpace.length) {
    return false;
  }

  for (var i = 0; i < firstStringNoSpace.length; i++) {
    if (firstStringNoSpace[i] === secondStringNoSpace[secondStringNoSpace.search(firstStringNoSpace[i])]) {
      secondStringNoSpace = secondStringNoSpace.replace(firstStringNoSpace[i], "");
      testString += firstStringNoSpace[i];
    }
  }

  if (testString === firstStringNoSpace) {
    return true
  }
  return false;
}
