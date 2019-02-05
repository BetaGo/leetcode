/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.85%)
 * Total Accepted:    395.5K
 * Total Submissions: 1.2M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let commonPrefix = strs[0] || "";
  for (let i = 1; i < strs.length; i++) {
    commonPrefix = getCommonPrefix(commonPrefix, strs[i]);
    if (commonPrefix === "") {
      return commonPrefix;
    }
  }
  return commonPrefix;
};

/**
 *
 * @param {string} strA
 * @param {string} strB
 */
const getCommonPrefix = (strA, strB) => {
  for (let i = 0; i < strA.length; i++) {
    if (strA[i] !== strB[i]) {
      return strA.slice(0, i);
    }
  }
  return strA;
};
