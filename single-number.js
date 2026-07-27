/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const obj = nums.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0;
    }
    acc[curr] += 1;

    return acc;
  }, {});

  const item = Object.keys(obj).filter((key) => obj[key] === 1)?.[0];

  return parseInt(item);
};

/*
 var singleNumber = function(nums) {
   let result = 0;

   for(let num of nums){
    result ^= num;
   }
   return result;
}
*/
console.log(singleNumber([4, 1, 2, 1, 2]));
