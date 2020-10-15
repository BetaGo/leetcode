/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 *
 * https://leetcode.com/problems/sort-colors/description/
 *
 * algorithms
 * Medium (45.30%)
 * Likes:    4160
 * Dislikes: 240
 * Total Accepted:    568.8K
 * Total Submissions: 1.2M
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * Given an array nums with n objects colored red, white, or blue, sort them
 * in-place so that objects of the same color are adjacent, with the colors in
 * the order red, white, and blue.
 *
 * Here, we will use the integers 0, 1, and 2 to represent the color red,
 * white, and blue respectively.
 *
 * Follow up:
 *
 *
 * Could you solve this problem without using the library's sort function?
 * Could you come up with a one-pass algorithm using only O(1) constant
 * space?
 *
 *
 *
 * Example 1:
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 * Example :
 * Input: ums = [2,0,1]
 * Output: [0,1,2]
 * Example 3:
 * Input: nums = [0]
 * Output: [0]
 * Example 4:
 * Input: nums = [1]
 * Output: [1]
 *
 *
 * Constraints:
 *
 *
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] is 0, 1, or 2.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let redNum = 0;
  let whiteNum = 0;
  let blueNum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      redNum++;
    }
    if (nums[i] === 1) {
      whiteNum++;
    }
    if (nums[i] === 2) {
      blueNum++;
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (j < redNum) {
      nums[j] = 0;
      continue;
    }
    if (j < redNum + whiteNum) {
      nums[j] = 1;
      continue;
    }
    nums[j] = 2;
  }
};
// @lc code=end

exports.sortColors = sortColors;
