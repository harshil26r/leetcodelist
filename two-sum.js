/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

const twoSum = (array, target) => {
  const map = {};
  for (let i = 0; i < array.length; i++) {
    const complimant = target - array[i];
    if (map[complimant] !== undefined) {
      return [map[complimant], i];
    }
    map[array[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
