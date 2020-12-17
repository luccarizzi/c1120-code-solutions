/* exported defaults */

function defaults(target, source) {
  newTarget = {}
  for (var prop in target) {
    newTarget[prop] = target[prop];
  }
  Object.assign(target, source);
  for (var key in newTarget) {
    if (target.hasOwnProperty(key)) {
      target[key] = newTarget[key];
    }
  }
}
