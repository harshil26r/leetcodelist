/*A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const orignal = s
    .toLowerCase()
    .split("")
    .filter((item) => {
      return (
        (48 <= item.charCodeAt(0) && 57 >= item.charCodeAt(0)) ||
        (97 <= item.charCodeAt(0) && 122 >= item.charCodeAt(0))
      );
    })
    .join("");
  const reverse = orignal.split("").reverse().join("");
  return orignal == reverse;
};

console.log(isPalindrome("A man, a plan, a canal: Panama1230"));
