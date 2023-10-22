/**
 * @param {string} s
 * @return {number}
 * Given a string s, find the length of the longest 
substring
 without repeating characters.
 Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */
var lengthOfLongestSubstring = function (s) {
  var c = 0;
  var str = "";

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (str.includes(element)) {
      str = element;
    } else {
      str += element;
      c = Math.max(c, str.length);
    }
  }
  return c;
};

export default lengthOfLongestSubstring;
