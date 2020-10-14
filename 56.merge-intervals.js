/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (38.48%)
 * Likes:    5249
 * Dislikes: 323
 * Total Accepted:    686.4K
 * Total Submissions: 1.7M
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * Given a collection of intervals, merge all overlapping intervals.
 *
 * Example 1:
 *
 *
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into
 * [1,6].
 *
 *
 * Example 2:
 *
 *
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 *
 * NOTE: input types have been changed on April 15, 2019. Please reset to
 * default code definition to get new method signature.
 *
 *
 * Constraints:
 *
 *
 * intervals[i][0] <= intervals[i][1]
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let res = [];
  let last = intervals.reduce((a, b) => {
    if (a[1] < b[0]) {
      res.push(a);
      return b;
    } else {
      const max = a[1] > b[1] ? a[1] : b[1];
      return [a[0], max];
    }
  });
  if (last.length) {
    res.push(last);
  }
  return res;
};
// @lc code=end

exports.merge = merge;
