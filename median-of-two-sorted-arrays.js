/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const newArray = [...nums1, ...nums2].sort((a, b) => a - b);

  if (newArray.length % 2 !== 0) {
    return newArray[(newArray.length - 1) / 2] / newArray.length;
  } else {
    const median = Math.floor((newArray.length - 1) / 2);
    return (newArray[median] + newArray[median + 1]) / 2;
  }
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
