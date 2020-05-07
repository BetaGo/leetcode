/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (39.28%)
 * Total Accepted:    253.8K
 * Total Submissions: 646K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 *
 *
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 *
 *
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 *
 * Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the
 * count-and-say sequence.
 *
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: 1
 * Output: "1"
 *
 *
 * Example 2:
 *
 *
 * Input: 4
 * Output: "1211"
 *
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) {
    return "1";
  }
  let s = "1";
  while (n > 1) {
    s = say(s);
    n--;
  }
  return s;
};

/**
 *
 * @param {string} str
 */
const say = s => {
  let count = 1;
  let sayResult = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      sayResult += `${count}${s[i]}`;
      count = 1;
    }
  }
  return sayResult;
};
