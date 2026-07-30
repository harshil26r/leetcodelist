/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let min = Infinity;
  for (const price of prices) {
    min = Math.min(min, price);
    const profit = price - min;
    max = Math.max(max, profit);
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
