/*
 Given an integer x, return true if x is a palindrome, and false otherwise.
*/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const string = String(x);
  const reverse = string.split("").reverse().join("");

  return string === reverse;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
