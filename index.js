function flattenArray(arr) {
  return arr.flat(Infinity);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

module.exports = { flattenArray, reverseString };
