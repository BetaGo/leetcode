/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 *
 * https://leetcode.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (53.22%)
 * Likes:    3626
 * Dislikes: 69
 * Total Accepted:    462.6K
 * Total Submissions: 838.9K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top
 * left to bottom right which minimizes the sum of all numbers along its path.
 *
 * Note: You can only move either down or right at any point in time.
 *
 * Example:
 *
 *
 * Input:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * Output: 7
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  for (let i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  for (let j = 1; j < n; j++) {
    grid[0][j] += grid[0][j - 1];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (grid[i - 1][j] > grid[i][j - 1]) {
        grid[i][j] += grid[i][j - 1];
        pRecord.push([i, j - 1, grid[i][j - 1]]);
      } else {
        grid[i][j] += grid[i - 1][j];
        pRecord.push([i - 1, j, grid[i - 1][j]]);
      }
    }
  }
  return grid[m - 1][n - 1];
};
// @lc code=end
