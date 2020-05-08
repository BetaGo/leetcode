/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (33.22%)
 * Likes:    7711
 * Dislikes: 1980
 * Total Accepted:    1.3M
 * Total Submissions: 4M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Example:
 *
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let s = 0;
  let v = l1.val + l2.val;
  if (v >= 10) {
    v = v - 10;
    s = 1;
  }
  let l = new ListNode(v);
  let t = l;
  l1 = l1.next;
  l2 = l2.next;
  while (l1 || l2) {
    let a = l1 ? l1.val : 0;
    let b = l2 ? l2.val : 0;
    v = a + b + s;
    if (v >= 10) {
      v = v - 10;
      s = 1;
    } else {
      s = 0;
    }
    t.next = new ListNode(v);
    t = t.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (s) {
    t.next = new ListNode(s);
  }
  return l;
};
// @lc code=end

exports.addTwoNumbers = addTwoNumbers;
