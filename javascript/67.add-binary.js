/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (37.69%)
 * Total Accepted:    271.2K
 * Total Submissions: 719.7K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 *
 * The input strings are both non-empty and contains only characters 1 or 0.
 *
 * Example 1:
 *
 *
 * Input: a = "11", b = "1"
 * Output: "100"
 *
 * Example 2:
 *
 *
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let result = "";
  let cursor = 1;
  let m = 0;
  let i = Math.max(a.length, b.length);
  while (i > 0) {
    let va = cursor <= a.length ? parseInt(a[a.length - cursor]) : 0;
    let vb = cursor <= b.length ? parseInt(b[b.length - cursor]) : 0;
    let n = va + vb + m;
    if (n > 1) {
      m = 1;
      result = `${n - 2}${result}`;
    } else {
      m = 0;
      result = `${n}${result}`;
    }
    i--;
    cursor++;
    if (i === 0 && m === 1) {
      result = `1${result}`;
    }
  }
  return result;
};
