/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.05%)
 * Total Accepted:    588.8K
 * Total Submissions: 2.4M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 *
 *
 * Input: 123
 * Output: 321
 *
 *
 * Example 2:
 *
 *
 * Input: -123
 * Output: -321
 *
 *
 * Example 3:
 *
 *
 * Input: 120
 * Output: 21
 *
 *
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let negative = false;
  if (x < -2147483648 || x > 2147483647) {
    return 0;
  }
  if (x < 0) {
    negative = true;
    x = -x;
  }
  let t = x;
  let result = 0;
  while (x >= 1) {
    x = t / 10;
    t = Math.floor(x);
    result = result * 10 + (x * 10 - t * 10);
  }
  result = negative ? -result : result;
  if (result < -2147483648 || result > 2147483647) {
    result = 0;
  }
  return result;
};
