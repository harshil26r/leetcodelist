/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function getRow(rowIndex) {
  const row = [1];

  let value = 1;

  for (let k = 1; k <= rowIndex; k++) {
    value = (value * (rowIndex - k + 1)) / k;
    row.push(value);
  }

  return row;
};

console.log(getRow(4));
// [1, 4, 6, 4, 1]
