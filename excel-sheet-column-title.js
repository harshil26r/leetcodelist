/*
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
*/

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let columnTitle = "";

  while (columnNumber > 0) {
    const reminder = columnNumber % 26;

    columnTitle = String.fromCharCode(64 + reminder) + columnTitle;

    columnNumber = Math.floor(columnNumber / 26);
  }

  return columnTitle;
};

console.log(convertToTitle(1000));
