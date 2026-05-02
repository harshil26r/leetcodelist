/*
Given a string s, find the length of the longest substring without duplicate characters.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let long = 0;
  let i = 0;
  let j = 0;
  let str = "";

  while (i < s.length) {
    if (!str.includes(s[i])) {
      str = str + s[i];
      i++;
      if (long < str.length) {
        long = str.length;
      }
    } else {
      j++;
      i = j;
      str = "";
    }
  }
  return long;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
