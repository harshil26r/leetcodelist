/*
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];

  for (let i = 1; i <= numRows; i++) {
    let row = [];
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i) {
        row.push(1);
      } else {
        row.push(result[i - 2][j - 2] + result[i - 2][j - 1]);
      }
    }
    result.push(row);
  }
  return result;
};

console.log(generate(5));
