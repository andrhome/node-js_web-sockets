const array_counter = function (array) {
  return 'In the array contain ' + array.length + ' elements.';
};

const multiply = function (x, y) {
  return `${x} multiply ${y} equally ${x * y}`;
};

const some_value = 123;

module.exports = {
  array_counter: array_counter,
  multiply: multiply,
  some_value: some_value
};