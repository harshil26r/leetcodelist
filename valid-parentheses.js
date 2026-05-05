/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const array = [];

  for (const element of s) {
    if (element === "(" || element === "[" || element === "{") {
      array.push(map[element]);
    } else {
      const a = array.pop();
      if (a !== element) {
        return false;
      }
    }
  }

  return array.length === 0;
};

console.log(isValid("()[[]]"));
