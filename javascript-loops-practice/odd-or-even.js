/* exported oddOrEven */

function oddOrEven(numbers) {
  var oddAndEvenArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddAndEvenArray.push("even");
    } else {
      oddAndEvenArray.push("odd");
    }
  }
  return oddAndEvenArray;
}
