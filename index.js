function flattenArray(arr) {
  return arr.flat(Infinity);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

module.exports = { flattenArray, reverseString, isPalindrome };
