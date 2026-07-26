/*
Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned). */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reverseNum = 0;
  while (x !== 0) {
    let digit = x % 10;
    reverseNum = reverseNum * 10 + digit;
    x = Math.trunc(x / 10);
  }
  return reverseNum;
};

console.log(reverse(123));
console.log(reverse(-214));
console.log(reverse(120));
