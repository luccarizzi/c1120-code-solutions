/* exported countdown */

function countdown(number) {
  var countdown = [];
  for (var i = number; i !== -1; i--) {
    countdown.push(i)
  }
  return countdown;
}
