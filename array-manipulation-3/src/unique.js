/* exported unique */

function unique(array) {

}

unique(['foo', 'bar', 'baz', 'qux', 'bar', 'qux', 'corge', 'baz']);
// -> ["foo", "bar", "baz", "qux", "corge"]
unique([1, 3, 3, 2, 5, 2, 1, 4, 5, 5]);
// -> [1, 3, 2, 5, 4]
unique([false, true, false, true]);
// -> [false, true]
unique([]);
// -> []
