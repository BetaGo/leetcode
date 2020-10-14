/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 *
 * https://leetcode.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (32.94%)
 * Likes:    2192
 * Dislikes: 215
 * Total Accepted:    295.2K
 * Total Submissions: 859.1K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * Given a set of non-overlapping intervals, insert a new interval into the
 * intervals (merge if necessary).
 *
 * You may assume that the intervals were initially sorted according to their
 * start times.
 *
 *
 * Example 1:
 *
 *
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 *
 * Example 2:
 *
 *
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with
 * [3,5],[6,7],[8,10].
 *
 * Example 3:
 *
 *
 * Input: intervals = [], newInterval = [5,7]
 * Output: [[5,7]]
 *
 *
 * Example 4:
 *
 *
 * Input: intervals = [[1,5]], newInterval = [2,3]
 * Output: [[1,5]]
 *
 *
 * Example 5:
 *
 *
 * Input: intervals = [[1,5]], newInterval = [2,7]
 * Output: [[1,7]]
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= intervals[i][0] <= intervals[i][1] <= 10^5
 * intervals is sorted by intervals[i][0] in ascending order.
 * newInterval.length == 2
 * 0 <= newInterval[0] <= newInterval[1] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  insertOnly(intervals, newInterval);
  return mergeSorted(intervals);
};

function insertOnly(intervals, newInterval) {
  if (intervals.length === 0) {
    intervals.push(newInterval);
    return;
  }
  let low = 0;
  let high = intervals.length - 1;
  let current = newInterval[0];
  while (low <= high) {
    if (intervals[low][0] >= current) {
      if (low > 0) {
        intervals.splice(low, 0, newInterval);
      } else {
        intervals.unshift(newInterval);
      }
      return intervals;
    }
    if (intervals[high][0] <= current) {
      intervals.splice(high + 1, 0, newInterval);
      return intervals;
    }
    let mid = Math.floor((low + high) / 2);
    let v = intervals[mid][0];
    if (v === current) {
      intervals.splice(mid, 0, newInterval);
      return intervals;
    } else if (current > v) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}

function mergeSorted(intervals) {
  if (intervals.length < 2) return intervals;
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
}
// @lc code=end

exports.insert = insert;
