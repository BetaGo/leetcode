/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 *
 * https://leetcode.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.57%)
 * Total Accepted:    346.2K
 * Total Submissions: 853.4K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty array of digits representing a non-negative integer, plus
 * one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero, except the
 * number 0 itself.
 *
 * Example 1:
 *
 *
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 *
 *
 * Example 2:
 *
 *
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 *
 *
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let m = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (m !== 1) {
      break;
    }
    let n = digits[i] + m;
    if (n === 10) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      }
    } else {
      digits[i] = n;
      m = 0;
    }
  }
  return digits;
};
