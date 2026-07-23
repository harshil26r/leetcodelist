/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let start = 1;
  let end = Math.floor(x / 2);
  let ans = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid * mid === x) {
      return mid;
    }

    if (mid * mid < x) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
};

console.log(mySqrt(125));
console.log(mySqrt(49));
console.log(mySqrt(121));
