/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (45.33%)
 * Total Accepted:    492.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 *
 * Example:
 *
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let curList = l1.val <= l2.val ? l1 : l2;
  let largestList = l1.val <= l2.val ? l2 : l1;
  const mergedList = new ListNode(curList.val);
  let cursor = mergedList;
  let nextList = null;
  while ((nextList = curList.next)) {
    if (nextList.val <= largestList.val) {
      cursor.next = new ListNode(nextList.val);
      cursor = cursor.next;
      curList = curList.next;
    } else {
      cursor.next = new ListNode(largestList.val);
      curList = largestList;
      largestList = nextList;
      cursor = cursor.next;
    }
  }
  cursor.next = largestList;

  return mergedList;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
