/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (39.09%)
 * Likes:    4266
 * Dislikes: 271
 * Total Accepted:    604.5K
 * Total Submissions: 1.5M
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and
 * describe its complexity.
 *
 * Example:
 *
 *
 * Input:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let l;
  let tmp;
  while (lists.length) {
    lists.sort((a, b) => a.val - b.val);
    for (let i = 0; i < lists.length; i++) {
      // if (!l) {
      //   l = new ListNode(lists[0].val);
      //   lists[0] = lists[0].next;
      //   tmp = l;
      // }
      let preNode = lists[i - 1];
      while (preNode && preNode.val <= lists[i].val) {
        tmp.next = new ListNode(preNode.val);
        preNode = preNode.next;
        tmp = tmp.next;
      }
      if (!l) {
        l = new ListNode(lists[i].val);
        lists[i] = lists[i].next;
        tmp = l;
      } else {
        tmp.next = new ListNode(lists[i].val);
        lists[i] = lists[i].next;
        tmp = tmp.next;
      }
    }
    lists = lists.filter((v) => v !== null);
  }
  return l;
};
// @lc code=end

exports.mergeKLists = mergeKLists;
